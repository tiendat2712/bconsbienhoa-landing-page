import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { FloatingContact } from '@/components/floating-contact'
import { SitePreferencesProvider } from '@/components/site-preferences'
import { LocationDetail } from '@/components/location-detail'
import { LocationPotential } from '@/components/location-potential'
import { LocationFaq } from '@/components/location-faq'
import { LocationRelated } from '@/components/location-related'
import { Contact } from '@/components/contact'

export const metadata: Metadata = {
  title: 'Vị trí Bcons Central Park Tam Hiệp — 236 Phan Trung, Biên Hòa, Đồng Nai',
  description:
    'Vị trí dự án Bcons Central Park Tam Hiệp tại 236 Phan Trung, Phường Tam Hiệp, TP. Đồng Nai (Biên Hòa cũ): bản đồ, kết nối vùng, thời gian di chuyển và 4 yếu tố tạo dư địa tăng giá.',
  alternates: { canonical: '/vi-tri' },
}

export default function LocationPage() {
  return (
    <SitePreferencesProvider>
      <SiteHeader />
      <main>
        <LocationDetail />
        <LocationPotential />
        <LocationFaq />
        <LocationRelated />
        <Contact />
      </main>
      <SiteFooter />
      <FloatingContact />
    </SitePreferencesProvider>
  )
}
