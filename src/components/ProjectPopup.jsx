import React, { useState } from 'react';

const ProjectPopup = ({ projects, isPopupOpen, onPopupClose }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 9;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (!isPopupOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
      <div className="bg-black rounded-lg w-full h-svh sm:max-w-screen-md max-h-[90vh] overflow-y-auto ring-1 ring-darkgrey">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">All Projects</h2>
            <button
              onClick={onPopupClose}
              className="text-gray-400 text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentProjects.map((project) => (
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
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.name}</h3>
                  <p className="text-gray-300 text-grey">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center space-x-2 mt-8">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
              <button
                key={number}
                onClick={() => paginate(number)}
                className={`px-4 py-2 rounded-full ${
                  currentPage === number
                    ? 'bg-primary text-white'
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}
              >
                {number}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPopup; 