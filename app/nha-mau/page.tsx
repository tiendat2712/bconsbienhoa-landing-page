import type { Metadata } from 'next'
import { SiteHeader } from '@/components/layout/site-header'
import { SiteFooter } from '@/components/layout/site-footer'
import { FloatingContact } from '@/components/layout/floating-contact'
import { SitePreferencesProvider } from '@/components/layout/site-preferences'
import { ShowhouseDetail } from '@/components/pages/nha-mau/showhouse-detail'
import { ShowhouseFaq } from '@/components/pages/nha-mau/showhouse-faq'
import { ShowhouseRelated } from '@/components/pages/nha-mau/showhouse-related'
import { DirectorConsultation } from '@/components/shared/director-consultation'
import { BreadcrumbSchema, FAQSchema } from '@/components/seo/json-ld'
import { showhouseFaqs } from '@/lib/nha-mau-data'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Nhà Mẫu Bcons Central Park Tam Hiệp — Tham Quan & Tiêu Chuẩn Bàn Giao',
  description:
    'Tham quan nhà mẫu Bcons Central Park Tam Hiệp: chiêm ngưỡng 45 phối cảnh thực tế 3 căn hộ mẫu A1 (88 m²), B4 (73 m²), C1 (52 m²), đối chiếu danh mục vật tư bàn giao và checklist 6 điểm cần kiểm tra trước khi đặt cọc.',
  keywords: [
    'nhà mẫu bcons central park',
    'nha mau bcons central park',
    'nhà mẫu bcons tam hiệp',
    'căn hộ mẫu bcons biên hòa',
    'tiêu chuẩn bàn giao bcons central park',
    'hình ảnh nhà mẫu bcons',
    'tham quan nhà mẫu bcons',
    'căn mẫu a1 bcons central park',
    'căn mẫu b4 bcons tam hiệp',
    'căn mẫu c1 bcons biên hòa',
  ],
  alternates: { canonical: '/nha-mau' },
  openGraph: {
    title: 'Nhà Mẫu Bcons Central Park Tam Hiệp — Tham Quan & Tiêu Chuẩn Bàn Giao',
    description:
      'Trải nghiệm trực tiếp 45 phối cảnh nội thất sắc nét của 3 mẫu căn A1, B4, C1 và checklist 6 điểm cần kiểm tra trước khi quyết định ký hợp đồng.',
    url: 'https://www.canhobconstamhiep.com/nha-mau',
    siteName: 'Bcons Central Park Tam Hiệp',
    locale: 'vi_VN',
    type: 'website',
    images: [
      {
        url: 'https://www.canhobconstamhiep.com/images/nha-mau/a1-01-bcons-central-park-nha-mau-a1-phong-khach.wQVLyslN_ZSqv2q.webp',
        secureUrl: 'https://www.canhobconstamhiep.com/images/nha-mau/a1-01-bcons-central-park-nha-mau-a1-phong-khach.wQVLyslN_ZSqv2q.webp',
        width: 1600,
        height: 1200,
        type: 'image/webp',
        alt: 'Phòng khách nhà mẫu căn A1 Bcons Central Park Tam Hiệp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nhà Mẫu Bcons Central Park Tam Hiệp — Tham Quan & Tiêu Chuẩn Bàn Giao',
    description:
      'Chiêm ngưỡng không gian sống thực tế tỉ lệ 1:1, 45 ảnh render chi tiết 3 loại căn A1, B4, C1 và đăng ký tham quan thực tế.',
    images: [
      'https://www.canhobconstamhiep.com/images/nha-mau/a1-01-bcons-central-park-nha-mau-a1-phong-khach.wQVLyslN_ZSqv2q.webp',
    ],
  },
}

export default function ShowhousePage() {
  const faqSchemaData = showhouseFaqs.map((f) => ({
    question: f.question,
    answer: f.answer,
  }))

  return (
    <SitePreferencesProvider>
      <BreadcrumbSchema
        items={[
          { name: 'Trang chủ', url: 'https://www.canhobconstamhiep.com' },
          { name: 'Nhà mẫu', url: 'https://www.canhobconstamhiep.com/nha-mau' },
        ]}
      />
      <FAQSchema faqs={faqSchemaData} />
      <SiteHeader />
      <main>
        <ShowhouseDetail />
        <DirectorConsultation id="tu-van" />
        <ShowhouseFaq />
        <ShowhouseRelated />
      </main>
      <SiteFooter />
      <FloatingContact />
    </SitePreferencesProvider>
  )
}
