import React, { useState } from 'react';
import { BriefcaseBusiness, Menu, X } from 'lucide-react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-full fixed top-0 left-0 right-0 flex flex-row bg-white shadow-md z-10">
      <div className="w-full flex flex-row justify-between items-center px-6 py-6">
        {/* Logo and Title */}
        <div className="flex flex-row justify-center items-center gap-x-2">
          <BriefcaseBusiness size={50} />
          <button className="text-black text-2xl font-bold font-Manrope">
            <a href="/"><span className='text-yellow-600'>Kave</span><span className='text-black'>Job</span></a>
          </button>
        </div>

        {/* Navigation Links - Visible on medium and larger screens */}
        <ul className="hidden lg:flex gap-x-20 justify-center items-center ml-24">
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
        </ul>

        {/* Sign In and Sign Up Buttons - Visible on medium and larger screens */}
        <div className="hidden lg:flex flex-row justify-center items-center gap-x-5">
          <a className="bg-white text-black font-bold py-2 px-5 rounded hover:bg-yellow-600 hover:text-white duration-700"
             href='/loginpage'>
            Log In
          </a>
          <a className="bg-yellow-600 text-white font-bold py-2 px-5 rounded hover:bg-white hover:text-black duration-700"
             href='/signuppage'>
            Sign Up
          </a>
        </div>

        {/* Hamburger Menu Button - Visible on small screens */}
        <div className="flex lg:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Dropdown Menu - Visible when hamburger menu is open */}
        {menuOpen && (
          <div className="absolute top-20 right-0 bg-white shadow-md p-5 flex flex-col gap-y-5 w-64 z-10 lg:hidden">
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
