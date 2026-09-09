import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SiteHeader } from '@/components/layout/site-header'
import { SiteFooter } from '@/components/layout/site-footer'
import { FloatingContact } from '@/components/layout/floating-contact'
import { SitePreferencesProvider } from '@/components/layout/site-preferences'
import { BreadcrumbSchema, NewsArticleSchema } from '@/components/seo/json-ld'
import { ALL_NEWS_SLUGS, getArticleBySlug } from '@/data/news-articles'
import { NewsArticleDetail } from '@/components/pages/tin-tuc/news-article-detail'

export const dynamic = 'force-static'

type Props = {
  params: Promise<{ slug: string }>
}

function parseVnDateToIso(dateStr?: string): string {
  if (!dateStr) return new Date().toISOString()
  const parts = dateStr.split('/')
  if (parts.length === 3) {
    const day = parseInt(parts[0], 10)
    const month = parseInt(parts[1], 10) - 1
    const year = parseInt(parts[2], 10)
    const date = new Date(year, month, day, 8, 0, 0)
    if (!isNaN(date.getTime())) return date.toISOString()
  }
  return new Date().toISOString()
}

export async function generateStaticParams() {
  return ALL_NEWS_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    return {
      title: 'Bài viết không tìm thấy | Bcons Central Park',
      description: 'Bài viết bạn đang tìm kiếm không tồn tại hoặc đã được chuyển hướng.',
    }
  }

  const publishedIso = parseVnDateToIso(article.date)

  return {
    title: `${article.title} | Bcons Central Park Tam Hiệp`,
    description: article.description,
    keywords: [
      article.title,
      article.categoryLabel,
      'bcons central park',
      'bcons central park tam hiệp',
      'can ho bcons tam hiep',
      'căn hộ bcons tam hiệp',
      'bcons tam hiệp',
      'tin tức bcons central park',
      'kinh nghiệm mua căn hộ bcons',
      'lê ngọc long',
    ],
    authors: [{ name: article.author || 'Lê Ngọc Long', url: 'https://www.canhobconstamhiep.com' }],
    alternates: { canonical: `/tin-tuc/${slug}` },
    openGraph: {
      title: article.title,
      description: article.description,
      url: `https://www.canhobconstamhiep.com/tin-tuc/${slug}`,
      siteName: 'Bcons Central Park Tam Hiệp',
      locale: 'vi_VN',
      type: 'article',
      publishedTime: publishedIso,
      authors: [article.author || 'Lê Ngọc Long'],
      section: article.categoryLabel,
      images: [
        {
          url: article.thumbnail,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description,
      images: [article.thumbnail],
      creator: 'Lê Ngọc Long',
    },
  }
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  const publishedIso = parseVnDateToIso(article.date)

  return (
    <SitePreferencesProvider>
      <BreadcrumbSchema
        items={[
          { name: 'Trang chủ', url: 'https://www.canhobconstamhiep.com' },
          { name: 'Tin tức', url: 'https://www.canhobconstamhiep.com/tin-tuc' },
          { name: article.title, url: `https://www.canhobconstamhiep.com/tin-tuc/${slug}` },
        ]}
      />
      <NewsArticleSchema
        title={article.title}
        description={article.description}
        url={`https://www.canhobconstamhiep.com/tin-tuc/${slug}`}
        image={article.thumbnail}
        datePublished={publishedIso}
        dateModified={publishedIso}
        authorName={article.author || 'Lê Ngọc Long'}
        categoryLabel={article.categoryLabel}
      />
      <SiteHeader />
      <main>
        <NewsArticleDetail article={article} />
      </main>
      <SiteFooter />
      <FloatingContact />
    </SitePreferencesProvider>
  )
}
