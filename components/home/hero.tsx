'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Building2, CalendarClock, Coins, LayoutGrid, MapPin, Phone } from 'lucide-react'
import { useSitePreferences } from '@/components/layout/site-preferences'

export function Hero() {
  const { t, theme, locale } = useSitePreferences()
  const isDark = theme === 'dark'
  const isEn = locale === 'en'

  const highlights = [
    { icon: Building2, label: t.hero.scale, value: t.hero.scaleValue },
    { icon: LayoutGrid, label: t.hero.green, value: t.hero.greenValue },
    { icon: CalendarClock, label: t.hero.ownership, value: t.hero.ownershipValue },
    { icon: Coins, label: t.hero.priceTag, value: t.hero.priceTagValue },
  ]

  return (
    <section id="top" className="relative isolate min-h-[100svh] lg:h-[100svh] lg:max-h-[920px] overflow-hidden flex items-center">
      {/* Background Image with Dynamic Light/Dark Overlay */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: "url('/images/project-towers.jpg')" }}
        role="img"
        aria-label={t.hero.imageAlt}
      />
      
      {/* Smoothly Transitioning Gradient Overlay */}
      <div
        className={`absolute inset-0 -z-10 transition-all duration-700 ease-in-out ${
          isDark
            ? 'bg-gradient-to-b from-slate-950/80 via-emerald-950/65 to-[#07130f]/98'
            : 'bg-gradient-to-b from-slate-950/50 via-emerald-950/40 to-[#072018]/85'
        }`}
      />

      <div className="mx-auto max-w-7xl px-4 pt-20 pb-6 sm:pt-24 sm:pb-8 lg:pt-22 lg:pb-8 w-full">
        <div className="max-w-3xl">
          {/* Location Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1 backdrop-blur-xl text-[11px] font-bold tracking-[0.18em] uppercase shadow-md transition-all duration-500 ${
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mt-3 font-serif text-3xl sm:text-4xl lg:text-[2.65rem] leading-[1.12] text-balance text-white font-bold drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]"
          >
            {t.hero.title}
            <span
              className={`block font-serif mt-1 text-base sm:text-lg lg:text-xl font-normal italic tracking-wide transition-colors duration-500 drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)] ${
                isDark ? 'text-[#e6c887]' : 'text-[#ffe18d]'
              }`}
            >
              {t.hero.subtitle}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-2.5 max-w-2xl leading-relaxed text-pretty text-xs sm:text-sm lg:text-base text-white/90 font-normal drop-shadow-[0_1px_6px_rgba(0,0,0,0.6)]"
          >
            {t.hero.description}
          </motion.p>

          {/* Action CTAs: Luxury Gold in Dark Mode, Emerald in Light Mode */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="mt-4 sm:mt-5 flex flex-wrap items-center gap-3"
          >
            <a
              href="#dang-ky"
              className={`group inline-flex items-center gap-2.5 rounded-full px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold shadow-lg transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] ${
                isDark
                  ? 'bg-gradient-to-r from-[#e6c887] via-[#f7e4b5] to-[#e6c887] text-[#072018] shadow-[0_10px_25px_-5px_rgba(230,200,135,0.4)]'
                  : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-[0_10px_25px_-5px_rgba(16,185,129,0.5)]'
              }`}
            >
              <span>{isEn ? 'Register for Price Sheet & Tour' : 'Đăng ký nhận bảng giá & tư vấn'}</span>
              <span
                className={`size-5 rounded-full flex items-center justify-center transition-transform group-hover:translate-x-1 ${
                  isDark ? 'bg-[#072018]/20 text-[#072018]' : 'bg-white/20 text-white'
                }`}
              >
                <ArrowRight className="size-3" />
              </span>
            </a>

            <a
              href="tel:0376671776"
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-bold backdrop-blur-xl shadow-lg transition-all duration-500 hover:scale-[1.02] ${
                isDark
                  ? 'border border-white/20 bg-slate-950/60 hover:bg-slate-950/80 text-white'
                  : 'border border-white/85 bg-white/95 hover:bg-white text-slate-900'
              }`}
            >
              <Phone className={`size-3.5 transition-colors duration-500 ${isDark ? 'text-[#e6c887]' : 'text-emerald-700'}`} />
              <span>{t.footer.hotline}: 0376 671 776</span>
            </a>
          </motion.div>

          {/* Highlights Bento Glass Cards: 4 Compact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
            className="mt-5 sm:mt-6 grid max-w-2xl grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3"
          >
            {highlights.map((item) => (
              <div
                key={item.label}
                className={`rounded-xl p-3 sm:p-3.5 backdrop-blur-2xl shadow-lg transition-all duration-500 hover:scale-[1.02] ${
                  isDark
                    ? 'border border-white/15 bg-slate-950/70 text-white hover:border-[#e6c887]/50 hover:bg-slate-950/85'
                    : 'border border-white/80 bg-white/90 text-slate-900 hover:bg-white shadow-[0_8px_25px_rgb(0,0,0,0.1)]'
                }`}
              >
                <item.icon
                  className={`size-4 sm:size-4.5 transition-colors duration-500 ${
                    isDark ? 'text-[#e6c887]' : 'text-emerald-700'
                  }`}
                />
                <p
                  className={`mt-2 text-[10px] tracking-[0.14em] uppercase font-bold transition-colors duration-500 ${
                    isDark ? 'text-white/70' : 'text-[#556d61]'
                  }`}
                >
                  {item.label}
                </p>
                <p
                  className={`mt-0.5 font-serif text-sm sm:text-base font-bold transition-colors duration-500 whitespace-nowrap ${
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
