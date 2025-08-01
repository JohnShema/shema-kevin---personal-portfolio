import React from 'react';
import TypingEffect from '../components/TypingEffect';
import { SOCIAL_LINKS } from '../constants';

const HomePage: React.FC = () => {
    const titles = ["A Data Analyst", "A Project Manager", "An Automation Specialist", "Entrepreneur"];

    return (
        <div className="relative min-h-screen flex items-center justify-center text-center p-4">
            <div
                className="absolute inset-0 bg-cover bg-center filter grayscale brightness-50"
                style={{ backgroundImage: "url('https://picsum.photos/seed/hero/1920/1080')" }}
            ></div>
            <div className="absolute inset-0 bg-black/60"></div>
            
            <div className="relative z-10 animate-fade-in-up">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-100 leading-tight">
                    Hey—I'm Shema Kevin.
                    <br />
                    A New York based
                </h1>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mt-2 h-20">
                    <TypingEffect titles={titles} />
                </h2>
                <p className="mt-6 max-w-2xl mx-auto text-gray-300 text-lg sm:text-xl">
                    I'm a multifaceted professional with a passion for leveraging data, managing complex projects, and building efficient automated systems to drive business growth and innovation.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
                    <a href="#/contact" className="bg-accent text-gray-900 font-bold py-3 px-8 rounded-full text-lg hover:bg-lime-300 transition-colors duration-300 transform hover:scale-105">
                        Available for work
                    </a>
                    <div className="flex space-x-6">
                        {SOCIAL_LINKS.map(({ name, url, icon: Icon }) => (
                             <a key={name} href={url} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-lime-300 transition-colors duration-300 transform hover:scale-110">
                                <Icon className="h-8 w-8" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
