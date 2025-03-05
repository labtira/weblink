import React, { useState } from 'react';
import banner from '../assets/img/Banner.jpg';
import refindlogo from '../assets/projects/refindlogo.png';
import postexlogo from '../assets/projects/postexlogo.png';
import ProjectPopup from './ProjectPopup';

const projects = [
  {
    id: 1,
    name: 'Project One',
    image: refindlogo,
    description: 'Description for project one'
  },
  {
    id: 2,
    name: 'Project Two',
    image: postexlogo,
    description: 'Description for project two'
  },
  {
    id: 3,
    name: 'Project Three',
    image: banner,
    description: 'Description for project three'
  },
  {
    id: 4,
    name: 'Project One',
    image: banner,
    description: 'Description for project one'
  },
  {
    id: 5,
    name: 'Project Two',
    image: banner,
    description: 'Description for project two'
  },
  {
    id: 6,
    name: 'Project Three',
    image: banner,
    description: 'Description for project three'
  },
  {
    id: 7,
    name: 'Project One',
    image: banner,
    description: 'Description for project one'
  },
  {
    id: 8,
    name: 'Project Two',
    image: banner,
    description: 'Description for project two'
  },
  {
    id: 9,
    name: 'Project Three',
    image: banner,
    description: 'Description for project three'
  },
  {
    id: 10,
    name: 'Project Three',
    image: banner,
    description: 'Description for project three'
  },
  // Add more projects as needed
];

const ProjectSection = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const displayedProjects = projects.slice(0, 3);

  return (
    <section className="w-full py-16 bg-black">
      <div className='flex justify-center items-center'>
        <div className="container mx-auto px-6 sm:max-w-screen-md">
          <div className='text-center'>
            <h2 className="text-3xl font-bold mb-5 text-white">Projects</h2>
            <p className='text-grey'>Checkout our portfolio.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
            {displayedProjects.map((project) => (
              <div 
                key={project.id}
                className="group ring-1 ring-darkgrey overflow-hidden rounded-lg bg-gray-900 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="aspect-[4/3] w-full">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{project.name}</h3>
                    <p className="text-gray-300 text-grey">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className=" text-center">
            <button
              onClick={() => setIsPopupOpen(true)}
              className="px-5 py-3 ring-1 ring-darkgrey text-grey hover:text-white hover:bg-darkgrey text-xs rounded-lg  duration-300"
            >
              View All Projects
            </button>
          </div>
        </div>
      </div>

      <ProjectPopup
        projects={projects}
        isPopupOpen={isPopupOpen}
        onPopupClose={() => setIsPopupOpen(false)}
      />
    </section>
  );
};

export default ProjectSection; 