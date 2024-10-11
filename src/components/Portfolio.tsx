import React, { useState } from 'react';

const projects = [
  {
    title: 'E-commerce Platform',
    category: 'E-commerce',
    excerpt: 'A fully responsive online store with advanced features and seamless user experience.',
    date: 'June 15, 2023',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    title: 'Task Management App',
    category: 'Productivity',
    excerpt: 'An intuitive task management solution for teams to collaborate and boost productivity.',
    date: 'May 22, 2023',
    image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    title: 'Portfolio Website',
    category: 'Web Design',
    excerpt: 'A sleek and modern portfolio website showcasing creative works and professional achievements.',
    date: 'April 10, 2023',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    title: 'Social Media Dashboard',
    category: 'Web App',
    excerpt: 'A comprehensive dashboard for managing and analyzing social media accounts and campaigns.',
    date: 'March 5, 2023',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    title: 'Mobile Banking App',
    category: 'Mobile App',
    excerpt: 'A secure and user-friendly mobile banking application with advanced financial features.',
    date: 'February 18, 2023',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    title: 'Online Learning Platform',
    category: 'E-learning',
    excerpt: 'An interactive online learning platform with courses, quizzes, and progress tracking.',
    date: 'January 7, 2023',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
];

const categories = ['All', ...new Set(projects.map(project => project.category))];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
      ? projects
      : projects.filter(project => project.category === activeCategory);

  return (
      <section id="portfolio" className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-gray-800">My Portfolio</h2>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8">
            {categories.map((category, index) => (
                <button
                    key={index}
                    className={`px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base rounded-full transition-colors duration-200 ${
                        activeCategory === category
                            ? 'bg-teal-500 text-white'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                    onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-200 hover:scale-105">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">{project.title}</h3>
                    <p className="text-xs sm:text-sm text-teal-600 mb-2">{project.category}</p>
                    <p className="text-sm sm:text-base text-gray-600 mb-4">{project.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm text-gray-500">{project.date}</span>
                      <a href="#" className="text-sm sm:text-base text-teal-600 hover:text-teal-700 transition-colors duration-200">View Project</a>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
}