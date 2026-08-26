'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { ChevronDown, Menu, Moon, Phone, Sun, X } from 'lucide-react'
import { useSitePreferences } from '@/components/site-preferences'

export function SiteHeader() {
  const { t, locale, setLocale, theme, toggleTheme } = useSitePreferences()
  const pathname = usePathname()
  const onHome = pathname === '/'
  const link = (href: string) => (href.startsWith('#') && !onHome ? `/${href}` : href)
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [detailOpen, setDetailOpen] = useState(false)
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 16); onScroll(); window.addEventListener('scroll', onScroll, { passive: true }); return () => window.removeEventListener('scroll', onScroll) }, [])

  const navLinks = [[t.nav.overview,'#tong-quan'],[t.nav.location,'#vi-tri'],[t.nav.amenities,'#tien-ich'],[t.nav.plans,'#mat-bang'],[t.nav.legal,'#phap-ly'],[t.nav.showUnit,'#nha-mau'],[t.nav.pricing,'/gia-ban']] as const
  const detailLinks = [[t.nav.pricing,'/gia-ban'],[t.nav.location,'#vi-tri'],[t.nav.plans,'#mat-bang'],[t.nav.amenities,'#tien-ich'],[t.nav.legal,'#phap-ly'],[t.nav.investor,'#chu-dau-tu'],[t.nav.progress,'#tien-do']] as const
  const controlClass = 'flex h-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-secondary'

  return <header className="fixed inset-x-0 top-0 z-50">
    <div className="h-1 w-full bg-primary" />
    <div className={`transition-all duration-300 ${scrolled ? 'border-b border-border/70 bg-background/90 shadow-[0_8px_30px_-18px_rgba(16,185,129,0.35)] backdrop-blur-xl' : 'bg-background/65 backdrop-blur-md'}`}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 md:h-20 lg:px-8">
        <a href={onHome ? '#top' : '/'} className="group flex shrink-0 items-center gap-3"><span className="flex size-10 items-center justify-center rounded-xl bg-primary font-serif text-lg text-primary-foreground transition-transform group-hover:scale-105">B</span><span className="hidden flex-col leading-none sm:flex"><span className="font-serif text-lg text-foreground">Bcons</span><span className="text-[0.6rem] font-semibold tracking-[0.28em] text-muted-foreground uppercase">Central Park</span></span></a>
        <nav className="hidden items-center gap-1 xl:flex" aria-label={t.nav.main}>
          {navLinks.map(([label,href]) => <a key={href} href={link(href)} aria-current={pathname === href ? 'page' : undefined} className={`group relative rounded-md px-2.5 py-2 text-sm font-medium transition-colors hover:text-primary ${pathname === href ? 'text-primary' : 'text-foreground/80'}`}>{label}<span className={`absolute inset-x-3 -bottom-0.5 h-px origin-left bg-primary transition-transform group-hover:scale-x-100 ${pathname === href ? 'scale-x-100' : 'scale-x-0'}`} /></a>)}
          <div className="relative" onMouseEnter={() => setDetailOpen(true)} onMouseLeave={() => setDetailOpen(false)}>
            <button type="button" aria-expanded={detailOpen} aria-haspopup="true" onClick={() => setDetailOpen(v => !v)} className="flex items-center gap-1 rounded-md px-2.5 py-2 text-sm font-medium text-foreground/80 hover:text-primary">{t.nav.details}<ChevronDown className={`size-4 transition-transform ${detailOpen ? 'rotate-180' : ''}`} /></button>
            <div className={`absolute top-full left-0 w-56 pt-3 transition-all ${detailOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none -translate-y-1 opacity-0'}`}><div className="rounded-2xl border border-border bg-card/95 p-2 shadow-xl backdrop-blur-xl">{detailLinks.map(([label,href]) => <a key={href} href={link(href)} aria-current={pathname === href ? 'page' : undefined} className={`block rounded-xl px-3 py-2.5 text-sm hover:bg-secondary hover:text-primary ${pathname === href ? 'bg-secondary text-primary' : 'text-foreground/80'}`}>{label}</a>)}</div></div>
          </div>
          <a href={link('#tin-tuc')} className="rounded-md px-2.5 py-2 text-sm font-medium text-foreground/80 hover:text-primary">{t.nav.news}</a>
        </nav>
        <div className="flex items-center gap-2">
          <div className="flex h-9 items-center rounded-full border border-border bg-card p-1 text-xs font-semibold" aria-label="Language"><button onClick={() => setLocale('vi')} className={`rounded-full px-2 py-1 ${locale === 'vi' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'}`}>VN</button><button onClick={() => setLocale('en')} className={`rounded-full px-2 py-1 ${locale === 'en' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'}`}>EN</button></div>
          <button type="button" onClick={toggleTheme} aria-label={theme === 'dark' ? t.nav.light : t.nav.dark} className={`${controlClass} w-9`}>{theme === 'dark' ? <Sun className="size-4" /> : <Moon className="size-4" />}</button>
          <a href="#dang-ky" className="hidden items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-[1.03] lg:inline-flex"><Phone className="size-4" />{t.nav.consult}</a>
          <button type="button" onClick={() => setMobileOpen(v => !v)} aria-label={mobileOpen ? t.nav.close : t.nav.open} aria-expanded={mobileOpen} className={`${controlClass} w-11 xl:hidden`}>{mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}</button>
        </div>
      </div>
      <div className={`overflow-hidden border-t border-border/60 bg-background/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 xl:hidden ${mobileOpen ? 'max-h-[36rem] opacity-100' : 'max-h-0 opacity-0'}`}><nav className="mx-auto grid max-w-7xl grid-cols-2 gap-1 px-4 py-4" aria-label={t.nav.mobile}>{[...navLinks,[t.nav.investor,'#chu-dau-tu'],[t.nav.progress,'#tien-do'],[t.nav.news,'#tin-tuc']].map(([label,href]) => <a key={href} href={link(href)} onClick={() => setMobileOpen(false)} className="rounded-xl px-3 py-3 text-sm font-medium text-foreground/85 hover:bg-secondary hover:text-primary">{label}</a>)}<a href="#dang-ky" onClick={() => setMobileOpen(false)} className="col-span-2 mt-2 flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"><Phone className="size-4" />{t.nav.consult}</a></nav></div>
    </div>
  </header>
}
