import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { smoothScroll } from '../utils/smoothScroll';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    smoothScroll(targetId);
    setIsOpen(false);
  };

  return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-80 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="font-script text-3xl sm:text-4xl">Alexander Matos</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {['Home', 'About', 'Portfolio', 'Blog'].map((item) => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="text-gray-800 hover:text-primary px-3 py-2 rounded-md text-lg font-medium transition duration-300"
                        onClick={(e) => handleNavClick(e, item.toLowerCase())}
                    >
                      {item}
                    </a>
                ))}
              </div>
            </div>
            <div className="hidden md:block">
              <a
                  href="#contact"
                  className="btn btn-black text-lg"
                  onClick={(e) => handleNavClick(e, 'contact')}
              >
                Contact
              </a>
            </div>
            <div className="md:hidden">
              <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-primary focus:outline-none"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {['Home', 'About', 'Portfolio', 'Blog'].map((item) => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="text-gray-800 hover:text-primary block px-3 py-2 rounded-md text-lg font-medium"
                        onClick={(e) => handleNavClick(e, item.toLowerCase())}
                    >
                      {item}
                    </a>
                ))}
                <a
                    href="#contact"
                    className="btn btn-black block text-center mt-4 text-lg"
                    onClick={(e) => handleNavClick(e, 'contact')}
                >
                  Contact
                </a>
              </div>
            </div>
        )}
      </nav>
  );
};

export default Navbar;