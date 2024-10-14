import React from 'react'
import { smoothScroll } from '../utils/smoothScroll'

export default function About() {
  const handleButtonClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    if (targetId === 'cv') {
      window.open("https://drive.google.com/file/d/1g8ZLYLGKl-BgD8T2y0TEKau7woT5vnj9/view?usp=sharing", "_blank")
    } else {
      smoothScroll(targetId)
    }
  }

  return (
      <section id="about" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                  src="https://i.ibb.co/HX5SyXQ/img-2024-10-14-18-16-21-removebg.webp"
                  alt="Alexander Matos"
                  className="rounded-lg shadow-lg"
                  style={{ width: '80%', height: 'auto' }}
              />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h3 className="text-2xl font-semibold mb-2 text-primary">Introduction</h3>
              <p className="text-lg mb-4">
                Hi, I'm Alexander Matos, a passionate web developer with a keen eye for design. I specialize in creating beautiful, functional, and user-friendly websites that help businesses and individuals achieve their online goals.
              </p>
              <hr className="my-4"/>
              <h3 className="text-2xl font-semibold mb-2 text-primary">Experience</h3>
              <p className="text-lg mb-4">
                Although I have limited experience, I am deeply interested in continuing to learn and improve. I actively create projects and read articles about UI/UX and web development to enhance my skills and stay up-to-date with the latest trends and technologies in the field.
              </p>
              <hr className="my-4"/>
              <h3 className="text-2xl font-semibold mb-2 text-primary">Hobbies</h3>
              <p className="text-lg mb-6">
                When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, or enjoying the great outdoors. I'm always excited to take on new challenges and collaborate on innovative web solutions.
              </p>
              <div className="space-x-4">
                <a
                    href="#cv"
                    className="btn btn-blue inline-block px-6 py-3 rounded-full text-white bg-primary hover:bg-primary-dark transition duration-300 ease-in-out transform hover:scale-105"
                    onClick={(e) => handleButtonClick(e, 'cv')}
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}