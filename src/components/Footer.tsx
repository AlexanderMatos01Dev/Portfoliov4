import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 text-center mx-auto">
              <span className="font-script text-2xl">Alexander Matos</span>
              <p className="mt-2 text-sm text-gray-400">Web Developer & Designer</p>
            </div>
            <div className="flex space-x-4">
              <a href="https://github.com/AlexanderMatos01Dev"
                 className="text-gray-400 hover:text-white transition duration-300">
                <Github className="w-6 h-6"/>
              </a>
              <a href="https://www.linkedin.com/in/alexander-matos-028028314/"
                 className="text-gray-400 hover:text-white transition duration-300">
                <Linkedin className="w-6 h-6"/>
              </a>
              <a href="https://x.com/AlexanderMaDev" className="text-gray-400 hover:text-white transition duration-300">
                <Twitter className="w-6 h-6"/>
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Alexander Matos. All rights reserved.
          </div>
        </div>
      </footer>
  );
};

export default Footer;