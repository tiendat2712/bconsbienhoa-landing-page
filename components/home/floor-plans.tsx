'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, BedDouble, Compass, Maximize2 } from 'lucide-react'
import { SectionHeading } from '@/components/layout/reveal'
import { useSitePreferences } from '@/components/layout/site-preferences'

export function FloorPlans() {
  const { t, theme } = useSitePreferences()
  const isDark = theme === 'dark'
  const [active, setActive] = useState('2pn')

  const plansList = t.plans.plans
  const plan = plansList.find((item) => item.id === active) ?? plansList[0]

  return (
    <section id="mat-bang" className="scroll-mt-24 bg-secondary/40 dark:bg-card/40 py-20 lg:py-28 transition-colors">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          eyebrow={t.plans.eyebrow}
          title={t.plans.title}
          description={t.plans.desc}
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <div
            className="flex flex-col gap-3"
            role="tablist"
            aria-label={t.plans.tabs}
          >
            {plansList.map((item) => {
              const isActive = item.id === active
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(item.id)}
                  className={[
                    'flex items-center justify-between gap-4 rounded-2xl border px-5 py-4 text-left transition-all duration-300 cursor-pointer',
                    isActive
                      ? isDark
                        ? 'border-[#e6c887] bg-gradient-to-r from-[#e6c887] via-[#f7e4b5] to-[#e6c887] text-[#072018] shadow-lg font-bold'
                        : 'border-primary bg-primary text-primary-foreground shadow-lg'
                      : 'border-border bg-card text-foreground hover:border-primary/40 dark:hover:border-[#e6c887]/50 hover:bg-card dark:border-white/10 dark:bg-card/80',
                  ].join(' ')}
                >
                  <span>
                    <span className="block font-serif text-lg font-bold">{item.name}</span>
                    <span
                      className={[
                        'mt-0.5 block text-sm',
                        isActive
                          ? isDark
                            ? 'text-[#072018]/85 font-semibold'
                            : 'text-primary-foreground/80'
                          : 'text-muted-foreground',
                      ].join(' ')}
                    >
                      {item.area}
                    </span>
                  </span>
                  <ArrowUpRight
                    className={[
                      'size-5 transition-transform duration-300',
                      isActive ? (isDark ? 'text-[#072018]' : 'text-accent') : 'text-muted-foreground/60',
                    ].join(' ')}
                  />
                </button>
              )
            })}
          </div>

          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden rounded-3xl border border-border bg-card shadow-xl dark:border-white/10 dark:bg-card/90"
          >
            <div className="bg-background/80 dark:bg-card/50 p-6 md:p-8">
              <img
                src="/images/floorplan.png"
                alt={`${t.plans.imageAlt} - ${plan.name}`}
                className="mx-auto h-64 w-full max-w-lg object-contain md:h-80"
              />
            </div>
            <div className="border-t border-border dark:border-white/10 p-6 md:p-8">
              <h3 className="font-serif text-2xl font-bold text-foreground">{plan.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{plan.note}</p>
              <dl className="mt-6 grid gap-4 sm:grid-cols-3">
                {[
                  { icon: Maximize2, label: t.plans.areaLabel, value: plan.area },
                  { icon: BedDouble, label: t.plans.structureLabel, value: plan.bed },
                  { icon: Compass, label: t.plans.viewLabel, value: plan.view },
                ].map((row) => (
                  <div
                    key={row.label}
                    className={`rounded-2xl p-4 transition-all duration-300 ${
                      isDark ? 'bg-white/5 border border-white/10' : 'bg-secondary/70'
                    }`}
                  >
                    <row.icon className={`size-4 transition-colors duration-500 ${isDark ? 'text-[#e6c887]' : 'text-primary'}`} />
                    <dt className="mt-3 text-[0.7rem] tracking-[0.16em] text-muted-foreground uppercase font-semibold">
                      {row.label}
                    </dt>
                    <dd className="mt-1 text-sm font-semibold text-foreground">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
