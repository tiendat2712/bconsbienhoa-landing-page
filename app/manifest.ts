import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Căn Hộ Bcons Tam Hiệp (Bcons Central Park)',
    short_name: 'Bcons Central Park',
    description: 'Thông tin chính thức dự án căn hộ Bcons Tam Hiệp (Bcons Central Park Biên Hòa)',
    start_url: '/',
    display: 'standalone',
    background_color: '#07130f',
    theme_color: '#07130f',
    icons: [
      {
        src: '/images/bcons-central-park-logo.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/images/bcons-central-park-logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
