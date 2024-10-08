import React from 'react';
import { Code, Palette, GitBranch } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center relative z-30">
                <div className="md:w-1/2 mb-8 md:mb-0 text-gray-800">
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
                <div className="md:w-1/2 flex justify-center">
                    <div className="grid grid-cols-3 gap-4">
                        <TechIcon Icon={Code} label="HTML/CSS" />
                        <TechIcon Icon={Palette} label="Tailwind" />
                        <TechIcon Icon={GitBranch} label="Git" />
                    </div>
                </div>
            </div>
        </section>
    );
};

const TechIcon: React.FC<{ Icon: React.ElementType; label: string }> = ({ Icon, label }) => (
    <div className="flex flex-col items-center">
        <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center mb-2">
            <Icon className="w-8 h-8 text-primary" />
        </div>
        <span className="text-sm font-medium text-gray-800">{label}</span>
    </div>
);

export default Hero;