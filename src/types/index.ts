export type ProjectCategory = 
  | 'All Projects'
  | 'Full Stack Development'
  | 'Artificial Intelligence'
  | 'Machine Learning'
  | 'Data Science'
  | 'Python Development'
  | 'Enterprise Applications';

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  problem: string;
  solution: string;
  objectives?: string[];
  longDescription?: string;
  category: ProjectCategory;
  featured: boolean;
  technologies: string[];
  highlights: string[];
  architecture?: {
    overview: string;
    components: string[];
  };
  challenges?: string[];
  verifiedOutcomes?: string[];
  githubUrl?: string;
  liveUrl?: string;
  thumbnail?: string;
}

export type SkillCategory = 
  | 'Programming Languages'
  | 'Frontend Development'
  | 'Backend Development'
  | 'Databases'
  | 'Artificial Intelligence & Machine Learning'
  | 'Salesforce'
  | 'Data Analytics'
  | 'DevOps & Development Tools';

export interface SkillItem {
  name: string;
  category: SkillCategory;
  iconName?: string;
  description: string;
  relatedProjects?: string[];
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  status: 'Completed' | 'Ongoing' | 'Upcoming';
  responsibilities: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  status: string;
  highlights: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  credentialUrl?: string;
  verified: boolean;
}

export interface NavItem {
  label: string;
  path: string;
  badge?: string;
}

