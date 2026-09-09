'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, Globe, Menu, Moon, Phone, Sun, X } from 'lucide-react'
import { useSitePreferences } from '@/components/layout/site-preferences'

export function SiteHeader() {
  const { t, locale, setLocale, theme, toggleTheme, openConsultation } = useSitePreferences()
  const pathname = usePathname()
  const onHome = pathname === '/'
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [detailOpen, setDetailOpen] = useState(false)

  const [activeSection, setActiveSection] = useState<string>('#tong-quan')

  // Listen for #dang-ky hash on subpages (e.g. from previous navigation or external link)
  useEffect(() => {
    if (!onHome && typeof window !== 'undefined' && window.location.hash === '#dang-ky') {
      window.history.replaceState(null, '', window.location.pathname)
      openConsultation({
        source: `Thanh Navbar Header (${pathname})`,
        title: locale === 'en' ? 'Register for Direct Consultation' : 'Nhận Tư Vấn Trực Tiếp Dự Án',
        subtitle:
          locale === 'en'
            ? 'Leave your phone number, Le Ngoc Long will contact you within 15 minutes.'
            : 'Để lại số điện thoại, chuyên viên Lê Ngọc Long sẽ liên hệ tư vấn chuyên sâu trong 15 phút.',
      })
    }
  }, [onHome, pathname, locale, openConsultation])

  const handleConsultClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (onHome) {
      const el = document.getElementById('dang-ky')
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    openConsultation({
      source: `Thanh Navbar Header (${pathname})`,
      title: locale === 'en' ? 'Register for Direct Consultation' : 'Nhận Tư Vấn Trực Tiếp Dự Án',
      subtitle:
        locale === 'en'
          ? 'Leave your phone number, Le Ngoc Long will contact you within 15 minutes.'
          : 'Để lại số điện thoại, chuyên viên Lê Ngọc Long sẽ liên hệ tư vấn chuyên sâu trong 15 phút.',
    })
  }

  const handleMobileConsultClick = (e: React.MouseEvent) => {
    setMobileOpen(false)
    handleConsultClick(e)
  }

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16)

      if (onHome) {
        const sections = [
          '#tong-quan',
          '#vi-tri',
          '#tien-ich',
          '#mat-bang',
          '#tham-quan-3d',
          '#gia-ban',
          '#tien-do',
          '#tin-tuc',
        ]
        let current = '#tong-quan'
        for (const sec of sections) {
          const el = document.querySelector(sec)
          if (el) {
            const rect = el.getBoundingClientRect()
            if (rect.top <= 200) {
              current = sec
            }
          }
        }
        setActiveSection(current)
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [onHome])

  // 1. Navigation chính trên thanh Navbar: Nhảy xuống Section trên trang chủ (/#section) theo thứ tự cuộn thực tế
  const navLinks = [
    [t.nav.overview, '#tong-quan'],
    [t.nav.location, '#vi-tri'],
    [t.nav.amenities, '#tien-ich'],
    [t.nav.plans, '#mat-bang'],
    [t.nav.showUnit, '#tham-quan-3d'],
    [t.nav.pricing, '#gia-ban'],
    [t.nav.progress, '#tien-do'],
    [t.nav.news, '#tin-tuc'],
  ] as const

  // 2. Options trong dropdown "Chi tiết": Router điều hướng đến các Trang con độc lập (/page)
  const detailLinks = [
    [t.nav.pricing, '/gia-ban'],
    [t.nav.location, '/vi-tri'],
    [t.nav.plans, '/mat-bang'],
    [t.nav.amenities, '/tien-ich'],
    [t.nav.legal, '/phap-ly'],
    [t.nav.investor, '/chu-dau-tu'],
    [t.nav.progress, '/tien-do'],
    [t.nav.news, '/tin-tuc'],
  ] as const

  const isDetailActive = ['/gia-ban', '/vi-tri', '/mat-bang', '/tien-ich', '/phap-ly', '/chu-dau-tu', '/tien-do', '/tin-tuc'].includes(pathname)

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="h-1 w-full transition-colors duration-500 bg-primary dark:bg-[#e6c887]" />
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? 'border-b border-border/80 dark:border-white/10 bg-background/90 dark:bg-[#07130f]/95 shadow-[0_8px_30px_-18px_rgba(16,185,129,0.25)] dark:shadow-[0_8px_30px_-18px_rgba(230,200,135,0.25)] backdrop-blur-xl'
            : 'bg-background/70 backdrop-blur-md'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 md:h-20 lg:px-8">
          {/* Logo with Pure Luxury Gold Filter in Dark Mode via CSS */}
          <Link
            href={onHome ? '#top' : '/'}
            className="group flex shrink-0 items-center transition-transform hover:opacity-90"
            aria-label="Bcons Central Park Trang chủ"
          >
            <img
              src="/images/bcons-central-park-logo.png"
              alt="Bcons Central Park Logo"
              className="h-8 md:h-10 w-auto object-contain transition-all duration-500 group-hover:scale-105 dark-gold-logo"
            />
          </Link>

          {/* Desktop Navigation Links (Section Anchor Jump) */}
          <nav className="hidden items-center gap-1 xl:flex xl:gap-1.5" aria-label={t.nav.main}>
            {navLinks.map(([label, href]) => {
              const targetHref = onHome ? href : `/${href}`
              const isActive = onHome ? activeSection === href : false
              return (
                <a
                  key={href}
                  href={targetHref}
                  className={`group relative rounded-lg px-2.5 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-primary dark:text-[#e6c887] gold-text-active font-bold'
                      : 'text-foreground/80 hover:text-primary dark:hover:text-[#e6c887]'
                  }`}
                >
                  {label}
                  <span
                    className={`absolute inset-x-2.5 -bottom-0.5 h-0.5 origin-left rounded-full transition-transform duration-200 ${
                      isActive
                        ? 'scale-x-100 bg-primary dark:bg-[#e6c887]'
                        : 'scale-x-0 bg-primary dark:bg-[#e6c887] group-hover:scale-x-100'
                    }`}
                  />
                </a>
              )
            })}

            {/* Dropdown Chi tiết */}
            <div
              className="relative"
              onMouseEnter={() => setDetailOpen(true)}
              onMouseLeave={() => setDetailOpen(false)}
            >
              <button
                type="button"
                aria-expanded={detailOpen}
                aria-haspopup="true"
                onClick={() => setDetailOpen((v) => !v)}
                className={`flex items-center gap-1 rounded-lg px-2.5 py-2 text-sm font-medium transition-colors cursor-pointer ${
                  detailOpen || isDetailActive
                    ? 'text-primary dark:text-[#e6c887] gold-text-active font-bold'
                    : 'text-foreground/80 hover:text-primary dark:hover:text-[#e6c887]'
                }`}
              >
                <span>{t.nav.details}</span>
                <ChevronDown
                  className={`size-3.5 transition-transform duration-300 ${
                    detailOpen ? 'rotate-180 text-primary dark:text-[#e6c887] gold-text-active' : ''
                  }`}
                />
              </button>

              <div
                className={`absolute top-full left-0 w-44 pt-2 transition-all duration-200 ${
                  detailOpen
                    ? 'pointer-events-auto translate-y-0 opacity-100'
                    : 'pointer-events-none -translate-y-2 opacity-0'
                }`}
              >
                <div className="rounded-2xl border border-border bg-popover/98 p-1.5 shadow-2xl backdrop-blur-2xl dark:border-white/10">
                  {detailLinks.map(([label, href]) => {
                    const isItemActive = pathname === href
                    return (
                      <Link
                        key={href}
                        href={href}
                        onClick={() => setDetailOpen(false)}
                        aria-current={isItemActive ? 'page' : undefined}
                        className={`block rounded-xl px-3.5 py-2.5 text-xs font-medium transition-colors ${
                          isItemActive
                            ? 'bg-secondary dark:bg-[#e6c887]/15 text-primary dark:text-[#e6c887] gold-bg-active font-bold'
                            : 'text-foreground/85 hover:bg-secondary dark:hover:bg-white/10 hover:text-primary dark:hover:text-[#e6c887]'
                        }`}
                      >
                        {label}
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
          </nav>

          {/* Right Controls: Unified Luxury Capsule + Luxury Gold CTA */}
          <div className="flex items-center gap-2.5">
            {/* Integrated Glass Control Capsule (Language + Theme) */}
            <div className="flex items-center rounded-full border border-border/80 bg-card/80 p-1 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-card/70">
              {/* Language Switcher */}
              <div className="flex items-center">
                <button
                  type="button"
                  onClick={() => setLocale(locale === 'vi' ? 'en' : 'vi')}
                  className="flex h-7 items-center gap-1 rounded-full px-2.5 text-xs font-bold text-foreground transition-all duration-200 hover:bg-secondary cursor-pointer"
                  title="Chuyển đổi ngôn ngữ / Switch language"
                >
                  <Globe className="size-3.5 text-primary dark:text-[#e6c887] gold-text-active" />
                  <span>{locale === 'vi' ? 'VN' : 'EN'}</span>
                </button>
              </div>

              {/* Vertical Hairline Divider */}
              <div className="mx-1 h-3.5 w-px bg-border/80 dark:bg-white/15" />

              {/* Dark/Light Theme Button */}
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={theme === 'dark' ? t.nav.light : t.nav.dark}
                className="flex size-7 items-center justify-center rounded-full text-foreground/80 transition-all duration-300 hover:bg-secondary hover:text-primary active:scale-90 cursor-pointer"
                title={theme === 'dark' ? 'Giao diện sáng' : 'Giao diện tối'}
              >
                {theme === 'dark' ? (
                  <Sun className="size-3.5 text-[#e6c887] rotate-0 transition-transform duration-300 hover:rotate-45" />
                ) : (
                  <Moon className="size-3.5 text-slate-700 transition-transform duration-300 hover:-rotate-12" />
                )}
              </button>
            </div>

            {/* CTA Button */}
            <button
              type="button"
              onClick={handleConsultClick}
              className="gold-cta-btn hidden md:inline-flex items-center gap-2 rounded-full px-4.5 py-2 text-xs font-bold shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <Phone className="size-3.5" />
              <span>{t.nav.consult}</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? t.nav.close : t.nav.open}
              aria-expanded={mobileOpen}
              className="flex size-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-secondary xl:hidden cursor-pointer"
            >
              {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`overflow-hidden border-t border-border/60 bg-background/98 backdrop-blur-2xl transition-[max-height,opacity] duration-300 xl:hidden ${
            mobileOpen ? 'max-h-[36rem] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="mx-auto grid max-w-7xl grid-cols-2 gap-1.5 px-4 py-5" aria-label={t.nav.mobile}>
            {navLinks.map(([label, href]) => (
              <a
                key={href}
                href={onHome ? href : `/${href}`}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-3.5 py-2.5 text-xs font-medium text-foreground/85 hover:bg-secondary hover:text-primary transition-colors"
              >
                {label}
              </a>
            ))}
            {[
              [t.nav.investor, '/chu-dau-tu'],
              [t.nav.legal, '/phap-ly'],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-3.5 py-2.5 text-xs font-medium text-foreground/85 hover:bg-secondary hover:text-primary transition-colors"
              >
                {label}
              </Link>
            ))}
            <button
              type="button"
              onClick={handleMobileConsultClick}
              className="gold-cta-btn col-span-2 mt-3 flex items-center justify-center gap-2 rounded-full px-5 py-3 text-xs font-bold shadow-md cursor-pointer"
            >
              <Phone className="size-4" />
              <span>{t.nav.consult}</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}
