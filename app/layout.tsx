import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Be_Vietnam_Pro } from 'next/font/google'
import { SitePreferencesProvider } from '@/components/layout/site-preferences'
import {
  RealEstateProjectSchema,
  RealEstateAgentSchema,
  OrganizationSchema,
  LocalBusinessSchema,
} from '@/components/seo/json-ld'
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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.canhobconstamhiep.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Căn Hộ Bcons Tam Hiệp (Bcons Central Park) | Bảng Giá & Ưu Đãi CĐT',
    template: '%s | Căn Hộ Bcons Tam Hiệp (Bcons Central Park)',
  },
  description:
    'Thông tin chính thức dự án căn hộ Bcons Tam Hiệp (Bcons Central Park Biên Hòa). Cập nhật vị trí 236 Phan Trung, mặt bằng, bảng giá và chính sách ưu đãi mới nhất từ chủ đầu tư Tập đoàn Bcons.',
  keywords: [
    'bcons tam hiep',
    'bcons tam hiệp',
    'can ho bcons tam hiep',
    'căn hộ bcons tam hiệp',
    'bcons central park',
    'bcons central park tam hiệp',
    'bcons central park tam hiep',
    'can ho bcons central park',
    'căn hộ bcons central park',
    'dự án bcons central park',
    'du an bcons central park',
    'bcons central park biên hòa',
    'bcons central park bien hoa',
    'bcons phan trung',
    'bcons phan trung bien hoa',
    'bcons phan trung biên hòa',
    '236 phan trung',
    'can ho bcons phan trung',
    'căn hộ bcons phan trung',
    'chung cu bcons tam hiep',
    'chung cư bcons tam hiệp',
    'bcons bien hoa',
    'bcons biên hòa',
    'can ho bcons bien hoa',
    'căn hộ bcons biên hòa',
    'gia ban bcons tam hiep',
    'giá bán bcons tam hiệp',
    'bảng giá bcons central park',
    'bang gia bcons central park',
    'mat bang bcons tam hiep',
    'mặt bằng bcons tam hiệp',
    'mặt bằng bcons central park',
    'phap ly bcons tam hiep',
    'pháp lý bcons tam hiệp',
    'pháp lý bcons central park',
    'tien do bcons tam hiep',
    'tiến độ bcons tam hiệp',
    'tiến độ bcons central park',
    'chu dau tu bcons',
    'chủ đầu tư bcons',
    'tap doan bcons',
    'tập đoàn bcons',
    'bcons ps land',
    'du an bcons tam hiep',
    'dự án bcons tam hiệp',
    'le ngoc long bcons',
    'lê ngọc long bcons',
    'canhobconstamhiep.com',
    'www.canhobconstamhiep.com',
  ],
  authors: [{ name: 'Lê Ngọc Long', url: siteUrl }],
  creator: 'Lê Ngọc Long - Giám đốc Sàn Kinh Doanh Bcons PS Land',
  publisher: 'Tập đoàn Bcons (Bcons Group)',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://www.canhobconstamhiep.com',
  },
  openGraph: {
    title: 'Căn Hộ Bcons Tam Hiệp (Bcons Central Park) | Bảng Giá & Ưu Đãi CĐT',
    description:
      'Thông tin chính thức dự án căn hộ Bcons Tam Hiệp (Bcons Central Park Biên Hòa). Cập nhật vị trí 236 Phan Trung, mặt bằng, bảng giá và chính sách ưu đãi mới nhất từ chủ đầu tư Tập đoàn Bcons.',
    url: 'https://www.canhobconstamhiep.com',
    siteName: 'Căn Hộ Bcons Tam Hiệp (Bcons Central Park)',
    locale: 'vi_VN',
    type: 'website',
    images: [
      {
        url: '/images/hero-towers.png',
        width: 1200,
        height: 630,
        alt: 'Phối cảnh dự án Căn Hộ Bcons Tam Hiệp (Bcons Central Park)',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Căn Hộ Bcons Tam Hiệp (Bcons Central Park) | Bảng Giá & Ưu Đãi CĐT',
    description:
      'Thông tin chính thức dự án căn hộ Bcons Tam Hiệp (Bcons Central Park Biên Hòa). Cập nhật vị trí 236 Phan Trung, mặt bằng, bảng giá và chính sách ưu đãi mới nhất từ chủ đầu tư Tập đoàn Bcons.',
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
        <OrganizationSchema />
        <LocalBusinessSchema />
      </head>
      <body className="font-sans antialiased">
        <SitePreferencesProvider>
          {children}
        </SitePreferencesProvider>
      </body>
    </html>
  )
}
