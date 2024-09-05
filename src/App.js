import React from "react";

import Navbar from "./components/navbar/navbar";
import HeroSection from "./components/heroSection";
import Skills from "./components/skills";


const App = () => {
  return (
    <div className="h-screen">
      <Navbar/>
      <HeroSection/>
      <Skills/>
    </div>
  );
}

export default App;
