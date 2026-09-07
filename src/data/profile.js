// =============================================================
// FILE INI ISINYA DATA DIRI KAMU.
// Edit teks di bawah ini sesuai identitas kamu — sisanya
// (tampilan/layout) sudah otomatis mengikuti.
// =============================================================

export const profile = {
  name: 'Dewi Maharani',
  initials: 'DM', // dipakai di logo pojok kiri atas
  greeting: 'Hello, I am Rani',
  shortTagline: 'Systems • Data • Automation',

  role: 'IT System Analyst • Data, AI & Automation',
  tagline: '',

  // Ditampilkan besar di halaman Home, di kotak biru (contoh: "PORTOFOLIO")
  heroWord: 'PORTOFOLIO',
  heroYear: '2026',

  // Hashtag kecil di halaman Home (kiri atas)
  tags: ['#IT System Analyst | Data, AI & Automation'],

  aboutTitle: 'IT System Analyst | Data, AI & Automation',
  // Paragraf singkat tentang kamu (2-4 kalimat cukup)
  about: `Information Systems graduate with experience in system analysis, data, AI, and automation. I've worked on requirements analysis, business processes, database design, REST API integration, ETL workflows, and RAG solutions, including automating data and business processes. My experience involves translating business requirements into system specifications, designing workflows, and developing practical technology solutions. I enjoy working across systems, data, AI, and automation to deliver effective solutions that support business needs.`,

  photoUrl: '/FOTO2.png', // isi link foto kamu (atau taruh file di /public lalu isi "/nama-file.jpg")
  location: 'Surabaya, Indonesia',
  email: 'dewimaharani170104@gmail.com',
  cvUrl: 'https://drive.google.com/file/d/1y4hUr_aACo0tEf3NaK_0LX5K6fGlv8Fg/view?usp=sharing', // link CV Google Drive

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
      score: 'GPA 3.57 / 4.00',
    },
  ],

  // Sertifikasi — tampil di halaman Resume. Kosongkan array ini ([])
  // kalau belum ada sertifikat, section-nya otomatis nggak muncul.
  // "credentialUrl" boleh dikosongkan '' kalau belum ada link verifikasi.
  certifications: [
    {
      title: 'Introduction to SAP S/4HANA with GBI 4.2',
      issuer: 'SAP',
      date: '2023',
      credentialUrl: 'https://drive.google.com/file/d/1Kk59GaT5Zm0Fx9svCBW-faf0Mjmhm6me/view?usp=sharing',
    },
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
  
  ],
}

// Riwayat pengalaman (magang/organisasi/kerja) — urutan dari terbaru
export const experience = [
  {
    period: 'Aug 2026 — Present',
    title: 'AI Product Builder',
    place: 'Schoters',
    description: [
      'Analyzed business requirements and system workflows to define functional requirements and application flows.',
      'Translated user needs into practical product and system solutions.',
      'Designed and developed web applications leveraging AI agents, APIs, databases, and third-party integrations.',
    ],
    current: true,
  },
  {
    period: 'Jul 2025 — Present',
    title: 'UI/UX Designer (Freelance)',
    place: 'Freelance (Client Projects)',
    description: [
      'Analyzed client requirements and user needs to define interface and interaction requirements.',
      'Translated requirements into user flows, wireframes, and high-fidelity designs using Figma.',
      'Refined designs through client feedback and iterative improvements.',
    ],
    current: true,
  },
  {
    period: 'Nov 2025 — Jan 2026',
    title: 'Data Engineer (Contract)',
    place: 'PT Wiratek',
    description: [ 'Automated end-to-end ETL workflows using Apache NiFi to streamline data ingestion, transformation, and loading processes.', 'Designed data integration pipelines from Excel files and REST APIs into relational databases with automated processing.', 'Implemented data validation, error handling, and failure recovery mechanisms to improve pipeline reliability and data quality.', ],

    current: false,
  },
  {
    period: 'Jul 2025 — Oct 2025',
    title: 'Data Engineer Intern',
    place: 'PT Wiratek',
    description: [ 'Developed a Retrieval-Augmented Generation (RAG) pipeline for the PLN Insight Generatif project.', 'Built document processing workflows covering extraction, cleansing, chunking, embedding, and vector storage using Milvus.', 'Evaluated embedding and retrieval strategies to improve document retrieval performance and support accurate responses.', ],
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
      'Led a team of 9 staff members.',
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