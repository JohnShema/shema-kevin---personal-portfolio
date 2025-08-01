import React from 'react';
import { NavLink } from 'react-router-dom';
import { NAV_LINKS } from '../constants';

const BottomNav: React.FC = () => {
    return (
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-gray-800/80 backdrop-blur-sm border-t border-gray-700 shadow-lg z-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-around h-16">
                    {NAV_LINKS.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            title={item.label}
                            aria-label={item.label}
                            className={({ isActive }) =>
                                `flex flex-col items-center justify-center w-full text-xs transition-colors duration-200 ${
                                    isActive ? 'text-accent' : 'text-gray-400 hover:text-accent'
                                }`
                            }
                        >
                            {item.icon}
                        </NavLink>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default BottomNav;
