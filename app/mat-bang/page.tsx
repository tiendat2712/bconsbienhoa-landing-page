import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { FloatingContact } from '@/components/floating-contact'
import { SitePreferencesProvider } from '@/components/site-preferences'
import { FloorPlanDetail } from '@/components/floor-plan-detail'
import { FloorPlanFaq } from '@/components/floor-plan-faq'
import { FloorPlanRelated } from '@/components/floor-plan-related'
import { Contact } from '@/components/contact'

export const metadata: Metadata = {
  title: 'Mặt bằng Bcons Central Park Tam Hiệp — tổng thể & thiết kế căn hộ 1-3PN',
  description:
    'Mặt bằng tổng thể 5 block trên quỹ đất ~3 ha và thiết kế chi tiết căn hộ 1 – 3 phòng ngủ (43 – 86 m²) Bcons Central Park Tam Hiệp: mặt bằng tầng điển hình, hồ bơi, công viên nội khu, dãy shophouse và câu hỏi thường gặp.',
  alternates: { canonical: '/mat-bang' },
}

export default function FloorPlanPage() {
  return (
    <SitePreferencesProvider>
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
