import type { Metadata } from 'next'
import { SiteHeader } from '@/components/layout/site-header'
import { SiteFooter } from '@/components/layout/site-footer'
import { FloatingContact } from '@/components/layout/floating-contact'
import { SitePreferencesProvider } from '@/components/layout/site-preferences'
import { InvestorDetail } from '@/components/pages/chu-dau-tu/investor-detail'
import { InvestorFaq } from '@/components/pages/chu-dau-tu/investor-faq'
import { InvestorRelated } from '@/components/pages/chu-dau-tu/investor-related'
import { DirectorConsultation } from '@/components/shared/director-consultation'
import { BreadcrumbSchema, FAQSchema } from '@/components/seo/json-ld'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Chủ Đầu Tư Tập Đoàn Bcons — Uy Tín, Năng Lực & 20+ Dự Án Đã Trao Sổ Hồng',
  description:
    'Tìm hiểu về Tập đoàn Bcons (Bcons Group) — chủ đầu tư Bcons Central Park Tam Hiệp. 10+ năm kinh nghiệm, 15+ dự án đã bàn giao, cam kết tiến độ, chất lượng và tốc độ ra sổ hồng thần tốc.',
  keywords: [
    'chủ đầu tư bcons',
    'chu dau tu bcons',
    'tập đoàn bcons',
    'tap doan bcons',
    'bcons group',
    'dự án bcons',
    'bcons central park tam hiệp',
    'lê như thạch bcons',
    'tiến độ sổ hồng bcons',
  ],
  alternates: { canonical: '/chu-dau-tu' },
  openGraph: {
    title: 'Tập Đoàn Bcons — Uy Tín Đã Được Chứng Thực Qua Hàng Loạt Dự Án',
    description:
      'Chủ đầu tư uy tín tại thị trường TP.HCM & Bình Dương, nay tiếp tục khẳng định vị thế với Bcons Central Park Biên Hòa.',
    url: 'https://www.canhobconstamhiep.com/chu-dau-tu',
    siteName: 'Bcons Central Park Tam Hiệp',
    locale: 'vi_VN',
    type: 'website',
    images: [{ url: '/images/bcons-central-park-chu-dau-tu-bcons.webp', width: 1200, height: 630, alt: 'Chủ đầu tư Bcons Group' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tập Đoàn Bcons — Uy Tín Đã Được Chứng Thực Qua Hàng Loạt Dự Án',
    description: 'Chủ đầu tư uy tín với hơn 15 dự án đã trao sổ hồng thần tốc cho cư dân.',
    images: ['/images/bcons-central-park-chu-dau-tu-bcons.webp'],
  },
}

const investorFaqs = [
  {
    question: 'Chủ đầu tư Bcons Central Park là ai?',
    answer:
      'Chủ đầu tư đứng tên trên hồ sơ pháp lý là Công ty Cổ phần Phát triển Đô thị Tam Hiệp, dự án được phát triển bởi Tập đoàn Bcons (Bcons Group). Đây là hai pháp nhân khác nhau: mọi thông tin về lịch sử triển khai hơn 20 dự án thuộc về năng lực phát triển của Bcons Group.',
  },
  {
    question: 'Bcons Biên Hòa là dự án thứ mấy của Bcons?',
    answer:
      'Bcons Central Park là dự án đầu tiên mang thương hiệu Bcons tại khu vực Biên Hòa, Đồng Nai, sau chuỗi dự án nhà ở chất lượng đã triển khai thành công tại Bình Dương (Dĩ An) và TP.HCM.',
  },
  {
    question: 'Làm sao kiểm chứng năng lực chủ đầu tư Bcons?',
    answer:
      'Bốn cách không cần dựa vào người bán: (1) tìm cư dân của một dự án Bcons đã bàn giao và hỏi về tiến độ bàn giao, chất lượng so với nhà mẫu và thời gian ra sổ; (2) đối chiếu tên pháp nhân trên giấy phép xây dựng, quyết định quy hoạch và hợp đồng mua bán xem có trùng nhau không; (3) đến công trường tại 236 Phan Trung thay vì chỉ xem nhà mẫu; và (4) hỏi ngân hàng nào phát hành chứng thư bảo lãnh nghĩa vụ bàn giao.',
  },
  {
    question: 'Các dự án trước đây của Bcons đã được cấp sổ hồng chưa?',
    answer:
      'Hầu hết các dự án đã bàn giao như Bcons Suối Tiên, Bcons Miền Đông, Bcons Garden, Bcons Green View, Bcons Bee, Bcons Plaza đều đã hoàn tất cấp sổ hồng 100% cho cư dân chỉ trong vòng 6 – 12 tháng sau khi nhận nhà.',
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
      </main>
      <SiteFooter />
      <FloatingContact />
    </SitePreferencesProvider>
  )
}
