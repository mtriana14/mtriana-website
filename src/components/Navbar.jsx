import React from 'react';
import logo from "../assets/MelaniTrianaLogo.png";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-30 w-20" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="www.linkedin.com/in/melanitriana" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/mtriana14/mtriana14" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="m582L@njit.edu">
          <FaEnvelope />
        </a>
        {/* Link to Resume */}
        <a href="https://drive.google.com/file/d/13Rgh49dfZB2d3FCjjyPs3mT9oU_-wQjX/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="text-[#082f49] hover:underline">
          View Resume
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
