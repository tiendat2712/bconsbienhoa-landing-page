'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Check, MapPin, Ruler, ShieldCheck, Trees } from 'lucide-react'
import { useSitePreferences } from '@/components/site-preferences'

export function Hero() {
  const { t } = useSitePreferences()
  const [phone, setPhone] = useState('')
  const [sent, setSent] = useState(false)
  const highlights = [{ icon: Ruler, label: t.hero.scale, value: t.hero.scaleValue },{ icon: Trees, label: t.hero.green, value: t.hero.greenValue },{ icon: ShieldCheck, label: t.hero.ownership, value: t.hero.ownershipValue }]
  return <section id="top" className="relative isolate min-h-[92svh] overflow-hidden">
    <div className="absolute inset-0 -z-20 scale-105 bg-cover bg-center" style={{ backgroundImage: "url('/images/project-towers.jpg')" }} role="img" aria-label={t.hero.imageAlt} />
    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950/35 via-emerald-950/30 to-emerald-950/90" />
    <div className="mx-auto grid max-w-7xl gap-12 px-4 pt-32 pb-20 md:pt-40 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16 lg:px-8 lg:pb-28">
      <div>
        <motion.p initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:.6}} className="flex items-center gap-2 text-xs font-semibold tracking-[0.24em] text-accent uppercase"><MapPin className="size-4" />{t.hero.location}</motion.p>
        <motion.h1 initial={{opacity:0,y:28}} animate={{opacity:1,y:0}} transition={{duration:.8,delay:.08}} className="mt-6 max-w-3xl font-serif text-4xl leading-[1.08] text-balance text-primary-foreground text-shadow-hero sm:text-5xl lg:text-6xl">{t.hero.title}<span className="block text-accent">{t.hero.subtitle}</span></motion.h1>
        <motion.p initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.8,delay:.18}} className="mt-6 max-w-xl leading-relaxed text-pretty text-primary-foreground/85">{t.hero.description}</motion.p>
        <motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.8,delay:.28}} className="mt-10 grid max-w-xl gap-3 sm:grid-cols-3">{highlights.map(item => <div key={item.label} className="rounded-2xl border border-primary-foreground/20 bg-primary-foreground/10 p-4 backdrop-blur-md"><item.icon className="size-5 text-accent" /><p className="mt-3 text-[0.7rem] tracking-[0.16em] text-primary-foreground/70 uppercase">{item.label}</p><p className="mt-1 font-serif text-lg text-primary-foreground">{item.value}</p></div>)}</motion.div>
        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.8,delay:.4}} className="mt-8 max-w-xl text-sm leading-relaxed text-primary-foreground/70">{t.hero.alias}</motion.p>
      </div>
      <motion.div initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{duration:.9,delay:.24}} className="w-full rounded-3xl border border-primary-foreground/25 bg-card/90 p-6 shadow-2xl backdrop-blur-2xl sm:p-8">
        <p className="text-xs font-semibold tracking-[0.22em] text-primary uppercase">{t.hero.register}</p><h2 className="mt-3 font-serif text-2xl leading-snug text-balance text-foreground">{t.hero.formTitle}</h2><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.hero.formDesc}</p>
        <form className="mt-6 flex flex-col gap-3" onSubmit={e => {e.preventDefault();setSent(true)}}><label htmlFor="hero-phone" className="sr-only">{t.hero.phone}</label><input id="hero-phone" name="phone" type="tel" required inputMode="tel" placeholder={t.hero.placeholder} value={phone} onChange={e => setPhone(e.target.value)} className="h-13 w-full rounded-full border border-border bg-background px-5 text-sm text-foreground outline-none focus:border-primary focus:ring-4 focus:ring-primary/15" /><button type="submit" className="group flex h-13 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-all hover:scale-[1.02]">{sent ? <><Check className="size-4" />{t.hero.sent}</> : <>{t.hero.register}<ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></>}</button></form>
        <p className="mt-4 text-xs leading-relaxed text-muted-foreground">{t.hero.privacy}</p><div className="mt-6 flex items-center justify-between gap-4 border-t border-border pt-5"><div><p className="text-[0.7rem] tracking-[0.16em] text-muted-foreground uppercase">{t.hero.priceLabel}</p><p className="font-serif text-xl text-primary">{t.hero.price}</p></div><a href="#gia-ban" className="text-sm font-semibold text-primary underline decoration-primary/30 decoration-2 underline-offset-4">{t.hero.viewPrice}</a></div>
      </motion.div>
    </div>
  </section>
}
