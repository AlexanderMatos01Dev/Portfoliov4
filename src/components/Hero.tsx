import React from 'react';

const Hero: React.FC = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center relative z-30">
                <div className="md:w-1/2 mb-8 md:mb-0 text-gray-800 text-center md:text-left">
                    <p className="text-xl mb-2">Hey There,</p>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                        I'M <span className="text-primary">ALEXANDER</span>
                        <br />
                        A WEB DEVELOPER
                    </h1>
                    <p className="text-lg mb-6">
                        I enjoy combining my web development skills with design,
                        leveraging my artistic eye and attention to detail.
                    </p>
                    <div className="space-x-4">
                        <a href="#about" className="btn btn-blue">About Me</a>
                        <a href="#contact" className="btn btn-black">Hire Me</a>
                    </div>
                </div>
                <div className="md:w-1/2 flex justify-center md:justify-end">
                    <TechPyramid />
                </div>
            </div>
        </section>
    );
};

const TechPyramid: React.FC = () => (
    <div className="flex flex-col items-center max-w-xs">
        <div className="flex justify-center mb-4">
            <TechIcon src="/assets/react-2.svg" alt="React" />
        </div>
        <div className="flex justify-center space-x-4 mb-4">
            <TechIcon src="/assets/javascript.svg" alt="JavaScript" />
            <TechIcon src="/assets/tailwindcss.svg" alt="Tailwind CSS" />
        </div>
        <div className="flex justify-center space-x-4">
            <TechIcon src="/assets/html5.svg" alt="HTML5" />
            <TechIcon src="/assets/css.svg" alt="CSS" />
            <TechIcon src="/assets/git.svg" alt="Git" />
        </div>
    </div>
);

const TechIcon: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
    <div className="flex flex-col items-center">
        <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center">
            <div className="w-12 h-12 flex items-center justify-center">
                <img src={src} alt={alt} className="w-full h-full object-contain" />
            </div>
        </div>
    </div>
);

export default Hero;