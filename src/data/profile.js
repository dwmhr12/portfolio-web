// =============================================================
// FILE INI ISINYA DATA DIRI KAMU.
// Edit teks di bawah ini sesuai identitas kamu — sisanya
// (tampilan/layout) sudah otomatis mengikuti.
// =============================================================

export const profile = {
  name: 'Dewi Maharani',
  initials: 'DM', // dipakai di logo pojok kiri atas
  greeting: 'Hello, I am Rani',
  shortTagline: 'Business • Systems • Data • Design',

  role: 'System Analyst • Data Engineer • UI/UX Design',
  tagline: '',

  // Ditampilkan besar di halaman Home, di kotak biru (contoh: "PORTOFOLIO")
  heroWord: 'PORTOFOLIO',
  heroYear: '2026',

  // Hashtag kecil di halaman Home (kiri atas)
  tags: ['#SystemAnalyst', '#DataEngineering', '#AIEngineer', '#UIUXDesigner'],

  aboutTitle: 'Business & System Analyst',
  // Paragraf singkat tentang kamu (2-4 kalimat cukup)
  about: `I enjoy understanding how a business process works before thinking about the solution. That's why I'm interested in business analysis and system design. Through academic and personal projects, I've gained experience in requirement analysis, business process modeling, BRD and SRS documentation, UML design, database design, and UI/UX prototyping with Figma. I enjoy working at the intersection of business, systems, and data to create practical solutions`,

  photoUrl: '/rani.jpeg', // isi link foto kamu (atau taruh file di /public lalu isi "/nama-file.jpg")
  location: 'Surabaya, Indonesia',
  email: 'dewimaharani170104@gmail.com',
  cvUrl: '', // isi link CV (contoh: link Google Drive), kosongkan jika belum ada

  socials: [
    { label: 'LinkedIn', handle: '@dwmhr', url: 'https://linkedin.com/in/dwmhr/' },
    { label: 'GitHub', handle: '@dwmhr12', url: 'https://github.com/dwmhr12' },
    { label: 'Instagram', handle: '@dwmhr1.2_', url: 'https://instagram.com/dwmhr1.2_' },
  ],

  // Riwayat pendidikan — cuma yang paling relevan (jenjang kuliah)
  education: [
    {
      title: 'Bachelor of Information Systems',
      place: 'Institut Teknologi Sepuluh Nopember (ITS)',
      period: '2022 — 2026',
      score: 'GPA 3.55 / 4.00',
    },
  ],

  // Sertifikasi — tampil di halaman Resume. Kosongkan array ini ([])
  // kalau belum ada sertifikat, section-nya otomatis nggak muncul.
  // "credentialUrl" boleh dikosongkan '' kalau belum ada link verifikasi.
  certifications: [
    {
      title: 'Google Cloud Computing Foundations: Data, ML, and AI in Google Cloud',
      issuer: 'Google',
      date: '2025',
      credentialUrl: 'https://www.cloudskillsboost.google/public_profiles/53ec720b-a039-4945-806c-a3db28faa9a4/badges/14114801?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share',
    },
    {
      title: 'Boost Productivity with Gemini in BigQuery',
      issuer: 'Google',
      date: '2025',
      credentialUrl: 'https://www.cloudskillsboost.google/public_profiles/53ec720b-a039-4945-806c-a3db28faa9a4/badges/14117494?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share',
    },
    {
      title: 'Gemini for Data Scientists and Analysts',
      issuer: 'Google',
      date: '2025',
      credentialUrl: 'https://www.cloudskillsboost.google/public_profiles/53ec720b-a039-4945-806c-a3db28faa9a4/badges/14117974?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share',
    },
    {
      title: 'Prompt Design in Vertex AI',
      issuer: 'Google',
      date: '2025',
      credentialUrl: 'https://www.cloudskillsboost.google/public_profiles/53ec720b-a039-4945-806c-a3db28faa9a4/badges/14056343?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share',
    },
    {
      title: 'SQL Intermediate',
      issuer: 'Sololearn',
      date: '2024',
      credentialUrl: 'https://www.sololearn.com/certificates/CC-W80XOMG7',
    },
    {
      title: 'Introduction to Python Programming',
      issuer: 'Dicoding Indonesia',
      date: '2025',
      credentialUrl: 'https://www.dicoding.com/certificates/2VX34LY13ZYQ',
    },
    {
      title: 'Fundamentals of Structured Query Language (SQL)',
      issuer: 'Dicoding Indonesia',
      date: '2024',
      credentialUrl: 'https://www.dicoding.com/certificates/98XW56QV0PM3',
    },
    {
      title: 'Introduction to Data Visualization',
      issuer: 'Dicoding Indonesia',
      date: '2024',
      credentialUrl: 'https://www.dicoding.com/certificates/QLZ9V8GREX5D',
    },
    {
      title: 'Introduction to SAP S/4HANA with GBI 4.2',
      issuer: 'SAP',
      date: '2023',
      credentialUrl: '',
    },
  ],
}

// Riwayat pengalaman (magang/organisasi/kerja) — urutan dari terbaru
export const experience = [
  {
    period: 'Jul 2026 — Present',
    title: 'UI/UX Designer (Freelance)',
    place: 'Freelance (Client Projects)',
    description: [
      'Designed high-fidelity user interfaces based on client requirements.',
      'Created interactive prototypes using Figma.',
      'Refined designs through multiple feedback iterations with clients.',
    ],
    current: true,
  },
  {
    period: 'Nov 2025 — Jan 2026',
    title: 'Data Engineer (Contract)',
    place: 'PT Wiratek',
    description: [
      'Built ETL data pipelines using Apache NiFi.',
      'Processed data from Excel files and REST APIs into relational databases.',
      'Performed data validation, cleansing, transformation, and workflow automation.',
    ],
    current: false,
  },
  {
    period: 'Jul 2025 — Oct 2025',
    title: 'Data Engineer Intern',
    place: 'PT Wiratek',
    description: [
      'Developed a Retrieval-Augmented Generation (RAG) pipeline for the PLN Insight Generatif project.',
      'Processed documents through extraction, cleansing, chunking, embedding, and vector storage in Milvus.',
      'Evaluated multiple retrieval strategies to identify the best-performing approach.',
    ],
    current: false,
  },
  {
    period: 'Jul 2025 — Oct 2025',
    title: 'Presentation Designer (Freelance)',
    place: 'Fastwork',
    description: [
      'Designed presentation decks tailored to client requirements.',
      'Created presentation materials and simple websites using Canva.',
      'Revised designs based on client feedback before final delivery.',
    ],
    current: false,
  },
]

// Pengalaman organisasi/kepanitiaan yang menunjukkan kemampuan leadership —
// tampil di kolom "Education & Leadership" pada halaman Resume.
export const leadership = [
  {
    title: 'Director of Public Relations',
    place: 'Information Systems Expo (ISE!) 2024',
    points: [
      'Managed and coordinated a team of 30 Public Relations members.',
      'Led promotional roadshows to 100+ senior high schools.',
      'Collaborated with 30+ media partners.',
    ],
  },
  {
    title: 'Director of Human Resources',
    place: 'IEEE ITS Student Branch',
    points: [
      'Led a team of 4 staff members.',
      'Organized staff development programs.',
      'Conducted performance evaluations.',
    ],
  },
  {
    title: 'Student Orientation Guide',
    place: 'BEM FTEIC ITS',
    points: [
      'Mentored and guided 30+ new students.',
      'Facilitated discussions and orientation activities.',
    ],
  },
]