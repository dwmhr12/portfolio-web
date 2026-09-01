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
    description: 'Identifying and translating user and stakeholder needs into clear system requirements.',
  },
  {
    name: 'System & Application Flow',
    description: 'Designing end-to-end application and system flows based on functional requirements.',
  },
  {
    name: 'Business Process Modeling',
    description: 'Modeling end-to-end processes using BPMN to understand workflows and support system design.',
  },
  {
    name: 'SRS Documentation',
    description: 'Documenting system requirements and specifications as references for development.',
  },
  {
    name: 'UML Modeling',
    description: 'Modeling system structure and behavior using UML diagrams.',
  },
  {
    name: 'Database Design',
    description: 'Designing database structures aligned with system requirements and data needs.',
  },
  {
    name: 'API & System Integration',
    description: 'Understanding and working with REST APIs and interactions between system components.',
  },
  {
    name: 'Data Analysis',
    description: 'Analyzing data to identify patterns, insights, and opportunities for improvement.',
  },
  {
    name: 'UI/UX Prototyping',
    description: 'Designing wireframes and interactive prototypes to visualize system solutions.',
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
    description: 'Managing repositories and collaborating on development projects.',
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
    name: 'PostgreSQL',
    description: 'Working with relational databases for application data.',
  },
  {
    name: 'REST API',
    description: 'Integrating and exchanging data between applications and services.',
  },

  // Data / AI
  {
    name: 'SQL',
    description: 'Querying, analyzing, and validating relational data.',
  },
  {
    name: 'BigQuery',
    description: 'Querying and analyzing data for analytics and reporting.',
  },
  {
    name: 'Python',
    description: 'Working on data analysis, automation, and AI-related projects.',
  },
  {
    name: 'Apache NiFi',
    description: 'Building ETL pipelines and integrating data from different sources.',
  },
  {
    name: 'Milvus',
    description: 'Building vector search and retrieval components for RAG applications.',
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
    description: 'Working with enterprise processes and ERP system scenarios.',
  },
  {
    name: 'Airtable',
    description: 'Managing structured data and supporting application workflows.',
  },
]