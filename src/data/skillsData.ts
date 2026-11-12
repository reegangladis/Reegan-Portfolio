import { SkillItem, SkillCategory } from '../types';

export const SKILL_CATEGORIES: SkillCategory[] = [
  'Programming Languages',
  'Frontend Development',
  'Backend Development',
  'Databases',
  'Artificial Intelligence & Machine Learning',
  'Salesforce',
  'Data Analytics',
  'DevOps & Development Tools',
];

export const SKILLS_DATA: SkillItem[] = [
  // 01 - Programming Languages
  {
    name: 'Python',
    category: 'Programming Languages',
    description: 'Primary language for backend microservices, machine learning pipelines, RAG systems, and data manipulation.',
    relatedProjects: ['Learnova AI', 'VertexERP AI', 'Leo AI', 'AI Healthcare Diagnosis'],
    featured: true,
  },
  {
    name: 'TypeScript',
    category: 'Programming Languages',
    description: 'Strict type safety across large-scale React frontends, API contracts, and full-stack enterprise codebases.',
    relatedProjects: ['Learnova AI', 'VertexERP AI', 'ExcelR Track360'],
    featured: true,
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'Programming Languages',
    description: 'Modern asynchronous programming, DOM lifecycle manipulation, event listeners, and interactive UI behavior.',
    relatedProjects: ['Learnova AI', 'ExcelR Track360'],
    featured: false,
  },
  {
    name: 'SQL',
    category: 'Programming Languages',
    description: 'Relational query optimization, indexed schema design, multi-table joins, views, and data integrity constraints.',
    relatedProjects: ['VertexERP AI', 'Learnova AI', 'ExcelR Track360'],
    featured: true,
  },
  {
    name: 'Java',
    category: 'Programming Languages',
    description: 'Object-oriented software principles, multi-threading basics, and academic software engineering foundations.',
    featured: false,
  },
  {
    name: 'C',
    category: 'Programming Languages',
    description: 'Foundational systems programming, memory pointers, data structures, and computer science fundamentals.',
    featured: false,
  },
  {
    name: 'C++',
    category: 'Programming Languages',
    description: 'Algorithmic problem solving, standard template library (STL), and object-oriented architecture.',
    featured: false,
  },
  {
    name: 'PHP',
    category: 'Programming Languages',
    description: 'Server-side scripting, MVC backend patterns, and relational database interactions.',
    featured: false,
  },

  // 02 - Frontend Development
  {
    name: 'React.js',
    category: 'Frontend Development',
    description: 'Component architecture, custom hooks, React 18 concurrent features, TanStack Query, and virtual DOM rendering.',
    relatedProjects: ['Learnova AI', 'VertexERP AI', 'ExcelR Track360'],
    featured: true,
  },
  {
    name: 'HTML5',
    category: 'Frontend Development',
    description: 'Semantic markup, accessible DOM structure (WAI-ARIA), audio/video APIs, and SEO metadata.',
    featured: false,
  },
  {
    name: 'CSS3',
    category: 'Frontend Development',
    description: 'Modern CSS custom properties, flexbox, CSS grid, keyframe animations, and responsive typography scales.',
    featured: false,
  },
  {
    name: 'Tailwind CSS',
    category: 'Frontend Development',
    description: 'Utility-first styling, custom theme token systems, dark mode palettes, and responsive design systems.',
    relatedProjects: ['Learnova AI', 'VertexERP AI', 'ExcelR Track360'],
    featured: true,
  },

  // 03 - Backend Development
  {
    name: 'FastAPI',
    category: 'Backend Development',
    description: 'High-performance async Python framework, automatic OpenAPI generation, Pydantic validation, and dependency injection.',
    relatedProjects: ['Learnova AI', 'VertexERP AI', 'ExcelR Track360'],
    featured: true,
  },
  {
    name: 'Flask',
    category: 'Backend Development',
    description: 'Lightweight WSGI Python microframework for REST APIs and computer vision model serving.',
    relatedProjects: ['AI Healthcare Diagnosis'],
    featured: false,
  },
  {
    name: 'REST APIs',
    category: 'Backend Development',
    description: 'Stateless resource design, HTTP status codes, structured JSON envelopes, and API rate limiting.',
    relatedProjects: ['Learnova AI', 'VertexERP AI'],
    featured: true,
  },
  {
    name: 'Node.js',
    category: 'Backend Development',
    description: 'Event-driven server runtime, npm package ecosystem, and tooling scripts.',
    featured: false,
  },

  // 04 - Databases
  {
    name: 'PostgreSQL',
    category: 'Databases',
    description: 'Enterprise ACID-compliant relational database, indexing strategies, asyncpg driver, and pgvector extension.',
    relatedProjects: ['Learnova AI', 'VertexERP AI', 'ExcelR Track360'],
    featured: true,
  },
  {
    name: 'MySQL',
    category: 'Databases',
    description: 'Relational data modeling, table normalization, transactions, and foreign key integrity.',
    featured: false,
  },
  {
    name: 'SQLite',
    category: 'Databases',
    description: 'Serverless embedded relational database for local desktop assistants and testing environments.',
    relatedProjects: ['Leo AI'],
    featured: false,
  },
  {
    name: 'Redis',
    category: 'Databases',
    description: 'In-memory data store for sub-millisecond caching, session state management, and pub/sub message brokers.',
    relatedProjects: ['Learnova AI', 'VertexERP AI'],
    featured: true,
  },

  // 05 - Artificial Intelligence & Machine Learning
  {
    name: 'TensorFlow',
    category: 'Artificial Intelligence & Machine Learning',
    description: 'Deep learning frameworks, Convolutional Neural Networks, model training, and weights evaluation.',
    relatedProjects: ['AI Healthcare Diagnosis'],
    featured: true,
  },
  {
    name: 'Scikit-learn',
    category: 'Artificial Intelligence & Machine Learning',
    description: 'Supervised and unsupervised ML algorithms, classification pipelines, feature transformers, and cross-validation.',
    relatedProjects: ['Learnova AI'],
    featured: true,
  },
  {
    name: 'OpenCV',
    category: 'Artificial Intelligence & Machine Learning',
    description: 'Computer vision routines: medical image filtering, edge detection, normalization, and dimensional preprocessing.',
    relatedProjects: ['AI Healthcare Diagnosis'],
    featured: false,
  },
  {
    name: 'LangChain',
    category: 'Artificial Intelligence & Machine Learning',
    description: 'LLM orchestration, prompt chaining, document loaders, vector store retrievers, and AI copilot agents.',
    relatedProjects: ['VertexERP AI', 'Learnova AI'],
    featured: true,
  },
  {
    name: 'RAG (Retrieval-Augmented Generation)',
    category: 'Artificial Intelligence & Machine Learning',
    description: 'Chunking strategies, contextual embeddings, semantic similarity search, and synthesized answer generation.',
    relatedProjects: ['Learnova AI', 'VertexERP AI'],
    featured: true,
  },
  {
    name: 'FAISS',
    category: 'Artificial Intelligence & Machine Learning',
    description: 'Dense vector clustering and fast approximate nearest neighbor search for high-dimensional document spaces.',
    relatedProjects: ['Learnova AI'],
    featured: false,
  },
  {
    name: 'LLM Integration',
    category: 'Artificial Intelligence & Machine Learning',
    description: 'Ollama local inference, OpenAI / Anthropic APIs, prompt engineering, streaming responses, and structured outputs.',
    relatedProjects: ['Leo AI', 'Learnova AI'],
    featured: true,
  },

  // 06 - Salesforce
  {
    name: 'Salesforce CRM',
    category: 'Salesforce',
    description: 'Enterprise CRM platform configuration, relationship modeling, sales cloud cycles, and administrative governance.',
    featured: true,
  },
  {
    name: 'Lead Management',
    category: 'Salesforce',
    description: 'Lead capture pipelines, assignment rules, qualification criteria, and automated conversion workflows.',
    featured: false,
  },
  {
    name: 'Reports & Dashboards',
    category: 'Salesforce',
    description: 'Custom report types, summary/matrix reports, executive KPI dashboards, and automated scheduled deliveries.',
    featured: true,
  },
  {
    name: 'Salesforce Flow',
    category: 'Salesforce',
    description: 'Declarative automation: record-triggered flows, screen flows, scheduled flows, and business logic orchestration.',
    featured: true,
  },
  {
    name: 'Object Manager',
    category: 'Salesforce',
    description: 'Standard and custom object architecture, master-detail relationships, lookup fields, and formula validation.',
    featured: false,
  },
  {
    name: 'Profiles & Permission Sets',
    category: 'Salesforce',
    description: 'Granular security architecture, field-level security (FLS), record-level sharing rules, and role hierarchies.',
    featured: false,
  },
  {
    name: 'Data Loader & Import Wizard',
    category: 'Salesforce',
    description: 'Bulk data migration, CSV transformation, upsert operations, record deduplication, and export routines.',
    featured: false,
  },

  // 07 - Data Analytics
  {
    name: 'Power BI',
    category: 'Data Analytics',
    description: 'Interactive business intelligence reports, DAX calculations, data modeling, and executive KPI visualizations.',
    featured: true,
  },
  {
    name: 'Microsoft Excel (Advanced)',
    category: 'Data Analytics',
    description: 'Pivot tables, VLOOKUP/XLOOKUP, complex data cleaning formulas, conditional formatting, and data validation.',
    featured: false,
  },
  {
    name: 'Pandas',
    category: 'Data Analytics',
    description: 'DataFrame transformations, exploratory data analysis (EDA), handling missing values, and time-series aggregation.',
    relatedProjects: ['Learnova AI'],
    featured: true,
  },
  {
    name: 'NumPy',
    category: 'Data Analytics',
    description: 'Multidimensional array computations, vectorization, linear algebra, and high-performance numeric operations.',
    relatedProjects: ['Learnova AI', 'AI Healthcare Diagnosis'],
    featured: false,
  },
  {
    name: 'Matplotlib & Seaborn',
    category: 'Data Analytics',
    description: 'Statistical plotting, distribution curves, correlation heatmaps, and publication-ready analytical charts.',
    featured: false,
  },

  // 08 - DevOps & Development Tools
  {
    name: 'Git & GitHub',
    category: 'DevOps & Development Tools',
    description: 'Branching strategies (GitFlow), commit hygiene, pull requests, merge conflict resolution, and version control.',
    featured: true,
  },
  {
    name: 'Docker',
    category: 'DevOps & Development Tools',
    description: 'Multi-stage Dockerfiles, Docker Compose containerization for microservices, Redis, and PostgreSQL.',
    relatedProjects: ['Learnova AI', 'VertexERP AI'],
    featured: true,
  },
  {
    name: 'Kubernetes Basics',
    category: 'DevOps & Development Tools',
    description: 'Foundational container orchestration concepts: pods, services, deployments, and cluster scalability principles.',
    featured: false,
  },
  {
    name: 'Postman',
    category: 'DevOps & Development Tools',
    description: 'REST API endpoint testing, environment variables, automated collection runners, and auth token mocking.',
    featured: true,
  },
  {
    name: 'VS Code',
    category: 'DevOps & Development Tools',
    description: 'Primary IDE: workspace settings, debugging configurations, TypeScript language server, and Git integration.',
    featured: false,
  },
];

