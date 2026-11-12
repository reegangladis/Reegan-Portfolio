import { ExperienceItem } from '../types';

export const EXPERIENCES_DATA: ExperienceItem[] = [
  {
    id: 'excelr-salesforce-admin',
    role: 'Salesforce Administrator',
    company: 'ExcelR Edtech Private Limited',
    location: 'Bengaluru, India',
    period: 'August 2026 – Present (Ongoing)',
    status: 'Ongoing',
    responsibilities: [
      'Administered Salesforce CRM operations, optimizing lead distribution pipelines, user management, and organizational data integrity.',
      'Designed custom reports and executive dashboards providing real-time visibility into sales funnels, conversion ratios, and learner engagement.',
      'Automated administrative business logic utilizing Salesforce Flow, reducing manual CRM entry friction and turnaround time.',
      'Configured custom objects, validation rules, page layouts, profiles, and permission sets aligned with organizational security models.',
      'Executed bulk data migrations, deduplication, and record updates utilizing Data Loader and Data Import Wizard with zero downtime.',
    ],
    technologies: [
      'Salesforce CRM',
      'Salesforce Flow',
      'Reports & Dashboards',
      'Data Loader',
      'Object Manager',
      'Lead Management',
    ],
  },
  {
    id: 'prinston-data-science',
    role: 'Data Science Intern',
    company: 'Prinston Smart Engineers',
    location: 'Bengaluru, India',
    period: 'December 2025 – January 2026',
    status: 'Completed',
    responsibilities: [
      'Developed and evaluated predictive machine learning models in Python utilizing Scikit-learn, NumPy, and Pandas.',
      'Built automated data preprocessing pipelines for missing value imputation, outlier detection, and categorical feature encoding.',
      'Performed exploratory data analysis (EDA) and formulated predictive analytical insights presented to engineering leadership.',
      'Optimized hyperparameters using cross-validation techniques to improve model accuracy and prevent overfitting.',
    ],
    technologies: [
      'Python',
      'Scikit-learn',
      'Pandas',
      'NumPy',
      'Data Preprocessing',
      'Predictive Analytics',
    ],
  },
  {
    id: 'anudip-data-analytics',
    role: 'Data Analytics Trainee',
    company: 'Anudip Foundation',
    location: 'Bengaluru, India',
    period: 'November 2025 – February 2026',
    status: 'Completed',
    responsibilities: [
      'Completed an intensive 196+ hours industry-aligned professional training program focused on data analytics and business intelligence.',
      'Designed interactive Power BI business dashboards with dynamic KPI cards, drill-throughs, and DAX calculated columns.',
      'Executed advanced SQL queries including multi-table joins, window functions, and aggregations to extract structured insights.',
      'Engineered automated data visualization reports and cleaning workflows in Microsoft Excel using pivot tables and advanced formulas.',
    ],
    technologies: [
      'Power BI',
      'SQL',
      'Microsoft Excel (Advanced)',
      'Python',
      'Data Visualization',
    ],
  },
];

