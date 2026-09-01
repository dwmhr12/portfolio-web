// =============================================================
// FILE INI ISINYA DAFTAR PROYEK KAMU.
// Setiap proyek punya field "track" yang menentukan proyek ini
// muncul di filter yang mana. Pilihan track yang tersedia:
//
//   'system-analyst'  -> muncul saat filter "System Analyst"
//   'data-analyst'    -> muncul saat filter "Data Analyst"
//   'data-engineer'   -> muncul saat filter "Data Engineer"
//
// Satu proyek boleh punya lebih dari satu track kalau memang
// relevan untuk keduanya, tinggal tulis array-nya lebih dari satu.
//
// --------- STRUKTUR STUDI KASUS (v8 — selaras ProjectModal.jsx) ---------
// Modal sekarang punya 6 section: Overview -> Problem -> Process ->
// Solution Approach -> Key Insight -> Expected Outcomes, ditambah
// hook di atas Overview dan CTA di paling bawah.
//
// "description"      -> ringkasan singkat, dipakai di CARD grid (Work.jsx)
// "categories"        -> tag kategori kerja, tampil di bawah judul modal
// "hook"              -> string (OPSIONAL) — satu baris "peran + hasil
//                        utama", tampil MENONJOL (bold) tepat di bawah
//                        judul & categories, SEBELUM gallery/overview.
//                        Tujuannya recruiter dapat inti project dalam
//                        3 detik pertama tanpa perlu scroll. Contoh:
//                        "Business Analyst — redesigned an ERP leave
//                        workflow, projected to cut approval time from
//                        3–5 days to under 1 day."
//                        Kalau kosong, baris ini otomatis nggak muncul.
// "gallery"           -> array {src, fullSrc, label, caption, alt} (OPSIONAL)
//                        — carousel gambar di section OVERVIEW, tampil
//                        tepat di bawah judul & categories/hook, sebelum
//                        teks overview. Cocok untuk kasih "gambaran besar"
//                        project sebelum recruiter baca teksnya, misalnya
//                        urutan As-Is -> Gap -> To-Be -> Solution.
//                        -> "src"      WAJIB — gambar yang tampil di
//                           carousel. Taruh file-nya di folder /public
//                           project (lihat catatan lokasi file di bawah),
//                           lalu isi path-nya mulai dari root, mis.
//                           '/projects/odoo/01-as-is-bpmn.png'.
//                        -> "fullSrc"  OPSIONAL — gambar resolusi
//                           tinggi yang dibuka di lightbox saat gambar
//                           di-klik/di-zoom. Kalau kosong, "src" yang
//                           dipakai juga di lightbox.
//                        -> "label"    OPSIONAL — judul singkat slide,
//                           mis. 'As-Is process'.
//                        -> "caption"  OPSIONAL — deskripsi 1 baris di
//                           bawah label, mis. 'BPMN kondisi eksisting'.
//                        -> "alt"      OPSIONAL — teks alt gambar untuk
//                           aksesibilitas/SEO. Kalau kosong, "label"
//                           dipakai sebagai fallback.
//                        Kalau "gallery" kosong/tidak diisi, section
//                        carousel-nya otomatis tidak muncul di modal.
// "overview"          -> section OVERVIEW. Bisa diisi:
//                        - string tunggal (format lama, tetap didukung), atau
//                        - array string, tiap elemen jadi 1 paragraf terpisah
//                          dengan jarak antar paragraf (dipakai kalau overview
//                          butuh lebih dari satu paragraf, misalnya proyek
//                          Odoo di bawah).
// "note"              -> string (OPSIONAL) — catatan tambahan di bawah overview,
//                        ditampilkan sebagai kotak kecil bergaya "callout"
//                        (border kiri + italic), mirip blockquote di README.
//                        Cocok buat disclaimer, asumsi simulasi, atau catatan
//                        konteks lain. Kalau kosong, kotaknya nggak muncul.
//                        PENTING: kalau "note" bilang project ini simulasi,
//                        pastikan angka apa pun di "metrics"/"outcomes"
//                        dibingkai sebagai proyeksi/estimasi (lihat field
//                        "metrics" di bawah), bukan seolah capaian riil.
// "preview"           -> gambar besar di hero modal — section OVERVIEW
//                        (dipakai kalau TIDAK ada "gallery"; kalau "gallery"
//                        diisi, carousel yang tampil duluan, "preview" tetap
//                        boleh diisi sebagai cadangan/dipakai di tempat lain).
// "problems"          -> array string — section PROBLEM
// "process"           -> array {title, detail, output, outputLink} — section
//                        PROCESS, ditampilkan sebagai tabel 2 kolom:
//                        "Process" (nomor + title + detail) | "Output"
//                        -> "output" WAJIB diisi kalau mau kolom Output-nya
//                           muncul di baris itu.
//                        -> "outputLink" OPSIONAL: isi dengan link ke file
//                           aslinya (Google Drive, Figma, GitHub, dst) kalau
//                           mau teks Output-nya bisa diklik dan buka file itu
//                           di tab baru. Kosongkan '' kalau belum ada linknya
//                           — teksnya tetap tampil tapi nggak bisa diklik.
//                           Konvensi yang dipakai di file ini: step yang
//                           outputnya desain/prototype (mis. "Interactive
//                           Prototype") di-link ke "prototype" (Figma), dan
//                           step yang outputnya dokumen/laporan (mis.
//                           "Documentation") di-link ke "document" (Drive/
//                           Docs) — dua-duanya field yang sama di project
//                           ini juga. Kalau ada output lain yang punya file
//                           sendiri (nggak sama dengan prototype/document),
//                           tinggal isi outputLink-nya langsung dengan link
//                           file itu. CATATAN: link GitHub yang dipakai di
//                           sini formatnya "blob" (halaman preview GitHub),
//                           itu OK untuk outputLink karena cuma dibuka di
//                           tab baru — tapi TIDAK BISA dipakai langsung
//                           sebagai "src" gallery/img (lihat catatan di
//                           bawah).
// "solutionIntro"     -> array string (OPSIONAL) — paragraf pengantar di
//                        section SOLUTION APPROACH, tampil di atas list
//                        "solutions". Tiap elemen jadi 1 paragraf terpisah.
//                        Kalau kosong, langsung loncat ke list "solutions".
//                        Cocok juga buat jelasin TRADE-OFF pemilihan tool/
//                        platform (mis. kenapa Odoo dibanding alternatif
//                        lain) — tinggal tambah 1 paragraf pembanding
//                        kriteria (biaya, skalabilitas, ease of config)
//                        di sini, nggak perlu section baru.
// "solutions"         -> array string (OPSIONAL) — list poin di section
//                        SOLUTION APPROACH, tampil di bawah "solutionIntro"
//                        (kalau ada). Section ini otomatis nggak ditampilkan
//                        kalau "solutionIntro" dan "solutions" dua-duanya
//                        kosong. Cocok buat proyek yang punya rekomendasi/
//                        pendekatan solusi yang jelas (mis. daftar fitur
//                        solusi ERP, daftar capability sistem yang
//                        diusulkan, dst).
// "businessInsight"   -> section KEY INSIGHT. Bisa diisi:
//                        - string tunggal (format lama, tetap didukung), atau
//                        - array string, tiap elemen jadi 1 paragraf terpisah
//                          di modal (dipakai kalau insight-nya butuh lebih
//                          dari satu paragraf, misalnya proyek Odoo di bawah).
// "outcomeIntro"      -> array string (OPSIONAL) — paragraf pengantar di
//                        section EXPECTED OUTCOMES, tampil di atas list
//                        "outcomes"/"outcomeStats". Tiap elemen jadi 1
//                        paragraf terpisah. Kalau kosong, langsung loncat
//                        ke stat card / list "outcomes".
// "outcomeStats"      -> array {label, before, after, icon} (OPSIONAL) —
//                        stat card before -> after di section EXPECTED
//                        OUTCOMES, tampil di atas list "outcomes" (kalau
//                        ada). Dipakai untuk poin outcome yang punya angka
//                        kuantitatif jelas (mis. waktu approval, jumlah
//                        langkah proses), biar polanya "before vs after"
//                        lebih menonjol dibanding cuma bullet biasa.
//                        -> "label" WAJIB — nama metrik singkat, mis.
//                           'Approval Time'.
//                        -> "before" WAJIB — nilai sebelum improvement.
//                        -> "after"  WAJIB — nilai sesudah improvement.
//                        -> "icon"   OPSIONAL — nama ikon (mis. 'clock',
//                           'check') kalau modal-nya support render ikon
//                           per card.
//                        Kalau "outcomeStats" kosong/tidak diisi, section
//                        Expected Outcomes otomatis fallback ke bullet list
//                        biasa seperti sebelumnya (backward-compatible).
// "outcomes"          -> array string (OPSIONAL) — list poin KUALITATIF di
//                        section EXPECTED OUTCOMES, tampil di bawah
//                        "outcomeStats" (kalau ada). Section ini otomatis
//                        nggak ditampilkan kalau "outcomeIntro",
//                        "outcomeStats", dan "outcomes" tiga-tiganya kosong.
//                        Poin yang punya angka before->after sebaiknya
//                        dipindah ke "outcomeStats" di atas, bukan ditulis
//                        di sini sebagai kalimat "Projected to...".
// "tech"              -> badge tech stack (dipakai di CARD grid, bukan di modal)
// "prototype"         -> link Figma (opsional, tombol aksi di modal)
// "link"              -> link source code/GitHub (opsional, tombol aksi di modal)
// "document"          -> link dokumen BRD/SRS/laporan (opsional, tombol aksi di modal)
// "image"             -> gambar thumbnail di CARD grid
// "contact"           -> {url, label} (OPSIONAL) — CTA satu baris di
//                        paling bawah modal, di bawah tombol Prototype/
//                        Source/Documentation. Diisi sekali lewat konstanta
//                        CONTACT di bagian bawah file ini dan otomatis
//                        ditempel ke SEMUA project (lihat penjelasan di
//                        dekat "export const projects" di bawah) — jadi
//                        nggak perlu diulang manual di tiap object project.
//                        -> "url"   WAJIB — link tujuan (LinkedIn, mailto:,
//                           dst). Kalau kosong, CTA-nya nggak muncul.
//                        -> "label" OPSIONAL — teks link, default
//                           'Hubungi saya' kalau dikosongkan.
//
// --------- DI MANA NARUH FILE GAMBAR UNTUK "gallery" ---------
// Sama seperti "image"/"preview" yang sudah ada di file ini (mis.
// '/odoo1.png', '/Ai.png'), taruh file gambarnya di folder /public
// project React kamu, lalu tulis path-nya mulai dari root ('/...'),
// BUKAN dari folder src/ atau path relatif.
//
//   my-app/
//   ├─ public/
//   │  ├─ odoo1.png                     <- sudah ada (preview/card)
//   │  └─ projects/
//   │     └─ odoo/
//   │        ├─ 01-as-is-bpmn.png       <- gallery[0].src
//   │        ├─ 02-gap-analysis.png     <- gallery[1].src
//   │        ├─ 03-to-be-bpmn.png       <- gallery[2].src
//   │        └─ 04-odoo-solution.png    <- gallery[3].src
//   └─ src/...
//
// Lalu dipanggil di data ini sebagai:  src: '/projects/odoo/01-as-is-bpmn.png'
//
// Kalau gambarnya mau tetap disimpan di GitHub (bukan di /public), link
// GitHub yang sekarang dipakai di "outputLink" ('.../blob/main/...') TIDAK
// BISA langsung jadi src <img> karena itu halaman HTML, bukan file gambar.
// Harus diubah dulu dari "github.com/.../blob/..." jadi
// "raw.githubusercontent.com/.../..." (hapus "blob/"), contoh sudah
// dipakai di gallery proyek Odoo di bawah. Cara ini jalan tapi lebih
// lambat/berisiko (tergantung uptime & rate-limit GitHub) dibanding
// naruh file di /public sendiri — jadi /public tetap disarankan.
//
// Untuk output yang formatnya PDF (mis. Functional Requirement Document,
// Odoo Configuration Documentation), itu TIDAK bisa langsung dipakai
// sebagai gambar. Kalau mau tetap muncul di carousel, screenshot dulu
// halaman/cover-nya jadi .png, taruh di /public seperti di atas, baru
// masukkan ke "gallery" (fungsi outputLink dokumen aslinya tetap ada di
// section Process, nggak perlu dihapus).
//
// Field "info" (role/timeline/type/team/tools), "responsibilities",
// "deliverables", "impact", dan "lessonsLearned" SUDAH TIDAK DITAMPILKAN
// oleh ProjectModal yang sekarang — sengaja dihapus dari sini biar file
// ini nggak nyimpen data yang nggak kepake. Kalau nanti mau dimunculkan
// lagi, tambah section-nya balik di ProjectModal.jsx dulu baru isi field
// ini lagi.
// =============================================================

// TODO: ganti url/label di bawah ini sesuai kontak yang mau kamu tampilkan
// di CTA bawah tiap modal (LinkedIn, email, dsb). Set url: '' kalau mau
// CTA-nya disembunyikan sementara dari semua project.
const CONTACT = {
  url: 'https://www.linkedin.com/in/your-linkedin-handle',
  label: 'Hubungi saya di LinkedIn',
}

const rawProjects = [
  {
  title: 'TaskSync – Smart Academic Task Management',
  track: ['system-analyst'],
  description:
    'Analyzed requirements and designed the system flow for a student task-management application, covering user workflows, system requirements, and UI/UX design.',
  categories: ['System Analysis & Application Design'],
  hook:
    'System Analyst — analyzed requirements and designed the system flow, requirements, and UI/UX for a student task-management application.',
  gallery: [
      {
    src: '/taskSync.png',
    label: 'TaskSync mockup',
    caption: 'High-fidelity mockup of the TaskSync application',
      },
  ],
  overview: [
    'TaskSync is a mobile application designed to help students manage academic tasks, schedules, and deadlines in one place.',
    'This project focused on analyzing user requirements, defining system requirements, designing application flows, and documenting the proposed solution through a Software Requirements Specification (SRS).',
  ],
  note:
    'This project was developed as an academic project, with the proposed system and requirements documented for future application development.',
  preview: '/taskySync.png',
  problems: [
    'Students use multiple platforms to manage academic tasks and schedules.',
    'Keeping track of assignments, deadlines, and schedules can be difficult.',
    'Academic tasks and personal schedules are not centralized in one application.',
  ],
  process: [
    {
      title: 'Requirement Gathering',
      detail: 'Identified user needs and academic workflow through requirement gathering.',
      output: 'User Requirements',
      outputLink: 'https://github.com/dwmhr12/business-analyst-portfolio/tree/main/TaskSync',
    },

    {
      title: 'Requirement Analysis',
      detail: 'Analyzed user needs and translated them into functional and non-functional system requirements.',
      output: 'System Requirements',
      outputLink: 'https://github.com/dwmhr12/business-analyst-portfolio/tree/main/TaskSync',
    },

    {
      title: 'System Flow Design',
      detail: 'Designed application and system flows based on the identified requirements.',
      output: 'User Flows & System Processes',
      outputLink: 'https://github.com/dwmhr12/business-analyst-portfolio/tree/main/TaskSync',
    },

    {
      title: 'System Modeling',
      detail: 'Modeled system structure and behavior using UML, BPMN, and activity diagrams.',
      output: 'Use Case, BPMN & Activity Diagram',
      outputLink: 'https://github.com/dwmhr12/business-analyst-portfolio/tree/main/TaskSync',
    },

    {
      title: 'UI/UX Design',
      detail: 'Created wireframes and interactive prototypes to visualize the proposed application.',
      output: 'Wireframes & Interactive Prototype',
      outputLink: 'https://www.figma.com/proto/CWJeae8DRxqByskWcu3s0T/TaskSync?node-id=0-1&t=H3I0XVVvMMDSH7Sl-1',
    },

    {
      title: 'SRS Documentation',
      detail: 'Documented the system requirements, workflows, interfaces, and proposed solution in an SRS.',
      output: 'Software Requirements Specification (SRS)',
      outputLink: 'https://github.com/dwmhr12/business-analyst-portfolio/blob/main/TaskSync/01_Software_Requirements_Specification.pdf',
    },
  ],
  solutionIntro: [
    'Based on user needs and requirements, TaskSync was designed to manage academic tasks, schedules, and deadlines through a single application.',
  ],
  solutions: [
    'Centralized academic task management',
    'Integrated task and schedule management',
    'Deadline and reminder management',
    'Structured academic workflows',
  ],
  businessInsight: [
  'The analysis found that academic tasks, schedules, and deadlines were managed across multiple platforms, making it harder to track activities consistently.', 'TaskSync addresses this by integrating these activities into a single application.',
  ],
  outcomeIntro: [
    'The proposed system is expected to:',
  ],
  outcomes: [
    'Simplify academic task and schedule management.',
    'Improve visibility of upcoming assignments and deadlines.',
    'Reduce the need to manage academic activities across multiple platforms.',
    'Provide a structured workflow for managing academic tasks.',
  ],
  tech: [
    'Software Requirements Specification (SRS)',
    'Requirement Analysis',
    'Functional Requirements',
    'Non-Functional Requirements',
    'Use Case Diagram',
    'BPMN',
    'Activity Diagram',
    'System Flow',
    'Wireframing',
    'Figma',
  ],
  prototype: 'https://www.figma.com/proto/CWJeae8DRxqByskWcu3s0T/TaskSync?node-id=0-1&t=H3I0XVVvMMDSH7Sl-1',
  link: '',
  document: 'https://intip.in/TaskySync',
  image: '/coverTasksync.png',
  },
  {
  title: 'ERP-Based Employee Leave Management System using Odoo',
  track: ['system-analyst', 'ERP', 'Business Process Modeling'],
  description:
    'Analyzed and redesigned an employee leave management process, defined system requirements, and mapped the improved workflow to Odoo.',
  categories: ['System Analysis & ERP Implementation Case Study'],
  hook:
    'System Analyst  — analyzed and redesigned an ERP-based leave management workflow and mapped the proposed solution to Odoo.',
  gallery: [
    {
      src: 'https://raw.githubusercontent.com/dwmhr12/business-analyst-portfolio/main/Employee-Leave-Management-ERP/03_As%20Is%20BPMN.png',
      label: 'As-Is Process',
      caption: 'BPMN model of the existing leave management process',
    },
    {
      src: 'https://raw.githubusercontent.com/dwmhr12/business-analyst-portfolio/main/Employee-Leave-Management-ERP/04_Process%20Gap%20Analysis.png',
      label: 'Process Gap',
      caption: 'Identified gaps and improvement opportunities in the existing process',
    },
    {
      src: 'https://raw.githubusercontent.com/dwmhr12/business-analyst-portfolio/main/Employee-Leave-Management-ERP/05_To-Be%20BPMN.png',
      label: 'To-Be Process',
      caption: 'Redesigned leave management workflow using BPMN',
    },
    {
      src: '/odoo1.png',
      label: 'Odoo Solution',
      caption: 'Mapping the proposed workflow to Odoo Leave Management',
    },
  ],
  overview: [
    'This project focuses on analyzing and improving an employee leave management process through an ERP-based solution using Odoo.',
    'The project covers process analysis, requirements definition, workflow redesign, and mapping the proposed system to Odoo Leave Management.',
  ],
  note:
    'The organization, process metrics, and business conditions used in this case study are simulated assumptions created for portfolio purposes.',
  preview: '/odoo1.png',
  problems: [
    'Leave requests are handled manually through email, making the approval process difficult to track.',
    'Leave approvals can take 3–5 working days, delaying confirmation for employees.',
    'Leave records are manually maintained in spreadsheets, increasing the risk of data inconsistency and administrative errors.',
    'Employees have limited visibility into request status, resulting in repeated follow-ups with HR.',
    'Leave information is distributed across emails and spreadsheets, making monitoring and reporting less efficient.',
  ],
  process: [
    {
      title: 'Business Problem Analysis',
      detail:
        'Identified key problems and their impacts on the existing leave management process.',
      output: 'Business Problem Analysis Document',
      outputLink:
        'https://github.com/dwmhr12/business-analyst-portfolio/blob/main/Employee-Leave-Management-ERP/01_Business_Problem_Analysis.pdf',
    },
    {
      title: 'Stakeholder Analysis',
      detail:
        'Identified key stakeholders and their roles in the leave management process.',
      output: 'Stakeholder Analysis',
      outputLink:
        'https://github.com/dwmhr12/business-analyst-portfolio/blob/main/Employee-Leave-Management-ERP/02_Stakeholder_Analysis.xlsx',
    },
    {
      title: 'As-Is Process Modeling',
      detail:
        'Modeled the existing leave management workflow using BPMN.',
      output: 'As-Is BPMN',
      outputLink:
        'https://github.com/dwmhr12/business-analyst-portfolio/blob/main/Employee-Leave-Management-ERP/03_As%20Is%20BPMN.png',
    },
    {
      title: 'Process Gap Analysis',
      detail:
        'Analyzed process gaps and identified opportunities for improvement.',
      output: 'Process Gap Analysis',
      outputLink:
        'https://github.com/dwmhr12/business-analyst-portfolio/blob/main/Employee-Leave-Management-ERP/04_Process%20Gap%20Analysis.png',
    },
    {
      title: 'To-Be Process Design',
      detail:
        'Designed an improved leave management workflow using BPMN.',
      output: 'To-Be BPMN',
      outputLink:
        'https://github.com/dwmhr12/business-analyst-portfolio/blob/main/Employee-Leave-Management-ERP/05_To-Be%20BPMN.png',
    },
    {
      title: 'Functional Requirements',
      detail:
        'Defined functional requirements for the proposed leave management solution.',
      output: 'Functional Requirement Document',
      outputLink:
        'https://github.com/dwmhr12/business-analyst-portfolio/blob/main/Employee-Leave-Management-ERP/06_Functional%20Requirement%20Document.pdf',
    },
    {
      title: 'Odoo Configuration',
      detail:
        'Mapped the proposed process and requirements to Odoo Leave Management.',
      output: 'Odoo Configuration Documentation',
      outputLink:
        'https://github.com/dwmhr12/business-analyst-portfolio/blob/main/Employee-Leave-Management-ERP/07_Odoo%20Configuration%20Documentation.pdf',
    },
  ],
  solutionIntro: [
    'Odoo was proposed to streamline leave management by centralizing data, standardizing approvals, and improving request tracking through the Employee, Time Off, and Approvals modules.',
  ],
  solutions: [
    'Employee data management',
    'Leave requests and allocation',
    'Approval workflows',
    'Leave tracking and monitoring',
  ],
  businessInsight: [
    'The analysis found that fragmented communication and manual record keeping reduced process visibility and efficiency.',
    'The redesigned workflow addresses these gaps by centralizing leave information and standardizing approvals',
  ],
  outcomeIntro: [
    'The proposed solution is expected to:',
  ],
  outcomeStats: [
    {
      label: 'Approval Time',
      before: '3–5 working days',
      after: '< 1 day',
      icon: 'clock',
    },
    {
      label: 'Process Steps',
      before: '8 manual steps',
      after: '4 digital steps',
      icon: 'check',
    },
  ],
  outcomes: [
    'Digitalize the leave request and approval process.',
    'Centralize employee and leave data.',
    'Improve visibility of leave request status.',
    'Reduce repetitive administrative activities.',
    'Simplify HR monitoring and reporting.',
  ],
  tech: [
  'Requirements Analysis',
  'Functional Requirements',
  'Process Modeling',
  'Workflow Design',
  'BPMN',
  'ERP',
  'Odoo',
],
  prototype: '',
  link: '',
  document:
    'https://github.com/dwmhr12/business-analyst-portfolio/tree/main/Employee-Leave-Management-ERP',
  image: '/odoo1.png',
},
{
  title: 'AI Knowledge Management System for Renewable Energy Regulations',
  track: ['system-analyst'],
  description:
    'Analyzed requirements and designed the system flow for an AI-powered knowledge management system for renewable energy regulations.',
  categories: ['System Analysis & Application Design'],
  hook:
    'System Analyst — analyzed requirements and designed the system flow, UML models, and UI/UX for an AI-powered regulatory knowledge system.',
  gallery: [
    {
    src: '/MockupAi.png',
    label: 'UI/UX Design',
    caption: 'High-fidelity mockup of the proposed application',
   },
    {
      src: '/Ai.png',
      label: 'System Design',
      caption: 'System design and UI/UX for the proposed AI knowledge management system',
    },
  ],
  overview: [
    'This project focused on designing an AI-powered knowledge management system to help users search and access renewable energy regulations in Indonesia.',
    'The project covered requirement analysis, business process modeling, system modeling, and UI/UX design documented in a Business Requirement Document (BRD).',
  ],
  note:
    'This project was developed as an academic project, with the proposed system and requirements documented for future application development.',
  preview: '/Ai.png',
  problems: [
    'Renewable energy regulations are scattered across multiple documents.',
    'Finding relevant regulations is time-consuming and inefficient.',
    'Users have limited access to a centralized system for searching and retrieving regulatory information.',
  ],
  process: [
    {
      title: 'Requirement Gathering',
      detail:
        'Identified user needs and requirements for accessing and searching regulatory information.',
      output: 'Business & User Requirements',
      outputLink: 'https://github.com/dwmhr12/business-analyst-portfolio/tree/main/AI%20Knowledge%20Management%20System%20for%20Renewable%20Energy%20Regulations',
    },

    {
      title: 'Requirement Analysis',
      detail:
        'Analyzed requirements and translated them into functional and non-functional system requirements.',
      output: 'System Requirements',
      outputLink: 'https://github.com/dwmhr12/business-analyst-portfolio/tree/main/AI%20Knowledge%20Management%20System%20for%20Renewable%20Energy%20Regulations',
    },

    {
      title: 'Business Process Modeling',
      detail:
        'Modeled the information search and retrieval workflow based on identified requirements.',
      output: 'Business Process Model',
      outputLink: 'https://github.com/dwmhr12/business-analyst-portfolio/tree/main/AI%20Knowledge%20Management%20System%20for%20Renewable%20Energy%20Regulations',
    },

    {
      title: 'System Modeling',
      detail:
        'Modeled system structure and behavior using UML diagrams.',
      output: 'UML Diagrams & System Design',
      outputLink: 'https://github.com/dwmhr12/business-analyst-portfolio/tree/main/AI%20Knowledge%20Management%20System%20for%20Renewable%20Energy%20Regulations',
    },

    {
      title: 'UI/UX Design',
      detail:
        'Designed wireframes and interfaces to visualize the proposed system.',
      output: 'Wireframes & UI/UX Design',
      outputLink: 'https://github.com/dwmhr12/business-analyst-portfolio/blob/main/AI%20Knowledge%20Management%20System%20for%20Renewable%20Energy%20Regulations/08_Prototype.pdf',
    },

    {
      title: 'BRD Documentation',
      detail:
        'Documented business needs, system requirements, processes, and proposed solution in a BRD.',
      output: 'Business Requirement Document (BRD)',
      outputLink: 'https://github.com/dwmhr12/business-analyst-portfolio/tree/main/AI%20Knowledge%20Management%20System%20for%20Renewable%20Energy%20Regulations',
    },
  ],
  solutionIntro: [
    'The proposed system provides a centralized interface for searching and accessing renewable energy regulations using AI-powered information retrieval.',
  ],
  solutions: [
    'Centralized regulatory knowledge management',
    'AI-powered regulation search',
    'Structured regulatory information retrieval',
    'User-focused search interface',
  ],
  businessInsight: [
    'The analysis found that the main challenge was not simply the volume of regulations, but the difficulty of finding and accessing relevant information across scattered documents. This became the basis for designing a centralized search and retrieval workflow.',
  ],
  outcomeIntro: [
    'The proposed system is expected to:',
  ],
  outcomes: [
    'Simplify access to renewable energy regulations.',
    'Reduce the time needed to find relevant regulatory information.',
    'Centralize regulatory knowledge and information retrieval.',
    'Provide a structured workflow for searching regulatory documents.',
  ],
  tech: [
    'Requirements Analysis',
    'Functional Requirements',
    'Non-Functional Requirements',
    'UML',
    'Use Case Diagram',
    'Process Modeling',
    'System Flow',
    'UI/UX Design',
  ],
  prototype: 'https://github.com/dwmhr12/business-analyst-portfolio/blob/main/AI%20Knowledge%20Management%20System%20for%20Renewable%20Energy%20Regulations/08_Prototype.pdf',
  link: '',
  document: 'https://github.com/dwmhr12/business-analyst-portfolio/tree/main/AI%20Knowledge%20Management%20System%20for%20Renewable%20Energy%20Regulations',
  image: '/CoverAi.png',
},
{
  title: 'IKN News Sentiment Analysis',
  track: ['data-engineer'],
  description:
    'Built an end-to-end NLP pipeline to collect, preprocess, and classify Indonesian news articles using a fine-tuned IndoBERT model.',
  categories: ['Data & AI', 'Natural Language Processing'],
  hook:
    'Data/NLP Engineer — built an end-to-end pipeline to collect, process, and classify 162 Indonesian news articles using IndoBERT.',
  gallery: [
    {
      src: '/coverIKN.png',
      label: 'NLP Pipeline',
      caption: 'End-to-end NLP pipeline for Indonesian news sentiment analysis',
    },
  ],
  overview: [
    'This academic team project focused on analyzing media sentiment toward the relocation of Indonesia’s capital city (IKN).',
    'The project covered data collection, text preprocessing, dataset preparation, sentiment classification, linguistic analysis, and model evaluation using both IndoBERT and traditional machine learning approaches.',
  ],
  note:
    'This project was developed as an academic team project.',
  preview: '/ikn.png',
  problems: [
    'Public opinion regarding IKN was distributed across numerous online news sources, making large-scale analysis difficult.',
    'Raw news articles required extensive preprocessing before they could be used for NLP tasks.',
    'Traditional text classification methods may struggle to capture contextual sentiment in Indonesian news articles.',
  ],
  process: [
    {
      title: 'Data Collection',
      detail:
        'Collected news articles from multiple Indonesian media outlets using Google Dorking and web scraping.',
      output: 'Raw News Dataset (162 Articles)',
      outputLink: '',
    },

    {
      title: 'Data Preprocessing',
      detail:
        'Cleaned and normalized text through tokenization, stopword removal, stemming, and lemmatization.',
      output: 'Cleaned Text Dataset',
      outputLink: '',
    },

    {
      title: 'Dataset Preparation',
      detail:
        'Balanced sentiment classes using undersampling and NLP-based data augmentation techniques.',
      output: 'Balanced Labeled Dataset',
      outputLink: '',
    },

    {
      title: 'Model Training',
      detail:
        'Fine-tuned IndoBERT for sentiment classification and compared its performance with TF-IDF-based Logistic Regression and SVM.',
      output: 'Trained Sentiment Classification Models',
      outputLink: '',
    },

    {
      title: 'Evaluation & Analysis',
      detail:
        'Evaluated model performance using Accuracy, Precision, Recall, F1-score, confusion matrices, and linguistic analysis.',
      output: 'Model Evaluation Report',
      outputLink:
        'https://docs.google.com/document/d/1u_P-FrYETWmldzMoqlwKZZfGJNgp0m9L0_1GOZMjf0Q/edit?usp=sharing',
    },
  ],
  solutionIntro: [
    'The project combined web scraping, NLP, and machine learning to transform unstructured news articles into structured sentiment insights.',
  ],
  solutions: [
    'Automated news data collection',
    'Text preprocessing and normalization',
    'Sentiment classification using IndoBERT',
    'Comparative model evaluation',
  ],
  businessInsight: [
    'The analysis showed how unstructured news data can be transformed into sentiment insights to better understand public perception of large-scale initiatives.',
  ],
  outcomeIntro: [
    'The project resulted in:',
  ],
  outcomes: [
    'A structured dataset of 162 Indonesian news articles.',
    'An end-to-end NLP pipeline for sentiment analysis.',
    'A fine-tuned IndoBERT sentiment classification model.',
    'A comparison between transformer-based and traditional machine learning approaches.',
  ],
  tech: [
    'Python',
    'BeautifulSoup',
    'Pandas',
    'NLTK',
    'PySastrawi',
    'Hugging Face Transformers',
    'IndoBERT',
    'TF-IDF',
    'Logistic Regression',
    'Support Vector Machine',
    'spaCy',
    'Matplotlib',
  ],
  prototype: '',
  link: '',
  document:
    'https://docs.google.com/document/d/1u_P-FrYETWmldzMoqlwKZZfGJNgp0m9L0_1GOZMjf0Q/edit?usp=sharing',
  image: '/coverIKN.png',
},
{
  title: 'PLN NP – Enterprise ETL Pipeline Automation',
  track: ['data-engineer'],
  description:
    'Built automated ETL pipelines using Apache NiFi to integrate data from spreadsheets and REST APIs into a centralized data mart.',
  categories: ['Data Engineering', 'ETL Pipeline'],
  hook:
    'Data Engineer Intern — built automated ETL pipelines in Apache NiFi, integrating multi-source data into a centralized data mart.',
  gallery: [
      {
    src: '/ArsitekturPLNNP.png',
    label: 'ETL Pipeline Architecture',
    caption: 'Architecture of the automated ETL pipeline for multi-source data integration',
  },
  ],
  overview: [
    'During my internship, I built multiple automated ETL pipelines using Apache NiFi to process operational data from spreadsheets and REST APIs.',
    'The pipelines covered data extraction, validation, cleansing, standardization, metadata enrichment, scheduling, and incremental loading into a centralized data mart.',
  ],
  note:
    'This project was developed during my internship at Wiratek Solusi Asia.',
  preview: '/plnnp.png',
  problems: [
    'Business data came from multiple sources, including spreadsheets and REST APIs, making manual integration inefficient.',
    'Data quality issues such as missing values and duplicate records affected data consistency.',
    'The organization required automated pipelines with scheduling, monitoring, and reliable incremental loading.',
  ],
  process: [
    {
      title: 'Data Extraction',
      detail:
        'Extracted data from Excel files and REST APIs through automated Apache NiFi workflows.',
      output: 'Raw Extracted Data',
      outputLink: '',
    },

    {
      title: 'Data Validation & Cleansing',
      detail:
        'Validated required fields, handled duplicate records, and managed pipeline failures through automated notifications.',
      output: 'Validated & Cleaned Data',
      outputLink: '',
    },

    {
      title: 'Data Standardization',
      detail:
        'Standardized date formats, numeric fields, and string values to maintain data consistency.',
      output: 'Standardized Dataset',
      outputLink: '',
    },

    {
      title: 'Metadata Enrichment',
      detail:
        'Added audit metadata such as timestamps, creator information, and soft-delete attributes.',
      output: 'Enriched Dataset',
      outputLink: '',
    },

    {
      title: 'Data Loading',
      detail:
        'Loaded transformed data into a centralized data mart using upsert and incremental loading strategies.',
      output: 'Centralized Data Mart',
      outputLink: '',
    },
  ],
  solutionIntro: [
    'The solution automated the end-to-end data integration workflow, from extracting multi-source data to loading validated and standardized data into a centralized data mart.',
  ],
  solutions: [
    'Multi-source data integration',
    'Automated data validation and cleansing',
    'Incremental data loading',
    'Centralized data mart',
  ],
  businessInsight: [
    'The project showed how automated data pipelines can reduce manual data integration and improve the consistency and reliability of data used for reporting and analytics.',
  ],
  outcomeIntro: [
    'The project resulted in:',
  ],
  outcomes: [
    'Automated ETL workflows using Apache NiFi.',
    'Integrated data from spreadsheets and REST APIs.',
    'Standardized and validated operational data.',
    'Centralized transformed data in a data mart.',
  ],
  tech: [
    'Apache NiFi',
    'SQL',
    'REST API',
    'ETL',
    'Excel',
    'CSV',
    'PostgreSQL',
    'Data Validation',
    'Data Cleansing',
    'Data Warehousing',
  ],
  prototype: '',
  link: '',
  document: '',
  image: '/plnnp.png',
},
{
  title: 'PLN Insight Generatif – RAG Data Pipeline',
  track: ['data-engineer'],
  description:
    'Built an automated document ingestion pipeline for a Retrieval-Augmented Generation (RAG) system, from PDF extraction and text processing to vector storage in Milvus.',
  categories: ['Data Engineering', 'AI Infrastructure'],
  hook:
    'Data Engineer Intern — built the document ingestion pipeline for an internal RAG system, from PDF extraction to vector storage in Milvus.',
  gallery: [
      {
    src: '/ArsitekturPLNIG.png',
    label: 'RAG Data Pipeline',
    caption:
      'Architecture of the document processing pipeline for the RAG system',
  },
  ],
  overview: [
    'During my internship, I contributed to the data engineering pipeline of PLN Insight Generatif, an internal AI knowledge management system.',
    'The pipeline processed PDF documents through extraction, cleansing, chunking, embedding generation, and vector database ingestion, with Apache Airflow used to orchestrate the workflow.',
  ],
  note:
    'This project was developed during my internship at Wiratek Solusi Asia as part of an internal generative AI initiative.',
  preview: '/plnig.png',
  problems: [
    'Knowledge documents were stored as unstructured PDF files, making information retrieval inefficient.',
    'The RAG system required structured document chunks and vector embeddings for semantic retrieval.',
    'New documents needed to be processed consistently through an automated and repeatable pipeline.',
  ],
  process: [
    {
      title: 'Document Extraction',
      detail:
        'Extracted text from PDF documents using Python-based data processing scripts.',
      output: 'Extracted Document Text',
      outputLink: '',
    },

    {
      title: 'Data Cleansing',
      detail:
        'Cleaned and standardized extracted text to prepare documents for further processing.',
      output: 'Cleaned Document Text',
      outputLink: '',
    },

    {
      title: 'Document Chunking',
      detail:
        'Segmented documents into smaller chunks suitable for embedding and semantic retrieval.',
      output: 'Document Chunks',
      outputLink: '',
    },

    {
      title: 'Embedding Generation',
      detail:
        'Converted document chunks into vector embeddings for semantic search.',
      output: 'Vector Embeddings',
      outputLink: '',
    },

    {
      title: 'Vector Storage & Orchestration',
      detail:
        'Stored embeddings in Milvus and orchestrated the document processing workflow using Apache Airflow.',
      output: 'Milvus Vector Database & Airflow Pipeline',
      outputLink: '',
    },
  ],
  solutionIntro: [
    'The solution automated the document ingestion workflow, transforming unstructured PDF files into searchable vector representations for the RAG system.',
  ],
  solutions: [
    'Automated PDF document processing',
    'Text cleansing and document chunking',
    'Vector embedding generation',
    'Vector storage in Milvus',
    'Workflow orchestration with Apache Airflow',
  ],
  businessInsight: [
    'The project demonstrated how automated document pipelines can turn unstructured enterprise documents into structured, searchable data that supports AI-powered knowledge retrieval.',
  ],
  outcomeIntro: [
    'The project resulted in:',
  ],
  outcomes: [
    'An automated document ingestion pipeline for the RAG system.',
    'Processed and structured document data for semantic retrieval.',
    'Vector embeddings stored in Milvus.',
    'An orchestrated workflow using Apache Airflow.',
  ],
  tech: [
    'Python',
    'Apache Airflow',
    'Milvus',
    'Docker',
    'Docker Compose',
    'MinIO',
    'ETCD',
    'Vector Database',
    'ETL',
    'RAG Pipeline',
  ],
  prototype: '',
  link: '',
  document: '',
  image: '/plnig.png',
},
]

// Tempel "contact" (CTA di bawah modal, poin 7) ke SEMUA project sekaligus
// dari satu sumber (konstanta CONTACT di atas), biar nggak perlu diulang
// manual di tiap object. Kalau suatu saat mau CTA yang beda per project,
// tinggal override field "contact" langsung di object project itu.
export const projects = rawProjects.map((project) => ({
  contact: CONTACT,
  ...project,
}))

// Daftar filter yang ditampilkan di halaman (urutan sesuai array ini)
export const tracks = [
  { key: 'all', label: 'All' },
  { key: 'system-analyst', label: 'System Analyst' },
  { key: 'data-engineer', label: 'Data & AI Product' },
]