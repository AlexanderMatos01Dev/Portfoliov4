import React from 'react';
import { smoothScroll } from '../utils/smoothScroll';

const Hero: React.FC = () => {
    const handleButtonClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        smoothScroll(targetId);
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row items-center justify-between relative z-30">
                <div className="w-full lg:w-1/2 mb-12 lg:mb-0 text-gray-800 text-center lg:text-left">
                    <p className="text-xl mb-2">Hey There,</p>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                        I'M <span className="text-primary">ALEXANDER</span>
                        <br/>
                        A WEB DEVELOPER
                    </h1>
                    <p className="text-lg mb-6">
                        I enjoy combining my web development skills with design,
                        leveraging my artistic eye and attention to detail.
                    </p>
                    <div className="space-x-4">
                        <a href="#about" className="btn btn-blue" onClick={(e) => handleButtonClick(e, 'about')}>About Me</a>
                        <a href="#contact" className="btn btn-black" onClick={(e) => handleButtonClick(e, 'contact')}>Hire Me</a>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                    <div className="transform scale-110 sm:scale-125 lg:scale-100 xl:scale-110">
                        <TechPyramid />
                    </div>
                </div>
            </div>
        </section>
    );
};

const TechPyramid: React.FC = () => (
    <div className="flex flex-col items-center max-w-xs">
        <div className="flex justify-center mb-4 sm:mb-6">
            <TechIcon src="https://i.ibb.co/6wVPHPZ/react.png" alt="React" />
        </div>
        <div className="flex justify-center space-x-4 sm:space-x-6 mb-4 sm:mb-6">
            <TechIcon src="https://i.ibb.co/4tSDS9Z/js.png" alt="JavaScript" />
            <TechIcon src="https://i.ibb.co/9hCNy4v/pngwing-com.png" alt="Tailwind CSS" isTailwind={true} />
        </div>
        <div className="flex justify-center space-x-4 sm:space-x-6">
            <TechIcon src="https://i.ibb.co/5FvZbKv/html.png" alt="HTML5" />
            <TechIcon src="https://i.ibb.co/2KZcPvH/css.png" alt="CSS" />
            <TechIcon src="https://i.ibb.co/Smtskjq/git.png" alt="Git" />
        </div>
    </div>
);

const TechIcon: React.FC<{ src: string; alt: string; isTailwind?: boolean }> = ({ src, alt, isTailwind }) => (
    <div className="flex flex-col items-center">
        <div
            className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white rounded-full shadow-lg flex items-center justify-center transition-transform duration-200 hover:scale-125"
            onClick={() => smoothScroll('portfolio')}
        >
            <div className={`flex items-center justify-center ${isTailwind ? 'w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10' : 'w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12'}`}>
                <img src={src} alt={alt} className="w-full h-full object-contain" />
            </div>
        </div>
    </div>
);

export default Hero;