import React from "react";

import { Myphoto } from "../../assests/images";


const HeroSection = () =>  {
  return (
<div className="bg-sky-100 herosection-desc rounded-b-lg relative top-10">
    <div className="grid xs:flex grid-cols-2 xs:flex-col-reverse h-full rounded-b-xl py-12 sm:px-10 px-28 xs:px-0 justify-center items-center gap-x-16">
        <div className="relative leading-8 xs:leading-7 xs:w-[90%] w-[80%] xs:top-[10%]">
            <p>Hi, My Name is</p>
            <h1 className="text-2xl relative font-bold">Owoyemi Niyi</h1>
            <p>I'm a detail-driven software developer with experience in building dynamic and scalable applications.</p>
            <p> Proficient in Javascript, I specialize in React, crafting intuitive user-interfaces, I deliver high-quality solutions that exceed expectations.</p>
            {/* <h1 className="text-4xl font-bold leading-10 self-stretch">Frontend Developer</h1> */}
            <div className="btn xs:w-[50%] sm:w-[50%] text-center h-[35%] cursor-pointer rounded-lg bg-blue-950 text-white py-[2%] font-extrabold  hover:bg-blue-900 text-lg">Get in touch</div>
        </div>
        <div className="relative flex w-[60%] xs:w-[80%] xs:bottom-7 sm:w-[70%] md:w-[90%] h-full xs:bg-red-900 herosection-img">
            <img src='https://i.ibb.co/BL73LNj/DALL-E-2024-09-18-00-45-26-A-person-with-black-hair-styled-in-a-chocolate-fashion-with-an-oblong-fac.webp
            ' className="rounded-lg"/> 
        </div>
    </div>
</div>

)}

export default HeroSection;
