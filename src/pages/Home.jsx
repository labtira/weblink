import { useState } from 'react'
import { Link } from 'react-router-dom'
import gif from '../assets/img/hero.png'
import projectsData from '../data/projects.json'
import Footer from '../components/Footer'
import LogoNavbar from '../components/LogoNavbar'

function Home() {
  // Get first 4 projects
  const featuredProjects = projectsData.projects.slice(0, 4)

  return (
    <div className=" text-white">

      <div className="max-w-full md:max-w-screen-md mx-auto px-5 md:px-16 py-12  ">

        <LogoNavbar />

        {/* Hero Section */}
        <div className=" text-white pt-4 sm:pt-8">
          <div className="max-w-full md:max-w-screen-md mx-auto  py-8">
            {/* Services Section */}
            

            {/* Web Dev Section */}
            <div className="rounded-[16px] transition-all duration-500 backdrop-blur-xl bg-gradient-to-b from-black/10 to-black/30 shadow-[0_-8px_32px_rgba(0,0,0,0.12)] p-5 grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 lg:mb-12 border border-[#888a914a] ">
              <div className="flex flex-col justify-center">
                <h2 className="text-2xl lg:text-3xl font-bold mb-6 lg:mb-8 tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Weblink®</h2>
                <p className="text-zinc-500 mb-8 lg:mb-10 text-sm  max-w-xl">
                  At Weblink, we fuse the logic of software engineering with the artistry of digital design to create seamless, engaging web experiences. From clean, scalable code to striking visual identities, we bring bold ideas to life online crafting websites that are not only beautiful, but built to perform.
                </p>
                <Link 
                  to="/contact"
                  className="w-full sm:w-auto px-8 py-3 bg-darkgrey/30 rounded-lg flex items-center justify-center gap-3  transition-all text-lg  shadow-md group focus:outline-none border border-[#888a914a]"
                >
                  Get In Touch
                  <svg className="w-5 h-5 lg:w-6 lg:h-6 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
              <div className="rounded-[15px] overflow-hidden bg-gradient-to-br from-[#1A1A1A] to-[#000000] shadow-xl aspect-square">
                <img 
                  src={gif} 
                  alt="Landscape" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Projects Section */}
            <div className="mb-16 lg:mb-24">
              <div className="text-center mb-12 lg:mb-16">
                <h2 className="text-3xl lg:text-4xl  font-bold mb-4 lg:mb-6 tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                  PROJECTS
                </h2>
                <p className="text-zinc-500 text-xs  max-w-2xl mx-auto">
                  Browse our amazing projects and discover the universe of creativity
                </p>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 mb-12">
                {featuredProjects.map((project) => (
                  <Link 
                        to={`/projects/${project.id}`}
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        key={project.id} className="rounded-[16px] overflow-hidden transition-all duration-500 backdrop-blur-xl bg-gradient-to-b from-black/10 to-black/30  shadow-[0_-8px_32px_rgba(0,0,0,0.12)] border border-[#888a914a] group"
                      >
                      
                    <div className="aspect-video">
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <span 
                            key={index}
                            className="px-3 py-1.5 bg-darkgrey/30 rounded-lg border border-[#888a914a] text-xs sm:text-sm  text-zinc-500"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-sm sm:text-xl font-bold my-4 tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                        {project.title}
                      </h3>
                      <p className="text-zinc-500 mb-6 text-xs">
                        {project.description}
                      </p>
                      {/* <Link 
                        to={`/projects/${project.id}`}
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="p-4 bg-darkgrey/30 rounded-xl  transition-all  shadow-md group inline-flex focus:outline-none"
                      >
                        <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none">
                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </Link> */}
                    </div>
                      </Link>
                  
                 
                ))}
              </div>

              {/* Show More Button */}
              <div className="flex justify-center">
                <Link 
                  to="/projects"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="px-6 py-2 bg-darkgrey/30 font-bold rounded-lg flex items-center gap-3 hover:from-[#1A1A1A] hover:to-[#000000] transition-all text-md  shadow-md group focus:outline-none"
                >
                  More
                  <svg className="w-5 h-5 lg:w-6 lg:h-6 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          
        </div>
        <Footer/>
    </div>
    </div>
  )
}

export default Home
