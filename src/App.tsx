import React from 'react'
import { Sparkles } from 'lucide-react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'

interface SectionProps {
    title: string;
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => (
    <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-1"> {/* Reduce the margin-bottom value */}
                <div className="flex items-center space-x-2 mb-2">
                    <h2 className="text-sky-500 text-3xl font-bold">{title}</h2>
                    <Sparkles className="w-6 h-6 text-sky-500" />
                </div>
                <div className="w-full h-1 bg-gradient-to-r from-sky-500 to-transparent"></div>
            </div>
            {children}
        </div>
    </section>
)

function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="flex-grow relative">
                {/* Background image */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: "url('https://i.ibb.co/7pVZmhH/Back-Ground.webp')",
                        backgroundRepeat: 'no-repeat',
                        backgroundAttachment: 'fixed',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                ></div>

                {/* White overlay */}
                <div className="absolute inset-0 bg-white opacity-80 z-10"></div>

                {/* Content */}
                <div className="relative z-20">
                    <Navbar />
                    <Hero />
                    <Section title="About">
                        <About />
                    </Section>
                    <Section title="Portfolio">
                        <Portfolio />
                    </Section>
                    <Section title="Blog">
                        <Blog />
                    </Section>
                    <Section title="Contact">
                        <Contact />
                    </Section>
                </div>
            </div>

            {/* Footer outside of the overlay */}
            <Footer />
        </div>
    )
}

export default App