import * as React from 'react'
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
} from '@react-email/components'

interface ChatMessage {
  role: 'user' | 'model' | 'assistant'
  content: string
}

interface ChatbotLeadNotificationEmailProps {
  customerName?: string
  phone: string
  unitType?: string
  note?: string
  chatHistory?: ChatMessage[]
  submittedAt?: string
}

export function ChatbotLeadNotificationEmail({
  customerName = 'Khách hàng quan tâm',
  phone = '0527143436',
  unitType = '2 phòng ngủ (53 – 73 m²)',
  note = 'Cần tư vấn gói vay ngân hàng và chính sách ân hạn',
  chatHistory = [
    { role: 'user', content: 'Căn 2 phòng ngủ giá bao nhiêu em?' },
    { role: 'model', content: 'Chào anh/chị! Căn 2PN (53–73m²) Bcons Tam Hiệp có giá chỉ từ 2,5 tỷ, thanh toán trước 15% nhận nhà. Anh/chị đang tìm căn để ở hay đầu tư ạ?' },
    { role: 'user', content: 'Mình mua ở, cần tư vấn gói vay ngân hàng' },
    { role: 'model', content: 'Dạ dự án hỗ trợ ân hạn gốc lãi 0% đến khi nhận nhà. Em có thể xin Họ tên và SĐT/Zalo để gửi bảng tính chi tiết từng tháng cho anh/chị tham khảo được không ạ?' },
    { role: 'user', content: 'Anh Tài, 0527143436' },
  ],
  submittedAt = new Date().toLocaleString('vi-VN', {
    timeZone: 'Asia/Ho_Chi_Minh',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).replace(',', ' •'),
}: ChatbotLeadNotificationEmailProps) {
  const cleanPhone = phone ? phone.replace(/\s+/g, '') : ''
  const previewText = `🔥 [LEAD CHATBOT] ${customerName} - ${phone} đăng ký tư vấn Bcons Tam Hiệp`

  return (
    <Html lang="vi">
      <Head>
        <meta name="color-scheme" content="light dark" />
        <meta name="supported-color-schemes" content="light dark" />
      </Head>
      <Preview>{previewText}</Preview>
      <Body style={mainBody}>
        <Container style={mainContainer}>
          <Section style={cardShell}>
            
            {/* 1. Header: Brand Bar + AI Chatbot Badge */}
            <table style={tableReset}>
              <tbody>
                <tr>
                  <td style={headerLeftTd}>
                    <div style={brandGoldText}>✦ BCONS CENTRAL PARK TAM HIỆP</div>
                    <Heading style={headerTitleText}>[LEAD CHATBOT] Khách Hàng Mới</Heading>
                  </td>
                  <td style={headerRightTd}>
                    <span style={chatbotBadgeStyle}>⚡ AI CHATBOT</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <div style={goldDividerLine} />

            {/* 2. Customer Lead Dossier */}
            <div style={leadDataSection}>
              
              {/* Họ và tên */}
              <div style={rowItem}>
                <div style={fieldLabelText}>HỌ VÀ TÊN KHÁCH HÀNG</div>
                <div style={nameValueText}>{customerName || 'Khách hàng (qua AI Chat)'}</div>
              </div>

              <div style={fieldDivider} />

              {/* Số điện thoại */}
              <div style={rowItem}>
                <div style={fieldLabelText}>SỐ ĐIỆN THOẠI LIÊN HỆ</div>
                <table style={tableReset}>
                  <tbody>
                    <tr>
                      <td style={phoneTd}>
                        <Link href={`tel:${cleanPhone}`} style={phoneLinkStyle}>
                          {phone}
                        </Link>
                      </td>
                      <td style={callBtnTd}>
                        <Link href={`tel:${cleanPhone}`} style={quickCallBtn}>
                          📞 Gọi ngay
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div style={fieldDivider} />

              {/* Loại căn quan tâm */}
              <div style={rowItem}>
                <div style={fieldLabelText}>LOẠI CĂN QUAN TÂM</div>
                <div style={badgeContainer}>
                  <span style={unitBadgeStyle}>
                    {unitType || 'Căn hộ Bcons Tam Hiệp'}
                  </span>
                </div>
              </div>

              {/* Nhu cầu / Ghi chú */}
              {note ? (
                <>
                  <div style={fieldDivider} />
                  <div style={rowItem}>
                    <div style={fieldLabelText}>NHU CẦU & THẮC MẮC CỦA KHÁCH</div>
                    <div style={noteBlockStyle}>
                      &ldquo;{note}&rdquo;
                    </div>
                  </div>
                </>
              ) : null}

              <div style={fieldDivider} />

              {/* Thời gian tiếp nhận */}
              <div style={rowItem}>
                <div style={fieldLabelText}>THỜI GIAN TIẾP NHẬN</div>
                <div style={timeValueText}>{submittedAt}</div>
              </div>

            </div>

            {/* 3. Luxury Gold Action CTA Button */}
            <div style={ctaWrapper}>
              <Link href={`tel:${cleanPhone}`} style={ctaFullGoldButton}>
                <table style={tableReset}>
                  <tbody>
                    <tr>
                      <td style={ctaTextTd}>
                        GỌI ĐIỆN CHO KHÁCH NGAY &bull; {phone}
                      </td>
                      <td style={ctaArrowTd}>
                        <div style={arrowCircleDark}>&rarr;</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Link>
            </div>

            {/* 4. Full Chat Conversation Transcript */}
            <div style={transcriptWrapper}>
              <div style={transcriptHeading}>LỊCH SỬ CUỘC TRÒ CHUYỆN</div>
              
              <table style={tableReset}>
                <tbody>
                  {chatHistory.map((msg, index) => {
                    const isUser = msg.role === 'user'
                    return (
                      <tr key={index}>
                        <td style={{ padding: '6px 0' }}>
                          <div style={{
                            backgroundColor: isUser ? '#d4a745' : '#041610',
                            color: isUser ? '#072018' : '#ffffff',
                            border: isUser ? 'none' : '1px solid rgba(230, 200, 135, 0.2)',
                            borderRadius: '12px',
                            padding: '10px 14px',
                          }}>
                            <div style={{
                              fontSize: '10px',
                              fontWeight: '800',
                              letterSpacing: '1px',
                              textTransform: 'uppercase' as const,
                              color: isUser ? '#072018' : '#e6c887',
                              marginBottom: '4px',
                            }}>
                              {isUser ? `👤 Khách hàng` : '🤖 AI Bcons'}
                            </div>
                            <div style={{
                              fontSize: '13px',
                              lineHeight: '1.5',
                            }}>
                              {msg.content}
                            </div>
                          </div>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>

            <div style={footerDividerLine} />

            {/* 5. Footer Signature */}
            <div style={footerArea}>
              <div style={footerNameText}>
                Giám đốc Sàn phụ trách: <strong>Lê Ngọc Long (Giám đốc Sàn Kinh Doanh Bcons PS Land)</strong> &bull; <strong style={{ color: '#e6c887' }}>0376 671 776</strong>
              </div>
              <div style={footerSubText}>
                Hệ thống AI Chatbot tự động từ website <Link href="https://www.canhobconstamhiep.com" style={footerLinkStyle}>canhobconstamhiep.com</Link>
              </div>
            </div>

          </Section>
        </Container>
      </Body>
    </Html>
  )
}

// ----------------------------------------------------
// CHATBOT LEAD NOTIFICATION STYLES
// ----------------------------------------------------
const mainBody = {
  backgroundColor: '#030a08',
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  padding: '30px 10px',
  margin: 0,
}

const mainContainer = {
  maxWidth: '600px',
  margin: '0 auto',
}

const cardShell = {
  backgroundColor: '#072018',
  borderRadius: '22px',
  border: '1px solid #d4a745',
  padding: '32px 26px 24px 26px',
  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8)',
}

const tableReset = {
  width: '100%',
  borderCollapse: 'collapse' as const,
  padding: 0,
  margin: 0,
}

const headerLeftTd = {
  verticalAlign: 'middle',
  textAlign: 'left' as const,
}

const headerRightTd = {
  verticalAlign: 'middle',
  textAlign: 'right' as const,
}

const brandGoldText = {
  color: '#e6c887',
  fontSize: '11px',
  fontWeight: '800',
  letterSpacing: '2px',
  textTransform: 'uppercase' as const,
  marginBottom: '4px',
}

const headerTitleText = {
  color: '#ffffff',
  fontSize: '21px',
  fontWeight: '800',
  margin: 0,
  lineHeight: '1.25',
  letterSpacing: '-0.2px',
}

const chatbotBadgeStyle = {
  backgroundColor: '#e6c887',
  color: '#072018',
  fontSize: '10px',
  fontWeight: '900',
  letterSpacing: '1px',
  textTransform: 'uppercase' as const,
  padding: '6px 14px',
  borderRadius: '20px',
  display: 'inline-block',
  boxShadow: '0 2px 10px rgba(230, 200, 135, 0.3)',
}

const goldDividerLine = {
  height: '1px',
  backgroundColor: '#d4a745',
  opacity: 0.35,
  margin: '18px 0 20px 0',
}

const leadDataSection = {
  backgroundColor: 'rgba(0, 0, 0, 0.25)',
  border: '1px solid rgba(230, 200, 135, 0.25)',
  borderRadius: '16px',
  padding: '18px 20px',
  marginBottom: '20px',
}

const rowItem = {
  padding: '2px 0',
}

const fieldLabelText = {
  color: '#8da69c',
  fontSize: '10.5px',
  fontWeight: '800',
  letterSpacing: '1.5px',
  textTransform: 'uppercase' as const,
  marginBottom: '4px',
}

const nameValueText = {
  color: '#ffffff',
  fontSize: '20px',
  fontWeight: '800',
  lineHeight: '1.3',
}

const phoneTd = {
  verticalAlign: 'middle',
}

const callBtnTd = {
  verticalAlign: 'middle',
  textAlign: 'right' as const,
}

const phoneLinkStyle = {
  color: '#e6c887',
  fontSize: '23px',
  fontWeight: '800',
  letterSpacing: '0.8px',
  textDecoration: 'none',
}

const quickCallBtn = {
  backgroundColor: '#0c3527',
  color: '#a7f3d0',
  border: '1px solid #10b981',
  fontSize: '12px',
  fontWeight: '700',
  padding: '6px 14px',
  borderRadius: '20px',
  textDecoration: 'none',
  display: 'inline-block',
}

const badgeContainer = {
  marginTop: '2px',
}

const unitBadgeStyle = {
  backgroundColor: '#041610',
  border: '1px solid #d4a745',
  color: '#e6c887',
  padding: '5px 14px',
  borderRadius: '50px',
  fontSize: '13px',
  fontWeight: '700',
  display: 'inline-block',
}

const noteBlockStyle = {
  backgroundColor: '#041610',
  borderLeft: '3px solid #e6c887',
  borderRadius: '0 10px 10px 0',
  padding: '10px 14px',
  color: '#ffffff',
  fontSize: '13.5px',
  fontStyle: 'italic',
  lineHeight: '1.5',
  marginTop: '2px',
}

const timeValueText = {
  color: '#e6c887',
  fontSize: '13.5px',
  fontWeight: '700',
}

const fieldDivider = {
  height: '1px',
  backgroundColor: 'rgba(255, 255, 255, 0.07)',
  margin: '12px 0',
}

const ctaWrapper = {
  margin: '0 0 24px 0',
}

const ctaFullGoldButton = {
  display: 'block',
  backgroundColor: '#e6c887',
  borderRadius: '14px',
  textDecoration: 'none',
  padding: '14px 18px',
  boxShadow: '0 8px 25px rgba(230, 200, 135, 0.35)',
}

const ctaTextTd = {
  color: '#072018',
  fontSize: '13px',
  fontWeight: '800',
  letterSpacing: '1px',
  textTransform: 'uppercase' as const,
  verticalAlign: 'middle',
  textAlign: 'left' as const,
}

const ctaArrowTd = {
  width: '32px',
  textAlign: 'right' as const,
  verticalAlign: 'middle',
}

const arrowCircleDark = {
  display: 'inline-block',
  width: '30px',
  height: '30px',
  borderRadius: '50%',
  backgroundColor: '#072018',
  color: '#e6c887',
  textAlign: 'center' as const,
  lineHeight: '30px',
  fontSize: '14px',
  fontWeight: '800',
}

const transcriptWrapper = {
  backgroundColor: '#051812',
  border: '1px solid rgba(230, 200, 135, 0.2)',
  borderRadius: '16px',
  padding: '18px',
  marginBottom: '20px',
}

const transcriptHeading = {
  color: '#e6c887',
  fontSize: '11px',
  fontWeight: '800',
  letterSpacing: '1.5px',
  textTransform: 'uppercase' as const,
  borderBottom: '1px solid rgba(230, 200, 135, 0.15)',
  paddingBottom: '10px',
  marginBottom: '14px',
}

const chatMessagesContainer = {
  display: 'flex',
  flexDirection: 'column' as const,
  gap: '10px',
}

const chatBubbleWrapper = {
  marginBottom: '10px',
}

const chatBubble = {
  padding: '10px 14px',
}

const senderLabel = {
  fontSize: '11px',
  fontWeight: '800',
  marginBottom: '3px',
}

const messageText = {
  fontSize: '13px',
  lineHeight: '1.45',
}

const footerDividerLine = {
  height: '1px',
  backgroundColor: 'rgba(255, 255, 255, 0.08)',
  margin: '8px 0 14px 0',
}

const footerArea = {
  textAlign: 'center' as const,
}

const footerNameText = {
  color: '#ffffff',
  fontSize: '12px',
  marginBottom: '3px',
}

const footerSubText = {
  color: '#709786',
  fontSize: '11px',
}

const footerLinkStyle = {
  color: '#e6c887',
  textDecoration: 'underline',
}
