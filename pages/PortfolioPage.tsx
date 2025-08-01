
import React, { useState, useMemo } from 'react';
import PageShell from '../components/PageShell';
import { PORTFOLIO_PROJECTS, GithubIcon } from '../constants';
import { PortfolioCategory } from '../types';

const PortfolioPage: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<PortfolioCategory>(PortfolioCategory.ALL);

    const categories = Object.values(PortfolioCategory);

    const filteredProjects = useMemo(() => {
        if (activeCategory === PortfolioCategory.ALL) {
            return PORTFOLIO_PROJECTS;
        }
        return PORTFOLIO_PROJECTS.filter(project => project.category.includes(activeCategory));
    }, [activeCategory]);

    return (
        <PageShell title="My Portfolio">
            <div className="mb-8 flex flex-wrap justify-center gap-2">
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                            activeCategory === category
                                ? 'bg-accent text-gray-900'
                                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map(project => (
                    <div key={project.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg group transform hover:-translate-y-2 transition-transform duration-300">
                        <div className="relative">
                            <img src={project.imageUrl} alt={project.name} className="w-full h-56 object-cover" />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-accent">{project.name}</h3>
                            <p className="mt-2 text-gray-400 text-sm h-16">{project.description}</p>
                            <div className="mt-4 flex justify-end">
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors duration-300">
                                    <GithubIcon className="h-7 w-7" />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </PageShell>
    );
};

export default PortfolioPage;
