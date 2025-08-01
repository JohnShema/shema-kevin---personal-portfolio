import React from 'react';
import { NavLink } from 'react-router-dom';
import { NAV_LINKS } from '../constants';

const TopNav: React.FC = () => {
    return (
        <header className="hidden md:block sticky top-0 bg-gray-900/80 backdrop-blur-sm border-b border-gray-700 shadow-lg z-50">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <NavLink to="/" className="text-white font-bold text-xl hover:text-accent transition-colors duration-200">
                            Shema Kevin
                        </NavLink>
                    </div>
                    <div className="flex items-center space-x-2">
                        {NAV_LINKS.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                className={({ isActive }) =>
                                    `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                                        isActive
                                            ? 'text-accent font-bold'
                                            : 'text-gray-300 hover:text-white hover:bg-gray-700'
                                    }`
                                }
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default TopNav;
