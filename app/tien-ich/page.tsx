import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { FloatingContact } from '@/components/floating-contact'
import { SitePreferencesProvider } from '@/components/site-preferences'
import { AmenityDetail } from '@/components/amenity-detail'
import { AmenityFaq } from '@/components/amenity-faq'
import { AmenityRelated } from '@/components/amenity-related'
import { Contact } from '@/components/contact'

export const metadata: Metadata = {
  title: 'Tiện ích Bcons Central Park Tam Hiệp — công viên 7.700+ m², hồ bơi, gym/yoga',
  description:
    'Tiện ích nội khu & ngoại khu Bcons Central Park Tam Hiệp: công viên nội khu hơn 7.700+ m², hồ bơi tràn bờ, gym/yoga, dãy shophouse và các tiện ích ngoại khu như chợ, siêu thị, trường học, bệnh viện chỉ vài phút di chuyển tại trung tâm Biên Hòa.',
  alternates: { canonical: '/tien-ich' },
}

export default function AmenityPage() {
  return (
    <SitePreferencesProvider>
      <SiteHeader />
      <main>
        <AmenityDetail />
        <AmenityFaq />
        <AmenityRelated />
        <Contact />
      </main>
      <SiteFooter />
      <FloatingContact />
    </SitePreferencesProvider>
  )
}
