'use client'

import { ArrowUpRight } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/layout/reveal'
import { useSitePreferences } from '@/components/layout/site-preferences'

export function News() {
  const { t, theme } = useSitePreferences()
  const isDark = theme === 'dark'

  return (
    <section id="tin-tuc" className="scroll-mt-24 bg-background py-20 lg:py-28 transition-colors">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          eyebrow={t.news.eyebrow}
          title={t.news.title}
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {t.news.posts.map((post, index) => (
            <Reveal key={post.title} delay={0.06 * index}>
              <a
                href="/tin-tuc"
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl dark:border-white/10 dark:bg-card/80"
              >
                <div className="overflow-hidden">
                  <img
                    src={post.image || '/placeholder.svg'}
                    alt={post.title}
                    className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span
                      className={`rounded-full px-3 py-1 font-semibold transition-colors duration-500 ${
                        isDark ? 'bg-[#e6c887]/15 text-[#e6c887]' : 'bg-secondary text-primary'
                      }`}
                    >
                      {post.tag}
                    </span>
                    <time>{post.date}</time>
                  </div>
                  <h3 className="mt-4 font-serif text-xl font-bold leading-snug text-balance text-foreground">
                    {post.title}
                  </h3>
                  <span
                    className={`mt-auto flex items-center gap-1.5 pt-6 text-sm font-semibold transition-colors duration-500 ${
                      isDark ? 'text-[#e6c887]' : 'text-primary'
                    }`}
                  >
                    {t.news.readMore}
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
