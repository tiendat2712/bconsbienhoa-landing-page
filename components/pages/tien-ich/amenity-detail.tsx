'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Home,
  ChevronRight,
  ChevronLeft,
  X,
  Maximize2,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Sparkles,
  Waves,
  Trees,
  ShoppingBag,
  Dumbbell,
  Film,
  Palmtree,
  Heart,
  Eye,
  Leaf,
  Activity,
  User,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  ShieldCheck,
  GraduationCap,
  Store,
  ShoppingCart,
  HeartPulse,
  Droplets,
  Flower2,
  Users,
  Footprints,
  Baby,
  Trophy,
  PhoneCall,
  ArrowRight,
} from 'lucide-react'
import { Reveal } from '@/components/layout/reveal'
import { useSitePreferences } from '@/components/layout/site-preferences'

// =============================================================================
// 1. DATA MODELS & CONSTANTS
// =============================================================================

// Bento Metrics (Matching media_1788982506337.png)
interface BentoMetric {
  icon: React.ElementType
  title: string
  subtitle: string
}

const BENTO_METRICS_VI: BentoMetric[] = [
  { icon: Sparkles, title: '60 tiện ích', subtitle: 'Hệ sinh thái compound' },
  { icon: Trees, title: '7.700 m² xanh', subtitle: 'Công viên & cảnh quan' },
  { icon: ShieldCheck, title: 'An ninh 24/7', subtitle: 'Kiểm soát thẻ từ đa lớp' },
  { icon: Store, title: '113 Shophouse', subtitle: 'Thương mại khối đế' },
  { icon: GraduationCap, title: 'Trường mầm non', subtitle: 'Giáo dục nội khu chuẩn mực' },
]

const BENTO_METRICS_EN: BentoMetric[] = [
  { icon: Sparkles, title: '60 Amenities', subtitle: 'Compound ecosystem' },
  { icon: Trees, title: '7,700 sqm Greenery', subtitle: 'Park & landscape' },
  { icon: ShieldCheck, title: '24/7 Security', subtitle: 'Multi-layer smart access' },
  { icon: Store, title: '113 Shophouses', subtitle: 'Commercial podiums' },
  { icon: GraduationCap, title: 'Kindergarten', subtitle: 'Standard on-site education' },
]

// 16 Internal Amenities - ALL 16 USE HIGH-RESOLUTION 2K/Full-HD IMAGES (2000px - 2666px)
export interface InternalAmenity {
  id: number
  titleVi: string
  titleEn: string
  descVi: string
  descEn: string
  category: 'relax' | 'sport'
  src: string
  icon: React.ElementType
}

export const INTERNAL_AMENITIES: InternalAmenity[] = [
  {
    id: 1,
    titleVi: 'Hồ bơi tràn bờ',
    titleEn: 'Infinity Resort Pool',
    descVi: 'Chuẩn resort, chạy dọc trục cảnh quan xanh mát',
    descEn: 'Resort-grade infinity swimming pool along the central landscaped axis',
    category: 'relax',
    src: '/images/amenities/amenity-ho-boi-trung-tam.webp',
    icon: Waves,
  },
  {
    id: 2,
    titleVi: 'Bể sục Jacuzzi',
    titleEn: 'Jacuzzi Relaxation Pool',
    descVi: 'Khu thư giãn thủy liệu pháp cạnh hồ bơi lớn',
    descEn: 'Hydromassage hydrotherapy pool next to the main swimming pool',
    category: 'relax',
    src: '/images/amenities/amenity-ho-jacuzzi.webp',
    icon: Sparkles,
  },
  {
    id: 3,
    titleVi: 'Công viên trung tâm',
    titleEn: 'Central Green Park',
    descVi: 'Mảng xanh 7.700+ m² giữa các block căn hộ',
    descEn: 'Expansive 7,700+ sqm central lush garden between residential blocks',
    category: 'relax',
    src: '/images/amenities/amenity-cong-vien-xanh-toan-canh.webp',
    icon: Trees,
  },
  {
    id: 4,
    titleVi: 'Hồ sen Swan Lake',
    titleEn: 'Swan Lake Lotus Pond',
    descVi: 'Tiểu cảnh nước sinh thái, lối dạo men theo hồ',
    descEn: 'Ecological waterscape and pedestrian walkway along the lotus pond',
    category: 'relax',
    src: '/images/amenities/amenity-vuon-thien-nga-ho-sen.webp',
    icon: Droplets,
  },
  {
    id: 5,
    titleVi: 'Vườn cảnh quan',
    titleEn: 'Scenic Landscape Garden',
    descVi: 'Lối dạo rợp bóng cây xanh và vườn hoa bốn mùa',
    descEn: 'Canopied scenic promenade and vibrant seasonal flora',
    category: 'relax',
    src: '/images/amenities/amenity-vuon-canh-quan-02.webp',
    icon: Flower2,
  },
  {
    id: 6,
    titleVi: 'Vườn cảnh quan nghệ thuật',
    titleEn: 'Artistic Botanical Garden',
    descVi: 'Không gian tĩnh tại, vườn thiền hòa hợp cùng thiên nhiên',
    descEn: 'Artistic botanical greenery creating peaceful meditation ambiance',
    category: 'relax',
    src: '/images/amenities/amenity-vuon-canh-quan-03.webp',
    icon: Flower2,
  },
  {
    id: 7,
    titleVi: 'Sân bóng rổ',
    titleEn: 'Standard Basketball Court',
    descVi: 'Sân tập tiêu chuẩn phục vụ rèn luyện thể chất cư dân',
    descEn: 'Standard sports court for resident fitness and friendly matches',
    category: 'sport',
    src: '/images/amenities/amenity-san-bong-ro.webp',
    icon: Trophy,
  },
  {
    id: 8,
    titleVi: 'Khu thể thao ngoài trời',
    titleEn: 'Outdoor Fitness Zone',
    descVi: 'Hệ thống máy tập thể dục hiện đại giữa thiên nhiên',
    descEn: 'Modern outdoor fitness gym stations surrounded by fresh greenery',
    category: 'sport',
    src: '/images/amenities/amenity-khu-the-thao.webp',
    icon: Dumbbell,
  },
  {
    id: 9,
    titleVi: 'Rạp phim ngoài trời',
    titleEn: 'Open-air Cinema Lawn',
    descVi: 'Bãi cỏ sinh hoạt cộng đồng, chiếu phim cuối tuần',
    descEn: 'Community lawn hosting weekend open-air movie screenings',
    category: 'relax',
    src: '/images/amenities/amenity-cinema-ngoai-troi.webp',
    icon: Film,
  },
  {
    id: 10,
    titleVi: 'Bcons Shopping Center',
    titleEn: 'Bcons Shopping Center',
    descVi: 'Shophouse khối đế: mua sắm, ẩm thực và dịch vụ cao cấp',
    descEn: 'Podium commercial shophouses for shopping, gourmet dining & cafes',
    category: 'sport',
    src: '/images/amenities/amenity-pho-thuong-mai.webp',
    icon: ShoppingBag,
  },
  {
    id: 11,
    titleVi: 'Đường dạo & pavilion nghỉ',
    titleEn: 'Green Promenade & Pavilion',
    descVi: 'Vòm cây xanh mát, ghế nghỉ thư thái dọc lối đi bộ',
    descEn: 'Shaded botanical canopy with comfortable rest pavilions',
    category: 'relax',
    src: '/images/amenities/amenity-vuon-thien-nga-duong-dao.webp',
    icon: Footprints,
  },
  {
    id: 12,
    titleVi: 'Cây ước nguyện',
    titleEn: 'Community Wishing Tree',
    descVi: 'Điểm hẹn giao lưu cộng đồng dưới vòm cây biểu tượng',
    descEn: 'Iconic civic gathering landmark under the sacred wishing tree',
    category: 'relax',
    src: '/images/amenities/amenity-cay-uoc-nguyen.webp',
    icon: Palmtree,
  },
  {
    id: 13,
    titleVi: 'Spa hướng hồ bơi',
    titleEn: 'Pool-view Wellness Spa',
    descVi: 'Không gian chăm sóc sức khỏe & tái tạo năng lượng mỗi ngày',
    descEn: 'Dedicated wellness spa overlooking the tranquil swimming pool',
    category: 'relax',
    src: '/images/amenities/amenity-spa-huong-ho-boi.webp',
    icon: Heart,
  },
  {
    id: 14,
    titleVi: 'Ban công xanh trên cao',
    titleEn: 'Tropical Sky Balcony',
    descVi: 'Tầm nhìn panorama ôm trọn công viên trung tâm và thành phố',
    descEn: 'Panoramic aerial views over the central park and Bien Hoa cityscape',
    category: 'relax',
    src: '/images/amenities/amenity-ban-cong-xanh.webp',
    icon: Eye,
  },
  {
    id: 15,
    titleVi: 'Dải công viên sinh thái',
    titleEn: 'Linear Ecological Park',
    descVi: 'Thảm thực vật đa tầng lọc bụi và điều hòa không khí',
    descEn: 'Multi-layered botanical garden purifying air and cooling microclimate',
    category: 'relax',
    src: '/images/amenities/amenity-dai-cong-vien-xanh.webp',
    icon: Leaf,
  },
  {
    id: 16,
    titleVi: 'Sân bóng rổ toàn cảnh',
    titleEn: 'Panoramic Basketball Arena',
    descVi: 'Không gian vận động năng động giữa quần thể 5 tòa tháp',
    descEn: 'Dynamic recreational zone positioned amidst the residential towers',
    category: 'sport',
    src: '/images/amenities/amenity-san-bong-ro-toan-canh.webp',
    icon: Activity,
  },
]

// 4 Typology Cards - High-Res (2000px - 2666px)
interface TypologyItem {
  id: number
  titleVi: string
  titleEn: string
  descVi: string
  descEn: string
  src: string
  icon: React.ElementType
}

const USAGE_TYPOLOGIES: TypologyItem[] = [
  {
    id: 1,
    titleVi: 'Tiện ích cho gia đình trẻ',
    titleEn: 'Amenities for Young Families',
    descVi: 'Trường mầm non nội khu, hồ bơi, siêu thị mini và chuỗi shophouse phục vụ sinh hoạt hàng ngày',
    descEn: 'On-site kindergarten, swimming pool, mini marts and commercial shophouses for daily living',
    src: '/images/amenities/amenity-pho-thuong-mai.webp',
    icon: Home,
  },
  {
    id: 2,
    titleVi: 'Tiện ích phát triển trẻ thơ',
    titleEn: 'Childhood Development Hub',
    descVi: 'Sân chơi vận động Kidzone, hồ bơi trẻ em nông an toàn và bãi cỏ rạp phim tương tác',
    descEn: 'Kidzone play park, shallow safety pool and interactive open-air cinema lawn',
    src: '/images/amenities/amenity-cinema-ngoai-troi.webp',
    icon: Baby,
  },
  {
    id: 3,
    titleVi: 'Tiện ích nghỉ dưỡng người lớn tuổi',
    titleEn: 'Senior Wellness & Leisure',
    descVi: 'Vườn thiền yoga, đường dạo bộ rợp bóng cây xanh, ghế nghỉ pavilion và hồ cảnh quan Swan Lake',
    descEn: 'Zen yoga garden, shaded walking trails, resting pavilions and scenic Swan Lake pond',
    src: '/images/amenities/amenity-vuon-thien-nga-duong-dao.webp',
    icon: Footprints,
  },
  {
    id: 4,
    titleVi: 'Không gian kết nối cộng đồng',
    titleEn: 'Civic Community Connection',
    descVi: 'Quảng trường trung tâm, khu nướng BBQ ngoài trời và phòng sinh hoạt cộng đồng khang trang',
    descEn: 'Central square, outdoor BBQ party zones and spacious multi-purpose resident community halls',
    src: '/images/amenities/amenity-cong-vien-xanh-toan-canh.webp',
    icon: Users,
  },
]

// 18 Official Gallery Perspectives - 100% HIGH-RESOLUTION FULL-HD & 2K (1920px - 2666px)
interface GalleryItem {
  id: number
  titleVi: string
  titleEn: string
  src: string
}

const PERSPECTIVE_GALLERY: GalleryItem[] = [
  {
    id: 1,
    titleVi: 'Toàn cảnh 5 tháp Bcons Central Park đón ánh bình minh',
    titleEn: 'Panoramic View of 5 Bcons Central Park Towers at Sunrise',
    src: '/images/project-towers.jpg',
  },
  {
    id: 2,
    titleVi: 'Công viên nội khu hơn 7.700m² & hồ bơi resort giữa các tháp',
    titleEn: 'Over 7,700 sqm Central Park & Resort Pool Between Towers',
    src: '/images/project-pool.jpg',
  },
  {
    id: 3,
    titleVi: 'Hồ bơi tràn bờ phong cách nghỉ dưỡng chuẩn resort',
    titleEn: 'Resort-grade Infinity Swimming Pool Experience',
    src: '/images/amenities/amenity-ho-boi-trung-tam.webp',
  },
  {
    id: 4,
    titleVi: 'Bể sục Jacuzzi ngoài trời thủy liệu pháp thư thái',
    titleEn: 'Outdoor Jacuzzi Whirlpool Hydrotherapy',
    src: '/images/amenities/amenity-ho-jacuzzi.webp',
  },
  {
    id: 5,
    titleVi: 'Công viên xanh toàn cảnh giữa 5 block căn hộ',
    titleEn: 'Panoramic Central Park Among the 5 Residential Blocks',
    src: '/images/amenities/amenity-cong-vien-xanh-toan-canh.webp',
  },
  {
    id: 6,
    titleVi: 'Dải công viên sinh thái đa tầng điều hòa vi khí hậu',
    titleEn: 'Multi-layer Linear Ecological Park Cleansing Microclimate',
    src: '/images/amenities/amenity-dai-cong-vien-xanh.webp',
  },
  {
    id: 7,
    titleVi: 'Hồ sen Swan Lake & lối dạo ven hồ thơ mộng',
    titleEn: 'Swan Lake Lotus Pond & Scenic Walking Promenade',
    src: '/images/amenities/amenity-vuon-thien-nga-ho-sen.webp',
  },
  {
    id: 8,
    titleVi: 'Đường dạo bộ rợp bóng mát ven hồ sen Swan Lake',
    titleEn: 'Canopied Walking Trail Flanking Swan Lake',
    src: '/images/amenities/amenity-vuon-thien-nga-duong-dao.webp',
  },
  {
    id: 9,
    titleVi: 'Vườn cảnh quan nghệ thuật bốn mùa rực rỡ',
    titleEn: 'Artistic Botanical Landscape with Seasonal Blossoms',
    src: '/images/amenities/amenity-vuon-canh-quan-02.webp',
  },
  {
    id: 10,
    titleVi: 'Vườn thiền tĩnh tại & không gian yoga ngoài trời',
    titleEn: 'Serene Zen Garden & Outdoor Yoga Space',
    src: '/images/amenities/amenity-vuon-canh-quan-03.webp',
  },
  {
    id: 11,
    titleVi: 'Cây ước nguyện — Điểm hẹn giao lưu biểu tượng cộng đồng',
    titleEn: 'Wishing Tree — Iconic Civic Community Gathering Landmark',
    src: '/images/amenities/amenity-cay-uoc-nguyen.webp',
  },
  {
    id: 12,
    titleVi: 'Ban công xanh ôm trọn tầm nhìn panorama thành phố',
    titleEn: 'Tropical Sky Balcony with Sweeping Skyline Panorama',
    src: '/images/amenities/amenity-ban-cong-xanh.webp',
  },
  {
    id: 13,
    titleVi: 'Sân bóng rổ tiêu chuẩn phục vụ rèn luyện thể chất',
    titleEn: 'Standard Outdoor Basketball Court for Daily Exercise',
    src: '/images/amenities/amenity-san-bong-ro.webp',
  },
  {
    id: 14,
    titleVi: 'Sân bóng rổ toàn cảnh giữa không gian công viên xanh',
    titleEn: 'Panoramic Basketball Arena Surrounded by Lush Trees',
    src: '/images/amenities/amenity-san-bong-ro-toan-canh.webp',
  },
  {
    id: 15,
    titleVi: 'Khu thể thao và cụm máy tập thể dục ngoài trời hiện đại',
    titleEn: 'Outdoor Calisthenics & Fitness Station Park',
    src: '/images/amenities/amenity-khu-the-thao.webp',
  },
  {
    id: 16,
    titleVi: 'Rạp chiếu phim ngoài trời cuối tuần dưới ngàn sao',
    titleEn: 'Weekend Open-air Cinema Lawn Under the Starry Sky',
    src: '/images/amenities/amenity-cinema-ngoai-troi.webp',
  },
  {
    id: 17,
    titleVi: 'Tuyến phố thương mại & Shophouse khối đế sầm uất',
    titleEn: 'Commercial Podium Shophouses & Vibrant Promenade',
    src: '/images/amenities/amenity-pho-thuong-mai.webp',
  },
  {
    id: 18,
    titleVi: 'Khu Spa & Wellness hướng trực diện hồ bơi thư giãn',
    titleEn: 'Pool-facing Spa & Wellness Healing Oasis',
    src: '/images/amenities/amenity-spa-huong-ho-boi.webp',
  },
]

// Surrounding External Amenities (Matching media_1788982553731.png)
const EXTERNAL_AMENITIES = [
  { icon: ShoppingBag, titleVi: 'Vincom Plaza Biên Hòa', titleEn: 'Vincom Plaza Bien Hoa', dist: '400m' },
  { icon: HeartPulse, titleVi: 'Bệnh viện Hoàn Mỹ ITO', titleEn: 'Hoan My ITO Hospital', dist: '1km' },
  { icon: ShoppingCart, titleVi: 'Big C Đồng Nai', titleEn: 'Big C Dong Nai Supermarket', dist: '2km' },
  { icon: Store, titleVi: 'Chợ Tam Hiệp', titleEn: 'Tam Hiep Traditional Market', dist: '500m' },
  { icon: GraduationCap, titleVi: 'Đại học Đồng Nai', titleEn: 'Dong Nai University', dist: '1.5km' },
]

// =============================================================================
// 2. MAIN AMENITY DETAIL COMPONENT
// =============================================================================

export function AmenityDetail() {
  const { theme, locale, t, openConsultation } = useSitePreferences()
  const isDark = theme === 'dark'
  const isEn = locale === 'en'

  // Bento Metrics data
  const bentoMetrics = isEn ? BENTO_METRICS_EN : BENTO_METRICS_VI

  // Category filter state for 16 internal amenities
  const [activeCategory, setActiveCategory] = useState<'all' | 'relax' | 'sport'>('all')

  const filteredAmenities =
    activeCategory === 'all'
      ? INTERNAL_AMENITIES
      : INTERNAL_AMENITIES.filter((item) => item.category === activeCategory)

  // Lightbox Modal States
  // type: 'masterplan' | 'internal' | 'gallery' | 'typology' | null
  const [lightboxMode, setLightboxMode] = useState<'masterplan' | 'internal' | 'gallery' | 'typology' | null>(null)
  const [lightboxIndex, setLightboxIndex] = useState<number>(0)
  const [masterplanZoom, setMasterplanZoom] = useState<number>(1)

  // Carousel ref for Section 4: Thư viện phối cảnh
  const galleryScrollRef = useRef<HTMLDivElement>(null)

  // Open consultation modal when user clicks "NHẬN TRỌN BỘ PHỐI CẢNH"
  const scrollToContactForm = () => {
    openConsultation({
      source: 'Trang Tiện Ích - Nhận trọn bộ 60 tiện ích & phối cảnh',
    })
  }

  // Carousel scroll controls
  const handleScrollGallery = (direction: 'left' | 'right') => {
    if (!galleryScrollRef.current) return
    const scrollAmount = direction === 'left' ? -380 : 380
    galleryScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
  }

  // Lightbox keyboard navigation & body overflow lock
  useEffect(() => {
    if (!lightboxMode) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxMode(null)
        setMasterplanZoom(1)
      }
      if (lightboxMode === 'internal') {
        if (e.key === 'ArrowLeft') {
          setLightboxIndex((prev) => (prev - 1 + filteredAmenities.length) % filteredAmenities.length)
        }
        if (e.key === 'ArrowRight') {
          setLightboxIndex((prev) => (prev + 1) % filteredAmenities.length)
        }
      } else if (lightboxMode === 'gallery') {
        if (e.key === 'ArrowLeft') {
          setLightboxIndex((prev) => (prev - 1 + PERSPECTIVE_GALLERY.length) % PERSPECTIVE_GALLERY.length)
        }
        if (e.key === 'ArrowRight') {
          setLightboxIndex((prev) => (prev + 1) % PERSPECTIVE_GALLERY.length)
        }
      } else if (lightboxMode === 'typology') {
        if (e.key === 'ArrowLeft') {
          setLightboxIndex((prev) => (prev - 1 + USAGE_TYPOLOGIES.length) % USAGE_TYPOLOGIES.length)
        }
        if (e.key === 'ArrowRight') {
          setLightboxIndex((prev) => (prev + 1) % USAGE_TYPOLOGIES.length)
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = originalOverflow
    }
  }, [lightboxMode, filteredAmenities.length])

  // Get active lightbox item details
  const currentInternalItem = filteredAmenities[lightboxIndex] || filteredAmenities[0]
  const currentGalleryItem = PERSPECTIVE_GALLERY[lightboxIndex] || PERSPECTIVE_GALLERY[0]
  const currentTypologyItem = USAGE_TYPOLOGIES[lightboxIndex] || USAGE_TYPOLOGIES[0]

  return (
    <>
      {/* ========================================================================= */}
      {/* 1. HERO BANNER & BENTO QUICK FACTS (Matching media_1788982506337.png)     */}
      {/* ========================================================================= */}
      <section className="relative isolate overflow-hidden min-h-[460px] md:min-h-[520px] flex items-center pt-28 pb-14 md:pt-36 md:pb-20 transition-colors">
        {/* Cinematic Background Image */}
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center transition-transform duration-1000 scale-105"
          style={{ backgroundImage: "url('/images/project-towers.jpg')" }}
          role="img"
          aria-label={isEn ? 'Bcons Central Park Amenities' : 'Phối cảnh tiện ích Bcons Central Park'}
        />

        {/* Forest Emerald Luxury Gradient Overlay */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#072018]/95 via-[#072018]/85 to-[#072018]/70 dark:from-[#04140e]/98 dark:via-[#072018]/90 dark:to-[#04140e]/85 backdrop-blur-[1px]" />

        {/* Champagne Gold Ambient Glow */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#e6c887]/20 to-transparent blur-3xl opacity-60" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Đường dẫn" className="flex items-center gap-2 text-xs sm:text-sm text-white/75">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-[#e6c887] font-medium"
            >
              <Home className="size-3.5" />
              {t.nav.home}
            </Link>
            <ChevronRight className="size-3.5 text-white/40" />
            <span className="text-[#e6c887] font-semibold">{t.nav.amenities}</span>
          </nav>

          {/* Heading and Intro */}
          <Reveal delay={0.06}>
            <div className="mt-6 max-w-3xl">
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white uppercase leading-tight">
                {isEn ? 'Bcons Central Park Amenities' : 'Tiện Ích Bcons Central Park'}
              </h1>
              <p className="mt-2 font-serif italic text-xl sm:text-2xl text-[#e6c887] font-semibold tracking-wide">
                {isEn
                  ? 'Modern Living Standard — Fulfilling Every Moment'
                  : 'Chuẩn sống hiện đại – Trọn vẹn từng khoảnh khắc'}
              </p>
              <p className="mt-4 font-sans text-sm sm:text-base leading-relaxed text-white/80">
                {isEn
                  ? 'Bcons Central Park Tam Hiep is planned with a diverse system of internal amenities and regional connections, bringing a convenient, lush green and fulfilling lifestyle to all residents.'
                  : 'Bcons Central Park Tam Hiệp được quy hoạch hệ thống tiện ích nội khu và liên kết ngoại khu đa dạng, mang đến cuộc sống tiện nghi, xanh mát và trọn vẹn cho cư dân.'}
              </p>
            </div>
          </Reveal>

          {/* Bento Metric Strip (5 cards) */}
          <Reveal delay={0.12} className="mt-10">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
              {bentoMetrics.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/15 bg-white/10 dark:bg-[#072018]/70 backdrop-blur-md p-4 sm:p-5 flex items-start gap-3.5 transition-all duration-300 hover:border-[#e6c887]/60 hover:bg-white/15 group shadow-lg"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#e6c887]/20 text-[#e6c887] border border-[#e6c887]/40 transition-transform group-hover:scale-110">
                    <item.icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-serif text-sm sm:text-base font-bold text-white tracking-wide">
                      {item.title}
                    </h3>
                    <p className="mt-0.5 font-sans text-xs text-white/75 leading-tight">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. MAIN 2-COLUMN SECTION: LEFT CONTENT + RIGHT STICKY SIDEBAR            */}
      {/* ========================================================================= */}
      <section className="bg-background py-14 sm:py-18 lg:py-24 transition-colors">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* ----------------------------------------------------------------- */}
            {/* LEFT COLUMN: 4 CORE AMENITY SECTIONS (Col-span 8)                 */}
            {/* ----------------------------------------------------------------- */}
            <div className="lg:col-span-8 space-y-16 sm:space-y-20">
              {/* =============================================================== */}
              {/* SECTION 1: MẶT BẰNG TỔNG THỂ TIỆN ÍCH (60 HẠNG MỤC)             */}
              {/* =============================================================== */}
              <div id="mat-bang-tien-ich" className="scroll-mt-28">
                <Reveal>
                  <div className="border-l-4 border-[#e6c887] pl-4 mb-4">
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold uppercase tracking-tight text-foreground dark:text-white">
                      {isEn ? 'Master Plan of 60 Amenities' : 'Mặt Bằng Tổng Thể Tiện Ích'}
                    </h2>
                  </div>
                  <p className="font-sans text-sm sm:text-base leading-relaxed text-muted-foreground mt-3">
                    {isEn
                      ? 'The developer published layout precisely marks 60 internal amenities: central green park and square situated between 5 blocks, resort infinity pool bordering Palm – Lotus, sports complex and children playground towards Bamboo – Orchid. Click the map to view high-resolution details.'
                      : 'Bản vẽ chủ đầu tư phát hành, đánh số 60 tiện ích nội khu lên đúng vị trí của chúng: dải công viên và quảng trường nằm giữa 5 block, hồ bơi resort men theo Palm – Lotus, cụm thể thao và sân chơi trẻ em phía Bamboo – Orchid. Bấm vào bản vẽ để xem khổ lớn cùng danh mục 60 hạng mục.'}
                  </p>
                </Reveal>

                {/* Master Plan Map Card */}
                <Reveal delay={0.1} className="mt-6">
                  <div
                    onClick={() => {
                      setLightboxMode('masterplan')
                      setMasterplanZoom(1)
                    }}
                    className="group relative cursor-pointer overflow-hidden rounded-2xl sm:rounded-3xl border border-border bg-card shadow-xl transition-all duration-300 hover:border-[#e6c887]/60 dark:border-white/10 dark:bg-card/75"
                  >
                    <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-slate-900/5">
                      <img
                        src="/images/amenities/masterplan-60-tien-ich.webp"
                        alt="Mặt bằng tổng thể 60 tiện ích nội khu Bcons Central Park"
                        className="h-full w-full object-contain object-center transition-transform duration-700 group-hover:scale-[1.02]"
                      />

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                        <span className="inline-flex items-center gap-2 rounded-full bg-[#e6c887] px-5 py-2.5 text-xs sm:text-sm font-sans font-bold text-[#072018] shadow-xl">
                          <Maximize2 className="size-4 stroke-[2.5]" />
                          {isEn ? 'Click to inspect 60 amenities map' : 'Bấm phóng to sơ đồ 60 tiện ích'}
                        </span>
                      </div>

                      {/* Bottom-right Zoom Badge */}
                      <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-10">
                        <button
                          type="button"
                          aria-label="Phóng to bản đồ 60 tiện ích"
                          className="flex size-10 sm:size-11 items-center justify-center rounded-full bg-white/95 hover:bg-white text-slate-900 shadow-xl transition-transform duration-200 hover:scale-110 active:scale-95 cursor-pointer"
                        >
                          <Maximize2 className="size-4 sm:size-5 stroke-[2.2]" />
                        </button>
                      </div>
                    </div>

                    {/* Map Legal Note */}
                    <div className="p-4 sm:p-5 border-t border-border/60 dark:border-white/5 bg-secondary/30 dark:bg-card/40">
                      <p className="font-sans text-xs italic text-muted-foreground leading-relaxed">
                        {isEn
                          ? '* Amenity list and coordinates are based on official preliminary design documents; legally binding items are detailed in the sales contract amenity appendix.'
                          : '* Danh mục và vị trí tiện ích theo hồ sơ thiết kế giai đoạn giới thiệu dự án; hạng mục ràng buộc là phụ lục tiện ích đính kèm hợp đồng mua bán.'}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* =============================================================== */}
              {/* SECTION 2: TIỆN ÍCH NỘI KHU ĐẲNG CẤP (16 HẠNG MỤC TIÊU BIỂU)    */}
              {/* =============================================================== */}
              <div id="tien-ich-noi-khu" className="scroll-mt-28">
                <Reveal>
                  <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                    <div>
                      <div className="border-l-4 border-[#e6c887] pl-4 mb-2">
                        <h2 className="font-serif text-2xl sm:text-3xl font-bold uppercase tracking-tight text-foreground dark:text-white">
                          {isEn ? 'Signature Internal Amenities' : 'Tiện Ích Nội Khu Đẳng Cấp'}
                        </h2>
                      </div>
                      <p className="font-sans text-sm sm:text-base text-muted-foreground mt-2">
                        {isEn
                          ? '16 signature highlights out of 60 internal amenities with full high-resolution 2K developer renderings.'
                          : 'Mười sáu hạng mục tiêu biểu trong 60 tiện ích nội khu, kèm phối cảnh chủ đầu tư phát hành độ phân giải cao 2K sắc nét.'}
                      </p>
                    </div>

                    {/* Filter Pills */}
                    <div className="inline-flex rounded-full border border-border bg-card p-1 shadow-sm dark:border-white/10 dark:bg-card/80 self-start sm:self-auto shrink-0">
                      <button
                        type="button"
                        onClick={() => setActiveCategory('all')}
                        className={`px-4 py-1.5 rounded-full text-xs font-sans font-medium transition-all duration-200 cursor-pointer ${
                          activeCategory === 'all'
                            ? isDark
                              ? 'bg-[#e6c887] text-[#072018] font-bold shadow-md'
                              : 'bg-primary text-white font-bold shadow-sm'
                            : 'text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        {isEn ? 'All (16)' : 'Tất cả (16)'}
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveCategory('relax')}
                        className={`px-4 py-1.5 rounded-full text-xs font-sans font-medium transition-all duration-200 cursor-pointer ${
                          activeCategory === 'relax'
                            ? isDark
                              ? 'bg-[#e6c887] text-[#072018] font-bold shadow-md'
                              : 'bg-primary text-white font-bold shadow-sm'
                            : 'text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        {isEn ? 'Relax & Nature' : 'Thư giãn (11)'}
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveCategory('sport')}
                        className={`px-4 py-1.5 rounded-full text-xs font-sans font-medium transition-all duration-200 cursor-pointer ${
                          activeCategory === 'sport'
                            ? isDark
                              ? 'bg-[#e6c887] text-[#072018] font-bold shadow-md'
                              : 'bg-primary text-white font-bold shadow-sm'
                            : 'text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        {isEn ? 'Sports & Mall' : 'Thể thao & TM (5)'}
                      </button>
                    </div>
                  </div>
                </Reveal>

                {/* Grid of Amenity Cards (4 columns on desktop, matching screenshots 3 & 4) */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                  {filteredAmenities.map((item, index) => {
                    const ItemIcon = item.icon
                    return (
                      <Reveal key={item.id} delay={0.04 * (index % 4)}>
                        <div
                          onClick={() => {
                            setLightboxMode('internal')
                            setLightboxIndex(index)
                          }}
                          className="group h-full flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#e6c887]/60 hover:shadow-xl dark:border-white/10 dark:bg-card/85 cursor-pointer"
                        >
                          {/* Image Container */}
                          <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900/10">
                            <img
                              src={item.src}
                              alt={isEn ? item.titleEn : item.titleVi}
                              className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                              <span className="rounded-full bg-white/90 p-2 text-[#072018] shadow-lg">
                                <Maximize2 className="size-4" />
                              </span>
                            </div>
                          </div>

                          {/* Card Content */}
                          <div className="p-4 flex flex-col flex-1">
                            <div className="flex items-center gap-2 mb-1.5">
                              <span
                                className={`size-6 rounded-md flex items-center justify-center shrink-0 ${
                                  isDark
                                    ? 'bg-[#e6c887]/20 text-[#e6c887]'
                                    : 'bg-primary/10 text-primary'
                                }`}
                              >
                                <ItemIcon className="size-3.5" />
                              </span>
                              <h3 className="font-serif text-sm sm:text-base font-bold text-foreground leading-snug line-clamp-1 group-hover:text-[#b88728] dark:group-hover:text-[#e6c887] transition-colors">
                                {isEn ? item.titleEn : item.titleVi}
                              </h3>
                            </div>
                            <p className="font-sans text-xs text-muted-foreground leading-relaxed line-clamp-2">
                              {isEn ? item.descEn : item.descVi}
                            </p>
                          </div>
                        </div>
                      </Reveal>
                    )
                  })}
                </div>

                {/* Legal Note below amenities grid */}
                <p className="mt-5 font-sans text-xs italic text-muted-foreground leading-relaxed">
                  {isEn
                    ? '* Renderings are issued by the developer for project introduction; actual completion details may vary. Legally binding specifications belong to the sales contract appendix.'
                    : '* Phối cảnh do chủ đầu tư phát hành ở giai đoạn giới thiệu dự án; chi tiết hoàn thiện thực tế có thể sai khác. Danh mục ràng buộc là phụ lục tiện ích đính kèm hợp đồng mua bán.'}
                </p>

                {/* Center CTA Button */}
                <div className="mt-8 flex justify-center">
                  <button
                    type="button"
                    onClick={scrollToContactForm}
                    className="inline-flex items-center gap-2.5 rounded-xl border border-[#e6c887]/60 bg-gradient-to-r from-[#e6c887]/15 via-[#e6c887]/30 to-[#e6c887]/15 px-6 py-3.5 text-xs sm:text-sm font-sans font-bold uppercase tracking-wider text-foreground dark:text-[#e6c887] shadow-md transition-all duration-300 hover:scale-[1.03] hover:border-[#e6c887] hover:bg-[#e6c887] hover:text-[#072018] cursor-pointer"
                  >
                    <Maximize2 className="size-4 stroke-[2.2]" />
                    {isEn ? 'Download High-Res Perspectives' : 'Nhận trọn bộ phối cảnh độ phân giải cao'}
                  </button>
                </div>
              </div>

              {/* =============================================================== */}
              {/* SECTION 3: TIỆN ÍCH THEO NHU CẦU SỬ DỤNG (Matching screenshot 5) */}
              {/* =============================================================== */}
              <div id="nhu-cau-su-dung" className="scroll-mt-28">
                <Reveal>
                  <div className="border-l-4 border-[#e6c887] pl-4 mb-4">
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold uppercase tracking-tight text-foreground dark:text-white">
                      {isEn ? 'Amenities Tailored by Lifestyle Needs' : 'Tiện Ích Theo Nhu Cầu Sử Dụng'}
                    </h2>
                  </div>
                  <p className="font-sans text-sm sm:text-base text-muted-foreground">
                    {isEn
                      ? 'Designed to care for each generation: from playful childhood growth to vibrant young family life, peaceful senior relaxation and civic neighborly harmony.'
                      : 'Hệ tiện ích được quy hoạch khoa học, thấu hiểu trọn vẹn từng thế hệ trong gia đình: con trẻ phát triển toàn diện, cha mẹ năng động, ông bà an dưỡng tuổi già.'}
                  </p>
                </Reveal>

                {/* 4 Typology Cards */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                  {USAGE_TYPOLOGIES.map((item, index) => {
                    const ItemIcon = item.icon
                    return (
                      <Reveal key={item.id} delay={0.06 * index}>
                        <div
                          onClick={() => {
                            setLightboxMode('typology')
                            setLightboxIndex(index)
                          }}
                          className="group h-full flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#e6c887]/60 hover:shadow-xl dark:border-white/10 dark:bg-card/85 cursor-pointer"
                        >
                          <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900/10">
                            <img
                              src={item.src}
                              alt={isEn ? item.titleEn : item.titleVi}
                              className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                              <span className="rounded-full bg-white/90 p-2 text-[#072018] shadow-lg">
                                <Maximize2 className="size-4" />
                              </span>
                            </div>
                          </div>

                          <div className="p-4 flex flex-col flex-1">
                            {/* Icon pill */}
                            <div className="mb-2.5">
                              <span
                                className={`inline-flex size-9 items-center justify-center rounded-xl transition-all ${
                                  isDark
                                    ? 'bg-[#e6c887]/20 text-[#e6c887]'
                                    : 'bg-primary/10 text-primary'
                                }`}
                              >
                                <ItemIcon className="size-4.5" />
                              </span>
                            </div>
                            <h3 className="font-serif text-base font-bold text-foreground leading-snug group-hover:text-[#b88728] dark:group-hover:text-[#e6c887] transition-colors">
                              {isEn ? item.titleEn : item.titleVi}
                            </h3>
                            <p className="mt-2 font-sans text-xs text-muted-foreground leading-relaxed">
                              {isEn ? item.descEn : item.descVi}
                            </p>
                          </div>
                        </div>
                      </Reveal>
                    )
                  })}
                </div>
              </div>

              {/* =============================================================== */}
              {/* SECTION 4: THƯ VIỆN PHỐI CẢNH (HORIZONTAL CAROUSEL & LIGHTBOX)  */}
              {/* =============================================================== */}
              <div id="thu-vien-phoi-canh" className="scroll-mt-28">
                <Reveal>
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <div className="border-l-4 border-[#e6c887] pl-4 mb-2">
                        <h2 className="font-serif text-2xl sm:text-3xl font-bold uppercase tracking-tight text-foreground dark:text-white">
                          {isEn ? 'Official Perspective Gallery' : 'Thư Viện Phối Cảnh'}
                        </h2>
                      </div>
                      <p className="font-sans text-sm sm:text-base text-muted-foreground mt-2 max-w-2xl">
                        {isEn
                          ? 'Complete collection of developer renderings in razor-sharp 2K resolution from overarching master views to central park, swimming pool, sports hub, podium commercial malls and skyline vistas. Swipe horizontally or click arrows to explore.'
                          : 'Trọn bộ phối cảnh chủ đầu tư phát hành với độ phân giải cao 2K sắc nét, đi từ tổng thể dự án vào tới công viên, hồ bơi, khu thể thao, khối đế thương mại và tầm nhìn từ ban công căn hộ. Vuốt ngang hoặc bấm mũi tên để lướt qua cả bộ, bấm vào ảnh để xem khổ lớn.'}
                      </p>
                    </div>

                    {/* Carousel Nav Arrows */}
                    <div className="hidden sm:flex items-center gap-2 shrink-0">
                      <button
                        type="button"
                        onClick={() => handleScrollGallery('left')}
                        aria-label="Cuộn sang trái"
                        className="size-10 rounded-full border border-border bg-card flex items-center justify-center text-foreground hover:bg-[#e6c887] hover:text-[#072018] hover:border-[#e6c887] shadow-sm transition-all duration-200 cursor-pointer dark:border-white/10 dark:bg-card/80"
                      >
                        <ChevronLeft className="size-5 stroke-[2.2]" />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleScrollGallery('right')}
                        aria-label="Cuộn sang phải"
                        className="size-10 rounded-full border border-border bg-card flex items-center justify-center text-foreground hover:bg-[#e6c887] hover:text-[#072018] hover:border-[#e6c887] shadow-sm transition-all duration-200 cursor-pointer dark:border-white/10 dark:bg-card/80"
                      >
                        <ChevronRight className="size-5 stroke-[2.2]" />
                      </button>
                    </div>
                  </div>
                </Reveal>

                {/* Horizontal Scrolling Gallery Track */}
                <div className="relative mt-6">
                  <div
                    ref={galleryScrollRef}
                    className="flex gap-4 sm:gap-5 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-border dark:scrollbar-thumb-white/10"
                    style={{ scrollbarWidth: 'thin' }}
                  >
                    {PERSPECTIVE_GALLERY.map((item, index) => (
                      <div
                        key={item.id}
                        onClick={() => {
                          setLightboxMode('gallery')
                          setLightboxIndex(index)
                        }}
                        className="group relative w-[280px] sm:w-[340px] md:w-[380px] shrink-0 snap-start overflow-hidden rounded-2xl border border-border bg-card shadow-md transition-all duration-300 hover:border-[#e6c887]/60 hover:shadow-xl dark:border-white/10 dark:bg-card/80 cursor-pointer"
                      >
                        {/* Slide Image */}
                        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900/10">
                          <img
                            src={item.src}
                            alt={isEn ? item.titleEn : item.titleVi}
                            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
                            <p className="font-serif text-xs sm:text-sm font-bold text-white tracking-wide line-clamp-2 drop-shadow-md">
                              {isEn ? item.titleEn : item.titleVi}
                            </p>
                          </div>
                          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="flex size-8 items-center justify-center rounded-full bg-white/95 text-slate-900 shadow-md">
                              <Maximize2 className="size-4" />
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Mobile nav buttons */}
                  <div className="flex sm:hidden items-center justify-between mt-3 px-1">
                    <button
                      type="button"
                      onClick={() => handleScrollGallery('left')}
                      className="size-9 rounded-full border border-border bg-card flex items-center justify-center shadow-sm"
                    >
                      <ChevronLeft className="size-4" />
                    </button>
                    <span className="text-xs text-muted-foreground">
                      Vuốt ngang để xem 18 phối cảnh 2K
                    </span>
                    <button
                      type="button"
                      onClick={() => handleScrollGallery('right')}
                      className="size-9 rounded-full border border-border bg-card flex items-center justify-center shadow-sm"
                    >
                      <ChevronRight className="size-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* ----------------------------------------------------------------- */}
            {/* RIGHT COLUMN: STICKY FORM & EXTERNAL AMENITIES (Col-span 4)       */}
            {/* ----------------------------------------------------------------- */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
              {/* CARD 1: NHẬN THÔNG TIN DỰ ÁN (Branded Forest Emerald Green) */}
              <div
                className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-[#e6c887]/40 bg-gradient-to-br from-[#072018] via-[#0a2c21] to-[#072018] p-6 sm:p-7 text-white shadow-2xl transition-colors dark:bg-[#061913] dark:border-[#e6c887]/50"
              >
                {/* Decorative Ambient Gold Glow */}
                <div className="pointer-events-none absolute -top-16 -right-16 size-44 rounded-full bg-[#e6c887]/20 blur-3xl" />

                <div className="relative z-10">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#e6c887]">
                    <Sparkles className="size-3.5" />
                    {isEn ? 'Official Developer Dossier' : 'Hồ Sơ Tiện Ích Trực Tiếp F1'}
                  </span>

                  <h3 className="mt-1 font-serif text-xl sm:text-2xl font-bold uppercase tracking-tight text-white">
                    {isEn ? 'Register for Full Dossier' : 'Nhận Thông Tin Dự Án'}
                  </h3>

                  <p className="mt-2 font-sans text-xs sm:text-sm text-white/80 leading-relaxed">
                    {isEn
                      ? 'Register to receive the complete 60-amenity layout diagram and landscape analysis dossier of Bcons Central Park from specialist Le Ngoc Long!'
                      : 'Đăng ký nhận trọn bộ sơ đồ bố trí 60 tiện ích và tài liệu phân tích không gian cảnh quan dự án Bcons Central Park từ chuyên viên Lê Ngọc Long!'}
                  </p>

                  <div className="mt-6 space-y-3 font-sans">
                    <button
                      type="button"
                      onClick={() =>
                        openConsultation({
                          source: 'Trang Tiện Ích - Nhận trọn bộ 60 tiện ích & phối cảnh',
                          unitType: 'all',
                        })
                      }
                      className="w-full rounded-xl bg-gradient-to-r from-[#e6c887] via-[#f7e4b5] to-[#e6c887] py-3.5 px-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#072018] shadow-lg transition-all duration-300 hover:scale-[1.02] hover:brightness-105 active:scale-95 cursor-pointer flex items-center justify-center gap-2 group/btn"
                    >
                      <span>{isEn ? 'REGISTER FOR 60 AMENITIES DOSSIER' : 'ĐĂNG KÝ NHẬN HỒ SƠ 60 TIỆN ÍCH'}</span>
                      <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
                    </button>

                    <div className="pt-3 border-t border-white/15 flex items-center justify-between text-xs text-white/80">
                      <span className="flex items-center gap-1.5">
                        <PhoneCall className="size-3.5 text-[#e6c887]" />
                        Hotline 24/7:
                      </span>
                      <a
                        href="tel:0376671776"
                        className="font-bold text-[#e6c887] hover:underline"
                      >
                        0376 671 776
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* CARD 2: TIỆN ÍCH NGOẠI KHU LIÊN KẾT (Matching screenshot 5) */}
              <div className="rounded-2xl sm:rounded-3xl border border-border bg-card p-6 shadow-md transition-colors dark:border-white/10 dark:bg-card/80">
                <div className="border-l-3 border-[#e6c887] pl-3 mb-4">
                  <h3 className="font-serif text-lg font-bold uppercase tracking-tight text-foreground dark:text-white">
                    {isEn ? 'Surrounding Regional Amenities' : 'Tiện Ích Ngoại Khu Liên Kết'}
                  </h3>
                </div>

                <div className="space-y-3.5">
                  {EXTERNAL_AMENITIES.map((ext, idx) => {
                    const ExtIcon = ext.icon
                    return (
                      <div
                        key={idx}
                        className="flex items-center justify-between gap-3 rounded-xl border border-border/70 p-3 bg-secondary/30 hover:border-[#e6c887]/50 transition-colors dark:border-white/5 dark:bg-card/50"
                      >
                        <div className="flex items-center gap-3">
                          <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-[#e6c887]/20 dark:text-[#e6c887]">
                            <ExtIcon className="size-4" />
                          </span>
                          <span className="font-sans text-xs sm:text-sm font-medium text-foreground">
                            {isEn ? ext.titleEn : ext.titleVi}
                          </span>
                        </div>
                        <span className="font-serif text-xs sm:text-sm font-bold text-[#b88728] dark:text-[#e6c887] shrink-0">
                          {ext.dist}
                        </span>
                      </div>
                    )
                  })}
                </div>

                {/* Link to Location Page */}
                <div className="mt-5 pt-4 border-t border-border/60 dark:border-white/5">
                  <Link
                    href="/vi-tri"
                    className="inline-flex items-center gap-1.5 text-xs font-sans font-bold text-primary hover:text-[#b88728] dark:text-[#e6c887] dark:hover:underline transition-colors"
                  >
                    <span>{isEn ? 'Explore full location & traffic connectivity' : 'Xem chi tiết vị trí & kết nối giao thông'}</span>
                    <ChevronRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. FULLSCREEN HIGH-RES LIGHTBOX MODAL (HERO PAGE COMPATIBLE DESIGN)       */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {lightboxMode !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex flex-col justify-between p-4 sm:p-6 lg:p-8 bg-[#041510]/95 backdrop-blur-xl"
          >
            {/* Top Bar: Counter & Yellow Close Button (Matching hero page amenities style) */}
            <div className="flex items-center justify-between w-full max-w-6xl mx-auto z-20 gap-3">
              <span className="font-sans font-bold text-white/90 text-sm sm:text-base">
                {lightboxMode === 'masterplan' ? (
                  <span className="text-[#e6c887]">Sơ đồ 60 tiện ích nội khu</span>
                ) : lightboxMode === 'internal' ? (
                  `${lightboxIndex + 1} / ${filteredAmenities.length}`
                ) : lightboxMode === 'gallery' ? (
                  `${lightboxIndex + 1} / ${PERSPECTIVE_GALLERY.length}`
                ) : (
                  `${lightboxIndex + 1} / ${USAGE_TYPOLOGIES.length}`
                )}
              </span>

              {/* Masterplan Zoom Controls (Only shown for masterplan mode) */}
              {lightboxMode === 'masterplan' && (
                <div className="hidden sm:flex items-center gap-2 bg-white/10 rounded-full px-3 py-1 border border-white/20">
                  <button
                    onClick={() => setMasterplanZoom((z) => Math.max(z - 0.25, 0.75))}
                    type="button"
                    aria-label="Thu nhỏ bản đồ"
                    className="p-1 hover:text-[#e6c887] text-white transition-colors cursor-pointer"
                  >
                    <ZoomOut className="size-4" />
                  </button>
                  <span className="text-xs font-mono text-white/80 w-12 text-center">
                    {Math.round(masterplanZoom * 100)}%
                  </span>
                  <button
                    onClick={() => setMasterplanZoom((z) => Math.min(z + 0.25, 2.5))}
                    type="button"
                    aria-label="Phóng to bản đồ"
                    className="p-1 hover:text-[#e6c887] text-white transition-colors cursor-pointer"
                  >
                    <ZoomIn className="size-4" />
                  </button>
                  <button
                    onClick={() => setMasterplanZoom(1)}
                    type="button"
                    aria-label="Đặt lại kích thước"
                    className="p-1 hover:text-[#e6c887] text-white transition-colors ml-1 border-l border-white/20 pl-2 cursor-pointer"
                  >
                    <RotateCcw className="size-3.5" />
                  </button>
                </div>
              )}

              {/* Close Button (Yellow circle with X icon) */}
              <button
                onClick={() => {
                  setLightboxMode(null)
                  setMasterplanZoom(1)
                }}
                type="button"
                aria-label="Đóng phóng to"
                className="size-10 sm:size-11 rounded-full bg-[#f5b82e] hover:bg-[#e2a623] text-[#072018] flex items-center justify-center font-bold shadow-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer shrink-0"
              >
                <X className="size-5 stroke-[2.5]" />
              </button>
            </div>

            {/* Center Area: Yellow Prev Button, Large 2K/Full-HD Image, Yellow Next Button */}
            <div className="flex items-center justify-center gap-3 sm:gap-6 md:gap-10 my-auto w-full max-w-6xl mx-auto z-10">
              {/* Prev Button */}
              {lightboxMode !== 'masterplan' && (
                <button
                  onClick={() => {
                    if (lightboxMode === 'internal') {
                      setLightboxIndex(
                        (prev) => (prev - 1 + filteredAmenities.length) % filteredAmenities.length
                      )
                    } else if (lightboxMode === 'gallery') {
                      setLightboxIndex(
                        (prev) => (prev - 1 + PERSPECTIVE_GALLERY.length) % PERSPECTIVE_GALLERY.length
                      )
                    } else if (lightboxMode === 'typology') {
                      setLightboxIndex(
                        (prev) => (prev - 1 + USAGE_TYPOLOGIES.length) % USAGE_TYPOLOGIES.length
                      )
                    }
                  }}
                  type="button"
                  aria-label="Ảnh trước"
                  className="shrink-0 size-11 sm:size-13 rounded-full bg-[#f5b82e] hover:bg-[#e2a623] text-[#072018] flex items-center justify-center shadow-xl transition-transform hover:scale-110 active:scale-95 cursor-pointer"
                >
                  <ChevronLeft className="size-6 stroke-[2.5]" />
                </button>
              )}

              {/* Large Image Container */}
              <div className="relative max-h-[68vh] sm:max-h-[76vh] max-w-5xl w-full flex items-center justify-center overflow-auto">
                {lightboxMode === 'masterplan' ? (
                  <motion.div
                    style={{ transform: `scale(${masterplanZoom})`, transition: 'transform 0.2s ease-out' }}
                    className="max-h-[68vh] sm:max-h-[76vh] max-w-full flex items-center justify-center"
                  >
                    <img
                      src="/images/amenities/masterplan-60-tien-ich.webp"
                      alt="Sơ đồ 60 tiện ích nội khu Bcons Central Park"
                      className="max-h-[68vh] sm:max-h-[76vh] max-w-full w-auto h-auto rounded-2xl sm:rounded-3xl object-contain shadow-2xl border border-white/10"
                    />
                  </motion.div>
                ) : lightboxMode === 'internal' ? (
                  <motion.img
                    key={`internal-${lightboxIndex}`}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                    src={currentInternalItem.src}
                    alt={isEn ? currentInternalItem.titleEn : currentInternalItem.titleVi}
                    className="max-h-[68vh] sm:max-h-[76vh] max-w-full w-auto h-auto rounded-2xl sm:rounded-3xl object-contain shadow-2xl border border-white/10"
                  />
                ) : lightboxMode === 'gallery' ? (
                  <motion.img
                    key={`gallery-${lightboxIndex}`}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                    src={currentGalleryItem.src}
                    alt={isEn ? currentGalleryItem.titleEn : currentGalleryItem.titleVi}
                    className="max-h-[68vh] sm:max-h-[76vh] max-w-full w-auto h-auto rounded-2xl sm:rounded-3xl object-contain shadow-2xl border border-white/10"
                  />
                ) : (
                  <motion.img
                    key={`typology-${lightboxIndex}`}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                    src={currentTypologyItem.src}
                    alt={isEn ? currentTypologyItem.titleEn : currentTypologyItem.titleVi}
                    className="max-h-[68vh] sm:max-h-[76vh] max-w-full w-auto h-auto rounded-2xl sm:rounded-3xl object-contain shadow-2xl border border-white/10"
                  />
                )}
              </div>

              {/* Next Button */}
              {lightboxMode !== 'masterplan' && (
                <button
                  onClick={() => {
                    if (lightboxMode === 'internal') {
                      setLightboxIndex((prev) => (prev + 1) % filteredAmenities.length)
                    } else if (lightboxMode === 'gallery') {
                      setLightboxIndex((prev) => (prev + 1) % PERSPECTIVE_GALLERY.length)
                    } else if (lightboxMode === 'typology') {
                      setLightboxIndex((prev) => (prev + 1) % USAGE_TYPOLOGIES.length)
                    }
                  }}
                  type="button"
                  aria-label="Ảnh tiếp theo"
                  className="shrink-0 size-11 sm:size-13 rounded-full bg-[#f5b82e] hover:bg-[#e2a623] text-[#072018] flex items-center justify-center shadow-xl transition-transform hover:scale-110 active:scale-95 cursor-pointer"
                >
                  <ChevronRight className="size-6 stroke-[2.5]" />
                </button>
              )}
            </div>

            {/* Modal Bottom: Title & Description */}
            <div className="text-center z-10 max-w-4xl mx-auto px-4">
              {lightboxMode === 'masterplan' ? (
                <p className="font-sans font-medium text-xs sm:text-sm text-white/80">
                  Dùng thanh điều khiển phía trên để phóng to và soi rõ từng số thứ tự trong 60 hạng mục tiện ích.
                </p>
              ) : lightboxMode === 'internal' ? (
                <div>
                  <p className="font-sans font-bold text-white text-lg sm:text-2xl md:text-3xl tracking-wide drop-shadow-md">
                    {isEn ? currentInternalItem.titleEn : currentInternalItem.titleVi}
                  </p>
                  <p className="font-sans text-xs sm:text-sm text-white/80 mt-1">
                    {isEn ? currentInternalItem.descEn : currentInternalItem.descVi}
                  </p>
                </div>
              ) : lightboxMode === 'gallery' ? (
                <p className="font-sans font-bold text-white text-lg sm:text-2xl md:text-3xl tracking-wide drop-shadow-md">
                  {isEn ? currentGalleryItem.titleEn : currentGalleryItem.titleVi}
                </p>
              ) : (
                <div>
                  <p className="font-sans font-bold text-white text-lg sm:text-2xl md:text-3xl tracking-wide drop-shadow-md">
                    {isEn ? currentTypologyItem.titleEn : currentTypologyItem.titleVi}
                  </p>
                  <p className="font-sans text-xs sm:text-sm text-white/80 mt-1">
                    {isEn ? currentTypologyItem.descEn : currentTypologyItem.descVi}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
