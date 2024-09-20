import React from 'react';
import { UseStateContext } from '../../context/context';

const Menu = () => {
    const {closeMenu} = UseStateContext();
    return (
        <div className='fixed w-[100%] h-[50%] z-[5] bg-gray-100 text-blue-950 text-sm'>
            <div className='flex justify-center top-[30%] relative'>
                <div className='flex flex-col text-center relative space-y-4 menu-item w-[30%]'>
                    <h1>HOME</h1>  
                    <h1>SKILLS</h1>
                    <h1>PROJECTS</h1>
                    <h1>CERTIFICATION</h1>
                    <h1>CONTACT</h1>
                </div>
                <div className="relative bottom-5 left-[27%]" onClick={closeMenu}>
                    <i className="fi-br-closed-captioning-slash menu-bar text-blue-950 text-2xl font-light"></i>
                </div> 
            </div>
        </div>
    )
}

export default Menu; 