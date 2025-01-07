import React, { useState } from 'react';
import { projectsData } from '../../Data/projectsData';
import './Projects.css';

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(6); // Display 6 projects initially
  const [selectedProject, setSelectedProject] = useState(null); // Selected project for the popup

  // Load more projects
  const handleLoadMore = () => {
    setVisibleProjects((prev) => prev + 6); // Show 6 more projects
  };

  // Handle card click to show project details in a popup
  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  // Close the popup
  const handleClosePopup = () => {
    setSelectedProject(null);
  };

  return (
    <div className="projects-page">
      <h1 className="page-title">My Projects</h1>
      <div className="projects-grid">
        {projectsData.slice(0, visibleProjects).map((project) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => handleCardClick(project)}
          >
            <img src={project.image} alt={project.projectName} className="project-image" />
            <h3 className="project-title">{project.projectName}</h3>
            {/* Render tags */}
            <div className="tags-container">
              {project.tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      {visibleProjects < projectsData.length && (
        <button className="load-more-button" onClick={handleLoadMore}>
          Load More
        </button>
      )}

      {selectedProject && (
        <div className="popup-overlay" onClick={handleClosePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedProject.projectName}</h2>
            <p>{selectedProject.projectDesc}</p>
            <div className="popup-links">
              <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer">
                Demo
              </a>
              <a href={selectedProject.code} target="_blank" rel="noopener noreferrer">
                Code
              </a>
            </div>
            <button className="close-popup-button" onClick={handleClosePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
