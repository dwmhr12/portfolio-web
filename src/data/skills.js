// src/data/skills.js
// Balik ke struktur awal: 2 kelompok (Core Competencies & Tools).
// Bedanya, sekarang tiap item bukan cuma string, tapi object
// { name, description } — `description`-nya dipakai buat tooltip
// pas di-hover di halaman Resume. Tinggal tambah/ubah/hapus item
// di array masing-masing.

export const coreCompetencies = [
  {
    name: 'Business Analysis',
    description: 'Menerjemahkan kebutuhan bisnis jadi solusi yang bisa dieksekusi tim teknis.',
  },
  {
    name: 'System Analysis',
    description: 'Menganalisis alur sistem existing buat menemukan celah dan peluang perbaikan.',
  },
  {
    name: 'Requirement Gathering',
    description: 'Menggali kebutuhan stakeholder lewat wawancara, workshop, dan observasi.',
  },
  {
    name: 'Business Process Modeling',
    description: 'Memetakan proses bisnis end-to-end pakai notasi standar seperti BPMN.',
  },
  {
    name: 'BRD & SRS Documentation',
    description: 'Menyusun dokumen kebutuhan bisnis & sistem yang jadi acuan pengembangan.',
  },
  {
    name: 'UML Modeling',
    description: 'Menggambarkan struktur & perilaku sistem lewat diagram UML.',
  },
  {
    name: 'Database Design',
    description: 'Merancang skema database yang efisien dan sesuai kebutuhan bisnis.',
  },
  {
    name: 'Data Analysis',
    description: 'Mengolah data mentah jadi insight yang mendukung pengambilan keputusan.',
  },
  {
    name: 'UI/UX Prototyping',
    description: 'Membuat wireframe & prototype interaktif sebelum masuk development.',
  },
]

export const tools = [
  {
    name: 'Microsoft Word',
    description: 'Menyusun dokumen laporan, proposal, dan dokumentasi formal.',
  },
  {
    name: 'Python',
    description: 'Bahasa pemrograman untuk analisis data, automasi, dan scripting.',
  },
  {
    name: 'SQL',
    description: 'Query dan mengelola data dari relational database.',
  },
  {
    name: 'MySQL',
    description: 'Sistem manajemen database relasional open-source.',
  },
  {
    name: 'SAP S/4HANA',
    description: 'Sistem ERP enterprise untuk proses bisnis yang terintegrasi.',
  },
  {
    name: 'Power BI',
    description: 'Membuat dashboard & visualisasi data interaktif.',
  },
  {
    name: 'Apache NiFi',
    description: 'Mengotomasi alur perpindahan dan transformasi data antar sistem.',
  },
  {
    name: 'Milvus',
    description: 'Vector database untuk pencarian data berbasis kemiripan (similarity search).',
  },
  {
    name: 'Figma',
    description: 'Merancang UI/UX dan prototipe interaktif secara kolaboratif.',
  },
  {
    name: 'Canva',
    description: 'Membuat materi visual & desain grafis dengan cepat.',
  },
  {
    name: 'Draw.io',
    description: 'Menggambar diagram alur, flowchart, dan arsitektur sistem.',
  },
  {
    name: 'BPMN.io',
    description: 'Membuat diagram proses bisnis berbasis notasi BPMN.',
  },
  {
    name: 'Git',
    description: 'Version control untuk melacak perubahan kode secara terstruktur.',
  },
  {
    name: 'GitHub',
    description: 'Platform kolaborasi dan hosting kode berbasis Git.',
  },
]