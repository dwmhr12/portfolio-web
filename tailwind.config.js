/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // dark mode diaktifkan lewat class "dark" di <html>
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // ===== Mode terang =====
        paper: '#FAF6F0',     // background halaman — krem hangat, bukan putih polos
        card: '#FFFDFB',      // background kartu — putih dengan sedikit rona hangat
        ink: '#241F1A',       // teks utama — coklat gelap, bukan hitam pekat
        muted: '#79695B',     // teks sekunder — taupe hangat
        line: '#E7DDCF',      // garis/border tipis — beige lembut

        // ===== Mode gelap (dipakai lewat prefix dark:) =====
        'paper-dark': '#15120F',   // hampir hitam dengan rona coklat/espresso
        'card-dark': '#1F1A15',
        'ink-dark': '#F5EFE6',
        'muted-dark': '#B2A392',
        'line-dark': '#332A20',

        // ===== Aksen (sama di kedua mode) =====
        primary: '#B9622A',        // tembaga/copper — hangat tapi tetap tegas & profesional
        'primary-dark': '#E08A44', // versi lebih terang untuk dark mode
        navy: '#2E2621',           // coklat gelap pekat, pengganti "navy" untuk blok besar/CTA/logo
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      borderRadius: {
        xl2: '1.25rem',
      },
    },
  },
  plugins: [],
}