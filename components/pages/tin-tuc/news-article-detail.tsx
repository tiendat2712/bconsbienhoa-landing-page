'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Calendar,
  Clock,
  User,
  Share2,
  Copy,
  Check,
  ChevronRight,
  Home,
  ArrowLeft,
  ArrowRight,
  ListOrdered,
  FileText,
  PhoneCall,
  MessageSquare,
  Sparkles,
  ExternalLink,
  X,
  Maximize2,
  Building,
  MapPin,
  ShieldCheck,
} from 'lucide-react'
import { NewsArticle, getRelatedArticles } from '@/data/news-articles'
import { useSitePreferences } from '@/components/layout/site-preferences'
import { Reveal } from '@/components/layout/reveal'
import { DirectorConsultation } from '@/components/shared/director-consultation'

interface Props {
  article: NewsArticle
}

export function NewsArticleDetail({ article }: Props) {
  const { theme, openConsultation } = useSitePreferences()
  const isDark = theme === 'dark'

  const [activeTocId, setActiveTocId] = useState<string>('')
  const [copied, setCopied] = useState(false)
  const [lightboxImg, setLightboxImg] = useState<string | null>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  const relatedArticles = getRelatedArticles(article.slug, 3)

  // Track scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100
        setScrollProgress(Math.min(100, Math.max(0, progress)))
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Track active TOC heading using IntersectionObserver
  useEffect(() => {
    if (!article.toc || article.toc.length === 0) return

    const headingElements = article.toc
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null)

    if (headingElements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTocId(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-100px 0% -60% 0%',
        threshold: 0,
      }
    )

    headingElements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [article.toc])

  // Attach lightbox click listener to images in article
  useEffect(() => {
    const handleImgClick = (e: Event) => {
      const target = e.target as HTMLElement | null
      if (target && target.tagName === 'IMG' && target.closest('.article-prose')) {
        const imgSrc = (target as HTMLImageElement).src
        if (imgSrc) {
          setLightboxImg(imgSrc)
        }
      }
    }

    const container = document.querySelector('.article-prose')
    if (container) {
      container.addEventListener('click', handleImgClick)
    }

    return () => {
      if (container) {
        container.removeEventListener('click', handleImgClick)
      }
    }
  }, [article.content])

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    }
  }

  return (
    <article className="relative min-h-screen bg-background transition-colors duration-300">
      {/* 1. TOP READING PROGRESS BAR */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-border/40">
        <div
          className="h-full bg-gradient-to-r from-primary via-[#e6c887] to-primary transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* 2. LUXURY HERO BANNER */}
      <section className="relative isolate overflow-hidden bg-[#072018] pt-28 pb-16 lg:pt-36 lg:pb-20 text-white">
        {/* Subtle Luxury Pattern & Vignette */}
        <div className="absolute inset-0 -z-10 opacity-20 bg-[radial-gradient(#e6c887_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#072018]/60 via-[#072018]/90 to-[#072018]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs sm:text-sm text-white/70">
            <Link href="/" className="inline-flex items-center gap-1 hover:text-[#e6c887] transition-colors">
              <Home className="size-3.5" />
              <span>Trang chủ</span>
            </Link>
            <ChevronRight className="size-3 text-white/40" />
            <Link href="/tin-tuc" className="hover:text-[#e6c887] transition-colors">
              Tin tức
            </Link>
            <ChevronRight className="size-3 text-white/40" />
            <span className="text-[#e6c887] font-medium">{article.categoryLabel}</span>
          </nav>

          {/* Eyebrow & Badges */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#e6c887] text-[#072018] shadow-sm">
              {article.categoryLabel}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-white/80 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
              <Calendar className="size-3.5 text-[#e6c887]" />
              {article.date}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-white/80 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
              <Clock className="size-3.5 text-[#e6c887]" />
              {article.readTime}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-white/80 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
              <User className="size-3.5 text-[#e6c887]" />
              {article.author}
            </span>
          </div>

          {/* Article Main H1 */}
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-[1.2] tracking-tight text-balance max-w-5xl">
            {article.title}
          </h1>

          {/* Lead Summary Excerpt */}
          {article.description && (
            <div className="mt-6 max-w-4xl p-5 rounded-2xl bg-white/[0.06] border-l-4 border-[#e6c887] backdrop-blur-md">
              <p className="text-base sm:text-lg text-white/90 leading-relaxed font-sans font-medium">
                {article.description}
              </p>
            </div>
          )}

          {/* Quick Action Share Row */}
          <div className="mt-6 flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
            <span className="text-xs text-white/60">Chia sẻ bài viết:</span>
            <button
              onClick={handleCopyLink}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="size-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Đã sao chép link!</span>
                </>
              ) : (
                <>
                  <Copy className="size-3.5 text-[#e6c887]" />
                  <span>Sao chép link</span>
                </>
              )}
            </button>

            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : ''}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/10 hover:bg-[#1877f2]/80 text-white transition-all"
            >
              <Share2 className="size-3.5" />
              <span>Facebook</span>
            </a>

            <a
              href="https://zalo.me/0376671776"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/10 hover:bg-[#0068ff]/80 text-white transition-all ml-auto"
            >
              <MessageSquare className="size-3.5 text-[#e6c887]" />
              <span>Tư vấn qua Zalo</span>
            </a>
          </div>
        </div>
      </section>

      {/* 3. MAIN ARTICLE LAYOUT (8 COLS ARTICLE + 4 COLS STICKY SIDEBAR) */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* LEFT: MAIN ARTICLE PROSE (8 COLS) */}
          <main className="lg:col-span-8 min-w-0">
            {/* Featured Hero Image */}
            {article.thumbnail && (
              <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden border border-border/80 dark:border-white/10 shadow-lg bg-muted mb-8 group cursor-pointer"
                onClick={() => setLightboxImg(article.thumbnail)}
              >
                <img
                  src={article.thumbnail}
                  alt={article.title}
                  className="size-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-end p-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-black/70 text-white text-xs font-medium backdrop-blur-md">
                    <Maximize2 className="size-3.5" />
                    Xem ảnh lớn
                  </span>
                </div>
              </div>
            )}

            {/* Mobile Table of Contents Quick Jump Box */}
            {article.toc && article.toc.length > 0 && (
              <div className="lg:hidden mb-8 p-5 rounded-2xl border border-border/80 dark:border-white/15 bg-secondary/30 dark:bg-card/70">
                <div className="flex items-center gap-2 font-serif font-bold text-foreground mb-3 text-base">
                  <ListOrdered className="size-4 text-primary dark:text-[#e6c887]" />
                  <span>Nội dung chính bài viết</span>
                </div>
                <nav className="space-y-1.5 max-h-60 overflow-y-auto pr-2 text-sm">
                  {article.toc.map((item, idx) => (
                    <a
                      key={item.id || idx}
                      href={`#${item.id}`}
                      className={`block py-1 hover:text-primary dark:hover:text-[#e6c887] transition-colors leading-snug ${
                        item.level === 3 ? 'pl-4 text-xs text-muted-foreground' : 'font-medium text-foreground'
                      }`}
                    >
                      {item.text}
                    </a>
                  ))}
                </nav>
              </div>
            )}

            {/* Full HTML Article Prose */}
            <div
              className="article-prose"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* End of Article Signature & Author Box */}
            <div className="mt-12 p-6 sm:p-8 rounded-3xl border border-border/80 dark:border-white/15 bg-secondary/30 dark:bg-[#0c241b] flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div className="size-16 rounded-2xl overflow-hidden bg-primary/10 dark:bg-[#072018] shrink-0 border border-primary/20 dark:border-[#e6c887]/30 flex items-center justify-center text-primary dark:text-[#e6c887] font-serif font-bold text-2xl">
                BC
              </div>
              <div className="flex-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-primary dark:text-[#e6c887]">
                  Ban Biên Tập & Phân Tích Bất Động Sản
                </span>
                <h3 className="font-serif text-lg font-bold text-foreground mt-0.5">
                  Bcons Central Park Tam Hiệp
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Các thông tin, bảng giá và phân tích chuyên sâu được tổng hợp từ hồ sơ pháp lý, sổ tay thiết kế và bảng vật liệu tiêu chuẩn của Tập đoàn Bcons.
                </p>
              </div>
              <a
                href="tel:0376671776"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-bold text-xs bg-primary text-white dark:bg-[#e6c887] dark:text-[#072018] shrink-0 inline-flex items-center justify-center gap-2 shadow-md hover:opacity-90 transition-opacity"
              >
                <PhoneCall className="size-3.5" />
                <span>0376 671 776</span>
              </a>
            </div>

            {/* Bottom Navigation: Back to News Listing */}
            <div className="mt-8 pt-6 border-t border-border/60 dark:border-white/10 flex items-center justify-between">
              <Link
                href="/tin-tuc"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary dark:text-[#e6c887] hover:underline"
              >
                <ArrowLeft className="size-4" />
                <span>Quay lại trang tin tức</span>
              </Link>

              <button
                onClick={handleCopyLink}
                type="button"
                className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                <Copy className="size-3.5" />
                <span>{copied ? 'Đã sao chép link!' : 'Chia sẻ bài này'}</span>
              </button>
            </div>
          </main>

          {/* RIGHT: STICKY SIDEBAR (4 COLS) */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            {/* SIDEBAR WIDGET 1: TABLE OF CONTENTS (DESKTOP) */}
            {article.toc && article.toc.length > 0 && (
              <div className="hidden lg:block p-6 rounded-3xl border border-border/80 dark:border-white/10 bg-card shadow-sm">
                <div className="flex items-center gap-2 font-serif font-bold text-foreground mb-4 pb-3 border-b border-border/60 dark:border-white/10 text-base">
                  <ListOrdered className="size-4 text-primary dark:text-[#e6c887]" />
                  <span>Mục lục bài viết</span>
                </div>
                <nav className="space-y-1.5 max-h-[380px] overflow-y-auto pr-2 text-xs">
                  {article.toc.map((item, idx) => {
                    const isActive = activeTocId === item.id
                    return (
                      <a
                        key={item.id || idx}
                        href={`#${item.id}`}
                        className={`block py-1.5 px-2.5 rounded-lg transition-all leading-snug ${
                          isActive
                            ? 'bg-primary/10 text-primary dark:bg-[#e6c887]/15 dark:text-[#e6c887] font-bold translate-x-1'
                            : 'text-muted-foreground hover:text-foreground hover:bg-muted/40'
                        } ${item.level === 3 ? 'ml-3 text-[11px]' : 'font-medium'}`}
                      >
                        {item.text}
                      </a>
                    )
                  })}
                </nav>
              </div>
            )}

            {/* SIDEBAR WIDGET 2: DIRECT CONSULTATION CTA */}
            <div className="p-6 rounded-3xl border border-primary/20 dark:border-[#e6c887]/30 bg-gradient-to-br from-card via-card to-primary/5 dark:from-[#0c241b] dark:to-[#071a14] shadow-lg relative overflow-hidden">
              <div className="absolute -top-12 -right-12 size-36 rounded-full bg-[#e6c887]/15 dark:bg-[#e6c887]/10 blur-2xl pointer-events-none" />
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary dark:bg-[#e6c887]/15 dark:text-[#e6c887] border border-primary/20 dark:border-[#e6c887]/30">
                <Sparkles className="size-3" />
                TƯ VẤN CHUYÊN VIÊN 1:1
              </span>
              <h3 className="font-serif text-lg font-bold text-foreground mt-2.5 mb-1.5">
                Nhận Bảng Giá & Phân Tích
              </h3>
              <p className="text-xs text-muted-foreground mb-5 leading-relaxed">
                Chuyên viên <strong className="text-foreground dark:text-[#e6c887]">Lê Ngọc Long</strong> sẽ hỗ trợ gửi file PDF bảng giá chi tiết, tiến độ thanh toán và tư vấn chọn căn đẹp trực tiếp.
              </p>

              <button
                type="button"
                onClick={() => openConsultation({ source: `Bài viết: ${article.title}` })}
                className="w-full py-3 px-4 rounded-xl font-bold text-xs bg-primary text-white hover:bg-primary/90 dark:bg-gradient-to-r dark:from-[#e6c887] dark:via-[#f7e4b5] dark:to-[#e6c887] dark:text-[#072018] shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer group/btn"
              >
                <span>Đăng ký nhận báo giá ngay</span>
                <ArrowRight className="size-3.5 transition-transform group-hover/btn:translate-x-1" />
              </button>

              <div className="mt-4 pt-3 border-t border-border/60 dark:border-white/10 flex items-center justify-between text-xs">
                <span className="text-muted-foreground flex items-center gap-1.5">
                  <PhoneCall className="size-3.5 text-primary dark:text-[#e6c887]" />
                  Hotline 24/7:
                </span>
                <a
                  href="tel:0376671776"
                  className="font-bold text-primary dark:text-[#e6c887] hover:underline"
                >
                  0376 671 776
                </a>
              </div>
            </div>

            {/* SIDEBAR WIDGET 3: PROJECT QUICK FACTS */}
            <div className="p-6 rounded-3xl border border-border/80 dark:border-white/10 bg-card shadow-sm space-y-3 text-xs">
              <h4 className="font-serif font-bold text-sm text-foreground pb-2 border-b border-border/60 dark:border-white/10">
                THÔNG TIN BCONS CENTRAL PARK
              </h4>
              <div className="flex items-start gap-2.5">
                <MapPin className="size-4 text-primary dark:text-[#e6c887] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-foreground">Vị trí:</span>
                  <p className="text-muted-foreground">236 Phan Trung, P. Tam Hiệp, TP. Biên Hòa</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Building className="size-4 text-primary dark:text-[#e6c887] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-foreground">Quy mô:</span>
                  <p className="text-muted-foreground">2 Tháp Orchid & Bamboo, 7.700m² công viên</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="size-4 text-primary dark:text-[#e6c887] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-foreground">Pháp lý:</span>
                  <p className="text-muted-foreground">Sổ hồng lâu dài, GPXD số 12/GPXD</p>
                </div>
              </div>
              <div className="pt-2">
                <Link
                  href="/mat-bang"
                  className="inline-flex items-center gap-1 font-bold text-primary dark:text-[#e6c887] hover:underline"
                >
                  Xem mặt bằng căn hộ &rarr;
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* 4. RELATED ARTICLES SECTION */}
      {relatedArticles.length > 0 && (
        <section className="bg-secondary/30 dark:bg-[#071712] py-16 border-t border-border/60 dark:border-white/10 transition-colors">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
                <div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary dark:bg-[#e6c887]/15 dark:text-[#e6c887] border border-primary/20 dark:border-[#e6c887]/30">
                    BÀI VIẾT CÙNG CHUYÊN MỤC
                  </span>
                  <h2 className="mt-3 font-serif text-2xl sm:text-3xl font-bold text-foreground">
                    Khám Phá Thêm Thông Tin
                  </h2>
                </div>
                <Link
                  href="/tin-tuc"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary dark:text-[#e6c887] hover:underline"
                >
                  <span>Xem tất cả bài viết</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedArticles.map((item, idx) => (
                <Reveal key={item.slug} delay={idx * 0.08}>
                  <Link
                    href={`/tin-tuc/${item.slug}`}
                    className="group flex flex-col h-full rounded-3xl border border-border/80 dark:border-white/10 bg-card overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/40 dark:hover:border-[#e6c887]/40 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="size-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-2.5 left-2.5">
                        <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-[#e6c887] text-[#072018] shadow-md">
                          {item.categoryLabel}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-5">
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-2">
                        <Calendar className="size-3 text-primary dark:text-[#e6c887]" />
                        <span>{item.date}</span>
                      </div>

                      <h3 className="font-serif text-base sm:text-lg font-bold text-foreground group-hover:text-primary dark:group-hover:text-[#e6c887] transition-colors line-clamp-2 leading-snug">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>

                      <div className="mt-auto pt-4 border-t border-border/60 dark:border-white/10 flex items-center justify-between text-xs font-bold text-primary dark:text-[#e6c887]">
                        <span>Đọc tiếp</span>
                        <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. DIRECTOR CONSULTATION CTA BLOCK */}
      <DirectorConsultation id="tu-van" />

      {/* 6. IMAGE LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setLightboxImg(null)}
          >
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute top-4 right-4 size-10 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center cursor-pointer transition-colors"
              aria-label="Đóng"
            >
              <X className="size-6" />
            </button>
            <img
              src={lightboxImg}
              alt="Phóng to"
              className="max-h-[90vh] max-w-[95vw] rounded-xl object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  )
}
