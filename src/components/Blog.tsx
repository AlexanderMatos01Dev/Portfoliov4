import React, { useState } from 'react';

const blogPosts = [
  { title: 'The Future of Web Development', category: 'Web Development', excerpt: 'Exploring upcoming trends and technologies in the world of web development.', date: 'May 15, 2023' },
  { title: 'Mastering React Hooks', category: 'React', excerpt: 'A comprehensive guide to using React Hooks effectively in your projects.', date: 'April 22, 2023' },
  { title: 'Optimizing Website Performance', category: 'Performance', excerpt: 'Tips and tricks to improve your website\'s speed and user experience.', date: 'March 10, 2023' },
  { title: 'Introduction to GraphQL', category: 'API', excerpt: 'Learn the basics of GraphQL and how it can improve your API development.', date: 'February 5, 2023' },
  { title: 'Responsive Design Best Practices', category: 'UI/UX', excerpt: 'Ensure your websites look great on all devices with these responsive design techniques.', date: 'January 18, 2023' },
  { title: 'Getting Started with TypeScript', category: 'JavaScript', excerpt: 'A beginner\'s guide to using TypeScript in your JavaScript projects.', date: 'December 7, 2022' },
];

const categories = ['All', ...new Set(blogPosts.map(post => post.category))];

const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Latest Blog Posts</h2>
        <div className="flex justify-center space-x-4 mb-8">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full ${activeCategory === category ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <div key={index} className="bg-gray-50 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-sm text-primary mb-2">{post.category}</p>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{post.date}</span>
                <a href="#" className="text-primary hover:underline">Read More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;