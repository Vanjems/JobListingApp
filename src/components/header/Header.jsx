import React, { useState } from 'react';
import { BriefcaseBusiness, Menu, X } from 'lucide-react';

export default function Header() {
  // State to manage the open/closed state of the mobile menu
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggles the menuOpen state between true and false
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-full fixed flex flex-row justify-center bg-white shadow-md z-10">
      <div className="mx-auto max-w-[1500px] w-full flex flex-row justify-between items-center px-6 md:px-20 py-6">
        {/* Logo and Title */}
        <div className="flex flex-row justify-center items-center gap-x-7">
          <div className="flex flex-row justify-center items-center gap-x-2">
            <BriefcaseBusiness size={50} /> {/* Display logo icon */}
            <button className="text-black text-2xl font-bold font-Manrope">
              <span className='text-yellow-600'>Kave</span><span className='text-black'>Job</span> {/* Title text */}
            </button>
          </div>
        </div>

        {/* Navigation Links - Visible on medium and larger screens */}
        <ul className="hidden md:flex gap-x-20 justify-center items-center">
          <li className="hover:text-yellow-500  duration-300 ">
            <a href="/">Home</a>
          </li>
          <li className="hover:text-yellow-500 duration-300">
            <a href="/jobpage">Job</a>
          </li>
          <li className="hover:text-yellow-500 duration-300">
            <a href="/aboutpage">About us</a>
          </li>
          <li className="hover:text-yellow-500 duration-300">
            <a href="/contactpage">Contact</a>
          </li>
        </ul>

        {/* Sign In and Sign Up Buttons - Visible on medium and larger screens */}
        <div className="hidden md:flex flex-row justify-center items-center gap-x-5">
          <a className="bg-white text-black font-bold py-2 px-5 rounded hover:bg-yellow-600 hover:text-white duration-700"
          href='/loginpage'>
            Log In
          </a>
          <a className="bg-white text-black font-bold py-2 px-5 rounded hover:bg-yellow-600 hover:text-white duration-700"
          href='signuppage'>
            Sign Up
          </a>
        </div>

        {/* Hamburger Menu Button - Visible on small screens */}
        <div className="flex md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <X size={30} /> : <Menu size={30} />} {/* Display either close (X) or menu icon based on menuOpen state */}
          </button>
        </div>

        {/* Dropdown Menu - Visible when hamburger menu is open */}
        {menuOpen && (
          <div className="absolute top-20 right-0 bg-white shadow-md p-5 flex flex-col gap-y-5 w-64 z-10 md:hidden">
            <ul className=''>
              <li className="hover:text-yellow-500 duration-300">
                <a href="/">Home</a>
              </li>
              <li className="hover:text-yellow-500 duration-300">
                <a href="/jobpage">Job</a>
              </li>
              <li className="hover:text-yellow-500 duration-300">
                <a href="/aboutpage">About us</a>
              </li>
              <li className="hover:text-yellow-500 duration-300">
                <a href="/contactpage">Contact</a>
              </li>
              <li className="hover:text-yellow-500 duration-300">
                <a href="/loginpage">Log In</a>
              </li>
              <li className="hover:text-yellow-500 duration-300">
                <a href="/signuppage">Sign Up</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
