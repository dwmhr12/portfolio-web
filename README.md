# Portofolio Web

Website portofolio dengan React + Vite + Tailwind CSS. Ada fitur **filter proyek**
berdasarkan bidang (System Analyst / Data Analyst / Data Engineer) sesuai posisi
yang kamu lamar.

## Struktur folder (yang penting aja)

```
src/
├─ data/
│  ├─ profile.js     ← EDIT DI SINI: nama, bio, pengalaman, pendidikan, kontak
│  ├─ skills.js      ← EDIT DI SINI: daftar skill
│  └─ projects.js    ← EDIT DI SINI: daftar proyek + kategori filternya
├─ pages/            ← Satu file = satu halaman (Home, About, Resume, Work)
├─ components/       ← Potongan UI yang dipakai berulang (Navbar, Footer, dll)
├─ hooks/
│  └─ useTheme.js    ← Logika dark mode
├─ App.jsx           ← Navigasi antar halaman
└─ index.css         ← Warna & font global (Tailwind)
```

**99% edit yang kamu perlu lakukan cuma di tiga file:**
`src/data/profile.js`, `src/data/skills.js`, dan `src/data/projects.js`.
Sudah aku isi contoh dan komentar penjelasan di dalamnya — tinggal ganti
teksnya sesuai dirimu.

Situs ini punya 4 halaman (Home, About, Resume, Work) yang dipindah tanpa
reload halaman — tombolnya ada di `src/components/Navbar.jsx`. Ada juga
tombol matahari/bulan di pojok kanan atas untuk ganti mode terang/gelap.

## Cara jalanin di komputer kamu (lewat VS Code)

1. Buka folder ini di VS Code.
2. Buka terminal di VS Code (`Terminal > New Terminal`), lalu jalankan:
   ```
   npm install
   ```
   (ini cuma perlu sekali di awal, buat download semua library yang dipakai)
3. Jalankan:
   ```
   npm run dev
   ```
4. Buka link yang muncul di terminal (biasanya `http://localhost:5173`) di browser.
   Setiap kamu save file, halamannya otomatis refresh — jadi enak buat lihat
   perubahan langsung.

## Cara edit isi web

1. Buka `src/data/profile.js` → ganti nama, email, lokasi, pengalaman, pendidikan.
2. Buka `src/data/skills.js` → ganti daftar skill kamu.
3. Buka `src/data/projects.js` → ganti/tambah proyek. Tiap proyek punya field
   `track` yang menentukan dia muncul di filter mana:
   - `'system-analyst'`
   - `'data-analyst'`
   - `'data-engineer'`
   - Boleh lebih dari satu, contoh: `track: ['data-analyst', 'data-engineer']`
   - Field `image` bisa diisi link screenshot proyek kamu (kalau kosong, otomatis
     pakai gradient placeholder)
4. Kalau mau ganti warna atau font, buka `tailwind.config.js` (warna) atau
   `index.html` (font, lewat Google Fonts).

## Cara push ke GitHub

Karena kamu sudah punya akun GitHub, tinggal:

```bash
git init
git add .
git commit -m "Portofolio pertama"
```

Lalu buat repository baru di github.com (jangan centang "Add README", karena
kita sudah punya), lalu jalankan perintah yang ditampilkan GitHub, biasanya:

```bash
git remote add origin https://github.com/USERNAME_KAMU/NAMA_REPO.git
git branch -M main
git push -u origin main
```

## Cara deploy ke Vercel

1. Buka vercel.com dan login pakai akun GitHub kamu.
2. Klik **Add New → Project**.
3. Pilih repository GitHub yang tadi kamu push.
4. Vercel otomatis mendeteksi ini project Vite — biarkan setting default
   (Build Command: `npm run build`, Output Directory: `dist`).
5. Klik **Deploy**. Tunggu 1-2 menit, web kamu sudah online dengan URL
   `nama-project.vercel.app`.

Setiap kali kamu `git push` update baru ke GitHub, Vercel otomatis build ulang
dan update website kamu — gak perlu deploy manual lagi.

## Tips

- Ganti favicon di folder `public/` kalau mau ada ikon custom di tab browser.
- Kalau mau custom domain (misal `namamu.com`), bisa diatur di dashboard
  Vercel → Settings → Domains.
