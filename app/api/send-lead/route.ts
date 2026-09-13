import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { ChatbotLeadNotificationEmail } from '@/components/emails/chatbot-lead-notification'
import { extractValidVietnamesePhone } from '@/app/api/chat/route'

interface ChatMessage {
  role: 'user' | 'model' | 'assistant'
  content: string
}

interface ExtractedLead {
  fullName: string
  phone: string
  apartmentType: string
  note: string
}

const EXTRACTION_PROMPT = `
Bạn là chuyên gia phân tích dữ liệu bất động sản. Nhiệm vụ của bạn là đọc toàn bộ lịch sử cuộc trò chuyện giữa khách hàng và AI tư vấn Bcons Tam Hiệp, sau đó trích xuất thông tin khách hàng thành một đối tượng JSON DUY NHẤT theo định dạng sau:
{
  "fullName": "Họ và tên khách hàng (hoặc 'Khách hàng quan tâm' nếu không rõ)",
  "phone": "Số điện thoại của khách hàng (chuỗi số chuẩn)",
  "apartmentType": "Loại căn hộ quan tâm (ví dụ: Studio 37-40m², 1PN 42-43m², 2PN 53-73m², 3PN 87-88m², hoặc 'Chưa chọn loại căn')",
  "note": "Tóm tắt ngắn gọn nhu cầu của khách (mua ở, đầu tư, vay ngân hàng, tiến độ bàn giao, thắc mắc...)"
}

CHỈ TRẢ VỀ JSON HỢP LỆ, KHÔNG KÈM THEO BẤT KỲ VĂN BẢN HOẶC GIẢI THÍCH NÀO KHÁC.
`

async function extractLeadWithGemini(messages: ChatMessage[], fallbackPhone: string): Promise<ExtractedLead> {
  const transcript = messages
    .map((m) => `${m.role === 'user' ? 'Khách' : 'AI'}: ${m.content}`)
    .join('\n')

  const geminiApiKey =
    process.env.GEMINI_API_KEY ||
    process.env.GOOGLE_GENERATIVE_AI_API_KEY ||
    process.env.GOOGLE_AI_API_KEY

  if (geminiApiKey) {
    try {
      const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${geminiApiKey}`

      const response = await fetch(geminiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          systemInstruction: {
            parts: [{ text: EXTRACTION_PROMPT }],
          },
          contents: [
            {
              role: 'user',
              parts: [{ text: `Dưới đây là lịch sử chat:\n${transcript}` }],
            },
          ],
          generationConfig: {
            responseMimeType: 'application/json',
            maxOutputTokens: 300,
            temperature: 0.2,
          },
        }),
      })

      if (response.ok) {
        const data = await response.json()
        const text = data?.candidates?.[0]?.content?.parts?.[0]?.text
        if (text) {
          const parsed = JSON.parse(text)
          return {
            fullName: parsed.fullName || 'Khách hàng quan tâm',
            phone: parsed.phone || fallbackPhone,
            apartmentType: parsed.apartmentType || 'Căn hộ Bcons Tam Hiệp',
            note: parsed.note || 'Tư vấn chi tiết dự án Bcons Tam Hiệp',
          }
        }
      }
    } catch (e) {
      console.warn('Gemini extraction fallback:', e)
    }
  }

  // Regex fallback extraction
  return fallbackExtraction(messages, fallbackPhone)
}

function fallbackExtraction(messages: ChatMessage[], phone: string): ExtractedLead {
  const fullText = messages
    .filter((m) => m.role === 'user')
    .map((m) => m.content)
    .join(' ')
  const lower = fullText.toLowerCase()

  let fullName = 'Khách hàng quan tâm'
  const namePatterns = [
    /(?:tôi tên là|mình tên là|tên tôi là|tên mình là|anh|chị|em|bác|chú|cô)\s+([A-ZÀ-Ỹa-zà-ỹ\s]{2,25})/i,
    /(?:^|\b)([A-ZÀ-Ỹ][a-zà-ỹ]+(?:\s+[A-ZÀ-Ỹ][a-zà-ỹ]+){1,3})\b/,
  ]
  for (const pattern of namePatterns) {
    const match = fullText.match(pattern)
    if (match && match[1] && !match[1].toLowerCase().includes('bcons') && !match[1].toLowerCase().includes('căn')) {
      fullName = match[1].trim()
      break
    }
  }

  let apartmentType = 'Căn hộ Bcons Tam Hiệp'
  if (lower.includes('studio')) apartmentType = 'Căn hộ Studio (37 – 40 m²)'
  else if (lower.includes('1pn') || lower.includes('1 phòng ngủ')) apartmentType = 'Căn hộ 1 phòng ngủ (42 – 43 m²)'
  else if (lower.includes('2pn') || lower.includes('2 phòng ngủ')) apartmentType = 'Căn hộ 2 phòng ngủ (53 – 73 m²)'
  else if (lower.includes('3pn') || lower.includes('3 phòng ngủ')) apartmentType = 'Căn hộ 3 phòng ngủ (87 – 88 m²)'
  else if (lower.includes('shophouse') || lower.includes('shop')) apartmentType = 'Shophouse khối đế thương mại'

  const notes: string[] = []
  if (lower.includes('vay') || lower.includes('ngân hàng') || lower.includes('lãi suất')) notes.push('Tư vấn gói vay & lãi suất 0%')
  if (lower.includes('ở') || lower.includes('mua ở')) notes.push('Nhu cầu mua ở')
  if (lower.includes('đầu tư') || lower.includes('cho thuê')) notes.push('Nhu cầu đầu tư / cho thuê')
  if (lower.includes('bàn giao') || lower.includes('tiến độ')) notes.push('Hỏi thời gian bàn giao')
  if (lower.includes('giá') || lower.includes('bảng giá')) notes.push('Nhận bảng giá chi tiết')

  return {
    fullName,
    phone,
    apartmentType,
    note: notes.length > 0 ? notes.join(' • ') : 'Tư vấn dự án Bcons Tam Hiệp',
  }
}

export async function POST(req: NextRequest) {
  try {
    let body: any
    try {
      body = await req.json()
    } catch {
      // In case sendBeacon sends plain text
      const rawText = await req.text()
      body = JSON.parse(rawText || '{}')
    }

    const { messages, phone: clientPhone } = body as {
      messages: ChatMessage[]
      phone?: string
    }

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: 'Không có dữ liệu tin nhắn.' }, { status: 400 })
    }

    // Only scan USER messages for phone (never AI — avoids detecting agent hotline)
    const userOnlyText = messages
      .filter((m) => m.role === 'user')
      .map((m) => m.content)
      .join(' ')
    const validPhone = clientPhone || extractValidVietnamesePhone(userOnlyText)

    if (!validPhone) {
      return NextResponse.json({ error: 'Chưa phát hiện số điện thoại hợp lệ để gửi lead.' }, { status: 400 })
    }

    // 1. Extract Structured Lead with Gemini
    const lead = await extractLeadWithGemini(messages, validPhone)

    // 2. Dispatch Email via Resend
    const resendApiKey = process.env.RESEND_API_KEY
    const recipientEmail = process.env.NOTIFICATION_EMAIL || 'longqt2701@gmail.com'
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'Bcons Tam Hiep AI <onboarding@resend.dev>'

    if (resendApiKey) {
      try {
        const resend = new Resend(resendApiKey)
        await resend.emails.send({
          from: fromEmail,
          to: [recipientEmail],
          subject: `🔥 [LEAD CHATBOT] Khách hàng mới: ${lead.fullName} - ${lead.phone} - Bcons Tam Hiệp`,
          react: ChatbotLeadNotificationEmail({
            customerName: lead.fullName,
            phone: lead.phone,
            unitType: lead.apartmentType,
            note: lead.note,
            chatHistory: messages,
          }),
        })
        console.log('✅ [SEND-LEAD] Resend email dispatched successfully to:', recipientEmail)
      } catch (resendError) {
        console.error('❌ [SEND-LEAD RESEND ERROR]:', resendError)
      }
    } else {
      console.warn('⚠️ [SEND-LEAD]: RESEND_API_KEY not configured. Lead data:', lead)
    }

    return NextResponse.json({
      success: true,
      lead,
    })
  } catch (error: any) {
    console.error('API /api/send-lead error:', error)
    return NextResponse.json(
      { error: error?.message || 'Lỗi xử lý gửi lead.' },
      { status: 500 }
    )
  }
}
