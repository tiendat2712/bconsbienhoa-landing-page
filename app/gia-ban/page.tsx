import type { Metadata } from 'next'
import { SiteHeader } from '@/components/layout/site-header'
import { SiteFooter } from '@/components/layout/site-footer'
import { FloatingContact } from '@/components/layout/floating-contact'
import { SitePreferencesProvider } from '@/components/layout/site-preferences'
import { PricingDetail } from '@/components/pages/gia-ban/pricing-detail'
import { PricingFaq } from '@/components/pages/gia-ban/pricing-faq'
import { PricingRelated } from '@/components/pages/gia-ban/pricing-related'
import { DirectorConsultation } from '@/components/shared/director-consultation'
import { BreadcrumbSchema, FAQSchema } from '@/components/seo/json-ld'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Bảng Giá Bcons Central Park Tam Hiệp — Đơn Giá 49,9 Triệu/m², Từ 1,85 Tỷ & 3 PTTT',
  description:
    'Bảng giá căn hộ Bcons Central Park Tam Hiệp từ 1,85 tỷ (Studio) đến 4,39 tỷ (3PN), đơn giá công bố 49,9 triệu/m². 3 phương thức thanh toán linh hoạt, vốn 10 – 20% đến khi ký HĐMB, vay 70%, ân hạn nợ gốc 24 tháng, chiết khấu đến 8,5%.',
  keywords: [
    'bảng giá bcons central park',
    'bang gia bcons central park',
    'giá bán bcons tam hiệp',
    'gia ban bcons tam hiep',
    'tiến độ thanh toán bcons central park',
    'chính sách bán hàng bcons tam hiệp',
    'căn hộ 1 85 tỷ biên hòa',
    'vay ngân hàng bcons tam hiệp',
  ],
  alternates: { canonical: '/gia-ban' },
  openGraph: {
    title: 'Bảng Giá & Chính Sách Thanh Toán Bcons Central Park Tam Hiệp',
    description:
      'Bảng giá gốc từ chủ đầu tư Bcons Group: Studio từ 1,85 tỷ, 1PN từ 2,1 tỷ, 2PN từ 2,65 tỷ, 3PN từ 4,34 tỷ. Đơn giá 49,9 triệu/m² tim tường, chiết khấu 8,5%, hỗ trợ vay 70%.',
    url: 'https://www.canhobconstamhiep.com/gia-ban',
    siteName: 'Bcons Central Park Tam Hiệp',
    locale: 'vi_VN',
    type: 'website',
    images: [{ url: '/images/hero-towers.png', width: 1200, height: 630, alt: 'Bảng giá Bcons Central Park' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bảng Giá & Chính Sách Thanh Toán Bcons Central Park Tam Hiệp',
    description: 'Studio từ 1,85 tỷ, 1PN từ 2,1 tỷ, 2PN từ 2,65 tỷ, chiết khấu đến 8,5%, hỗ trợ vay 70%.',
    images: ['/images/hero-towers.png'],
  },
}

const pricingFaqs = [
  {
    question: 'Giá bán Bcons Central Park Tam Hiệp từ bao nhiêu?',
    answer:
      'Đơn giá công bố là 49,9 triệu đồng/m² diện tích tim tường (khoảng 54 – 56 triệu đồng/m² thông thuỷ). Mức giá dự kiến theo loại căn: Studio (37 – 40 m²) từ 1,85 – 2,00 tỷ đồng; căn 1PN (42 – 43 m²) từ 2,10 – 2,15 tỷ đồng; căn 2PN (53 – 73 m²) từ 2,65 – 3,64 tỷ đồng; và căn 3PN (87 – 88 m²) từ 4,34 – 4,39 tỷ đồng (chưa gồm VAT & phí bảo trì 2%).',
  },
  {
    question: 'Dự án có những phương thức thanh toán nào?',
    answer:
      'Chủ đầu tư áp dụng 3 phương thức thanh toán linh hoạt: Phương thức 01 (theo tiến độ 12 đợt, nhận chiết khấu 8,5%); Phương thức 02 (vay ngân hàng 70%, ân hạn nợ gốc và hỗ trợ lãi suất 24 tháng, vốn tự có 20%); và Phương thức 03 (vốn ban đầu chỉ 10% đến khi ký HĐMB, chủ đầu tư cam kết bảo lãnh trần lãi suất không quá 6,9%/năm trong 48 tháng). Cả 3 phương thức đều chỉ thu tối đa 70% trước khi nhận nhà.',
  },
  {
    question: 'Ngân hàng nào bảo lãnh và hỗ trợ cho vay tại Bcons Central Park?',
    answer:
      'Các ngân hàng đối tác chiến lược của Bcons Group gồm Vietcombank, MB Bank, ACB và Public Bank hỗ trợ vay vốn tối đa đến 70% giá trị căn hộ với thời hạn vay lên đến 20 – 35 năm, hỗ trợ thẩm định và duyệt hạn mức nhanh trong 24 giờ.',
  },
  {
    question: 'Khách hàng được bảo vệ pháp lý như thế nào theo Luật Kinh doanh BĐS 2023?',
    answer:
      'Cả 3 phương thức thanh toán đều tuân thủ nghiêm ngặt Luật Kinh doanh Bất động sản 2023: chỉ thu tối đa 70% giá trị hợp đồng trước khi bàn giao nhà, giữ lại 25% ở mốc bàn giao và 5% cuối cùng khi có thông báo nhận Giấy chứng nhận quyền sở hữu (sổ hồng).',
  },
]

export default function PricingPage() {
  return (
    <SitePreferencesProvider>
      <BreadcrumbSchema
        items={[
          { name: 'Trang chủ', url: 'https://www.canhobconstamhiep.com' },
          { name: 'Giá bán', url: 'https://www.canhobconstamhiep.com/gia-ban' },
        ]}
      />
      <FAQSchema faqs={pricingFaqs} />
      <SiteHeader />
      <main>
        <PricingDetail />
        <DirectorConsultation id="tu-van" />
        <PricingFaq />
        <PricingRelated />
      </main>
      <SiteFooter />
      <FloatingContact />
    </SitePreferencesProvider>
  )
}
