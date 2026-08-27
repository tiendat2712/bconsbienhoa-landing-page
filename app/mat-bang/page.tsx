import type { Metadata } from 'next'
import { SiteHeader } from '@/components/layout/site-header'
import { SiteFooter } from '@/components/layout/site-footer'
import { FloatingContact } from '@/components/layout/floating-contact'
import { SitePreferencesProvider } from '@/components/layout/site-preferences'
import { FloorPlanDetail } from '@/components/pages/mat-bang/floor-plan-detail'
import { FloorPlanFaq } from '@/components/pages/mat-bang/floor-plan-faq'
import { FloorPlanRelated } from '@/components/pages/mat-bang/floor-plan-related'
import { Contact } from '@/components/home/contact'
import { BreadcrumbSchema, FAQSchema } from '@/components/seo/json-ld'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Mặt Bằng Bcons Central Park Tam Hiệp — Tổng Thể & Layout Căn 1PN, 2PN, 3PN',
  description:
    'Mặt bằng tổng thể 5 block cao 22 tầng trên quỹ đất gần 3 ha và thiết kế layout chi tiết căn hộ 1 – 3 phòng ngủ (43 – 86 m²). Tối ưu ánh sáng và gió tự nhiên, 100% căn hộ có ban công thông thoáng.',
  alternates: { canonical: '/mat-bang' },
  openGraph: {
    title: 'Mặt Bằng Tổng Thể & Layout Căn Hộ Bcons Central Park Tam Hiệp',
    description:
      'Khám phá layout căn hộ 1PN, 2PN, 3PN thông minh, đón gió và ánh sáng tự nhiên tại Bcons Central Park.',
    url: 'https://canhobconstamhiep.com/mat-bang',
    images: [{ url: '/images/masterplan.png', width: 1200, height: 630, alt: 'Mặt bằng Bcons Central Park' }],
  },
}

const floorPlanFaqs = [
  {
    question: 'Bcons Central Park có những loại căn hộ nào?',
    answer:
      'Dự án có các loại căn hộ 1 phòng ngủ (43 – 45 m²), 2 phòng ngủ (51 – 58 m²) và 3 phòng ngủ (85 – 86 m²), cùng 113 căn shophouse thương mại tại khối đế.',
  },
  {
    question: 'Căn hộ 2 phòng ngủ Bcons Tam Hiệp bố trí thế nào?',
    answer:
      'Căn 2PN được thiết kế tối ưu với 2 phòng ngủ đều có cửa sổ đón sáng tự nhiên, 2 phòng vệ sinh, phòng khách liên thông ban công và khu vực bếp thông thoáng với logia phơi riêng.',
  },
  {
    question: 'Mặt bằng tổng thể Bcons Phan Trung có bao nhiêu block?',
    answer:
      'Dự án gồm 5 block căn hộ cao 22 tầng được bố trí bao quanh công viên trung tâm hơn 7.700 m², tạo khoảng lùi thông thoáng và không gian cảnh quan xanh cho toàn khu.',
  },
]

export default function FloorPlanPage() {
  return (
    <SitePreferencesProvider>
      <BreadcrumbSchema
        items={[
          { name: 'Trang chủ', url: 'https://canhobconstamhiep.com' },
          { name: 'Mặt bằng', url: 'https://canhobconstamhiep.com/mat-bang' },
        ]}
      />
      <FAQSchema faqs={floorPlanFaqs} />
      <SiteHeader />
      <main>
        <FloorPlanDetail />
        <FloorPlanFaq />
        <FloorPlanRelated />
        <Contact />
      </main>
      <SiteFooter />
      <FloatingContact />
    </SitePreferencesProvider>
  )
}
