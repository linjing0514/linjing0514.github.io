import React from 'react';
import ProjectItem from '../components/ProjectItem';
import { ProjectList } from '../helper/ProjectList';
import '../styles/Projects.css';
import NotFoundImage from '../assets/imageNotFound.jpg';

function Projects() {
  return (
    <div className="projects">
      <h1 className="projectTitle">My Personal Projects</h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => { 
          return( 
            <ProjectItem 
              id = {idx}
              name = {project.name}
              image = {project.image === undefined ? NotFoundImage: project.image}/>
          )
        })}
      </div>
    </div>
  )
}

export default Projects