import type { Metadata } from 'next'
import { SiteHeader } from '@/components/layout/site-header'
import { SiteFooter } from '@/components/layout/site-footer'
import { FloatingContact } from '@/components/layout/floating-contact'
import { SitePreferencesProvider } from '@/components/layout/site-preferences'
import { ProgressDetail } from '@/components/pages/tien-do/progress-detail'
import { ProgressFaq } from '@/components/pages/tien-do/progress-faq'
import { ProgressRelated } from '@/components/pages/tien-do/progress-related'
import { DirectorConsultation } from '@/components/shared/director-consultation'
import { Contact } from '@/components/home/contact'
import { BreadcrumbSchema, FAQSchema } from '@/components/seo/json-ld'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Tiến Độ Xây Dựng Bcons Central Park Mới Nhất 2026 — Khởi Công & Bàn Giao Q2/2029',
  description:
    'Cập nhật tiến độ thi công thực tế tại công trường Bcons Central Park Tam Hiệp. Khởi công Quý 2/2026, thi công phần móng hầm, dự kiến bàn giao Quý 2/2029.',
  alternates: { canonical: '/tien-do' },
  openGraph: {
    title: 'Cập Nhật Tiến Độ Thi Công Bcons Central Park Tam Hiệp Mới Nhất',
    description:
      'Hình ảnh thực tế từ công trường 236 Phan Trung, Biên Hòa — cam kết bàn giao đúng hạn từ Bcons Group.',
    url: 'https://www.canhobconstamhiep.com/tien-do',
    images: [{ url: '/images/hero-towers.png', width: 1200, height: 630, alt: 'Tiến độ Bcons Central Park' }],
  },
}

const progressFaqs = [
  {
    question: 'Dự án Bcons Central Park khi nào khởi công?',
    answer:
      'Dự án chính thức triển khai thi công từ Tháng 04/2026, bắt đầu với công tác chuẩn bị mặt bằng, thử tải cọc và thi công phần móng hầm.',
  },
  {
    question: 'Thời gian thi công dự kiến là bao lâu?',
    answer:
      'Tổng thời gian thi công dự kiến là 38 tháng, đảm bảo nghiêm ngặt các quy chuẩn kỹ thuật và kiểm định an toàn chất lượng của Bộ Xây Dựng.',
  },
  {
    question: 'Khi nào bàn giao căn hộ cho cư dân?',
    answer:
      'Dự kiến công trình hoàn thành và bàn giao nhà cho cư dân vào Quý 2/2029 với đầy đủ trang thiết bị bàn giao tiêu chuẩn cao cấp.',
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
        <Contact />
      </main>
      <SiteFooter />
      <FloatingContact />
    </SitePreferencesProvider>
  )
}
