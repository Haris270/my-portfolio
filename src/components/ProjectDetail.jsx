import React from 'react';
import { useParams } from 'react-router-dom';
import projectsData from './images/projects.json';

// ------- Project Images Import ----------- //
import beige from "./images/beige-noise-bg.png";
import calm from "./images/calm-bg.jpg";
import golden from "./images/golden-noise-bg.png";

const img = [beige, calm, golden]


const ProjectDetails = () => {
    const { id } = useParams();
    const project = projectsData.projects.find((project) => project.id === id);
    const index = parseInt(id) - 1;

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div className="each-post container">
            <h1>{project.title}</h1>
            <img src={img[index]} alt={project.title} />
            <p>{project.content}</p>
            
        </div>
    );
};

export default ProjectDetails;