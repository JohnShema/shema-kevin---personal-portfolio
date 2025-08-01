
import React from 'react';
import PageShell from '../components/PageShell';
import { SERVICES } from '../constants';

const ServicesPage: React.FC = () => {
    return (
        <PageShell title="What I Do">
            <div className="space-y-12">
                {SERVICES.map((service, index) => (
                    <div key={index} className="bg-gray-800/50 p-6 rounded-lg shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                        <h2 className="text-2xl font-bold text-accent mb-3">{service.title}</h2>
                        <p className="text-gray-300 leading-relaxed">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
        </PageShell>
    );
};

export default ServicesPage;
