import * as React from 'react'

export function RealEstateProjectSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ApartmentComplex',
    name: 'Căn Hộ Bcons Tam Hiệp',
    alternateName: [
      'Bacons Tam Hiệp',
      'Bcons Central Park Tam Hiệp',
      'Bcons Tam Hiệp',
      'Bcons Phan Trung',
      'Bcons Biên Hòa',
      'Căn hộ Bacons Tam Hiệp',
      'Chung cư Bcons Tam Hiệp',
    ],
    description:
      'Thông tin chính thức dự án căn hộ Bcons Tam Hiệp (Bacons Tam Hiệp Biên Hòa). Cập nhật vị trí 236 Phan Trung, mặt bằng, bảng giá và chính sách ưu đãi mới nhất từ chủ đầu tư Tập đoàn Bcons.',
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
    jobTitle: 'Chuyên viên tư vấn dự án Căn Hộ Bcons Tam Hiệp',
    telephone: '+84376671776',
    email: 'longqt2701@gmail.com',
    url: 'https://www.canhobconstamhiep.com',
    image: 'https://www.canhobconstamhiep.com/images/cr7_goat.jpg',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '236 Phan Trung',
      addressLocality: 'Phường Tam Hiệp',
      addressRegion: 'Đồng Nai',
      addressCountry: 'VN',
    },
    priceRange: '1.9 tỷ - 3.8 tỷ VND',
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
