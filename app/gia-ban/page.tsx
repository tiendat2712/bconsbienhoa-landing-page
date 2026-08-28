import type { Metadata } from 'next'
import { SiteHeader } from '@/components/layout/site-header'
import { SiteFooter } from '@/components/layout/site-footer'
import { FloatingContact } from '@/components/layout/floating-contact'
import { SitePreferencesProvider } from '@/components/layout/site-preferences'
import { PricingDetail } from '@/components/pages/gia-ban/pricing-detail'
import { PricingFaq } from '@/components/pages/gia-ban/pricing-faq'
import { PricingRelated } from '@/components/pages/gia-ban/pricing-related'
import { Contact } from '@/components/home/contact'
import { BreadcrumbSchema, FAQSchema } from '@/components/seo/json-ld'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Bảng Giá Bcons Central Park Tam Hiệp — Giá Từ 1,9 Tỷ & Trả Góp 0% Mới Nhất 2026',
  description:
    'Bảng giá căn hộ Bcons Central Park Tam Hiệp từ 1,9 tỷ (Studio) đến 3,8 tỷ (3PN). Thanh toán đợt đầu 15%, ngân hàng hỗ trợ vay 70%, ân hạn nợ gốc và lãi suất 0% đến khi nhận nhà.',
  alternates: { canonical: '/gia-ban' },
  openGraph: {
    title: 'Bảng Giá & Chính Sách Thanh Toán Bcons Central Park Tam Hiệp',
    description:
      'Cập nhật bảng giá gốc từ chủ đầu tư Bcons Group. Giá dự kiến từ 1,9 tỷ/căn, chiết khấu thanh toán sớm hấp dẫn.',
    url: 'https://www.canhobconstamhiep.com/gia-ban',
    images: [{ url: '/images/hero-towers.png', width: 1200, height: 630, alt: 'Bảng giá Bcons Central Park' }],
  },
}

const pricingFaqs = [
  {
    question: 'Giá bán Bcons Central Park Tam Hiệp từ bao nhiêu?',
    answer:
      'Giá bán dự kiến từ 1,9 tỷ đồng cho căn hộ Studio (37 – 40 m²), 2,0 – 2,3 tỷ cho căn 1PN (42 – 43 m²), 2,5 – 2,8 tỷ cho căn 2PN (53 – 73 m²) và 3,4 – 3,8 tỷ cho căn 3PN (87 – 88 m²).',
  },
  {
    question: 'Phương thức thanh toán Bcons Phan Trung thế nào?',
    answer:
      'Dự án áp dụng thanh toán theo tiến độ xây dựng thực tế, mỗi đợt 2 – 5%, ngân hàng hỗ trợ vay đến 70% giá trị căn hộ với chính sách ân hạn nợ gốc.',
  },
  {
    question: 'Có chính sách chiết khấu khi thanh toán sớm không?',
    answer:
      'Khách hàng chọn phương thức thanh toán nhanh vượt tiến độ có thể nhận chiết khấu trực tiếp vào giá bán theo công bố chính thức từ chủ đầu tư.',
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
        <PricingFaq />
        <PricingRelated />
        <Contact />
      </main>
      <SiteFooter />
      <FloatingContact />
    </SitePreferencesProvider>
  )
}
