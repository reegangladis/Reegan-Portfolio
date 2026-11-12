import { EducationItem, CertificationItem } from '../types';

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'mca-jain-university',
    degree: 'Master of Computer Applications (MCA)',
    institution: 'JAIN (Deemed-to-be University)',
    location: 'Bengaluru, India',
    period: '2026 – Present',
    status: 'Currently Pursuing',
    highlights: [
      'Advanced specialization in Enterprise Software Architecture, Artificial Intelligence, and Distributed Systems.',
      'Active researcher in LLM orchestration, microservices engineering, and RAG knowledge systems.',
    ],
  },
  {
    id: 'bca-st-francis',
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'St. Francis College, Bengaluru City University',
    location: 'Bengaluru, India',
    period: '2023 – 2026',
    status: 'Graduated / Completed',
    highlights: [
      'Rigorous foundation in Computer Science fundamentals: Data Structures, Object-Oriented Programming, Database Management Systems, and Web Engineering.',
      'Led academic project teams building full-stack applications and machine learning implementations.',
    ],
  },
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: 'cert-salesforce-admin',
    title: 'Salesforce Administrator Training & CRM Proficiency',
    issuer: 'ExcelR Edtech Private Limited',
    date: '2026',
    verified: true,
  },
  {
    id: 'cert-anudip-analytics',
    title: 'Data Analytics & Business Intelligence Certification (196+ Hours)',
    issuer: 'Anudip Foundation',
    date: '2026',
    verified: true,
  },
  {
    id: 'cert-data-science-intern',
    title: 'Machine Learning & Predictive Analytics Practicum',
    issuer: 'Prinston Smart Engineers',
    date: '2026',
    verified: true,
  },
];

