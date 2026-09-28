// =============================================================
// FILE INI ISINYA DATA DIRI KAMU.
// Edit teks di bawah ini sesuai identitas kamu — sisanya
// (tampilan/layout) sudah otomatis mengikuti.
// =============================================================

export const profile = {
  name: 'Dewi Maharani',
  initials: 'DM', // dipakai di logo pojok kiri atas
  greeting: 'Hello, I am Rani',
  shortTagline: 'Product • System Analysis • Data',

  role: 'IT Product Development | System & Product Analysis',
  tagline: '',

  // Ditampilkan besar di halaman Home, di kotak biru (contoh: "PORTOFOLIO")
  heroWord: 'PORTOFOLIO',
  heroYear: '2026',

  // Hashtag kecil di halaman Home (kiri atas)
  tags: ['#IT Product Development | System & Product Analysis'],

  aboutTitle: 'IT Product Development | System & Product Analysis',
  // Paragraf singkat tentang kamu (2-4 kalimat cukup)
  about: `Information Systems graduate with hands-on experience in product development and system analysis. Skilled in translating business needs and requirements into practical digital solutions throughout the SDLC. Experienced in requirements analysis, business process modeling, application flow design, relational database design, REST API integration, and UI/UX prototyping to develop and refine digital products based on user needs and business requirements.`,

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
      'Analyzed business and user requirements, translating them into functional specifications and product features.',
      'Mapped business processes into system features and application flows throughout the SDLC.',
      'Defined functional requirements for application features and user workflows based on business and user needs.',
      'Developed frontend features and connected them to backend services through APIs to support application functionality.',
    ],
    current: true,
  },
  {
    period: 'Jul 2025 — Present',
    title: 'UI/UX Designer (Freelance)',
    place: 'Freelance',
    description: [
      'Translated business and user requirements into user flows, wireframes, and interactive prototypes using Figma.',
      'Designed UI/UX solutions based on project requirements and user needs.',
      'Refined design solutions based on client feedback and project requirements.',
      'Developed interactive prototypes to demonstrate the proposed user experience and interface.',
    ],
    current: true,
  },
  {
    period: 'Jul 2025 — Feb 2026',
    title: 'Data Engineer (Contractor)',
    place: 'PT. Wiratek Solusi Asia',
    description: [
      'Analyzed data sources across teams and defined requirements for ETL pipelines in Apache NiFi.',
      'Identified data quality issues and implemented validation, cleansing, and transformation rules.',
      'Translated business needs into structured, analysis-ready datasets.',
      'Documented end-to-end data flows to support maintenance and troubleshooting.',
    ],
    current: false,
  },
  {
    period: 'Jul 2025 — Oct 2025',
    title: 'Data Engineer (Internship)',
    place: 'PT. Wiratek Solusi Asia',
    description: [
      'Mapped document processing and search patterns to design a RAG-based retrieval system.',
      'Developed document processing workflows covering extraction, cleansing, chunking, embedding, and vector storage using Milvus.',
      'Evaluated retrieval strategies against defined performance criteria to identify the best fit.',
      'Recommended system configuration based on actual user search behavior.',
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
    period: 'Mar 2024 — Mar 2025',
    points: [
      'Led a 30 member Public Relations team and coordinated team activities to support event promotion.',
      'Developed communication strategies and organized promotional roadshows across 100+ high schools in Indonesia.',
      'Collaborated with 30+ media partners to expand event outreach and engagement.',
    ],
  },
  {
    title: 'Director of Human Resources',
    place: 'IEEE ITS Student Branch',
    period: 'Feb 2024 — Mar 2025',
    points: [
      'Led a team of 9 staff members and managed internal HR activities.',
      'Organized staff development programs to improve team collaboration and performance.',
      'Conducted performance evaluations and supported organizational improvement initiatives.',
    ],
  },
  {
    title: 'Student Orientation Guide',
    place: 'BEM FTEIC ITS',
    period: 'Dec 2023 — Jul 2025',
    points: [
      'Guided and mentored 30+ new students during the faculty orientation program.',
      'Facilitated group discussions and activities to support student adaptation.',
      'Created an engaging and supportive learning environment for new students.',
    ],
  },
]