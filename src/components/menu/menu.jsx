import React from 'react';
import { UseStateContext } from '../../context/context';

const Menu = () => {
    const {closeMenu} = UseStateContext();
    return (
        <div className='absolute w-[100%] h-[40%] z-[5] bg-red-800 text-blue-950 text-lg'>
            <div className='flex justify-center top-5 relative'>
                <div className='flex flex-col text-center relative space-y-4 menu-item w-[30%]'>
                    <h1>Home</h1>  
                    <h1>Home</h1>
                    <h1>Home</h1>
                    <h1>Home</h1>

                    <div className="relative right-[10%] top-[16%]" onClick={closeMenu}>
                    <i className="fi fi-br-menu-burger menu-bar text-blue-950 text-2xl font-light"></i>
                </div> 
                </div>
            </div>
        </div>
    )
}

export default Menu; 