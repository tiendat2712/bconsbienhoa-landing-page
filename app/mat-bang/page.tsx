import type { Metadata } from 'next'
import { SiteHeader } from '@/components/layout/site-header'
import { SiteFooter } from '@/components/layout/site-footer'
import { FloatingContact } from '@/components/layout/floating-contact'
import { SitePreferencesProvider } from '@/components/layout/site-preferences'
import { FloorPlanDetail } from '@/components/pages/mat-bang/floor-plan-detail'
import { FloorPlanFaq } from '@/components/pages/mat-bang/floor-plan-faq'
import { FloorPlanRelated } from '@/components/pages/mat-bang/floor-plan-related'
import { DirectorConsultation } from '@/components/shared/director-consultation'
import { Contact } from '@/components/home/contact'
import { BreadcrumbSchema, FAQSchema } from '@/components/seo/json-ld'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Mặt Bằng Bcons Central Park Tam Hiệp — Tổng Thể & Layout Căn 1PN, 2PN, 3PN',
  description:
    'Mặt bằng tổng thể và thiết kế chi tiết căn hộ Bcons Central Park Tam Hiệp. Layout 1PN (43 – 45 m²), 2PN (53 – 65 m²), 3PN (86 m²) tối ưu ánh sáng tự nhiên và công năng sử dụng.',
  alternates: { canonical: '/mat-bang' },
  openGraph: {
    title: 'Mặt Bằng Bcons Central Park Tam Hiệp — Thiết Kế Căn Hộ Hiện Đại',
    description:
      'Khám phá layout thông minh, tất cả căn hộ đều có ban công đón gió và ánh sáng tự nhiên.',
    url: 'https://www.canhobconstamhiep.com/mat-bang',
    images: [{ url: '/images/floor-plan-master.png', width: 1200, height: 630, alt: 'Mặt bằng Bcons Central Park' }],
  },
}

const floorPlanFaqs = [
  {
    question: 'Bcons Central Park có những loại diện tích căn hộ nào?',
    answer:
      'Dự án gồm căn 1PN (43 – 45 m²), căn 2PN 2WC (53 – 65 m²) và căn 3PN 2WC (86 m²), phù hợp từ người độc thân đến gia đình đa thế hệ.',
  },
  {
    question: 'Căn hộ có ban công và lô gia riêng không?',
    answer:
      '100% căn hộ tại Bcons Central Park đều được thiết kế có ban công phòng khách và lô gia giặt phơi riêng biệt, đảm bảo độ thông thoáng tối đa.',
  },
  {
    question: 'Một tầng có bao nhiêu căn hộ và bao nhiêu thang máy?',
    answer:
      'Mỗi tầng bố trí mật độ hợp lý với hệ thống thang máy tốc độ cao, sảnh hành lang rộng thoáng có cửa sổ lấy sáng tự nhiên.',
  },
]

export default function FloorPlanPage() {
  return (
    <SitePreferencesProvider>
      <BreadcrumbSchema
        items={[
          { name: 'Trang chủ', url: 'https://www.canhobconstamhiep.com' },
          { name: 'Mặt bằng', url: 'https://www.canhobconstamhiep.com/mat-bang' },
        ]}
      />
      <FAQSchema faqs={floorPlanFaqs} />
      <SiteHeader />
      <main>
        <FloorPlanDetail />
        <DirectorConsultation />
        <FloorPlanFaq />
        <FloorPlanRelated />
        <Contact />
      </main>
      <SiteFooter />
      <FloatingContact />
    </SitePreferencesProvider>
  )
}
