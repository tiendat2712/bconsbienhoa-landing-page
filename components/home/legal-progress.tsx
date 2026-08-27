'use client'

import { Award, FileCheck2, HardHat, Hourglass } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/layout/reveal'
import { useSitePreferences } from '@/components/layout/site-preferences'

export function LegalProgress() {
  const { t, theme } = useSitePreferences()
  const isDark = theme === 'dark'

  const legalIcons = [FileCheck2, HardHat, Award, Hourglass]

  return (
    <>
      <section id="phap-ly" className="scroll-mt-24 bg-background py-20 lg:py-28 transition-colors">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow={t.legal.eyebrow}
            title={t.legal.title}
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.legal.items.map((item, index) => {
              const Icon = legalIcons[index % legalIcons.length]
              return (
                <Reveal key={item.title} delay={0.05 * index}>
                  <div className="h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 dark:hover:border-[#e6c887]/50 hover:shadow-lg dark:border-white/10 dark:bg-card/80">
                    <Icon className={`size-5 transition-colors duration-500 ${isDark ? 'text-[#e6c887]' : 'text-primary'}`} />
                    <h3 className="mt-4 font-serif text-lg font-bold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>

          <div
            id="chu-dau-tu"
            className="mt-16 scroll-mt-24 grid gap-10 rounded-3xl border border-border bg-secondary/50 dark:bg-card/60 dark:border-white/10 p-8 md:p-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center shadow-lg"
          >
            <Reveal>
              <p
                className={`text-xs font-semibold tracking-[0.22em] uppercase transition-colors duration-500 ${
                  isDark ? 'text-[#e6c887]' : 'text-primary'
                }`}
              >
                {t.legal.investorEyebrow}
              </p>
              <h3 className="mt-4 font-serif text-3xl leading-tight text-balance font-bold text-foreground">
                {t.legal.investorTitle}
              </h3>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="leading-relaxed text-pretty text-muted-foreground">
                {t.legal.investorDesc}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        id="tien-do"
        className="scroll-mt-24 bg-[#072018] dark:bg-[#071712] py-20 text-[#d1dcd6] border-y border-emerald-950/40 dark:border-white/5 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            tone="dark"
            eyebrow={t.legal.progressEyebrow}
            title={t.legal.progressTitle}
            description={t.legal.progressDesc}
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/15 bg-white/10 shadow-2xl md:grid-cols-4">
            {t.legal.timeline.map((item, index) => (
              <Reveal key={item.phase} delay={0.06 * index}>
                <div className="h-full bg-[#072018]/90 dark:bg-[#071712]/90 p-7 transition-colors duration-300 hover:bg-[#0a2c22]">
                  <p className="font-serif text-2xl font-bold text-[#e6c887]">{item.period}</p>
                  <p className="mt-3 text-xs font-semibold tracking-[0.16em] text-emerald-300 uppercase">
                    {item.phase}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[#c2d3cb]">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
