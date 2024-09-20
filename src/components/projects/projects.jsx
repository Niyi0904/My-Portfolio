import React from "react";

import { Myphoto } from "../../assests/images";
import { projectData } from "./projectData";


const Projects = () => (
    <div className="relative top-24 text-blue-950 font-mono">
        <h1 className="text-4xl font-extrabold flex justify-center">PROJECTS</h1>
        <div className="flex flex-wrap px-4 gap-x-12 pt-10 justify-center items-center w-full text-blue-950">
            {projectData.map(projects  => (       
                <div className="bg-white project-card w-72 h-96 rounded-md xs:mt-8 sm:mt-8">
                    <img className="relative w-full rounded-t-md h-[60%] project-image" src={projects.projectImage}/>
                    <div className=" relative top-6 left-2">
                        <h1 className="text-xl font-extrabold project-title">{projects.projectTitle}</h1>

                        <h1 className="text-lg relative top-4 font-extrabold project-stack font-sans">Tech Stack:<span className="font-bold text-[14px] pl-2">{projects.projectStack}</span>
                        </h1>
                    </div>
                </div>
            )) }  

        </div>
    </div>
);

export default Projects;