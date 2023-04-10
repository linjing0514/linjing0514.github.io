import React from 'react';
import { useParams } from 'react-router-dom';
import { ProjectList } from '../helper/ProjectList';
import GitHubIcon from "@material-ui/icons/GitHub";
import YoutubeIcon from '@material-ui/icons/YouTube';
import NotFoundImage from '../assets/imageNotFound.jpg';
import '../styles/ProjectDisplay.css';

function ProjectDisplay() {
    const { id } = useParams();
    const project = ProjectList[id];
    return (
        <div className='project'>
            <h1>{project.name}</h1>
            <div className="projectLinks">
                <a href= {project.link} target="_blank"><GitHubIcon/></a>
                <a href={project.video_link} target="_blank"><YoutubeIcon/></a>
            </div>
            <img src={project.image === undefined ? NotFoundImage: project.image} alt='projectImage'/>
            <p>
                <b>Skills:</b>{project.skills}
            </p>
        </div>
    )
}

export default ProjectDisplay