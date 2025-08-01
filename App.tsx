import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import BottomNav from './components/BottomNav';
import TopNav from './components/TopNav';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import ToolsPage from './pages/ToolsPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';

const App: React.FC = () => {
    return (
        <HashRouter>
            <div className="min-h-screen bg-gray-900 text-gray-200 font-sans">
                <TopNav />
                <main className="pb-24 md:pb-8">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/services" element={<ServicesPage />} />
                        <Route path="/portfolio" element={<PortfolioPage />} />
                        <Route path="/tools" element={<ToolsPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/blog" element={<BlogPage />} />
                    </Routes>
                </main>
                <BottomNav />
            </div>
        </HashRouter>
    );
};

export default App;
