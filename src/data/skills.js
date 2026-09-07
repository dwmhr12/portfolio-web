// src/data/skills.js
// English version: 2 groups (Core Competencies & Tools).
// Each item uses an object structure
// { name, description } — the `description` is used for tooltip
// when hovering on the Resume page.
// Add, update, or remove items inside each array as needed.

export const coreCompetencies = [
  {
    name: 'System Analysis',
    description: 'Analyzing requirements, system workflows, and processes to design practical system solutions.',
  },
  {
    name: 'Requirement Analysis',
    description: 'Identifying and translating business, user, and stakeholder needs into clear system requirements.',
  },
  {
    name: 'Business Process Modeling',
    description: 'Modeling and analyzing end-to-end business processes using BPMN to support system improvement.',
  },
  {
    name: 'System Design',
    description: 'Designing system architecture, application flows, and functional specifications based on requirements.',
  },
  {
    name: 'Database Design',
    description: 'Designing database structures and data models aligned with system requirements and business needs.',
  },
  {
    name: 'API & System Integration',
    description: 'Working with REST APIs and integrating data and system components across different platforms.',
  },
  {
    name: 'Data Pipeline',
    description: 'Designing and automating ETL pipelines for data ingestion, transformation, validation, error handling, and loading.',
  },
  {
    name: 'Data Analysis',
    description: 'Analyzing and transforming data to identify insights, support decision-making, and improve processes.',
  },
  {
    name: 'AI & RAG',
    description: 'Developing AI solutions and RAG pipelines involving document processing, embeddings, retrieval, and vector databases.',
  },
  {
    name: 'Automation',
    description: 'Automating data and business processes through workflow automation and system integrations.',
  },
  {
    name: 'SRS',
    description: 'Documenting system requirements, specifications, workflows, and technical solutions for development.',
  },
  {
    name: 'UI/UX Prototyping',
    description: 'Designing wireframes and interactive prototypes to communicate and validate system solutions.',
  },
]

export const tools = [

  // System / Development
  {
    name: 'Git',
    description: 'Managing version control and collaborating on project code.',
  },
  {
    name: 'GitHub / Bitbucket',
    description: 'Managing repositories and collaborating on software development projects.',
  },
  {
    name: 'Next.js',
    description: 'Building web applications and implementing application interfaces.',
  },
  {
    name: 'React',
    description: 'Developing interactive web interfaces and application components.',
  },
  {
    name: 'TypeScript',
    description: 'Developing structured and type-safe web applications.',
  },
  {
    name: 'REST API',
    description: 'Integrating applications and exchanging data between systems and services.',
  },

  // Data / Database
  {
    name: 'SQL',
    description: 'Querying, analyzing, transforming, and validating relational data.',
  },
  {
    name: 'PostgreSQL',
    description: 'Designing and managing relational databases for applications and data pipelines.',
  },
  {
    name: 'BigQuery',
    description: 'Querying and analyzing large datasets for analytics and reporting.',
  },
  {
    name: 'Python',
    description: 'Developing data analysis, automation, ETL, and AI-related solutions.',
  },

  // ETL / Automation
  {
    name: 'Apache NiFi',
    description: 'Building and automating ETL pipelines with data integration, transformation, validation, and error handling.',
  },

  // AI / RAG
  {
    name: 'LLM',
    description: 'Working with large language models for AI-powered applications and solutions.',
  },
  {
    name: 'RAG',
    description: 'Building retrieval-augmented generation pipelines for knowledge-based AI applications.',
  },
  {
    name: 'Milvus',
    description: 'Managing vector embeddings and similarity search for RAG applications.',
  },

  // Analysis / Design
  {
    name: 'Draw.io',
    description: 'Designing system flows, process diagrams, and technical models.',
  },
  {
    name: 'BPMN.io',
    description: 'Modeling business processes and workflows using BPMN.',
  },
  {
    name: 'Figma',
    description: 'Designing interfaces, wireframes, and interactive prototypes.',
  },

  // Business / Enterprise
  {
    name: 'SAP S/4HANA',
    description: 'Understanding and working with enterprise processes and ERP system scenarios.',
  },
  {
    name: 'Odoo',
    description: 'Working with ERP modules and business process scenarios for system implementation.',
  },
  {
    name: 'Airtable',
    description: 'Managing structured data and supporting application and business workflows.',
  },

]