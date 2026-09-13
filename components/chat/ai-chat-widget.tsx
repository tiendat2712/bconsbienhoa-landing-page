'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import {
  X,
  Send,
  Sparkles,
  Bot,
  RotateCcw,
  CheckCircle2,
} from 'lucide-react'

interface Message {
  id: string
  role: 'user' | 'model'
  content: string
  timestamp: string
}

const QUICK_SUGGESTIONS = [
  'Bảng giá 2PN bao nhiêu?',
  'Chính sách thanh toán ra sao?',
  'Khi nào bàn giao?',
]

const INITIAL_MESSAGE: Message = {
  id: 'init-1',
  role: 'model',
  content:
    'Chào anh/chị! Em là Trợ lý AI Bcons Tam Hiệp. Em có thể hỗ trợ anh/chị xem bảng giá gốc CĐT, chính sách vay 0% hoặc chọn căn tầng đẹp. Anh/chị đang quan tâm căn mấy phòng ngủ ạ?',
  timestamp: 'Vừa xong',
}

// Simple phone regex for client-side detection (user messages only)
const CLIENT_PHONE_REGEX = /(?:(?:\+84|84|0)(?:3|5|7|8|9)\d{8})/
function detectPhoneInText(text: string): string | null {
  const match = text.match(CLIENT_PHONE_REGEX)
  if (!match) return null
  let cleaned = match[0].replace(/[\s.-]/g, '')
  if (cleaned.startsWith('+84')) cleaned = '0' + cleaned.slice(3)
  else if (cleaned.startsWith('84') && cleaned.length > 9) cleaned = '0' + cleaned.slice(2)
  if (/^(03|05|07|08|09)\d{8}$/.test(cleaned)) return cleaned
  return null
}

export function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [detectedPhone, setDetectedPhone] = useState<string | null>(null)
  const [leadSent, setLeadSent] = useState(false)
  const [showTooltip, setShowTooltip] = useState(true)

  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const debounceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Refs to access latest state in event listeners / timers
  const messagesRef = useRef(messages)
  const detectedPhoneRef = useRef(detectedPhone)
  const leadSentRef = useRef(leadSent)
  const sendingRef = useRef(false) // mutex lock to prevent concurrent sends

  useEffect(() => { messagesRef.current = messages }, [messages])
  useEffect(() => { detectedPhoneRef.current = detectedPhone }, [detectedPhone])
  useEffect(() => { leadSentRef.current = leadSent }, [leadSent])

  // ─── Restore session ───────────────────────────────────────────
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem('bcons_chat_history')
      if (saved) {
        const parsed = JSON.parse(saved)
        if (Array.isArray(parsed) && parsed.length > 0) {
          setMessages(parsed)
          // Scan only USER messages for phone
          const userText = parsed
            .filter((m: Message) => m.role === 'user')
            .map((m: Message) => m.content)
            .join(' ')
          const phone = detectPhoneInText(userText)
          if (phone) setDetectedPhone(phone)
        }
      }
      if (sessionStorage.getItem('bcons_lead_sent') === 'true') {
        setLeadSent(true)
      }
    } catch {}

    const timer = setTimeout(() => setShowTooltip(false), 8000)
    return () => clearTimeout(timer)
  }, [])

  // Save chat
  useEffect(() => {
    if (messages.length > 1) {
      try { sessionStorage.setItem('bcons_chat_history', JSON.stringify(messages)) } catch {}
    }
  }, [messages])

  // ─── Single send-lead function with mutex lock ─────────────────
  const dispatchLead = useCallback((useBeacon = false) => {
    const phone = detectedPhoneRef.current
    const msgs = messagesRef.current
    if (!phone || msgs.length < 2 || leadSentRef.current || sendingRef.current) return

    sendingRef.current = true // lock

    const payload = JSON.stringify({
      messages: msgs.map((m) => ({ role: m.role, content: m.content })),
      phone,
    })

    if (useBeacon && navigator.sendBeacon) {
      const blob = new Blob([payload], { type: 'application/json' })
      navigator.sendBeacon('/api/send-lead', blob)
    } else {
      fetch('/api/send-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: payload,
        keepalive: true,
      }).catch(() => {})
    }

    setLeadSent(true)
    leadSentRef.current = true
    try { sessionStorage.setItem('bcons_lead_sent', 'true') } catch {}
  }, [])

  // ─── Start / reset debounce timer (45s) ────────────────────────
  const startDebounceTimer = useCallback(() => {
    if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current)
    debounceTimerRef.current = setTimeout(() => dispatchLead(), 45000)
  }, [dispatchLead])

  // ─── Unload / visibility handlers (single send via beacon) ─────
  useEffect(() => {
    const handleExit = () => {
      if (detectedPhoneRef.current && !leadSentRef.current) {
        dispatchLead(true)
      }
    }

    const handleVisibility = () => {
      if (document.visibilityState === 'hidden') handleExit()
    }

    window.addEventListener('beforeunload', handleExit)
    document.addEventListener('visibilitychange', handleVisibility)
    return () => {
      window.removeEventListener('beforeunload', handleExit)
      document.removeEventListener('visibilitychange', handleVisibility)
    }
  }, [dispatchLead])

  // Auto-scroll
  useEffect(() => {
    if (isOpen) messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isLoading, isOpen])

  // Focus input
  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 200)
  }, [isOpen])

  // ─── Close chat → dispatch if phone detected ──────────────────
  const handleCloseChat = () => {
    setIsOpen(false)
    if (detectedPhone && !leadSent) dispatchLead()
  }

  // ─── Send message ─────────────────────────────────────────────
  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputValue).trim()
    if (!text || isLoading) return

    const now = new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
      timestamp: now,
    }

    const newMessages = [...messages, userMsg]
    setMessages(newMessages)
    setInputValue('')
    setIsLoading(true)

    // Check user text ONLY for phone
    const newPhone = detectPhoneInText(text)
    if (newPhone && !detectedPhone) {
      setDetectedPhone(newPhone)
      startDebounceTimer()
    } else if (detectedPhone && !leadSent) {
      // User keeps chatting after providing phone → reset timer
      startDebounceTimer()
    }

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({ role: m.role, content: m.content })),
        }),
      })

      const data = await res.json()

      // Only accept phone from API if it came from user messages
      if (data.validPhone && !detectedPhone) {
        setDetectedPhone(data.validPhone)
        startDebounceTimer()
      }

      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        content: data.reply || 'Dạ em đã ghi nhận thông tin của anh/chị. Giám đốc Sàn Lê Ngọc Long sẽ liên hệ lại ngay ạ!',
        timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
      }

      setMessages((prev) => [...prev, aiMsg])
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'model',
          content: 'Dạ hệ thống AI đang bận. Anh/chị gọi Hotline 0376 671 776 để được hỗ trợ nhanh nhất nhé!',
          timestamp: now,
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const handleResetChat = () => {
    if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current)
    sendingRef.current = false
    setMessages([INITIAL_MESSAGE])
    setDetectedPhone(null)
    setLeadSent(false)
    try {
      sessionStorage.removeItem('bcons_chat_history')
      sessionStorage.removeItem('bcons_lead_sent')
    } catch {}
  }

  // ─── RENDER ───────────────────────────────────────────────────
  return (
    <div className="fixed right-4 bottom-28 sm:bottom-28 z-50 flex flex-col items-end">
      {/* 1. Floating Trigger Button */}
      {!isOpen && (
        <div className="relative flex items-center">
          {showTooltip && (
            <div className="animate-bounce pointer-events-auto absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-2xl bg-[#072018] px-4 py-2 text-xs font-semibold text-white shadow-2xl border border-[#e6c887]/50 backdrop-blur-md flex items-center gap-2">
              <span className="text-[#e6c887] font-bold">💬 Chat AI:</span>
              <span>Bảng giá & trả góp 0%</span>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); setShowTooltip(false) }}
                className="ml-1 text-white/50 hover:text-white"
              >
                ✕
              </button>
            </div>
          )}

          <button
            type="button"
            onClick={() => { setIsOpen(true); setShowTooltip(false) }}
            aria-label="Mở khung chat AI tư vấn Bcons Tam Hiệp"
            className="group relative flex size-14 items-center justify-center rounded-full bg-gradient-to-tr from-[#072018] via-[#0e3b2e] to-[#072018] text-[#e6c887] shadow-[0_10px_30px_rgba(7,32,24,0.6)] border-2 border-[#e6c887] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_25px_rgba(230,200,135,0.5)] active:scale-95"
          >
            <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#e6c887] opacity-30 duration-1000" />
            <div className="relative flex items-center justify-center">
              <Sparkles className="size-6 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 text-[#e6c887]" />
              <span className="absolute -top-1 -right-1 flex size-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-3 rounded-full bg-emerald-500" />
              </span>
            </div>
          </button>
        </div>
      )}

      {/* 2. Chat Window */}
      {isOpen && (
        <div className="flex h-[560px] max-h-[82vh] w-[calc(100vw-32px)] sm:w-[400px] flex-col overflow-hidden rounded-[26px] border border-[#e6c887]/40 bg-[#071712] text-white shadow-[0_25px_70px_rgba(0,0,0,0.85)] backdrop-blur-2xl transition-all duration-300 animate-in fade-in zoom-in-95">
          
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 bg-gradient-to-r from-[#05140f] via-[#072018] to-[#05140f] px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="relative flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-[#e6c887] to-[#b8860b] text-[#072018] shadow-md">
                <Bot className="size-5" />
                <span className="absolute -bottom-0.5 -right-0.5 size-2.5 rounded-full bg-emerald-400 ring-2 ring-[#072018]" />
              </div>
              <div>
                <h3 className="font-serif text-sm font-bold tracking-tight text-white flex items-center gap-1.5">
                  Trợ Lý AI Bcons
                  <span className="rounded-md bg-[#e6c887]/20 px-1.5 py-0.5 text-[10px] font-bold text-[#e6c887]">24/7</span>
                </h3>
                <p className="text-[11px] text-emerald-300/80 font-medium">Đang trực tuyến • Phản hồi tức thì</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button type="button" onClick={handleResetChat} title="Làm mới" className="rounded-full p-1.5 text-white/60 hover:bg-white/10 hover:text-white transition-colors">
                <RotateCcw className="size-4" />
              </button>
              <button type="button" onClick={handleCloseChat} title="Thu nhỏ" className="rounded-full p-1.5 text-white/60 hover:bg-white/10 hover:text-white transition-colors">
                <X className="size-5" />
              </button>
            </div>
          </div>

          {/* Phone Detected Banner */}
          {detectedPhone && (
            <div className="flex items-center gap-2 bg-emerald-950/80 border-b border-emerald-500/30 px-4 py-2 text-[12px] font-semibold text-emerald-300 animate-in fade-in">
              <CheckCircle2 className="size-4 shrink-0 text-emerald-400" />
              <span>Đã ghi nhận SĐT! Giám đốc Sàn Lê Ngọc Long sẽ liên hệ lại qua Zalo trong 5-15 phút.</span>
            </div>
          )}

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 scrollbar-thin scrollbar-thumb-white/10">
            {messages.map((msg) => {
              const isUser = msg.role === 'user'
              return (
                <div key={msg.id} className={`flex items-end gap-2 ${isUser ? 'justify-end' : 'justify-start'}`}>
                  {!isUser && (
                    <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#0a3123] border border-[#e6c887]/30 text-[#e6c887]">
                      <Sparkles className="size-3.5" />
                    </div>
                  )}
                  <div className={`max-w-[82%] rounded-2xl px-4 py-3 text-xs sm:text-[13px] leading-relaxed shadow-md ${
                    isUser
                      ? 'rounded-br-xs bg-gradient-to-r from-[#e6c887] via-[#f7e4b5] to-[#e6c887] text-[#072018] font-medium'
                      : 'rounded-bl-xs bg-[#09291e] text-white/95 border border-white/10'
                  }`}>
                    <p className="whitespace-pre-wrap">{msg.content}</p>
                    <div className={`mt-1 text-[10px] ${isUser ? 'text-[#072018]/60 text-right' : 'text-white/40'}`}>
                      {msg.timestamp}
                    </div>
                  </div>
                </div>
              )
            })}

            {isLoading && (
              <div className="flex items-end gap-2 justify-start animate-in fade-in">
                <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#0a3123] border border-[#e6c887]/30 text-[#e6c887]">
                  <Sparkles className="size-3.5 animate-spin" />
                </div>
                <div className="rounded-2xl rounded-bl-xs bg-[#09291e] px-4 py-3 border border-white/10 flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-[#e6c887] animate-bounce" />
                  <span className="size-1.5 rounded-full bg-[#e6c887] animate-bounce [animation-delay:0.2s]" />
                  <span className="size-1.5 rounded-full bg-[#e6c887] animate-bounce [animation-delay:0.4s]" />
                  <span className="ml-1 text-[11px] text-[#e6c887]/80">AI đang soạn...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestions */}
          <div className="px-4 pb-2 pt-1">
            <p className="text-[10px] uppercase font-bold tracking-wider text-white/50 mb-1.5">Gợi ý nhanh:</p>
            <div className="flex flex-wrap gap-1.5">
              {QUICK_SUGGESTIONS.map((q) => (
                <button key={q} type="button" onClick={() => handleSendMessage(q)} className="rounded-full bg-white/5 hover:bg-white/15 border border-white/10 px-3 py-1 text-[11px] text-emerald-200 transition-all active:scale-95 text-left">
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="border-t border-white/10 bg-[#05140f] p-3">
            <form onSubmit={(e) => { e.preventDefault(); handleSendMessage() }} className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Nhập câu hỏi hoặc để lại SĐT..."
                className="flex-1 rounded-xl border border-white/15 bg-white/5 px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder:text-white/40 focus:border-[#e6c887] focus:outline-none focus:ring-1 focus:ring-[#e6c887] transition-all"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isLoading}
                aria-label="Gửi tin nhắn"
                className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-[#e6c887] to-[#d4a745] text-[#072018] shadow-md transition-all hover:opacity-90 disabled:opacity-40 active:scale-95"
              >
                <Send className="size-4" />
              </button>
            </form>
            <div className="mt-1.5 text-center text-[10px] text-white/40">
              Tư vấn chính thức Căn hộ Bcons Tam Hiệp • 0376 671 776
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
