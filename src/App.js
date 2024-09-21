import React, {useEffect, useState} from "react";

import Navbar from "./components/navbar/navbar";
import HeroSection from "./components/herosection/heroSection";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";
import Menu from "./components/menu/menu";

import { UseStateContext } from "./context/context";
import Certifications from "./components/certifications/certifications";




const App = () => {
  const {menu} = UseStateContext();
  return (
    <div>
      <Navbar/>
      {menu ? <Menu/> : ''}
      <HeroSection/>
      <Skills/>
      <Projects/>
      <Certifications/>
    </div>
  );
}

export default App;
