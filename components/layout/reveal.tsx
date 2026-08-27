'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { useSitePreferences } from '@/components/layout/site-preferences'

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'light',
}: {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
  tone?: 'light' | 'dark'
}) {
  const { theme } = useSitePreferences()
  const isDark = theme === 'dark' || tone === 'dark'

  return (
    <Reveal
      className={[
        'flex flex-col gap-4',
        align === 'center' ? 'items-center text-center' : 'items-start',
      ].join(' ')}
    >
      <span
        className={[
          'inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] uppercase transition-colors duration-500',
          isDark ? 'text-[#e6c887]' : 'text-primary',
        ].join(' ')}
      >
        <span
          className={[
            'h-px w-8 transition-colors duration-500',
            isDark ? 'bg-[#e6c887]' : 'bg-primary/40',
          ].join(' ')}
        />
        {eyebrow}
      </span>
      <h2
        className={[
          'font-serif text-3xl leading-tight text-balance md:text-4xl lg:text-[2.75rem] font-bold transition-colors duration-500',
          isDark ? 'text-white' : 'text-foreground',
        ].join(' ')}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={[
            'max-w-2xl leading-relaxed text-pretty transition-colors duration-500',
            isDark ? 'text-[#c2d3cb]' : 'text-muted-foreground',
          ].join(' ')}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  )
}
