'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useSitePreferences } from '@/components/layout/site-preferences'

export function Hero() {
  const { locale, theme } = useSitePreferences()
  const isDark = theme === 'dark'
  const isEn = locale === 'en'

  return (
    <section
      id="top"
      className="relative isolate min-h-[100svh] overflow-hidden flex items-center select-none"
    >
      {/* 1. Base Emerald Forest Gradient Sky (Dynamic Light / Dark) */}
      <div
        className={`absolute inset-0 -z-30 transition-colors duration-700 ease-in-out ${
          isDark
            ? 'bg-gradient-to-br from-[#03150e] via-[#06241a] to-[#020d09]'
            : 'bg-gradient-to-br from-[#0c3f2f] via-[#082e22] to-[#041a13]'
        }`}
      />

      {/* 2. Ambient Champagne Gold Radiance behind Tower Peaks */}
      <div className="pointer-events-none absolute right-[10%] top-[18%] size-[480px] sm:size-[600px] lg:size-[720px] rounded-full bg-[#e6c887]/12 dark:bg-[#e6c887]/6 blur-[150px] -z-20" />

      {/* 3. Subtle Vignette on Left Side for Absolute Typographic Legibility */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-full lg:w-[60%] bg-gradient-to-r from-[#041912]/85 via-[#041912]/40 to-transparent -z-20" />

      {/* 4. Bottom Grounding Shadow for Smooth Section Transition */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 lg:h-36 bg-gradient-to-t from-[#041a13] dark:from-[#020d09] via-[#041a13]/60 to-transparent -z-15" />

      {/* 5. The 8K VIP Cutout Building & Streetscape (Transparent Sky) */}
      <div className="absolute inset-x-0 bottom-0 pointer-events-none select-none -z-10 flex justify-end lg:justify-center items-end overflow-hidden">
        <img
          src="/images/gin-hero-building-8k-vip.webp"
          alt={isEn ? 'Bcons Central Park Residential Towers' : 'Căn hộ chuẩn xanh Bcons Central Park Biên Hòa'}
          className="w-full min-w-[950px] sm:min-w-[1150px] lg:min-w-[1360px] xl:min-w-[1550px] 2xl:min-w-[1720px] max-w-none h-auto max-h-[72svh] sm:max-h-[78svh] lg:max-h-[85svh] xl:max-h-[89svh] object-contain object-bottom translate-x-[18%] sm:translate-x-[10%] lg:translate-x-0 transition-transform duration-1000 ease-out"
        />
      </div>

      {/* 6. Hero Foreground Typography (Clean, Bold & Cinematic) */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full pt-20 sm:pt-24 lg:pt-28 pb-32 sm:pb-36 lg:pb-44">
        <div className="max-w-xl lg:max-w-2xl xl:max-w-3xl">
          {/* Main Hero Headline matching reference mockup */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] xl:text-[4.75rem] font-extrabold text-white tracking-tight leading-[1.08] drop-shadow-[0_4px_24px_rgba(0,0,0,0.55)]"
          >
            {isEn ? 'Eco-Luxe Living' : 'Căn hộ chuẩn xanh'}
            <span className="block font-serif italic text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4.15rem] font-normal tracking-wide text-[#f5b82e] dark:text-[#e6c887] mt-1 sm:mt-2 drop-shadow-[0_4px_24px_rgba(0,0,0,0.65)]">
              {isEn ? 'In The Heart Of Bien Hoa' : 'Giữa Lòng Biên Hòa'}
            </span>
          </motion.h1>

          {/* Minimalist CTA Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 sm:mt-8 flex items-center gap-3"
          >
            <a
              href="#dang-ky"
              className="group inline-flex items-center gap-3 rounded-full px-6 py-3 sm:px-7 sm:py-3.5 text-xs sm:text-sm font-bold bg-[#e6c887] hover:bg-[#f7e4b5] text-[#072018] shadow-[0_12px_28px_-6px_rgba(230,200,135,0.45)] hover:shadow-[0_16px_36px_-6px_rgba(230,200,135,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              <span>{isEn ? 'Register for Consultation & Tour' : 'Đăng ký nhận bảng giá & tư vấn'}</span>
              <span className="size-6 rounded-full bg-[#072018]/15 flex items-center justify-center transition-transform group-hover:translate-x-1">
                <ArrowRight className="size-3 text-[#072018] stroke-[2.5]" />
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

