import type { Metadata } from 'next'
import { SiteHeader } from '@/components/layout/site-header'
import { SiteFooter } from '@/components/layout/site-footer'
import { FloatingContact } from '@/components/layout/floating-contact'
import { SitePreferencesProvider } from '@/components/layout/site-preferences'
import { LocationDetail } from '@/components/pages/vi-tri/location-detail'
import { LocationFaq } from '@/components/pages/vi-tri/location-faq'
import { LocationRelated } from '@/components/pages/vi-tri/location-related'
import { DirectorConsultation } from '@/components/shared/director-consultation'
import { BreadcrumbSchema, FAQSchema } from '@/components/seo/json-ld'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Vị Trí Bcons Central Park 236 Phan Trung Biên Hòa — Kết Nối Vàng & Tiềm Năng',
  description:
    'Vị trí đắc địa Bcons Central Park tại 236 Phan Trung, Phường Tam Hiệp, TP. Biên Hòa, Đồng Nai. Trục phố thương mại sầm uất, kết nối nhanh Phạm Văn Đồng, QL 1K, KCN Amata và sân bay Long Thành.',
  keywords: [
    'vị trí bcons central park',
    'vi tri bcons central park',
    'bcons 236 phan trung',
    'căn hộ đường phan trung biên hòa',
    'vị trí dự án bcons tam hiệp',
    'bản đồ quy hoạch bcons biên hòa',
    'liên kết vùng bcons central park',
  ],
  alternates: { canonical: '/vi-tri' },
  openGraph: {
    title: 'Vị Trí Vàng 236 Phan Trung — Bcons Central Park Tam Hiệp',
    description:
      'Toạ lạc giữa trung tâm sầm uất Biên Hòa, liền kề Vincom, chợ Tam Hiệp, bệnh viện Đa khoa Đồng Nai và các trường đại học.',
    url: 'https://www.canhobconstamhiep.com/vi-tri',
    siteName: 'Bcons Central Park Tam Hiệp',
    locale: 'vi_VN',
    type: 'website',
    images: [
      {
        url: 'https://www.canhobconstamhiep.com/images/og-share.jpg',
        secureUrl: 'https://www.canhobconstamhiep.com/images/og-share.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Vị trí Bcons Central Park Tam Hiệp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vị Trí Vàng 236 Phan Trung — Bcons Central Park Tam Hiệp',
    description: 'Tọa lạc tâm điểm Biên Hòa, kết nối thuận tiện TP. Thủ Đức, QL 1K và sân bay Long Thành.',
    images: ['https://www.canhobconstamhiep.com/images/og-share.jpg'],
  },
}

const locationFaqs = [
  {
    question: 'Vị trí Bcons Central Park Tam Hiệp nằm ở đâu?',
    answer:
      'Dự án toạ lạc tại số 236 Phan Trung, Phường Tam Hiệp, Thành phố Đồng Nai (khu vực TP. Biên Hòa cũ), ngay trục đường thương mại sầm uất của khu vực.',
  },
  {
    question: 'Từ dự án đi TP.HCM mất bao lâu?',
    answer:
      'Di chuyển đến TP. Thủ Đức và trung tâm TP.HCM mất khoảng 30 – 45 phút qua tuyến Phạm Văn Đồng kéo dài hoặc Quốc lộ 1K.',
  },
  {
    question: 'Gần dự án có những bệnh viện, trường học nào?',
    answer:
      'Trong bán kính 1 – 2 km có BV Đa khoa Đồng Nai, BV Quốc tế Hoàn Mỹ, trường Tiểu học Tân Hiệp, trường Quốc tế APC và Đại học Lạc Hồng.',
  },
]

export default function LocationPage() {
  return (
    <SitePreferencesProvider>
      <BreadcrumbSchema
        items={[
          { name: 'Trang chủ', url: 'https://www.canhobconstamhiep.com' },
          { name: 'Vị trí', url: 'https://www.canhobconstamhiep.com/vi-tri' },
        ]}
      />
      <FAQSchema faqs={locationFaqs} />
      <SiteHeader />
      <main>
        <LocationDetail />
        <DirectorConsultation />
        <LocationFaq />
        <LocationRelated />
      </main>
      <SiteFooter />
      <FloatingContact />
    </SitePreferencesProvider>
  )
}
