import React from 'react';
import { Link } from 'react-scroll';
import { UseStateContext } from '../../context/context';

const SideBar = () => {
    const {closeMenu} = UseStateContext();
    return (
        <div className='fixed w-[50%] h-[80%] menu z-[5] bg-gray-100 text-blue-950 text-sm rounded-bl-md '>
            <div className='flex left-[10%] top-[15%] relative'>
                <div className='flex flex-col text-left relative space-y-4 menu-item w-[30%] font-semibold'>
                    <h1 onClick={() => closeMenu}>
                        <Link to="home" smooth={true} duration={500} >
                            Home
                        </Link>
                    </h1>  
                    <h1 onClick={() => closeMenu}>
                        <Link to="skills" smooth={true} duration={500} >
                            Skills
                        </Link>
                    </h1>
                    <h1 onClick={() => closeMenu}>
                        <Link to="projects" smooth={true} duration={500} >
                            Projects
                        </Link>
                    </h1>
                    <h1 onClick={() => closeMenu}>
                        <Link to="certificates" smooth={true} duration={500} >
                            Certificates
                        </Link>
                    </h1>
                    <h1 onClick={() => closeMenu}>
                        <Link to="contacts" smooth={true} duration={500} >
                            Contacts
                        </Link>
                    </h1>
                </div>
                <div className="relative bottom-5 left-[27%]" onClick={closeMenu}>
                    <i className={`fi-br-closed-captioning-slash menu-bar text-blue-950 text-2xl font-light`}  ></i>
                </div> 
            </div>
        </div>
    )
}

export default SideBar; 
// fi-br-closed-captioning-slash menu-bar text-blue-950 text-2xl font-light