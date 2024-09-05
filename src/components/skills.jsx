import React from "react";
import { frontendIcon, backendIcon, databaseIcon } from "../assests/icons";

const Skills = () =>  {
  return (
    <div className="mt-12 text-blue-950 font-mono">
        <div className="text-4xl font-extrabold flex justify-center">SKILLS</div>
        <div className="flex px-4 gap-x-20 pt-14 justify-center items-center w-full text-blue-950">
            <div className="bg-gray-300 w-72 h-96 rounded-xl">
                <div className="pt-4 px-4">
                    <div>
                        <img className="w-12" src={frontendIcon} alt="frontendIcon"/>
                    </div>
                    <h1 className="border-b-2 py-3 font-bold">FRONTEND DEVELOPMENT</h1>
                    <p className="pt-4 text-sm leading-6"> Highly skilled front-end developer with expertise in crafting responsive, intuitive, and visually stunning user interfaces. Proficient in translating design into functional and engaging web experience.</p>
                </div>
            </div>
            <div className="bg-gray-300 w-72 h-96 rounded-xl">
                <div className="pt-4 px-4">
                    <div>
                        <img className="w-12" src={databaseIcon} alt="frontendIcon"/>
                    </div>
                    <h1 className="border-b-2 py-3 font-bold">DATABASE MANAGEMENT</h1>
                    <p className="pt-4 text-sm leading-6"> Highly skilled front-end developer with expertise in crafting responsive, intuitive, and visually stunning user interfaces. Proficient in translating design into functional and engaging web experience</p>
                </div>
            </div>
            <div className="bg-gray-300 w-72 h-96 rounded-xl">
                <div className="pt-4 px-4">
                    <div>
                        <img className="w-12" src={backendIcon} alt="frontendIcon"/>
                    </div>
                    <h1 className="border-b-2 py-3 font-bold">BACKEND DEVELOPMENT</h1>
                    <p className="pt-4 text-sm leading-6"> Highly skilled front-end developer with expertise in crafting responsive, intuitive, and visually stunning user interfaces. Proficient in translating design into functional and engaging web experience</p>
                </div>
            </div>
        </div>

        <div>
            <div className="text-2xl font-extrabold flex justify-center mt-7">PROGRAMMING LANGUAGES</div>
            <div className="grid-rows-3">
                
            </div>
        </div>
    </div>
)}

export default Skills;
