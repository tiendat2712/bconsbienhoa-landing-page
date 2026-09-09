import type { Metadata } from 'next'
import { SiteHeader } from '@/components/layout/site-header'
import { SiteFooter } from '@/components/layout/site-footer'
import { FloatingContact } from '@/components/layout/floating-contact'
import { SitePreferencesProvider } from '@/components/layout/site-preferences'
import { InvestorDetail } from '@/components/pages/chu-dau-tu/investor-detail'
import { InvestorFaq } from '@/components/pages/chu-dau-tu/investor-faq'
import { InvestorRelated } from '@/components/pages/chu-dau-tu/investor-related'
import { DirectorConsultation } from '@/components/shared/director-consultation'
import { Contact } from '@/components/home/contact'
import { BreadcrumbSchema, FAQSchema } from '@/components/seo/json-ld'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Chủ Đầu Tư Tập Đoàn Bcons — Uy Tín, Năng Lực & 20+ Dự Án Đã Trao Sổ Hồng',
  description:
    'Tìm hiểu về Tập đoàn Bcons (Bcons Group) — chủ đầu tư Bcons Central Park Tam Hiệp. 10+ năm kinh nghiệm, 15+ dự án đã bàn giao, cam kết tiến độ, chất lượng và tốc độ ra sổ hồng thần tốc.',
  alternates: { canonical: '/chu-dau-tu' },
  openGraph: {
    title: 'Tập Đoàn Bcons — Uy Tín Đã Được Chứng Thực Qua Hàng Loạt Dự Án',
    description:
      'Chủ đầu tư uy tín tại thị trường TP.HCM & Bình Dương, nay tiếp tục khẳng định vị thế với Bcons Central Park Biên Hòa.',
    url: 'https://www.canhobconstamhiep.com/chu-dau-tu',
    images: [{ url: '/images/hero-aerial.png', width: 1200, height: 630, alt: 'Chủ đầu tư Bcons Group' }],
  },
}

const investorFaqs = [
  {
    question: 'Tập đoàn Bcons thành lập năm nào và đã làm những dự án nào?',
    answer:
      'Thành lập từ năm 2013, Bcons đã triển khai hơn 15 dự án nhà ở chất lượng: Bcons Suối Tiên, Bcons Miền Đông, Bcons Garden, Bcons Green View, Bcons Bee, Bcons Plaza, Bcons Polygon, Bcons Sala, Bcons City...',
  },
  {
    question: 'Điểm mạnh nổi bật nhất của Bcons là gì?',
    answer:
      'Bcons sở hữu chuỗi giá trị khép kín từ thiết kế, thi công (áp dụng công nghệ BIM), quản lý dự án đến phân phối và quản lý vận hành, giúp tối ưu chi phí, đảm bảo tiến độ và trao sổ hồng nhanh chóng cho cư dân.',
  },
  {
    question: 'Bcons Central Park Tam Hiệp có đối tác chiến lược nào?',
    answer:
      'Dự án hợp tác cùng các đối tác hàng đầu trong lĩnh vực tài chính (Vietcombank, MB Bank, ACB, Public Bank) và các đơn vị tư vấn giám sát chuyên nghiệp.',
  },
]

export default function InvestorPage() {
  return (
    <SitePreferencesProvider>
      <BreadcrumbSchema
        items={[
          { name: 'Trang chủ', url: 'https://www.canhobconstamhiep.com' },
          { name: 'Chủ đầu tư', url: 'https://www.canhobconstamhiep.com/chu-dau-tu' },
        ]}
      />
      <FAQSchema faqs={investorFaqs} />
      <SiteHeader />
      <main>
        <InvestorDetail />
        <DirectorConsultation />
        <InvestorFaq />
        <InvestorRelated />
        <Contact />
      </main>
      <SiteFooter />
      <FloatingContact />
    </SitePreferencesProvider>
  )
}
