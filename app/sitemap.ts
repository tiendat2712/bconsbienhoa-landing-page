import type { MetadataRoute } from 'next'
import { NEWS_ARTICLES } from '@/data/news-articles'

/**
 * Parses Vietnamese date string 'DD/MM/YYYY' into a Date object.
 */
function parseVnDate(dateStr?: string): Date {
  if (!dateStr) return new Date()
  const parts = dateStr.split('/')
  if (parts.length === 3) {
    const day = parseInt(parts[0], 10)
    const month = parseInt(parts[1], 10) - 1
    const year = parseInt(parts[2], 10)
    const date = new Date(year, month, day)
    if (!isNaN(date.getTime())) return date
  }
  return new Date()
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.canhobconstamhiep.com'
  const currentDate = new Date()

  // 1. Core Landing & Subpages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
      images: [`${baseUrl}/images/hero-towers.png`],
    },
    {
      url: `${baseUrl}/gia-ban`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
      images: [`${baseUrl}/images/hero-towers.png`],
    },
    {
      url: `${baseUrl}/mat-bang`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
      images: [`${baseUrl}/images/floorplans/masterplan-all-blocks.webp`],
    },
    {
      url: `${baseUrl}/vi-tri`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
      images: [`${baseUrl}/images/news/bcons-central-park-ban-do-lien-ket-vung.webp`],
    },
    {
      url: `${baseUrl}/tien-ich`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
      images: [`${baseUrl}/images/amenities/masterplan-60-tien-ich.webp`],
    },
    {
      url: `${baseUrl}/phap-ly`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
      images: [`${baseUrl}/images/news/bcons-central-park-checklist-phap-ly.webp`],
    },
    {
      url: `${baseUrl}/chu-dau-tu`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
      images: [`${baseUrl}/images/bcons-central-park-chu-dau-tu-bcons.webp`],
    },
    {
      url: `${baseUrl}/tien-do`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
      images: [`${baseUrl}/images/hero-towers.png`],
    },
    {
      url: `${baseUrl}/tin-tuc`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.85,
      images: [`${baseUrl}/images/news/bcons-central-park-tam-hiep-phoi-canh.webp`],
    },
  ]

  // 2. Dynamic News Articles (/tin-tuc/[slug])
  const articleRoutes: MetadataRoute.Sitemap = NEWS_ARTICLES.map((article) => ({
    url: `${baseUrl}/tin-tuc/${article.slug}`,
    lastModified: parseVnDate(article.date),
    changeFrequency: 'weekly',
    priority: article.featured ? 0.8 : 0.75,
    images: article.thumbnail ? [`${baseUrl}${article.thumbnail}`] : undefined,
  }))

  return [...staticRoutes, ...articleRoutes]
}
