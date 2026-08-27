'use client'

import React, { useState } from 'react'
import { ArrowRight, Calculator, CheckCircle2, DollarSign, Percent, ShieldCheck, Sparkles } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/layout/reveal'
import { useSitePreferences } from '@/components/layout/site-preferences'

export function FinancialCalculator() {
  const { t, theme, locale } = useSitePreferences()
  const isDark = theme === 'dark'

  // State
  const [price, setPrice] = useState<number>(2500000000)
  const [downPayment, setDownPayment] = useState<number>(750000000)
  const [interestRate, setInterestRate] = useState<number>(8.0)
  const [loanTermYears, setLoanTermYears] = useState<number>(20)

  // Calculations
  const loanAmount = Math.max(0, price - downPayment)
  const downPaymentPercent = price > 0 ? Math.round((downPayment / price) * 100) : 0
  const totalMonths = loanTermYears * 12
  const monthlyRate = interestRate / 100 / 12

  // Annuity monthly payment
  let monthlyPayment = 0
  if (loanAmount > 0 && totalMonths > 0) {
    if (monthlyRate === 0) {
      monthlyPayment = loanAmount / totalMonths
    } else {
      monthlyPayment =
        (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1)
    }
  }

  // First month breakdown
  const monthlyPrincipal = totalMonths > 0 ? loanAmount / totalMonths : 0
  const firstMonthInterest = loanAmount * monthlyRate

  const formatVND = (num: number) => {
    return new Intl.NumberFormat('vi-VN').format(Math.round(num))
  }

  const formatShortMoney = (amount: number) => {
    if (locale === 'en') {
      if (amount >= 1000000000) {
        const b = amount / 1000000000
        return `${Number.isInteger(b) ? b : b.toFixed(2).replace(/\.?0+$/, '')} B`
      }
      const m = Math.round(amount / 1000000)
      return `${m} M`
    }
    if (amount >= 1000000000) {
      const ty = amount / 1000000000
      return `${Number.isInteger(ty) ? ty : ty.toFixed(2).replace(/\.?0+$/, '')} tỷ`
    }
    const tr = Math.round(amount / 1000000)
    return `${tr} tr`
  }

  // Quick Preset Handlers
  const handleSelectPricePreset = (val: number) => {
    setPrice(val)
    // Keep proportional down payment (e.g. 30%)
    setDownPayment(Math.round(val * 0.3))
  }

  const handleSelectDownPaymentPreset = (ratio: number) => {
    setDownPayment(Math.round(price * ratio))
  }

  return (
    <section
      id="cong-cu-tai-chinh"
      className="scroll-mt-24 bg-gradient-to-b from-secondary/30 via-background to-secondary/20 dark:from-background dark:via-card/30 dark:to-background py-20 lg:py-28 transition-colors duration-500"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          eyebrow={t.financeTool.eyebrow}
          title={t.financeTool.title}
          description={t.financeTool.desc}
        />

        {/* Double-Bezel Architectural Container */}
        <Reveal delay={0.1}>
          <div className="mt-12 rounded-[2.5rem] p-2 sm:p-3 ring-1 ring-black/5 dark:ring-white/10 bg-stone-200/40 dark:bg-white/[0.03] shadow-2xl backdrop-blur-sm">
            <div className="rounded-[2rem] bg-white dark:bg-[#071712] p-6 sm:p-9 lg:p-11 border border-border/60 dark:border-white/10 shadow-sm">
              <div className="grid gap-10 lg:grid-cols-12 items-stretch">
                
                {/* CỘT TRÁI (7 Cột): BẢNG ĐIỀU KHIỂN THAM SỐ VAY */}
                <div className="lg:col-span-7 space-y-7 flex flex-col justify-between">
                  
                  {/* 1. Giá căn hộ */}
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <label htmlFor="calc-price-input" className="text-xs font-bold tracking-[0.14em] uppercase text-foreground/90">
                        {t.financeTool.priceLabel}
                      </label>
                      <span className="font-serif text-base font-bold text-primary dark:text-[#e6c887]">
                        {formatVND(price)} VNĐ
                      </span>
                    </div>

                    <div className="relative">
                      <input
                        id="calc-price-input"
                        type="range"
                        min={1500000000}
                        max={5000000000}
                        step={50000000}
                        value={price}
                        onChange={(e) => {
                          const val = Number(e.target.value)
                          setPrice(val)
                          if (downPayment > val) setDownPayment(Math.round(val * 0.3))
                        }}
                        className="w-full h-2.5 bg-secondary dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#b8860b] dark:accent-[#e6c887]"
                      />
                    </div>

                    {/* Presets */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      <button
                        type="button"
                        onClick={() => handleSelectPricePreset(1900000000)}
                        className={`rounded-full px-3.5 py-1 text-xs font-semibold transition-all ${
                          price === 1900000000
                            ? 'bg-primary text-white dark:bg-[#e6c887] dark:text-[#072018] shadow-sm'
                            : 'bg-secondary/70 text-muted-foreground hover:bg-secondary dark:bg-white/5 dark:hover:bg-white/10'
                        }`}
                      >
                        {t.financeTool.presets.studio}
                      </button>
                      <button
                        type="button"
                        onClick={() => handleSelectPricePreset(2500000000)}
                        className={`rounded-full px-3.5 py-1 text-xs font-semibold transition-all ${
                          price === 2500000000
                            ? 'bg-primary text-white dark:bg-[#e6c887] dark:text-[#072018] shadow-sm'
                            : 'bg-secondary/70 text-muted-foreground hover:bg-secondary dark:bg-white/5 dark:hover:bg-white/10'
                        }`}
                      >
                        {t.financeTool.presets.twoBed}
                      </button>
                      <button
                        type="button"
                        onClick={() => handleSelectPricePreset(3800000000)}
                        className={`rounded-full px-3.5 py-1 text-xs font-semibold transition-all ${
                          price === 3800000000
                            ? 'bg-primary text-white dark:bg-[#e6c887] dark:text-[#072018] shadow-sm'
                            : 'bg-secondary/70 text-muted-foreground hover:bg-secondary dark:bg-white/5 dark:hover:bg-white/10'
                        }`}
                      >
                        {t.financeTool.presets.threeBed}
                      </button>
                    </div>
                  </div>

                  {/* 2. Vốn tự có */}
                  <div className="space-y-2.5 pt-4 border-t border-border/50 dark:border-white/5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <label htmlFor="calc-downpayment-input" className="text-xs font-bold tracking-[0.14em] uppercase text-foreground/90">
                          {t.financeTool.downPaymentLabel}
                        </label>
                        <span className="rounded-full bg-emerald-100 dark:bg-emerald-950/70 px-2 py-0.5 text-[11px] font-bold text-emerald-800 dark:text-[#e6c887]">
                          {downPaymentPercent}%
                        </span>
                      </div>
                      <span className="font-serif text-base font-bold text-primary dark:text-[#e6c887]">
                        {formatVND(downPayment)} VNĐ
                      </span>
                    </div>

                    <input
                      id="calc-downpayment-input"
                      type="range"
                      min={Math.round(price * 0.15)}
                      max={Math.round(price * 0.7)}
                      step={25000000}
                      value={downPayment}
                      onChange={(e) => setDownPayment(Number(e.target.value))}
                      className="w-full h-2.5 bg-secondary dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#b8860b] dark:accent-[#e6c887]"
                    />

                    {/* Presets */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      <button
                        type="button"
                        onClick={() => handleSelectDownPaymentPreset(0.15)}
                        className={`rounded-full px-3.5 py-1 text-xs font-semibold transition-all ${
                          downPaymentPercent === 15
                            ? 'bg-primary text-white dark:bg-[#e6c887] dark:text-[#072018] shadow-sm'
                            : 'bg-secondary/70 text-muted-foreground hover:bg-secondary dark:bg-white/5 dark:hover:bg-white/10'
                        }`}
                      >
                        15% ({formatShortMoney(price * 0.15)})
                      </button>
                      <button
                        type="button"
                        onClick={() => handleSelectDownPaymentPreset(0.3)}
                        className={`rounded-full px-3.5 py-1 text-xs font-semibold transition-all ${
                          downPaymentPercent === 30
                            ? 'bg-primary text-white dark:bg-[#e6c887] dark:text-[#072018] shadow-sm'
                            : 'bg-secondary/70 text-muted-foreground hover:bg-secondary dark:bg-white/5 dark:hover:bg-white/10'
                        }`}
                      >
                        30% ({formatShortMoney(price * 0.3)})
                      </button>
                      <button
                        type="button"
                        onClick={() => handleSelectDownPaymentPreset(0.5)}
                        className={`rounded-full px-3.5 py-1 text-xs font-semibold transition-all ${
                          downPaymentPercent === 50
                            ? 'bg-primary text-white dark:bg-[#e6c887] dark:text-[#072018] shadow-sm'
                            : 'bg-secondary/70 text-muted-foreground hover:bg-secondary dark:bg-white/5 dark:hover:bg-white/10'
                        }`}
                      >
                        50% ({formatShortMoney(price * 0.5)})
                      </button>
                    </div>
                  </div>

                  {/* 3 & 4: Lãi suất & Thời hạn vay (2 Cột) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4 border-t border-border/50 dark:border-white/5">
                    {/* Lãi suất */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label htmlFor="calc-rate-input" className="text-xs font-bold tracking-[0.14em] uppercase text-foreground/90">
                          {t.financeTool.interestRateLabel}
                        </label>
                        <span className="font-serif text-sm font-bold text-primary dark:text-[#e6c887]">
                          {interestRate.toFixed(1)} %
                        </span>
                      </div>
                      <input
                        id="calc-rate-input"
                        type="range"
                        min={5.0}
                        max={14.0}
                        step={0.1}
                        value={interestRate}
                        onChange={(e) => setInterestRate(Number(e.target.value))}
                        className="w-full h-2.5 bg-secondary dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#b8860b] dark:accent-[#e6c887]"
                      />
                    </div>

                    {/* Thời hạn vay */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label htmlFor="calc-years-input" className="text-xs font-bold tracking-[0.14em] uppercase text-foreground/90">
                          {t.financeTool.loanTermLabel}
                        </label>
                        <span className="font-serif text-sm font-bold text-primary dark:text-[#e6c887]">
                          {loanTermYears} năm
                        </span>
                      </div>
                      <input
                        id="calc-years-input"
                        type="range"
                        min={5}
                        max={30}
                        step={1}
                        value={loanTermYears}
                        onChange={(e) => setLoanTermYears(Number(e.target.value))}
                        className="w-full h-2.5 bg-secondary dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#b8860b] dark:accent-[#e6c887]"
                      />
                    </div>
                  </div>
                </div>

                {/* CỘT PHẢI (5 Cột): THẺ KẾT QUẢ SANG TRỌNG (AWWWARDS TIER) */}
                <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl bg-gradient-to-br from-[#072018] via-[#0a2c22] to-[#041610] p-7 sm:p-9 text-white shadow-2xl border border-[#e6c887]/25 relative overflow-hidden">
                  {/* Subtle luxury ambient gold glow */}
                  <div className="absolute -top-16 -right-16 size-48 rounded-full bg-[#e6c887]/15 blur-3xl pointer-events-none" />
                  
                  <div className="relative space-y-6">
                    {/* Header Badge */}
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.2em] text-[#e6c887] uppercase">
                        <Sparkles className="size-3.5" />
                        {t.financeTool.eyebrow}
                      </span>
                      <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-200">
                        {loanTermYears * 12} kỳ trả
                      </span>
                    </div>

                    {/* 1. Khoản vay ước tính */}
                    <div>
                      <p className="text-xs font-semibold tracking-wider text-emerald-200/80 uppercase">
                        {t.financeTool.loanAmountTitle}
                      </p>
                      <p className="mt-1 font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
                        {formatVND(loanAmount)} <span className="text-lg font-sans font-normal text-white/70">đ</span>
                      </p>
                    </div>

                    {/* 2. Ước tính thanh toán hàng tháng */}
                    <div className="rounded-2xl bg-white/[0.06] border border-white/10 p-5 backdrop-blur-sm space-y-1">
                      <p className="text-xs font-bold tracking-[0.16em] text-[#e6c887] uppercase">
                        {t.financeTool.monthlyPaymentTitle}
                      </p>
                      <div className="mt-1 flex items-baseline gap-2">
                        <p className="font-serif text-3xl sm:text-4xl font-extrabold text-[#e6c887] tracking-tight">
                          ≈ {formatVND(monthlyPayment)} đ
                        </p>
                        <span className="text-xs font-semibold text-white/70">
                          {t.financeTool.monthUnit}
                        </span>
                      </div>
                      <p className="pt-2 text-[11px] italic text-emerald-100/70 leading-relaxed">
                        {t.financeTool.calcNote}
                      </p>
                    </div>

                    {/* Breakdown sub-metrics */}
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <div className="rounded-xl bg-black/20 p-3 border border-white/5">
                        <p className="text-[11px] text-white/70">{t.financeTool.principalTitle}</p>
                        <p className="mt-0.5 text-xs font-bold text-white">{formatVND(monthlyPrincipal)} đ</p>
                      </div>
                      <div className="rounded-xl bg-black/20 p-3 border border-white/5">
                        <p className="text-[11px] text-white/70">{t.financeTool.firstInterestTitle}</p>
                        <p className="mt-0.5 text-xs font-bold text-[#e6c887]">{formatVND(firstMonthInterest)} đ</p>
                      </div>
                    </div>
                  </div>

                  {/* Button-in-Button CTA */}
                  <div className="mt-8 relative">
                    <a
                      href="#dang-ky"
                      className="group flex w-full items-center justify-between rounded-full bg-gradient-to-r from-[#e6c887] via-[#f5e2b0] to-[#e6c887] p-1.5 pl-6 text-xs font-extrabold tracking-[0.12em] text-[#072018] uppercase shadow-lg transition-all duration-300 hover:shadow-[0_0_25px_rgba(230,200,135,0.4)] active:scale-[0.98]"
                    >
                      <span>{t.financeTool.ctaBtn}</span>
                      <span className="flex size-9 items-center justify-center rounded-full bg-[#072018] text-[#e6c887] shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-20deg]">
                        <ArrowRight className="size-4" />
                      </span>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
