import type { Metadata } from 'next'
import { SiteHeader } from '@/components/layout/site-header'
import { SiteFooter } from '@/components/layout/site-footer'
import { FloatingContact } from '@/components/layout/floating-contact'
import { SitePreferencesProvider } from '@/components/layout/site-preferences'
import { InvestorDetail } from '@/components/pages/chu-dau-tu/investor-detail'
import { InvestorFaq } from '@/components/pages/chu-dau-tu/investor-faq'
import { InvestorRelated } from '@/components/pages/chu-dau-tu/investor-related'
import { Contact } from '@/components/home/contact'
import { BreadcrumbSchema, FAQSchema } from '@/components/seo/json-ld'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Chủ Đầu Tư Tập Đoàn Bcons — Uy Tín, Năng Lực & 20+ Dự Án Đã Trao Sổ Hồng',
  description:
    'Hồ sơ năng lực Tập đoàn Bcons (Bcons Group) — Chủ đầu tư Bcons Central Park Tam Hiệp. Hơn 10 năm kinh nghiệm, 20+ dự án căn hộ bàn giao đúng tiến độ, đối tác chiến lược PPSN Nhật Bản.',
  alternates: { canonical: '/chu-dau-tu' },
  openGraph: {
    title: 'Chủ Đầu Tư Bcons Group — Cam Kết Làm Thật, Giao Thật, Sổ Hồng Nhanh',
    description:
      'Tìm hiểu năng lực triển khai dự án và chuỗi thành tích bàn giao sổ hồng vượt tiến độ của Tập đoàn Bcons.',
    url: 'https://www.canhobconstamhiep.com/chu-dau-tu',
    images: [{ url: '/images/hero-towers.png', width: 1200, height: 630, alt: 'Chủ đầu tư Tập đoàn Bcons' }],
  },
}

const investorFaqs = [
  {
    question: 'Chủ đầu tư Bcons Group có uy tín không?',
    answer:
      'Tập đoàn Bcons là thương hiệu phát triển bất động sản uy tín với hơn 10 năm kinh nghiệm, đã bàn giao thành công hơn 20 dự án tại Bình Dương và TP.HCM, nổi bật với cam kết ra sổ hồng nhanh cho cư dân chỉ sau 6 – 12 tháng.',
  },
  {
    question: 'Bcons Central Park có đối tác quốc tế nào đồng hành?',
    answer:
      'Bcons có quan hệ đối tác chiến lược lâu năm với Tập đoàn PPSN (Nhật Bản) trong việc quản lý, giám sát và nâng cao tiêu chuẩn chất lượng công trình theo chuẩn mực Nhật Bản.',
  },
  {
    question: 'Các dự án trước đây của Bcons đã được cấp sổ hồng chưa?',
    answer:
      'Hầu hết các dự án đã bàn giao như Bcons Suối Tiên, Bcons Miền Đông, Bcons Garden, Bcons Green View, Bcons Plaza đều đã hoàn tất cấp sổ hồng 100% cho cư dân theo đúng cam kết.',
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
        <InvestorFaq />
        <InvestorRelated />
        <Contact />
      </main>
      <SiteFooter />
      <FloatingContact />
    </SitePreferencesProvider>
  )
}
