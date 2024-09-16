import React from "react";

import { Myphoto } from "../../assests/images";
import { projectData } from "./projectData";


const Projects = () => (
    <div className="mt-12 text-blue-950 font-mono">
        <h1 className="text-4xl font-extrabold flex justify-center">PROJECTS</h1>
        <div className="flex flex-wrap px-4 gap-x-12 pt-14 justify-center items-center w-full text-blue-950">
            {projectData.map(projects  => (       
                <div className="bg-white project-card w-72 h-96 rounded-md xs:mt-8 sm:mt-8">
                    <img className="project-image" src={projects.projectImage}/>
                </div>
            )) }

        </div>
    </div>
);

export default Projects;