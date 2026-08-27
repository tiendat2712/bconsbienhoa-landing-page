# 🏢 CẤU TRÚC DỰ ÁN (PROJECT STRUCTURE) - BCONS CENTRAL PARK

> **Quy ước:** Tài liệu này phản ánh chính xác cấu trúc toàn bộ mã nguồn thực tế của dự án. Mỗi khi có file/thư mục mới được tạo hoặc di chuyển, tài liệu này sẽ được tự động đồng bộ và cập nhật.

---

## 🌳 Sơ đồ cấu trúc thư mục thực tế

```text
real-estate-landing/
│
├── app/                                 # 🌐 Next.js App Router (Mỗi folder = 1 route)
│   ├── globals.css                      # Định nghĩa CSS toàn cục, OKLCH colors & Tailwind v4
│   ├── layout.tsx                       # Root Layout (Google Fonts + Metadata + Favicon)
│   ├── page.tsx                         # 🏠 Trang chủ (/)
│   ├── api/contact/route.ts             # ⚡ API Route: Tiếp nhận Form, validate & gửi mail qua Resend
│   ├── vi-tri/page.tsx                  # 📍 Route /vi-tri
│   ├── tien-ich/page.tsx                # 🏊 Route /tien-ich
│   ├── mat-bang/page.tsx                # 📐 Route /mat-bang
│   ├── gia-ban/page.tsx                 # 💰 Route /gia-ban
│   ├── phap-ly/page.tsx                 # ⚖️ Route /phap-ly
│   ├── chu-dau-tu/page.tsx              # 🏢 Route /chu-dau-tu
│   ├── tien-do/page.tsx                 # 🏗️ Route /tien-do
│   └── tin-tuc/page.tsx                 # 📰 Route /tin-tuc
│
├── components/                          # ⭐ ĐÃ PHÂN CHIA THƯ MỤC RÕ RÀNG ĐỂ TIỆN QUẢN LÝ
│   │
│   ├── emails/                          # 📧 Cụm Email Templates (React Email)
│   │   └── lead-notification.tsx        # Template email gửi thông báo khách hàng mới đến nhân viên
│   │
│   ├── layout/                          # 1. Cụm Layout & Điều hướng chung
│   │   ├── site-header.tsx              # Header chính, logo Bcons, menu điều hướng, Drawer mobile
│   │   ├── site-footer.tsx              # Footer, logo Bcons, thông tin chuyên viên, bản quyền
│   │   ├── floating-contact.tsx         # Cụm nút liên hệ nổi góc phải (Zalo, Hotline, Messenger)
│   │   ├── site-preferences.tsx         # Bộ quản lý Theme (Dark/Light) & Đa ngôn ngữ (VN/EN)
│   │   └── reveal.tsx                   # Hiệu ứng chuyển động mượt mà (Framer Motion)
│   │
│   ├── home/                            # 2. Cụm 10 Sections trên Trang chủ (/)
│   │   ├── hero.tsx                     # Section 1: Hero Banner mở đầu, CTA & Hotline
│   │   ├── overview.tsx                 # Section 2: Tổng quan dự án Bcons Central Park Tam Hiệp
│   │   ├── location.tsx                 # Section 3: Vị trí tâm điểm kết nối & bản đồ hạ tầng
│   │   ├── amenities.tsx                # Section 4: Tiện ích nội khu (Hồ bơi muối, Công viên)
│   │   ├── floor-plans.tsx              # Section 5: Mặt bằng tầng & căn hộ mẫu
│   │   ├── show-unit.tsx                # Section 6: Nhà mẫu thực tế & phối cảnh
│   │   ├── pricing.tsx                  # Section 7: Bảng giá, chính sách bán hàng & tiến độ
│   │   ├── legal-progress.tsx           # Section 8: Tiến độ & pháp lý dự án
│   │   ├── news.tsx                     # Section 9: Tin tức thị trường & cẩm nang mua nhà
│   │   └── contact.tsx                  # Section 10: Form đăng ký tư vấn & nhận bảng giá gốc
│   │
│   ├── pages/                           # 3. Cụm Components theo từng Trang con chuyên mục
│   │   ├── vi-tri/                      # Trang /vi-tri
│   │   │   ├── location-detail.tsx      # Tọa độ 236 Phan Trung, phân tích kết nối & Google Map
│   │   │   ├── location-potential.tsx   # 4 đòn bẩy tăng giá bất động sản Tam Hiệp
│   │   │   ├── location-faq.tsx         # FAQ giải đáp vị trí
│   │   │   └── location-related.tsx     # Thẻ liên kết các trang chuyên mục liên quan
│   │   │
│   │   ├── tien-ich/                    # Trang /tien-ich
│   │   │   ├── amenity-detail.tsx       # Công viên 7.700m², hồ bơi điện phân muối, gym/yoga
│   │   │   ├── amenity-faq.tsx          # FAQ giải đáp tiện ích
│   │   │   └── amenity-related.tsx      # Thẻ liên kết các trang chuyên mục liên quan
│   │   │
│   │   ├── mat-bang/                    # Trang /mat-bang
│   │   │   ├── floor-plan-detail.tsx    # Phối cảnh 3D 5 block & thiết kế căn 1-3PN (43–86m²)
│   │   │   ├── floor-plan-faq.tsx       # FAQ giải đáp mặt bằng
│   │   │   └── floor-plan-related.tsx   # Thẻ liên kết các trang chuyên mục liên quan
│   │   │
│   │   ├── gia-ban/                     # Trang /gia-ban
│   │   │   ├── pricing-detail.tsx       # Bảng giá dự kiến 2,0–3,8 tỷ, tiến độ thanh toán & gói vay
│   │   │   ├── pricing-faq.tsx          # FAQ giải đáp giá bán & tài chính
│   │   │   └── pricing-related.tsx      # Thẻ liên kết các trang chuyên mục liên quan
│   │   │
│   │   ├── phap-ly/                     # Trang /phap-ly
│   │   │   ├── legal-detail.tsx         # Hồ sơ pháp lý: GPXD, 1/500, QĐ giao đất, Sổ hồng tổng
│   │   │   ├── legal-faq.tsx            # FAQ giải đáp pháp lý
│   │   │   └── legal-related.tsx        # Thẻ liên kết các trang chuyên mục liên quan
│   │   │
│   │   ├── chu-dau-tu/                  # Trang /chu-dau-tu
│   │   │   ├── investor-detail.tsx      # Năng lực Tập đoàn Bcons, 20+ dự án đã bàn giao có sổ
│   │   │   ├── investor-faq.tsx         # FAQ giải đáp về chủ đầu tư Bcons
│   │   │   └── investor-related.tsx     # Thẻ liên kết các trang chuyên mục liên quan
│   │   │
│   │   ├── tien-do/                     # Trang /tien-do
│   │   │   ├── progress-detail.tsx      # Mốc khởi công 27/05/2026 & dự kiến bàn giao Quý II/2029
│   │   │   ├── progress-faq.tsx         # FAQ giải đáp tiến độ thi công
│   │   │   └── progress-related.tsx     # Thẻ liên kết các trang chuyên mục liên quan
│   │   │
│   │   └── tin-tuc/                     # Trang /tin-tuc
│   │       ├── news-listing.tsx         # Danh sách 4 bài viết phân tích chuyên sâu
│   │       └── news-references.tsx      # Thẻ tham chiếu đến 5 trang dữ liệu gốc
│   │
│   └── ui/                              # 4. Cụm UI Primitives (Shadcn UI & Base UI)
│       ├── accordion.tsx                # Accordion xổ dọc (FAQ, đóng mở mượt mà)
│       ├── button.tsx                   # Nút bấm nhiều biến thể
│       ├── input.tsx                    # Ô nhập liệu form
│       ├── label.tsx                    # Nhãn form input
│       └── tabs.tsx                     # Chuyển tab mượt mà
│
├── lib/
│   ├── utils.ts                         # Hàm tiện ích classNames (clsx + twMerge)
│   └── validation.ts                    # 🛡️ Bộ logic Sanitize & Validate Form chuẩn Việt Nam
│
├── public/                              # 🖼️ Tài nguyên tĩnh (Gọn gàng, không trùng lặp)
│   └── images/                          # Thư viện ảnh dự án chất lượng cao
│       ├── bcons-central-park-logo.png  # 🌟 LOGO & BIỂU TƯỢNG DUY NHẤT (Header, Footer, Tab Icon)
│       ├── hero-towers.png              # Phối cảnh tháp căn hộ Hero Banner
│       ├── location-map.jpg             # Bản đồ vị trí kết nối vùng
│       ├── aerial-location.png          # Phối cảnh toàn cảnh trên cao
│       ├── amenity-pool.png             # Phối cảnh hồ bơi điện phân muối
│       ├── masterplan.png               # Bản vẽ thiết kế mặt bằng tổng thể 3D
│       ├── floorplan.png                # Bản vẽ thiết kế mặt bằng căn hộ
│       ├── interior-living.png          # Phối cảnh nội thất phòng khách nhà mẫu
│       ├── project-campaign.jpg         # Poster chiến dịch mở bán
│       ├── project-pool.jpg             # Ảnh tiện ích hồ bơi
│       └── project-towers.jpg           # Ảnh tổng thể các block căn hộ
│
├── PROJECT_STRUCTURE.md                 # 📄 Tài liệu cấu trúc dự án
├── README.md                            # Hướng dẫn chạy và tổng quan dự án
├── components.json                      # Cấu hình Shadcn UI
├── package.json                         # Dependencies & Scripts
├── postcss.config.mjs                   # Cấu hình PostCSS
└── tsconfig.json                        # Cấu hình TypeScript & Path Alias (@/*)
```

---

## 📌 Hướng dẫn tra cứu khi cần sửa nội dung/ảnh:

| Mục đích sửa | Thư mục component cần mở | Các file cụ thể |
| :--- | :--- | :--- |
| **Sửa Header, Footer, Menu, Nút liên hệ** | `components/layout/` | `site-header.tsx`, `site-footer.tsx`, `floating-contact.tsx` |
| **Sửa các Section trên Trang chủ** | `components/home/` | `hero.tsx`, `overview.tsx`, `pricing.tsx`, `contact.tsx`, ... |
| **Sửa nội dung trang Vị trí** | `components/pages/vi-tri/` | `location-detail.tsx`, `location-potential.tsx`, `location-faq.tsx` |
| **Sửa nội dung trang Tiện ích** | `components/pages/tien-ich/` | `amenity-detail.tsx`, `amenity-faq.tsx` |
| **Sửa nội dung trang Mặt bằng** | `components/pages/mat-bang/` | `floor-plan-detail.tsx`, `floor-plan-faq.tsx` |
| **Sửa nội dung trang Giá bán** | `components/pages/gia-ban/` | `pricing-detail.tsx`, `pricing-faq.tsx` |
| **Sửa nội dung trang Pháp lý** | `components/pages/phap-ly/` | `legal-detail.tsx`, `legal-faq.tsx` |
| **Sửa nội dung trang Chủ đầu tư** | `components/pages/chu-dau-tu/` | `investor-detail.tsx`, `investor-faq.tsx` |
| **Sửa nội dung trang Tiến độ** | `components/pages/tien-do/` | `progress-detail.tsx`, `progress-faq.tsx` |
| **Sửa nội dung trang Tin tức** | `components/pages/tin-tuc/` | `news-listing.tsx`, `news-references.tsx` |
| **Sửa/thay Logo hoặc Ảnh dự án** | `public/images/` | `bcons-central-park-logo.png`, `hero-towers.png`, ... |
