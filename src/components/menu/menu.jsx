import React from 'react';
import { UseStateContext } from '../../context/context';

const Menu = () => {
    const {closeMenu} = UseStateContext();
    return (
        <div className='fixed w-[40%] h-[80%] menu z-[5] bg-gray-100 text-blue-950 text-sm rounded-bl-md '>
            <div className='flex left-[10%] top-[15%] relative'>
                <div className='flex flex-col text-left relative space-y-4 menu-item w-[30%] font-semibold'>
                    <h1>Home</h1>  
                    <h1>Skills</h1>
                    <h1>Projects</h1>
                    <h1>Certification</h1>
                    <h1>Contact</h1>
                </div>
                <div className="relative bottom-5 left-[27%]" onClick={closeMenu}>
                    <i className="fi-br-closed-captioning-slash menu-bar text-blue-950 text-2xl font-light"></i>
                </div> 
            </div>
        </div>
    )
}

export default Menu; 