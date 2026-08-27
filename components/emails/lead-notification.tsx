import * as React from 'react'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components'

interface LeadNotificationEmailProps {
  customerName?: string
  phone: string
  unitType?: string
  note?: string
  source?: string
  submittedAt?: string
}

export function LeadNotificationEmail({
  customerName = 'Khách hàng quan tâm',
  phone = '0376671776',
  unitType = '2 phòng ngủ',
  note = '',
  source = 'Trang chủ - Form Đăng ký tư vấn chi tiết',
  submittedAt = new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' }),
}: LeadNotificationEmailProps) {
  const previewText = `🔥 [Khách mới] ${customerName} - ${phone} cần tư vấn Bcons Central Park`

  const getUnitTypeName = (type: string) => {
    switch (type) {
      case '1pn':
        return '1 phòng ngủ (43 – 45 m²)'
      case '2pn':
        return '2 phòng ngủ (51 – 58 m²)'
      case '3pn':
        return '3 phòng ngủ (85 – 86 m²)'
      case 'shop':
        return 'Shophouse thương mại khối đế'
      default:
        return type || 'Chưa chọn'
    }
  }

  return (
    <Html lang="vi">
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header Banner - Luxury Emerald & Gold */}
          <Section style={headerSection}>
            <Text style={brandSubtitle}>DỰ ÁN BCONS CENTRAL PARK TAM HIỆP</Text>
            <Heading style={headerHeading}>🔔 CÓ KHÁCH HÀNG MỚI ĐĂNG KÝ TƯ VẤN</Heading>
          </Section>

          {/* Main Content Area */}
          <Section style={cardBody}>
            <Text style={greetingText}>
              Xin chào <strong>Lê Ngọc Long</strong>,
            </Text>
            <Text style={introText}>
              Hệ thống website vừa nhận được một yêu cầu tư vấn mới từ khách hàng tiềm năng. Dưới đây là thông tin chi tiết:
            </Text>

            {/* Centered Customer Lead Card */}
            <Section style={infoBox}>
              <div style={infoBoxHeader}>
                📋 THÔNG TIN KHÁCH HÀNG
              </div>

              <div style={infoRow}>
                <div style={labelCol}>👤 Họ và tên:</div>
                <div style={nameValueCol}>{customerName || 'Chưa cung cấp'}</div>
              </div>

              <div style={infoRow}>
                <div style={labelCol}>📞 Số điện thoại:</div>
                <div style={phoneValueCol}>
                  <Link href={`tel:${phone}`} style={phoneLink}>
                    {phone}
                  </Link>
                  <span style={quickCallBadge}> (Bấm để gọi ngay)</span>
                </div>
              </div>

              <div style={infoRow}>
                <div style={labelCol}>🏢 Loại căn quan tâm:</div>
                <div style={valueCol}>{getUnitTypeName(unitType)}</div>
              </div>

              {note ? (
                <div style={infoRow}>
                  <div style={labelCol}>📝 Ghi chú / Lời nhắn:</div>
                  <div style={noteValueCol}>{note}</div>
                </div>
              ) : null}

              <div style={infoRow}>
                <div style={labelCol}>📍 Nguồn form:</div>
                <div style={valueCol}>{source}</div>
              </div>

              <div style={{ ...infoRow, borderBottom: 'none' }}>
                <div style={labelCol}>⏰ Thời gian gửi:</div>
                <div style={valueCol}>{submittedAt}</div>
              </div>
            </Section>

            {/* Quick Call CTA Button */}
            <Section style={ctaSection}>
              <Link href={`tel:${phone}`} style={ctaButton}>
                📞 GỌI ĐIỆN CHO KHÁCH NGAY ({phone})
              </Link>
            </Section>

            <Hr style={divider} />

            {/* Sales Tip */}
            <div style={tipBox}>
              <Text style={tipText}>
                💡 <strong>Bí quyết chốt deal:</strong> Liên hệ lại với khách hàng trong vòng <strong>5 – 15 phút</strong> đầu tiên sẽ gia tăng tỉ lệ chốt lịch hẹn tham quan nhà mẫu thực tế lên hơn <strong>80%</strong>.
              </Text>
            </div>
          </Section>

          {/* Footer Info */}
          <Section style={footerSection}>
            <Text style={footerText}>
              Email tự động từ hệ thống Landing Page <strong>Bcons Central Park Tam Hiệp</strong>
            </Text>
            <Text style={footerText}>
              Chuyên viên phụ trách: <strong>Lê Ngọc Long • Hotline: 0376 671 776 • Email: longqt2701@gmail.com</strong>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

// Inline Styles for Maximum Cross-Client Email Compatibility
const main = {
  backgroundColor: '#f1f5f3',
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  padding: '28px 0',
}

const container = {
  maxWidth: '600px',
  margin: '0 auto',
  backgroundColor: '#ffffff',
  borderRadius: '18px',
  overflow: 'hidden',
  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
  border: '1px solid #e0e8e4',
}

const headerSection = {
  backgroundColor: '#072018',
  padding: '30px 24px',
  textAlign: 'center' as const,
  borderBottom: '3px solid #e6c887',
}

const brandSubtitle = {
  color: '#e6c887',
  fontSize: '11px',
  fontWeight: '700',
  letterSpacing: '2px',
  textTransform: 'uppercase' as const,
  margin: '0 0 6px 0',
}

const headerHeading = {
  color: '#ffffff',
  fontSize: '20px',
  fontWeight: '800',
  margin: '0',
  lineHeight: '1.4',
}

const cardBody = {
  padding: '30px 28px 24px 28px',
}

const greetingText = {
  fontSize: '16px',
  color: '#072018',
  margin: '0 0 6px 0',
}

const introText = {
  fontSize: '14px',
  color: '#4a5d55',
  lineHeight: '1.6',
  margin: '0 0 22px 0',
}

const infoBox = {
  backgroundColor: '#f8faf9',
  border: '1px solid #d8e5df',
  borderRadius: '16px',
  padding: '20px 22px',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.02)',
}

const infoBoxHeader = {
  fontSize: '13px',
  fontWeight: '800',
  color: '#072018',
  letterSpacing: '1px',
  textTransform: 'uppercase' as const,
  borderBottom: '2px solid #e6c887',
  paddingBottom: '10px',
  marginBottom: '12px',
}

const infoRow = {
  padding: '10px 0',
  borderBottom: '1px dashed #e2ece7',
}

const labelCol = {
  color: '#556b62',
  fontSize: '12.5px',
  fontWeight: '600',
  marginBottom: '3px',
}

const valueCol = {
  color: '#0e1f18',
  fontSize: '14px',
  fontWeight: '600',
}

const nameValueCol = {
  color: '#072018',
  fontSize: '16px',
  fontWeight: '800',
}

const phoneValueCol = {
  fontSize: '16px',
  fontWeight: '800',
}

const phoneLink = {
  color: '#059669',
  textDecoration: 'underline',
  fontWeight: '800',
}

const quickCallBadge = {
  fontSize: '12px',
  color: '#059669',
  fontWeight: '700',
}

const noteValueCol = {
  color: '#0e1f18',
  fontSize: '13.5px',
  fontWeight: '500',
  fontStyle: 'italic',
  backgroundColor: '#edf4f0',
  padding: '8px 12px',
  borderRadius: '8px',
  marginTop: '4px',
  borderLeft: '3px solid #059669',
}

const ctaSection = {
  textAlign: 'center' as const,
  margin: '22px 0 10px 0',
}

const ctaButton = {
  backgroundColor: '#059669',
  backgroundImage: 'linear-gradient(to right, #059669, #047857)',
  color: '#ffffff',
  fontSize: '14px',
  fontWeight: '800',
  textDecoration: 'none',
  padding: '15px 32px',
  borderRadius: '50px',
  display: 'inline-block',
  textAlign: 'center' as const,
  boxShadow: '0 6px 18px rgba(5, 150, 105, 0.35)',
  letterSpacing: '0.5px',
}

const divider = {
  borderColor: '#e8f0ec',
  margin: '24px 0 18px 0',
}

const tipBox = {
  backgroundColor: '#fbf8f0',
  border: '1px solid #f0e2b8',
  borderRadius: '12px',
  padding: '14px 18px',
}

const tipText = {
  fontSize: '12.5px',
  color: '#71531e',
  lineHeight: '1.6',
  margin: '0',
}

const footerSection = {
  backgroundColor: '#f0f5f2',
  padding: '18px 24px',
  textAlign: 'center' as const,
  borderTop: '1px solid #e0e8e4',
}

const footerText = {
  fontSize: '11.5px',
  color: '#7a9186',
  margin: '4px 0',
  lineHeight: '1.5',
}
