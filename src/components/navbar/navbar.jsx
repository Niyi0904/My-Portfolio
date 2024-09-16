import React, {useEffect, useState} from "react";

import { UseStateContext } from "../../context/context";


const Navbar = () =>  {
  const {handleResize, menubar, setMenubar, screenSize, menu, openMenu, closeMenu} = UseStateContext();

    useEffect(() => {
      window.addEventListener('resize', handleResize);
  
      handleResize()
  
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    useEffect(() => {
      if (screenSize <= 800) {
        setMenubar(true)
      } else {
        setMenubar(false);
      }
    }, [screenSize]);

  return (
    <div className="fixed w-full">
        <nav className="flex justify-between bg-gray-50 text-blue-950 space-x-4 h-12">
            <div className="relative left-[5%] top-2 text-3xl xs:text-2xl font-extrabold font-sans ">Nidavtech</div>
            {
                menubar ? <div className="relative right-[5%] top-3">
                    <i className="fi fi-br-menu-burger menu-bar text-blue-950 text-2xl xs:text-xl font-light" onClick={openMenu}></i>
                </div> 
                : 
                <ul className="relative bottom-1 flex justify-center space-x-10 pt-5 pr-20 font-serif font-bold nav-items pb-0">
                    <li className="border-b-slate-950 ">HOME</li>
                    <li>SKILLLS</li>
                    <li>PROJECTS</li>
                    <li>CONTACT</li>
                </ul>
            }
        </nav>
    </div>
)}

export default Navbar;