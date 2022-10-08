import React from 'react';
import { useParams } from 'react-router-dom';
import { ProjectList } from '../helper/ProjectList';
import GitHubIcon from "@material-ui/icons/GitHub";
import NotFoundImage from '../assets/imageNotFound.jpg';
import '../styles/ProjectDisplay.css';

function ProjectDisplay() {
    const { id } = useParams();
    const project = ProjectList[id];
    return (
        <div className='project'>
            <h1>{project.name}</h1>
            <img src={project.image === undefined ? NotFoundImage: project.image} alt='projectImage'/>
            <p>
                <b>Skills:</b>{project.skills}</p>
            <GitHubIcon/>
        </div>
    )
}

export default ProjectDisplay