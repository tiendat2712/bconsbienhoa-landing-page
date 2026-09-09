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
    },
    {
      url: `${baseUrl}/gia-ban`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/mat-bang`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/vi-tri`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/tien-ich`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/phap-ly`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/chu-dau-tu`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/tien-do`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/tin-tuc`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.85,
    },
  ]

  // 2. Dynamic News Articles (/tin-tuc/[slug])
  const articleRoutes: MetadataRoute.Sitemap = NEWS_ARTICLES.map((article) => ({
    url: `${baseUrl}/tin-tuc/${article.slug}`,
    lastModified: parseVnDate(article.date),
    changeFrequency: 'weekly',
    priority: article.featured ? 0.8 : 0.75,
  }))

  return [...staticRoutes, ...articleRoutes]
}
