import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { FloatingContact } from '@/components/floating-contact'
import { SitePreferencesProvider } from '@/components/site-preferences'
import { PricingDetail } from '@/components/pricing-detail'
import { PricingFaq } from '@/components/pricing-faq'
import { PricingRelated } from '@/components/pricing-related'
import { Contact } from '@/components/contact'

export const metadata: Metadata = {
  title: 'Giá bán Bcons Central Park Tam Hiệp — cập nhật mới nhất',
  description:
    'Giá bán Bcons Central Park Tam Hiệp dự kiến từ 2,0 đến 3,8 tỷ đồng theo loại căn hộ 43 – 86 m². Bảng giá dự kiến, phương thức thanh toán và câu hỏi thường gặp về giá dự án.',
  alternates: { canonical: '/gia-ban' },
}

export default function PricingPage() {
  return (
    <SitePreferencesProvider>
      <SiteHeader />
      <main>
        <PricingDetail />
        <PricingFaq />
        <PricingRelated />
        <Contact />
      </main>
      <SiteFooter />
      <FloatingContact />
    </SitePreferencesProvider>
  )
}
