import * as React from 'react'
import {
  Body,
  Container,
  Head,
  Html,
  Link,
  Preview,
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
  phone = '0527143436',
  unitType = '2 phòng ngủ',
  note = '',
  source = 'Trang chủ - Form Đăng ký tư vấn chi tiết',
  submittedAt = new Date().toLocaleString('vi-VN', {
    timeZone: 'Asia/Ho_Chi_Minh',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).replace(',', ' •'),
}: LeadNotificationEmailProps) {
  const cleanPhone = phone ? phone.replace(/[^\d+]/g, '') : ''

  const formatPhoneNumber = (num: string) => {
    const digits = num.replace(/\D/g, '')
    if (digits.length === 10) {
      return `${digits.slice(0, 4)} ${digits.slice(4, 7)} ${digits.slice(7)}`
    }
    return num
  }

  const formattedPhone = formatPhoneNumber(phone)

  const getUnitTypeName = (type?: string) => {
    if (!type) return 'Căn hộ 2 phòng ngủ (53 – 73 m²)'
    const lower = type.toLowerCase()
    if (lower === 'studio' || lower.includes('studio')) return 'Studio (37 – 40 m²)'
    if (lower === '1pn' || lower.includes('1pn') || lower.includes('1 phòng ngủ')) return '1 phòng ngủ (42 – 43 m²)'
    if (lower === '2pn' || lower.includes('2pn') || lower.includes('2 phòng ngủ')) return '2 phòng ngủ (53 – 73 m²)'
    if (lower === '3pn' || lower.includes('3pn') || lower.includes('3 phòng ngủ')) return '3 phòng ngủ (87 – 88 m²)'
    if (lower === 'shop' || lower.includes('shop')) return 'Shophouse thương mại'
    return type
  }

  const previewText = `🔥 [Khách mới] ${customerName} - ${formattedPhone} cần tư vấn Bcons Central Park`

  return (
    <Html lang="vi">
      <Head>
        <meta name="color-scheme" content="light" />
        <meta name="supported-color-schemes" content="light" />
      </Head>
      <Preview>{previewText}</Preview>
      <Body style={bodyStyle}>
        <Container style={containerShell}>
          
          {/* 1. Header: Forest Emerald #072018 & Champagne Gold #E6C887 */}
          <div style={headerSection}>
            <table role="presentation" border={0} cellPadding={0} cellSpacing={0} style={wFull}>
              <tbody>
                <tr>
                  <td style={headerLeftCol}>
                    <div style={brandGoldText}>✦ BCONS CENTRAL PARK TAM HIỆP</div>
                    <div style={headerTitleText}>KHÁCH HÀNG MỚI ĐĂNG KÝ TƯ VẤN</div>
                  </td>
                  <td style={headerRightCol}>
                    <span style={leadStatusBadge}>LEAD MỚI</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 2. Recipient & Meta Strip (Clean, Minimalist) */}
          <div style={metaStrip}>
            <table role="presentation" border={0} cellPadding={0} cellSpacing={0} style={wFull}>
              <tbody>
                <tr>
                  <td style={recipientCol}>
                    Kính gửi Quản lý: <strong style={{ color: '#072018' }}>Lê Ngọc Long</strong>
                  </td>
                  <td style={timeCol}>
                    ⏰ {submittedAt}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 3. Executive Dossier Section */}
          <div style={dossierSection}>
            
            {/* Customer Name */}
            <div style={nameBlock}>
              <div style={microLabel}>HỌ VÀ TÊN KHÁCH HÀNG</div>
              <div style={customerNameStyle}>
                👤 {customerName || 'Khách hàng quan tâm'}
              </div>
            </div>

            {/* Spotlight Phone Box - Full Width (Never Wraps) + Dual Balanced Action Buttons */}
            <div style={phoneCardWrapper}>
              <div style={phoneMicroLabel}>SỐ ĐIỆN THOẠI KHÁCH HÀNG</div>
              
              <div style={phoneLinkContainer}>
                <Link href={`tel:${cleanPhone}`} style={phoneLinkStyle}>
                  📞 {formattedPhone}
                </Link>
              </div>

              <table role="presentation" border={0} cellPadding={0} cellSpacing={0} style={wFull}>
                <tbody>
                  <tr>
                    <td style={callBtnCell}>
                      <Link href={`tel:${cleanPhone}`} style={callBtnStyle}>
                        Gọi điện ngay
                      </Link>
                    </td>
                    <td style={zaloBtnCell}>
                      <Link href={`https://zalo.me/${cleanPhone}`} style={zaloBtnStyle}>
                        Nhắn qua Zalo
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 2-Column Specs: Căn quan tâm & Nguồn Form */}
            <div style={specsBox}>
              <table role="presentation" border={0} cellPadding={0} cellSpacing={0} style={wFull}>
                <tbody>
                  <tr>
                    <td style={specLeftCol}>
                      <div style={microLabel}>🏢 NHU CẦU CĂN HỘ</div>
                      <div style={specValueText}>{getUnitTypeName(unitType)}</div>
                    </td>
                    <td style={specRightCol}>
                      <div style={microLabel}>📍 NGUỒN TIẾP NHẬN</div>
                      <div style={specValueText}>{source}</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Customer Note (Rendered only when note exists) */}
            {note && note.trim().length > 0 ? (
              <div style={noteContainer}>
                <div style={microLabel}>📝 LỜI NHẮN TỪ KHÁCH HÀNG:</div>
                <div style={noteBox}>&ldquo;{note}&rdquo;</div>
              </div>
            ) : null}

          </div>

          {/* 4. Minimalist Executive Footer */}
          <div style={footerSection}>
            <table role="presentation" border={0} cellPadding={0} cellSpacing={0} style={wFull}>
              <tbody>
                <tr>
                  <td style={footerLeftCol}>
                    Bcons Central Park Tam Hiệp • 236 Phan Trung, TP. Biên Hòa
                  </td>
                  <td style={footerRightCol}>
                    Quản lý: <strong>Lê Ngọc Long</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </Container>
      </Body>
    </Html>
  )
}

// -----------------------------------------------------------------------------
// EXECUTIVE MINIMALIST STYLES: Forest Emerald (#072018) & Champagne Gold (#E6C887)
// -----------------------------------------------------------------------------

const fontStack =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'

const wFull: React.CSSProperties = {
  width: '100%',
  borderCollapse: 'collapse',
}

const bodyStyle: React.CSSProperties = {
  backgroundColor: '#f3f6f4',
  fontFamily: fontStack,
  margin: '0',
  padding: '16px 8px',
  WebkitFontSmoothing: 'antialiased',
}

const containerShell: React.CSSProperties = {
  maxWidth: '520px',
  margin: '0 auto',
  backgroundColor: '#ffffff',
  borderRadius: '12px',
  overflow: 'hidden',
  border: '1px solid #dce5e0',
  boxShadow: '0 4px 16px rgba(7, 32, 24, 0.05)',
}

// Header
const headerSection: React.CSSProperties = {
  backgroundColor: '#072018',
  borderBottom: '2px solid #e6c887',
  padding: '12px 18px',
}

const headerLeftCol: React.CSSProperties = {
  verticalAlign: 'middle',
  textAlign: 'left',
}

const headerRightCol: React.CSSProperties = {
  verticalAlign: 'middle',
  textAlign: 'right',
  width: '90px',
}

const brandGoldText: React.CSSProperties = {
  color: '#e6c887',
  fontSize: '9.5px',
  fontWeight: '700',
  letterSpacing: '1.2px',
  textTransform: 'uppercase',
  margin: '0 0 2px 0',
}

const headerTitleText: React.CSSProperties = {
  color: '#ffffff',
  fontSize: '13.5px',
  fontWeight: '800',
  letterSpacing: '0.2px',
  margin: '0',
  lineHeight: '1.3',
}

const leadStatusBadge: React.CSSProperties = {
  backgroundColor: 'rgba(230, 200, 135, 0.15)',
  color: '#e6c887',
  border: '1px solid rgba(230, 200, 135, 0.4)',
  borderRadius: '20px',
  padding: '3px 8px',
  fontSize: '10px',
  fontWeight: '700',
  display: 'inline-block',
  whiteSpace: 'nowrap',
  letterSpacing: '0.5px',
}

// Meta Strip
const metaStrip: React.CSSProperties = {
  backgroundColor: '#f8faf9',
  borderBottom: '1px solid #e5ece7',
  padding: '7px 18px',
  fontSize: '11.5px',
}

const recipientCol: React.CSSProperties = {
  color: '#4e6358',
  verticalAlign: 'middle',
  textAlign: 'left',
}

const timeCol: React.CSSProperties = {
  color: '#657d70',
  verticalAlign: 'middle',
  textAlign: 'right',
  fontSize: '11px',
}

// Dossier Section
const dossierSection: React.CSSProperties = {
  padding: '14px 18px',
}

const nameBlock: React.CSSProperties = {
  marginBottom: '10px',
}

const microLabel: React.CSSProperties = {
  fontSize: '9.5px',
  fontWeight: '700',
  color: '#6c8075',
  letterSpacing: '0.6px',
  textTransform: 'uppercase',
  marginBottom: '2px',
}

const customerNameStyle: React.CSSProperties = {
  fontSize: '16px',
  fontWeight: '800',
  color: '#072018',
  lineHeight: '1.2',
}

// Phone Card (Full Width + Two Balanced 50% Buttons)
const phoneCardWrapper: React.CSSProperties = {
  backgroundColor: '#f8faf9',
  border: '1px solid #dce5e0',
  borderRadius: '10px',
  padding: '12px 14px',
  marginBottom: '10px',
}

const phoneMicroLabel: React.CSSProperties = {
  fontSize: '9.5px',
  fontWeight: '700',
  color: '#5a7065',
  letterSpacing: '0.6px',
  textTransform: 'uppercase',
  marginBottom: '3px',
}

const phoneLinkContainer: React.CSSProperties = {
  marginBottom: '10px',
}

const phoneLinkStyle: React.CSSProperties = {
  fontSize: '20px',
  fontWeight: '900',
  color: '#072018',
  textDecoration: 'none',
  letterSpacing: '0.8px',
  lineHeight: '1.2',
  display: 'inline-block',
}

const callBtnCell: React.CSSProperties = {
  width: '50%',
  paddingRight: '5px',
}

const zaloBtnCell: React.CSSProperties = {
  width: '50%',
  paddingLeft: '5px',
}

const callBtnStyle: React.CSSProperties = {
  backgroundColor: '#072018',
  color: '#ffffff',
  border: '1px solid #e6c887',
  borderRadius: '50px',
  padding: '9px 0',
  fontSize: '11.5px',
  fontWeight: '700',
  textDecoration: 'none',
  display: 'block',
  textAlign: 'center',
  letterSpacing: '0.3px',
}

const zaloBtnStyle: React.CSSProperties = {
  backgroundColor: '#ffffff',
  color: '#072018',
  border: '1px solid #072018',
  borderRadius: '50px',
  padding: '9px 0',
  fontSize: '11.5px',
  fontWeight: '700',
  textDecoration: 'none',
  display: 'block',
  textAlign: 'center',
  letterSpacing: '0.3px',
}

// Specs Box
const specsBox: React.CSSProperties = {
  backgroundColor: '#f8faf9',
  border: '1px solid #e2eae5',
  borderRadius: '10px',
  padding: '9px 14px',
  marginBottom: '10px',
}

const specLeftCol: React.CSSProperties = {
  width: '52%',
  verticalAlign: 'top',
  paddingRight: '10px',
}

const specRightCol: React.CSSProperties = {
  width: '48%',
  verticalAlign: 'top',
  borderLeft: '1px solid #e5ece7',
  paddingLeft: '10px',
}

const specValueText: React.CSSProperties = {
  fontSize: '12.5px',
  fontWeight: '700',
  color: '#072018',
  lineHeight: '1.3',
}

// Note Container
const noteContainer: React.CSSProperties = {
  marginTop: '2px',
}

const noteBox: React.CSSProperties = {
  backgroundColor: '#f8faf9',
  border: '1px solid #e2eae5',
  borderLeft: '3px solid #072018',
  borderRadius: '4px',
  padding: '8px 12px',
  fontSize: '12.5px',
  fontWeight: '500',
  fontStyle: 'italic',
  color: '#072018',
  lineHeight: '1.4',
}

// Footer
const footerSection: React.CSSProperties = {
  backgroundColor: '#f8faf9',
  borderTop: '1px solid #e5ece7',
  padding: '8px 18px',
  fontSize: '10.5px',
  color: '#6e8579',
}

const footerLeftCol: React.CSSProperties = {
  textAlign: 'left',
  verticalAlign: 'middle',
}

const footerRightCol: React.CSSProperties = {
  textAlign: 'right',
  verticalAlign: 'middle',
}
