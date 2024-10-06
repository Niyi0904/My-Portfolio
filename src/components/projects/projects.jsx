import React from "react";

import { Myphoto } from "../../assests/images";
import { projectData } from "./projectData";


const Projects = () => (
    <div id="projects" className="relative top-24 text-blue-950 font-mono flex flex-col justify-center items-center border-b-[2px] border-b-slate-200 mt-8">
        <h1 className="text-4xl font-extrabold flex justify-center mb-4">PROJECTS</h1>
        <div className="flex flex-wrap px-4 gap-x-12 pt-10 justify-center items-center w-full text-blue-950">
            {projectData.map(projects  => (       
                <div className="bg-white project-card w-80 xs:w-[60%] sm:w-[80%] h-[400px] rounded-md xs:mt-8 sm:mt-8 mt-4">
                    <div className="relative mb-1 mt-2 left-5 h-8">
                        <h1 className="text-xl font-medium project-title">{projects.projectTitle}</h1>
                        <i className="fi fi-brands-github text-3xl text-right relative left-[80%] bottom-7"></i>
                    </div>
                    <div className="w-full flex h-[70%] justify-center items-center pt-0">
                        <img className="relative w-[95%] rounded-sm h-[95%] project-image" src={projects.projectImage}/>
                    </div>  
                    <div className="relative left-4">
                        <h1 className="relative top-0 font-medium project-stack text-md italic text-gray-500">{projects.projectStack}</h1>
                    </div>
                </div>
            )) }  

        </div>
        <div className="relative text-slate-300 project-btn w-40 text-center h-12 bottom-7 cursor-pointer rounded-3xl bg-blue-950 py-3 font-bold font- hover:bg-blue-900 text-md">View all</div>
    </div>
);

export default Projects;