import type { Metadata } from 'next'
import { SiteHeader } from '@/components/layout/site-header'
import { SiteFooter } from '@/components/layout/site-footer'
import { FloatingContact } from '@/components/layout/floating-contact'
import { SitePreferencesProvider } from '@/components/layout/site-preferences'
import { NewsListing } from '@/components/pages/tin-tuc/news-listing'
import { NewsReferences } from '@/components/pages/tin-tuc/news-references'
import { Contact } from '@/components/home/contact'
import { BreadcrumbSchema } from '@/components/seo/json-ld'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Tin Tức & Phân Tích Chuyên Sâu Bcons Central Park — Cẩm Nang Bất Động Sản',
  description:
    'Tổng hợp tin tức, cẩm nang mua căn hộ, đánh giá vị trí 236 Phan Trung, phân tích pháp lý và hướng dẫn tài chính mua nhà trả góp tại Bcons Central Park Tam Hiệp.',
  alternates: { canonical: '/tin-tuc' },
  openGraph: {
    title: 'Tin Tức & Cẩm Nang Bất Động Sản Bcons Central Park',
    description:
      'Góc nhìn chuyên gia, cập nhật thị trường và cẩm nang kiểm tra pháp lý căn hộ hình thành trong tương lai.',
    url: 'https://www.canhobconstamhiep.com/tin-tuc',
    images: [{ url: '/images/hero-towers.png', width: 1200, height: 630, alt: 'Tin tức Bcons Central Park' }],
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
        <NewsReferences />
        <Contact />
      </main>
      <SiteFooter />
      <FloatingContact />
    </SitePreferencesProvider>
  )
}
