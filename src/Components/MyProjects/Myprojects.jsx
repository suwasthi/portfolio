import React, { useState, useRef } from 'react';
import './Myprojects.css';
import { FaGithub } from 'react-icons/fa';
import myprojects_data from '../../assets/myprojects';

const MyProjects = () => {
  const [visibleCount, setVisibleCount] = useState(1); // Show only 1 initially
  const [expanded, setExpanded] = useState(false); // Track if expanded
  const projectsRef = useRef(null); // Reference for scrolling

  const toggleProjects = () => {
    if (expanded) {
      setVisibleCount(1); // Collapse back to 1
      setTimeout(() => {
        projectsRef.current?.scrollIntoView({ behavior: 'smooth' }); // Scroll to top
      }, 100);
    } else {
      setVisibleCount(myprojects_data.length); // Show all
    }
    setExpanded(!expanded);
  };

  return (
    <div id='MyProject' className="myprojects-container" ref={projectsRef}>
      <div className="myproject-title">
          <h2>My Works</h2>
      </div>
      <div className="projects-list">
        {myprojects_data.slice(0, visibleCount).map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-content">
              <h3 className="project-name">{project.p_name}</h3>
              <p className="project-desc">{project.p_desc}</p>
              <a href={project.p_link} rel="noopener noreferrer" className="github-link">
                  <FaGithub className="github-icon1" />
              </a>
              <div className="project-media"> {/* New container */}
                <img src={project.p_img} alt={project.p_name} className="project-image" />
                
              </div>
            </div>

          </div>
        ))}
      </div>
      {myprojects_data.length > 1 && ( // Show button only if more than 1 project exists
        <div className="project-showmore" onClick={toggleProjects}>
          <p>{expanded ? "Show Less" : "Show More"}</p>
        </div>
      )}
    </div>
  );
};

export default MyProjects;
