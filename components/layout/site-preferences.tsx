'use client'

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'

export type Locale = 'vi' | 'en'
type Theme = 'light' | 'dark'

const copy = {
  vi: {
    nav: {
      overview: 'Tổng quan',
      location: 'Vị trí',
      amenities: 'Tiện ích',
      plans: 'Mặt bằng',
      legal: 'Pháp lý',
      showUnit: 'Nhà mẫu',
      pricing: 'Giá bán',
      details: 'Chi tiết',
      investor: 'Chủ đầu tư',
      progress: 'Tiến độ',
      news: 'Tin tức',
      consult: 'Nhận tư vấn ngay',
      main: 'Điều hướng chính',
      mobile: 'Điều hướng di động',
      open: 'Mở menu',
      close: 'Đóng menu',
      light: 'Dùng giao diện sáng',
      dark: 'Dùng giao diện tối',
      home: 'Trang chủ',
    },
    hero: {
      location: '236 Phan Trung, Tam Hiệp, Biên Hòa, Đồng Nai',
      title: 'Bcons Central Park Tam Hiệp',
      subtitle: 'Sống xanh giữa trung tâm Biên Hòa',
      description:
        'Căn hộ hiện đại sở hữu lâu dài và không gian thương mại ngay lõi trung tâm sầm uất Biên Hòa. Quỹ đất gần 3 ha với công viên xanh nội khu và hệ tiện ích hiện đại.',
      scale: 'Quy mô',
      scaleValue: 'Gần 3 ha',
      green: 'Công viên nội khu',
      greenValue: 'Không gian xanh lớn',
      ownership: 'Sở hữu',
      ownershipValue: 'Lâu dài',
      alias:
        'Dự án tại 236 Phan Trung là giải pháp an cư dài hạn và tích lũy tài sản, được phát triển bởi Tập đoàn Bcons.',
      register: 'Đăng ký tham quan',
      formTitle: 'Nhận thông tin dự án mới nhất',
      formDesc: 'Để lại số điện thoại, chuyên viên dự án sẽ liên hệ trong vòng 15 phút.',
      phone: 'Số điện thoại',
      placeholder: 'Số điện thoại của bạn',
      sent: 'Đã gửi thông tin',
      privacy: 'Thông tin của bạn được bảo mật và chỉ dùng để tư vấn dự án.',
      priceLabel: 'Giá tham khảo',
      price: 'Liên hệ cập nhật',
      viewPrice: 'Xem thông tin giá',
      imageAlt: 'Phối cảnh tổng thể dự án Bcons Central Park Tam Hiệp',
    },
    overview: {
      eyebrow: 'Tổng quan',
      title: 'Một chuẩn sống xanh giữa lõi trung tâm Biên Hòa',
      desc: 'Bcons Central Park Tam Hiệp kết hợp căn hộ sở hữu lâu dài, không gian thương mại và hệ tiện ích hiện đại trong một quần thể gần 3 ha.',
      facts: [
        ['Tên dự án', 'Bcons Central Park Tam Hiệp'],
        ['Vị trí', '236 Phan Trung, P. Tam Hiệp, TP. Biên Hòa'],
        ['Chủ đầu tư', 'Tập đoàn Bcons'],
        ['Quy mô', 'Gần 3 ha, 5 block căn hộ'],
        ['Loại hình', 'Căn hộ chung cư & Shophouse khối đế'],
        ['Pháp lý', 'Sổ hồng sở hữu lâu dài'],
      ],
      stats: [
        ['Block căn hộ', '5'],
        ['Sản phẩm', '~2.820'],
        ['Mật độ xây dựng', '30%'],
        ['Dự kiến bàn giao', 'Q2/2029'],
      ],
      imageAlt: 'Vị trí Bcons Central Park Tam Hiệp nhìn từ trên cao',
    },
    location: {
      eyebrow: 'Vị trí',
      title: 'Tâm điểm kết nối tại 236 Phan Trung',
      desc: 'Toạ lạc ngay trục đường sầm uất bậc nhất phường Tam Hiệp, dự án kết nối nhanh chóng đến các tiện ích thiết yếu và các trục giao thông huyết mạch của Biên Hòa.',
      address: '236 Phan Trung, Phường Tam Hiệp, TP. Biên Hòa, Đồng Nai',
      connections: [
        ['1 phút', 'Ra trục Phan Trung, kết nối Nguyễn Ái Quốc'],
        ['3 phút', 'Chợ Tam Hiệp, Vincom Plaza Biên Hòa'],
        ['5 phút', 'Bệnh viện Đa khoa Đồng Nai, BV Hoàn Mỹ'],
        ['7 phút', 'Trung tâm hành chính TP. Đồng Nai'],
        ['10 phút', 'KCN Amata, KCN Biên Hòa 2'],
        ['15 phút', 'Sân bay Biên Hòa, Lotte Mart'],
        ['30 phút', 'Sân bay quốc tế Long Thành (QL 51)'],
        ['45 phút', 'TP. Thủ Đức, TP.HCM qua Quốc lộ 1K'],
      ],
      nearby: [
        ['Chợ Tam Hiệp', '2 phút'],
        ['Vincom Biên Hòa', '5 phút'],
        ['Bệnh viện Đa khoa Đồng Nai', '7 phút'],
        ['KCN Amata', '10 phút'],
        ['Sân bay Long Thành', '35 phút'],
        ['TP. Hồ Chí Minh', '30 phút'],
      ],
      badge: 'Mặt tiền Phan Trung',
      viewDetail: 'Xem chi tiết vị trí',
      imageAlt: 'Bản đồ kết nối giao thông Bcons Central Park Tam Hiệp',
    },
    amenities: {
      eyebrow: 'Tiện ích',
      title: 'Hệ sinh thái tiện nghi cho chuẩn sống cân bằng',
      desc: 'Mỗi ngày tại Bcons Central Park là trải nghiệm thư thái với chuỗi tiện ích hoàn chỉnh từ hồ bơi, công viên xanh mát đến khu thương mại dịch vụ năng động.',
      quote: 'Không gian sống xanh mát ngay giữa lòng đô thị năng động',
      items: [
        ['Hồ bơi tràn bờ', 'Hồ bơi resort với khu tắm nắng thư giãn xanh mát.'],
        ['Công viên nội khu', 'Hơn 7.700 m² cảnh quan cây xanh và đường dạo bộ.'],
        ['Gym & Yoga', 'Phòng tập hiện đại trang bị máy móc cao cấp.'],
        ['Khu vui chơi trẻ em', 'Sân chơi và nhà trẻ an toàn ngay trong khuôn viên.'],
        ['Shophouse khối đế', '113 căn phục vụ mua sắm, ẩm thực và dịch vụ tiện lợi.'],
        ['Sinh hoạt cộng đồng', 'Sảnh sự kiện, khu BBQ ngoài trời kết nối cư dân.'],
        ['Hầm đỗ xe thông minh', 'Hầm rộng rãi, camera an ninh toàn khu.'],
        ['An ninh đa lớp 24/7', 'Hệ thống thẻ từ thang máy và bảo vệ túc trực.'],
      ],
      imageAlt: 'Phối cảnh hồ bơi và công viên nội khu Bcons Central Park',
    },
    plans: {
      eyebrow: 'Mặt bằng',
      title: 'Thiết kế thông minh, tối ưu công năng từng mét vuông',
      desc: 'Các căn hộ tại Bcons Central Park được bố trí vuông vức, đón gió và ánh sáng tự nhiên, đáp ứng nhu cầu an cư của gia đình trẻ đến đa thế hệ.',
      tabs: 'Mặt bằng',
      areaLabel: 'Diện tích',
      structureLabel: 'Cấu trúc',
      viewLabel: 'Tầm nhìn',
      imageAlt: 'Mặt bằng căn hộ Bcons Central Park Tam Hiệp',
      plans: [
        {
          id: '1pn',
          name: 'Căn hộ 1 Phòng ngủ',
          area: '43 – 45 m²',
          bed: '1 PN + 1 WC',
          view: 'Hướng công viên nội khu',
          note: 'Thiết kế mở, tối ưu ánh sáng tự nhiên, thích hợp cho người độc thân hoặc chuyên gia trẻ.',
        },
        {
          id: '2pn',
          name: 'Căn hộ 2 Phòng ngủ',
          area: '51 – 58 m²',
          bed: '2 PN + 2 WC',
          view: 'Hướng hồ bơi & thành phố',
          note: 'Loại hình căn hộ phổ biến nhất, bố trí hợp lý cho các gia đình trẻ từ 3 – 4 thành viên.',
        },
        {
          id: '3pn',
          name: 'Căn hộ 3 Phòng ngủ',
          area: '85 – 86 m²',
          bed: '3 PN + 2 WC',
          view: 'Góc 2 mặt thoáng view sông',
          note: 'Căn góc thoáng đãng với 2 mặt lấy sáng, dành cho gia đình đa thế hệ mong muốn không gian rộng rãi.',
        },
      ],
    },
    legal: {
      eyebrow: 'Pháp lý',
      title: 'Pháp lý minh bạch, vững tâm an cư',
      items: [
        {
          title: 'Quy hoạch 1/500',
          desc: 'Được phê duyệt quy hoạch chi tiết xây dựng tỷ lệ 1/500 theo quy định.',
        },
        {
          title: 'Giấy phép xây dựng',
          desc: 'Đầy đủ giấy phép xây dựng cho các block công trình theo tiêu chuẩn.',
        },
        {
          title: 'Sở hữu lâu dài',
          desc: 'Sổ hồng sở hữu lâu dài cho người Việt Nam, pháp lý hoàn chỉnh.',
        },
        {
          title: 'Bảo lãnh ngân hàng',
          desc: 'Ngân hàng đối tác bảo lãnh tiến độ và hỗ trợ vay vốn ưu đãi.',
        },
      ],
      investorEyebrow: 'Chủ đầu tư',
      investorTitle: 'Tập đoàn Bcons — Uy tín đã được khẳng định',
      investorDesc:
        'Với hơn 10 năm kinh nghiệm và chuỗi hơn 20 dự án căn hộ đã bàn giao đúng tiến độ tại khu vực Đông TP.HCM và Bình Dương, Tập đoàn Bcons tiếp tục khẳng định cam kết chất lượng tại Bcons Central Park Tam Hiệp.',
      progressEyebrow: 'Tiến độ',
      progressTitle: 'Cập nhật tiến độ thi công',
      progressDesc: 'Theo dõi các mốc triển khai thực tế của dự án Bcons Central Park Tam Hiệp.',
      timeline: [
        {
          period: '27/05/2026',
          phase: 'Khởi công dự án',
          desc: 'Chính thức khởi công xây dựng kết cấu 5 block căn hộ.',
        },
        {
          period: 'Quý II/2029',
          phase: 'Bàn giao căn hộ',
          desc: 'Bàn giao hoàn thiện cho cư dân kèm sổ hồng trong 6–12 tháng sau.',
        },
      ],
    },
    showUnit: {
      eyebrow: 'Nhà mẫu',
      badge: 'Mở cửa tham quan hằng ngày',
      title: 'Trải nghiệm không gian sống thực tế trước khi quyết định',
      desc: 'Nhà mẫu được dựng 1:1 theo tiêu chuẩn bàn giao thực tế, giúp bạn hình dung trọn vẹn ánh sáng, chiều cao trần và vật liệu hoàn thiện.',
      specs: [
        'Bàn giao hoàn thiện cơ bản, sơn nước cao cấp toàn bộ',
        'Sàn gạch bóng kiếng 60×60, trần thạch cao khu vực bếp & phòng khách',
        'Thiết bị vệ sinh Inax/American Standard, cửa chính chống cháy',
        'Hệ thống điện âm tường, chờ sẵn điều hòa không khí các phòng',
      ],
      cta: 'Đặt lịch tham quan nhà mẫu',
      imageAlt: 'Phòng khách nhà mẫu Bcons Central Park Tam Hiệp',
    },
    pricing: {
      eyebrow: 'GIÁ BÁN',
      title: 'Giá bán Bcons Central Park dự kiến từ 1,9 tỷ đồng',
      desc: 'Mức giá cạnh tranh bậc nhất phân khúc căn hộ trung tâm Biên Hòa, cùng nhiều gói hỗ trợ tài chính tối ưu dòng tiền cho người mua.',
      productLabel: 'LOẠI CĂN HỘ',
      areaLabel: 'DIỆN TÍCH',
      priceLabel: 'GIÁ DỰ KIẾN',
      viewDetail: 'Xem chi tiết giá bán và chính sách thanh toán',
      rows: [
        { type: 'Studio', area: '37 – 40 m²', price: '1,9 – 2,0 tỷ đồng' },
        { type: '1 Phòng ngủ', area: '42 – 43 m²', price: '2,0 – 2,3 tỷ đồng' },
        { type: '2 Phòng ngủ', area: '53 – 73 m²', price: '2,5 – 2,8 tỷ đồng' },
        { type: '3 Phòng ngủ', area: '87 – 88 m²', price: '3,4 – 3,8 tỷ đồng' },
      ],
      priceNote: 'Mức giá chỉ mang tính tham khảo và có thể thay đổi theo chính sách, tầng, hướng view và thời điểm công bố chính thức từ chủ đầu tư.',
      policyEyebrow: 'Chính sách ưu đãi',
      policyTitle: 'Phương thức thanh toán & ưu đãi',
      policies: [
        'Thanh toán chia nhỏ theo tiến độ xây dựng, mỗi đợt dự kiến 2–5% giá trị căn hộ',
        'Ngân hàng đối tác hỗ trợ vay đến 70% giá trị căn hộ',
        'Chính sách ân hạn nợ gốc, hỗ trợ lãi suất giai đoạn xây dựng (chờ công bố chính thức)',
        'Chiết khấu thêm cho khách hàng thanh toán nhanh vượt tiến độ',
      ],
      cta: 'Nhận bảng tính dòng tiền chi tiết',
    },
    financeTool: {
      eyebrow: 'CÔNG CỤ TÀI CHÍNH',
      title: 'Tính thử dòng tiền & Kế hoạch trả góp',
      desc: 'Công cụ ước tính mang tính minh họa, dựa trên lãi suất bạn nhập vào — không phải chào vay chính thức từ ngân hàng. Vui lòng liên hệ để nhận bảng tính chi tiết theo chính sách hiện hành.',
      priceLabel: 'Giá căn hộ (VNĐ)',
      downPaymentLabel: 'Vốn tự có (VNĐ)',
      interestRateLabel: 'Lãi suất ước tính (%/năm)',
      loanTermLabel: 'Thời hạn vay (năm)',
      loanAmountTitle: 'KHOẢN VAY ƯỚC TÍNH',
      monthlyPaymentTitle: 'ƯỚC TÍNH THANH TOÁN HÀNG THÁNG',
      principalTitle: 'Tiền gốc hàng tháng',
      firstInterestTitle: 'Tiền lãi tháng đầu',
      monthUnit: '/ tháng',
      calcNote: '*Ước tính theo dư nợ giảm dần, chỉ mang tính minh họa.',
      ctaBtn: 'Nhận bảng tính dòng tiền chi tiết',
      presets: {
        studio: 'Studio (1.9 tỷ)',
        twoBed: '2PN (2.5 tỷ)',
        threeBed: '3PN (3.8 tỷ)',
        dp15: '15% (375 tr)',
        dp30: '30% (750 tr)',
        dp50: '50% (1.25 tỷ)',
        year10: '10 năm',
        year15: '15 năm',
        year20: '20 năm',
        year25: '25 năm',
      },
    },
    news: {
      eyebrow: 'Tin tức',
      title: 'Tin tức & sự kiện dự án',
      readMore: 'Xem chi tiết',
      posts: [
        {
          title: 'Biên Hòa đón làn sóng đầu tư căn hộ trung tâm',
          date: '19/08/2026',
          tag: 'Thị trường',
          image: '/images/interior-living.png',
        },
        {
          title: 'Kinh nghiệm mua căn hộ hình thành trong tương lai',
          date: '10/08/2026',
          tag: 'Pháp lý',
          image: '/images/hero-towers.png',
        },
        {
          title: 'So sánh vị trí Tam Hiệp với các khu vực lân cận Biên Hòa',
          date: '05/08/2026',
          tag: 'Vị trí',
          image: '/images/aerial-location.png',
        },
      ],
    },
    contact: {
      eyebrow: 'Tư vấn trực tiếp',
      title: 'Đăng ký tư vấn & nhận báo giá',
      desc: 'Để lại thông tin để nhận bảng giá chi tiết, mặt bằng từng căn và chính sách ưu đãi mới nhất từ Tập đoàn Bcons.',
      formTitle: 'ĐĂNG KÝ TƯ VẤN DỰ ÁN',
      formDesc: 'Chuyên viên dự án sẽ liên hệ lại trong vòng 15 phút.',
      name: 'Họ và tên',
      namePlaceholder: 'Nguyễn Văn A',
      phone: 'Số điện thoại',
      phonePlaceholder: '0901 234 567',
      type: 'Loại căn quan tâm',
      typeOptions: [
        { value: 'studio', label: 'Căn hộ Studio', desc: 'Diện tích 37 – 40 m²' },
        { value: '1pn', label: '1 phòng ngủ', desc: 'Diện tích 42 – 43 m²' },
        { value: '2pn', label: '2 phòng ngủ', desc: 'Diện tích 53 – 73 m²' },
        { value: '3pn', label: '3 phòng ngủ', desc: 'Diện tích 87 – 88 m²' },
      ],
      note: 'Ghi chú (nếu có)',
      notePlaceholder: 'Ví dụ: Cần căn tầng cao, hướng công viên...',
      submit: 'GỬI YÊU CẦU TƯ VẤN',
      submitting: 'Đang gửi thông tin...',
      successTitle: 'Đăng ký tư vấn thành công!',
      successDesc: 'Cảm ơn quý khách đã quan tâm. Chuyên viên Lê Ngọc Long sẽ liên hệ lại trong vòng 15 phút.',
      sendAnother: 'Gửi yêu cầu khác',
      privacyNote: 'Thông tin của bạn được bảo mật tuyệt đối và chỉ dùng để tư vấn dự án Bcons Central Park.',
      consultantBadge: 'Chuyên viên tư vấn dự án',
      consultantName: 'Lê Ngọc Long',
      consultantRole: 'Tư vấn chính thức Bcons Central Park Tam Hiệp',
      consultantPromise: 'Cam kết cung cấp thông tin chính xác, bảng giá trực tiếp chủ đầu tư và tư vấn giải pháp vay ngân hàng tối ưu nhất.',
      consultantSupport: 'Phục vụ 24/7 — Hỗ trợ xem nhà mẫu thực tế và phân tích dòng tiền chuyên sâu.',
      hotlineLabel: 'Hotline tư vấn',
      zaloLabel: 'Chat Zalo',
      facebookLabel: 'Fanpage dự án',
      addressLabel: 'Địa chỉ tư vấn',
      scanQrTitle: 'QUÉT MÃ ZALO',
      scanQrDesc: 'Kết nối nhanh với chuyên viên Lê Ngọc Long',
      orConnectVia: 'HOẶC KẾT NỐI QUA',
      meetAtShowUnit: 'Gặp trực tiếp tại nhà mẫu',
    },
    floating: {
      facebook: 'Fanpage Bcons Central Park',
      zalo: 'Chat Zalo Lê Ngọc Long',
      phone: 'Hotline 0376 671 776',
    },
    footer: {
      consultantIntro:
        'Tôi là Lê Ngọc Long, chuyên viên tư vấn bất động sản. Đây là trang tôi biên soạn về dự án Bcons Central Park Tam Hiệp — còn được gọi là Bcons Tam Hiệp, Bcons Phan Trung, Bcons Biên Hòa.',
      updateNote: 'Thông tin dự án được cập nhật trực tiếp theo công bố chính thức từ chủ đầu tư.',
      address: '236 Phan Trung, Phường Tam Hiệp, Thành phố Đồng Nai (khu vực TP. Biên Hòa cũ)',
      projectDetails: 'CHI TIẾT DỰ ÁN',
      contactConsult: 'LIÊN HỆ TƯ VẤN',
      hotline: 'Hotline',
      zalo: 'Zalo',
      chatDirect: 'Chat trực tiếp',
      facebook: 'Facebook',
      fanpage: 'Fanpage dự án',
      scanQr: 'Quét QR để chat Zalo',
      copyright: '© 2026 Bcons Central Park Tam Hiệp',
      disclaimer: 'Thông tin có thể thay đổi theo công bố chính thức từ chủ đầu tư.',
    },
    related: {
      title: 'Xem thêm về Bcons Central Park Tam Hiệp',
      desc: 'Khám phá các chuyên mục liên quan để tìm hiểu chi tiết trước khi đưa ra quyết định.',
      allCategories: 'Toàn bộ chuyên mục Bcons Central Park',
      kind: 'Chi tiết dự án',
    },
  },
  en: {
    nav: {
      overview: 'Overview',
      location: 'Location',
      amenities: 'Amenities',
      plans: 'Floor Plans',
      legal: 'Legal',
      showUnit: 'Show Unit',
      pricing: 'Pricing',
      details: 'Details',
      investor: 'Developer',
      progress: 'Progress',
      news: 'News',
      consult: 'Consult Now',
      main: 'Main navigation',
      mobile: 'Mobile navigation',
      open: 'Open menu',
      close: 'Close menu',
      light: 'Switch to light mode',
      dark: 'Switch to dark mode',
      home: 'Home',
    },
    hero: {
      location: '236 Phan Trung, Tam Hiep, Bien Hoa, Dong Nai',
      title: 'Bcons Central Park Tam Hiep',
      subtitle: 'Green Living in Central Bien Hoa',
      description:
        'Modern long-term ownership apartments and commercial spaces in the prime center of Bien Hoa. Nearly 3 ha land parcel with expansive central park and complete amenities.',
      scale: 'Scale',
      scaleValue: 'Nearly 3 ha',
      green: 'Central Park',
      greenValue: 'Expansive greenery',
      ownership: 'Ownership',
      ownershipValue: 'Long-term',
      alias:
        'The project at 236 Phan Trung provides a long-term residential and wealth-building solution, developed by Bcons Group.',
      register: 'Book a tour',
      formTitle: 'Get the latest project updates',
      formDesc: 'Leave your phone number, our project specialist will contact you within 15 minutes.',
      phone: 'Phone number',
      placeholder: 'Your phone number',
      sent: 'Information sent',
      privacy: 'Your information is confidential and used only for project consultation.',
      priceLabel: 'Starting from',
      price: 'Contact for updates',
      viewPrice: 'View price info',
      imageAlt: 'Overall master perspective of Bcons Central Park Tam Hiep',
    },
    overview: {
      eyebrow: 'Overview',
      title: 'A Green Living Standard in Central Bien Hoa',
      desc: 'Bcons Central Park Tam Hiep integrates long-term ownership residences, commercial street spaces and modern lifestyle amenities within nearly 3 hectares.',
      facts: [
        ['Project Name', 'Bcons Central Park Tam Hiep'],
        ['Location', '236 Phan Trung, Tam Hiep, Bien Hoa City'],
        ['Developer', 'Bcons Group'],
        ['Scale', 'Nearly 3 ha, 5 apartment blocks'],
        ['Type', 'Condominiums & Podium Shophouses'],
        ['Tenure', 'Long-term freehold for Vietnamese citizens'],
      ],
      stats: [
        ['Blocks', '5'],
        ['Units', '~2,820'],
        ['Building Density', '30%'],
        ['Handover Est.', 'Q2/2029'],
      ],
      imageAlt: 'Aerial view of Bcons Central Park Tam Hiep',
    },
    location: {
      eyebrow: 'Location',
      title: 'Strategic Hub at 236 Phan Trung',
      desc: 'Located directly on the most vibrant commercial axis in Tam Hiep, the project connects swiftly to key amenities and major regional transit routes.',
      address: '236 Phan Trung, Tam Hiep Ward, Bien Hoa City, Dong Nai',
      connections: [
        ['1 min', 'Direct access to Phan Trung, Nguyen Ai Quoc'],
        ['3 mins', 'Tam Hiep Market, Vincom Plaza Bien Hoa'],
        ['5 mins', 'Dong Nai General Hospital, Hoan My Hospital'],
        ['7 mins', 'Dong Nai City Administrative Center'],
        ['10 mins', 'Amata Industrial Park, Bien Hoa 2 IP'],
        ['15 mins', 'Bien Hoa Airport, Lotte Mart'],
        ['30 mins', 'Long Thanh Int. Airport (QL 51)'],
        ['45 mins', 'Thu Duc City, HCMC via QL 1K'],
      ],
      nearby: [
        ['Tam Hiep Market', '2 mins'],
        ['Vincom Bien Hoa', '5 mins'],
        ['Dong Nai General Hospital', '7 mins'],
        ['Amata Industrial Park', '10 mins'],
        ['Long Thanh Int. Airport', '35 mins'],
        ['Ho Chi Minh City', '30 mins'],
      ],
      badge: 'Phan Trung Frontage',
      viewDetail: 'Explore location details',
      imageAlt: 'Transit connectivity map of Bcons Central Park Tam Hiep',
    },
    amenities: {
      eyebrow: 'Amenities',
      title: 'Complete Ecosystem for a Balanced Lifestyle',
      desc: 'Every day at Bcons Central Park offers a resort-like retreat with an infinity pool, lush landscaped grounds and active retail promenade.',
      quote: 'Lush greenery and balanced living in the heart of the city',
      items: [
        ['Infinity Pool', 'Resort-style pool with sunbathing deck and lush greenery.'],
        ['Internal Park', 'Over 7,700 sqm of landscaped grounds and walking promenades.'],
        ['Gym & Yoga', 'Modern fitness and yoga studio with premium equipment.'],
        ['Kids Playground', 'Safe and joyful play area within the gated compound.'],
        ['Podium Shophouses', '113 units for dining, shopping, and everyday convenience on-site.'],
        ['Community Center', 'Event hall and outdoor BBQ area connecting residents.'],
        ['Smart Basement Parking', 'Spacious basement levels with round-the-clock CCTV.'],
        ['Multi-Layer 24/7 Security', 'Keycard elevator access and dedicated patrol guards.'],
      ],
      imageAlt: 'Perspective of infinity pool and central park at Bcons Central Park',
    },
    plans: {
      eyebrow: 'Floor Plans',
      title: 'Smart Layouts Maximizing Every Square Meter',
      desc: 'Homes at Bcons Central Park are thoughtfully designed to invite natural airflow and sunlight, catering to modern singles, young couples and multi-gen families.',
      tabs: 'Floor Plans',
      areaLabel: 'Area',
      structureLabel: 'Layout',
      viewLabel: 'View',
      imageAlt: 'Floor plan of Bcons Central Park Tam Hiep',
      plans: [
        {
          id: '1pn',
          name: '1-Bedroom Apartment',
          area: '43 – 45 sqm',
          bed: '1 Bed + 1 Bath',
          view: 'Internal park view',
          note: 'Open-concept layout maximizing natural daylight, ideal for singles and young professionals.',
        },
        {
          id: '2pn',
          name: '2-Bedroom Apartment',
          area: '51 – 58 sqm',
          bed: '2 Bed + 2 Bath',
          view: 'Pool & city panorama',
          note: 'The most sought-after unit type, perfectly balanced for families with 3–4 members.',
        },
        {
          id: '3pn',
          name: '3-Bedroom Apartment',
          area: '85 – 86 sqm',
          bed: '3 Bed + 2 Bath',
          view: 'Corner unit with dual river view',
          note: 'Spacious dual-aspect corner home for multi-generational families seeking grander living spaces.',
        },
      ],
    },
    legal: {
      eyebrow: 'Legal',
      title: 'Transparent Legal Foundation for Peace of Mind',
      items: [
        {
          title: '1/500 Detailed Plan',
          desc: 'Full regulatory approval for the 1/500 detailed master plan.',
        },
        {
          title: 'Construction Permit',
          desc: 'Comprehensive construction permits issued for all blocks.',
        },
        {
          title: 'Long-Term Ownership',
          desc: 'Freehold certificate for Vietnamese buyers with full legal compliance.',
        },
        {
          title: 'Bank Guarantee',
          desc: 'Partner banks guarantee development milestones and offer home loan packages.',
        },
      ],
      investorEyebrow: 'Developer',
      investorTitle: 'Bcons Group — Proven Track Record of Excellence',
      investorDesc:
        'With over a decade of real estate development experience and 20+ residential projects delivered on time in East HCMC and Binh Duong, Bcons Group continues its commitment to quality at Bcons Central Park Tam Hiep.',
      progressEyebrow: 'Progress',
      progressTitle: 'Construction Milestones',
      progressDesc: 'Track actual development progress at Bcons Central Park Tam Hiep.',
      timeline: [
        {
          period: '27/05/2026',
          phase: 'Project Groundbreaking',
          desc: 'Official groundbreaking for the structural construction of 5 blocks.',
        },
        {
          period: 'Q2/2029',
          phase: 'Home Handover',
          desc: 'Final handover to residents with ownership books delivered within 6–12 months.',
        },
      ],
    },
    showUnit: {
      eyebrow: 'Show Unit',
      badge: 'Open Daily for Visits',
      title: 'Experience Your Future Living Space Before Deciding',
      desc: 'The model home is built 1:1 according to actual handover specifications, giving you a tangible sense of light, ceiling height, and finishes.',
      specs: [
        'Basic handover finish with premium wall painting throughout',
        '60×60 porcelain floor tiles and gypsum ceilings in living & kitchen areas',
        'Inax / American Standard sanitary fixtures and fire-rated main door',
        'Concealed electrical lines and pre-installed air conditioning connections',
      ],
      cta: 'Book a Show Unit Tour',
      imageAlt: 'Living room of Bcons Central Park Tam Hiep show unit',
    },
    pricing: {
      eyebrow: 'PRICING',
      title: 'Expected Bcons Central Park Prices from 1.9 Billion VND',
      desc: 'The most competitive pricing in central Bien Hoa condominium market, paired with financial packages optimizing your cash flow.',
      productLabel: 'UNIT TYPE',
      areaLabel: 'AREA',
      priceLabel: 'ESTIMATED PRICE',
      viewDetail: 'View detailed pricing and payment policies',
      rows: [
        { type: 'Studio', area: '37 – 40 sqm', price: '1.9 – 2.0 Billion VND' },
        { type: '1-Bedroom', area: '42 – 43 sqm', price: '2.0 – 2.3 Billion VND' },
        { type: '2-Bedroom', area: '53 – 73 sqm', price: '2.5 – 2.8 Billion VND' },
        { type: '3-Bedroom', area: '87 – 88 sqm', price: '3.4 – 3.8 Billion VND' },
      ],
      priceNote: 'Prices are indicative and subject to change based on policy, floor, view, and official developer announcement.',
      policyEyebrow: 'Promotions',
      policyTitle: 'Payment Methods & Incentives',
      policies: [
        'Flexible installments following construction progress, approx. 2–5% per installment',
        'Partner banks support loan packages up to 70% of apartment value',
        'Principal grace period & preferential interest rate during construction (pending official notice)',
        'Additional discounts for early payment schedules ahead of progress',
      ],
      cta: 'Get Detailed Cashflow Plan',
    },
    financeTool: {
      eyebrow: 'FINANCIAL CALCULATOR',
      title: 'Estimate Cash Flow & Installment Plan',
      desc: 'This calculator is for illustrative purposes based on your input interest rate — not an official loan commitment from banks. Please contact us to receive an exact quotation under current policies.',
      priceLabel: 'Apartment Price (VND)',
      downPaymentLabel: 'Self-Funded Capital (VND)',
      interestRateLabel: 'Estimated Interest Rate (%/year)',
      loanTermLabel: 'Loan Term (years)',
      loanAmountTitle: 'ESTIMATED LOAN AMOUNT',
      monthlyPaymentTitle: 'ESTIMATED MONTHLY PAYMENT',
      principalTitle: 'Monthly Principal',
      firstInterestTitle: 'First Month Interest',
      monthUnit: '/ month',
      calcNote: '*Estimated on amortized declining balance, for illustration only.',
      ctaBtn: 'Get Detailed Financial Plan',
      presets: {
        studio: 'Studio (1.9 B)',
        twoBed: '2BR (2.5 B)',
        threeBed: '3BR (3.8 B)',
        dp15: '15% (375 M)',
        dp30: '30% (750 M)',
        dp50: '50% (1.25 B)',
        year10: '10 yrs',
        year15: '15 yrs',
        year20: '20 yrs',
        year25: '25 yrs',
      },
    },
    news: {
      eyebrow: 'News',
      title: 'Latest News & Project Updates',
      readMore: 'Read more',
      posts: [
        {
          title: 'Bien Hoa welcomes new wave of central condominium investments',
          date: '19/08/2026',
          tag: 'Market',
          image: '/images/interior-living.png',
        },
        {
          title: 'Essential checklist when purchasing future off-plan apartments',
          date: '10/08/2026',
          tag: 'Legal',
          image: '/images/hero-towers.png',
        },
        {
          title: 'Comparing Tam Hiep location with adjacent Bien Hoa areas',
          date: '05/08/2026',
          tag: 'Location',
          image: '/images/aerial-location.png',
        },
      ],
    },
    contact: {
      eyebrow: 'Direct Consultation',
      title: 'Register for Consultation & Price Quote',
      desc: 'Leave your details to receive comprehensive price sheets, floor plans and latest promotional schemes directly from Bcons Group.',
      formTitle: 'PROJECT CONSULTATION REGISTRATION',
      formDesc: 'Our project specialist will reach out within 15 minutes.',
      name: 'Full Name',
      namePlaceholder: 'John Doe',
      phone: 'Phone Number',
      phonePlaceholder: '+84 901 234 567',
      type: 'Preferred Unit Type',
      typeOptions: [
        { value: 'studio', label: 'Studio Apartment', desc: 'Area 37 – 40 sqm' },
        { value: '1pn', label: '1-Bedroom', desc: 'Area 42 – 43 sqm' },
        { value: '2pn', label: '2-Bedroom', desc: 'Area 53 – 73 sqm' },
        { value: '3pn', label: '3-Bedroom', desc: 'Area 87 – 88 sqm' },
      ],
      note: 'Notes (Optional)',
      notePlaceholder: 'E.g., High-floor preference, park view...',
      submit: 'SUBMIT INQUIRY',
      submitting: 'Sending information...',
      successTitle: 'Inquiry Submitted Successfully!',
      successDesc: 'Thank you for your interest. Specialist Le Ngoc Long will contact you within 15 minutes.',
      sendAnother: 'Send another request',
      privacyNote: 'Your information is strictly protected and used solely for Bcons Central Park consultation.',
      consultantBadge: 'Project Property Consultant',
      consultantName: 'Le Ngoc Long',
      consultantRole: 'Official Consultant for Bcons Central Park Tam Hiep',
      consultantPromise: 'Committed to authentic developer pricing, accurate legal information, and optimized mortgage assistance.',
      consultantSupport: '24/7 Availability — On-site show unit tour assistance and tailored cashflow analysis.',
      hotlineLabel: 'Hotline Support',
      zaloLabel: 'Zalo Chat',
      facebookLabel: 'Project Fanpage',
      addressLabel: 'Consultation Address',
      scanQrTitle: 'SCAN ZALO QR',
      scanQrDesc: 'Connect instantly with specialist Le Ngoc Long',
      orConnectVia: 'OR CONNECT VIA',
      meetAtShowUnit: 'Meet directly at the show unit',
    },
    floating: {
      facebook: 'Fanpage Bcons Central Park',
      zalo: 'Chat Zalo Le Ngoc Long',
      phone: 'Hotline 0376 671 776',
    },
    footer: {
      consultantIntro:
        'I am Le Ngoc Long, property consultant. This page is dedicated to Bcons Central Park Tam Hiep — also known as Bcons Tam Hiep, Bcons Phan Trung, Bcons Bien Hoa.',
      updateNote: 'Project details are updated directly according to official developer announcements.',
      address: '236 Phan Trung, Tam Hiep Ward, Dong Nai City (formerly Bien Hoa City)',
      projectDetails: 'PROJECT DETAILS',
      contactConsult: 'CONSULTATION & SUPPORT',
      hotline: 'Hotline',
      zalo: 'Zalo',
      chatDirect: 'Chat directly',
      facebook: 'Facebook',
      fanpage: 'Project Fanpage',
      scanQr: 'Scan QR to chat on Zalo',
      copyright: '© 2026 Bcons Central Park Tam Hiep',
      disclaimer: 'Information is subject to change per official developer announcements.',
    },
    related: {
      title: 'Explore More About Bcons Central Park Tam Hiep',
      desc: 'Discover related project aspects to make an informed residential or investment decision.',
      allCategories: 'All Bcons Central Park Categories',
      kind: 'Project Detail',
    },
  },
} as const

type SiteContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  theme: Theme
  toggleTheme: () => void
  t: (typeof copy)[Locale]
}

const SiteContext = createContext<SiteContextValue | null>(null)

export function SitePreferencesProvider({ children }: { children: ReactNode }) {
  const existing = useContext(SiteContext)
  if (existing) {
    return <>{children}</>
  }

  return <SitePreferencesProviderInternal>{children}</SitePreferencesProviderInternal>
}

function SitePreferencesProviderInternal({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('vi')
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    const savedLocale = localStorage.getItem('bcons-locale') as Locale | null
    const savedTheme = localStorage.getItem('bcons-theme') as Theme | null
    if (savedLocale === 'vi' || savedLocale === 'en') setLocaleState(savedLocale)
    
    const isDark = savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
    const activeTheme: Theme = isDark ? 'dark' : 'light'
    setTheme(activeTheme)
    document.documentElement.classList.toggle('dark', isDark)
  }, [])

  const setLocale = (next: Locale) => {
    setLocaleState(next)
    localStorage.setItem('bcons-locale', next)
    document.documentElement.lang = next
  }

  const toggleTheme = () =>
    setTheme((current) => {
      const next: Theme = current === 'light' ? 'dark' : 'light'
      localStorage.setItem('bcons-theme', next)
      document.documentElement.classList.toggle('dark', next === 'dark')
      return next
    })

  const value = useMemo(
    () => ({ locale, setLocale, theme, toggleTheme, t: copy[locale] }),
    [locale, theme]
  )

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>
}

export function useSitePreferences() {
  const context = useContext(SiteContext)
  if (!context) throw new Error('useSitePreferences must be used inside SitePreferencesProvider')
  return context
}
