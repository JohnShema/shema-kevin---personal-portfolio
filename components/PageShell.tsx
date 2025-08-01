import React from 'react';

interface PageShellProps {
    title: string;
    children: React.ReactNode;
}

const PageShell: React.FC<PageShellProps> = ({ title, children }) => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-8 md:pt-24 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-100 mb-8 border-l-4 border-accent pl-4">
                {title}
            </h1>
            <div>{children}</div>
        </div>
    );
};

export default PageShell;
