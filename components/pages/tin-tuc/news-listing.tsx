'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search,
  ChevronRight,
  Home,
  Sparkles,
  ExternalLink,
  Calendar,
  Tag,
  ArrowRight,
  TrendingUp,
  Send,
  CheckCircle2,
  Bookmark,
  FileText,
} from 'lucide-react'
import { Reveal } from '@/components/layout/reveal'
import { useSitePreferences } from '@/components/layout/site-preferences'

// =============================================================================
// DATA MODELS
// =============================================================================

export interface ArticleItem {
  id: string
  titleVi: string
  titleEn: string
  date: string
  category: 'loai-can-ho' | 'nha-mau' | 'tai-chinh' | 'kinh-nghiem' | 'danh-gia'
  categoryLabelVi: string
  categoryLabelEn: string
  image: string
  descVi: string
  descEn: string
  href: string
  featured?: boolean
}

// 13 Full Articles (matching media_1788985102480.png, media_1788985111529.png, media_1788985121702.png)
const ALL_ARTICLES: ArticleItem[] = [
  {
    id: 'news-1',
    titleVi: 'Vật Tư Bàn Giao Bcons Central Park: Đọc Phụ Lục 02 Của Hợp Đồng Mua Bán',
    titleEn: 'Handover Materials at Bcons Central Park: Reading Annex 02 of the SPA',
    date: '05/09/2026',
    category: 'nha-mau',
    categoryLabelVi: 'Nhà mẫu',
    categoryLabelEn: 'Show Gallery',
    image: '/images/news/bcons-central-park-vat-tu-ban-giao.webp',
    descVi: 'Danh mục vật liệu và trang thiết bị bàn giao căn hộ: bố cục 8 trang, phân tích trang 1 và điều khoản thay thế thương hiệu "tương đương" cần đọc kỹ.',
    descEn: 'Apartment fixtures and materials list: 8-page breakdown, analyzing page 1 and critical clauses regarding "equivalent" brand substitutions.',
    href: '/tin-tuc/vat-tu-ban-giao-bcons-central-park',
  },
  {
    id: 'news-2',
    titleVi: 'Kinh Nghiệm Đi Xem Nhà Mẫu Căn Hộ: 12 Câu Hỏi Nên Hỏi Chuyên Viên',
    titleEn: 'Show Apartment Viewing Guide: 12 Key Questions for Property Advisors',
    date: '28/08/2026',
    category: 'nha-mau',
    categoryLabelVi: 'Nhà mẫu',
    categoryLabelEn: 'Show Gallery',
    image: '/images/news/bcons-central-park-nha-mau-tham-quan.webp',
    descVi: 'Chuẩn bị gì trước khi đi, hỏi gì tại chỗ và đối chiếu lại thế nào sau buổi xem — cách biến một buổi tham quan nhà mẫu thành dữ liệu để ra quyết định.',
    descEn: 'Pre-visit prep, on-site questions, and post-visit cross-checks — how to turn a show unit tour into objective decision-making data.',
    href: '/tin-tuc/kinh-nghiem-di-xem-nha-mau-can-ho',
  },
  {
    id: 'news-3',
    titleVi: 'Căn Hộ Studio Bcons Central Park 37 – 40 m²: Hợp Với Ai, Cân Nhắc Gì?',
    titleEn: 'Studio Apartment at Bcons Central Park (37–40 sqm): Who Is It For & What to Weigh?',
    date: '27/08/2026',
    category: 'loai-can-ho',
    categoryLabelVi: 'Loại căn hộ',
    categoryLabelEn: 'Unit Types',
    image: '/images/news/bcons-central-park-can-ho-studio.webp',
    descVi: 'Phân tích căn studio Bcons Tam Hiệp: diện tích thật, vốn vào ban đầu, đơn giá mỗi m², nhóm khách phù hợp và những điểm cần cân nhắc trước khi chốt.',
    descEn: 'Analysis of Bcons Tam Hiep studio: actual usable space, initial equity, price per sqm, target buyer personas, and key factors before locking.',
    href: '/tin-tuc/can-ho-studio-bcons-central-park',
  },
  {
    id: 'news-4',
    titleVi: 'Nhà Mẫu Và Căn Hộ Bàn Giao Khác Nhau Thế Nào? 7 Chi Tiết Dễ Nhầm',
    titleEn: 'Show Unit vs. Actual Handover: 7 Common Details Easily Overlooked',
    date: '26/08/2026',
    category: 'nha-mau',
    categoryLabelVi: 'Nhà mẫu',
    categoryLabelEn: 'Show Gallery',
    image: '/images/news/bcons-central-park-nha-mau-vs-ban-giao.webp',
    descVi: 'Nội thất rời, tường lược bớt, gương, chiều cao trần, hộp kỹ thuật — bảy điểm khiến căn hộ nhận bàn giao trông khác nhà mẫu, và cách xác minh từng điểm.',
    descEn: 'Loose furniture, omitted partition walls, mirrors, ceiling heights, technical ducts — 7 discrepancies and how to verify each.',
    href: '/tin-tuc/nha-mau-va-can-ho-ban-giao-khac-nhau-the-nao',
  },
  {
    id: 'news-5',
    titleVi: 'Căn Hộ 1 Phòng Ngủ Bcons Central Park 42 – 43 m²: Phân Tích Chi Tiết',
    titleEn: '1-Bedroom Apartment at Bcons Central Park (42–43 sqm): Comprehensive Analysis',
    date: '25/08/2026',
    category: 'loai-can-ho',
    categoryLabelVi: 'Loại căn hộ',
    categoryLabelEn: 'Unit Types',
    image: '/images/news/bcons-central-park-can-ho-1pn.webp',
    descVi: 'Căn 1 phòng ngủ Bcons Tam Hiệp: diện tích thông thuỷ thật của căn D6, chênh lệch so với studio, vốn vào ban đầu và nhóm khách phù hợp.',
    descEn: 'Bcons Tam Hiep 1-bedroom unit: net usable area of unit D6, difference from studio, initial equity, and target resident profile.',
    href: '/tin-tuc/can-ho-1-phong-ngu-bcons-central-park',
  },
  {
    id: 'news-6',
    titleVi: 'Diện Tích Thông Thuỷ Và Tim Tường Khác Nhau Thế Nào? Cách Kiểm Tra Tại Nhà Mẫu',
    titleEn: 'Carpet Area vs. Built-up Area: What is the Difference & How to Verify at Show Gallery?',
    date: '24/08/2026',
    category: 'kinh-nghiem',
    categoryLabelVi: 'Kinh nghiệm',
    categoryLabelEn: 'Buying Tips',
    image: '/images/news/bcons-central-park-dien-tich-thong-thuy.webp',
    descVi: 'Hai con số trên cùng một căn hộ chênh nhau 8 – 11%. Hiểu đúng tim tường, thông thuỷ và cách tính đơn giá mỗi m² trước khi so sánh giữa các căn.',
    descEn: 'The 8–11% variance on the same apartment: understanding built-up vs. carpet area and calculating price per sqm before comparing units.',
    href: '/tin-tuc/dien-tich-thong-thuy-va-tim-tuong-can-ho',
  },
  {
    id: 'news-7',
    titleVi: 'Căn Hộ 2 Phòng Ngủ Bcons Central Park 53 – 73 m²: Vì Sao Là Dòng Chủ Đạo?',
    titleEn: '2-Bedroom Apartment at Bcons Central Park (53–73 sqm): Why is it the Core Product?',
    date: '23/08/2026',
    category: 'loai-can-ho',
    categoryLabelVi: 'Loại căn hộ',
    categoryLabelEn: 'Unit Types',
    image: '/images/news/bcons-central-park-can-ho-2pn.webp',
    descVi: 'Biên độ 20 m² trong cùng một tên gọi: căn 2 phòng ngủ Bcons Tam Hiệp thực chất là hai nhóm sản phẩm khác nhau. Phân tích diện tích, giá và cách chọn.',
    descEn: 'A 20 sqm spread under one name: Bcons Tam Hiep 2-bedroom units are two distinct product segments. Analyzing area, pricing, and selection criteria.',
    href: '/tin-tuc/can-ho-2-phong-ngu-bcons-central-park',
  },
  {
    id: 'news-8',
    titleVi: 'Chi Phí Hoàn Thiện Nội Thất Căn Hộ Sau Bàn Giao: Dự Trù Bao Nhiêu Là Đủ?',
    titleEn: 'Post-Handover Interior Fit-Out Costs: How Much Should You Budget?',
    date: '22/08/2026',
    category: 'tai-chinh',
    categoryLabelVi: 'Tài chính',
    categoryLabelEn: 'Finance',
    image: '/images/news/bcons-central-park-chi-phi-noi-that.webp',
    descVi: 'Khoản chi bị bỏ quên nhiều nhất khi mua căn hộ. Ba mức ngân sách nội thất, dự trù theo từng loại căn và các khoản phí phát sinh khi nhận nhà.',
    descEn: 'The most neglected expense when buying a home. Three fit-out budget tiers, estimates by unit type, and unexpected handover costs.',
    href: '/tin-tuc/chi-phi-hoan-thien-noi-that-can-ho-sau-ban-giao',
  },
  {
    id: 'news-9',
    titleVi: 'Căn Hộ 3 Phòng Ngủ Bcons Central Park 87 – 88 m²: Có Đáng 4,3 Tỷ?',
    titleEn: '3-Bedroom Apartment at Bcons Central Park (87–88 sqm): Is It Worth 4.3 Billion VND?',
    date: '21/08/2026',
    category: 'loai-can-ho',
    categoryLabelVi: 'Loại căn hộ',
    categoryLabelEn: 'Unit Types',
    image: '/images/news/bcons-central-park-can-ho-3pn.webp',
    descVi: 'Căn 3 phòng ngủ Bcons Tam Hiệp: diện tích thật, bước nhảy giá 600 triệu so với căn 2 phòng ngủ, nhóm khách phù hợp và những gì cần kiểm tra trước khi chốt.',
    descEn: 'Bcons Tam Hiep 3-bedroom corner unit: actual layout, the 600-million price leap over 2-bedroom, target buyers, and key checks.',
    href: '/tin-tuc/can-ho-3-phong-ngu-bcons-central-park',
  },
  {
    id: 'news-10',
    titleVi: 'Đánh Giá Chi Tiết Dự Án Bcons Central Park Phan Trung, Tam Hiệp, Đồng Nai',
    titleEn: 'Comprehensive Review: Bcons Central Park Phan Trung, Tam Hiep, Dong Nai',
    date: '19/08/2026',
    category: 'danh-gia',
    categoryLabelVi: 'Đánh giá',
    categoryLabelEn: 'Project Reviews',
    image: '/images/news/bcons-central-park-tam-hiep-phoi-canh.webp',
    descVi: 'Vị trí, pháp lý, thiết kế, tiện ích, giá bán và tiến độ xây dựng — phân tích toàn diện dự án Bcons Central Park trước khi quyết định.',
    descEn: 'Location, legal approvals, architecture, amenities, pricing, and construction progress — in-depth analysis of Bcons Central Park.',
    href: '/tin-tuc/danh-gia-du-an-bcons-central-park-tam-hiep',
    featured: true,
  },
  {
    id: 'news-11',
    titleVi: 'Kinh Nghiệm Mua Căn Hộ Hình Thành Trong Tương Lai: 7 Điều Cần Kiểm Tra',
    titleEn: 'Buying Off-Plan Apartments: 7 Essential Legal Checks Before Depositing',
    date: '10/08/2026',
    category: 'kinh-nghiem',
    categoryLabelVi: 'Kinh nghiệm',
    categoryLabelEn: 'Buying Tips',
    image: '/images/news/bcons-central-park-checklist-phap-ly.webp',
    descVi: 'Từ giấy phép xây dựng, bảo lãnh ngân hàng đến hợp đồng mua bán — checklist pháp lý giúp bạn tránh rủi ro khi mua căn hộ chưa bàn giao.',
    descEn: 'From construction permits to bank guarantees and standard sales contracts — a due diligence checklist to mitigate pre-handover risks.',
    href: '/tin-tuc/kinh-nghiem-mua-can-ho-hinh-thanh-trong-tuong-lai',
    featured: true,
  },
  {
    id: 'news-12',
    titleVi: 'So Sánh Vị Trí Tam Hiệp Với Các Khu Vực Lân Cận Tại Biên Hòa',
    titleEn: 'Comparing Tam Hiep Location With Surrounding Bien Hoa Submarkets',
    date: '05/08/2026',
    category: 'danh-gia',
    categoryLabelVi: 'Đánh giá',
    categoryLabelEn: 'Project Reviews',
    image: '/images/news/bcons-central-park-so-sanh-khu-vuc.webp',
    descVi: 'Tam Hiệp, Trảng Dài hay Long Bình — khu vực nào phù hợp với nhu cầu an cư và đầu tư của bạn? Góc nhìn khách quan về tiện ích, giá và tiềm năng.',
    descEn: 'Tam Hiep, Trang Dai, or Long Binh — which area aligns best with living and investment goals? Objective analysis of amenities and appreciation.',
    href: '/tin-tuc/so-sanh-vi-tri-tam-hiep-va-cac-khu-vuc-lan-can-bien-hoa',
    featured: true,
  },
  {
    id: 'news-13',
    titleVi: 'Hướng Dẫn Tính Toán Tài Chính Mua Căn Hộ: Vay Bao Nhiêu Là Hợp Lý?',
    titleEn: 'Apartment Mortgage Financial Planning: How Much Leverage Is Prudent?',
    date: '29/07/2026',
    category: 'tai-chinh',
    categoryLabelVi: 'Tài chính',
    categoryLabelEn: 'Finance',
    image: '/images/news/bcons-central-park-tinh-toan-tai-chinh.webp',
    descVi: 'Cách xác định vốn tự có, tỷ lệ vay an toàn theo thu nhập và những khoản chi phí dễ bị bỏ quên khi lập kế hoạch mua nhà trả góp.',
    descEn: 'How to calculate personal equity, safe debt-to-income borrowing ratios, and hidden holding costs when planning mortgage installments.',
    href: '/tin-tuc/huong-dan-tinh-toan-tai-chinh-mua-can-ho',
    featured: true,
  },
]

// Category Filter Definitions
const CATEGORIES = [
  { id: 'all', labelVi: 'Tất cả bài viết', labelEn: 'All Articles' },
  { id: 'loai-can-ho', labelVi: 'Loại căn hộ', labelEn: 'Unit Types' },
  { id: 'nha-mau', labelVi: 'Nhà mẫu', labelEn: 'Show Gallery' },
  { id: 'tai-chinh', labelVi: 'Tài chính', labelEn: 'Finance' },
  { id: 'kinh-nghiem', labelVi: 'Kinh nghiệm', labelEn: 'Buying Tips' },
  { id: 'danh-gia', labelVi: 'Đánh giá', labelEn: 'Project Reviews' },
]

// Tag Chips Definitions
const TAG_CHIPS = [
  { labelVi: 'Tổng quan', labelEn: 'Overview', href: '/#tong-quan' },
  { labelVi: 'Giá bán', labelEn: 'Pricing', href: '/gia-ban' },
  { labelVi: 'Vị trí', labelEn: 'Location', href: '/vi-tri' },
  { labelVi: 'Mặt bằng', labelEn: 'Floor Plans', href: '/mat-bang' },
  { labelVi: 'Nhà mẫu', labelEn: 'Show Gallery', href: '/mat-bang' },
  { labelVi: 'Tiện ích', labelEn: 'Amenities', href: '/tien-ich' },
  { labelVi: 'Pháp lý', labelEn: 'Legality', href: '/phap-ly' },
  { labelVi: 'Chủ đầu tư', labelEn: 'Developer', href: '/chu-dau-tu' },
  { labelVi: 'Tiến độ', labelEn: 'Progress', href: '/tien-do' },
  { labelVi: 'Thanh toán & vay', labelEn: 'Payment & Loans', href: '/gia-ban#lich-thanh-toan' },
  { labelVi: 'Có nên mua', labelEn: 'Buying Guide', href: '/tin-tuc' },
  { labelVi: 'Đầu tư cho thuê', labelEn: 'Rental Investment', href: '/tin-tuc' },
  { labelVi: 'So sánh', labelEn: 'Comparison', href: '/vi-tri' },
]

// =============================================================================
// MAIN COMPONENT
// =============================================================================

export function NewsListing() {
  const { theme, t, openConsultation, locale } = useSitePreferences()
  const isDark = theme === 'dark'
  const isEn = locale === 'en'

  // Filter & Search State
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [currentPage, setCurrentPage] = useState<number>(1)
  const itemsPerPage = 5

  // Filter logic
  const filteredArticles = useMemo(() => {
    return ALL_ARTICLES.filter((art) => {
      const matchCat = activeCategory === 'all' || art.category === activeCategory
      const q = searchQuery.toLowerCase().trim()
      const title = isEn ? art.titleEn : art.titleVi
      const desc = isEn ? art.descEn : art.descVi
      const catLabel = isEn ? art.categoryLabelEn : art.categoryLabelVi

      const matchQuery =
        !q ||
        title.toLowerCase().includes(q) ||
        desc.toLowerCase().includes(q) ||
        catLabel.toLowerCase().includes(q)
      return matchCat && matchQuery
    })
  }, [activeCategory, searchQuery, isEn])

  // Pagination
  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage) || 1
  const paginatedArticles = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage
    return filteredArticles.slice(start, start + itemsPerPage)
  }, [filteredArticles, currentPage, itemsPerPage])

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: ALL_ARTICLES.length }
    ALL_ARTICLES.forEach((a) => {
      counts[a.category] = (counts[a.category] || 0) + 1
    })
    return counts
  }, [])

  // Featured 4 articles for sidebar
  const featuredArticles = useMemo(() => {
    return ALL_ARTICLES.filter((a) => a.featured).slice(0, 4)
  }, [])

  return (
    <>
      {/* =====================================================================
          1. HERO BANNER — CINEMATIC LUXURY
      ===================================================================== */}
      <section className="relative min-h-[440px] lg:min-h-[500px] flex items-center justify-center overflow-hidden pt-28 pb-16 md:pt-36 lg:pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/bcons-central-park-tam-hiep-phoi-canh.webp"
            alt={isEn ? 'Bcons Central Park Tam Hiep news & updates' : 'Tin tức dự án Bcons Central Park Tam Hiệp'}
            className="size-full object-cover object-center scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#072018]/95 via-[#072018]/85 to-[#072018]/95 backdrop-blur-[2px]" />
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#e6c887]/25 via-emerald-500/10 to-transparent blur-3xl pointer-events-none" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-4 lg:px-8 w-full text-white">
          <nav aria-label={isEn ? 'Breadcrumb' : 'Đường dẫn'} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs text-white/80 mb-6 shadow-sm">
            <Link href="/" className="hover:text-[#e6c887] transition-colors flex items-center gap-1.5">
              <Home className="size-3.5 text-[#e6c887]" />
              {isEn ? 'Home' : 'Trang chủ'}
            </Link>
            <ChevronRight className="size-3.5 text-white/40" />
            <span className="text-[#e6c887] font-semibold">{isEn ? 'News & Insights' : 'Tin tức'}</span>
          </nav>

          <Reveal>
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e6c887]/15 border border-[#e6c887]/30 text-[#e6c887] text-xs font-bold tracking-widest uppercase">
                <Sparkles className="size-3" />
                BCONS CENTRAL PARK
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-balance text-white drop-shadow-md uppercase">
              {isEn ? 'NEWS & MARKET INSIGHTS' : 'TIN TỨC & CẬP NHẬT'}
            </h1>

            <p className="mt-3 font-serif text-xl sm:text-2xl italic text-[#e6c887] tracking-wide font-normal">
              {isEn ? 'Official Announcements – Homebuyer Guides – Market Analytics' : 'Thông tin chính thống – Cẩm nang chọn nhà – Phân tích thị trường'}
            </p>

            <p className="mt-5 max-w-3xl text-sm sm:text-base md:text-lg text-white/85 leading-relaxed font-sans">
              {isEn
                ? 'Stay updated with verified news on Bcons Central Park, Bien Hoa real estate dynamics, and exclusive launch incentives.'
                : 'Cập nhật thông tin mới nhất về dự án Bcons Central Park, thị trường bất động sản Biên Hòa và các chính sách bán hàng hấp dẫn.'}
            </p>
          </Reveal>
        </div>
      </section>

      {/* =====================================================================
          2. PRESERVED: BÁO CHÍ ĐƯA TIN VỀ TẬP ĐOÀN BCONS (3 PRESS ARTICLES)
             **USER MANDATE: TUYỆT ĐỐI KHÔNG XÓA 3 BÀI BÁO NÀY**
      ===================================================================== */}
      <section className="bg-secondary/30 dark:bg-[#071712] py-16 lg:py-20 border-b border-border/60 dark:border-white/10 transition-colors">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary dark:bg-[#e6c887]/15 dark:text-[#e6c887] border border-primary/20 dark:border-[#e6c887]/30">
                  {isEn ? 'OFFICIAL MAINSTREAM PRESS & MEDIA' : 'BÁO CHÍ & TRUYỀN THÔNG CHÍNH THỐNG'}
                </span>
                <h2 className="mt-3 font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                  {isEn ? 'Press Coverage of Bcons Group' : 'Báo Chí Đưa Tin Về Tập Đoàn Bcons'}
                </h2>
                <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-3xl leading-relaxed">
                  {isEn
                    ? 'Analytical features from VietnamFinance, CafeF, and Business & Integration on the 6,500 billion VND investment scale, ecosystem capacity, and sustainable development.'
                    : 'Các bài viết phân tích từ VietnamFinance, CafeF và Doanh Nghiệp & Hội Nhập về quy mô đầu tư 6.500 tỷ đồng, năng lực hệ sinh thái và uy tín phát triển bền vững.'}
                </p>
              </div>
            </div>
          </Reveal>

          {/* 3 Prestigious Press Cards */}
          <div className="grid gap-6 md:grid-cols-3">
            {t.news.posts.map((post, idx) => (
              <Reveal key={post.title} delay={idx * 0.08}>
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${post.title} - ${post.source}`}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border/80 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl dark:border-white/10 dark:bg-card/80 dark:hover:border-[#e6c887]/40"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 z-10">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold shadow-sm backdrop-blur-md transition-colors ${
                          isDark
                            ? 'bg-[#072018]/90 text-[#e6c887] border border-[#e6c887]/30'
                            : 'bg-white/95 text-primary border border-primary/20'
                        }`}
                      >
                        {post.source}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3 z-10">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium bg-black/60 text-white/90 backdrop-blur-md">
                        {post.date}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div>
                      <span
                        className={`text-[11px] font-bold tracking-wider uppercase transition-colors ${
                          isDark ? 'text-[#e6c887]' : 'text-[#b88728]'
                        }`}
                      >
                        {post.tag}
                      </span>
                      <h3 className="mt-2.5 font-serif text-lg sm:text-xl font-bold leading-snug text-balance text-foreground group-hover:text-primary dark:group-hover:text-[#e6c887] transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="mt-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        {post.summary}
                      </p>
                    </div>

                    <div className="mt-auto pt-6 flex items-center justify-between border-t border-border/60 dark:border-white/10">
                      <span
                        className={`inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold transition-colors duration-300 ${
                          isDark
                            ? 'text-[#e6c887] group-hover:text-[#f7e4b5]'
                            : 'text-primary group-hover:text-[#b88728]'
                        }`}
                      >
                        {isEn ? 'Read original article' : 'Đọc bài viết gốc'}
                        <ExternalLink className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                      <span className="text-[11px] text-muted-foreground/70 font-medium">
                        {post.source} ↗
                      </span>
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. FULL ARTICLES CATALOG & SIDEBAR
      ===================================================================== */}
      <section className="bg-background py-16 lg:py-20 transition-colors">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          {/* Top Filter Bar & Search Input */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-10">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.id
                const label = isEn ? cat.labelEn : cat.labelVi
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => {
                      setActiveCategory(cat.id)
                      setCurrentPage(1)
                    }}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-primary text-primary-foreground shadow-md dark:bg-[#e6c887] dark:text-[#072018]'
                        : 'bg-secondary/60 dark:bg-card/80 text-foreground/80 hover:bg-secondary dark:hover:bg-card border border-border/60 dark:border-white/10'
                    }`}
                  >
                    {label}
                  </button>
                )
              })}
            </div>

            {/* Search Input Box */}
            <div className="relative w-full lg:w-72">
              <input
                type="text"
                placeholder={isEn ? 'Search articles...' : 'Tìm kiếm bài viết...'}
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value)
                  setCurrentPage(1)
                }}
                className="w-full pl-4 pr-10 py-2 rounded-xl border border-border/80 dark:border-white/15 bg-background text-xs sm:text-sm text-foreground focus:outline-none focus:border-primary dark:focus:border-[#e6c887]"
              />
              <button
                type="button"
                aria-label={isEn ? 'Search' : 'Tìm kiếm'}
                className="absolute right-1 top-1 bottom-1 px-2.5 rounded-lg bg-primary/10 dark:bg-[#e6c887]/20 text-primary dark:text-[#e6c887] flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <Search className="size-3.5" />
              </button>
            </div>
          </div>

          {/* Main 2-Column Grid */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* LEFT: ARTICLES LIST (8 COLS) */}
            <div className="lg:col-span-8 space-y-6">
              {paginatedArticles.length === 0 ? (
                <div className="p-12 text-center rounded-3xl border border-border/80 dark:border-white/10 bg-card">
                  <p className="text-muted-foreground text-sm">
                    {isEn ? 'No articles match your search criteria.' : 'Không tìm thấy bài viết phù hợp với tiêu chí tìm kiếm.'}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveCategory('all')
                      setSearchQuery('')
                    }}
                    className="mt-4 px-4 py-2 rounded-full text-xs font-bold text-primary dark:text-[#e6c887] border border-primary/30 dark:border-[#e6c887]/30 hover:bg-primary/10 transition-colors"
                  >
                    {isEn ? 'View all articles' : 'Xem tất cả bài viết'}
                  </button>
                </div>
              ) : (
                paginatedArticles.map((article) => {
                  const title = isEn ? article.titleEn : article.titleVi
                  const desc = isEn ? article.descEn : article.descVi
                  const catLabel = isEn ? article.categoryLabelEn : article.categoryLabelVi

                  return (
                    <Reveal key={article.id}>
                      <article className="group p-4 sm:p-6 rounded-3xl border border-border/80 dark:border-white/10 bg-card hover:shadow-xl transition-all duration-300 hover:border-primary/40 dark:hover:border-[#e6c887]/40 grid gap-5 sm:grid-cols-12 items-center">
                        {/* Thumbnail (5 cols) */}
                        <Link
                          href={article.href}
                          className="sm:col-span-5 relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-muted block"
                        >
                          <img
                            src={article.image}
                            alt={title}
                            className="size-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                          {/* Category Badge on image */}
                          <div className="absolute top-2.5 left-2.5">
                            <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold tracking-wider uppercase bg-[#e6c887] text-[#072018] shadow-md">
                              {catLabel}
                            </span>
                          </div>
                        </Link>

                        {/* Content (7 cols) */}
                        <div className="sm:col-span-7 flex flex-col justify-between h-full">
                          <div>
                            <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-2">
                              <Calendar className="size-3.5 text-primary dark:text-[#e6c887]" />
                              <span>{article.date}</span>
                            </div>

                            <h3 className="font-serif text-lg sm:text-xl font-bold text-foreground leading-snug group-hover:text-primary dark:group-hover:text-[#e6c887] transition-colors">
                              <Link href={article.href}>
                                {title}
                              </Link>
                            </h3>

                            <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                              {desc}
                            </p>
                          </div>

                          <div className="mt-4 pt-3 border-t border-border/60 dark:border-white/10 flex items-center justify-between">
                            <Link
                              href={article.href}
                              className="inline-flex items-center gap-1.5 text-xs font-bold text-primary dark:text-[#e6c887] hover:underline"
                            >
                              {isEn ? 'Read article' : 'Xem chi tiết'}
                              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                            </Link>
                          </div>
                        </div>
                      </article>
                    </Reveal>
                  )
                })
              )}

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="pt-6 flex items-center justify-center gap-2">
                  {Array.from({ length: totalPages }).map((_, idx) => {
                    const pageNum = idx + 1
                    const isActive = currentPage === pageNum
                    return (
                      <button
                        key={pageNum}
                        type="button"
                        onClick={() => setCurrentPage(pageNum)}
                        className={`size-9 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          isActive
                            ? 'bg-primary text-primary-foreground dark:bg-[#e6c887] dark:text-[#072018] shadow-md'
                            : 'bg-secondary dark:bg-card border border-border/80 dark:border-white/10 text-foreground hover:bg-secondary/80'
                        }`}
                      >
                        {pageNum}
                      </button>
                    )
                  })}

                  {currentPage < totalPages && (
                    <button
                      type="button"
                      onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                      className="px-4 py-2 rounded-xl text-xs font-bold bg-secondary dark:bg-card border border-border/80 dark:border-white/10 text-foreground hover:bg-secondary/80 transition-colors"
                    >
                      {isEn ? 'Next ›' : 'Tiếp theo ›'}
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* RIGHT: SIDEBAR (4 COLS) */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
              {/* WIDGET 1: BÀI VIẾT NỔI BẬT */}
              <div className="p-6 rounded-3xl border border-border/80 dark:border-white/10 bg-card shadow-md">
                <h3 className="font-serif text-lg font-bold text-foreground mb-4 pb-3 border-b border-border/60 dark:border-white/10">
                  {isEn ? 'FEATURED ARTICLES' : 'BÀI VIẾT NỔI BẬT'}
                </h3>

                <div className="space-y-4">
                  {featuredArticles.map((item) => {
                    const title = isEn ? item.titleEn : item.titleVi
                    return (
                      <Link
                        key={item.id}
                        href={item.href}
                        className="group flex items-start gap-3 transition-colors"
                      >
                        <div className="size-16 rounded-xl overflow-hidden shrink-0 bg-muted">
                          <img
                            src={item.image}
                            alt={title}
                            className="size-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <div>
                          <h4 className="font-serif font-bold text-xs sm:text-sm text-foreground group-hover:text-primary dark:group-hover:text-[#e6c887] transition-colors line-clamp-2 leading-snug">
                            {title}
                          </h4>
                          <span className="text-[11px] text-muted-foreground mt-1 block">
                            {item.date}
                          </span>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>

              {/* WIDGET 2: NHẬN TƯ VẤN TRỰC TIẾP */}
              <div className="p-6 rounded-3xl border border-primary/20 dark:border-[#e6c887]/30 bg-gradient-to-br from-card via-card to-primary/5 dark:from-[#0c241b] dark:to-[#071a14] shadow-lg relative overflow-hidden">
                <div className="absolute -top-12 -right-12 size-36 rounded-full bg-[#e6c887]/15 dark:bg-[#e6c887]/10 blur-2xl pointer-events-none" />
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary dark:bg-[#e6c887]/15 dark:text-[#e6c887] border border-primary/20 dark:border-[#e6c887]/30">
                  <Sparkles className="size-3" />
                  {isEn ? '1-ON-1 ADVISORY' : 'TƯ VẤN DỰ ÁN 1:1'}
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-foreground mt-2.5 mb-1.5">
                  {isEn ? 'Receive Price List & Policies' : 'Nhận Bảng Giá & Chính Sách'}
                </h3>
                <p className="text-xs text-muted-foreground mb-5 leading-relaxed">
                  {isEn ? (
                    <>
                      Contact senior consultant <strong className="text-foreground dark:text-[#e6c887]">Lê Ngọc Long</strong> directly to receive the complete project dossier, phase 1 price sheet, and detailed cash flow models.
                    </>
                  ) : (
                    <>
                      Đăng ký trực tiếp với chuyên viên <strong className="text-foreground dark:text-[#e6c887]">Lê Ngọc Long</strong> để nhận trọn bộ tài liệu, bảng giá gốc đợt 1 và phân tích dòng tiền chuyên sâu.
                    </>
                  )}
                </p>

                <button
                  type="button"
                  onClick={() => openConsultation({ source: isEn ? 'News Page - Sidebar consultation' : 'Trang Tin Tức - Sidebar nhận tư vấn' })}
                  className="w-full py-3 px-4 rounded-xl font-sans font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all bg-primary text-white hover:bg-primary/90 dark:bg-gradient-to-r dark:from-[#e6c887] dark:via-[#f7e4b5] dark:to-[#e6c887] dark:text-[#072018] flex items-center justify-center gap-2 cursor-pointer group/btn"
                >
                  <span>{isEn ? 'Get Consultation Now' : 'Nhận tư vấn ngay'}</span>
                  <ArrowRight className="size-3.5 transition-transform group-hover/btn:translate-x-1" />
                </button>

                <div className="mt-4 pt-3 border-t border-border/60 dark:border-white/10 flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">{isEn ? 'Support Hotline:' : 'Hotline hỗ trợ:'}</span>
                  <a
                    href="tel:0376671776"
                    className="font-bold text-primary dark:text-[#e6c887] hover:underline"
                  >
                    0376 671 776
                  </a>
                </div>
              </div>

              {/* WIDGET 3: CHUYÊN MỤC */}
              <div className="p-6 rounded-3xl border border-border/80 dark:border-white/10 bg-card shadow-md">
                <h3 className="font-serif text-lg font-bold text-foreground mb-4 pb-3 border-b border-border/60 dark:border-white/10">
                  {isEn ? 'CATEGORIES' : 'CHUYÊN MỤC'}
                </h3>

                <div className="space-y-2 text-xs sm:text-sm">
                  {CATEGORIES.map((cat) => {
                    const label = isEn ? cat.labelEn : cat.labelVi
                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => {
                          setActiveCategory(cat.id)
                          setCurrentPage(1)
                        }}
                        className={`w-full flex items-center justify-between py-2 px-2.5 rounded-xl transition-colors cursor-pointer ${
                          activeCategory === cat.id
                            ? 'bg-primary/10 text-primary dark:bg-[#e6c887]/15 dark:text-[#e6c887] font-bold'
                            : 'text-muted-foreground hover:bg-secondary'
                        }`}
                      >
                        <span>{label}</span>
                        <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-secondary text-muted-foreground">
                          {categoryCounts[cat.id] || 0}
                        </span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* WIDGET 4: TỪ KHOÁ NỔI BẬT */}
              <div className="p-6 rounded-3xl border border-border/80 dark:border-white/10 bg-card shadow-md">
                <h3 className="font-serif text-lg font-bold text-foreground mb-4 pb-3 border-b border-border/60 dark:border-white/10">
                  {isEn ? 'POPULAR TAGS' : 'TỪ KHOÁ NỔI BẬT'}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {TAG_CHIPS.map((tag) => {
                    const label = isEn ? tag.labelEn : tag.labelVi
                    return (
                      <Link
                        key={tag.labelVi}
                        href={tag.href}
                        className="px-3 py-1.5 rounded-xl text-xs bg-secondary/60 hover:bg-secondary text-foreground/80 hover:text-primary dark:hover:text-[#e6c887] border border-border/60 dark:border-white/10 transition-colors"
                      >
                        {label}
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
