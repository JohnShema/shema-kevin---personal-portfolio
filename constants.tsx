import React from 'react';
import type { NavLinkItem, Service, Project, SkillCategory, BlogPost, SocialLinkItem } from './types';
import { PortfolioCategory } from './types';

// SVG Icons as React Components
const HomeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>;
const ServicesIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const PortfolioIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>;
const ToolsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const ContactIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const BlogIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 12h6m-1 8h.01" /></svg>;
const GithubIcon = ({ className = "h-6 w-6" }: { className?: string }) => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>;
const InstagramIcon = ({ className = "h-6 w-6" }: { className?: string }) => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.784.297-1.457.71-2.123 1.378C1.333 2.706.92 3.38.622 4.14.323 4.905.12 5.775.06 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.26 2.148.558 2.913.297.784.71 1.457 1.378 2.123.667.666 1.34 1.078 2.123 1.378.766.298 1.636.498 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.26 2.913-.558.784-.297 1.457-.71 2.123-1.378.666-.667 1.078-1.34 1.378-2.123.298-.766.498-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.26-2.148-.558-2.913-.297-.784-.71-1.457-1.378-2.123C21.294 1.333 20.62 .92 19.857.622c-.766-.298-1.636-.498-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.012 4.85.07 1.17.055 1.805.248 2.227.415.562.217.96.477 1.382.896.419.42.679.82.896 1.382.167.422.36 1.057.413 2.227.058 1.265.07 1.646.07 4.85s-.012 3.585-.07 4.85c-.055 1.17-.248 1.805-.413 2.227-.217.562-.477.96-.896 1.382-.42.419-.82.679-1.382.896-.422.167-1.057.36-2.227.413-1.265.058-1.646.07-4.85.07s-3.585-.012-4.85-.07c-1.17-.055-1.805-.248-2.227-.413-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.82-.896-1.382-.167-.422-.36-1.057-.413-2.227-.058-1.265-.07-1.646-.07-4.85s.012-3.585.07-4.85c.055-1.17.248-1.805.413-2.227.217.562.477.96.896-1.382.42-.419.82-.679-1.382-.896.422-.167 1.057-.36 2.227-.413C8.415 2.172 8.797 2.16 12 2.16zm0 2.91c-3.14 0-5.71 2.57-5.71 5.71S8.86 16.49 12 16.49s5.71-2.57 5.71-5.71-2.57-5.71-5.71-5.71zm0 9.35c-1.998 0-3.64-1.64-3.64-3.64s1.642-3.64 3.64-3.64 3.64 1.64 3.64 3.64-1.642 3.64-3.64 3.64zm6.4-11.8c-.96 0-1.74-.78-1.74-1.74s.78-1.74 1.74-1.74c.96 0 1.74.78 1.74 1.74s-.78 1.74-1.74 1.74z"/></svg>;
const FacebookIcon = ({ className = "h-6 w-6" }: { className?: string }) => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>;
const LinkedInIcon = ({ className = "h-6 w-6" }: { className?: string }) => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>;
const SkillIconGeneric = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;

export const NAV_LINKS: NavLinkItem[] = [
    { path: '/', label: 'Home', icon: <HomeIcon /> },
    { path: '/services', label: 'Services', icon: <ServicesIcon /> },
    { path: '/portfolio', label: 'Portfolio', icon: <PortfolioIcon /> },
    { path: '/tools', label: 'Tools', icon: <ToolsIcon /> },
    { path: '/contact', label: 'Contact Me', icon: <ContactIcon /> },
    { path: '/blog', label: 'Blog', icon: <BlogIcon /> },
];

export const SOCIAL_LINKS: SocialLinkItem[] = [
    { name: 'Instagram', url: '#', icon: InstagramIcon },
    { name: 'GitHub', url: '#', icon: GithubIcon },
    { name: 'Facebook', url: '#', icon: FacebookIcon },
    { name: 'LinkedIn', url: '#', icon: LinkedInIcon },
]

export const SERVICES: Service[] = [
    {
        title: 'Project Manager',
        description: 'Delivering complex projects on time and within budget. I excel at stakeholder management, risk mitigation, and leading cross-functional teams to achieve strategic objectives. My approach is rooted in Agile and Scrum methodologies, ensuring flexibility and continuous improvement.'
    },
    {
        title: 'Data Analyst',
        description: 'Transforming raw data into actionable insights. I specialize in data visualization, statistical analysis, and building dashboards that empower businesses to make data-driven decisions. Proficient in SQL, Python, and tools like Tableau and Power BI.'
    },
    {
        title: 'Automation Specialist',
        description: 'Streamlining business processes and eliminating repetitive tasks. I design and implement automation solutions using tools like Zapier, Make (Integromat), and custom scripts, freeing up valuable time for your team to focus on high-impact work.'
    },
    {
        title: 'Entrepreneur',
        description: 'Building innovative solutions from the ground up. With a passion for problem-solving and a keen eye for market opportunities, I have experience in product development, business strategy, and scaling ventures in competitive environments.'
    },
];

export const PORTFOLIO_PROJECTS: Project[] = [
    { id: 1, name: 'Agile Dashboard', description: 'A real-time project management dashboard for tracking sprint progress.', imageUrl: 'https://picsum.photos/seed/project1/400/300', githubUrl: '#', category: [PortfolioCategory.PROJECT_MANAGEMENT] },
    { id: 2, name: 'Sales Insights Tool', description: 'An interactive data visualization tool for analyzing sales trends.', imageUrl: 'https://picsum.photos/seed/project2/400/300', githubUrl: '#', category: [PortfolioCategory.DATA_ANALYST] },
    { id: 3, name: 'Workflow Automation Bot', description: 'A custom bot to automate marketing workflows and lead generation.', imageUrl: 'https://picsum.photos/seed/project3/400/300', githubUrl: '#', category: [PortfolioCategory.AUTOMATION] },
    { id: 4, name: 'E-commerce Startup', description: 'Launched a niche e-commerce brand from concept to profitability.', imageUrl: 'https://picsum.photos/seed/project4/400/300', githubUrl: '#', category: [PortfolioCategory.ENTREPRENEUR] },
    { id: 5, name: 'Predictive Analytics Model', description: 'Developed a model to forecast customer churn with 90% accuracy.', imageUrl: 'https://picsum.photos/seed/project5/400/300', githubUrl: '#', category: [PortfolioCategory.DATA_ANALYST] },
    { id: 6, name: 'Resource Allocation System', description: 'A system for optimizing resource allocation across multiple projects.', imageUrl: 'https://picsum.photos/seed/project6/400/300', githubUrl: '#', category: [PortfolioCategory.PROJECT_MANAGEMENT, PortfolioCategory.AUTOMATION] },
];

export const SKILLS: SkillCategory[] = [
    {
        title: 'Project Manager',
        skills: [
            { name: 'Agile & Scrum' },
            { name: 'Jira & Confluence' },
            { name: 'Risk Management' },
            { name: 'Stakeholder Communication' },
            { name: 'Budgeting & Forecasting' },
        ],
    },
    {
        title: 'Data Analyst',
        skills: [
            { name: 'SQL' },
            { name: 'Python (Pandas, NumPy)' },
            { name: 'Tableau & Power BI' },
            { name: 'Statistical Analysis' },
            { name: 'ETL Processes' },
        ],
    },
    {
        title: 'Automation',
        skills: [
            { name: 'Zapier & Make' },
            { name: 'APIs & Webhooks' },
            { name: 'Python Scripting' },
            { name: 'RPA Concepts' },
            { name: 'Process Optimization' },
        ],
    },
    {
        title: 'Entrepreneur',
        skills: [
            { name: 'Business Strategy' },
            { name: 'Lean Startup' },
            { name: 'Market Research' },
            { name: 'Product Development' },
            { name: 'Fundraising' },
        ],
    },
];

export const BLOG_POSTS: BlogPost[] = [
    { id: 1, title: 'The Future of Agile in a Remote World', date: 'October 26, 2023', excerpt: 'Exploring how agile methodologies are adapting to the challenges and opportunities of remote work environments.', imageUrl: 'https://picsum.photos/seed/blog1/400/300' },
    { id: 2, title: '5 Data Visualization Mistakes to Avoid', date: 'October 15, 2023', excerpt: 'Common pitfalls in data visualization and how to create charts that are both beautiful and insightful.', imageUrl: 'https://picsum.photos/seed/blog2/400/300' },
    { id: 3, title: 'Automate Your Life: A Beginner\'s Guide', date: 'September 28, 2023', excerpt: 'A simple introduction to the power of automation for personal and professional productivity.', imageUrl: 'https://picsum.photos/seed/blog3/400/300' },
    { id: 4, title: 'Lessons Learned from My First Startup', date: 'September 05, 2023', excerpt: 'Reflections on the journey of building a business from scratch, including the highs, lows, and key takeaways.', imageUrl: 'https://picsum.photos/seed/blog4/400/300' },
];

export { GithubIcon };
