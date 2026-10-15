export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  tags: string[];
  overview: string;
  myRole: string;
  contributions: string[];
  techStack: {
    core: string[];
    stateAndData: string[];
    integrations: string[];
  };
  conceptualType: 'expense' | 'employee' | 'dating' | 'social' | 'transport';
  accentColor: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  badge?: string;
  subProjects?: {
    name: string;
    description?: string;
    points: string[];
  }[];
  bullets?: string[];
  techTags: string[];
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: string[];
  icon: string;
}

export interface EngineeringPillar {
  id: string;
  title: string;
  description: string;
  approach: string[];
  badge: string;
  icon: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  status: string;
  highlights?: string[];
}
