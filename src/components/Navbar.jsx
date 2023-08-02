import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {  FaBars } from "react-icons/fa";
import logo from '../../public/logdoc.png'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
 
  const navItem = (
    <>
      <li>
        <NavLink  to="/" className="text-headingColor font-semibold font-serif items-center">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/college" className="text-headingColor font-semibold font-serif items-center">
          Find a Doctor
        </NavLink>
      </li>
      <li>
        <NavLink to="/admission" className="text-headingColor font-semibold font-serif items-center">
          Services
        </NavLink>
      </li>
      <li>
        <NavLink to="/my-college">
         <button className="btn"> Login</button>
        </NavLink>
      </li>
      
       
        
      
    
       

      
    </>
  );

  return (
    <nav className=" header py-6 px-8 md:px-16">
      <div className="flex items-center justify-between">
        <Link to="/" className="flex justify-center items-center gap-2 text-xl md:text-3xl font-serif font-semibold text-yellowColor">
         <img src={logo} width={40} className="rounded-lg" alt="" />
          <h1 className="text-[yellowColor]">DoctorTime</h1>
        </Link>

        {/* Hamburger Menu for Small Devices */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-yellow-300 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <FaBars className="text-3xl" />
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4 items-center">{navItem}</ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && <ul className="md:hidden mt-2">{navItem}</ul>}
    </nav>
  );
};

export default Navbar;