import type { Metadata } from 'next'
import { SiteHeader } from '@/components/layout/site-header'
import { SiteFooter } from '@/components/layout/site-footer'
import { FloatingContact } from '@/components/layout/floating-contact'
import { SitePreferencesProvider } from '@/components/layout/site-preferences'
import { LegalDetail } from '@/components/pages/phap-ly/legal-detail'
import { LegalFaq } from '@/components/pages/phap-ly/legal-faq'
import { LegalRelated } from '@/components/pages/phap-ly/legal-related'
import { Contact } from '@/components/home/contact'
import { BreadcrumbSchema, FAQSchema } from '@/components/seo/json-ld'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Pháp Lý Bcons Central Park Tam Hiệp — Sổ Hồng Lâu Dài, GPXD, Quy Hoạch 1/500',
  description:
    'Hồ sơ pháp lý minh bạch của dự án Bcons Central Park Tam Hiệp: Giấy phép xây dựng (GPXD), phê duyệt quy hoạch chi tiết 1/500, sổ hồng sở hữu lâu dài cho công dân Việt Nam, đất trúng đấu giá công khai.',
  alternates: { canonical: '/phap-ly' },
  openGraph: {
    title: 'Pháp Lý Minh Bạch & Vững Chắc — Bcons Central Park Tam Hiệp',
    description:
      'Sổ hồng sở hữu lâu dài, đầy đủ giấy phép xây dựng và bảo lãnh tài chính từ các ngân hàng uy tín.',
    url: 'https://www.canhobconstamhiep.com/phap-ly',
    images: [{ url: '/images/hero-towers.png', width: 1200, height: 630, alt: 'Pháp lý Bcons Central Park' }],
  },
}

const legalFaqs = [
  {
    question: 'Hình thức sở hữu căn hộ Bcons Central Park là gì?',
    answer:
      'Căn hộ Bcons Central Park có hình thức sở hữu sổ hồng lâu dài đối với công dân Việt Nam, và 50 năm theo quy định pháp luật đối với người nước ngoài.',
  },
  {
    question: 'Dự án Bcons Tam Hiệp đã có những giấy tờ pháp lý nào?',
    answer:
      'Dự án được phát triển trên quỹ đất đấu giá công khai, đã có quy hoạch 1/500, chấp thuận chủ trương đầu tư và đang hoàn thiện các thủ tục pháp lý để sẵn sàng ký hợp đồng mua bán theo quy định.',
  },
  {
    question: 'Khi nào cư dân được nhận sổ hồng sau khi nhận nhà?',
    answer:
      'Theo cam kết tiến độ và uy tín của Tập đoàn Bcons qua các dự án trước đó, sổ hồng thường được bàn giao cho cư dân trong vòng 6 – 12 tháng kể từ thời điểm bàn giao nhà.',
  },
]

export default function LegalPage() {
  return (
    <SitePreferencesProvider>
      <BreadcrumbSchema
        items={[
          { name: 'Trang chủ', url: 'https://www.canhobconstamhiep.com' },
          { name: 'Pháp lý', url: 'https://www.canhobconstamhiep.com/phap-ly' },
        ]}
      />
      <FAQSchema faqs={legalFaqs} />
      <SiteHeader />
      <main>
        <LegalDetail />
        <LegalFaq />
        <LegalRelated />
        <Contact />
      </main>
      <SiteFooter />
      <FloatingContact />
    </SitePreferencesProvider>
  )
}
