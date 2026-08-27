import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Be_Vietnam_Pro } from 'next/font/google'
import { SitePreferencesProvider } from '@/components/layout/site-preferences'
import { RealEstateProjectSchema, RealEstateAgentSchema } from '@/components/seo/json-ld'
import './globals.css'

const display = Playfair_Display({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-display',
  display: 'swap',
})

const body = Be_Vietnam_Pro({
  subsets: ['latin', 'vietnamese'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://canhobconstamhiep.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Bcons Central Park Tam Hiệp — Vị Trí, Mặt Bằng, Bảng Giá Chủ Đầu Tư 2026',
    template: '%s | Bcons Central Park Tam Hiệp',
  },
  description:
    'Căn hộ sở hữu lâu dài ngay lõi trung tâm Biên Hòa tại 236 Phan Trung, P. Tam Hiệp. Quỹ đất gần 3 ha với công viên 7.700m², hồ bơi resort, 113 shophouse. Đăng ký nhận bảng giá trực tiếp từ Tập đoàn Bcons.',
  keywords: [
    'Bcons Central Park',
    'Bcons Central Park Tam Hiệp',
    'Bcons Tam Hiệp',
    'Bcons Phan Trung',
    'Bcons Biên Hòa',
    'Căn hộ Bcons Biên Hòa',
    'Chung cư Bcons Tam Hiệp',
    'Dự án Bcons Central Park',
    'Giá bán Bcons Central Park',
    'Mặt bằng Bcons Central Park',
    'Pháp lý Bcons Central Park',
    'Tập đoàn Bcons',
    'Lê Ngọc Long Bcons',
  ],
  authors: [{ name: 'Lê Ngọc Long', url: siteUrl }],
  creator: 'Lê Ngọc Long - Chuyên viên tư vấn Bcons',
  publisher: 'Tập đoàn Bcons (Bcons Group)',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: siteUrl,
    siteName: 'Bcons Central Park Tam Hiệp',
    title: 'Bcons Central Park Tam Hiệp — Sống Xanh Giữa Lõi Trung Tâm Biên Hòa',
    description:
      'Căn hộ sở hữu lâu dài tại 236 Phan Trung, Tam Hiệp. Công viên 7.700m², hồ bơi tràn bờ resort, giá chỉ từ 2.0 tỷ/căn, thanh toán linh hoạt 15%.',
    images: [
      {
        url: '/images/hero-towers.png',
        width: 1200,
        height: 630,
        alt: 'Phối cảnh tổng thể dự án Bcons Central Park Tam Hiệp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bcons Central Park Tam Hiệp — Căn Hộ Trung Tâm Biên Hòa',
    description:
      'Dự án gần 3 ha tại 236 Phan Trung, Tam Hiệp, Biên Hòa. Sổ hồng lâu dài, tiện ích resort, giá từ 2.0 tỷ.',
    images: ['/images/hero-towers.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/images/bcons-central-park-logo.png',
    apple: '/images/bcons-central-park-logo.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F8FAFC' },
    { media: '(prefers-color-scheme: dark)', color: '#07130f' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" suppressHydrationWarning className={`bg-background ${display.variable} ${body.variable}`}>
      <head>
        <script
          id="bcons-theme-init"
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var saved = localStorage.getItem('bcons-theme');
                if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            `,
          }}
        />
        <RealEstateProjectSchema />
        <RealEstateAgentSchema />
      </head>
      <body className="font-sans antialiased">
        <SitePreferencesProvider>
          {children}
        </SitePreferencesProvider>
      </body>
    </html>
  )
}
