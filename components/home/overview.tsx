'use client'

import { Building2, CalendarClock, Landmark, LayoutGrid } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/layout/reveal'
import { useSitePreferences } from '@/components/layout/site-preferences'

export function Overview() {
  const { t, theme } = useSitePreferences()
  const isDark = theme === 'dark'

  const statIcons = [Building2, LayoutGrid, Landmark, CalendarClock]

  return (
    <section id="tong-quan" className="scroll-mt-24 bg-background py-20 lg:py-28 transition-colors">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow={t.overview.eyebrow}
              title={t.overview.title}
              description={t.overview.desc}
            />

            <Reveal delay={0.1} className="mt-10 grid grid-cols-2 gap-4">
              {t.overview.stats.map(([label, value], idx) => {
                const Icon = statIcons[idx % statIcons.length]
                return (
                  <div
                    key={label}
                    className={`group rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                      isDark
                        ? 'border-white/10 bg-card/70 hover:border-[#e6c887]/50'
                        : 'border-border bg-card hover:border-primary/40'
                    }`}
                  >
                    <Icon className={`size-5 transition-colors duration-500 ${isDark ? 'text-[#e6c887]' : 'text-primary'}`} />
                    <p className="mt-4 font-serif text-2xl text-foreground font-bold">{value}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{label}</p>
                  </div>
                )
              })}
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-xl dark:border-white/10 dark:bg-card/80">
              <img
                src="/images/aerial-location.png"
                alt={t.overview.imageAlt}
                className="h-64 w-full object-cover md:h-72"
              />
              <dl className="divide-y divide-border dark:divide-white/10">
                {t.overview.facts.map(([label, value]) => (
                  <div
                    key={label}
                    className="flex flex-col gap-1 px-6 py-4 transition-colors hover:bg-secondary/60 dark:hover:bg-white/5 sm:flex-row sm:items-center sm:justify-between sm:gap-8"
                  >
                    <dt className="text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                      {label}
                    </dt>
                    <dd className="text-sm font-semibold text-foreground sm:text-right">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
