import * as React from 'react'

export function RealEstateProjectSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ApartmentComplex',
    name: 'Căn Hộ Bcons Tam Hiệp (Bcons Central Park)',
    alternateName: [
      'Bcons Central Park',
      'Bcons Central Park Tam Hiệp',
      'Căn Hộ Bcons Tam Hiệp',
      'Bcons Tam Hiệp',
      'Bcons Phan Trung',
      'Bcons Biên Hòa',
      'Căn hộ Bcons Central Park',
      'Chung cư Bcons Tam Hiệp',
      'Chung cư Bcons Central Park',
    ],
    description:
      'Thông tin chính thức dự án căn hộ Bcons Tam Hiệp (Bcons Central Park Biên Hòa). Cập nhật vị trí 236 Phan Trung, mặt bằng, bảng giá và chính sách ưu đãi mới nhất từ chủ đầu tư Tập đoàn Bcons.',
    url: 'https://www.canhobconstamhiep.com',
    telephone: '+84376671776',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '236 Phan Trung',
      addressLocality: 'Tam Hiệp',
      addressRegion: 'Đồng Nai',
      postalCode: '810000',
      addressCountry: 'VN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 10.9576,
      longitude: 106.8427,
    },
    numberOfRooms: '2820',
    amenityFeature: [
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Công viên trung tâm 7.700m²',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Hồ bơi tràn bờ chuẩn Resort',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Shophouse thương mại khối đế',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Phòng tập Gym & Yoga hiện đại',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'An ninh đa lớp 24/7',
        value: true,
      },
    ],
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'VND',
      lowPrice: '1900000000',
      highPrice: '3800000000',
      offerCount: '2820',
    },
    founder: {
      '@type': 'Organization',
      name: 'Tập đoàn Bcons (Bcons Group)',
      url: 'https://bcons.com.vn',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function RealEstateAgentSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Lê Ngọc Long',
    jobTitle: 'Chuyên viên tư vấn dự án Căn Hộ Bcons Central Park Tam Hiệp',
    telephone: '+84376671776',
    email: 'longqt2701@gmail.com',
    url: 'https://www.canhobconstamhiep.com',
    image: 'https://www.canhobconstamhiep.com/images/manager_avt.jpg',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '236 Phan Trung',
      addressLocality: 'Phường Tam Hiệp',
      addressRegion: 'Đồng Nai',
      addressCountry: 'VN',
    },
    priceRange: '1.85 tỷ - 4.39 tỷ VND',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Tập đoàn Bcons (Bcons Group)',
    alternateName: ['Bcons Group', 'Tập đoàn Bcons', 'Bcons Central Park', 'Bcons Tam Hiệp'],
    url: 'https://www.canhobconstamhiep.com',
    logo: 'https://www.canhobconstamhiep.com/images/bcons-central-park-logo.png',
    description:
      'Tập đoàn Bcons — Chủ đầu tư và phát triển chuỗi dự án căn hộ chất lượng cao tại TP.HCM, Bình Dương và Đồng Nai với hơn 15 dự án đã bàn giao và trao sổ hồng.',
    founder: {
      '@type': 'Person',
      name: 'Lê Như Thạch',
    },
    foundingDate: '2013',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '176/1-176/3 Nguyễn Văn Thương, Phường 25, Quận Bình Thạnh',
      addressLocality: 'TP. Hồ Chí Minh',
      addressCountry: 'VN',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+84376671776',
        contactType: 'sales',
        areaServed: 'VN',
        availableLanguage: ['Vietnamese', 'English'],
      },
    ],
    sameAs: [
      'https://bcons.com.vn',
      'https://www.facebook.com/bconsofficial',
      'https://zalo.me/0376671776',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgency',
    name: 'Văn Phòng Tư Vấn Dự Án Bcons Central Park Tam Hiệp',
    alternateName: 'Văn Phòng Bcons Tam Hiệp 236 Phan Trung',
    image: 'https://www.canhobconstamhiep.com/images/bcons-central-park-tam-hiep-phoi-canh.webp',
    telephone: '+84376671776',
    email: 'longqt2701@gmail.com',
    url: 'https://www.canhobconstamhiep.com',
    priceRange: '1.85 tỷ - 4.39 tỷ VND',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '236 Phan Trung',
      addressLocality: 'Phường Tam Hiệp',
      addressRegion: 'Đồng Nai',
      postalCode: '810000',
      addressCountry: 'VN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 10.9576,
      longitude: 106.8427,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '08:00',
        closes: '20:00',
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function NewsArticleSchema({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
  authorName = 'Lê Ngọc Long',
  categoryLabel,
}: {
  title: string
  description: string
  url: string
  image: string
  datePublished?: string
  dateModified?: string
  authorName?: string
  categoryLabel?: string
}) {
  const baseUrl = 'https://www.canhobconstamhiep.com'
  const fullImageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`
  const fullUrl = url.startsWith('http') ? url : `${baseUrl}${url}`

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': fullUrl,
    },
    headline: title,
    description: description,
    image: [fullImageUrl],
    datePublished: datePublished || new Date().toISOString(),
    dateModified: dateModified || datePublished || new Date().toISOString(),
    author: {
      '@type': 'Person',
      name: authorName,
      jobTitle: 'Chuyên viên tư vấn dự án Bcons',
      url: baseUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Bcons Central Park Tam Hiệp',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/images/bcons-central-park-logo.png`,
      },
    },
    articleSection: categoryLabel,
    inLanguage: 'vi-VN',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function FAQSchema({ faqs }: { faqs: Array<{ question: string; answer: string }> }) {
  if (!faqs || faqs.length === 0) return null

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function BreadcrumbSchema({
  items,
}: {
  items: Array<{ name: string; url: string }>
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
