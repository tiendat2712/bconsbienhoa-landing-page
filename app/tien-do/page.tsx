import type { Metadata } from 'next'
import { SiteHeader } from '@/components/layout/site-header'
import { SiteFooter } from '@/components/layout/site-footer'
import { FloatingContact } from '@/components/layout/floating-contact'
import { SitePreferencesProvider } from '@/components/layout/site-preferences'
import { ProgressDetail } from '@/components/pages/tien-do/progress-detail'
import { ProgressFaq } from '@/components/pages/tien-do/progress-faq'
import { ProgressRelated } from '@/components/pages/tien-do/progress-related'
import { DirectorConsultation } from '@/components/shared/director-consultation'
import { BreadcrumbSchema, FAQSchema } from '@/components/seo/json-ld'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Tiến Độ Xây Dựng Bcons Central Park Mới Nhất 2026 — Khởi Công & Bàn Giao Q2/2029',
  description:
    'Cập nhật tiến độ thi công thực tế tại công trường Bcons Central Park Tam Hiệp. Khởi công Quý 2/2026, thi công phần móng hầm, dự kiến bàn giao Quý 2/2029.',
  keywords: [
    'tiến độ bcons central park',
    'tien do bcons central park',
    'tiến độ xây dựng bcons tam hiệp',
    'hình ảnh thi công bcons 236 phan trung',
    'thời gian bàn giao bcons central park',
    'tiến độ móng hầm bcons biên hòa',
  ],
  alternates: { canonical: '/tien-do' },
  openGraph: {
    title: 'Cập Nhật Tiến Độ Thi Công Bcons Central Park Tam Hiệp Mới Nhất',
    description:
      'Hình ảnh thực tế từ công trường 236 Phan Trung, Biên Hòa — cam kết bàn giao đúng hạn từ Bcons Group.',
    url: 'https://www.canhobconstamhiep.com/tien-do',
    siteName: 'Bcons Central Park Tam Hiệp',
    locale: 'vi_VN',
    type: 'website',
    images: [{ url: '/images/hero-towers.png', width: 1200, height: 630, alt: 'Tiến độ Bcons Central Park' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tiến Độ Xây Dựng Bcons Central Park Mới Nhất 2026',
    description: 'Cập nhật tiến độ thi công thực tế tại công trường 236 Phan Trung, Biên Hòa.',
    images: ['/images/hero-towers.png'],
  },
}

const progressFaqs = [
  {
    question: 'Bcons Central Park khi nào bàn giao?',
    answer:
      'Dự án chính thức khởi công ngày 27/05/2026 và dự kiến hoàn thành, bàn giao căn hộ cho cư dân vào Quý II/2029 theo đúng tiến độ kế hoạch 36 tháng.',
  },
  {
    question: 'Bcons Central Park bao giờ mở bán chính thức?',
    answer:
      'Dự án đã khởi công ngày 27/05/2026 và đang trong giai đoạn tiếp nhận đăng ký nguyện vọng. Thời điểm mở bán chính thức cùng bảng giá chi tiết từng đợt và chính sách ưu đãi sẽ do chủ đầu tư công bố trong thời gian tới.',
  },
  {
    question: 'Tiến độ thi công Bcons Central Park hiện tại tới đâu?',
    answer:
      'Bcons Central Park Tam Hiệp khởi công ngày 27/05/2026, đã hoàn tất chuẩn bị mặt bằng và ép cọc đại trà, hiện đang tập trung thi công phần đài móng. Tầng hầm dự kiến triển khai trong Quý IV/2026 – Quý I/2027, phần thân trong 2027 – 2028 và bàn giao Quý II/2029.',
  },
]

export default function ProgressPage() {
  return (
    <SitePreferencesProvider>
      <BreadcrumbSchema
        items={[
          { name: 'Trang chủ', url: 'https://www.canhobconstamhiep.com' },
          { name: 'Tiến độ', url: 'https://www.canhobconstamhiep.com/tien-do' },
        ]}
      />
      <FAQSchema faqs={progressFaqs} />
      <SiteHeader />
      <main>
        <ProgressDetail />
        <DirectorConsultation />
        <ProgressFaq />
        <ProgressRelated />
      </main>
      <SiteFooter />
      <FloatingContact />
    </SitePreferencesProvider>
  )
}
