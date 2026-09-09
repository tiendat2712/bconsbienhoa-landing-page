'use client'

import { ExternalLink, CalendarCheck } from 'lucide-react'
import { Reveal } from '@/components/layout/reveal'
import { useSitePreferences } from '@/components/layout/site-preferences'

export function VirtualTour() {
  const { theme, locale } = useSitePreferences()
  const isEn = locale === 'en'

  const tourUrl = 'https://bcons-centralpark-360.2fvisual.com/'

  return (
    <section
      id="tham-quan-3d"
      className="scroll-mt-24 relative py-16 sm:py-20 lg:py-24 bg-background dark:bg-[#07130f] transition-colors overflow-hidden"
    >
      {/* Anchor for backward-compatible #nha-mau links */}
      <span id="nha-mau" className="absolute -top-24 pointer-events-none" aria-hidden="true" />

      {/* Subtle ambient lighting */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 size-[600px] rounded-full bg-primary/10 dark:bg-[#e6c887]/5 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <Reveal>
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-semibold text-[#b88728] dark:text-[#e6c887] bg-[#b88728]/10 dark:bg-[#e6c887]/10 border border-[#b88728]/25 dark:border-[#e6c887]/25 mb-3.5">
              {isEn ? 'INTERACTIVE 360° EXPERIENCE' : 'TRẢI NGHIỆM THỰC TẾ ẢO 360°'}
            </div>

            {/* Main Title */}
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground dark:text-white uppercase">
              {isEn ? '3D 360° Project Virtual Tour' : 'Tham Quan 3D 360° Dự Án'}
              <span className="block mt-1 font-serif italic text-xl sm:text-2xl lg:text-3xl font-semibold normal-case text-[#b88728] dark:text-[#e6c887]">
                {isEn ? 'Full Panoramic View & Real Units' : 'Toàn Cảnh Dự Án & Căn Hộ Thực Tế'}
              </span>
            </h2>

            {/* Subtitle Description */}
            <p className="mt-3.5 text-sm sm:text-base leading-relaxed text-muted-foreground dark:text-[#c2d3cb] font-sans">
              {isEn
                ? 'Explore the overall master plan, premium amenities, and model apartments of Bcons Central Park Tam Hiep directly in your browser — rotate 360°, zoom in, and navigate between viewpoints as if you were physically on-site.'
                : 'Dạo quanh phối cảnh tổng thể, khu tiện ích và căn hộ mẫu Bcons Central Park Tam Hiệp ngay trên trình duyệt — xoay 360°, phóng to và di chuyển giữa các điểm nhìn như đang có mặt tại dự án.'}
            </p>
          </Reveal>
        </div>

        {/* Architectural 360° Visual Card Frame */}
        <Reveal delay={0.15} className="max-w-5xl lg:max-w-6xl mx-auto">
          <a
            href={tourUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative block w-full aspect-[16/10] sm:aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden border border-black/10 dark:border-white/15 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.22)] dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.75)] group focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-[#e6c887]"
            title={isEn ? 'Click to start 360° virtual tour' : 'Nhấp để bắt đầu tham quan 3D 360°'}
          >
            {/* Background Project Towers Image */}
            <img
              src="/images/project-towers.jpg"
              alt={
                isEn
                  ? 'Bcons Central Park 3D 360° Virtual Tour Master Perspective'
                  : 'Phối cảnh tổng thể dự án Bcons Central Park tham quan 3D 360°'
              }
              className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)] select-none"
            />

            {/* Cinematic Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-black/25 group-hover:from-black/40 transition-colors duration-500 pointer-events-none" />

            {/* Subtle Inner Glass Edge Reflection */}
            <div className="absolute inset-0 rounded-xl sm:rounded-2xl ring-1 ring-inset ring-white/20 dark:ring-white/10 pointer-events-none" />

            {/* Centered Floating 360° Button Pill */}
            <div className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none">
              <div className="group/pill inline-flex items-center gap-3.5 sm:gap-4 rounded-full bg-white/95 dark:bg-[#072018]/95 group-hover:bg-white dark:group-hover:bg-[#0c2e22] px-5 py-3 sm:px-6 sm:py-3.5 shadow-[0_20px_45px_rgba(0,0,0,0.35)] backdrop-blur-xl border border-white/80 dark:border-[#e6c887]/40 ring-1 ring-black/5 transition-all duration-500 group-hover:scale-105 group-active:scale-95 text-left pointer-events-auto">
                {/* Eye 360 Icon */}
                <div className="relative size-10 sm:size-11 rounded-full bg-[#061e38] dark:bg-[#e6c887] text-white dark:text-[#072018] flex items-center justify-center shrink-0 shadow-inner group-hover/pill:scale-110 transition-transform duration-300">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-5 sm:size-5.5"
                  >
                    <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>

                {/* Text labels */}
                <div>
                  <div className="text-sm sm:text-base font-bold text-[#061e38] dark:text-white leading-tight font-sans group-hover/pill:text-primary dark:group-hover/pill:text-[#e6c887] transition-colors">
                    {isEn ? 'Start 360° Virtual Tour' : 'Bắt đầu tham quan 360°'}
                  </div>
                  <div className="text-[11px] sm:text-xs text-muted-foreground dark:text-[#a8beba] mt-0.5 font-sans">
                    {isEn ? '360° Imagery ~18MB – Wi-Fi recommended' : 'Ảnh 360° ~18MB – nên dùng Wi-Fi'}
                  </div>
                </div>
              </div>
            </div>
          </a>
        </Reveal>

        {/* Bottom Actions & Notes */}
        <Reveal delay={0.25} className="mt-7 sm:mt-9 text-center">
          {/* 2 Centered Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {/* Open Fullscreen Button */}
            <a
              href={tourUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border dark:border-white/20 bg-background/90 hover:bg-secondary dark:hover:bg-white/10 text-foreground dark:text-white px-6 py-2.5 sm:px-7 sm:py-3 text-xs sm:text-sm font-bold font-sans shadow-sm transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span>{isEn ? 'OPEN FULLSCREEN' : 'MỞ TOÀN MÀN HÌNH'}</span>
              <ExternalLink className="size-3.5 sm:size-4" />
            </a>

            {/* Book Model Unit Visit Button */}
            <a
              href="#dang-ky"
              className="inline-flex items-center gap-2 rounded-full bg-[#f5b82e] hover:bg-[#e5a820] text-[#072018] dark:bg-[#e6c887] dark:hover:bg-[#d6b772] px-6 py-2.5 sm:px-7 sm:py-3 text-xs sm:text-sm font-bold font-sans shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <CalendarCheck className="size-3.5 sm:size-4 stroke-[2.5]" />
              <span>{isEn ? 'SCHEDULE MODEL UNIT TOUR' : 'ĐẶT LỊCH XEM NHÀ MẪU'}</span>
            </a>
          </div>

          {/* Disclaimer text */}
          <p className="mt-4 sm:mt-5 text-[11px] sm:text-xs text-muted-foreground dark:text-[#a0b3ac] font-sans max-w-2xl mx-auto leading-relaxed">
            {isEn
              ? 'Tour 360° produced by 2FVisual. Renderings are for illustration purposes; actual specifications are governed by the sales agreement with the developer.'
              : 'Tour 360° do 2FVisual thực hiện. Hình ảnh mang tính minh họa, chi tiết bàn giao thực tế theo hợp đồng mua bán với chủ đầu tư.'}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
