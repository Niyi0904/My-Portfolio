import React from "react";
import { skillsData, languageData } from "./skillsData";
const Skills = () =>  {
  return (
    <div className="mt-12 text-blue-950 font-mono">
        <h1 className="text-4xl font-extrabold flex justify-center">SKILLS</h1>
        <div className="flex flex-wrap px-4 gap-x-12 pt-14 justify-center items-center w-full text-blue-950">
            {skillsData.map(skills => (
                <div key={skills.id} className="bg-gray-300 cards shadow-xl max-w-72 min-h-96 rounded-xl xs:mt-8 sm:mt-8">
                    <div className=" pt-4 px-4">
                        <img className="w-12" src={skills.icon} alt="Backend-Icon"/>
                        <h1 className="border-b-2 py-3 font-bold">{skills.title}</h1>
                        <p className="description pt-4 text-sm leading-6">{skills.description}</p>
                    </div>
                </div>
            ))}
        </div>

        <div>
            <div className="w-full flex justify-center mt-4 mb-4">
                <div className="text-3xl xs:text-xl font-extrabold flex justify-center mt-7 xs:w-72">LANGUAGES & FRAMEWORKS</div>
            </div>
            <div className="w-full items-center flex justify-center">
                <div className="flex flex-wrap justify-center items-center w-1/2 xs:w-full">
                    {languageData.map(language => (
                        <div className="px-2 m-8 xs:m-4" key={language.id}>
                            <img className="w-12 xs:w-8 mb-4 text-red-800" src={language.icon}/>
                            <p className="flex justify-center font-mono">{language.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
)}

export default Skills;

            
        
