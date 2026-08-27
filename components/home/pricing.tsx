'use client'

import { ArrowRight, Check } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/layout/reveal'
import { useSitePreferences } from '@/components/layout/site-preferences'

export function Pricing() {
  const { t, theme } = useSitePreferences()
  const isDark = theme === 'dark'

  return (
    <section id="gia-ban" className="scroll-mt-24 bg-secondary/40 dark:bg-card/40 py-20 lg:py-28 transition-colors">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          eyebrow={t.pricing.eyebrow}
          title={t.pricing.title}
          description={t.pricing.desc}
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <div
              className={`overflow-hidden rounded-3xl border shadow-xl transition-all duration-500 ${
                isDark ? 'border-white/15 bg-card/80 shadow-[0_20px_40px_rgba(0,0,0,0.5)]' : 'border-border bg-card'
              }`}
            >
              <table className="w-full text-left">
                <caption className="sr-only">{t.pricing.title}</caption>
                <thead>
                  <tr
                    className={`transition-colors duration-500 ${
                      isDark
                        ? 'bg-gradient-to-r from-[#e6c887] via-[#f7e4b5] to-[#e6c887] text-[#072018]'
                        : 'bg-primary text-primary-foreground'
                    }`}
                  >
                    <th scope="col" className="px-6 py-4 text-xs font-bold tracking-[0.16em] uppercase">
                      {t.pricing.productLabel}
                    </th>
                    <th scope="col" className="px-6 py-4 text-xs font-bold tracking-[0.16em] uppercase">
                      {t.pricing.areaLabel}
                    </th>
                    <th scope="col" className="px-6 py-4 text-right text-xs font-bold tracking-[0.16em] uppercase">
                      {t.pricing.priceLabel}
                    </th>
                  </tr>
                </thead>
                <tbody className={`divide-y transition-colors duration-500 ${isDark ? 'divide-white/10' : 'divide-border'}`}>
                  {t.pricing.rows.map((row) => (
                    <tr
                      key={row.type}
                      className={`transition-colors ${isDark ? 'hover:bg-white/5' : 'hover:bg-secondary/60'}`}
                    >
                      <th scope="row" className="px-6 py-5 text-sm font-semibold text-foreground">
                        {row.type}
                      </th>
                      <td className="px-6 py-5 text-sm text-muted-foreground">{row.area}</td>
                      <td
                        className={`px-6 py-5 text-right font-serif text-lg font-bold transition-colors duration-500 ${
                          isDark ? 'text-[#e6c887]' : 'text-primary'
                        }`}
                      >
                        {row.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <a
              href="/gia-ban"
              className={`mt-5 inline-flex items-center gap-2 text-sm font-bold transition-colors duration-300 ${
                isDark ? 'text-[#e6c887] hover:text-[#f7e4b5]' : 'text-primary hover:text-emerald-700'
              }`}
            >
              <span>{t.pricing.viewDetail}</span>
              <ArrowRight className="size-4" />
            </a>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="h-full rounded-3xl bg-[#072018] dark:bg-[#071712] p-8 text-white shadow-2xl border border-white/10 flex flex-col justify-between">
              <div>
                <p className="text-xs font-semibold tracking-[0.22em] text-[#e6c887] uppercase">
                  {t.pricing.policyEyebrow}
                </p>
                <h3 className="mt-3 font-serif text-2xl leading-snug text-balance font-bold text-white">
                  {t.pricing.policyTitle}
                </h3>
                <ul className="mt-6 flex flex-col gap-4">
                  {t.pricing.policies.map((policy) => (
                    <li key={policy} className="flex items-start gap-3 text-sm leading-relaxed text-[#d1dcd6]">
                      <Check className="mt-0.5 size-4 shrink-0 text-[#e6c887]" />
                      {policy}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="#dang-ky"
                className="mt-8 flex items-center justify-center rounded-full bg-gradient-to-r from-[#e6c887] via-[#f7e4b5] to-[#e6c887] text-[#072018] font-bold px-6 py-3.5 text-sm transition-all duration-300 hover:scale-[1.02] shadow-[0_10px_25px_-5px_rgba(230,200,135,0.4)]"
              >
                {t.pricing.cta}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
