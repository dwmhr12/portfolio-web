// src/data/blogs.js
// Kumpulan tulisan/blog kamu yang di-hosting di platform lain (Medium, dev.to,
// Hashnode, Substack, dll). Cukup edit array ini setiap kali ada tulisan baru.

const blogs = [
  {
    id: 1,
    title: "Belajar Exploratory Data Analysis dari Nol",
    excerpt:
      "Catatan proses saya memahami EDA: mulai dari cek missing value, distribusi data, sampai insight pertama dari dataset publik.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    date: "2025-03-12",
    readTime: "6 menit baca",
    tags: ["Data Analysis", "Python"],
    platform: "Medium",
    url: "https://medium.com/@username/judul-tulisan",
  },
  {
    id: 2,
    title: "SQL untuk Analis: Query yang Sering Kepake",
    excerpt:
      "Rangkuman pattern query SQL (window function, CTE, join bertingkat) yang paling sering saya pakai saat kerja dengan data harian.",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80",
    date: "2025-05-02",
    readTime: "8 menit baca",
    tags: ["SQL", "Belajar"],
    platform: "dev.to",
    url: "https://dev.to/username/judul-tulisan",
  },
  {
    id: 3,
    title: "Dashboard Pertamaku Pakai Looker Studio",
    excerpt:
      "Cerita di balik pembuatan dashboard penjualan sederhana: mulai dari cleaning data sampai desain visual biar enak dibaca.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    date: "2025-07-20",
    readTime: "5 menit baca",
    tags: ["Visualization", "Looker Studio"],
    platform: "Hashnode",
    url: "https://username.hashnode.dev/judul-tulisan",
  },
];

export default blogs;