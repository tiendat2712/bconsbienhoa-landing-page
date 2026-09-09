'use client'

import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import Link from 'next/link'
import { useSitePreferences } from '@/components/layout/site-preferences'

export function SiteFooter() {
  const { theme, t } = useSitePreferences()
  const isDark = theme === 'dark'

  return (
    <footer
      className={`border-t transition-all duration-500 ${
        isDark
          ? 'bg-[#071712] text-[#d1dcd6] border-white/10'
          : 'bg-[#f3f7f5] text-[#2c3e35] border-slate-200'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 py-14 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-14 xl:gap-16">
          {/* Cột 1: Logo Bcons Central Park & Giới thiệu chuyên viên tư vấn (5 cols) */}
          <div className="flex flex-col gap-4 lg:col-span-5">
            <Link href="/" className="group flex items-center gap-2.5 w-fit" aria-label="Bcons Central Park Trang chủ">
              <img
                src="/images/bcons-central-park-logo.png"
                alt="Bcons Central Park Logo"
                className="h-9 sm:h-10 md:h-11 w-auto object-contain transition-all duration-500 group-hover:scale-105 dark-gold-logo"
              />
            </Link>

            <div
              className={`space-y-2.5 text-xs sm:text-[13px] leading-relaxed transition-colors duration-500 ${
                isDark ? 'text-[#c2d3cb]' : 'text-[#3d5348]'
              }`}
            >
              <p>{t.footer.consultantIntro}</p>
              <p className={`text-[11.5px] sm:text-xs ${isDark ? 'text-[#8ea59b]' : 'text-[#556d61]'}`}>
                {t.footer.updateNote}
              </p>
            </div>

            <div className={`mt-1 space-y-2.5 text-xs sm:text-[13px] transition-colors duration-500 ${isDark ? 'text-[#a5b9b0]' : 'text-[#526a5e]'}`}>
              <div className="flex items-start gap-2.5">
                <MapPin className={`size-4 shrink-0 mt-0.5 ${isDark ? 'text-[#e6c887]' : 'text-[#b88728]'}`} />
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=236%20Phan%20Trung%2C%20Ph%C6%B0%E1%BB%9Dng%20Tam%20Hi%E1%BB%87p%2C%20Bi%C3%AAn%20H%C3%B2a%2C%20%C4%90%E1%BB%93ng%20Nai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-colors hover:underline ${isDark ? 'hover:text-[#e6c887]' : 'hover:text-[#072018]'}`}
                >
                  <span>{t.footer.address}</span>
                  <span className={`ml-1 font-semibold ${isDark ? 'text-[#e6c887]' : 'text-[#b88728]'}`}>
                    ↗
                  </span>
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className={`size-4 shrink-0 ${isDark ? 'text-[#e6c887]' : 'text-[#b88728]'}`} />
                <a
                  href="mailto:longqt2701@gmail.com"
                  className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-[#072018]'}`}
                >
                  longqt2701@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Cột 2: CHI TIẾT DỰ ÁN (3 cols) */}
          <div className="flex flex-col gap-4 lg:col-span-3">
            <div className="flex items-center gap-2">
              <span className="h-3.5 w-1 rounded-full bg-[#b88728] dark:bg-[#e6c887]" />
              <p
                className={`text-xs sm:text-[13px] font-bold tracking-[0.16em] uppercase font-sans transition-colors duration-500 ${
                  isDark ? 'text-[#e6c887]' : 'text-[#072018]'
                }`}
              >
                {t.footer.projectDetails}
              </p>
            </div>
            <div
              className={`grid grid-cols-2 gap-x-6 gap-y-3.5 text-xs sm:text-[13px] transition-colors duration-500 ${
                isDark ? 'text-[#c2d3cb]' : 'text-[#3d5348]'
              }`}
            >
              <div className="flex flex-col gap-3">
                <Link href="/gia-ban" className={`transition-all duration-200 hover:translate-x-1 ${isDark ? 'hover:text-[#e6c887]' : 'hover:text-primary'}`}>
                  {t.nav.pricing}
                </Link>
                <Link href="/mat-bang" className={`transition-all duration-200 hover:translate-x-1 ${isDark ? 'hover:text-[#e6c887]' : 'hover:text-primary'}`}>
                  {t.nav.plans}
                </Link>
                <Link href="/phap-ly" className={`transition-all duration-200 hover:translate-x-1 ${isDark ? 'hover:text-[#e6c887]' : 'hover:text-primary'}`}>
                  {t.nav.legal}
                </Link>
                <Link href="/tien-do" className={`transition-all duration-200 hover:translate-x-1 ${isDark ? 'hover:text-[#e6c887]' : 'hover:text-primary'}`}>
                  {t.nav.progress}
                </Link>
              </div>
              <div className="flex flex-col gap-3">
                <Link href="/vi-tri" className={`transition-all duration-200 hover:translate-x-1 ${isDark ? 'hover:text-[#e6c887]' : 'hover:text-primary'}`}>
                  {t.nav.location}
                </Link>
                <Link href="/tien-ich" className={`transition-all duration-200 hover:translate-x-1 ${isDark ? 'hover:text-[#e6c887]' : 'hover:text-primary'}`}>
                  {t.nav.amenities}
                </Link>
                <Link href="/chu-dau-tu" className={`transition-all duration-200 hover:translate-x-1 ${isDark ? 'hover:text-[#e6c887]' : 'hover:text-primary'}`}>
                  {t.nav.investor}
                </Link>
                <Link href="/tin-tuc" className={`transition-all duration-200 hover:translate-x-1 ${isDark ? 'hover:text-[#e6c887]' : 'hover:text-primary'}`}>
                  {t.nav.news}
                </Link>
              </div>
            </div>
          </div>

          {/* Cột 3: LIÊN HỆ TƯ VẤN (4 cols) */}
          <div className="flex flex-col gap-4 lg:col-span-4">
            <div className="flex items-center gap-2">
              <span className="h-3.5 w-1 rounded-full bg-[#b88728] dark:bg-[#e6c887]" />
              <p
                className={`text-xs sm:text-[13px] font-bold tracking-[0.16em] uppercase font-sans transition-colors duration-500 ${
                  isDark ? 'text-[#e6c887]' : 'text-[#072018]'
                }`}
              >
                {t.footer.contactConsult}
              </p>
            </div>

            <div className="grid grid-cols-[1fr_auto] gap-5 sm:gap-6 items-start">
              {/* Danh sách nút Hotline, Zalo, Facebook */}
              <div className="flex flex-col gap-3 text-xs">
                {/* Hotline */}
                <a
                  href="tel:0376671776"
                  className={`group flex items-center gap-2.5 sm:gap-3 transition-colors ${
                    isDark ? 'text-[#c2d3cb] hover:text-white' : 'text-[#3d5348] hover:text-[#072018]'
                  }`}
                >
                  <span
                    className={`flex size-8.5 shrink-0 items-center justify-center rounded-xl transition-all ${
                      isDark
                        ? 'bg-white/10 text-[#e6c887] group-hover:bg-[#e6c887] group-hover:text-[#072018]'
                        : 'bg-emerald-900/10 text-emerald-800 group-hover:bg-primary group-hover:text-white'
                    }`}
                  >
                    <Phone className="size-4" />
                  </span>
                  <div>
                    <p className={`text-[10px] tracking-wider uppercase font-semibold ${isDark ? 'text-[#8ea59b]' : 'text-[#556d61]'}`}>
                      {t.footer.hotline}
                    </p>
                    <p className={`text-xs sm:text-[13px] font-bold transition-colors ${isDark ? 'text-white group-hover:text-[#e6c887]' : 'text-[#072018] group-hover:text-primary'}`}>
                      0376 671 776
                    </p>
                  </div>
                </a>

                {/* Zalo */}
                <a
                  href="https://zalo.me/0376671776"
                  target="_blank"
                  rel="noreferrer"
                  className={`group flex items-center gap-2.5 sm:gap-3 transition-colors ${
                    isDark ? 'text-[#c2d3cb] hover:text-white' : 'text-[#3d5348] hover:text-[#072018]'
                  }`}
                >
                  <span
                    className={`flex size-8.5 shrink-0 items-center justify-center rounded-xl transition-all ${
                      isDark
                        ? 'bg-white/10 text-[#e6c887] group-hover:bg-[#0068FF] group-hover:text-white'
                        : 'bg-emerald-900/10 text-emerald-800 group-hover:bg-[#0068FF] group-hover:text-white'
                    }`}
                  >
                    <MessageCircle className="size-4" />
                  </span>
                  <div>
                    <p className={`text-[10px] tracking-wider uppercase font-semibold ${isDark ? 'text-[#8ea59b]' : 'text-[#556d61]'}`}>
                      {t.footer.zalo}
                    </p>
                    <p className={`text-xs sm:text-[13px] font-bold transition-colors ${isDark ? 'text-white group-hover:text-[#e6c887]' : 'text-[#072018] group-hover:text-primary'}`}>
                      {t.footer.chatDirect}
                    </p>
                  </div>
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/people/C%C4%83n-H%E1%BB%99-Bcons-Tam-Hi%E1%BB%87p/61574269228165/"
                  target="_blank"
                  rel="noreferrer"
                  className={`group flex items-center gap-2.5 sm:gap-3 transition-colors ${
                    isDark ? 'text-[#c2d3cb] hover:text-white' : 'text-[#3d5348] hover:text-[#072018]'
                  }`}
                >
                  <span
                    className={`flex size-8.5 shrink-0 items-center justify-center rounded-xl transition-all ${
                      isDark
                        ? 'bg-white/10 text-[#e6c887] group-hover:bg-[#1877F2] group-hover:text-white'
                        : 'bg-emerald-900/10 text-emerald-800 group-hover:bg-[#1877F2] group-hover:text-white'
                    }`}
                  >
                    <svg className="size-4 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </span>
                  <div>
                    <p className={`text-[10px] tracking-wider uppercase font-semibold ${isDark ? 'text-[#8ea59b]' : 'text-[#556d61]'}`}>
                      {t.footer.facebook}
                    </p>
                    <p className={`text-xs sm:text-[13px] font-bold transition-colors ${isDark ? 'text-white group-hover:text-[#e6c887]' : 'text-[#072018] group-hover:text-primary'}`}>
                      {t.footer.fanpage}
                    </p>
                  </div>
                </a>

                {/* Chỉ đường Google Maps */}
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=236%20Phan%20Trung%2C%20Ph%C6%B0%E1%BB%9Dng%20Tam%20Hi%E1%BB%87p%2C%20Bi%C3%AAn%20H%C3%B2a%2C%20%C4%90%E1%BB%93ng%20Nai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-2.5 sm:gap-3 transition-colors ${
                    isDark ? 'text-[#c2d3cb] hover:text-white' : 'text-[#3d5348] hover:text-[#072018]'
                  }`}
                >
                  <span
                    className={`flex size-8.5 shrink-0 items-center justify-center rounded-xl transition-all ${
                      isDark
                        ? 'bg-white/10 text-[#e6c887] group-hover:bg-[#e6c887] group-hover:text-[#072018]'
                        : 'bg-emerald-900/10 text-emerald-800 group-hover:bg-primary group-hover:text-white'
                    }`}
                  >
                    <MapPin className="size-4" />
                  </span>
                  <div>
                    <p className={`text-[10px] tracking-wider uppercase font-semibold ${isDark ? 'text-[#8ea59b]' : 'text-[#556d61]'}`}>
                      Google Maps
                    </p>
                    <p className={`text-xs sm:text-[13px] font-bold transition-colors ${isDark ? 'text-white group-hover:text-[#e6c887]' : 'text-[#072018] group-hover:text-primary'}`}>
                      {t.footer.directions}
                    </p>
                  </div>
                </a>
              </div>

              {/* Khung QR Zalo (Double-Bezel) */}
              <div className="flex flex-col items-center gap-2">
                <div
                  className={`size-24 sm:size-28 overflow-hidden rounded-2xl bg-white p-2 shadow-sm transition-all ${
                    isDark ? 'border border-white/20 ring-1 ring-white/10' : 'border border-slate-200 ring-1 ring-black/5'
                  }`}
                >
                  <img
                    src="/images/zalo-info.png"
                    alt={t.footer.scanQr}
                    className="size-full object-contain"
                  />
                </div>
                <p className={`text-[11px] text-center font-medium ${isDark ? 'text-[#8ea59b]' : 'text-[#556d61]'}`}>
                  {t.footer.scanQr}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Dòng phân cách & Bản quyền */}
        <div
          className={`mt-12 sm:mt-14 flex flex-col items-center justify-between gap-4 border-t pt-6 sm:pt-8 text-xs sm:text-[12.5px] transition-colors duration-500 sm:flex-row ${
            isDark ? 'border-white/10 text-[#8ea59b]' : 'border-slate-200 text-[#556d61]'
          }`}
        >
          <p>{t.footer.copyright}</p>
          <p>{t.footer.disclaimer}</p>
        </div>
      </div>
    </footer>
  )
}
