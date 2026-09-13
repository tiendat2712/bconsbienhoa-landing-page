/**
 * Centralized SEO Configuration & Utilities
 * Bcons Central Park Tam Hiệp (Biên Hòa, Đồng Nai)
 */

export const SITE_CONFIG = {
  defaultTitle: 'Căn Hộ Bcons Tam Hiệp (Bcons Central Park Biên Hòa) | Bảng Giá & Ưu Đãi CĐT',
  titleTemplate: '%s | Căn Hộ Bcons Tam Hiệp',
  siteName: 'Căn Hộ Bcons Tam Hiệp',
  projectName: 'Bcons Central Park Tam Hiệp',
  developer: 'Tập đoàn Bcons (Bcons Group)',
  consultant: 'Lê Ngọc Long',
  phone: '0376 671 776',
  phoneIntl: '+84376671776',
  email: 'longqt2701@gmail.com',
  address: '236 Phan Trung, Phường Tam Hiệp, TP. Biên Hòa, Tỉnh Đồng Nai',
  defaultOgImage: '/images/bcons-central-park-thumbnail.jpg',
  defaultDescription:
    'Thông tin chính thức dự án căn hộ Bcons Tam Hiệp (Bcons Central Park Biên Hòa). Cập nhật vị trí 236 Phan Trung, mặt bằng, bảng giá và chính sách ưu đãi mới nhất từ chủ đầu tư.',
  locale: 'vi_VN',
} as const

/**
 * Get preferred production base URL from environment or fallback
 */
export function getSiteUrl(): string {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL
  if (envUrl && envUrl.trim().length > 0) {
    return envUrl.replace(/\/+$/, '')
  }
  return 'https://www.canhobconstamhiep.com'
}

/**
 * Generate fully qualified canonical URL
 */
export function getCanonicalUrl(path: string = ''): string {
  const base = getSiteUrl()
  const cleanPath = path ? (path.startsWith('/') ? path : `/${path}`) : ''
  return `${base}${cleanPath}`
}
