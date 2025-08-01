
import React from 'react';
import PageShell from '../components/PageShell';

const ContactPage: React.FC = () => {
    return (
        <PageShell title="Contact Me">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="bg-gray-800/50 p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-gray-100 mb-6">Send a Message</h2>
                    <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                            <input type="text" id="name" name="name" className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm focus:ring-accent focus:border-accent text-gray-200 py-2 px-3" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                            <input type="email" id="email" name="email" className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm focus:ring-accent focus:border-accent text-gray-200 py-2 px-3" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                            <textarea id="message" name="message" rows={4} className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm focus:ring-accent focus:border-accent text-gray-200 py-2 px-3"></textarea>
                        </div>
                        <div>
                            <button type="submit" className="w-full bg-accent text-gray-900 font-bold py-3 px-4 rounded-md hover:bg-lime-300 transition-colors duration-300">
                                Send
                            </button>
                        </div>
                    </form>
                </div>

                {/* Contact Info & Location */}
                <div className="space-y-8">
                    <div className="bg-gray-800/50 p-8 rounded-lg shadow-lg">
                         <h2 className="text-2xl font-bold text-gray-100 mb-4">Get in Touch</h2>
                        <ul className="space-y-4 text-gray-300">
                           <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                <span>New York, NY, USA</span>
                            </li>
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                <span>(555) 123-4567</span>
                            </li>
                            <li className="flex items-center">
                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                <span>shema.kevin@example.com</span>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-gray-800/50 p-8 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold text-gray-100 mb-2">Business Hours</h3>
                        <p className="text-gray-300">Monday - Friday: 9am - 5pm</p>
                        <p className="text-gray-300">Saturday - Sunday: Closed</p>
                    </div>
                </div>
            </div>
        </PageShell>
    );
};

export default ContactPage;
