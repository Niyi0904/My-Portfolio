import React from 'react';
import { projectData } from "../projects/projectData";

const Certifications = () => {
    return (
        <div className="relative top-24 text-blue-950 font-mono flex flex-col justify-center items-center mt-10 border-b-[2px] border-b-slate-200">
        <h1 className="text-4xl font-extrabold flex justify-center mb-4">CERTIFICATIONS</h1>
        <div className="flex flex-wrap px-4 gap-x-12 pt-10 justify-center items-center w-full text-blue-950">
            {projectData.map(projects  => (       
                <div className="bg-white project-card w-80 h-[400px] rounded-md xs:mt-8 sm:mt-8 mt-4">
                    <div className="relative mb-2 mt-2 left-5">
                        <h1 className="text-xl font-semibold project-title">{projects.projectTitle}</h1>
                        <h1 className="relative top-1 font-thin project-stack text-[12px]">{projects.projectCategory}</h1>
                    </div>
                    <div className="w-full flex h-[70%] justify-center items-center">
                        <img className="relative w-[90%] rounded-sm h-[90%] project-image" src={projects.projectImage}/>
                    </div>
                    <div className="relative left-4">
                        <h1 className="relative top-0 font-thin project-stack text-md">{projects.projectStack}</h1>
                    </div>
                </div>
            )) }  

        </div>
        <div className="relative text-slate-300 project-btn w-40 text-center h-12 bottom-7 cursor-pointer rounded-3xl bg-blue-950 py-3 font-bold font- hover:bg-blue-900 text-md">View all</div>
    </div>
    )
}

export default Certifications;