import { Project } from '../types';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'vertexerp-ai',
    slug: 'vertexerp-ai',
    title: 'VertexERP AI',
    subtitle: 'Enterprise AI-Powered ERP Platform',
    category: 'Enterprise Applications',
    featured: true,
    description:
      'A scalable enterprise ERP platform integrating AI Copilot assistance, modular workflows, and asynchronous background tasks for modern business operations.',
    problem:
      'Legacy enterprise ERP software is notoriously monolithic, difficult to navigate, lacks intelligent automation, and presents high friction for operations teams requiring cross-departmental data synthesis.',
    objectives: [
      'Design a decoupled modular ERP core covering inventory, procurement, human capital, and ledgers.',
      'Achieve sub-second REST API response times for complex multi-table operational queries.',
      'Integrate an AI-powered conversational copilot for natural language operational queries and document retrieval.',
      'Enforce strict role-based access control (RBAC) and OAuth2/JWT security boundaries.',
    ],
    solution:
      'Engineered an enterprise-grade ERP architecture utilizing FastAPI and React with an AI copilot powered by LangChain and RAG, automating procurement, inventory, and analytics queries with sub-second response times.',
    technologies: [
      'React',
      'TypeScript',
      'FastAPI',
      'Python',
      'PostgreSQL',
      'SQLAlchemy',
      'Redis',
      'LangChain',
      'Docker',
    ],
    highlights: [
      'Architected modular ERP domains covering inventory, procurement, human capital, and financial ledgers.',
      'Designed high-performance RESTful APIs in FastAPI with Pydantic schema validation and async SQLAlchemy queries.',
      'Implemented granular Role-Based Access Control (RBAC) and OAuth2/JWT token lifecycle management.',
      'Integrated an intelligent RAG Copilot utilizing vector embeddings and Redis caching for contextual enterprise query resolution.',
      'Containerized all microservices with Docker Compose for consistent staging and production deployment.',
    ],
    architecture: {
      overview: 'Decoupled Client-Server Micro-architecture with Asynchronous Worker Pools and Vector Storage',
      components: [
        'React 18 + TypeScript Client with modular domain dashboards',
        'FastAPI API Gateway and Core Business Engine with asyncpg',
        'PostgreSQL 16 relational database with SQLAlchemy 2.0 ORM',
        'Redis 7 in-memory cache for session tokens and high-throughput read acceleration',
        'LangChain LLM orchestration pipeline for natural language operational queries',
      ],
    },
    challenges: [
      'Handling complex SQL joins across financial ledgers without degrading API response latency.',
      'Ensuring strict role-based data boundary segregation within AI retrieval prompts.',
      'Managing distributed cache invalidation across interdependent operational modules.',
    ],
    verifiedOutcomes: [
      'Reduced multi-step operational reporting queries from minutes to instantaneous RAG synthesized summaries.',
      'Ensured 100% type-safety between FastAPI OpenAPI schemas and TypeScript frontend interfaces.',
      'Decoupled domain modules enabling independent feature evolution without system regression.',
    ],
    githubUrl: 'https://github.com/reegangladis/VertexERP-AI',
    liveUrl: '',
  },
  {
    id: 'excelr-track360',
    slug: 'excelr-track360',
    title: 'ExcelR Track360',
    subtitle: 'Learner Progress & Operations Tracking Platform',
    category: 'Full Stack Development',
    featured: true,
    description:
      'A comprehensive edtech operations tracking system designed for student progress tracking, automated assignment grading workflows, and real-time SLA monitoring.',
    problem:
      'Managing thousands of active learners across varying course schedules led to operational bottlenecks in assignment evaluation, mentor allocation, and certificate clearance.',
    objectives: [
      'Unify learner lifecycle states (enrollment, project submission, evaluation, certification) into a single operational interface.',
      'Automate assignment distribution to mentors based on capacity and expertise.',
      'Provide real-time visual alerts for SLA breaches in assignment evaluation queues.',
      'Maintain an immutable audit trail for certificate approval workflows.',
    ],
    solution:
      'Developed Track360, a centralized monitoring hub that unifies learner lifecycles, automates evaluator assignment, and flags SLA breaches on real-time administrative dashboards.',
    technologies: [
      'React',
      'TypeScript',
      'FastAPI',
      'Python',
      'PostgreSQL',
      'SQLAlchemy',
      'Alembic',
      'Tailwind CSS',
    ],
    highlights: [
      'Built multi-stage learner tracking dashboards with real-time assignment submission and grading status.',
      'Automated reviewer allocation algorithm distributing student project submissions based on mentor availability and expertise.',
      'Configured multi-tier certificate verification and approval workflows with digital audit trails.',
      'Established automated SLA tracking with visual warning flags for pending evaluations exceeding defined response windows.',
      'Delivered performant reporting views utilizing optimized database indexing and Alembic migration scripts.',
    ],
    architecture: {
      overview: 'Event-driven Learner Lifecycle Pipeline with Administrative Governance',
      components: [
        'Interactive React 18 frontend with custom analytics widgets and status indicators',
        'FastAPI backend service handling evaluation scheduling and authentication',
        'PostgreSQL database with normalized relational schemas for learners, courses, and certifications',
        'Alembic migration pipeline maintaining zero-downtime schema evolution',
      ],
    },
    challenges: [
      'Eliminating race conditions when multiple evaluators claim student assignments concurrently.',
      'Constructing responsive visual metrics dashboards capable of rendering high-density operational tables.',
    ],
    verifiedOutcomes: [
      'Eliminated backlog opacity by introducing automated visual status flags for pending reviews.',
      'Accelerated certificate clearance cycles with digital multi-role sign-off pipelines.',
      'Established reliable database schema migrations across development and staging environments.',
    ],
    githubUrl: 'https://github.com/reegangladis/ExcelR-Track360',
    liveUrl: '',
  },
  {
    id: 'learnova-ai',
    slug: 'learnova-ai',
    title: 'Learnova AI',
    subtitle: 'Enterprise AI-Powered Learning Management System',
    category: 'Artificial Intelligence',
    featured: true,
    description:
      'An enterprise, production-grade LMS engineered to merge traditional course management with real-time AI tutoring, RAG knowledge retrieval, and predictive ML student analytics.',
    problem:
      'Traditional LMS solutions deliver static content with generic one-size-fits-all curricula, failing to intervene before struggling students drop out or churn.',
    objectives: [
      'Architect a 3-tier decoupled microservice infrastructure separating LMS Core, AI Tutor, and ML Analytics.',
      'Implement course-aware contextual RAG to provide 24/7 intelligent student tutoring and dynamic quiz synthesis.',
      'Train predictive machine learning models to detect student churn risk based on activity patterns.',
      'Ensure high observability with structured JSON logging and real-time service health endpoints.',
    ],
    solution:
      'Engineered a 3-tier decoupled microservice LMS (Core Backend on :8000, AI Tutor RAG Service on :8001, and ML Student Analytics Service on :8002) that personalizes learning paths and predicts student churn.',
    technologies: [
      'FastAPI',
      'Python',
      'React',
      'TypeScript',
      'PostgreSQL',
      'Redis',
      'Scikit-learn',
      'Pandas',
      'Docker',
    ],
    highlights: [
      'Decoupled microservice architecture with independent FastAPI services for Core LMS (:8000), AI Tutor (:8001), and ML Analytics (:8002).',
      'Context-aware AI Knowledge Assistant implementing document chunking, vector embeddings, and RAG retrieval for course-specific questions.',
      'Machine Learning student performance prediction models using Scikit-learn to identify churn risk and recommend adaptive curricula.',
      'Strict TypeScript React 18 client featuring TanStack Query, Recharts data visualization, and real-time microservice health diagnostics.',
      'Containerized local development environment utilizing Docker Compose for PostgreSQL 16 and Redis 7.',
    ],
    architecture: {
      overview: 'Multi-service Decoupled Microservice Topology with Vector Search & ML Predictor',
      components: [
        'Web Client: React 18, Strict TypeScript, Tailwind CSS, TanStack Query, Recharts',
        'Backend LMS Core (:8000): Async FastAPI, SQLAlchemy 2.0 Async Base, asyncpg, Redis cache',
        'AI Microservice (:8001): LLM provider factory, embeddings pipeline, vector similarity search, automated quiz synthesis',
        'ML Microservice (:8002): Scikit-learn pipelines, feature engineering transformers, model registry, churn scoring',
        'Data Tier: PostgreSQL 16 with persistent volume, Redis 7 in-memory cache and session store',
      ],
    },
    challenges: [
      'Coordinating atomic transactions between the primary LMS database and independent AI vector indices.',
      'Achieving low latency for real-time AI tutor completions while running local embedding generations.',
    ],
    verifiedOutcomes: [
      'Successfully verified microservice topology directly against local implementation repository.',
      'Achieved modular microservice decoupling allowing AI and ML workloads to scale independently of Core LMS traffic.',
      'Integrated real-time system diagnostics dashboard monitoring database, cache, and service uptimes.',
    ],
    githubUrl: 'https://github.com/reegangladis/Learnova-AI',
    liveUrl: '',
  },
  {
    id: 'leo-ai',
    slug: 'leo-ai',
    title: 'Leo AI',
    subtitle: 'Intelligent Desktop AI Assistant',
    category: 'Python Development',
    featured: true,
    description:
      'A private, voice-enabled desktop AI assistant powered by local LLMs and offline speech recognition for system automation and workflow acceleration.',
    problem:
      'Cloud-based voice assistants often introduce privacy vulnerabilities, require active internet connections, and lack integration with local developer operating systems.',
    objectives: [
      'Deliver a 100% offline, local-first conversational voice assistant with complete privacy.',
      'Integrate OpenAI Whisper for offline speech transcription without external network requests.',
      'Run quantized local language models via Ollama for code assistance, conversation, and system tasks.',
      'Provide a modern dark desktop GUI with responsive audio waveforms using CustomTkinter.',
    ],
    solution:
      'Built a standalone desktop application in Python and CustomTkinter that runs local LLMs via Ollama and transcribes voice via Whisper with complete data privacy.',
    technologies: [
      'Python',
      'CustomTkinter',
      'Ollama',
      'Whisper',
      'SQLite',
      'Text-to-Speech',
    ],
    highlights: [
      'Private offline voice interaction powered by OpenAI Whisper speech-to-text models.',
      'Conversational intelligence orchestrated via local Ollama inference without cloud telemetry.',
      'Desktop automation services executing file organization, system queries, and application launches.',
      'Modern dark-themed UI built with CustomTkinter and responsive audio waveform visualizers.',
      'Lightweight SQLite conversation history and context management for multi-turn dialogues.',
    ],
    architecture: {
      overview: 'Modular Desktop Service Bus with Asynchronous Audio and Local LLM Threading',
      components: [
        'CustomTkinter Desktop GUI with event loop threading',
        'Whisper Audio Processing Pipeline for acoustic signal transcription',
        'Ollama Client Interface communicating with quantized local models (Llama 3 / Mistral)',
        'Local SQLite storage for conversation persistence and quick retrieval',
      ],
    },
    challenges: [
      'Preventing UI freezing during compute-intensive Whisper transcription on CPU threads.',
      'Optimizing streaming audio buffer capture to minimize latency between speaking and generation.',
    ],
    verifiedOutcomes: [
      'Operates completely offline with zero data transmission to external cloud services.',
      'Successfully decoupled UI rendering from audio and LLM background thread pools.',
    ],
    githubUrl: 'https://github.com/reegangladis/Leo-AI',
    liveUrl: '',
  },
  {
    id: 'ai-healthcare-diagnosis',
    slug: 'ai-healthcare-diagnosis',
    title: 'AI Healthcare Diagnosis System',
    subtitle: 'CNN-Based Medical Image Classifier',
    category: 'Machine Learning',
    featured: true,
    description:
      'An intelligent diagnostic support web application utilizing deep Convolutional Neural Networks to classify medical imaging anomalies with high precision.',
    problem:
      'Preliminary medical image analysis in high-volume clinics suffers from diagnostic delays and lack of rapid triage tools to assist medical practitioners.',
    objectives: [
      'Develop a deep learning CNN model to classify imaging scan patterns.',
      'Build a robust OpenCV image preprocessing pipeline for noise reduction and histogram equalization.',
      'Serve model predictions through an accessible Flask web application with confidence distributions.',
    ],
    solution:
      'Trained a custom CNN computer vision model with TensorFlow and OpenCV integrated into a responsive Flask web application for instantaneous preliminary image assessment.',
    technologies: [
      'Python',
      'TensorFlow',
      'OpenCV',
      'Flask',
      'NumPy',
      'HTML5/CSS3',
    ],
    highlights: [
      'Engineered deep Convolutional Neural Network architectures for medical image pattern classification.',
      'Implemented robust image preprocessing pipelines with OpenCV (normalization, histogram equalization, augmentation).',
      'Developed a responsive Flask web interface allowing medical professionals to upload scans and view predictive confidence scores.',
      'Integrated model interpretability heatmaps to verify focus areas within classified imaging regions.',
    ],
    architecture: {
      overview: 'Deep Learning Inference Pipeline with Computer Vision Preprocessing',
      components: [
        'TensorFlow/Keras Convolutional Neural Network model',
        'OpenCV image processing and normalization filters',
        'Flask RESTful micro-backend serving inference endpoints',
        'Web diagnostic dashboard with confidence distribution charts',
      ],
    },
    challenges: [
      'Mitigating class imbalance across medical datasets through synthetic augmentation techniques.',
      'Ensuring consistent preprocessing input dimensions without losing critical imaging artifacts.',
    ],
    verifiedOutcomes: [
      'Engineered end-to-end inference pipeline from raw image upload to confidence score visualization.',
      'Demonstrated reliable image normalization preserving diagnostic region boundaries.',
    ],
    githubUrl: 'https://github.com/reegangladis/AI-Healthcare-Diagnosis',
    liveUrl: '',
  },
];
