'use client'

import { motion } from 'framer-motion'
import { useSitePreferences } from '@/components/layout/site-preferences'

export function Hero() {
  const { locale, theme } = useSitePreferences()
  const isDark = theme === 'dark'
  const isEn = locale === 'en'

  return (
    <section
      id="top"
      className="relative isolate min-h-[100svh] w-full overflow-hidden flex items-center select-none"
    >
      {/* 1. Base Emerald Forest Gradient Sky (Lighter, Fresh & Vibrant) */}
      <div
        className={`absolute inset-0 -z-30 transition-colors duration-700 ease-in-out ${
          isDark
            ? 'bg-[linear-gradient(90deg,#103829_0%,#1a4934_45%,#2e5229_100%)]'
            : 'bg-[linear-gradient(90deg,#1e5942_0%,#2c6549_45%,#4f7238_100%)]'
        }`}
      />

      {/* 2. Warm Sunlight Radiance behind Tower Peaks */}
      <div className="pointer-events-none absolute right-[12%] top-[12%] size-[480px] sm:size-[620px] lg:size-[760px] rounded-full bg-[#f5c324]/14 dark:bg-[#e6c887]/10 blur-[150px] -z-20" />

      {/* 3. The 8K VIP Cutout Building & Streetscape (100% Edge-to-Edge Full Bleed, Zero Padding) */}
      <div className="absolute inset-0 pointer-events-none select-none z-10 overflow-hidden w-full h-full">
        <img
          src="/images/gin-hero-building-8k-vip.webp"
          alt={isEn ? 'Bcons Central Park Residential Towers' : 'Căn hộ chuẩn xanh Bcons Central Park Biên Hòa'}
          className="w-full h-full object-cover object-bottom sm:object-[75%_bottom] lg:object-[72%_bottom] xl:object-[70%_bottom] 2xl:object-right-bottom transition-all duration-700 ease-out"
        />
      </div>

      {/* 4. Hero Foreground Typography (Anchored Left, Strictly Non-Overlapping Towers) */}
      <div className="relative z-20 w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-16 sm:pt-20 lg:pt-24 pb-28 sm:pb-36 lg:pb-44 flex items-center">
        <div className="max-w-[320px] sm:max-w-[420px] md:max-w-[480px] lg:max-w-[530px] xl:max-w-[570px]">
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-[3.1rem] xl:text-[3.5rem] font-black text-white tracking-tight leading-[1.08] drop-shadow-[0_4px_16px_rgba(0,0,0,0.4)]"
          >
            <span className="block whitespace-normal sm:whitespace-nowrap">
              {isEn ? 'Eco-Luxe Living' : 'Căn hộ chuẩn xanh'}
            </span>
            <span className="block font-serif italic text-2xl sm:text-3xl md:text-4xl lg:text-[3.1rem] xl:text-[3.5rem] font-normal tracking-wide text-[#f5c324] dark:text-[#e6c887] mt-1 sm:mt-2 drop-shadow-[0_4px_20px_rgba(0,0,0,0.45)] whitespace-normal sm:whitespace-nowrap">
              {isEn ? 'In The Heart Of Bien Hoa' : 'Giữa Lòng Biên Hòa'}
            </span>
          </motion.h1>
        </div>
      </div>
    </section>
  )
}



