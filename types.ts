import { ReactNode, FC } from 'react';

export enum PortfolioCategory {
    ALL = 'All',
    PROJECT_MANAGEMENT = 'Project Management',
    DATA_ANALYST = 'Data Analyst',
    AUTOMATION = 'Automation',
    ENTREPRENEUR = 'Entrepreneur'
}

export interface Project {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    githubUrl: string;
    category: PortfolioCategory[];
}

export interface Service {
    title: string;
    description: string;
}

export interface Skill {
    name: string;
    icon?: ReactNode;
}

export interface SkillCategory {
    title: string;
    skills: Skill[];
}

export interface BlogPost {
    id: number;
    title: string;
    date: string;
    excerpt: string;
    imageUrl: string;
}

export interface NavLinkItem {
    path: string;
    label: string;
    icon: ReactNode;
}

export interface SocialLinkItem {
    url: string;
    icon: FC<{ className?: string }>;
    name: string;
}
