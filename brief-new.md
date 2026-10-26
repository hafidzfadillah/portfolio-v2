# Brief: Redesain Website Portofolio (one shot)
## 1. Peran dan cara kerja

Kamu adalah senior design engineer. Redesain website portofolio di repo ini secara menyeluruh dalam satu kali jalan. **Jangan berhenti untuk bertanya.** Kalau ada hal yang ambigu, ambil keputusan yang masuk akal, lalu catat di ringkasan akhir.

Urutan wajib:

1. **Skill dulu.** Daftar skill yang tersedia, lalu baca dan terapkan semua yang relevan sebelum menulis kode: Emil design (design engineering), ui-ux-pro-max, impeccable, serta skill frontend/UI lain yang terpasang. Pakai nama skill persis seperti yang terpasang.
2. **Audit singkat** kode dan tampilan sekarang (maksimal 10 poin masalah).
3. **Rencana** maksimal 10 baris, lalu langsung implementasi.
4. **Verifikasi:** build dan lint lolos; cek tampilan di lebar 375px, 768px, 1440px; kontras; navigasi keyboard; `prefers-reduced-motion`.
5. **Ringkasan akhir:** perubahan utama, daftar file, keputusan yang kamu ambil sendiri, dan hal yang perlu saya isi atau putuskan.

## 2. Konteks proyek

- Pemilik: Hafidz Fadillah, software engineer (fondasi mobile, kini juga web dan backend).
- Audiens utama: **klien freelance dan recruiter**. Aksi utama: **hubungi saya** dan **download CV**. Aksi kedua: lihat proyek.
- Stack sekarang: Next.js (MVP awal dari v0), hosting Vercel. **Boleh refactor besar-besaran**: struktur komponen, routing, styling. Tetap Next.js dan deploy-able ke Vercel.
- Domain baru: **hafidz.dev** (akan dipasang di Vercel; belum aktif di kode).
- Bahasa situs: **Inggris**.
- Halaman: **satu halaman (single page)** dengan anchor navigasi.

## 3. Arah desain (campuran dua referensi)

Referensi lengkap ada di Lampiran A dan B. Jangan merata-ratakan keduanya. Pakai pembagian ini:

- **Hero dan judul section: gaya Daniel Sun.** Nama sebagai massa tipografi raksasa, ruang kosong luas, satu aksen sebagai sumber cahaya, nav berbentuk kapsul gelap melayang.
- **Badan halaman: gaya Marco.** Kartu proyek ala widget dengan radius besar dan bayangan sangat tipis, label mikro dengan tracking lebar, chip pill untuk teknologi dan tautan, pola dua kolom (teks pernyataan di kiri, kartu di kanan) pada desktop.
- **Aturan yang bertabrakan, putusan saya:**
  - **Satu aksen saja: hijau soft.** Mulai dari sekitar `#8FD694` sebagai warna sorotan/permukaan, dan pakai hijau lebih gelap untuk teks atau ikon di atas latar terang agar lolos kontras AA. Tidak ada warna kromatik kedua. Titik status kecil (gaya Marco) memakai hijau yang sama.
  - **Tombol utama:** pill. Satu tombol terisi hijau di nav (gaya Daniel Sun, "Contact"). Tombol dan tautan lain berupa outline pill.
  - **Kerapatan:** longgar di hero dan antar section (80-120px), lebih rapat di dalam grid kartu (gap 24px).
  - **Bayangan:** hanya di kartu, setipis di referensi. Tidak ada bayangan di tombol atau nav.
- **Nama hero:** "HAFIDZ FADILLAH" ada 15 huruf, lebih panjang dari referensi (10 huruf). Gunakan ukuran fluid (`clamp`) agar muat di semua lebar, dengan **fallback dua baris di mobile** ("HAFIDZ" / "FADILLAH"). Jangan menyusutkannya sampai tidak lagi terasa sebagai massa tipografi.
- **Font:** lewat `next/font` (self-hosted, tanpa layout shift). Display condensed berat (Reddit Sans Condensed 900, fallback Bebas Neue atau Anton), teks bodi Inter, label mikro Inter Tight dengan tracking lebar. **Tanpa font tulisan tangan.**
- **Kontras:** abu-abu referensi (`#808080` di atas `#f5f5f5`) hanya sekitar 3,6:1 dan **gagal AA** untuk teks bodi. Gunakan abu yang lebih gelap untuk teks yang harus terbaca (target minimal 4,5:1). Abu terang hanya untuk dekorasi.
- **Foto diri:** tampilkan dalam frame berradius sesuai sistem (14-18px), responsif dan dipotong dengan baik di mobile, memakai `next/image` dengan alt text. Letakkan di `public/images/hafidz.jpg` (saya akan menaruh filenya). Jika file belum ada, buat placeholder netral yang mudah diganti.
- **Dark mode:** nice to have. Implementasikan lewat variabel CSS dan `prefers-color-scheme` **hanya jika tidak mengorbankan kualitas** light mode; light mode adalah prioritas. Kalau dikerjakan, aksen hijau dan kontras harus tetap lolos AA.
- **Animasi:** halus dan punya tujuan (muncul saat scroll, hover kartu, transisi nav). Durasi singkat, easing yang natural, hanya `transform` dan `opacity`, dan hormati `prefers-reduced-motion`. Tanpa 3D, shader, atau pustaka animasi berat kecuali benar-benar perlu.
- **Cahaya hero:** satu gradien lembut dari aksen hijau (pengganti "beam" kuning referensi), dibuat dengan CSS, bukan gambar berat.

## 4. Struktur halaman

1. **Nav kapsul** melayang: Work, Experience, Skills, Contact + tombol hijau "Contact".
2. **Hero:** nama raksasa, "Software Engineer", satu kalimat pembeda (lihat konten), foto dalam frame, dua aksi: Contact dan Download CV.
3. **Selected work:** kartu proyek (lihat bagian 5), dua kolom pada desktop.
4. **Experience:** timeline ringkas (lihat bagian 6).
5. **Skills:** dikelompokkan, ditampilkan sebagai chip pill.
6. **Recognition:** penghargaan dan sertifikasi, ringkas.
7. **Contact:** ajakan jelas untuk klien freelance dan recruiter, email, GitHub, LinkedIn, tombol Download CV.
8. **Footer:** tahun otomatis (jangan hard-code).

## 5. Konten proyek (satu-satunya sumber kebenaran)

Simpan semua teks di satu file data bertipe (misalnya `src/content/site.ts`) supaya mudah saya edit. **Dilarang menambah angka, metrik, klaim, atau teknologi yang tidak ada di sini.** Gunakan kata kerja yang akurat ("melanjutkan", "menstabilkan", "merombak", "mengimplementasi"), bukan "architected" untuk hal yang saya lanjutkan. Item bertanda **[ISI]** belum ada datanya: render dengan teks seminimal mungkin dari fakta yang ada, dan jangan mengarang.

**Kalimat pembeda hero (pilih satu, boleh disesuaikan sedikit):**
"Mobile roots, full-stack reach. I take over live systems and make them stable and easy to extend."

**1. BinaBola** (co-founder, akhir 2024 - sekarang)
Sports-tech platform: live match annotation untuk football dan futsal dengan rekap statistik, plus AI venue cam untuk football dan tennis. Dipakai di Unileague dan Piala Futsal by.U, dan dipakai aktif oleh Papua Football Academy. Peran saya: melanjutkan dan menyelesaikan MVP dalam tim 6 engineer, mengurus fitur, bug, dan server (Docker, Nginx, CI/CD); pernah membangun ulang seluruh lingkungan setelah gangguan hosting, lalu menambah backup DB otomatis, Portainer, dan dokumentasi. Stack: Remix, Go. Tautan: https://binabola.id. Screenshot: pakai aset BinaBola di `public/images/` (saya sediakan).

**2. Akoja ERP** (PT Akselerasi Informasi Indonesia, 2025 - 2026)
ERP enterprise yang memindahkan beberapa divisi dari alur manual ke alur terintegrasi (Flutter mobile, Next.js web). Kontribusi saya: modul untuk beberapa divisi; merombak penyimpanan draft di modul mobile (draft di server, auto save, penyimpanan lokal saat offline dengan sinkronisasi saat online lagi); memecah satu class besar yang mencampur UI dan logic menjadi struktur MVVM; modul absensi dengan face recognition API dan deteksi manipulasi waktu. **Tanpa screenshot** (kerahasiaan klien): pakai visual abstrak bernuansa tipografi.

**3. Pancasona Tata Nusa** (website company profile, 2026)
Website company profile dengan Next.js (server-side rendering). Tautan: https://www.pancasonatatanusa.id/. Screenshot: **[ISI]**, bila belum ada gunakan kartu tipografi.

**4. E-catalogue Yamaha** (PT GITS Indonesia, Mar - Mei 2025, magang)
Aplikasi e-katalog motor untuk proyek brand Yamaha, dibangun dengan FlutterFlow dalam tim Agile/Scrum; fitur tampilan produk interaktif dan perbandingan spesifikasi. **Tanpa screenshot** (klien).

**5. FitLife** (2023)
Aplikasi gaya hidup dengan gamifikasi, deteksi dan klasifikasi makanan, serta chatbot AI. Meraih 2nd Best Team, kategori Mobile App, IIT Competition oleh Intermedia Universitas Amikom Purwokerto (Oktober 2023). Stack: Flutter, Laravel

**6. YouTube Sentiment Analysis** (proyek kuliah)
Proyek analisis sentimen untuk data YouTube. Detail metode dan hasil: **[ISI]**. Tampilkan sebagai kartu kecil bertanda "College project". Tautan repo: https://github.com/hafidzfadillah/yt-sentiment.

Setiap kartu berisi: label tracked (peran, tahun), judul, 2 kalimat ringkas, chip teknologi, dan tautan bila ada. Kartu tanpa screenshot memakai komposisi tipografi, bukan gambar buatan.

## 6. Konten pengalaman (konsisten dengan CV terbaru)

- **Mobile & Frontend Developer**, PT Akselerasi Informasi Indonesia: Mei 2025 - Nov 2026 (freelance Mei-Agu 2025, lalu kontrak sejak Agu 2025).
- **Co-founder & Full Stack Engineer**, BinaBola: akhir 2024 - sekarang (full time sampai Feb 2025, part time sejak Mar 2025).
- **Mobile Engineer (Intern)**, PT GITS Indonesia: Mar - Mei 2025.
- **Mobile Developer**, PT Pineapple Technology Indonesia: Sep 2021 - Okt 2024 (Android Developer Intern Mar - Agu 2021). Produk PPOB yang sudah live: pulsa/kuota, tagihan listrik/air, tiket perjalanan; Android (Java) dan Flutter.
- **Mobile Developer (Intern)**, PT Neuronworks Indonesia: Sep - Des 2020.
- Pengalaman total ditulis **"4+ years"** di mana pun.

**Skills (kelompok):** Mobile (Flutter/Dart, Android Kotlin/Java, FlutterFlow); Web (Next.js, Remix, TypeScript/JavaScript, Laravel); Backend & data (Go, Prisma ORM, MySQL, Firebase, REST API); DevOps (Docker, Nginx, CI/CD, Git).

**Recognition:** Graduated with Distinction, Bangkit Academy (Mobile Development path, top 10%), Juli 2024; Best Entrepreneur-track Capstone Project, Bangkit Academy, Juli 2024 (BinaBola); 2nd Best Team, IIT Competition (Mobile App), Intermedia Universitas Amikom Purwokerto, Oktober 2023. Sertifikasi (Dicoding): Android Intermediate, Dasar AI, Machine Learning untuk Android.

**Kontak:** email hafidzfadillah23@gmail.com; GitHub github.com/hafidzfadillah; LinkedIn linkedin.com/in/hfidzfadillah; CV di `public/cv/hafidz-fadillah-cv.pdf` (saya sediakan). **Jangan tampilkan nomor telepon di halaman.**

## 7. Batasan teknis

- **Performa (prioritas):** load cepat dan responsif. Pakai `next/image` untuk semua gambar, `next/font`, komponen server sebisa mungkin, minimalkan JavaScript klien, tanpa pustaka besar yang tidak perlu. Target Lighthouse mobile 90+ untuk Performance dan Accessibility.
- **Responsif:** mobile-first, uji 375px, 768px, 1440px. Konten lebar (kode atau tabel) tidak boleh membuat halaman bergeser horizontal.
- **Aksesibilitas:** kontras AA, fokus keyboard terlihat, struktur heading benar, alt text bermakna, `prefers-reduced-motion` dihormati.
- **SEO dan metadata:** gunakan `metadataBase` dari variabel lingkungan (default `https://hafidz.dev`); `canonical`, `og:url`, dan `og:image` konsisten ke satu domain tanpa www; tambahkan `sitemap` dan `robots`; **hapus kode `google-site-verification` placeholder**; judul dan deskripsi mencerminkan "Software Engineer". Tambahkan data terstruktur Person sederhana bila mudah.
- **Bersihkan sisa lama:** klaim "20%" di pengalaman GITS, "3+ years", footer 2025 yang di-hard-code, label kartu yang terpotong, daftar skill yang tampil ganda, penamaan lomba "IITC x Grab".
- **Struktur kode:** komponen kecil dan rapi, konten terpisah dari tampilan, token desain sebagai variabel CSS/Tailwind agar mudah diubah.

## 8. Yang tidak boleh dilakukan

- Menambah warna kromatik kedua atau gradien selain cahaya hero.
- Menulis angka atau klaim yang tidak ada di bagian 5 dan 6.
- Memakai font tulisan tangan.
- Menampilkan screenshot proyek klien (Akoja ERP, Yamaha).
- Menambahkan dependensi berat tanpa alasan yang kamu catat di ringkasan akhir.

---

## Lampiran A: Referensi Daniel Sun (ringkasan token)

- Karakter: monolit tipografi di dinding galeri putih; satu sumber cahaya kuning; ruang kosong sangat luas.
- Warna: `#000000` teks utama; `#f5f5f5` kanvas; `#ffffff` kartu; abu-abu bertingkat untuk teks sekunder; **aksen tunggal** `#ffd500` (dalam proyek ini diganti hijau soft).
- Tipografi: Reddit Sans Condensed 900 untuk judul besar (88px untuk section, hingga 246px untuk nama), tracking makin rapat saat ukuran membesar (-2,99px pada 88px; -6,89px pada 246px), line-height 0,9-1,0; Inter 500 untuk bodi (18-20px, line-height 1,3); jangan memakai bobot 400 untuk bodi.
- Bentuk: radius kartu dan gambar 14px, tombol 32px (pill), nav 110px; kapsul nav latar `#1f1f1f`, teks putih 14px, satu tombol aksen di kanan.
- Bayangan: hanya kartu, `rgba(0,0,0,0.12) -2px 3px 3px 0`.
- Tata letak: hero tanpa batas lebar; konten di bawahnya maksimal 1200px; jarak antar section 80-120px; padding kartu 32-40px.
- Larangan: warna kromatik kedua; nama di bawah 88px; bayangan pada tombol/nav/teks; gradien selain satu cahaya hero.

design.md:
# Daniel Sun — Style Reference
> Solar monolith on a white gallery wall — one yellow beam, one obsidian name, all the breathing room in the world.

**Theme:** light

Source measurements are normalized; roles and recommendations are interpreted. Font summary lists are independent, not paired by position. HTML examples are reconstructions, not source components.

Daniel Sun's portfolio is a typographic monolith: an almost entirely achromatic canvas where a single yellow light beam cuts diagonally across the hero, and the designer's name is set at 246px in an ultra-condensed 900-weight display face that nearly spans the viewport. The system is a designer's gallery — white paper, concrete gray, obsidian type, with one solar accent that doubles as the only chromatic element. Reddit Sans Condensed 900 carries every load-bearing headline at a near-architectural scale, Inter Display 500 handles secondary headings and body, and Caveat 700 injects handwritten intimacy for personal asides like 'From 2020 til today.' Surfaces are flat, shadows are almost absent, and the navigation lives inside a single dark pill capsule that floats at the top of every page. Everything is generous, quiet, and typographically assertive — the page reads as a single confident statement rather than a grid of components.

## Colors

| Name | Value | Role |
|------|-------|------|
| Solar Beam | `#ffd500` | The system's only chromatic color — hero gradient beam, handwritten underline accent, and the pill-shaped highlight button inside the dark nav capsule. This is the single note of warmth in an otherwise achromatic composition; its presence transforms monochrome blocks into a sunlit moment |
| Obsidian | `#000000` | Primary text, display headlines, nav capsule background, and dominant typographic mass. Sets the highest-contrast tone for the condensed display name and grounds the floating nav pill |
| Paper White | `#ffffff` | Card surfaces, portfolio thumbnails, and the base of the white canvas. Provides the surface that the yellow beam and obsidian type play against |
| Concrete | `#f5f5f5` | Page canvas and the lightest card/section background. Warmer than pure white, creates the gallery-wall feel beneath the hero |
| Graphite | `#808080` | Body text, secondary metadata, and muted UI labels. The mid-neutral that bridges the obsidian headlines and the lighter ash tones |
| Ash | `#a6a6a6` | Muted helper text, tertiary body copy, and the soft end of the text scale. Sits beneath Graphite for non-essential information |
| Fog | `#999999` | Subdued heading and label color. Slightly cooler than Ash; used for section labels that need to recede behind the primary type |
| Silver | `#b8b8b8` | Subtle shadow tint and the softest hairline border. Carries the single shadow pattern that gives portfolio cards their barely-there lift |
| Soft Shadow | `#cfcfcf` | Drop shadow and elevation wash. The companion to Silver for the card shadow rgba(0,0,0,0.12) — never seen directly, only felt as depth |

## Typography

### sans-serif — sans-serif — detected in extracted data but not described by AI
- **Weights:** 400
- **Sizes:** 12px
- **Line height:** 1.2

### Reddit Sans Condensed — Display headlines — the name 'DANIEL SUN' at 246px and section titles like 'MY LATEST WORK' at 88px. Ultra-condensed, ultra-black; the type is the architecture. Tracking tightens as size grows (-6.9px at 246px) to keep the massive letterforms visually unified. Substitute: Bebas Neue or Anton for the condensed impact, though no free font fully matches the geometry.
- **Substitute:** Bebas Neue, Anton, Oswald
- **Weights:** 900
- **Sizes:** 36px, 88px, 246px
- **Line height:** 0.90–1.00
- **Letter spacing:** -2.63px at 36px, -2.99px at 88px, -6.89px at 246px
- **OpenType features:** `"cpsp", "liga" 0`

### Inter Display — Section headings and larger body text. The medium weight (not bold) is deliberate — Inter Display 500 sits between the whisper of system text and the shout of the display face, creating a quiet middle register. Used for the 26–30px subheadings and the 18–20px lead paragraphs.
- **Substitute:** Inter (Google Fonts), Söhne
- **Weights:** 500
- **Sizes:** 18px, 20px, 26px, 30px
- **Line height:** 1.10–1.35

### Inter — Body copy, navigation labels, and inline text. The 14px body-sm and 20px subheading sizes are the everyday workhorses; the 128px outlier is a decorative/typographic moment. Consistent 500 weight keeps the text system cohesive without ever feeling bold.
- **Substitute:** Inter (Google Fonts)
- **Weights:** 500
- **Sizes:** 14px, 20px, 128px
- **Line height:** 1.20
- **Letter spacing:** -0.50px at 14px, -0.32px at 20px

### Caveat — Handwritten personal asides — 'From 2020 til today,' date stamps, signature-style annotations. The only script in the system; its presence signals intimacy and breaks the architectural severity of the condensed display type. Use sparingly — one or two instances per section maximum.
- **Substitute:** Caveat (Google Fonts), Patrick Hand
- **Weights:** 700
- **Sizes:** 18px, 28px
- **Line height:** 0.96–1.20
- **Letter spacing:** -0.65px at 18px, -1.01px at 28px

### System Sans — Smallest UI text — copyright lines, micro-labels, and inline metadata. Stays quiet and never competes with the display system.
- **Substitute:** system-ui, -apple-system, Segoe UI
- **Weights:** 400
- **Sizes:** 
- **Line height:** 1.20

### Type Scale

| Role | Family | Weight | Size | Line Height | Letter Spacing |
|------|--------|--------|------|-------------|----------------|
| caption | — | — | 12px | 1.2 | — |
| body-sm | — | — | 14px | 1.2 | -0.5px |
| body | — | — | 18px | 1.3 | — |
| subheading | — | — | 20px | 1.2 | -0.32px |
| heading-sm | — | — | 26px | 1.1 | — |
| heading | — | — | 30px | 1.1 | — |
| heading-lg | — | — | 36px | 0.96 | -2.63px |
| display | — | — | 88px | 0.9 | -2.99px |
| display-xl | — | — | 246px | 1 | -6.89px |

## Spacing & Layout

**Base unit:** 4px

**Density:** comfortable

- **Page max-width:** 1200px
- **Section gap:** 80-120px
- **Card padding:** 32-40px
- **Element gap:** 8-16px

### Border Radius

- **cards:** 14px
- **images:** 14px
- **buttons:** 32px
- **navCapsule:** 110px

## Components

### Nav Capsule
**Role:** Primary navigation container

Floating pill at the top center of every page. Background #1f1f1f (near-black), radius 110px (fully rounded), padding roughly 8px vertical. Contains a small icon glyph, four text nav links (Work, Story, Process, Connect) in Inter 500 14px #ffffff, and a yellow highlight button on the right. Sits above content with no border and no shadow — its dark mass is enough to separate it from the white canvas.

### Nav Highlight Button
**Role:** Primary call-to-action within the nav capsule

Pill-shaped button embedded in the right side of the nav capsule. Background #ffd500 (Solar Beam), text in Obsidian (#000000), radius 32px, padding 8px 20px. Font is Inter 500 at 14px. The only yellow surface in the entire system — its job is to read as a switch turned on against the dark capsule.

### Display Name
**Role:** Hero identity — the designer's name as architecture

Set in Reddit Sans Condensed 900 at 246px, line-height 1.0, letter-spacing -6.89px. Color Obsidian (#000000). Stretches nearly edge-to-edge of the viewport. This is not a headline — it is a typographic mass that functions as the page's structural element. The extreme tracking (-6.89px) is essential: at 246px, default spacing would make the letterforms feel disconnected.

### Hero Gradient Beam
**Role:** Signature visual element — the single chromatic accent

A diagonal yellow gradient beam that cuts from upper-right to lower-left across the hero. Background uses a soft yellow-to-transparent gradient anchored on #ffd500. It is not a shape but a wash of light — edges feather into the white canvas with no hard border. Only one such beam exists per page; it is the solar metaphor that gives the monochrome system its warmth.

### Section Title
**Role:** Section-level display heading

Set in Reddit Sans Condensed 900 at 88px, line-height 0.90, letter-spacing -2.99px. Centered horizontally. Color Obsidian. Used for major section openers like 'MY LATEST WORK.' The same condensed display face as the hero name, scaled down — maintains typographic continuity from page-level to section-level.

### Handwritten Annotation
**Role:** Personal timestamp or intimate label

Set in Caveat 700 at 28px, line-height 0.96, letter-spacing -1.01px. Color Graphite (#808080) or Ash (#a6a6a6). Sits above section titles as a date range or personal note ('From 2020 til today'). The script weight and grey color make it feel like a handwritten margin note — it humanizes the architectural type system.

### Portfolio Card
**Role:** Project/work showcase container

White surface (#ffffff) on the Concrete canvas (#f5f5f5). Radius 14px. Subtle shadow: rgba(0, 0, 0, 0.12) -2px 3px 3px 0px — the only shadow in the system. Padding 32-40px inside. Contains a large preview image (border-radius 14px to match), a project label, and metadata. The 14px radius is the signature curve — softer than sharp, sharper than a pill.

### Lead Paragraph
**Role:** Introductory body text below display headlines

Set in Inter Display 500 at 18-20px, line-height 1.30. Color Graphite (#808080). Two lines maximum — functions as a subtitle to the display headline, not a paragraph. The medium weight (not regular) gives the intro enough presence to sit beneath a 246px headline without disappearing.

### Portfolio Preview Frame
**Role:** Image container within a portfolio card

Screenshot or product image, radius 14px, displayed edge-to-edge within the card padding. Images are not cropped to square — they maintain their natural aspect ratio. The 14px radius mirrors the card, creating visual harmony between the frame and its contents.

## Do's and Don'ts

### Do
- Use Reddit Sans Condensed 900 at 88-246px for every display-level headline; the condensed geometry is the brand.
- Set the name/hero display at exactly 246px with letter-spacing -6.89px — this scale is the signature, not optional.
- Place exactly one yellow gradient beam per hero; it is the only chromatic element in the system.
- Use Caveat 700 at 28px for personal timestamps above section titles, colored Graphite (#808080) so it recedes behind the display face.
- Use the nav capsule (110px radius, #1f1f1f background) for all top-level navigation — never replace it with a flat horizontal bar.
- Round portfolio cards and images at 14px; round buttons at 32px (pill); round the nav at 110px (fully rounded). These three radii are the system's geometry.
- Keep body text in Inter 500 at 18-20px with line-height 1.30; never use weight 400 — the medium weight is non-negotiable for readability against the massive display type.

### Don't
- Do not add chromatic colors beyond #ffd500 — the system is monochrome with one solar accent; introducing a second hue breaks the gallery metaphor.
- Do not set the display name below 88px or above 246px — the extreme scale is the point; intermediate sizes lose impact.
- Do not use shadows on buttons, nav elements, or text blocks; the single shadow pattern is reserved for portfolio cards only.
- Do not replace Reddit Sans Condensed with a non-condensed display face; the compressed letterforms are what make the 246px headline read as a single mass.
- Do not use Caveat for anything longer than a date range or one-line aside; the script loses intimacy when it carries real content.
- Do not add gradients other than the single yellow beam; the system is flat surfaces and one light source — multi-color gradients destroy the restraint.
- Do not use weight 700+ for body or subheading text; the 500 weight is the system's voice — bolding it creates visual noise against the 900-weight display face.

## Elevation

- **Portfolio Card:** `rgba(0, 0, 0, 0.12) -2px 3px 3px 0px`

## Surfaces

- **Gallery Canvas** (`#f5f5f5`) — The base page background — a warm near-white that reads as concrete or gallery wall beneath the hero.
- **Paper Surface** (`#ffffff`) — Cards, portfolio thumbnails, and elevated content blocks. Pure white creates the strongest contrast against the canvas.
- **Nav Capsule** (`#1f1f1f`) — The floating pill navigation — a near-black that anchors the top of every page and frames the yellow highlight button.
- **Obsidian Mass** (`#000000`) — The display headline color — reads as a solid mass at 246px, not merely text. The typographic surface.

## Imagery

Imagery is sparse and intentional. The hero features no photography — only a diagonal yellow gradient beam as an abstract light effect. Portfolio sections display product screenshots inside 14px-radius frames, presented as evidence of work rather than lifestyle context. The visual language is: no people, no environments, no mood photography. When images appear, they are tight product crops on pure surfaces — the work itself is the hero, not the designer. Icons are minimal and outline-style (the small glyph in the nav capsule). The overall density is text-dominant: typography occupies more visual space than any image.

## Layout

Full-bleed layout with a floating centered nav capsule at the top. The hero is unconstrained — the 246px display name stretches to the viewport edges, with no max-width container. Content sections below use a 1200px max-width and center their text. Section rhythm is spacious: 80-120px vertical gaps between major sections, alternating between centered text blocks and full-width portfolio cards. The portfolio section breaks the centered text pattern by introducing a wide card that spans the full content width. Navigation is a single floating pill — no sidebar, no sticky header banner, no mega-menu. The page reads top-to-bottom as: nav → hero (name + beam) → work intro → portfolio grid → next section. The composition is asymmetric in the hero (text-left, beam-right) and centered in all subsequent sections.

## Similar Brands

- **Tobias van Schneider** — Same designer-portfolio structure: oversized condensed display type, monochrome canvas, single accent moment, and generous negative space that lets the name function as architecture.
- **Pentagram** — Same flat-surface gallery aesthetic — white canvas, bold display headings at extreme scale, minimal shadows, and a single chromatic element used as punctuation rather than decoration.
- **Rauno Freiberg** — Same typographic-first philosophy where a condensed display face carries the visual weight and the rest of the page is quiet monochrome; the designer's name IS the hero.
- **Locomotive (locomotive.ca)** — Same dark-pill navigation capsule floating over a light canvas, with a single colored highlight button embedded inside — the nav-as-object approach is a shared signature.


## Lampiran B: Referensi Marco (ringkasan token)

- Karakter: meja kerja personal di kertas dingin; kartu widget mengambang; dua kolom (pernyataan di kiri, widget di kanan).
- Warna: kanvas `#f7f7f9`; kartu `#ffffff`; teks bodi `#333333`, judul `#000000`; hairline `#dedee0`; aksen hanya sebagai tanda kecil (titik status, satu kartu hangat). Dalam proyek ini, satu aksen hijau.
- Tipografi: sans geometris; label mikro 8-12px dengan tracking lebar (0,05-0,2em), judul besar dengan tracking sedikit negatif (-0,013em pada 31px).
- Bentuk: radius kartu 18px, widget hingga 32px, tombol dan chip 100px+, nav pill 230px.
- Bayangan: sangat tipis (`0 1px 2px` hingga `0 1px 3px`), tidak lebih dalam dari blur 3px.
- Kerapatan: ringkas; gap 24px, padding kartu 24px; maksimal lebar 1200px.
- Larangan: tombol terisi warna kromatik (kecuali satu tombol nav di proyek ini); sudut tajam pada kartu; bayangan dalam; memecah ritme dua kolom dengan blok teks penuh lebar.

design md:
# Marco — Style Reference
> Moleskine notebook in cool morning light — a personal workspace where widgets float like sticky notes on warm paper.

**Theme:** light

Source measurements are normalized; roles and recommendations are interpreted. Font summary lists are independent, not paired by position. HTML examples are reconstructions, not source components.

Marco's site reads like a personal workspace laid out on cool paper: a near-white canvas, furniture-soft cards, and dense but breathable type that feels like a Moleskine spread in morning light. The layout is a disciplined two-column grid — a long-form manifesto on the left, a stack of embedded widgets, app screenshots, and avatar cards on the right — held together by generous rounded corners and whisper-light shadows. Color is rationed: 99% of the page is neutral, with violet and coral-pink appearing only as tiny functional punctuation for active links, the 'Work' status dot, and one warm gradient card. Typography is the main voice — three custom geometric sans-serifs (Maison Neue, Graphik, Neue Montreal) layered with careful tracking shifts, wide on micro-labels and tightening on larger display sizes.

## Colors

| Name | Value | Role |
|------|-------|------|
| Iris Glow | `#6366f1` | Violet accent for outlined action borders, linked labels, and lightweight interactive emphasis. |
| Signal Blue | `#1685c7` | Blue accent for outlined action borders, linked labels, and lightweight interactive emphasis. Do not promote it to the primary CTA color |
| Ember Red | `#e92f48` | Red wash for highlight backgrounds, decorative bands, and soft emphasis behind content |
| Coral Pulse | `linear-gradient(16deg, rgb(255, 77, 121), rgb(255, 128, 64) 85%)` | Gradient start and secondary accent — used sparingly on warm cards and the pink-orange wash |
| Sunset Amber | `#ff8040` | Gradient end — the warm terminal of the coral-to-orange wash used on featured cards |
| Ink | `#000000` | Headings, strong borders, icon fills — the heaviest text weight and the sharpest structural lines |
| Graphite | `#333333` | Primary body text and the workhorse border color — appears more than any other color, forming the connective tissue of the layout |
| Slate | `#707070` | Secondary headings and muted borders |
| Cool Gray | `#6b7280` | Body and helper text where lower contrast is acceptable |
| Steel | `#7e8389` | Subtle text and quiet borders |
| Fog | `#949494` | Tertiary text and disabled-leaning borders |
| Pearl | `#dedee0` | Hairline borders, icon containers, and link outlines that need to recede |
| Mist | `#cccccf` | Soft surface tints and the lightest structural dividers |
| Paper | `#ffffff` | Card surfaces and elevated content — sits one step above the page canvas |
| Linen | `#f7f7f9` | Page canvas and the base of the surface stack |
| Ash | `#f2f2f2` | Secondary surface for nested elements and subtle backgrounds |
| Cream | `#fff9ed` | Warm accent card surface — the only place the system breaks from cool neutrals |
| Lavender Mist | `#eff0ff` | Active and hover wash — the soft halo behind selected links and cards |
| Rose Glow | `#f8c1c8` | Tinted shadow color for warm cards — a blush offset shadow that ties to the coral accent |

## Typography

### Maison Neue — Primary body and UI text. Weight 400 for running copy, 600 for emphasis. The 40px size anchors the manifesto headlines. Substitutes: Inter, Söhne, General Sans
- **Substitute:** Inter
- **Weights:** 400, 600
- **Sizes:** 12px, 14px, 40px
- **Line height:** 1.00, 1.43, 1.67
- **Letter spacing:** 0.007em consistently
- **OpenType features:** `"ss01" on, "cv11" on`

### Graphik — Links, buttons, card titles, and section headings. The workhorse for anything interactive or navigational. Substitutes: Inter, Untitled Sans, Söhne
- **Substitute:** Inter
- **Weights:** 400, 500, 600
- **Sizes:** 14px, 16px, 20px, 31px
- **Line height:** 1.25, 1.38, 1.43, 1.50
- **Letter spacing:** -0.013em at 31px, positive 0.005–0.014em at smaller sizes — headlines tighten, body loosens

### Neue Montreal — Micro-labels, tags, metadata, and tracked-out captions. The wide tracking at small sizes is the signature move — it makes 8–12px text feel like printed stationery, not UI chrome. Substitutes: Neue Haas Grotesk, Inter Tight, Monument Grotesk
- **Substitute:** Inter Tight
- **Weights:** 400, 500
- **Sizes:** 8px, 10px, 12px, 14px, 16px, 18px, 20px, 22px, 24px, 26px
- **Line height:** 1.00, 1.11, 1.13, 1.20, 1.25, 1.45, 1.67
- **Letter spacing:** 0.2em at 8px → 0.05em at 26px — inverse tracking curve where the smallest labels are widest

### SF Pro Display — System font fallback for native-feeling status bar text and a few embedded contexts. Rarely the primary face.
- **Substitute:** SF Pro Display
- **Weights:** 400, 600
- **Sizes:** 8px, 11px, 16px
- **Line height:** 0.75, 1.40, 1.63, 1.82
- **Letter spacing:** -0.0040em, 0.0130em, 0.0180em

### Chirp — Twitter embed text — appears only inside embedded tweet widgets, never used for first-party content
- **Substitute:** Chirp
- **Weights:** 400, 700
- **Sizes:** 16px, 17px, 24px
- **Line height:** 1.20, 1.35, 1.40

### Bluu suuperstar — Display/decorative accent — used at most three times on the page for a single moment of personality. The 38px size is the signature flourish.
- **Substitute:** Recoleta
- **Weights:** 700
- **Sizes:** 15px, 16px, 38px
- **Line height:** 1.00, 1.33

### Type Scale

| Role | Family | Weight | Size | Line Height | Letter Spacing |
|------|--------|--------|------|-------------|----------------|
| label-sm | — | — | 10px | 1.2 | 0.75px |
| label | — | — | 12px | 1.25 | 0.6px |
| body-sm | — | — | 14px | 1.43 | 0px |
| body | — | — | 16px | 1.5 | 0px |
| subheading | — | — | 20px | 1.38 | 0.1px |
| heading-sm | — | — | 24px | 1.25 | 0px |
| heading | — | — | 31px | 1.25 | -0.4px |
| display | — | — | 40px | 1.67 | 0px |

## Spacing & Layout

**Base unit:** 4px

**Density:** compact

- **Page max-width:** 1200px
- **Section gap:** 24px
- **Card padding:** 24px
- **Element gap:** 8px

### Border Radius

- **cards:** 18px
- **icons:** 4px
- **images:** 12px
- **inputs:** 12px
- **buttons:** 100px
- **navPill:** 230px
- **widgets:** 32px

## Components

### Pill Navigation Bar
**Role:** Top-level site navigation

White capsule with 230px border-radius floating at the top center. Contains 4 nav links in a single horizontal row. Background #ffffff, no visible border, subtle shadow rgba(0,0,0,0.06) 0px 1px 2px. Height ~48px, padding 6px vertical.

### Nav Link with Status Dot
**Role:** Active navigation item indicator

Graphik 14px weight 500, color #333333. When active, a 6px Ember Red (#e92f48) dot sits to the left of the label with 6px margin. The active 'Work' item in the screenshot shows this pattern — the dot is the only color in the nav.

### Manifesto Card
**Role:** Long-form statement block on the left column

No visible card surface — text sits directly on the Linen canvas. Maison Neue 14px line-height 1.67, color #333333. The pattern is short declarative statements, each on its own line, creating vertical rhythm. Asterisk-prefixed footnotes in 12px at the bottom.

### Widget Embed Card
**Role:** Container for third-party app embeds (Notion, Twitter, etc.)

White #ffffff surface, 18px border-radius, 24px padding. Contains a small label header in Neue Montreal 12px with 0.05em tracking, followed by the embed content. Soft dual-layer shadow rgba(0,0,0,0.06) 0px 1px 2px, rgba(0,0,0,0.1) 0px 1px 3px.

### Avatar Profile Card
**Role:** Social identity display (Twitter handle, etc.)

White surface, 18px radius, 24px padding. Contains 40px circular avatar on the left, display name in Graphik 16px weight 600, handle in Graphik 14px weight 400 color #707070. A small action link (Twitter icon or 'Read mid tweets') sits at the bottom with an arrow.

### Gradient Feature Card
**Role:** Single warm-accent card that breaks the monochrome system

Coral Pulse to Sunset Amber gradient (16deg, #ff4d79 → #ff8040), 18px radius, 24px padding. White text. Graphik 20px weight 600 for the title, 16px weight 400 for body. One per page maximum — the warm hit that earns the rest being cool.

### App Icon Row
**Role:** Horizontal scroll of app/product icons

Series of 40–48px square icons (4px radius) in a horizontal row with 8px gaps. Each icon is the native brand mark — colorful, not custom-styled. Sits inside a Widget Embed Card.

### Phone Mockup Card
**Role:** iPhone screenshot embed

White surface, 12px radius, contains a phone-shaped image with its own internal radius. The phone image has rgba(0,0,0,0.25) 0px 1px 2px shadow. Sits inside a Widget Embed Card with 24px padding.

### Pill Link Chip
**Role:** Inline link with chromatic border

100px border-radius, Signal Blue (#1685c7) or Iris Glow (#6366f1) border 1px, transparent background, Graphik 14px weight 500 in the matching color. 8px 14px padding. Shadow rgba(0,0,0,0.25) 0px 1px 3px for subtle depth.

### Schedule Bar
**Role:** Availability sharing widget

White card, 18px radius, contains stacked time-zone rows in Graphik 14px. The primary 'Create new reply with availability' action is a full-width pill in the Coral Pulse gradient with white text, 100px radius, 14px 20px padding.

### Color Swatch Row
**Role:** Multi-color tag/label row

Horizontal row of 8px-radius pill chips, each with a different pastel background (pink, yellow, green, blue, purple). Neue Montreal 12px label text, 100px radius, 6px 12px padding. Functions as category filters or status tags.

### Tracked Label
**Role:** Small section header or metadata tag

Neue Montreal 12px weight 500, letter-spacing 0.05em, color #707070. Often paired with a 4px colored dot prefix (violet, green, orange, red) to create a tagged-list pattern.

## Do's and Don'ts

### Do
- Use 18–32px border-radius on all card surfaces — sharp corners break the soft-furniture feel
- Use 100px+ radius for all interactive elements (links, tags, buttons) to maintain the pill vocabulary
- Apply the inverse tracking curve: Neue Montreal at 8–12px needs 0.05–0.2em letter-spacing, Graphik at 31px needs -0.013em
- Keep chromatic colors to single-pixel punctuation — one dot, one border, one gradient card per region
- Use the Coral-to-Amber gradient on at most one card per page; the rest of the system stays cool
- Place widgets and embeds in the right column with 24px padding and 18px radius — never let them touch the page edge
- Pair a 4px colored dot with Neue Montreal tracked labels to build tagged-list patterns

### Don't
- Don't fill buttons with chromatic colors — the system uses outlined and pill links, not filled CTAs
- Don't use shadows deeper than 3px blur — elevation should whisper, not announce
- Don't apply the cream (#fff9ed) or gradient surface to more than one element per view
- Don't use sharp 0–4px radii on card surfaces — reserve those for icons and small UI only
- Don't break the two-column rhythm: manifesto left, widgets right, never full-width text blocks
- Don't use system fonts for body copy — the custom geometric sans-serifs are the voice
- Don't use black (#000000) for body text — reserve it for headings and strong borders, use Graphite (#333333) for running text

## Elevation

- **Embedded images and screenshots:** `rgba(0, 0, 0, 0.25) 0px 1px 2px 0px`
- **Widget cards:** `rgba(0, 0, 0, 0.06) 0px 1px 2px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px`
- **Link chips with border:** `rgba(0, 0, 0, 0.25) 0px 1px 3px 0px`
- **Tinted warm card:** `Box shadow tinted with #f8c1c8 for a blush offset`

## Surfaces

- **Linen Canvas** (`#f7f7f9`) — Page background — the cool paper the whole layout sits on
- **Paper Card** (`#ffffff`) — Primary card surface for widget and embed containers
- **Cream Card** (`#fff9ed`) — Warm accent surface for one featured card per page
- **Ash Surface** (`#f2f2f2`) — Nested element backgrounds inside cards
- **Lavender Wash** (`#eff0ff`) — Active state and hover halo

## Imagery

The visual language is embed-driven rather than illustrated: product screenshots from native apps (Notion, iPhone, Figma, Word), colorful third-party app icons, real photography (a coastal landscape photo appears in the widget grid), and the Twitter blue checkmark badge. All images sit inside white cards with 12px radius and soft 1–2px shadows. No custom illustration system, no abstract graphics, no 3D renders. The philosophy is: show the real tools, not representations of them. Full-bleed photography is rare; most visuals are contained within card boundaries at 4–12px radius. The color treatment of native app icons is left untouched — the violet Notion, red Figma, and blue Word marks provide the only multicolor moments in an otherwise neutral system.

## Layout

The page uses a two-column grid at max-width 1200px, centered on the Linen (#f7f7f9) canvas. The left column (~40%) holds long-form manifesto text in a single vertical stack of declarative statements, with no card surface — text floats directly on the canvas. The right column (~60%) holds a masonry-like stack of widget cards of varying heights: Notion workspace previews, app icon rows, phone mockups, avatar cards, and one warm gradient card. Navigation is a single pill-shaped capsule centered at the top of the page with 230px radius. A 'Look around...' prompt sits in the top-right corner. The rhythm is consistent: 24px gap between widgets in the right column, breathing room around the left column text, and a max of 24px section padding. The overall density is compact but never cramped — cards have generous internal padding (24px) while the gaps between them stay tight.

## Similar Brands

- **Read.cv** — Same personal-workspace aesthetic: two-column layout with manifesto-style left text, widget/embed right column, generous rounded corners on cards, and near-monochrome palette with a single warm accent card
- **Bento.me** — Similar compact grid of link cards with pill-shaped interactive elements, soft shadows, and the 'embed your real tools' philosophy of showing native app icons rather than custom illustrations
- **Are.na** — Same restrained typography, generous whitespace, and the discipline of using color only as functional punctuation rather than decorative fills
- **Linear** — Shares the custom geometric sans-serif typography approach and the use of subtle 1–3px shadows on elevated surfaces rather than dramatic elevation
- **Notion** — The widget-embed card pattern directly mirrors Notion's embed blocks — white surface, 18px radius, soft dual-layer shadow, small tracked label header

