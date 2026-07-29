// src/data/blogs.js
// Kumpulan tulisan/blog kamu yang di-hosting di platform lain (Medium, dev.to,
// Hashnode, Substack, dll). Cukup edit array ini setiap kali ada tulisan baru.

const blogs = [
  {
    id: 1,
    title: "#1: Introduction to Business Analysis",
    excerpt:
      "Membahas dasar Business Analysis, peran Business Analyst, proses memahami masalah bisnis, menggali kebutuhan stakeholder, hingga bagaimana solusi dapat memberikan value bagi organisasi.",
    image: "/blog1.jpg",
    date: "2026-07-26",
    readTime: "12 menit baca",
    tags: ["Business Analysis", "Business Analyst", "IIBA"],
    platform: "WordPress",
    url: "https://dewimhr7.wordpress.com/2026/07/26/belajar-business-analyst-dari-nol-1-introduction-to-business-analysis/",
  },
  {
    id: 2,
    title: "#2: Business Problem Analysis dalam Business Analysis",
    excerpt:
      "Membahas bagaimana Business Analyst memahami masalah bisnis sebelum menentukan solusi, mulai dari Current State Analysis, stakeholder identification, root cause analysis, hingga menerjemahkan business problem menjadi kebutuhan solusi.",
    image: "/blog2.png",
    date: "2026-07-27",
    readTime: "15 menit baca",
    tags: ["Business Analysis", "Business Problem Analysis", "BABOK"],
    platform: "WordPress",
    url: "https://dewimhr7.wordpress.com/2026/07/27/2-business-problem-analysis-dalam-business-analysis/",
  },
  {
    id: 3,
    title: "#3: Stakeholder Analysis dalam Business Analysis: Studi Kasus Implementasi ERP Employee Leave Management System",
    excerpt:
      "Membahas bagaimana Business Analyst melakukan stakeholder identification, Power-Interest Grid analysis, dan RACI Matrix untuk memastikan komunikasi, tanggung jawab, dan kebutuhan stakeholder dapat dikelola dengan baik dalam proyek implementasi ERP.",
    image: "/blog3.png",
    date: "2026-07-29",
    readTime: "18 menit baca",
    tags: ["Business Analysis", "Stakeholder Analysis", "ERP"],
    platform: "WordPress",
    url: "https://dewimhr7.wordpress.com/2026/07/29/3-mengelola-stakeholder-dalam-implementasi-sistem-manajemen-cuti-berbasis-erp-odoo/",
  },
];

export default blogs;