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
// ------------------- STRUKTUR STUDI KASUS (v3) -------------------
// "description"      -> ringkasan singkat, dipakai di CARD grid (Work.jsx)
// "categories"        -> tag kategori kerja, tampil di bawah judul modal
// "overview"          -> 1-2 kalimat padat, ini yang PERTAMA dibaca recruiter
// "preview"           -> gambar besar di hero modal (ERD/mockup/dashboard).
// "info"              -> data proyek dalam bentuk card:
//                        { role, timeline, type, team, tools: [] }
//                        "type" contoh: 'Academic Project' / 'Client Project' / 'Personal Project'
//                        "team" contoh: 'Individual' / 'Team of 3'
// "problems"          -> array string, masalah (tampil pakai ❌)
// "responsibilities"  -> array {title, detail} — tugas + penjelasan 1 baris
// "process"           -> array {title, detail} — tahap kerja bernomor
// "deliverables"      -> array {label, image} — kosongkan "image" kalau
//                        belum ada, nanti otomatis tampil placeholder rapi
// "impact"            -> array {label, before, after} — usahakan 3 indikator,
//                        boleh kualitatif ("Manual" -> "Digital Workflow")
// "lessonsLearned"    -> array string, pembelajaran dari proyek ini
// "businessInsight"   -> paragraf singkat (2-3 kalimat), insight level bisnis
//                        bukan cuma teknis — ini yang paling BA banget
// "tech"              -> badge tech stack
// "prototype"         -> link Figma (opsional)
// "link"              -> link source code/GitHub (opsional)
// "document"          -> link dokumen (BRD/SRS/laporan) (opsional)
// "image"             -> gambar thumbnail di CARD grid
// =============================================================

export const projects = [
  {
    title: 'AI Knowledge Management System for Renewable Energy Regulations',
    track: ['system-analyst'],
    description:
      'Created a Business Requirement Document (BRD) for an AI-powered Knowledge Management System designed to help users search renewable energy regulations in Indonesia. The document outlines business needs, system requirements, business processes, and UI/UX design for the proposed solution.',
    categories: ['Business Analysis', 'System Analysis', 'UI/UX'],
    overview:
      'This project is about designing the business requirements for an AI-powered Knowledge Management System for renewable energy regulations in Indonesia. It includes business process modeling, system requirements, UML diagrams, and UI/UX design documented in a Business Requirement Document (BRD).',
    preview: '/Ai.png', 
    info: {
      role: 'Business Analyst',
      timeline: '2 Weeks',
      type: 'Academic Project',
      team: 'Individual',
      tools: ['BPMN.io', 'Draw.io', 'Figma', 'Microsoft Word'],
    },
    problems: [
      'Renewable energy regulations are scattered across multiple documents',
      'Finding relevant regulations is time-consuming and inefficient',
      'There is no centralized knowledge management system to support information retrieval',
    ],
    responsibilities: [
      { title: 'Requirement Gathering', detail: 'Collected business needs and user requirements' },
      { title: 'Business Process Analysis', detail: 'Analyzed existing workflows and identified improvement opportunities' },
      { title: 'BRD Documentation', detail: 'Prepared the Business Requirement Document (BRD)' },
      { title: 'System Requirements', detail: 'Defined functional and non-functional requirements' },
      { title: 'System Design', detail: 'Designed a high-level system architecture' },
      { title: 'UI/UX Design', detail: 'Created wireframes and interactive prototypes using Figma..' },
    ],
    process: [
      { title: 'Requirement Gathering', detail: 'Identify business needs and user requirements' },
      { title: 'Business Analysis', detail: 'Analyze workflows and define business requirements' },
      { title: 'System Design', detail: 'Create UML diagrams and system architecture' },
      { title: 'UI/UX Design', detail: 'Design wireframes and interactive prototypes' },
      { title: 'Documentation', detail: 'Prepare the Business Requirement Document (BRD)' },
    ],
    deliverables: [
      { label: 'AS-IS Business Process', image: '/asischatbot.png' },
      { label: 'TO-BE  Business Process', image: '/tobechatbot.png' },
      { label: 'Use Case Diagram', image: '/usecasechatbot.png' },
    ],
    impact: [
      { label: 'Knowledge Access', before: 'Scattered Documents', after: 'Centralized KMS Design' },
      { label: 'Information Retrieval', before: 'Manual Search', after: 'AI-Assisted Retrieval' },
      { label: 'System Requirements', before: 'Undefined', after: 'Well-Documented BRD' },
    ],
    lessonsLearned: [
      'Translating business needs into structured system requirements',
      'Designing business processes before proposing technical solutions',
      'Preparing comprehensive BRD documentation for AI-powered systems',
    ],
    businessInsight:
      'The biggest challenge was not the AI technology itself, but understanding user needs and translating them into clear business and system requirements before development began',
    tech: ['BRD', 'UML', 'FR', 'NFR', 'Use Case'],
    prototype: '',
    link: '',
    document: 'https://intip.in/aiKnowledgeManagement',
    image: '/Ai.png',
  },
  {
    title: 'TaskSync – Smart Academic Task Management',
    track: ['system-analyst'],
    description:
      'Created an SRS for TaskSync, a mobile application designed to help students manage academic tasks and schedules more efficiently. The document outlines the software requirements, user workflows, and UI/UX design for the proposed application.',
    categories: ['System Analysis', 'UI/UX'],
    overview:
      'TaskSync was designed to help students keep track of academic tasks, schedules, and other activities in one place. As part of this project, I developed the Software Requirements Specification (SRS), covering software requirements, external interfaces, and UI/UX design. The document serves as a reference for future application development.',
    preview: '/taskSync.png',
    info: {
      role: 'System Analysis',
      timeline: '4 Weeks',
      type: 'Academic Project',
      team: 'Individual',
      tools: ['BPMN.io', 'Draw.io', 'Figma', 'Microsoft Word'],
    },
    problems: [
      'Students use multiple platforms to manage academic tasks and schedules',
      'Keeping track of assignments and deadlines is often confusing',
      'There is no centralized application that integrates academic tasks and personal schedules',
    ],
    responsibilities: [
      { title: 'Requirements Analysis', detail: 'Identified user needs and defined software requirements' },
      { title: 'SRS Documentation', detail: 'Prepared the Software Requirements Specification (SRS) based on the IEEE 830-1998 standard' },
      { title: 'System Requirements', detail: 'Defined functional and non-functional requirements' },
      { title: 'Interface Design', detail: 'Documented external interfaces and system interactions' },
      { title: 'UI/UX Design', detail: 'Designed wireframes and interactive prototypes using Figma' },
    ],
    process: [
      { title: 'Requirement Gathering', detail: 'Identify user needs and academic workflow' },
      { title: 'Requirement Analysis', detail: 'Define functional and non-functional requirements' },
      { title: 'System Design', detail: 'Design user flows and external interfaces' },
      { title: 'UI/UX Design', detail: 'Create wireframes and interactive prototypes in Figma' },
      { title: 'Documentation', detail: 'Prepare the Software Requirements Specification (SRS)' },
    ],
    impact: [
      { label: 'Task Management', before: 'Multiple Platforms', after: 'Centralized Application Design' },
      { label: 'Requirement Documentation', before: 'Undefined', after: 'Well-Structured SRS' },
      { label: 'Decision Speed', before: 'Delayed', after: 'Near Real-Time' },
    ],
    lessonsLearned: [
      'Cleaning messy real-world transaction data at scale.',
      'Designing dashboards that non-technical users can self-serve.',
      'Balancing detail vs. simplicity in data visualization.',
    ],
    businessInsight:
      'Masalah utama tim sales bukan kurangnya data, tapi lambatnya akses ke data yang sudah ada. Dashboard self-service ini mengubah keputusan yang tadinya menunggu laporan mingguan menjadi bisa diambil harian.',
    tech: ['Software Requirements Specification (SRS)', 'IEEE 830-1998',
  'Requirement Analysis',
  'Functional Requirements',
  'Non-Functional Requirements',
  'Use Case Diagram',
  'BPMN',
  'Activity Diagram',
  'Wireframing',
  'Figma',],
    prototype: '',
    link: '',
    document: 'https://intip.in/TaskSync',
    image: '/taskSync.png',
  },
  {
    title: 'Mamikos Mobile App Redesign',
    track: ['ui-ux'],
    description:
      'Redesigned the Mamikos mobile application by reviewing the existing interface and improving key user flows. The project resulted in an interactive high-fidelity prototype created in Figma',
    categories: ['UI/UX Design'],
    overview:
      'The project began by reviewing the existing Mamikos mobile application to identify usability issues and areas for improvement. Based on the findings, the interface and user flows were redesigned, followed by the development of a high-fidelity prototype in Figma',
    preview: '/mamikos.jpg',
    info: {
      role: 'UI/UX Designer',
      timeline: '3 Weeks',
      type: 'Academic Project',
      team: 'Team Project',
      tools: ['Figma'],
    },
    problems: [
      'Communication between property owners and tenants was limited, causing misunderstandings due to unclear or outdated information.',
      'Users struggled to find suitable boarding houses because the filtering system was not detailed or intuitive enough.',
      'Property information, photos, and facilities were often outdated, reducing user trust and satisfaction.',
    ],
    responsibilities: [
      { title: 'Application Review', detail: 'Reviewed the existing Mamikos application with the team to evaluate its usability.' },
      { title: 'Usability Analysis', detail: 'Identified usability issues and explored potential design improvements.' },
      { title: 'User Flow Redesign', detail: 'Redesigned key user flows to create a more intuitive experience.' },
      { title: 'UI Design', detail: 'Designed high-fidelity interface screens in Figma.' },
      { title: 'Prototype & Presentation', detail: 'Built an interactive prototype and presented the design for team discussion and feedback.' },
    ],
    process: [
      { title: 'Needfinding Interviews', detail: 'Conducted interviews with six participants, including tenants and property owners, to understand user needs and pain points.' },
      { title: 'Problem Identification', detail: 'Synthesized interview findings to identify key usability issues related to communication, search experience, and property information.' },
      { title: 'User Flow Redesign', detail: 'Redesigned key user flows to simplify interactions and improve the overall user experience.' },
      { title: 'High-Fidelity UI Design', detail: 'Designed polished interface screens in Figma with a more consistent and user-centered design.' },
      { title: 'Interactive Prototype', detail: 'Built a clickable prototype in Figma to demonstrate the redesigned experience and gather feedback.' },
    ],
    impact: [
      { label: 'Communication', before: 'Basic Chat Experience', after: 'Interactive Chat with Media Support' },
      { label: 'Property Search', before: 'Limited Filtering', after: 'More Detailed & Personalized Filtering' },
      { label: 'Property Information', before: 'Unclear Update Status', after: 'Information Renewal Feature' },
    ],
    lessonsLearned: [
      'User interviews uncovered usability issues that were not apparent from the interface alone.',
      'Iterative prototyping and usability testing helped refine the design from low-fidelity to high-fidelity prototypes.',
      'Providing transparent and up-to-date information is essential for building user trust in rental platforms.',
    ],
    businessInsight:
      'The research showed that user dissatisfaction was driven primarily by communication gaps, inefficient search, and outdated property information rather than visual design alone. By improving communication, enhancing filtering, and increasing information transparency, the redesign aims to build greater user trust and support more confident rental decisions.',
    tech: ['Figma',
          'Design Thinking',
          'User Interview',
          'Needfinding',
          'Empathy Map',
          'Usability Testing',
          'Heuristic Evaluation',
          'Wizard of Oz',
          'High-Fidelity Prototyping'],
    prototype: 'https://www.figma.com/proto/sqT8Sne7TRGjmMX5ZPjju2/DPP-D-Kel-8---Mamikos?node-id=0-1&t=QdVpgN8pvuwiDgMG-1 ',
    link: '',
    document: 'https://intip.in/MamiKos',
    image: '/mamikos.jpg',
  },
  {
    title: 'Surgeinez Mobile App Prototype',
    track: ['ui-ux'],
    description:
      'Designed a high-fidelity mobile application prototype in Figma based on predefined requirements and user flows for an academic final project.',
    categories: ['UI/UX Design'],
    overview:
      'Contributed to an academic final project by translating existing requirements into a high-fidelity mobile application prototype. Designed multiple application screens and connected them into an interactive prototype in Figma.',
    preview: '/surgeine.jpg',
    info: {
      role: 'UI/UX Designer',
      timeline: '1 Week',
      type: 'Freelance',
      team: 'Individual',
      tools: ['Figma'],
    },
    problems: [
      'The project required a high-fidelity prototype to visualize the application before development.',
      'The provided requirements needed to be translated into a clear and consistent mobile interface.',
      'Stakeholders required an interactive prototype to demonstrate user flows and application features.',
    ],
    responsibilities: [
      { title: 'UI Design', detail: 'Designed high-fidelity mobile interface screens in Figma.' },
      { title: 'Prototype Development', detail: 'Created an interactive prototype by connecting user flows across multiple screens.' },
      { title: 'Design Collaboration', detail: 'Worked closely with the project owner to implement the provided requirements into the final prototype.' },
    ],
    process: [
      { title: 'Review Requirements', detail: 'Reviewed the provided requirements and application flow.' },
      { title: 'Design UI Screens', detail: 'Designed high-fidelity mobile interface screens in Figma.' },
      { title: 'Build Prototype', detail: 'Connected screens into an interactive prototype.' },
      { title: 'Revision', detail: 'Refined the prototype based on project feedback.' },
    ],
    impact: [
      { label: 'Prototype', before: 'Wireframe / Concept', after: 'Interactive High-Fidelity Prototype' },
      { label: 'Visualization', before: 'Requirement Document', after: 'Ready for User Demonstration' },
      { label: 'Stakeholder Review', before: 'Written Specification', after: 'Clickable Design Flow' },
    ],
    lessonsLearned: [
      'Transforming functional requirements into intuitive mobile interfaces.',
      'Maintaining visual consistency across multiple application screens.',
      'Building interactive prototypes to communicate application flows.',
    ],
    businessInsight:
      'Interactive prototypes reduce ambiguity during product development by allowing stakeholders to visualize application flows, identify usability concerns earlier, and communicate design ideas more effectively.',
    tech: ['Figma', 'UI Design', 'Prototyping'],
    prototype: 'https://www.figma.com/proto/Jc5ae5Hk7ItQuVaL6CYDLH/Surgeine?node-id=0-1&t=pymEWsdSeHPpDTrK-1',
    link: '',
    document: '',
    image: '/surgeine.jpg',
  },
  {
    title: 'TaskSync Mobile App',
    track: ['ui-ux'],
    description:
      'Designed a high-fidelity mobile application that helps university students manage academic tasks by integrating assignments, reminders, and schedules into a single platform.',
    categories: ['UI/UX Design'],
    overview:
      'TaskSync is a mobile application concept designed to help students organize academic activities more efficiently. The project focused on designing intuitive user flows and a consistent interface, resulting in an interactive high-fidelity prototype created in Figma.',
    preview: '/uiuxtasksync.jpg',
    info: {
      role: 'UI/UX Designer',
      timeline: '3 Weeks',
      type: 'Personal Project',
      team: 'Individual',
      tools: ['Figma'],
    },
    problems: [
      'Students often managed assignments, schedules, and reminders across multiple applications.',
      'Keeping track of deadlines became difficult due to scattered academic information.',
      'Existing task management solutions were not specifically designed for university academic workflows.',
    ],
    responsibilities: [
      { title: 'User Flow Design', detail: 'Designed user journeys for managing academic tasks, reminders, and schedules.' },
      { title: 'Information Architecture', detail: 'Structured application features into a simple and intuitive navigation.' },
      { title: 'UI Design', detail: 'Designed high-fidelity mobile interfaces in Figma.' },
      { title: 'Interactive Prototype', detail: 'Created a clickable prototype demonstrating the complete user flow.' },
      { title: 'Design System', detail: 'Maintained consistent visual components, typography, and color styles.' },
    ],
    process: [
      { title: 'Problem Exploration', detail: 'Defined common challenges students face when managing academic activities.' },
      { title: 'User Flow Design', detail: 'Mapped user journeys for creating, organizing, and tracking assignments.' },
      { title: 'Wireframing', detail: 'Created low-fidelity layouts to validate the application structure.' },
      { title: 'High-Fidelity UI Design', detail: 'Designed polished mobile interfaces using a consistent visual system.' },
      { title: 'Interactive Prototype', detail: 'Connected screens into a clickable prototype for demonstration.' },
    ],
    impact: [
      { label: 'Task Management', before: 'Multiple Applications', after: 'Single Integrated Platform' },
      { label: 'Assignment Tracking', before: 'Manual Monitoring', after: 'Centralized Dashboard' },
      { label: 'Prototype', before: 'Concept Only', after: 'Interactive High-Fidelity Prototype' },
    ],
    lessonsLearned: [
      'Designing interfaces requires balancing usability with visual consistency.',
      'Well-structured user flows reduce unnecessary interactions and improve task completion.',
      'Interactive prototypes help communicate product ideas before development.',
    ],
    businessInsight:
      'Good user experience is created by reducing unnecessary interactions rather than adding more features. Designing intuitive navigation, clear information hierarchy, and streamlined task management helps users achieve their goals with less effort.',
    tech: ['Figma', 'User Flow',
    'Wireframing',
    'Information Architecture',
    'High-Fidelity Prototyping',
    'Design System',],
    prototype: 'https://www.figma.com/proto/CWJeae8DRxqByskWcu3s0T/TaskSync?node-id=0-1&t=H3I0XVVvMMDSH7Sl-1',
    link: '',
    document: '',
    image: '/uiuxtasksync.jpg',
  },
  {
    title: 'IKN News Sentiment Analysis',
    track: ['data-engineer'],
    description:
      'Built an end-to-end NLP pipeline to analyze public sentiment toward Indonesia’s new capital city (IKN) by collecting, preprocessing, and classifying online news articles using a fine-tuned IndoBERT model.',
    categories: ['Data Engineering', 'Natural Language Processing'],
    overview:
      'his academic team project focused on analyzing online media sentiment regarding the relocation of Indonesia’s capital city (IKN). The project covered the complete NLP workflow, including web scraping, text preprocessing, dataset balancing, sentiment classification, linguistic analysis (TF-IDF, POS Tagging, and Named Entity Recognition), and model evaluation by comparing IndoBERT with traditional machine learning approaches.',
    preview: '/ikn.png',
    info: {
      role: 'Data Engineer',
      timeline: '9 Weeks',
      type: 'Academic Project',
      team: 'Team',
      tools: ['Python','BeautifulSoup',
      'Pandas',
      'NLTK',
      'PySastrawi',
      'Hugging Face Transformers',
      'IndoBERT',
      'Scikit-learn',
      'spaCy',
      'Matplotlib' ],
    },
    problems: [
      'Public opinion regarding the IKN project was spread across numerous online news portals, making large-scale analysis difficult.',
      'Raw news articles required extensive preprocessing before they could be used for NLP tasks.',
      'Traditional text classification methods struggled to capture contextual sentiment in Indonesian news articles.',
    ],
    responsibilities: [
      { title: 'Data Acquisition', detail: 'Collected 162 online news articles using Google Dorking and automated web scraping with BeautifulSoup.' },
      { title: 'Data Preprocessing', detail: 'Built preprocessing pipelines including cleaning, tokenization, stopword removal, stemming, lemmatization, and text normalization.' },
      { title: 'Dataset Engineering', detail: 'Performed manual labeling, class balancing, and data augmentation to prepare datasets for supervised learning.' },
      { title: 'NLP & Machine Learning', detail: 'Implemented and evaluated fine-tuned IndoBERT, TF-IDF + Logistic Regression, and TF-IDF + Support Vector Machine models.' },
      { title: 'Data Analysis', detail: 'Conducted sentiment distribution analysis, TF-IDF keyword extraction, POS Tagging, Named Entity Recognition, and visualization.' },
    ],
    process: [
      { title: 'Data Collection', detail: 'Collected news articles from multiple Indonesian media outlets using Google Dorking and web scraping.' },
      { title: 'Preprocessing', detail: 'Cleaned and normalized textual data through tokenization, stopword removal, stemming, and lemmatization.' },
      { title: 'Dataset Preparation', detail: 'Balanced sentiment classes through undersampling and NLP-based data augmentation techniques.' },
      { title: 'Model Training', detail: 'Fine-tuned IndoBERT for sentiment classification and compared it with TF-IDF-based Logistic Regression and SVM baselines.' },
      { title: 'Evaluation & Insights', detail: 'Evaluated model performance using Accuracy, Precision, Recall, F1-score, confusion matrices, and linguistic analysis.' },
    ],
    impact: [
      { label: 'News Articles', before: 'Raw Online Articles', after: '162 Structured News Documents' },
      { label: 'Dataset', before: 'Imbalanced Classes', after: 'Balanced 100:100:100 Dataset' },
      { label: 'Model Performance', before: 'TF-IDF + SVM (78%)', after: 'Fine-tuned IndoBERT (82%)' },
    ],
    lessonsLearned: [
      'Data quality and preprocessing significantly influence NLP model performance.',
      'Transformer-based models capture contextual meaning better than traditional TF-IDF approaches.',
      'Balanced datasets improve model generalization and reduce prediction bias across sentiment classes.',
    ],
    businessInsight:
      'Analyzing media sentiment provides valuable insights into public perception of large-scale government initiatives. Combining data engineering with NLP enables organizations and policymakers to monitor public opinion more accurately and make better communication decisions.',
    tech: ['Python', 'BeautifulSoup',
    'Pandas',
    'NLTK',
    'PySastrawi',
    'Hugging Face Transformers',
    'IndoBERT',
    'TF-IDF',
    'Logistic Regression',
    'Support Vector Machine',
    'spaCy',
    'Matplotlib',],
    prototype: '',
    link: '',
    document: 'https://docs.google.com/document/d/1u_P-FrYETWmldzMoqlwKZZfGJNgp0m9L0_1GOZMjf0Q/edit?usp=sharing',
    image: '/ikn2.png',
  },
  {
    title: 'Enterprise ETL Pipeline Automation',
    track: ['data-engineer'],
    description:
      'Designed and implemented automated ETL pipelines using Apache NiFi to integrate data from spreadsheets and REST APIs into a centralized data mart, supporting enterprise reporting and analytics.',
    categories: ['Data Engineering', 'ETL Pipeline'],
    overview:
      'During my internship, I developed multiple automated ETL pipelines using Apache NiFi to process operational data from spreadsheets and REST APIs. The solution covered the complete ETL workflow, including extraction, validation, data cleansing, standardization, metadata enrichment, scheduling, failure notifications, and incremental loading into a centralized data mart.',
    preview: 'plnnp.png',
    info: {
      role: 'Data Engineer',
      timeline: '3 Months',
      type: 'Internship Project',
      team: 'Team',
      tools: ['Apache NiFi','SQL',
      'REST API',
      'CSV',
      'Microsoft Excel',
      'PostgreSQL'  ],
    },
    problems: [
      'Business data originated from multiple sources including spreadsheets and REST APIs, making manual integration inefficient.',
      'Data quality issues such as missing values and duplicate records affected reporting accuracy.',
      'The organization required automated pipelines with scheduling, monitoring, and reliable incremental loading.',
    ],
    responsibilities: [
      { title: 'ETL Pipeline Development', detail: 'Developed multiple Apache NiFi pipelines for extracting, transforming, and loading operational data.' },
      { title: 'Data Integration', detail: 'Integrated spreadsheet-based and API-based data into a centralized data mart.' },
      { title: 'Data Validation', detail: 'Implemented validation rules for mandatory fields, duplicate detection, and pipeline failure handling.' },
      { title: 'Pipeline Automation', detail: 'Configured scheduled execution, automated email notifications, and incremental data processing.' },
      { title: 'Database Loading', detail: 'Implemented upsert and soft-delete mechanisms to maintain historical records in the data mart.' },
    ],
    process: [
      { title: 'Data Extraction', detail: 'Extracted data from Excel files and REST APIs using automated Apache NiFi workflows.' },
      { title: 'Data Cleansing', detail: 'Validated mandatory fields, removed duplicate records, and handled pipeline failures through automated notifications.' },
      { title: 'Data Standardization', detail: 'Standardized date formats, numeric fields, and string values to ensure data consistency.' },
      { title: 'Metadata Enrichment', detail: 'Added audit metadata including timestamps, creator information, and soft-delete attributes.' },
      { title: 'Data Loading', detail: 'Loaded transformed datasets into a centralized data mart using upsert and incremental loading strategies.' },
    ],
    impact: [
      { label: 'Data Sources', before: 'Manual Integration', after: 'Automated ETL Pipelines' },
      { label: 'Data Processing', before: 'Manual Validation', after: 'Automated Validation & Cleansing' },
      { label: 'Data Warehouse', before: 'Fragmented Data', after: 'Centralized Data Mart' },
    ],
    lessonsLearned: [
      'Building production ETL pipelines requires more than moving data; robust validation and monitoring are essential.',
      'Automating data quality checks significantly improves pipeline reliability.',
      'Incremental loading and soft-delete strategies help preserve historical data while keeping datasets up to date.',
    ],
    businessInsight:
      'Automated ETL pipelines reduce manual effort, improve data quality, and provide reliable, up-to-date data for enterprise reporting and business intelligence.',
    tech: ['Apache NiFi', 'SQL',
    'REST API',
    'ETL',
    'CSV',
    'Excel',
    'PostgreSQL',
    'Data Validation',
    'Data Cleansing',
    'Data Warehousing',],
    prototype: '',
    link: '',
    document: '',
    image: '/plnnp.png',
  },
  {
    title: 'PLN Insight Generatif – RAG Data Pipeline',
    track: ['data-engineer'],
    description:
      'Developed an automated data ingestion pipeline for a Retrieval-Augmented Generation (RAG) system by extracting PDF documents, preprocessing text, generating embeddings, and storing vectors in Milvus using Python and Apache Airflow.',
    categories: ['Data Engineering', 'AI Infrastructure'],
    overview:
      'During my internship, I contributed to the data engineering pipeline of PLN Insight Generatif, an internal AI knowledge management system. The project focused on building an end-to-end document processing pipeline, including PDF extraction, text cleansing, chunking, embedding generation, vector database ingestion, and workflow orchestration using Apache Airflow.',
    preview: 'plnig.png',
    info: {
      role: 'Data Engineer',
      timeline: '3 Months',
      type: 'Internship Project',
      team: 'Team',
      tools: ['Python', 'Apache Airflow',
      'Milvus',
      'Docker',
      'Docker Compose',
      'MinIO',
      'ETCD' ],
    },
    problems: [
      'Knowledge documents were stored as unstructured PDF files, making information retrieval slow and inefficient.',
      'AI applications required searchable vector representations instead of raw text documents.',
      'The organization needed an automated pipeline to process new documents consistently and reliably.',
    ],
    responsibilities: [
      { title: 'Document Extraction', detail: 'Built Python scripts to extract textual content from PDF documents.' },
      { title: 'Data Preprocessing', detail: 'Implemented data cleansing and text normalization before downstream processing.' },
      { title: 'Chunking Pipeline', detail: 'Split documents into semantic chunks suitable for embedding generation.' },
      { title: 'Embedding Generation', detail: 'Generated vector embeddings from processed document chunks for semantic search.' },
      { title: 'Vector Database Integration', detail: 'Inserted embeddings into Milvus and orchestrated the complete workflow using Apache Airflow.' },
    ],
    process: [
      { title: 'Document Extraction', detail: 'Extracted text from PDF documents using Python-based ETL scripts.' },
      { title: 'Data Cleansing', detail: 'Removed unnecessary characters and standardized document content.' },
      { title: 'Document Chunking', detail: 'Segmented documents into smaller chunks optimized for vector embeddings.' },
      { title: 'Embedding Generation', detail: 'Converted document chunks into vector embeddings for semantic retrieval.' },
      { title: 'Vector Storage & Orchestration', detail: 'Stored embeddings in Milvus and automated the end-to-end workflow using Apache Airflow.' },
    ],
    impact: [
      { label: 'Knowledge Source', before: 'Unstructured PDF Documents', after: 'Searchable Vector Database' },
      { label: 'Processing', before: 'Manual Pipeline', after: 'Automated Airflow Workflow' },
      { label: 'Retrieval', before: 'Keyword Search', after: 'Semantic Vector Search' },
    ],
    lessonsLearned: [
      'Building AI systems requires reliable data engineering pipelines before model development.',
      'Document chunking strategy significantly affects retrieval quality in RAG systems.',
      'Workflow orchestration improves pipeline reliability and maintainability.',
    ],
    businessInsight:
      'Automating document ingestion into a vector database enables faster knowledge retrieval and provides a scalable foundation for enterprise AI assistants based on Retrieval-Augmented Generation.',
    tech: ['Python', 'Apache Airflow',
    'Milvus',
    'Docker',
    'Docker Compose',
    'MinIO',
    'ETCD',
    'Vector Database',
    'ETL',
    'RAG Pipeline'],
    prototype: '',
    link: '',
    document: '',
    image: 'plnig.png',
  },
]

// Daftar filter yang ditampilkan di halaman (urutan sesuai array ini)
export const tracks = [
  { key: 'all', label: 'All' },
  { key: 'system-analyst', label: 'System Analyst' },
  { key: 'data-engineer', label: 'Data Engineer' },
  { key: 'ui-ux', label: 'UI/UX Designer' },
  
]