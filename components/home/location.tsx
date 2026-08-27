'use client'

import { Navigation } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/layout/reveal'
import { useSitePreferences } from '@/components/layout/site-preferences'

export function Location() {
  const { t } = useSitePreferences()

  return (
    <section
      id="vi-tri"
      className="scroll-mt-24 bg-[#072018] dark:bg-[#071712] py-20 text-[#d1dcd6] border-y border-emerald-950/40 dark:border-white/5 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          tone="dark"
          eyebrow={t.location.eyebrow}
          title={t.location.title}
          description={t.location.desc}
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-white/15 shadow-2xl">
              <img
                src="/images/aerial-location.png"
                alt={t.location.imageAlt}
                className="h-80 w-full object-cover md:h-[26rem]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#072018]/90 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 flex items-center gap-3 rounded-full border border-white/20 bg-[#072018]/80 px-5 py-3 backdrop-blur-md">
                <Navigation className="size-4 text-[#e6c887]" />
                <span className="text-sm font-medium text-white">{t.location.address}</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <ul className="flex flex-col">
              {t.location.connections.map(([time, place]) => (
                <li
                  key={place}
                  className="group flex items-baseline gap-6 border-b border-white/10 py-5 transition-colors last:border-b-0 hover:bg-white/5"
                >
                  <span className="w-20 shrink-0 font-serif text-xl font-bold text-[#e6c887]">
                    {time}
                  </span>
                  <span className="text-[#c2d3cb] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white">
                    {place}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
