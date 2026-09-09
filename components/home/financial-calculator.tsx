'use client'

import React, { useState } from 'react'
import { ArrowRight, Calculator, CheckCircle2, DollarSign, Percent, ShieldCheck, Sparkles } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/layout/reveal'
import { useSitePreferences } from '@/components/layout/site-preferences'

export function FinancialCalculator() {
  const { t, theme, locale } = useSitePreferences()
  const isDark = theme === 'dark'

  const isEn = locale === 'en'

  // Apartment unit types matching media_1788972105358.png
  const apartmentUnits = [
    {
      id: 'studio',
      name: 'Studio',
      area: '37 – 40 m²',
      priceRange: '1,85 – 2,00 tỷ',
      defaultPrice: 1900000000,
    },
    {
      id: '1pn',
      name: isEn ? '1 Bedroom' : '1 Phòng ngủ',
      area: '42 – 43 m²',
      priceRange: '2,10 – 2,15 tỷ',
      defaultPrice: 2120000000,
    },
    {
      id: '2pn',
      name: isEn ? '2 Bedrooms' : '2 Phòng ngủ',
      area: '53 – 73 m²',
      priceRange: '2,65 – 3,64 tỷ',
      defaultPrice: 2650000000,
    },
    {
      id: '3pn',
      name: isEn ? '3 Bedrooms' : '3 Phòng ngủ',
      area: '87 – 88 m²',
      priceRange: '4,34 – 4,39 tỷ',
      defaultPrice: 4360000000,
    },
  ]

  // State
  const [selectedUnitId, setSelectedUnitId] = useState<string>('2pn')
  const [price, setPrice] = useState<number>(2650000000)
  const [downPaymentRatio, setDownPaymentRatio] = useState<number>(0.3) // Dynamic ratio (default 30%)
  const [downPayment, setDownPayment] = useState<number>(795000000) // 30% of 2.65B
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

  // Quick Preset Handlers
  const handleSelectUnit = (unit: typeof apartmentUnits[0]) => {
    setSelectedUnitId(unit.id)
    setPrice(unit.defaultPrice)
    setDownPayment(Math.round(unit.defaultPrice * downPaymentRatio))
  }

  const handleSelectDownPaymentPreset = (ratio: number) => {
    setDownPaymentRatio(ratio)
    setDownPayment(Math.round(price * ratio))
  }

  const downPaymentPresets = [
    { percent: 15, ratio: 0.15 },
    { percent: 30, ratio: 0.30 },
    { percent: 50, ratio: 0.50 },
    { percent: 70, ratio: 0.70 },
    { percent: 75, ratio: 0.75 },
  ]

  return (
    <section
      id="cong-cu-tai-chinh"
      className="scroll-mt-24 bg-gradient-to-b from-secondary/30 via-background to-secondary/20 dark:from-background dark:via-card/30 dark:to-background py-16 sm:py-20 lg:py-24 transition-colors duration-500"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          eyebrow={t.financeTool.eyebrow}
          title={isEn ? 'Financial Calculator' : 'Dự Toán Tài Chính'}
          subtitle={isEn ? 'Cash Flow & Repayment Planning' : 'Kế Hoạch Dòng Tiền & Lịch Trả Gốc Lãi'}
          description={t.financeTool.desc}
        />

        {/* Double-Bezel Architectural Container */}
        <Reveal delay={0.1}>
          <div className="mt-12 rounded-[2.5rem] p-2 sm:p-3 ring-1 ring-black/5 dark:ring-white/10 bg-stone-200/40 dark:bg-white/[0.03] shadow-2xl backdrop-blur-sm">
            <div className="rounded-[2rem] bg-white dark:bg-[#071712] p-6 sm:p-9 lg:p-11 border border-border/60 dark:border-white/10 shadow-sm">
              <div className="grid gap-10 lg:grid-cols-12 items-stretch">
                
                {/* CỘT TRÁI (7 Cột): BẢNG ĐIỀU KHIỂN THAM SỐ VAY */}
                <div className="lg:col-span-7 space-y-7 flex flex-col justify-between">
                  
                  {/* 1. CHỌN LOẠI CĂN HỘ */}
                  <div className="space-y-3.5">
                    <h4 className="text-sm sm:text-base font-bold tracking-wider uppercase text-primary dark:text-[#e6c887] font-sans">
                      {isEn ? '1. SELECT APARTMENT TYPE' : '1. CHỌN LOẠI CĂN HỘ'}
                    </h4>

                    {/* 4 Apartment Option Cards matching media_1788972105358.png */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {apartmentUnits.map((unit) => {
                        const isSelected = selectedUnitId === unit.id
                        return (
                          <button
                            key={unit.id}
                            type="button"
                            onClick={() => handleSelectUnit(unit)}
                            className={`rounded-2xl border p-3 sm:p-3.5 lg:p-4 text-center transition-all duration-200 cursor-pointer flex flex-col items-center justify-center ${
                              isSelected
                                ? 'bg-[#072018] text-white border-[#e6c887]/70 shadow-md ring-2 ring-[#e6c887]/40 dark:bg-[#0c2e22] dark:border-[#e6c887] dark:ring-2 dark:ring-[#e6c887]/50 scale-[1.02]'
                                : 'bg-white hover:bg-slate-50 border-slate-200 hover:border-slate-300 text-slate-900 dark:bg-white/[0.04] dark:hover:bg-white/[0.08] dark:border-white/10 dark:text-white shadow-sm'
                            }`}
                          >
                            <span
                              className={`font-bold text-xs sm:text-sm lg:text-base leading-tight ${
                                isSelected ? 'text-white' : 'text-slate-900 dark:text-white'
                              }`}
                            >
                              {unit.name}
                            </span>
                            <span
                              className={`text-[11px] sm:text-xs mt-1 font-sans ${
                                isSelected
                                  ? 'text-slate-200 dark:text-slate-300'
                                  : 'text-slate-500 dark:text-slate-400'
                              }`}
                            >
                              {unit.area}
                            </span>
                            <span
                              className={`text-xs sm:text-[13px] lg:text-sm font-bold mt-1.5 font-sans whitespace-nowrap ${
                                isSelected
                                  ? 'text-[#e6c887]'
                                  : 'text-[#c5a059] dark:text-[#e6c887]'
                              }`}
                            >
                              {unit.priceRange}
                            </span>
                          </button>
                        )
                      })}
                    </div>

                    {/* Fine-tune Price Slider */}
                    <div className="pt-2">
                      <div className="flex items-center justify-between pt-1 mb-2">
                        <label htmlFor="calc-price-input" className="text-xs sm:text-sm font-bold tracking-wide uppercase text-foreground/90 font-sans">
                          {isEn ? 'Selected Apartment Price:' : 'Giá căn hộ lựa chọn:'}
                        </label>
                        <span className="font-serif text-lg sm:text-xl font-bold text-primary dark:text-[#e6c887]">
                          {formatVND(price)} VNĐ
                        </span>
                      </div>
                      <input
                        id="calc-price-input"
                        type="range"
                        min={1850000000}
                        max={4500000000}
                        step={25000000}
                        value={price}
                        onChange={(e) => {
                          const val = Number(e.target.value)
                          setPrice(val)
                          // Dynamically detect matching unit range
                          if (val < 2050000000) setSelectedUnitId('studio')
                          else if (val < 2400000000) setSelectedUnitId('1pn')
                          else if (val < 4000000000) setSelectedUnitId('2pn')
                          else setSelectedUnitId('3pn')
                          setDownPayment(Math.round(val * downPaymentRatio))
                        }}
                        className="w-full h-2.5 bg-secondary dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#e6c887]"
                      />
                      <div className="flex justify-between text-[11px] text-muted-foreground pt-1.5 font-sans">
                        <span>{formatVND(1850000000)} VNĐ (Studio)</span>
                        <span>{formatVND(4390000000)} VNĐ (3PN)</span>
                      </div>
                    </div>
                  </div>

                  {/* 2. VỐN TỰ CÓ BAN ĐẦU */}
                  <div className="space-y-3 pt-5 border-t border-border/50 dark:border-white/5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <label htmlFor="calc-downpayment-input" className="text-xs sm:text-sm font-bold tracking-wider uppercase text-primary dark:text-[#e6c887] font-sans">
                          {isEn ? '2. INITIAL CAPITAL / EQUITY' : '2. VỐN TỰ CÓ BAN ĐẦU'}
                        </label>
                        <span className="rounded-full bg-emerald-100 dark:bg-emerald-950/70 px-2.5 py-0.5 text-xs font-bold text-emerald-800 dark:text-[#e6c887]">
                          {downPaymentPercent}%
                        </span>
                      </div>
                      <span className="font-serif text-lg sm:text-xl font-bold text-primary dark:text-[#e6c887]">
                        {formatVND(downPayment)} VNĐ
                      </span>
                    </div>

                    <input
                      id="calc-downpayment-input"
                      type="range"
                      min={Math.round(price * 0.15)}
                      max={Math.round(price * 0.80)}
                      step={25000000}
                      value={downPayment}
                      onChange={(e) => {
                        const val = Number(e.target.value)
                        setDownPayment(val)
                        if (price > 0) {
                          setDownPaymentRatio(val / price)
                        }
                      }}
                      className="w-full h-2.5 bg-secondary dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#e6c887]"
                    />

                    {/* Presets including 15%, 30%, 50%, 70%, 75% with exact VND formatting */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {downPaymentPresets.map((preset) => {
                        const isActive = Math.abs(downPaymentPercent - preset.percent) <= 1
                        const amount = Math.round(price * preset.ratio)
                        return (
                          <button
                            key={preset.percent}
                            type="button"
                            onClick={() => handleSelectDownPaymentPreset(preset.ratio)}
                            className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
                              isActive
                                ? 'bg-primary text-white dark:bg-[#e6c887] dark:text-[#072018] shadow-sm scale-105'
                                : 'bg-secondary/70 text-muted-foreground hover:bg-secondary dark:bg-white/5 dark:hover:bg-white/10'
                            }`}
                          >
                            {preset.percent}% ({formatVND(amount)} đ)
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {/* 3 & 4: Lãi suất & Thời hạn vay (2 Cột) */}
                  <div className="pt-4 border-t border-border/50 dark:border-white/5 space-y-3">
                    <h4 className="text-xs sm:text-sm font-bold tracking-wider uppercase text-primary dark:text-[#e6c887] font-sans">
                      {isEn ? '3. INTEREST RATE & LOAN TERM' : '3. LÃI SUẤT & THỜI HẠN VAY'}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                        className="w-full h-2.5 bg-secondary dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#e6c887]"
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
                        className="w-full h-2.5 bg-secondary dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#e6c887]"
                      />
                    </div>
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
