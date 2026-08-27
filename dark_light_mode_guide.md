# HƯỚNG DẪN THIẾT KẾ LIGHT / DARK MODE (BCONS CENTRAL PARK DESIGN SYSTEM)

Tài liệu này là quy chuẩn thiết kế bắt buộc (**Mandatory Design Guidelines**) khi phát triển giao diện, thêm trang mới hoặc chỉnh sửa các components trên toàn bộ codebase dự án Bcons Central Park.

---

## 1. NGUYÊN TẮC CỐT LÕI (CORE PHILOSOPHY)

- **Light Mode (Chế độ Sáng):** Mang phong cách **Editorial Luxury / Tropical Sage**. Nền kem ngà dịu mắt (`#f3f7f5` / `#FAF9F5`), chữ màu đen than (`#072018`), màu chủ đạo là **Xanh Ngọc Lục Bảo (`#059669` / `#10b981`)** kết hợp vàng kim quý phái.
- **Dark Mode (Chế độ Tối):** Mang phong cách **OLED Royal Emerald & Champagne Gold**. 
  - Nền tối sâu rừng nhiệt đới (`#07130f` / `#0c1c16` / `#071712`).
  - Màu chủ đạo bắt buộc cho **Tiêu đề Eyebrow (`—— SECTION`), Nhãn Form (Labels), Trạng thái Focus/Active, và Nút bấm CTA/Highlight** là **Vàng Kim Champagne (`#e6c887`)**.
  - Không dùng màu xanh lá chói / neon trên nền tối.

---

## 2. BẢNG MÃ MÀU QUY CHUẨN (COLOR PALETTE MATRIX)

| Phần tử UI | Light Mode | Dark Mode (Bắt buộc Vàng Kim `#e6c887`) | Tailwind Utility Classes |
| :--- | :--- | :--- | :--- |
| **Eyebrow Title (`—— SECTION`)** | Xanh ngọc lục bảo (`text-primary`) | **Vàng Kim (`#e6c887`)** | `text-primary dark:text-[#e6c887]` |
| **Gạch đầu dòng Eyebrow (`—`)** | Xanh ngọc (`bg-primary/40`) | **Vàng Kim (`bg-[#e6c887]/70`)** | `bg-primary/40 dark:bg-[#e6c887]/70` |
| **Tiêu đề chính (H1, H2, H3)** | Đen than đậm (`text-foreground`) | **Trắng sáng (`text-white`)** | `text-foreground dark:text-white font-bold` |
| **Nhãn Form (Form Labels)** | Xám chì đậm (`text-slate-600`) | **Vàng Kim (`text-[#e6c887]`)** | `text-slate-600 dark:text-[#e6c887] font-bold` |
| **Viền Focus Input / Dropdown** | Xanh ngọc (`focus:border-emerald-600`) | **Vàng Kim (`focus:border-[#e6c887]`)** | `dark:focus:border-[#e6c887] dark:focus:ring-[#e6c887]/25` |
| **Nút bấm chính (Primary CTA)** | Nền Xanh ngọc (`bg-emerald-600 text-white`) | **Gradient Vàng Kim (`bg-gradient-to-r from-[#e6c887] via-[#f7e4b5] to-[#e6c887] text-[#072018]`)** | `bg-emerald-600 dark:bg-gradient-to-r dark:from-[#e6c887] dark:via-[#f7e4b5] dark:to-[#e6c887] dark:text-[#072018]` |
| **Nút viền (Outline CTA)** | Viền Xanh (`border-primary text-primary`) | **Viền Vàng Kim (`border-[#e6c887] text-[#e6c887]`)** | `dark:border-[#e6c887] dark:text-[#e6c887] dark:hover:bg-[#e6c887] dark:hover:text-[#072018]` |
| **Thẻ Tab đang chọn (Active Tab)** | Nền Xanh (`bg-primary text-white`) | **Nền Vàng Kim (`bg-[#e6c887] text-[#072018] font-bold`)** | `dark:bg-[#e6c887] dark:text-[#072018] dark:border-[#e6c887]` |
| **Icon Điểm nhấn (Stat/Amenity Icons)**| Xanh ngọc (`text-primary`) | **Vàng Kim (`text-[#e6c887]`)** | `text-primary dark:text-[#e6c887]` |
| **Thông số giá / Giá trị nổi bật** | Xanh ngọc đậm (`text-primary`) | **Vàng Kim (`text-[#e6c887]`)** | `text-primary dark:text-[#e6c887] font-serif font-bold` |

---

## 3. QUY ĐỊNH THIẾT KẾ CHO TỪNG KHU VỰC

### 3.1. SectionHeading (`components/layout/reveal.tsx`)
Mọi tiêu đề section phải dùng component `<SectionHeading />`.
- Tự động hiển thị gạch và chữ Eyebrow màu **Vàng kim `#e6c887`** ở Dark Mode.
- Tiêu đề H2 tự động chuyển thành **Trắng sáng `text-white`** khi ở Dark Mode.

### 3.2. Form Contact & Dropdowns
- Khung Card ở Dark Mode: Dùng **Luminous Glass** (`bg-[#122820]/90 backdrop-blur-2xl border border-[#e6c887]/30 ring-1 ring-[#e6c887]/20`).
- Input / Textarea: `bg-white/10 text-white placeholder:text-white/40 focus:border-[#e6c887]`.
- Nút bấm *"Gửi thông tin"*: **Nền Vàng kim dải gradient lấp lánh**, chữ đen than `#072018` font đậm.

### 3.3. Hero Banner & Bento Cards
- Thẻ Bento thông tin (`Quy mô`, `Công viên`, `Sở hữu`):
  - **Light Mode:** Kính trắng ngà `bg-white/90 border-white/80 text-slate-900 shadow-xl`, icon xanh ngọc.
  - **Dark Mode:** Kính đen nhám `bg-slate-950/70 border-white/15 text-white`, icon vàng kim `#e6c887`.

### 3.4. Footer (`components/layout/site-footer.tsx`)
- Phải liên kết trực tiếp reactive `theme` state từ `useSitePreferences()`.
- **Light Mode:** Nền kem ngà `#f3f7f5`, viền `border-slate-200`, tên chuyên viên tư vấn **Lê Ngọc Long** màu than đậm `#072018`.
- **Dark Mode:** Nền tối sâu `#071712`, viền `border-white/10`, tên chuyên viên tư vấn **Lê Ngọc Long** màu **Trắng sáng `text-white`**, icon Hotline/Zalo/Facebook vàng kim `#e6c887`.

---

## 4. CHECKLIST KIỂM THỬ TRƯỚC KHI COMMIT
Trước khi kết thúc bất kỳ tác vụ giao diện nào, bắt buộc phải kiểm tra:
1. [ ] Bật/tắt nút Theme (Mặt trời ☀️ / Mặt trăng 🌙) trên thanh Navbar: toàn bộ trang chuyển đổi ngay lập tức mà không bị giật hay trắng bệch.
2. [ ] Các dòng Eyebrow (`—— TỔNG QUAN`, `—— NHÀ MẪU`, `—— MẶT BẰNG`...) ở Dark Mode đều mang sắc vàng kim `#e6c887`.
3. [ ] Các nhãn form và nút CTA chính ở Dark Mode đều mang sắc vàng kim `#e6c887`.
4. [ ] Tên chuyên viên **Lê Ngọc Long** ở Footer hiển thị đậm nét và rõ ràng ở cả 2 chế độ.
5. [ ] Chạy `npm run build` hoặc `next build` đảm bảo 100% routes biên dịch thành công (0 errors).
