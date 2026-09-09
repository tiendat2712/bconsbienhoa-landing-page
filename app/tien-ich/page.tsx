import type { Metadata } from 'next'
import { SiteHeader } from '@/components/layout/site-header'
import { SiteFooter } from '@/components/layout/site-footer'
import { FloatingContact } from '@/components/layout/floating-contact'
import { SitePreferencesProvider } from '@/components/layout/site-preferences'
import { AmenityDetail } from '@/components/pages/tien-ich/amenity-detail'
import { AmenityFaq } from '@/components/pages/tien-ich/amenity-faq'
import { AmenityRelated } from '@/components/pages/tien-ich/amenity-related'
import { DirectorConsultation } from '@/components/shared/director-consultation'
import { BreadcrumbSchema, FAQSchema } from '@/components/seo/json-ld'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Hệ Tiện Ích Đẳng Cấp Bcons Central Park — Công Viên 7.700m², Hồ Bơi Resort',
  description:
    'Khám phá chuỗi tiện ích chuẩn resort tại Bcons Central Park Tam Hiệp: công viên nội khu hơn 7.700 m², hồ bơi tràn bờ, phòng gym – yoga hiện đại, khu vui chơi trẻ em và 113 shophouse sầm uất.',
  keywords: [
    'tiện ích bcons central park',
    'tien ich bcons central park',
    'công viên 7700m2 bcons tam hiệp',
    'hồ bơi tràn bờ bcons central park',
    'shophouse bcons 236 phan trung',
    'tiện ích nội khu bcons biên hòa',
  ],
  alternates: { canonical: '/tien-ich' },
  openGraph: {
    title: 'Hệ Tiện Ích Đỉnh Cao Bcons Central Park Tam Hiệp',
    description:
      'Hơn 7.700 m² công viên nội khu, hồ bơi resort và chuỗi shophouse phục vụ trọn vẹn nhu cầu sống chuẩn nghỉ dưỡng.',
    url: 'https://www.canhobconstamhiep.com/tien-ich',
    siteName: 'Bcons Central Park Tam Hiệp',
    locale: 'vi_VN',
    type: 'website',
    images: [{ url: '/images/amenities/masterplan-60-tien-ich.webp', width: 1200, height: 630, alt: 'Tiện ích Bcons Central Park' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hệ Tiện Ích Đỉnh Cao Bcons Central Park Tam Hiệp',
    description: 'Hơn 7.700 m² công viên nội khu, hồ bơi tràn bờ resort và 113 shophouse sầm uất.',
    images: ['/images/amenities/masterplan-60-tien-ich.webp'],
  },
}

const amenityFaqs = [
  {
    question: 'Công viên trung tâm Bcons Central Park rộng bao nhiêu?',
    answer:
      'Dự án sở hữu công viên cảnh quan nội khu rộng hơn 7.700 m² với đường dạo bộ rợp bóng cây, vườn hoa bốn mùa và khu thể thao ngoài trời.',
  },
  {
    question: 'Hồ bơi tại Bcons Central Park là hồ bơi gì?',
    answer:
      'Hồ bơi tràn bờ phong cách resort được thiết kế hiện đại với làn bơi tiêu chuẩn cho người lớn, hồ bơi nông an toàn cho trẻ em và sân phơi nắng thư giãn.',
  },
  {
    question: 'Cư dân có phải trả thêm phí sử dụng gym và hồ bơi không?',
    answer:
      'Hồ bơi, phòng gym, khu BBQ và sân chơi trẻ em là tiện ích đặc quyền dành riêng cho cư dân, chi phí vận hành được bao gồm trong phí quản lý hàng tháng.',
  },
]

export default function AmenityPage() {
  return (
    <SitePreferencesProvider>
      <BreadcrumbSchema
        items={[
          { name: 'Trang chủ', url: 'https://www.canhobconstamhiep.com' },
          { name: 'Tiện ích', url: 'https://www.canhobconstamhiep.com/tien-ich' },
        ]}
      />
      <FAQSchema faqs={amenityFaqs} />
      <SiteHeader />
      <main>
        <AmenityDetail />
        <DirectorConsultation />
        <AmenityFaq />
        <AmenityRelated />
      </main>
      <SiteFooter />
      <FloatingContact />
    </SitePreferencesProvider>
  )
}
