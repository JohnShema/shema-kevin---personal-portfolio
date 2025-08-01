
import React from 'react';
import PageShell from '../components/PageShell';
import { SKILLS } from '../constants';
import type { Skill } from '../types';

const SkillCard: React.FC<{ title: string; skills: Skill[] }> = ({ title, skills }) => (
    <div className="bg-gray-800/50 p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-accent mb-4 border-b-2 border-accent/30 pb-2">{title}</h3>
        <ul className="space-y-3">
            {skills.map((skill, index) => (
                <li key={index} className="flex items-center text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span>{skill.name}</span>
                </li>
            ))}
        </ul>
    </div>
);

const ToolsPage: React.FC = () => {
    return (
        <PageShell title="Skills & Tools">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {SKILLS.map(category => (
                    <SkillCard key={category.title} title={category.title} skills={category.skills} />
                ))}
            </div>
        </PageShell>
    );
};

export default ToolsPage;
