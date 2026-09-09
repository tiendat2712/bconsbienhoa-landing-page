'use client'

import Link from 'next/link'
import { ArrowRight, Clock, ExternalLink, MapPin } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/layout/reveal'
import { useSitePreferences } from '@/components/layout/site-preferences'

export function Location() {
  const { t, locale } = useSitePreferences()
  const isEn = locale === 'en'

  return (
    <section
      id="vi-tri"
      className="scroll-mt-24 bg-background py-16 sm:py-20 lg:py-24 transition-colors border-y border-border/60 dark:border-white/5"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow={t.location.eyebrow}
          title={isEn ? 'Bcons Central Park Location' : 'Vị Trí Bcons Central Park'}
          subtitle={isEn ? 'Strategic Core Of Bien Hoa' : 'Mặt Tiền 236 Phan Trung – Tâm Điểm Biên Hòa'}
          description={t.location.desc}
        />

        <div className="mt-8 sm:mt-10 lg:mt-12 grid gap-6 lg:grid-cols-[1.05fr_1.2fr] xl:grid-cols-[1fr_1.25fr] items-stretch">
          {/* Left Column: Interactive Google Map Card */}
          <Reveal>
            <div className="flex flex-col h-full overflow-hidden rounded-2xl border border-border dark:border-white/10 bg-card shadow-sm hover:shadow-md transition-all">
              {/* Forest Emerald Header Bar */}
              <div className="bg-[#072018] dark:bg-[#071712] px-4 py-3 sm:px-5 sm:py-3.5 flex items-center justify-between gap-3 border-b border-emerald-950/40 dark:border-white/10">
                <div className="flex items-center gap-2.5 min-w-0">
                  <MapPin className="size-5 shrink-0 text-[#e6c887]" />
                  <div className="min-w-0">
                    <div className="text-xs sm:text-sm font-serif font-bold text-white tracking-wide truncate">
                      <span className="text-[#e6c887]">BCONS</span> CENTRAL PARK
                    </div>
                    <div className="text-[11px] sm:text-xs font-sans text-emerald-100/75 dark:text-slate-300 truncate">
                      {t.location.mapCardAddress}
                    </div>
                  </div>
                </div>

                <a
                  href={t.location.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center gap-1.5 rounded-lg bg-[#e6c887] hover:bg-[#dfbd78] text-[#072018] px-3.5 py-1.5 text-xs font-sans font-bold shadow-sm transition-transform hover:scale-105 active:scale-95"
                >
                  <span>{t.location.directions}</span>
                  <ExternalLink className="size-3.5" />
                </a>
              </div>

              {/* Live Interactive Google Map with Pan/Zoom controls & Satellite toggle */}
              <div className="relative w-full flex-1 min-h-[300px] sm:min-h-[340px] bg-muted/40">
                <iframe
                  title={t.location.imageAlt}
                  src={`https://www.google.com/maps?q=236+Phan+Trung,+Tam+Hi%E1%BB%87p,+Bi%C3%AAn+H%C3%B2a,+%C4%90%E1%BB%93ng+Nai&hl=${isEn ? 'en' : 'vi'}&z=16&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full border-0 min-h-[300px]"
                />
              </div>
            </div>
          </Reveal>

          {/* Right Column: 6 Connectivity Cards (2 rows x 3 cols) */}
          <Reveal delay={0.12}>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 sm:gap-4 h-full">
              {t.location.connectCards.map((item) => (
                <div
                  key={item.title}
                  className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-4 sm:p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-primary/40 dark:border-white/10 dark:bg-card/75 dark:hover:border-[#e6c887]/50"
                >
                  <div>
                    <div className="text-2xl sm:text-3xl font-serif font-bold tracking-tight text-primary dark:text-[#e6c887]">
                      {item.distance}
                    </div>
                    <div className="mt-1.5 text-xs sm:text-sm font-sans font-semibold text-foreground leading-snug line-clamp-2">
                      {item.title}
                    </div>
                  </div>

                  <div className="mt-3 flex items-center gap-1.5 pt-2 border-t border-border/70 dark:border-white/5 text-xs font-sans text-muted-foreground">
                    <Clock className="size-3.5 text-primary dark:text-[#e6c887] shrink-0" />
                    <span>{item.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Strategic Highlights 3-Column Card */}
        <Reveal delay={0.16} className="mt-8 sm:mt-10">
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-7 lg:p-8 shadow-sm dark:border-white/10 dark:bg-card/75">
            <div className="grid gap-6 md:grid-cols-3 md:gap-8">
              {t.location.strategicHighlights.map((item, idx) => (
                <div
                  key={item.title}
                  className={[
                    'flex flex-col',
                    idx > 0
                      ? 'pt-6 md:pt-0 border-t md:border-t-0 md:border-l border-border/70 dark:border-white/10 md:pl-8'
                      : '',
                  ].join(' ')}
                >
                  <h3 className="font-serif text-xs sm:text-sm lg:text-[15px] font-bold tracking-wider text-foreground dark:text-[#e6c887] uppercase">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm font-sans leading-relaxed text-muted-foreground dark:text-[#c2d3cb]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Disclaimer & Action Button to /vi-tri */}
        <Reveal delay={0.2} className="mt-6 sm:mt-8 text-center">
          <p className="font-sans text-xs text-muted-foreground dark:text-slate-400 max-w-2xl mx-auto">
            {t.location.disclaimer}
          </p>
          <div className="mt-4 sm:mt-5 flex justify-center">
            <Link
              href="/vi-tri"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm font-sans font-bold tracking-wider text-foreground shadow-sm transition-all duration-300 hover:border-primary/40 hover:bg-secondary/50 hover:shadow-md dark:border-white/15 dark:bg-card dark:text-white dark:hover:border-[#e6c887] dark:hover:text-[#e6c887] dark:hover:bg-[#e6c887]/10"
            >
              <span>{t.location.viewMoreBtn}</span>
              <ArrowRight className="size-4 text-primary dark:text-[#e6c887] transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
