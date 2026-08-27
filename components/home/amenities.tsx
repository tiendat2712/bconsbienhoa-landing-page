'use client'

import {
  Baby,
  Dumbbell,
  Flower2,
  ParkingCircle,
  ShoppingBag,
  Sparkles,
  Users,
  Waves,
} from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/layout/reveal'
import { useSitePreferences } from '@/components/layout/site-preferences'

export function Amenities() {
  const { t, theme } = useSitePreferences()
  const isDark = theme === 'dark'

  const icons = [Waves, Flower2, Dumbbell, Baby, ShoppingBag, Users, ParkingCircle, Sparkles]

  return (
    <section id="tien-ich" className="scroll-mt-24 bg-background py-20 lg:py-28 transition-colors">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow={t.amenities.eyebrow}
          title={t.amenities.title}
          description={t.amenities.desc}
        />

        <Reveal delay={0.1} className="mt-12">
          <div className="relative overflow-hidden rounded-3xl border border-border shadow-xl dark:border-white/10">
            <img
              src="/images/amenity-pool.png"
              alt={t.amenities.imageAlt}
              className="h-72 w-full object-cover md:h-96"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
            <p className="absolute bottom-6 left-6 max-w-md font-serif text-2xl text-balance text-white md:text-3xl font-bold">
              {t.amenities.quote}
            </p>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.amenities.items.map(([title, desc], index) => {
            const Icon = icons[index % icons.length]
            return (
              <Reveal key={title} delay={0.04 * index}>
                <div
                  className={`group h-full rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
                    isDark
                      ? 'border-white/10 bg-card/80 hover:border-[#e6c887]/50'
                      : 'border-border bg-card hover:border-primary/40'
                  }`}
                >
                  <span
                    className={`flex size-11 items-center justify-center rounded-xl transition-all duration-300 ${
                      isDark
                        ? 'bg-white/5 text-[#e6c887] group-hover:bg-[#e6c887] group-hover:text-[#072018]'
                        : 'bg-secondary text-primary group-hover:bg-primary group-hover:text-primary-foreground'
                    }`}
                  >
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-5 font-serif text-lg font-bold text-foreground">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
