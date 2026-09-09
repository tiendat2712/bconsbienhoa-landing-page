'use client'

import { ExternalLink, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Reveal, SectionHeading } from '@/components/layout/reveal'
import { useSitePreferences } from '@/components/layout/site-preferences'

export function News() {
  const { t, theme, locale } = useSitePreferences()
  const isDark = theme === 'dark'
  const isEn = locale === 'en'

  return (
    <section id="tin-tuc" className="scroll-mt-24 bg-background py-16 sm:py-20 lg:py-24 transition-colors">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          eyebrow={t.news.eyebrow}
          title={t.news.title}
          subtitle={
            isEn
              ? 'Authoritative coverage and economic analysis from leading national financial press'
              : 'Nhịp đập thị trường & thông tin quy mô từ các đầu báo kinh tế - tài chính hàng đầu'
          }
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {t.news.posts.map((post, index) => (
            <Reveal key={post.title} delay={0.06 * index}>
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${post.title} - ${post.source}`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border/80 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl dark:border-white/10 dark:bg-card/80 dark:hover:border-[#e6c887]/40"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                  <img
                    src={post.image || '/placeholder.svg'}
                    alt={post.title}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 z-10">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold shadow-sm backdrop-blur-md transition-colors ${
                        isDark
                          ? 'bg-[#072018]/90 text-[#e6c887] border border-[#e6c887]/30'
                          : 'bg-white/95 text-primary border border-primary/20'
                      }`}
                    >
                      {post.source}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 z-10">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium bg-black/60 text-white/90 backdrop-blur-md">
                      {post.date}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[11px] font-bold tracking-wider uppercase transition-colors ${
                        isDark ? 'text-[#e6c887]' : 'text-[#b88728]'
                      }`}
                    >
                      {post.tag}
                    </span>
                  </div>

                  <h3 className="mt-2.5 font-serif text-lg sm:text-xl font-bold leading-snug text-balance text-foreground group-hover:text-primary dark:group-hover:text-[#e6c887] transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {post.summary}
                  </p>

                  <div className="mt-auto pt-6 flex items-center justify-between border-t border-border/60 dark:border-white/10">
                    <span
                      className={`inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold transition-colors duration-300 ${
                        isDark
                          ? 'text-[#e6c887] group-hover:text-[#f7e4b5]'
                          : 'text-primary group-hover:text-[#b88728]'
                      }`}
                    >
                      {t.news.readMore}
                      <ExternalLink className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                    <span className="text-[11px] text-muted-foreground/70 font-medium">
                      {post.source} ↗
                    </span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/tin-tuc"
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 shadow-xs hover:shadow-md ${
              isDark
                ? 'bg-white/10 hover:bg-[#e6c887] text-white hover:text-[#072018] border border-white/15 hover:border-[#e6c887]'
                : 'bg-primary/5 hover:bg-primary text-primary hover:text-white border border-primary/20 hover:border-primary'
            }`}
          >
            <span>{t.news.viewAll}</span>
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

