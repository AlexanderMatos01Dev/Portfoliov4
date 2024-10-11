import React from 'react';

const About: React.FC = () => {
  return (
      <section id="about" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt="Alexander Matos"
                  className="rounded-lg shadow-lg"
                  style={{ width: '80%', height: 'auto' }} // Reduce the size by 20%
              />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h3 className="text-2xl font-semibold mb-2" style={{ color: 'rgb(82, 185, 217)' }}>Introduction</h3>
              <p className="text-lg mb-4">
                Hi, I'm Alexander Matos, a passionate web developer with a keen eye for design. I specialize in creating beautiful, functional, and user-friendly websites that help businesses and individuals achieve their online goals.
              </p>
              <hr className="my-4"/>
              <h3 className="text-2xl font-semibold mb-2" style={{ color: 'rgb(82, 185, 217)' }}>Experience</h3>
              <p className="text-lg mb-4">
                With years of experience in both front-end and back-end development, I bring a holistic approach to every project. My expertise includes HTML, CSS, JavaScript, React, and various other modern web technologies.
              </p>
              <hr className="my-4"/>
              <h3 className="text-2xl font-semibold mb-2" style={{ color: 'rgb(82, 185, 217)' }}>Hobbies</h3>
              <p className="text-lg">
                When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, or enjoying the great outdoors. I'm always excited to take on new challenges and collaborate on innovative web solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
  );
};

export default About;