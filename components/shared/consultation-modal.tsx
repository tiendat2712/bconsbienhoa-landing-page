'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Building2,
  Check,
  ChevronDown,
  Home,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  Store,
  X,
  Loader2,
  User,
  MessageSquare,
} from 'lucide-react'
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

export function ConsultationModal() {
  const { theme, t, locale, isConsultationOpen, consultationOptions, closeConsultation } =
    useSitePreferences()
  const isDark = theme === 'dark'
  const isEn = locale === 'en'

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    type: consultationOptions?.unitType || consultationOptions?.defaultType || '2pn',
    note: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitting, setSubmitting] = useState(false)
  const [sent, setSent] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Sync default type if passed in options
  useEffect(() => {
    const desiredType = consultationOptions?.unitType || consultationOptions?.defaultType
    if (desiredType) {
      setFormData((prev) => ({ ...prev, type: desiredType }))
    }
  }, [consultationOptions?.unitType, consultationOptions?.defaultType])

  // Reset sent state when opening
  useEffect(() => {
    if (isConsultationOpen) {
      setSent(false)
      setErrors({})
    }
  }, [isConsultationOpen])

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isConsultationOpen) {
      const orig = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = orig
      }
    }
  }, [isConsultationOpen])

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

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeConsultation()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [closeConsultation])

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
          source: consultationOptions?.source || 'Popup Đăng Ký Tư Vấn Trực Tiếp (Lê Ngọc Long)',
        }),
      })

      const data = await res.json()
      if (res.ok && data.success) {
        setSent(true)
      } else {
        setErrors({
          phone:
            data.error ||
            (locale === 'en'
              ? 'An error occurred while submitting, please try again'
              : 'Có lỗi xảy ra khi gửi thông tin, vui lòng thử lại'),
        })
      }
    } catch {
      setErrors({
        phone:
          locale === 'en'
            ? 'Server connection error, please try again later'
            : 'Lỗi kết nối máy chủ, vui lòng thử lại sau',
      })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <AnimatePresence>
      {isConsultationOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 md:p-6 bg-black/80 backdrop-blur-md"
          onClick={closeConsultation}
          role="dialog"
          aria-modal="true"
        >
          {/* Double-Bezel Shell */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className={`relative w-full max-w-xl max-h-[92dvh] overflow-y-auto rounded-[2rem] p-1.5 sm:p-2 shadow-2xl transition-all ${
              isDark
                ? 'bg-white/10 ring-1 ring-[#e6c887]/30 shadow-[0_25px_60px_rgba(0,0,0,0.85)]'
                : 'bg-black/5 ring-1 ring-black/10 shadow-2xl'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Inner Core Container */}
            <div
              className={`rounded-[calc(2rem-0.5rem)] p-6 sm:p-8 transition-colors ${
                isDark
                  ? 'bg-[#071d15] text-white border border-[#e6c887]/20'
                  : 'bg-card text-foreground border border-border/80'
              }`}
            >
              {/* Top Bar: Eyebrow + Close Button */}
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-border/60 dark:border-white/10">
                <div>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-primary dark:text-[#e6c887]">
                    <Sparkles className="size-3.5" />
                    {consultationOptions?.title
                      ? 'BCONS CENTRAL PARK'
                      : isEn
                      ? 'DIRECT CONSULTATION'
                      : 'ĐĂNG KÝ TƯ VẤN TRỰC TIẾP'}
                  </span>
                  <h3 className="mt-1 font-serif text-xl sm:text-2xl font-bold uppercase tracking-tight text-foreground dark:text-white">
                    {consultationOptions?.title ||
                      (isEn ? 'Get Full Pricing & Floor Plans' : 'Nhận Bảng Giá & Tư Vấn Căn Hộ')}
                  </h3>
                  <p className="mt-1 font-sans text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {consultationOptions?.subtitle ||
                      (isEn
                        ? 'Leave your phone number, Developer Sales Director Le Ngoc Long will contact you in 15 minutes.'
                        : 'Giám đốc Kinh doanh Bcons PS Land Lê Ngọc Long sẽ liên hệ tư vấn chuyên sâu trong vòng 15 phút.')}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={closeConsultation}
                  aria-label={isEn ? 'Close' : 'Đóng'}
                  className="size-9 rounded-full border border-border/80 dark:border-white/15 bg-background/80 hover:bg-secondary dark:hover:bg-white/10 text-foreground flex items-center justify-center transition-transform hover:scale-105 active:scale-95 cursor-pointer shrink-0"
                >
                  <X className="size-4" />
                </button>
              </div>

              {/* Form or Success State */}
              {sent ? (
                <div className="py-8 text-center flex flex-col items-center">
                  <div className="size-16 rounded-full bg-emerald-500/20 text-emerald-500 border border-emerald-500/30 flex items-center justify-center mb-4">
                    <Check className="size-8" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-foreground dark:text-white">
                    {isEn ? 'Registration Successful!' : 'Đăng Ký Thành Công!'}
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-muted-foreground max-w-sm leading-relaxed">
                    {isEn
                      ? 'Thank you! Specialist Le Ngoc Long has received your request and will call you shortly.'
                      : 'Cảm ơn bạn! Chuyên viên Lê Ngọc Long đã nhận được thông tin và sẽ liên hệ hỗ trợ bạn ngay qua SĐT/Zalo.'}
                  </p>
                  <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href="tel:0376671776"
                      className="px-5 py-2.5 rounded-full text-xs font-bold uppercase bg-primary text-white dark:bg-[#e6c887] dark:text-[#072018] shadow-md hover:opacity-90 transition-opacity"
                    >
                      {isEn ? 'Call Hotline: 0376 671 776' : 'Gọi Hotline: 0376 671 776'}
                    </a>
                    <button
                      type="button"
                      onClick={closeConsultation}
                      className="px-5 py-2.5 rounded-full text-xs font-bold uppercase bg-secondary text-foreground hover:bg-secondary/80 transition-colors"
                    >
                      {isEn ? 'Close Window' : 'Đóng cửa sổ'}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-4" noValidate>
                  {/* Họ và tên */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="modal-contact-name"
                      className={`text-xs font-bold tracking-[0.16em] uppercase transition-colors ${
                        isDark ? 'text-[#e6c887]' : 'text-slate-600'
                      }`}
                    >
                      {t.contact.name} <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="modal-contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleNameChange}
                      placeholder={t.contact.namePlaceholder}
                      className={`h-11 sm:h-12 rounded-xl px-4 text-sm font-medium transition-all duration-200 outline-none ${
                        isDark
                          ? 'border border-white/20 bg-white/10 text-white placeholder:text-white/40 focus:border-[#e6c887] focus:bg-white/15 focus:ring-2 focus:ring-[#e6c887]/25'
                          : 'border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:border-emerald-600 focus:bg-white focus:ring-2 focus:ring-emerald-600/20'
                      } ${errors.name ? 'border-red-500 ring-2 ring-red-500/20' : ''}`}
                    />
                    {errors.name && (
                      <p className="text-xs font-medium text-red-400 mt-0.5">{errors.name}</p>
                    )}
                  </div>

                  {/* Số điện thoại */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="modal-contact-phone"
                      className={`text-xs font-bold tracking-[0.16em] uppercase transition-colors ${
                        isDark ? 'text-[#e6c887]' : 'text-slate-600'
                      }`}
                    >
                      {t.contact.phone} <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="modal-contact-phone"
                      type="tel"
                      required
                      maxLength={12}
                      value={formData.phone}
                      onKeyDown={handlePhoneKeyDown}
                      onChange={handlePhoneChange}
                      placeholder={t.contact.phonePlaceholder}
                      className={`h-11 sm:h-12 rounded-xl px-4 text-sm font-medium transition-all duration-200 outline-none ${
                        isDark
                          ? 'border border-white/20 bg-white/10 text-white placeholder:text-white/40 focus:border-[#e6c887] focus:bg-white/15 focus:ring-2 focus:ring-[#e6c887]/25'
                          : 'border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:border-emerald-600 focus:bg-white focus:ring-2 focus:ring-emerald-600/20'
                      } ${errors.phone ? 'border-red-500 ring-2 ring-red-500/20' : ''}`}
                    />
                    {errors.phone && (
                      <p className="text-xs font-medium text-red-400 mt-0.5">{errors.phone}</p>
                    )}
                  </div>

                  {/* Custom Luxury Dropdown: Loại căn quan tâm */}
                  <div className="flex flex-col gap-1.5 relative" ref={dropdownRef}>
                    <label
                      id="modal-unit-select-label"
                      className={`text-xs font-bold tracking-[0.16em] uppercase transition-colors ${
                        isDark ? 'text-[#e6c887]' : 'text-slate-600'
                      }`}
                    >
                      {t.contact.type} <span className="text-red-400">*</span>
                    </label>

                    <button
                      type="button"
                      aria-haspopup="listbox"
                      aria-expanded={isDropdownOpen}
                      aria-labelledby="modal-unit-select-label"
                      onClick={() => setIsDropdownOpen((prev) => !prev)}
                      className={`h-11 sm:h-12 w-full rounded-xl px-4 text-left text-sm font-semibold flex items-center justify-between transition-all duration-200 cursor-pointer outline-none ${
                        isDark
                          ? 'border border-white/20 bg-white/10 text-white hover:bg-white/15'
                          : 'border border-slate-200 bg-slate-50 text-slate-900 hover:bg-slate-100'
                      } ${
                        isDropdownOpen
                          ? isDark
                            ? 'ring-2 ring-[#e6c887] border-[#e6c887]'
                            : 'ring-2 ring-emerald-500 border-emerald-500'
                          : ''
                      }`}
                    >
                      <div className="flex items-center gap-3 overflow-hidden">
                        <selectedUnitObj.icon
                          className={`size-4 shrink-0 ${
                            isDark ? 'text-[#e6c887]' : 'text-emerald-500'
                          }`}
                        />
                        <span className="truncate">{selectedUnitObj.label}</span>
                        <span
                          className={`text-xs hidden sm:inline truncate ${
                            isDark ? 'text-white/60' : 'text-slate-500'
                          }`}
                        >
                          ({selectedUnitObj.desc})
                        </span>
                      </div>
                      <ChevronDown
                        className={`size-4 shrink-0 transition-transform duration-300 ${
                          isDropdownOpen
                            ? isDark
                              ? 'rotate-180 text-[#e6c887]'
                              : 'rotate-180 text-emerald-400'
                            : isDark
                            ? 'text-[#e6c887]/70'
                            : 'text-slate-500'
                        }`}
                      />
                    </button>

                    {/* Popover */}
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
                                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                                  isSelected
                                    ? isDark
                                      ? 'bg-[#e6c887] text-[#072018] font-bold'
                                      : 'bg-emerald-600 text-white font-bold'
                                    : isDark
                                    ? 'text-white/85 hover:bg-white/10 hover:text-white'
                                    : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                                }`}
                              >
                                <div className="flex items-center gap-2.5">
                                  <IconComponent className="size-4 shrink-0" />
                                  <span>{opt.label}</span>
                                </div>
                                <span className="text-[11px] opacity-75">{opt.desc}</span>
                              </button>
                            )
                          })}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Lời nhắn / Ghi chú */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="modal-contact-note"
                      className={`text-xs font-bold tracking-[0.16em] uppercase transition-colors ${
                        isDark ? 'text-[#e6c887]' : 'text-slate-600'
                      }`}
                    >
                      {t.contact.note}
                    </label>
                    <textarea
                      id="modal-contact-note"
                      rows={2}
                      value={formData.note}
                      onChange={handleNoteChange}
                      placeholder={t.contact.notePlaceholder}
                      className={`rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200 outline-none resize-none ${
                        isDark
                          ? 'border border-white/20 bg-white/10 text-white placeholder:text-white/40 focus:border-[#e6c887] focus:bg-white/15 focus:ring-2 focus:ring-[#e6c887]/25'
                          : 'border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:border-emerald-600 focus:bg-white focus:ring-2 focus:ring-emerald-600/20'
                      } ${errors.note ? 'border-red-500 ring-2 ring-red-500/20' : ''}`}
                    />
                  </div>

                  {/* Hotline Note */}
                  <div className="flex items-center justify-between text-xs py-1 border-t border-border/40 dark:border-white/10 pt-3">
                    <span className="text-muted-foreground flex items-center gap-1.5">
                      <ShieldCheck className="size-3.5 text-emerald-500" />
                      {isEn ? '100% Privacy Guaranteed' : 'Cam kết bảo mật 100%'}
                    </span>
                    <a
                      href="tel:0376671776"
                      className="font-bold text-primary dark:text-[#e6c887] hover:underline"
                    >
                      Hotline: 0376 671 776
                    </a>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className={`mt-1 flex h-12 w-full items-center justify-center gap-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-lg hover:brightness-105 active:scale-[0.99] disabled:opacity-50 ${
                      isDark
                        ? 'bg-gradient-to-r from-[#e6c887] via-[#f7e4b5] to-[#e6c887] text-[#072018] shadow-[#e6c887]/20'
                        : 'bg-primary text-white shadow-emerald-700/20 hover:bg-primary/90'
                    }`}
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="size-4 animate-spin" />
                        <span>{isEn ? 'Submitting...' : 'Đang gửi thông tin...'}</span>
                      </>
                    ) : (
                      <>
                        <Send className="size-4" />
                        <span>{isEn ? 'SUBMIT REGISTRATION' : 'GỬI ĐĂNG KÝ TƯ VẤN'}</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
