import { NextRequest, NextResponse } from 'next/server'

const SYSTEM_PROMPT = `
Bạn là Trợ lý AI tư vấn dự án Căn hộ Bcons Tam Hiệp (tên thương mại: Bcons Central Park Tam Hiệp), phát triển bởi Tập đoàn Bcons (Bcons Group).

THÔNG TIN DỰ ÁN BCONS TAM HIỆP:
- Vị trí: Số 236 Phan Trung, P. Tam Hiệp, TP. Biên Hòa, Đồng Nai (ngay trung tâm sầm uất, liền kề Vincom Plaza, chợ Tam Hiệp, BV Đa khoa Đồng Nai).
- Quy mô: Gần 3 ha, gồm các tháp căn hộ cao cấp và 113 căn shophouse thương mại khối đế, công viên trung tâm 7.700m², hồ bơi resort tràn bờ, phòng gym-yoga, trường mầm non, an ninh đa lớp 24/7.
- Bảng giá dự kiến:
  + Căn hộ Studio (37 – 40 m²): 1,9 – 2,0 tỷ.
  + Căn hộ 1 Phòng ngủ (42 – 43 m²): 2,0 – 2,3 tỷ.
  + Căn hộ 2 Phòng ngủ (53 – 73 m²): 2,5 – 2,8 tỷ.
  + Căn hộ 3 Phòng ngủ (87 – 88 m²): 3,4 – 3,8 tỷ.
- Chính sách tài chính:
  + Thanh toán đợt đầu chỉ 15% để ký HĐMB.
  + Trả góp linh hoạt 2–5%/đợt theo tiến độ xây dựng thực tế.
  + Ngân hàng hỗ trợ cho vay đến 70% giá trị căn hộ.
  + Ân hạn nợ gốc và hỗ trợ lãi suất 0% cho đến khi nhận nhà.
- Pháp lý: Sổ hồng sở hữu lâu dài, minh bạch chuẩn Bcons.
- Dự kiến bàn giao: Quý IV/2026 – 2027.
- Giám đốc Sàn phụ trách: Lê Ngọc Long - Giám đốc Sàn Kinh Doanh Bcons PS Land (Hotline: 0376 671 776).

QUY TẮC PHẢN HỒI (BẮT BUỘC TUÂN THỦ NGHIÊM NGẶT):
1. Xử lý câu hỏi ngoài lề (Off-topic): Nếu khách hỏi linh tinh, ngớ ngẩn, trêu đùa hoặc chuyện riêng tư (thời tiết, tuổi tác, chuyện phiếm...), hãy trả lời ngắn gọn, vui vẻ, hóm hỉnh và khéo léo dẫn về dự án:
   "Em là AI tư vấn Bcons Tam Hiệp nên chỉ rành về dự án thôi ạ! Anh/chị đang quan tâm căn hộ mấy phòng ngủ để em hỗ trợ nhé?"
2. Trả lời trọng tâm: Luôn giải đáp ngắn gọn, súc tích thắc mắc của khách (tối đa 2–3 câu).
3. Thu thập thông tin khách hàng: Cuối mỗi câu trả lời, BẮT BUỘC phải đặt một câu hỏi mở tự nhiên, linh hoạt và biến đổi đa dạng (KHÔNG lặp lại 1 câu hỏi cố định) để xin Họ tên, Số điện thoại/Zalo, Loại căn quan tâm hoặc Nhu cầu tài chính.
4. Khi khách đã để lại Họ tên hoặc SĐT: Cảm ơn chân thành, xác nhận lại thông tin và thông báo Giám đốc Sàn Lê Ngọc Long sẽ gửi bảng giá và bảng tính dòng tiền chi tiết qua Zalo/SĐT ngay.
5. Xưng hô: em – anh/chị. Giọng điệu thân thiện, nhiệt tình, chuyên nghiệp.
`

// ─── Phone Detection Utilities (shared) ────────────────────────────
interface ChatMessage {
  role: 'user' | 'model' | 'assistant'
  content: string
}

const VIETNAM_PHONE_REGEX = /(?:(?:\+84|84|0)(?:3|5|7|8|9)[0-9\s.-]{8,12})/g

const JUNK_PHONES = new Set([
  '0123456789', '0987654321',
  '0900000000', '0911111111', '0922222222', '0933333333',
  '0944444444', '0955555555', '0966666666', '0977777777',
  '0988888888', '0999999999',
  '0300000000', '0500000000', '0700000000', '0800000000',
])

export function extractValidVietnamesePhone(text: string): string | null {
  if (!text) return null
  const matches = text.match(VIETNAM_PHONE_REGEX)
  if (!matches) return null

  for (const raw of matches) {
    let cleaned = raw.replace(/[\s.-]/g, '')
    if (cleaned.startsWith('+84')) cleaned = '0' + cleaned.slice(3)
    else if (cleaned.startsWith('84') && cleaned.length > 9) cleaned = '0' + cleaned.slice(2)
    cleaned = cleaned.replace(/\D/g, '')

    if (/^(03|05|07|08|09)[0-9]{8}$/.test(cleaned) && !JUNK_PHONES.has(cleaned)) {
      return cleaned
    }
  }
  return null
}

// ─── POST Handler ──────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { messages } = body as { messages: ChatMessage[] }

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: 'Danh sách tin nhắn không hợp lệ.' }, { status: 400 })
    }

    const lastUserMessage = messages[messages.length - 1]?.content || ''
    // CRITICAL: Only scan USER messages for phone numbers to avoid detecting
    // the sales agent hotline (0376671776) from AI responses
    const userOnlyText = messages
      .filter((m) => m.role === 'user')
      .map((m) => m.content)
      .join(' ')
    const detectedPhone =
      extractValidVietnamesePhone(lastUserMessage) ||
      extractValidVietnamesePhone(userOnlyText)

    // 1. Trim history to latest 12 turns to manage token budget
    const recentMessages = messages.slice(-12)

    // 2. Build Gemini `contents` array (must start with role:'user')
    const contents: Array<{ role: 'user' | 'model'; parts: Array<{ text: string }> }> = []

    for (const msg of recentMessages) {
      const role = msg.role === 'user' ? 'user' : 'model'
      const text = msg.content?.trim()
      if (!text) continue
      if (contents.length === 0 && role === 'model') continue // skip leading model messages

      const last = contents[contents.length - 1]
      if (last && last.role === role) {
        last.parts[0].text += `\n${text}`
      } else {
        contents.push({ role, parts: [{ text }] })
      }
    }

    if (contents.length === 0) {
      contents.push({ role: 'user', parts: [{ text: lastUserMessage }] })
    }

    // 3. Call Gemini REST API — let systemInstruction handle ALL responses
    const geminiApiKey =
      process.env.GEMINI_API_KEY ||
      process.env.GOOGLE_GENERATIVE_AI_API_KEY ||
      process.env.GOOGLE_AI_API_KEY

    let reply = ''

    if (!geminiApiKey) {
      return NextResponse.json(
        {
          reply: 'Dạ hệ thống AI đang bảo trì. Anh/chị vui lòng liên hệ trực tiếp Hotline 0376 671 776 (Lê Ngọc Long) để được hỗ trợ nhanh nhất ạ!',
          phoneDetected: Boolean(detectedPhone),
          validPhone: detectedPhone || null,
        }
      )
    }

    try {
      const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${geminiApiKey}`

      const response = await fetch(geminiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
          contents,
          generationConfig: {
            maxOutputTokens: 1024,
            temperature: 0.75,
          },
        }),
      })

      if (!response.ok) {
        const errBody = await response.text()
        console.error('Gemini REST API Error:', response.status, errBody)
        reply = 'Dạ hệ thống AI đang tải lại. Anh/chị vui lòng thử lại hoặc gọi Hotline 0376 671 776 để được hỗ trợ nhanh nhất ạ!'
      } else {
        const data = await response.json()
        const candidateText = data?.candidates?.[0]?.content?.parts?.[0]?.text
        reply = candidateText?.trim() || 'Dạ em chưa hiểu ý anh/chị lắm. Anh/chị có thể hỏi lại hoặc gọi Hotline 0376 671 776 để được tư vấn chi tiết nhé!'
      }
    } catch (err: any) {
      console.error('Gemini API fetch error:', err)
      reply = 'Dạ hệ thống AI đang bận. Anh/chị vui lòng liên hệ Hotline 0376 671 776 để được hỗ trợ trực tiếp ạ!'
    }

    return NextResponse.json({
      reply,
      phoneDetected: Boolean(detectedPhone),
      validPhone: detectedPhone || null,
    })
  } catch (error: any) {
    console.error('API /api/chat error:', error)
    return NextResponse.json(
      { error: error?.message || 'Lỗi xử lý tin nhắn.' },
      { status: 500 }
    )
  }
}
