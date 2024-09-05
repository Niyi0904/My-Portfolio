import React from "react";

import { Myphoto } from "../assests/images";


const HeroSection = () =>  {
  return (
<div className="bg-white mx-6 font-mono rounded-b-lg">
    <div className="grid xs:flex grid-cols-2 xs:flex-col h-full mx-6 rounded-b-xl px-32 sm:px-16 md:px-24 py-12 justify-center items-center gap-x-16">
        <div className="flex flex-col items-start sm:gap-2 md:gap-5 lg:gap-2 gap-10 h-full text-blue-900 ">
            <p>Hello, World</p>
            <h1 className="text-4xl font-bold leading-10 self-stretch">Frontend Developer</h1>
            <p className="text-wrap text-lg font-normal leading6">I am an experienced Frontend Developer, and would be a great addition to your teams</p>
            <div className="w-34 h-12 rounded-lg bg-blue-950 text-white px-3 py-2.5 hover:bg-blue-900">Get in touch</div>
        </div>
        <div className="flex w-full h-full">
            <img src={Myphoto} className="size-72"/>
        </div>
    </div>
</div>

)}

export default HeroSection;
