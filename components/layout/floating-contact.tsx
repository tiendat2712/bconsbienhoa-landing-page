'use client'

import { useState } from 'react'
import { Phone } from 'lucide-react'
import { useSitePreferences } from '@/components/layout/site-preferences'

export function FloatingContact() {
  const { t } = useSitePreferences()
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <div className="fixed right-4 bottom-6 z-50 flex flex-col items-end gap-3.5">
      {/* 1. Facebook Button */}
      <div 
        className="relative flex items-center"
        onMouseEnter={() => setHovered('facebook')}
        onMouseLeave={() => setHovered(null)}
      >
        {/* Tooltip */}
        <div 
          className={`pointer-events-none absolute right-14 whitespace-nowrap rounded-full bg-slate-900/95 dark:bg-card/95 px-3.5 py-1.5 text-xs font-semibold text-white shadow-xl backdrop-blur-md transition-all duration-300 border border-white/15 ${
            hovered === 'facebook' ? 'translate-x-0 opacity-100' : 'translate-x-3 opacity-0'
          }`}
        >
          {t.floating.facebook}
        </div>

        <a
          href="https://www.facebook.com/BconscentralparkBH"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Fanpage Facebook"
          className="group relative flex size-12 items-center justify-center rounded-full bg-[#1877F2] text-white shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
        >
          <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#1877F2] opacity-20 duration-1000" />
          <svg className="size-5 fill-current" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </a>
      </div>

      {/* 2. Zalo Button */}
      <div 
        className="relative flex items-center"
        onMouseEnter={() => setHovered('zalo')}
        onMouseLeave={() => setHovered(null)}
      >
        {/* Tooltip */}
        <div 
          className={`pointer-events-none absolute right-14 whitespace-nowrap rounded-full bg-slate-900/95 dark:bg-card/95 px-3.5 py-1.5 text-xs font-semibold text-white shadow-xl backdrop-blur-md transition-all duration-300 border border-white/15 ${
            hovered === 'zalo' ? 'translate-x-0 opacity-100' : 'translate-x-3 opacity-0'
          }`}
        >
          {t.floating.zalo}
        </div>

        <a
          href="https://zalo.me/0376671776"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat qua Zalo Lê Ngọc Long"
          className="group relative flex size-12 items-center justify-center rounded-full bg-[#0068FF] text-white shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
        >
          <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#0068FF] opacity-25 duration-1000" />
          <span className="text-xs font-black tracking-tighter">Zalo</span>
        </a>
      </div>

      {/* 3. Phone Hotline Button */}
      <div 
        className="relative flex items-center"
        onMouseEnter={() => setHovered('phone')}
        onMouseLeave={() => setHovered(null)}
      >
        {/* Tooltip */}
        <div 
          className={`pointer-events-none absolute right-14 whitespace-nowrap rounded-full bg-slate-900/95 dark:bg-card/95 px-3.5 py-1.5 text-xs font-bold text-white shadow-xl backdrop-blur-md transition-all duration-300 border border-white/15 ${
            hovered === 'phone' ? 'translate-x-0 opacity-100' : 'translate-x-3 opacity-0'
          }`}
        >
          {t.floating.phone}
        </div>

        <a
          href="tel:0376671776"
          aria-label="Gọi điện thoại tư vấn 0376 671 776 - Lê Ngọc Long"
          className="group relative flex size-14 items-center justify-center rounded-full bg-[#10B981] text-white shadow-[0_10px_25px_-5px_rgba(16,185,129,0.5)] transition-all duration-300 hover:scale-110 active:scale-95"
        >
          <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#10B981] opacity-35 duration-1000" />
          <Phone className="size-6 transition-transform duration-300 group-hover:rotate-12" />
        </a>
      </div>
    </div>
  )
}
