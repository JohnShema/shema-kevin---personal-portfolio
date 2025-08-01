
import React from 'react';
import PageShell from '../components/PageShell';
import { BLOG_POSTS } from '../constants';

const BlogPage: React.FC = () => {
    return (
        <PageShell title="Latest Thoughts">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {BLOG_POSTS.map(post => (
                    <div key={post.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg flex flex-col transform hover:-translate-y-2 transition-transform duration-300">
                        <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
                        <div className="p-6 flex flex-col flex-grow">
                            <p className="text-sm text-gray-400 mb-1">{post.date}</p>
                            <h3 className="text-xl font-bold text-gray-100 mb-2 flex-grow">{post.title}</h3>
                            <p className="text-gray-300 text-sm mb-4">{post.excerpt}</p>
                            <a href="#" className="mt-auto text-center bg-accent/20 text-accent font-semibold py-2 px-4 rounded-md hover:bg-accent/40 transition-colors duration-300">
                                Read More
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </PageShell>
    );
};

export default BlogPage;
