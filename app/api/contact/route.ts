import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { LeadNotificationEmail } from '@/components/emails/lead-notification'
import { validateName, validateNote, validatePhone } from '@/lib/validation'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, phone, type, note, source = 'Website Bcons Central Park' } = body

    // 1. Validate Phone (Mandatory for all forms)
    const phoneValidation = validatePhone(phone)
    if (!phoneValidation.isValid) {
      return NextResponse.json(
        { success: false, error: phoneValidation.error || 'Số điện thoại không hợp lệ' },
        { status: 400 }
      )
    }

    // 2. Validate Name (If provided or from main contact form)
    let sanitizedName = 'Khách hàng'
    if (name && name.trim().length > 0) {
      const nameValidation = validateName(name)
      if (!nameValidation.isValid) {
        return NextResponse.json(
          { success: false, error: nameValidation.error || 'Họ và tên không hợp lệ' },
          { status: 400 }
        )
      }
      sanitizedName = nameValidation.sanitized
    }

    // 3. Validate Note
    let sanitizedNote = ''
    if (note) {
      const noteValidation = validateNote(note)
      if (!noteValidation.isValid) {
        return NextResponse.json(
          { success: false, error: noteValidation.error || 'Ghi chú vượt quá ký tự cho phép' },
          { status: 400 }
        )
      }
      sanitizedNote = noteValidation.sanitized
    }

    const apiKey = process.env.RESEND_API_KEY
    const recipientEmail = process.env.NOTIFICATION_EMAIL || 'longqt2701@gmail.com'
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'Bcons Central Park <onboarding@resend.dev>'
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://canhobconstamhiep.com'

    // 4. Check if Resend API key is configured
    if (!apiKey) {
      console.warn(
        '⚠️ [RESEND WARNING]: Chưa cấu hình RESEND_API_KEY trong file .env.local hoặc Vercel Environment Variables. Dữ liệu khách hàng nhận được:',
        {
          name: sanitizedName,
          phone: phoneValidation.sanitized,
          type,
          note: sanitizedNote,
          source,
        }
      )

      // Return success in development so client UX succeeds
      return NextResponse.json({
        success: true,
        message: 'Đăng ký thành công (Chế độ mô phỏng - Chưa cài RESEND_API_KEY)',
        lead: {
          name: sanitizedName,
          phone: phoneValidation.sanitized,
        },
      })
    }

    // 5. Send Real Email via Resend (Direct image URL, no attachment clutter)
    const resend = new Resend(apiKey)
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [recipientEmail],
      subject: `🔥 [Khách mới] ${sanitizedName !== 'Khách hàng' ? sanitizedName + ' - ' : ''}${phoneValidation.sanitized} cần tư vấn Bcons Central Park`,
      react: LeadNotificationEmail({
        customerName: sanitizedName,
        phone: phoneValidation.sanitized,
        unitType: type || '2 phòng ngủ',
        note: sanitizedNote,
        source,
        submittedAt: new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' }),
      }),
    })

    if (error) {
      console.error('❌ [RESEND ERROR]:', error)
      return NextResponse.json(
        { success: false, error: 'Không thể gửi email thông báo. Vui lòng thử lại sau.' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Gửi thông tin thành công! Chuyên viên sẽ liên hệ lại ngay.',
      id: data?.id,
    })
  } catch (err: any) {
    console.error('❌ [API ERROR]:', err)
    return NextResponse.json(
      { success: false, error: 'Có lỗi xảy ra trong quá trình xử lý. Vui lòng thử lại.' },
      { status: 500 }
    )
  }
}
