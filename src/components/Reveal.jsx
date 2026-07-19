import { motion } from 'framer-motion'

// Komponen pembungkus buat animasi "muncul satu-satu".
// Karena pakai `whileInView`, ini otomatis jalan di DUA situasi:
// 1. Pas pertama buka web — kalau section-nya kebetulan langsung
//    kelihatan di layar (misal Hero), dia langsung muncul dengan animasi.
// 2. Pas di-scroll — section yang belum kelihatan akan muncul dengan
//    animasi begitu masuk ke area layar.
//
// Cara pakai — bungkus tiap elemen yang mau muncul satu-satu:
//   <Reveal><h1>Judul</h1></Reveal>
//   <Reveal delay={0.1}><p>Teks kedua, muncul sedikit belakangan</p></Reveal>
//
// Buat list/grid (misal kartu tag, kartu project, dst), kasih `delay`
// yang beda tiap item pakai index * 0.1 supaya muncul satu-satu berurutan:
//   {items.map((item, i) => (
//     <Reveal key={item.id} delay={i * 0.1}>...</Reveal>
//   ))}

export default function Reveal({
  children,
  delay = 0,
  y = 24,
  duration = 0.5,
  className = '',
  once = true,
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  )
}