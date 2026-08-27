'use client'

import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Phone, Ruler, ShieldCheck, Trees } from 'lucide-react'
import { useSitePreferences } from '@/components/layout/site-preferences'

export function Hero() {
  const { t, theme, locale } = useSitePreferences()
  const isDark = theme === 'dark'
  const isEn = locale === 'en'

  const highlights = [
    { icon: Ruler, label: t.hero.scale, value: t.hero.scaleValue },
    { icon: Trees, label: t.hero.green, value: t.hero.greenValue },
    { icon: ShieldCheck, label: t.hero.ownership, value: t.hero.ownershipValue },
  ]

  return (
    <section id="top" className="relative isolate min-h-[92svh] overflow-hidden flex items-center">
      {/* Background Image with Dynamic Light/Dark Overlay */}
      <div
        className="absolute inset-0 -z-20 scale-105 bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: "url('/images/project-towers.jpg')" }}
        role="img"
        aria-label={t.hero.imageAlt}
      />
      
      {/* Smoothly Transitioning Gradient Overlay */}
      <div
        className={`absolute inset-0 -z-10 transition-all duration-700 ease-in-out ${
          isDark
            ? 'bg-gradient-to-b from-slate-950/75 via-emerald-950/65 to-[#07130f]/98'
            : 'bg-gradient-to-b from-slate-950/45 via-emerald-950/35 to-[#072018]/85'
        }`}
      />

      <div className="mx-auto max-w-7xl px-4 pt-32 pb-20 md:pt-40 lg:px-8 lg:pb-28 w-full">
        <div className="max-w-3xl">
          {/* Location Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 backdrop-blur-xl text-xs font-bold tracking-[0.2em] uppercase shadow-md transition-all duration-500 ${
              isDark
                ? 'border border-white/20 bg-slate-950/60 text-[#e6c887]'
                : 'border border-white/80 bg-white/90 text-emerald-900'
            }`}
          >
            <MapPin className={`size-3.5 transition-colors duration-500 ${isDark ? 'text-[#e6c887]' : 'text-emerald-700'}`} />
            <span>{t.hero.location}</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08 }}
            className="mt-6 font-serif text-4xl leading-[1.12] text-balance text-white font-bold drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)] sm:text-5xl lg:text-6xl"
          >
            {t.hero.title}
            <span
              className={`block font-serif mt-2 transition-colors duration-500 drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)] ${
                isDark ? 'text-[#e6c887]' : 'text-[#ffe18d]'
              }`}
            >
              {t.hero.subtitle}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18 }}
            className="mt-6 max-w-2xl leading-relaxed text-pretty text-lg text-white font-normal drop-shadow-[0_1px_6px_rgba(0,0,0,0.6)]"
          >
            {t.hero.description}
          </motion.p>

          {/* Action CTAs: Luxury Gold in Dark Mode, Emerald in Light Mode */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.26 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#dang-ky"
              className={`group inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-sm font-bold shadow-lg transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] ${
                isDark
                  ? 'bg-gradient-to-r from-[#e6c887] via-[#f7e4b5] to-[#e6c887] text-[#072018] shadow-[0_10px_25px_-5px_rgba(230,200,135,0.4)]'
                  : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-[0_10px_25px_-5px_rgba(16,185,129,0.5)]'
              }`}
            >
              <span>{isEn ? 'Register for Price Sheet & Tour' : 'Đăng ký nhận bảng giá & tư vấn'}</span>
              <span
                className={`size-6 rounded-full flex items-center justify-center transition-transform group-hover:translate-x-1 ${
                  isDark ? 'bg-[#072018]/20 text-[#072018]' : 'bg-white/20 text-white'
                }`}
              >
                <ArrowRight className="size-3.5" />
              </span>
            </a>

            <a
              href="tel:0376671776"
              className={`inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold backdrop-blur-xl shadow-lg transition-all duration-500 hover:scale-[1.02] ${
                isDark
                  ? 'border border-white/20 bg-slate-950/60 hover:bg-slate-950/80 text-white'
                  : 'border border-white/85 bg-white/95 hover:bg-white text-slate-900'
              }`}
            >
              <Phone className={`size-4 transition-colors duration-500 ${isDark ? 'text-[#e6c887]' : 'text-emerald-700'}`} />
              <span>{t.footer.hotline}: 0376 671 776</span>
            </a>
          </motion.div>

          {/* Highlights Bento Glass Cards (Direct Reactive Theme Switch) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.34 }}
            className="mt-12 grid max-w-2xl grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {highlights.map((item) => (
              <div
                key={item.label}
                className={`rounded-2xl p-4.5 backdrop-blur-2xl shadow-xl transition-all duration-500 hover:scale-[1.02] ${
                  isDark
                    ? 'border border-white/15 bg-slate-950/70 text-white hover:border-[#e6c887]/50 hover:bg-slate-950/85'
                    : 'border border-white/80 bg-white/90 text-slate-900 hover:bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)]'
                }`}
              >
                <item.icon
                  className={`size-5 transition-colors duration-500 ${
                    isDark ? 'text-[#e6c887]' : 'text-emerald-700'
                  }`}
                />
                <p
                  className={`mt-3 text-[0.7rem] tracking-[0.16em] uppercase font-bold transition-colors duration-500 ${
                    isDark ? 'text-white/70' : 'text-[#556d61]'
                  }`}
                >
                  {item.label}
                </p>
                <p
                  className={`mt-1 font-serif text-lg font-bold transition-colors duration-500 ${
                    isDark ? 'text-white' : 'text-[#072018]'
                  }`}
                >
                  {item.value}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
