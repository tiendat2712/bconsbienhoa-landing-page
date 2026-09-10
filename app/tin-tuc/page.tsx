import type { Metadata } from 'next'
import { SiteHeader } from '@/components/layout/site-header'
import { SiteFooter } from '@/components/layout/site-footer'
import { FloatingContact } from '@/components/layout/floating-contact'
import { SitePreferencesProvider } from '@/components/layout/site-preferences'
import { NewsListing } from '@/components/pages/tin-tuc/news-listing'
import { NewsReferences } from '@/components/pages/tin-tuc/news-references'
import { DirectorConsultation } from '@/components/shared/director-consultation'
import { BreadcrumbSchema } from '@/components/seo/json-ld'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Tin Tức & Phân Tích Chuyên Sâu Bcons Central Park — Cẩm Nang Bất Động Sản',
  description:
    'Tổng hợp tin tức, cẩm nang mua căn hộ, đánh giá vị trí 236 Phan Trung, phân tích pháp lý và hướng dẫn tài chính mua nhà trả góp tại Bcons Central Park Tam Hiệp.',
  keywords: [
    'tin tức bcons central park',
    'tin tuc bcons central park',
    'đánh giá dự án bcons tam hiệp',
    'kinh nghiệm mua căn hộ bcons',
    'vật tư bàn giao bcons central park',
    'bài viết bcons biên hòa',
    'lê ngọc long bcons',
  ],
  alternates: { canonical: '/tin-tuc' },
  openGraph: {
    title: 'Tin Tức & Cẩm Nang Bất Động Sản Bcons Central Park',
    description:
      'Góc nhìn chuyên gia, cập nhật thị trường và cẩm nang kiểm tra pháp lý căn hộ hình thành trong tương lai.',
    url: 'https://www.canhobconstamhiep.com/tin-tuc',
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
        alt: 'Tin tức & Cẩm nang Bcons Central Park Tam Hiệp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tin Tức & Cẩm Nang Bất Động Sản Bcons Central Park',
    description: 'Góc nhìn chuyên sâu, cẩm nang tài chính và phân tích pháp lý căn hộ Bcons Tam Hiệp.',
    images: ['https://www.canhobconstamhiep.com/images/og-share.jpg'],
  },
}

export default function NewsPage() {
  return (
    <SitePreferencesProvider>
      <BreadcrumbSchema
        items={[
          { name: 'Trang chủ', url: 'https://www.canhobconstamhiep.com' },
          { name: 'Tin tức', url: 'https://www.canhobconstamhiep.com/tin-tuc' },
        ]}
      />
      <SiteHeader />
      <main>
        <NewsListing />
        <DirectorConsultation />
        <NewsReferences />
      </main>
      <SiteFooter />
      <FloatingContact />
    </SitePreferencesProvider>
  )
}
