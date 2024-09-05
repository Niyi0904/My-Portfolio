import React from "react";


const Navbar = () =>  {
  return (
    <div>
        <nav className="bg-blue-950 text-gray-300 font-sans space-x-4 h-14">
            <ul className="flex justify-center space-x-10 pt-4">
                <li>Home</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact me</li>
            </ul>
        </nav>
    </div>
)}

export default Navbar;
