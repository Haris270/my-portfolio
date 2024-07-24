import projectsData from "../projects.json";
import React from 'react';
import { Link } from 'react-router-dom';

// ------- Project Images Import ----------- //
import beige from "./images/beige-noise-bg.png";
import calm from "./images/calm-bg.jpg";
import golden from "./images/golden-noise-bg.png";

const img = [beige, calm, golden]   //Array to hold the Project Images

const Projects = () => {
    const projects = projectsData.projects;
    return(
        <>
        {projects.map((project, index) => (
            
            <div key={project.id} className="thePost container">
                <Link to={'post/'+ project.id} className='post-link'>
                <img className="post-img" src={img[index]}/>
                <div className='post-title'>
                    <h1>{project.title}</h1>
                    <p>{project.description}</p>
                </div>
                </Link>
            </div>
 

))}
</>
)
};


export default Projects;