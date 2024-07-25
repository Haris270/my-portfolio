import React from "react";
import Hero from "./Hero";
import Introduction from "./Introduction";
import Projects from "./Projects";

function HomePage(){
    return(
        <>
            <div className="first-section" id="top">
                
                <Hero/>
                
                <Introduction/>

                <div className="projects" id="project">
                    <h1 className="projects-heading">FEATURED PROJECTS</h1>
                
                <div className="project-div">

                    <Projects/>
                
                </div>

                </div>
            </div>
            </>
    )
}

export default HomePage;