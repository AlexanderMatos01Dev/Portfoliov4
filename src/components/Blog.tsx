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

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = activeCategory === 'All'
      ? blogPosts
      : blogPosts.filter(post => post.category === activeCategory);

  return (
      <section id="blog" className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">Latest Blog Posts</h2>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8">
            {categories.map((category, index) => (
                <button
                    key={index}
                    className={`px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base rounded-full transition-colors duration-200 ${
                        activeCategory === category
                            ? 'bg-primary text-white'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                    onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredPosts.map((post, index) => (
                <div key={index} className="bg-gray-50 rounded-lg shadow-md p-4 sm:p-6 transition-transform duration-200 hover:scale-105">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-xs sm:text-sm text-primary mb-2">{post.category}</p>
                  <p className="text-sm sm:text-base text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs sm:text-sm text-gray-500">{post.date}</span>
                    <a href="#" className="text-sm sm:text-base text-primary hover:underline">Read More</a>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
}