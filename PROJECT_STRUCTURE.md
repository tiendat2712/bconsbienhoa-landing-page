# 🏢 CẤU TRÚC DỰ ÁN (PROJECT STRUCTURE) - BCONS CENTRAL PARK

> **Quy ước:** Tài liệu này phản ánh chính xác cấu trúc toàn bộ mã nguồn của dự án (đồng bộ với folder `bcons-central-park-landing-page`). Mỗi khi có file/thư mục mới được tạo, tài liệu này sẽ được tự động đồng bộ và cập nhật.

---

## 🌳 Sơ đồ cấu trúc thư mục tổng thể

```text
real-estate-landing/
├── app/
│   ├── favicon.ico                      # Favicon biểu tượng website
│   ├── globals.css                      # Định nghĩa CSS toàn cục, OKLCH theme colors & Tailwind v4
│   ├── layout.tsx                       # Root Layout (Google Fonts: Playfair Display + Be Vietnam Pro)
│   └── page.tsx                         # Trang chủ chính ghép nối các section hoàn chỉnh
│
├── components/                          # Toàn bộ components giao diện của Landing Page
│   ├── ui/                              # Cụm UI primitives (Shadcn UI & Base UI)
│   │   ├── accordion.tsx                # Accordion xổ dọc (hỗ trợ FAQ, pháp lý)
│   │   ├── button.tsx                   # Nút bấm chuẩn thiết kế nhiều biến thể
│   │   ├── input.tsx                    # Ô nhập liệu form
│   │   ├── label.tsx                    # Nhãn form input
│   │   └── tabs.tsx                     # Component chuyển tab mượt mà
│   │
│   ├── site-header.tsx                  # Thanh Menu Header, điều hướng neo trang & Mobile Drawer
│   ├── hero.tsx                         # Section 1: Hero Banner mở đầu, CTA chính & Hotline
│   ├── overview.tsx                     # Section 2: Tổng quan dự án Bcons Central Park Tam Hiệp
│   ├── location.tsx                     # Section 3: Vị trí tâm điểm kết nối & bản đồ hạ tầng
│   ├── amenities.tsx                    # Section 4: Hệ thống tiện ích nội khu đẳng cấp (Hồ bơi, Công viên)
│   ├── floor-plans.tsx                  # Section 5: Mặt bằng tầng & căn hộ điển hình
│   ├── show-unit.tsx                    # Section 6: Không gian thực tế nhà mẫu & thư viện phối cảnh
│   ├── pricing.tsx                      # Section 7: Bảng giá, chính sách bán hàng & tiến độ thanh toán
│   ├── legal-progress.tsx               # Section 8: Tiến độ thi công & pháp lý dự án (1/500, GPXD)
│   ├── news.tsx                         # Section 9: Tin tức, đánh giá thị trường & cẩm nang mua nhà
│   ├── contact.tsx                      # Section 10: Form đăng ký tư vấn 1:1 & nhận bảng giá gốc
│   ├── site-footer.tsx                  # Chân trang, thông tin chuyên viên tư vấn & bản quyền
│   ├── floating-contact.tsx             # Nút bấm liên hệ nổi (Zalo, Hotline, Messenger)
│   ├── site-preferences.tsx             # Bộ quản lý Theme & Tùy biến ngữ cảnh trang
│   └── reveal.tsx                       # Hiệu ứng chuyển động xuất hiện (Framer Motion / Reveal)
│
├── lib/
│   └── utils.ts                         # Hàm tiện ích xử lý classNames (clsx + twMerge)
│
├── public/                              # Tài nguyên tĩnh, hình ảnh & icons
│   ├── images/                          # Hình ảnh dự án Bcons Central Park độ phân giải cao
│   │   ├── hero-towers.png              # Phối cảnh tháp căn hộ Hero Banner
│   │   ├── location-map.jpg             # Bản đồ vị trí kết nối vùng Phan Trung - Tam Hiệp
│   │   ├── aerial-location.png          # Phối cảnh toàn cảnh trên cao
│   │   ├── amenity-pool.png             # Phối cảnh hồ bơi điện phân muối
│   │   ├── floorplan.png                # Bản vẽ thiết kế mặt bằng căn hộ
│   │   ├── interior-living.png          # Phối cảnh nội thất phòng khách nhà mẫu
│   │   ├── project-campaign.jpg         # Poster chiến dịch mở bán
│   │   ├── project-pool.jpg             # Ảnh tiện ích hồ bơi
│   │   ├── project-towers.jpg           # Ảnh tổng thể các block căn hộ
│   │   ├── amenities/                   # Thư mục ảnh tiện ích phụ
│   │   └── uploads/                     # Thư mục nhận thêm ảnh mới (.jpg, .png)
│   │
│   ├── apple-icon.png                   # Apple touch icon
│   ├── icon.svg                         # Vector icon
│   ├── icon-light-32x32.png             # Favicon theme sáng
│   └── icon-dark-32x32.png              # Favicon theme tối
│
├── PROJECT_STRUCTURE.md                 # 📄 Tài liệu cấu trúc dự án
├── README.md                            # Hướng dẫn chạy và tổng quan dự án
├── components.json                      # Cấu hình Shadcn UI
├── package.json                         # Dependencies & Scripts
├── postcss.config.mjs                   # Cấu hình PostCSS
└── tsconfig.json                        # Cấu hình TypeScript & Path Alias (@/*)
```

---

## 📌 Luồng hiển thị chính trong [app/page.tsx](file:///d:/real-estate-landing/app/page.tsx)

```tsx
<SitePreferencesProvider>
  <SiteHeader />
  <main>
    <Hero />            {/* 1. Hero Banner */}
    <Overview />        {/* 2. Tổng quan dự án */}
    <Location />        {/* 3. Vị trí & Kết nối */}
    <Amenities />       {/* 4. Tiện ích cảnh quan */}
    <FloorPlans />      {/* 5. Mặt bằng căn hộ */}
    <ShowUnit />        {/* 6. Nhà mẫu thực tế */}
    <Pricing />         {/* 7. Giá bán & Ưu đãi */}
    <LegalProgress />   {/* 8. Pháp lý & Tiến độ */}
    <News />            {/* 9. Tin tức thị trường */}
    <Contact />         {/* 10. Đăng ký tư vấn */}
  </main>
  <SiteFooter />
  <FloatingContact />
</SitePreferencesProvider>
```

---

## 🛠️ Quy tắc duy trì & Cập nhật file này
1. Mỗi khi có file mới được tạo trong `components/` hoặc các thư mục quan trọng khác, sơ đồ cây ở trên sẽ được cập nhật ngay lập tức.
2. Khi đổi tên hoặc di chuyển file, vị trí tương ứng trong bảng tài liệu sẽ được điều chỉnh đồng bộ.
