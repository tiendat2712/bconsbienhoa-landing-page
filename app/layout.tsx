import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Be_Vietnam_Pro } from 'next/font/google'
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

export const metadata: Metadata = {
  title: 'Bcons Central Park Tam Hiệp — Vị trí, mặt bằng, giá bán',
  description:
    'Căn hộ sở hữu lâu dài ngay lõi trung tâm Biên Hòa. Quỹ đất gần 3ha, không gian xanh nội khu lớn. Thông tin vị trí, tiện ích, mặt bằng, pháp lý và giá bán dự án Bcons Central Park Tam Hiệp.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F8FAFC' },
    { media: '(prefers-color-scheme: dark)', color: '#0F172A' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" className={`bg-background ${display.variable} ${body.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
