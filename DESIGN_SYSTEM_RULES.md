# BCONS CENTRAL PARK — DESIGN SYSTEM & IMPLEMENTATION RULES

Tai lieu nay la quy chuan thiet ke va lap trinh bat buoc (Mandatory Rules) cho tat ca AI Agent va Developer khi thuc hien cac yeu cau giao dien (UI/UX), tinh chinh bo cuc, hoac trien khai tinh nang tu hinh anh tham chieu (mockups/screenshots).

---

## 1. NGUYEN TAC AP DUNG HINH ANH THAM CHIEU (MOCKUP / SCREENSHOT)

Khi nguoi dung cung cap anh chup man hinh hoac mockup tham chieu:

1. **CHI LAY BO CUC (LAYOUT) VA CAU TRUC NOI DUNG**:
   - Tham khao cau truc cot (grid), so luong the (cards), vi tri cac khoi (ben trai map, ben phai the ket noi, v.v.).
   - Lay chinh xac noi dung cau chu, so lieu, cu ly, thoi gian di chuyen.
2. **TUYET DOI KHONG SAO CHEP MAU TUY TIEN TU ANH THAM CHIEU**:
   - Anh tham chieu co the chua mau xanh bien (Navy Blue #061a3d), xam lanh hoac cac mau sac cua nen tang khac.
   - **Tuyet doi KHONG su dung mau xanh bien (Navy Blue)** hoac bat ky mau nao ngoai bang mau thuong hieu cua du an.
   - Moi khoi card, thanh header, duong vien, nut bam **BAT BUOC PHAI MAP VE DESIGN SYSTEM CUA DU AN** (Xanh Ngoc Luc Bao & Vang Kim Champagne).
3. **TUYET DOI KHONG DUNG ANH CAT MAN HINH MO THAY CHO COMPONENT TUONG TAC**:
   - **Ban do (Maps)**: Phai nhung truc tiep qua the <iframe> Google Maps hoac thu vien map chuyen dung de dam bao do sac net vector 100%, co day du cong cu dieu khien (Zoom + / -, nut chuyen che do ve tinh, keo di chuyen ban do). Khong duoc cat anh raster tinh gay mo vo hinh va mat tinh tuong tac.
   - **Form / Slider / Cards**: Luon trien khai bang ma nguon HTML/Tailwind/React song dong.

---

## 2. QUY CHUAN MAU SAC (BRAND PALETTE & THEME MATRIX)

Du an su dung he mau **Tropical Emerald & Champagne Gold**:

### A. Light Mode (Che do Sang - Luxury Tropical Sage)
- **Nen trang**: Off-white kem nga diu mat g-background (oklch(0.985 0.004 120) / #FAF9F5).
- **Nen the / Card**: Trang g-card ket hop vien mo order-border.
- **Thanh Header khoi toi (nhu Map Header)**: Xanh rung nhiet doi sam g-[#072018] (KHONG DUNG XANH BIEN).
- **Mau thuong hieu chinh (Primary)**: Xanh ngoc luc bao 	ext-primary (#059669 / #10b981).
- **Mau diem nhan (Accent / Highlight)**: Vang kim quy phai #e6c887.
- **Nut CTA chinh / Nut chi duong**: Nen vang kim #e6c887, chu den than #072018 font dam.

### B. Dark Mode (Che do Toi - OLED Royal Emerald & Champagne Gold)
- **Nen trang**: Nen toi sau rung nhiet doi dark:bg-[#071712] hoac dark:bg-background.
- **Nen the / Card**: Xanh ngoc dam dark:bg-card/75 hoac dark:bg-[#0c241b], vien manh dark:border-white/10.
- **Thanh Header khoi toi**: dark:bg-[#071712].
- **Mau chu dao bat buoc cho Diem nhan**: **Vang Kim Champagne (#e6c887)**.
  - Eyebrow title: dark:text-[#e6c887]
  - Con so thong ke / Cu ly: dark:text-[#e6c887]
  - Icon diem nhan: dark:text-[#e6c887]
  - Vien Hover / Active: dark:hover:border-[#e6c887]/50
  - Nut bam CTA: dark:bg-gradient-to-r dark:from-[#e6c887] dark:via-[#f7e4b5] dark:to-[#e6c887] dark:text-[#072018] font dam.

---

## 3. DONG BO TYPOGRAPHY (FONT CHU QUY CHUAN)

He thong font duoc khai bao tai pp/layout.tsx va pp/globals.css:

1. **Font Serif (Playfair_Display / ont-serif)**:
   - Dung cho: Tieu de trang (H1), Tieu de cac Section (H2), Tieu de the dac biet.
   - Dung cho: **Cac con so noi bat** (So cu ly 400m, 1km, dien tich 45m², so can ho, gia ban).
2. **Font Sans (Be_Vietnam_Pro / ont-sans)**:
   - Dung cho: Noi dung van ban thuong, doan mo ta (description), nhan (labels), ten dia diem, thong tin thoi gian di chuyen, nut bam va form inputs.
3. **Tieu de Section chuan**:
   - Luon su dung component <SectionHeading /> tu @/components/layout/reveal.
   - Component nay tu dong can chinh:
     - Gach dau dong & Eyebrow: 	ext-primary dark:text-[#e6c887].
     - Tieu de: ont-serif text-foreground dark:text-white font-bold.
     - Mo ta: ont-sans text-muted-foreground dark:text-[#c2d3cb].

---

## 4. CHECKLIST XAC NHAN TRUOC KHI BAN GIAO (PRE-FLIGHT AUDIT)

Moi thay doi UI deu phai vuot qua 5 tieu chi:
1. [ ] **Khong co ma mau xanh bien lac dieu**: Khong ton tai #061a3d, #0a1c2a, hay mau xanh duong trong code giao dien.
2. [ ] **Font chu dong bo**: Tieu de & con so dung ont-serif, nhan & body dung ont-sans.
3. [ ] **Ban do sac net & tuong tac**: Map hien thi qua Google Maps embed song dong, co nut phong to thu nho, khong dung anh chup man hinh mo.
4. [ ] **Day du lien ket hanh dong**: Nut  Chi duong mo tab moi dan toi URL Google Maps chinh xac.
5. [ ] **Chay 
pm run build**: 100% routes bien dich thanh cong 0 loi.

---

## 5. CAU TRUC CHUAN CHO CAC TRANG CON TRONG DROPDOWN "CHI TIET" (SUBPAGES ARCHITECTURE)

Hai trang `/gia-ban` va `/vi-tri` da duoc chuan hoa lam mau (Golden Reference). Tat ca cac trang con con lai (`/mat-bang`, `/tien-ich`, `/phap-ly`, `/chu-dau-tu`, `/tien-do`, `/tin-tuc`) khi chinh sua/code moi BAT BUOC phai tuan thu bo khung 2 phan:

### A. Phan tren (Top Page - Hero Banner dien anh)
- Banner anh nen `/images/project-towers.jpg` (hoac anh chuyen muc) voi scale 105%.
- Lớp phu Cinematic Luxury Dark Gradient (`from-[#072018]/95 ...`) + Ambient Glow Vang Kim Champagne (`#e6c887/20 blur-3xl`).
- Breadcrumb Frosted Glass co icon `<Home />` va link Vang Kim.
- Tieu de H1 `font-serif` in hoa + Subtitle `font-serif italic` mau `#e6c887` + Mo ta ngan `font-sans`.
- Cum the Bento Glass Highlights (Quick Facts) hoac Sub-navigation Pills.

### B. Cac Section Common bat buoc o cuoi trang (Bottom Common Sections Sequence)
Moi subpage trong `app/[slug]/page.tsx` bat buoc phai co day du 4 khoi common cuoi trang theo dung thu tu:
1. `<DirectorConsultation id="tu-van" />`: Khối tư vấn trực tiếp từ Giám đốc Sàn Kinh Doanh Bcons PS Land (kèm avatar, bảng thông tin và nút liên hệ).
2. `<[Feature]Faq />`: Khoi cau hoi thuong gap danh rieng cho chuyen muc (Accordion tieu chuan).
3. `<[Feature]Related />`: Khoi lien ket cac trang chuyen muc lien quan (The cards + chips chuyen huong nhanh).
4. `<Contact />`: Form dang ky tu van & nhan bang gia goc cuoi trang (`@/components/home/contact`).
