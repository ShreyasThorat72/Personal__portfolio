export type SkillLevel = 'Core Skill' | 'Project Experience' | 'Working Knowledge' | 'Learning';

export type SkillCategory = 
  | 'Programming'
  | 'Frontend'
  | 'Backend'
  | 'Databases'
  | 'AI / Machine Learning'
  | 'Tools'
  | 'Deployment'
  | 'IoT / Hardware';

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  level: SkillLevel;
  icon?: string;
  description: string;
  featured?: boolean;
}

export type ProjectCategory = 'All' | 'AI / ML' | 'Full Stack' | 'IoT & Embedded' | 'Systems';

export interface ProjectArchitectureStep {
  name: string;
  role: string;
  tech: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;
  problem: string;
  solution: string;
  architecture: {
    overview: string;
    flow: ProjectArchitectureStep[];
  };
  technologies: string[];
  features: string[];
  challenges: string[];
  outcome: string;
  category: ProjectCategory;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  accentColor: string;
  iconName: string;
  status: 'Completed' | 'In Active Development' | 'Prototype';
  isPlaceholder?: boolean;
}

export interface EducationItem {
  id: string;
  degree: string;
  institute: string;
  location: string;
  specialization: string;
  currentSemester: string;
  period: string;
  summary: string;
  keyCoursework: string[];
  highlights: string[];
  status: 'In Progress' | 'Completed';
}

export type ExperienceCategory = 
  | 'Internships'
  | 'Job Simulations'
  | 'Technical Activities'
  | 'Leadership';

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  type: ExperienceCategory;
  period: string;
  responsibilities: string[];
  technologies: string[];
  achievements?: string[];
  certificateUrl?: string;
  isPlaceholder?: boolean;
}

export type CertificationCategory = 
  | 'AI/ML'
  | 'Programming'
  | 'Web Development'
  | 'Cloud'
  | 'Data'
  | 'Other';

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  credentialUrl?: string;
  skillsGained: string[];
  category: CertificationCategory;
  status: 'Verified' | 'Completed' | 'Pending Verification';
  isPlaceholder?: boolean;
}

export type AchievementCategory = 
  | 'Competitions & Hackathons'
  | 'Academic Milestones'
  | 'Project Showcases'
  | 'Technical Recognitions';

export interface AchievementItem {
  id: string;
  title: string;
  event: string;
  date: string;
  category: AchievementCategory;
  description: string;
  impact?: string;
  link?: string;
  isPlaceholder?: boolean;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
  portfolio: string;
}

export interface ProfileData {
  name: string;
  title: string;
  status: string;
  institute: string;
  specialization: string;
  currentSemester: string;
  bio: string;
  roles: string[];
  careerGoal: string;
  targetRole: string;
  socials: SocialLinks;
  metrics: {
    label: string;
    value: string;
    sublabel: string;
  }[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
  timestamp: string;
  id?: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  url: string;
  isPinned: boolean;
  updatedAt: string;
  topics: string[];
}

export interface GitHubStats {
  publicRepos: number;
  followers: number;
  following: number;
  totalContributions: number;
  languages: {
    name: string;
    percentage: number;
    color: string;
  }[];
}
