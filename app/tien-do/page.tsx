import type { Metadata } from 'next'
import { SiteHeader } from '@/components/layout/site-header'
import { SiteFooter } from '@/components/layout/site-footer'
import { FloatingContact } from '@/components/layout/floating-contact'
import { SitePreferencesProvider } from '@/components/layout/site-preferences'
import { ProgressDetail } from '@/components/pages/tien-do/progress-detail'
import { ProgressFaq } from '@/components/pages/tien-do/progress-faq'
import { ProgressRelated } from '@/components/pages/tien-do/progress-related'
import { Contact } from '@/components/home/contact'
import { BreadcrumbSchema, FAQSchema } from '@/components/seo/json-ld'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Tiến Độ Xây Dựng Bcons Central Park Mới Nhất 2026 — Khởi Công & Bàn Giao Q2/2029',
  description:
    'Cập nhật tiến độ thi công thực tế dự án Bcons Central Park Tam Hiệp: Lễ khởi công ngày 27/05/2026, thi công ép cọc và móng hầm, kế hoạch cất nóc và bàn giao căn hộ Quý II/2029.',
  alternates: { canonical: '/tien-do' },
  openGraph: {
    title: 'Cập Nhật Tiến Độ Xây Dựng Bcons Central Park Tam Hiệp 2026',
    description:
      'Theo dõi sát sao từng mốc thi công từ khởi công đến bàn giao nhà cho cư dân Bcons Central Park.',
    url: 'https://www.canhobconstamhiep.com/tien-do',
    images: [{ url: '/images/hero-towers.png', width: 1200, height: 630, alt: 'Tiến độ Bcons Central Park' }],
  },
}

const progressFaqs = [
  {
    question: 'Dự án Bcons Central Park Tam Hiệp khởi công khi nào?',
    answer:
      'Dự án chính thức làm lễ khởi công vào ngày 27/05/2026 và hiện đang khẩn trương triển khai giai đoạn ép cọc, thi công móng hầm.',
  },
  {
    question: 'Dự kiến khi nào Bcons Phan Trung bàn giao nhà?',
    answer:
      'Dự kiến dự án sẽ hoàn thành và bắt đầu bàn giao căn hộ cho cư dân vào Quý II/2029 theo đúng tiến độ được phê duyệt.',
  },
  {
    question: 'Tiến độ xây dựng được cập nhật với tần suất thế nào?',
    answer:
      'Tiến độ được cập nhật định kỳ hằng tháng qua hình ảnh và video thực tế từ công trường trên các kênh thông tin chính thức của dự án.',
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
        <ProgressFaq />
        <ProgressRelated />
        <Contact />
      </main>
      <SiteFooter />
      <FloatingContact />
    </SitePreferencesProvider>
  )
}
