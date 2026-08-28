import type { Metadata } from 'next'
import { SiteHeader } from '@/components/layout/site-header'
import { SiteFooter } from '@/components/layout/site-footer'
import { FloatingContact } from '@/components/layout/floating-contact'
import { SitePreferencesProvider } from '@/components/layout/site-preferences'
import { AmenityDetail } from '@/components/pages/tien-ich/amenity-detail'
import { AmenityFaq } from '@/components/pages/tien-ich/amenity-faq'
import { AmenityRelated } from '@/components/pages/tien-ich/amenity-related'
import { Contact } from '@/components/home/contact'
import { BreadcrumbSchema, FAQSchema } from '@/components/seo/json-ld'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Hệ Tiện Ích Đẳng Cấp Bcons Central Park — Công Viên 7.700m², Hồ Bơi Resort',
  description:
    'Hệ sinh thái tiện ích trọn vẹn tại Bcons Central Park Tam Hiệp: công viên xanh hơn 7.700m², hồ bơi tràn bờ resort, gym & yoga, 113 shophouse khối đế và tiện ích ngoại khu trung tâm Biên Hòa chỉ trong bán kính 1km.',
  alternates: { canonical: '/tien-ich' },
  openGraph: {
    title: 'Hệ Sinh Thái Tiện Ích Chuẩn Sống Xanh — Bcons Central Park Tam Hiệp',
    description:
      'Hồ bơi tràn bờ, công viên trung tâm 7.700m², phòng gym, sân chơi trẻ em và khu shophouse thương mại sầm uất.',
    url: 'https://www.canhobconstamhiep.com/tien-ich',
    images: [{ url: '/images/project-pool.jpg', width: 1200, height: 630, alt: 'Tiện ích Bcons Central Park' }],
  },
}

const amenityFaqs = [
  {
    question: 'Bcons Central Park có những tiện ích nội khu nổi bật nào?',
    answer:
      'Dự án sở hữu công viên cây xanh nội khu hơn 7.700+ m², hồ bơi tràn bờ chuẩn resort, phòng gym/yoga hiện đại, 113 căn shophouse thương mại, khu vui chơi trẻ em và hệ thống an ninh 24/7.',
  },
  {
    question: 'Công viên nội khu Bcons Tam Hiệp có quy mô thế nào?',
    answer:
      'Công viên trung tâm có diện tích hơn 7.700 m² với quảng trường nước, lối dạo bộ rợp bóng mát, mang lại không gian sống xanh hiếm hoi ngay giữa lõi đô thị trung tâm Biên Hòa.',
  },
  {
    question: 'Tiện ích ngoại khu quanh 236 Phan Trung gồm những gì?',
    answer:
      'Trong bán kính 500 m – 1 km có Chợ Tam Hiệp, siêu thị Co.opmart, Vincom Plaza, Bệnh viện Đa khoa Đồng Nai, BV Quốc tế Hoàn Mỹ và trường học từ mầm non đến đại học.',
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
        <AmenityFaq />
        <AmenityRelated />
        <Contact />
      </main>
      <SiteFooter />
      <FloatingContact />
    </SitePreferencesProvider>
  )
}
