import * as React from 'react'

export function RealEstateProjectSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ApartmentComplex',
    name: 'Bcons Central Park Tam Hiệp',
    alternateName: ['Bcons Tam Hiệp', 'Bcons Phan Trung', 'Bcons Biên Hòa'],
    description:
      'Dự án căn hộ cao cấp và shophouse thương mại quy mô gần 3 ha tại 236 Phan Trung, Phường Tam Hiệp, TP. Biên Hòa, Đồng Nai do Tập đoàn Bcons phát triển.',
    url: 'https://canhobconstamhiep.com',
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
        name: 'Shophouse thương mại 113 căn',
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
      lowPrice: '2000000000',
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
    jobTitle: 'Chuyên viên tư vấn dự án Bcons Central Park Tam Hiệp',
    telephone: '+84376671776',
    email: 'longqt2701@gmail.com',
    url: 'https://canhobconstamhiep.com',
    image: 'https://canhobconstamhiep.com/images/cr7_goat.jpg',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '236 Phan Trung',
      addressLocality: 'Phường Tam Hiệp',
      addressRegion: 'Đồng Nai',
      addressCountry: 'VN',
    },
    priceRange: '2.0 tỷ - 3.8 tỷ VND',
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
