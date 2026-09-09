import type { Metadata } from 'next'
import { SiteHeader } from '@/components/layout/site-header'
import { SiteFooter } from '@/components/layout/site-footer'
import { FloatingContact } from '@/components/layout/floating-contact'
import { SitePreferencesProvider } from '@/components/layout/site-preferences'
import { LegalDetail } from '@/components/pages/phap-ly/legal-detail'
import { LegalFaq } from '@/components/pages/phap-ly/legal-faq'
import { LegalRelated } from '@/components/pages/phap-ly/legal-related'
import { DirectorConsultation } from '@/components/shared/director-consultation'
import { BreadcrumbSchema, FAQSchema } from '@/components/seo/json-ld'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Pháp Lý Bcons Central Park Tam Hiệp — Sổ Hồng Lâu Dài, GPXD, Quy Hoạch 1/500',
  description:
    'Hồ sơ pháp lý minh bạch dự án Bcons Central Park Tam Hiệp: phê duyệt quy hoạch 1/500, giấy phép xây dựng, nghiệm thu PCCC và quyền sở hữu sổ hồng lâu dài cho người Việt Nam.',
  keywords: [
    'pháp lý bcons central park',
    'phap ly bcons central park',
    'sổ hồng bcons tam hiệp',
    'giấy phép xây dựng bcons central park',
    'quy hoạch 1 500 bcons tam hiệp',
    'pháp lý dự án 236 phan trung',
    'chủ đầu tư đô thị tam hiệp',
  ],
  alternates: { canonical: '/phap-ly' },
  openGraph: {
    title: 'Hồ Sơ Pháp Lý Chuẩn Chỉnh — Bcons Central Park Tam Hiệp',
    description:
      'Quy hoạch 1/500 đã duyệt, giấy phép xây dựng đầy đủ, sở hữu lâu dài — bảo chứng uy tín từ Bcons Group.',
    url: 'https://www.canhobconstamhiep.com/phap-ly',
    siteName: 'Bcons Central Park Tam Hiệp',
    locale: 'vi_VN',
    type: 'website',
    images: [{ url: '/images/news/bcons-central-park-checklist-phap-ly.webp', width: 1200, height: 630, alt: 'Pháp lý Bcons Central Park' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hồ Sơ Pháp Lý Chuẩn Chỉnh — Bcons Central Park Tam Hiệp',
    description: 'Quy hoạch 1/500 đã duyệt, giấy phép xây dựng đầy đủ, sổ hồng sở hữu lâu dài.',
    images: ['/images/news/bcons-central-park-checklist-phap-ly.webp'],
  },
}

const legalFaqs = [
  {
    question: 'Dự án Bcons Central Park đã có quy hoạch 1/500 chưa?',
    answer:
      'Dự án đã được UBND tỉnh Đồng Nai phê duyệt đồ án quy hoạch chi tiết xây dựng tỷ lệ 1/500 theo đúng trình tự và quy định pháp luật hiện hành.',
  },
  {
    question: 'Hình thức sở hữu căn hộ Bcons Central Park là gì?',
    answer:
      'Khách hàng là công dân Việt Nam được cấp Giấy chứng nhận quyền sử dụng đất, quyền sở hữu nhà ở (sổ hồng) với hình thức sở hữu lâu dài.',
  },
  {
    question: 'Tiến độ cấp sổ hồng các dự án trước đây của Bcons thế nào?',
    answer:
      'Bcons Group nổi tiếng trên thị trường về việc bàn giao sổ hồng thần tốc: đa số các dự án đã bàn giao (Bcons Suối Tiên, Miền Đông, Nha Trang, Plaza...) đều bàn giao sổ cho cư dân trong vòng 6 – 12 tháng sau khi nhận nhà.',
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
        <DirectorConsultation />
        <LegalFaq />
        <LegalRelated />
      </main>
      <SiteFooter />
      <FloatingContact />
    </SitePreferencesProvider>
  )
}
