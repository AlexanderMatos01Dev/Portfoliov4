import React, { useState } from 'react';

const projects = [
  { title: 'E-commerce Platform', category: 'E-commerce', image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  { title: 'Task Management App', category: 'Productivity', image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  { title: 'Portfolio Website', category: 'Web Design', image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  { title: 'Social Media Dashboard', category: 'Web App', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  { title: 'Mobile Banking App', category: 'Mobile App', image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  { title: 'Online Learning Platform', category: 'E-learning', image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
];

const categories = ['All', ...new Set(projects.map(project => project.category))];

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">My Portfolio</h2>
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
          {filteredProjects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.category}</p>
                <a href="#" className="mt-4 inline-block text-primary hover:underline">View Project</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;