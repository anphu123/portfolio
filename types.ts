export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  github: string;
  linkedin: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface EducationItem {
  school: string;
  major: string;
  period: string;
  gpa: string;
  details: string[];
}

export interface ProjectItem {
  name: string;
  company?: string;
  period: string;
  techStack: string;
  features: string[];
  responsibilities: string[];
}

export interface ResumeData {
  name: string;
  role: string;
  summary: string;
  contact: ContactInfo;
  resumeUrl?: string;
  avatarUrl?: string;
  skills: SkillCategory[];
  experience: ExperienceItem[];
  education: EducationItem;
  projects: ProjectItem[];
}