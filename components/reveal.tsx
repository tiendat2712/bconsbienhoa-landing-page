'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

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
  const isDark = tone === 'dark'
  return (
    <Reveal
      className={[
        'flex flex-col gap-4',
        align === 'center' ? 'items-center text-center' : 'items-start',
      ].join(' ')}
    >
      <span
        className={[
          'inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] uppercase',
          isDark ? 'text-accent' : 'text-primary',
        ].join(' ')}
      >
        <span className={isDark ? 'h-px w-8 bg-accent/70' : 'h-px w-8 bg-primary/40'} />
        {eyebrow}
      </span>
      <h2
        className={[
          'font-serif text-3xl leading-tight text-balance md:text-4xl lg:text-[2.75rem]',
          isDark ? 'text-primary-foreground' : 'text-foreground',
        ].join(' ')}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={[
            'max-w-2xl leading-relaxed text-pretty',
            isDark ? 'text-primary-foreground/75' : 'text-muted-foreground',
          ].join(' ')}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  )
}
