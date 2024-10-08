import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'

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
                <div className="absolute inset-0 bg-white opacity-90 z-10"></div>

                {/* Content */}
                <div className="relative z-20">
                    <Navbar />
                    <Hero />
                    <About />
                    <Portfolio />
                    <Blog />
                    <Contact />
                </div>
            </div>

            {/* Footer outside of the overlay */}
            <Footer />
        </div>
    )
}

export default App