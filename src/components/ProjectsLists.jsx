import React from 'react';
import Project from './Project';
import './ProjectsLists.scss'
function ProjectsLists({ projects }) {
  return (
    <div className="project__lists">
      {projects.map((project) => (
        <Project  id={project._id} key={project._id} title={project.title} description={project.description} image={project.image}/>
      ))}
    </div>
  );
}

export default ProjectsLists;
