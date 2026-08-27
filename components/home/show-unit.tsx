'use client'

import { ArrowRight } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/layout/reveal'
import { useSitePreferences } from '@/components/layout/site-preferences'

export function ShowUnit() {
  const { t, theme } = useSitePreferences()
  const isDark = theme === 'dark'

  return (
    <section id="nha-mau" className="scroll-mt-24 bg-background py-20 lg:py-28 transition-colors">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        <Reveal>
          <div className="relative">
            <img
              src="/images/interior-living.png"
              alt={t.showUnit.imageAlt}
              className={`aspect-4/3 w-full rounded-3xl object-cover shadow-2xl border transition-all duration-500 ${
                isDark ? 'border-white/15' : 'border-border'
              }`}
            />
            {/* Floating Glass Badge */}
            <div
              className={`absolute -bottom-6 -right-2 hidden rounded-2xl px-6 py-5 shadow-2xl backdrop-blur-xl transition-all duration-500 sm:block ${
                isDark
                  ? 'border border-[#e6c887]/30 bg-[#0c1c16]/95 ring-1 ring-[#e6c887]/20 shadow-[0_20px_40px_rgba(0,0,0,0.6)]'
                  : 'border border-border bg-card'
              }`}
            >
              <p
                className={`text-[0.7rem] tracking-[0.16em] uppercase font-bold transition-colors duration-500 ${
                  isDark ? 'text-[#e6c887]/80' : 'text-muted-foreground'
                }`}
              >
                {t.showUnit.eyebrow}
              </p>
              <p
                className={`mt-1 font-serif text-lg font-bold transition-colors duration-500 ${
                  isDark ? 'text-[#e6c887]' : 'text-primary'
                }`}
              >
                {t.showUnit.badge}
              </p>
            </div>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            tone={isDark ? 'dark' : 'light'}
            eyebrow={t.showUnit.eyebrow}
            title={t.showUnit.title}
            description={t.showUnit.desc}
          />

          <Reveal delay={0.1} className="mt-8">
            <ul className="flex flex-col gap-3">
              {t.showUnit.specs.map((spec) => (
                <li key={spec} className="flex items-start gap-3 text-sm leading-relaxed text-foreground/85">
                  <span
                    className={`mt-2 size-1.5 shrink-0 rounded-full transition-colors duration-500 ${
                      isDark ? 'bg-[#e6c887]' : 'bg-primary'
                    }`}
                  />
                  <span>{spec}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <a
              href="#dang-ky"
              className={`group mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition-all duration-300 ${
                isDark
                  ? 'border border-[#e6c887] bg-gradient-to-r from-[#e6c887]/15 to-[#e6c887]/5 text-[#e6c887] hover:bg-gradient-to-r hover:from-[#e6c887] hover:via-[#f7e4b5] hover:to-[#e6c887] hover:text-[#072018] shadow-[0_10px_25px_-5px_rgba(230,200,135,0.3)] hover:scale-[1.02]'
                  : 'border border-primary text-primary hover:bg-primary hover:text-white hover:scale-[1.02]'
              }`}
            >
              <span>{t.showUnit.cta}</span>
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
