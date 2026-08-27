'use client'

import React, { useState, useRef, useEffect } from 'react'
import {
  Building2,
  Check,
  ChevronDown,
  Clock,
  Home,
  Mail,
  MapPin,
  Phone,
  Send,
  ShieldCheck,
  Store,
  Sparkles,
} from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/layout/reveal'
import { useSitePreferences } from '@/components/layout/site-preferences'
import {
  filterPhoneInput,
  validateName,
  validateNote,
  validatePhone,
  validateUnitType,
} from '@/lib/validation'

interface FormErrors {
  name?: string
  phone?: string
  type?: string
  note?: string
}

const unitIcons: Record<string, any> = {
  studio: Home,
  '1pn': Home,
  '2pn': Building2,
  '3pn': Sparkles,
  shop: Store,
}

export function Contact() {
  const { theme, t, locale } = useSitePreferences()
  const isDark = theme === 'dark'

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    type: '2pn',
    note: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitting, setSubmitting] = useState(false)
  const [sent, setSent] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const unitOptions = t.contact.typeOptions.map((opt) => ({
    ...opt,
    icon: unitIcons[opt.value] || Home,
  }))

  const selectedUnitObj =
    unitOptions.find((opt) => opt.value === formData.type) || unitOptions[1] || unitOptions[0]

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setFormData((prev) => ({ ...prev, name: value }))
    if (errors.name) {
      setErrors((prev) => ({ ...prev, name: undefined }))
    }
  }

  const handlePhoneKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab', 'Enter'].includes(e.key)) {
      return
    }
    if (e.ctrlKey || e.metaKey) {
      return
    }
    if (e.key === '+') {
      if (e.currentTarget.selectionStart === 0 && !formData.phone.includes('+')) {
        return
      }
      e.preventDefault()
      return
    }
    if (!/^[0-9]$/.test(e.key)) {
      e.preventDefault()
    }
  }

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      const nextErrors: FormErrors = {}
      if (errors.name) {
        const res = validateName(formData.name, locale)
        nextErrors.name = res.error || (locale === 'en' ? 'Please enter your full name' : 'Vui lòng nhập họ và tên')
      }
      if (errors.phone) {
        const res = validatePhone(formData.phone, locale)
        nextErrors.phone = res.error || (locale === 'en' ? 'Please enter your phone number' : 'Vui lòng nhập số điện thoại')
      }
      if (errors.type) {
        const res = validateUnitType(formData.type, locale)
        nextErrors.type = res.error || (locale === 'en' ? 'Please select your preferred unit type' : 'Vui lòng chọn loại căn quan tâm')
      }
      if (errors.note && formData.note) {
        const res = validateNote(formData.note, locale)
        nextErrors.note = res.error
      }
      setErrors(nextErrors)
    }
  }, [locale])

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filtered = filterPhoneInput(e.target.value)
    setFormData((prev) => ({ ...prev, phone: filtered }))
    if (!filtered || filtered.trim() === '') {
      if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }))
      return
    }
    const validation = validatePhone(filtered, locale)
    if (!validation.isValid) {
      setErrors((prev) => ({ ...prev, phone: validation.error }))
    } else {
      setErrors((prev) => ({ ...prev, phone: undefined }))
    }
  }

  const handleSelectUnit = (val: string) => {
    const validation = validateUnitType(val, locale)
    if (!validation.isValid) {
      setErrors((prev) => ({ ...prev, type: validation.error }))
      return
    }
    setFormData((prev) => ({ ...prev, type: val }))
    setIsDropdownOpen(false)
    if (errors.type) {
      setErrors((prev) => ({ ...prev, type: undefined }))
    }
  }

  const handleNoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    setFormData((prev) => ({ ...prev, note: value }))
    if (errors.note) {
      setErrors((prev) => ({ ...prev, note: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const nameResult = validateName(formData.name, locale)
    const phoneResult = validatePhone(formData.phone, locale)
    const typeResult = validateUnitType(formData.type, locale)
    const noteResult = validateNote(formData.note, locale)

    const nextErrors: FormErrors = {}
    if (!nameResult.isValid) nextErrors.name = nameResult.error
    if (!phoneResult.isValid) nextErrors.phone = phoneResult.error
    if (!typeResult.isValid) nextErrors.type = typeResult.error
    if (!noteResult.isValid) nextErrors.note = noteResult.error

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      return
    }

    setSubmitting(true)
    setErrors({})

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: nameResult.sanitized,
          phone: phoneResult.sanitized,
          type: formData.type,
          note: noteResult.sanitized,
          source: locale === 'en' ? 'Home Page - Detailed Consultation Form' : 'Trang chủ - Form Đăng ký tư vấn chi tiết',
        }),
      })

      const data = await res.json()
      if (res.ok && data.success) {
        setSent(true)
      } else {
        setErrors({ phone: data.error || (locale === 'en' ? 'An error occurred while submitting, please try again' : 'Có lỗi xảy ra khi gửi thông tin, vui lòng thử lại') })
      }
    } catch {
      setErrors({ phone: locale === 'en' ? 'Server connection error, please try again later' : 'Lỗi kết nối máy chủ, vui lòng thử lại sau' })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section
      id="dang-ky"
      className="relative isolate scroll-mt-24 overflow-hidden bg-[#072018] py-20 text-white border-y border-emerald-950/40 lg:py-28 transition-colors duration-500"
    >
      <div
        className="absolute inset-0 -z-10 opacity-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-towers.png')" }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#072018]/90 via-[#072018]/95 to-[#072018]" />

      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 items-center">
          <div>
            <SectionHeading
              tone="dark"
              eyebrow={t.contact.eyebrow}
              title={t.contact.title}
              description={t.contact.desc}
            />

            <Reveal delay={0.1} className="mt-10 flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-[#e6c887]">
                  <Phone className="size-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold tracking-[0.16em] text-[#e6c887] uppercase">
                    {t.contact.hotlineLabel}
                  </p>
                  <a
                    href="tel:0376671776"
                    className="mt-1 font-serif text-2xl text-white font-bold hover:text-[#e6c887] transition-colors"
                  >
                    0376 671 776
                  </a>
                  <p className="text-xs text-white/70 mt-0.5">{t.contact.consultantName} ({t.contact.consultantRole})</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-[#e6c887]">
                  <Mail className="size-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold tracking-[0.16em] text-[#e6c887] uppercase">
                    Email
                  </p>
                  <a
                    href="mailto:longqt2701@gmail.com"
                    className="mt-1 block text-base text-white/90 font-medium hover:text-[#e6c887] transition-colors"
                  >
                    longqt2701@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-[#e6c887]">
                  <MapPin className="size-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold tracking-[0.16em] text-[#e6c887] uppercase">
                    {t.contact.addressLabel}
                  </p>
                  <p className="mt-1 text-sm text-[#c2d3cb]">
                    236 Phan Trung, P. Tam Hiệp, TP. Biên Hòa, Đồng Nai
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15} className="mt-10 border-t border-white/10 pt-8">
              <div className="flex items-center gap-3 text-xs text-[#c2d3cb]">
                <ShieldCheck className="size-4 text-[#e6c887]" />
                <span>{t.contact.privacyNote}</span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            {/* Form Card */}
            <div
              className={`rounded-3xl p-6 md:p-10 shadow-2xl transition-all duration-500 ${
                isDark
                  ? 'border border-[#e6c887]/30 bg-[#122820]/90 backdrop-blur-2xl text-white shadow-[0_20px_50px_rgba(0,0,0,0.5)] ring-1 ring-[#e6c887]/20'
                  : 'border border-border bg-white text-slate-900 shadow-2xl'
              }`}
            >
              {sent ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <span
                    className={`flex size-16 items-center justify-center rounded-full shadow-lg ${
                      isDark ? 'bg-[#e6c887] text-[#072018]' : 'bg-emerald-600 text-white'
                    }`}
                  >
                    <Check className="size-8 stroke-[2.5]" />
                  </span>
                  <h3 className={`mt-6 font-serif text-2xl font-bold ${isDark ? 'text-[#e6c887]' : 'text-slate-900'}`}>
                    {t.contact.successTitle}
                  </h3>
                  <p className={`mt-2 max-w-md text-sm ${isDark ? 'text-[#c2d3cb]' : 'text-slate-600'}`}>
                    {t.contact.successDesc}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className={`mt-6 rounded-full px-6 py-2.5 text-xs font-bold uppercase transition-all ${
                      isDark
                        ? 'bg-[#e6c887] text-[#072018] hover:bg-[#f7e4b5]'
                        : 'bg-primary text-primary-foreground hover:bg-primary/90'
                    }`}
                  >
                    {t.contact.sendAnother}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                  {/* Họ và tên */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="contact-name"
                      className={`text-xs font-bold tracking-[0.16em] uppercase transition-colors duration-300 ${
                        isDark ? 'text-[#e6c887]' : 'text-slate-600'
                      }`}
                    >
                      {t.contact.name} <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleNameChange}
                      placeholder={t.contact.namePlaceholder}
                      className={`h-12 rounded-xl px-4 text-sm font-medium transition-all duration-200 outline-none ${
                        isDark
                          ? 'border border-white/20 bg-white/10 text-white placeholder:text-white/40 focus:border-[#e6c887] focus:bg-white/15 focus:ring-2 focus:ring-[#e6c887]/25'
                          : 'border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:border-emerald-600 focus:bg-white focus:ring-2 focus:ring-emerald-600/20'
                      } ${errors.name ? 'border-red-500 ring-2 ring-red-500/20' : ''}`}
                    />
                    {errors.name && (
                      <p className="text-xs font-medium text-red-400 mt-0.5 animate-fadeIn">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Số điện thoại */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="contact-phone"
                      className={`text-xs font-bold tracking-[0.16em] uppercase transition-colors duration-300 ${
                        isDark ? 'text-[#e6c887]' : 'text-slate-600'
                      }`}
                    >
                      {t.contact.phone} <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      maxLength={12}
                      value={formData.phone}
                      onKeyDown={handlePhoneKeyDown}
                      onChange={handlePhoneChange}
                      placeholder={t.contact.phonePlaceholder}
                      className={`h-12 rounded-xl px-4 text-sm font-medium transition-all duration-200 outline-none ${
                        isDark
                          ? 'border border-white/20 bg-white/10 text-white placeholder:text-white/40 focus:border-[#e6c887] focus:bg-white/15 focus:ring-2 focus:ring-[#e6c887]/25'
                          : 'border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:border-emerald-600 focus:bg-white focus:ring-2 focus:ring-emerald-600/20'
                      } ${errors.phone ? 'border-red-500 ring-2 ring-red-500/20' : ''}`}
                    />
                    {errors.phone && (
                      <p className="text-xs font-medium text-red-400 mt-0.5 animate-fadeIn">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Custom Luxury Dropdown: Loại căn quan tâm */}
                  <div className="flex flex-col gap-1.5 relative" ref={dropdownRef}>
                    <label
                      id="unit-select-label"
                      className={`text-xs font-bold tracking-[0.16em] uppercase transition-colors duration-300 ${
                        isDark ? 'text-[#e6c887]' : 'text-slate-600'
                      }`}
                    >
                      {t.contact.type} <span className="text-red-400">*</span>
                    </label>

                    {/* Trigger Button */}
                    <button
                      type="button"
                      aria-haspopup="listbox"
                      aria-expanded={isDropdownOpen}
                      aria-labelledby="unit-select-label"
                      onClick={() => setIsDropdownOpen((prev) => !prev)}
                      className={`h-12 w-full rounded-xl px-4 text-left text-sm font-semibold flex items-center justify-between transition-all duration-200 cursor-pointer outline-none ${
                        isDark
                          ? 'border border-white/20 bg-white/10 text-white hover:bg-white/15'
                          : 'border border-slate-200 bg-slate-50 text-slate-900 hover:bg-slate-100'
                      } ${isDropdownOpen ? (isDark ? 'ring-2 ring-[#e6c887] border-[#e6c887]' : 'ring-2 ring-emerald-500 border-emerald-500') : ''}`}
                    >
                      <div className="flex items-center gap-3 overflow-hidden">
                        <selectedUnitObj.icon className={`size-4 shrink-0 ${isDark ? 'text-[#e6c887]' : 'text-emerald-500'}`} />
                        <span className="truncate">{selectedUnitObj.label}</span>
                        <span className={`text-xs hidden sm:inline truncate ${isDark ? 'text-white/60' : 'text-slate-500'}`}>
                          ({selectedUnitObj.desc})
                        </span>
                      </div>
                      <ChevronDown
                        className={`size-4 shrink-0 transition-transform duration-300 ${
                          isDropdownOpen ? (isDark ? 'rotate-180 text-[#e6c887]' : 'rotate-180 text-emerald-400') : isDark ? 'text-[#e6c887]/70' : 'text-slate-500'
                        }`}
                      />
                    </button>

                    {/* Animated Dropdown Menu Popover */}
                    {isDropdownOpen && (
                      <div
                        role="listbox"
                        className={`absolute top-[calc(100%+6px)] left-0 w-full z-50 rounded-2xl p-1.5 shadow-2xl backdrop-blur-2xl animate-in fade-in zoom-in-95 duration-200 ${
                          isDark
                            ? 'border border-[#e6c887]/30 bg-[#163328] text-white shadow-[0_20px_40px_rgba(0,0,0,0.8)]'
                            : 'border border-slate-200 bg-white text-slate-900 shadow-xl'
                        }`}
                      >
                        <div className="flex flex-col gap-1">
                          {unitOptions.map((opt) => {
                            const isSelected = formData.type === opt.value
                            const IconComponent = opt.icon
                            return (
                              <button
                                key={opt.value}
                                type="button"
                                role="option"
                                aria-selected={isSelected}
                                onClick={() => handleSelectUnit(opt.value)}
                                className={`group w-full flex items-center justify-between rounded-xl p-2.5 text-left transition-all duration-150 cursor-pointer ${
                                  isSelected
                                    ? isDark
                                      ? 'bg-[#e6c887] text-[#072018] font-bold shadow-md'
                                      : 'bg-emerald-600 text-white font-bold shadow-md'
                                    : isDark
                                    ? 'text-white/90 hover:bg-white/10 hover:translate-x-1'
                                    : 'text-slate-800 hover:bg-slate-100 hover:translate-x-1'
                                }`}
                              >
                                <div className="flex items-center gap-3">
                                  <div
                                    className={`size-8 rounded-lg flex items-center justify-center transition-all ${
                                      isSelected
                                        ? isDark
                                          ? 'bg-[#072018]/20 text-[#072018]'
                                          : 'bg-white/20 text-white'
                                        : isDark
                                        ? 'bg-white/10 text-[#e6c887] group-hover:bg-[#e6c887] group-hover:text-[#072018]'
                                        : 'bg-slate-100 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white'
                                    }`}
                                  >
                                    <IconComponent className="size-4" />
                                  </div>
                                  <div>
                                    <p className="text-xs font-bold leading-tight">{opt.label}</p>
                                    <p
                                      className={`text-[11px] mt-0.5 ${
                                        isSelected
                                          ? isDark
                                            ? 'text-[#072018]/80'
                                            : 'text-white/80'
                                          : isDark
                                          ? 'text-white/60'
                                          : 'text-slate-500'
                                      }`}
                                    >
                                      {opt.desc}
                                    </p>
                                  </div>
                                </div>
                                {isSelected && (
                                  <span
                                    className={`size-5 rounded-full flex items-center justify-center shrink-0 shadow-xs ${
                                      isDark ? 'bg-[#072018] text-[#e6c887]' : 'bg-white text-emerald-700'
                                    }`}
                                  >
                                    <Check className="size-3.5 stroke-[3]" />
                                  </span>
                                )}
                              </button>
                            )
                          })}
                        </div>
                      </div>
                    )}
                    {errors.type && (
                      <p className="text-xs font-medium text-red-400 mt-0.5 animate-fadeIn">
                        {errors.type}
                      </p>
                    )}
                  </div>

                  {/* Ghi chú */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="contact-note"
                      className={`text-xs font-bold tracking-[0.16em] uppercase transition-colors duration-300 ${
                        isDark ? 'text-[#e6c887]' : 'text-slate-600'
                      }`}
                    >
                      {t.contact.note}
                    </label>
                    <textarea
                      id="contact-note"
                      rows={3}
                      value={formData.note}
                      onChange={handleNoteChange}
                      placeholder={t.contact.notePlaceholder}
                      className={`rounded-xl p-4 text-sm font-medium transition-all duration-200 outline-none resize-none ${
                        isDark
                          ? 'border border-white/20 bg-white/10 text-white placeholder:text-white/40 focus:border-[#e6c887] focus:bg-white/15 focus:ring-2 focus:ring-[#e6c887]/25'
                          : 'border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:border-emerald-600 focus:bg-white focus:ring-2 focus:ring-emerald-600/20'
                      } ${errors.note ? 'border-red-500 ring-2 ring-red-500/20' : ''}`}
                    />
                    {errors.note && (
                      <p className="text-xs font-medium text-red-400 mt-0.5 animate-fadeIn">
                        {errors.note}
                      </p>
                    )}
                  </div>

                  {/* Nút gửi form */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className={`mt-2 flex h-14 w-full items-center justify-center gap-2 rounded-2xl text-xs font-bold tracking-[0.16em] uppercase shadow-lg transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 cursor-pointer ${
                      isDark
                        ? 'bg-gradient-to-r from-[#e6c887] via-[#f7e4b5] to-[#e6c887] text-[#072018] shadow-[0_10px_25px_-5px_rgba(230,200,135,0.4)]'
                        : 'bg-emerald-600 text-white shadow-emerald-950/20 hover:bg-emerald-700'
                    }`}
                  >
                    {submitting ? (
                      <>
                        <Clock className="size-4 animate-spin" />
                        <span>{t.contact.submitting}</span>
                      </>
                    ) : (
                      <>
                        <Send className="size-4" />
                        <span>{t.contact.submit}</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
