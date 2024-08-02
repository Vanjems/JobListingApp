import React, { useState, useEffect } from 'react';
import { BriefcaseBusiness, Menu, X } from 'lucide-react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const checkZoom = () => {
      const width = window.innerWidth;
      if (width <= 600) {
        setIsMobile(true);
        setIsTablet(false);
      } else if (width <= 768) {
        setIsMobile(false);
        setIsTablet(true);
      } else {
        setIsMobile(false);
        setIsTablet(false);
      }
    };

    checkZoom();
    window.addEventListener('resize', checkZoom);

    return () => {
      window.removeEventListener('resize', checkZoom);
    };
  }, []);

  return (
    <div className="w-full fixed top-0 left-0 right-0 flex flex-row bg-white shadow-md z-10">
      <div className="w-full flex justify-between items-center px-6 py-6">
        {/* Logo and Title */}
        <div className="flex items-center gap-x-2">
          <BriefcaseBusiness size={50} />
          <button className="text-black text-2xl font-bold font-Manrope">
            <a href="/"><span className='text-yellow-600'>Kave</span><span className='text-black'>Job</span></a>
          </button>
        </div>

        {/* Navigation Links and Hamburger Menu Button */}
        {isMobile ? (
          <div className="flex items-center">
            {/* Hamburger Menu Button */}
            <button onClick={toggleMenu}>
              {menuOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        ) : isTablet ? (
          <>
            <div className="flex-1 flex justify-center items-center ml-24">
              {/* Navigation Links */}
              <ul className="flex gap-x-10">
                <li>
                  <a href="/" className="block px-4 py-2 hover:text-yellow-500 duration-300">Home</a>
                </li>
                <li>
                  <a href="/jobpage" className="block px-4 py-2 hover:text-yellow-500 duration-300">Job</a>
                </li>
                <li>
                  <a href="/aboutpage" className="block px-4 py-2 hover:text-yellow-500 duration-300">About</a>
                </li>
                <li>
                  <a href="/contactpage" className="block px-4 py-2 hover:text-yellow-500 duration-300">Contact</a>
                </li>
              </ul>
            </div>
            <div className="flex items-center">
              {/* Hamburger Menu Button */}
              <button onClick={toggleMenu}>
                {menuOpen ? <X size={30} /> : <Menu size={30} />}
              </button>
            </div>
          </>
        ) : (
          <div className="flex-1 flex justify-center items-center ml-20">
            {/* Navigation Links */}
            <ul className="flex gap-x-10">
              <li>
                <a href="/" className="block px-4 py-2 hover:text-yellow-500 duration-300">Home</a>
              </li>
              <li>
                <a href="/jobpage" className="block px-4 py-2 hover:text-yellow-500 duration-300">Job</a>
              </li>
              <li>
                <a href="/aboutpage" className="block px-4 py-2 hover:text-yellow-500 duration-300">About</a>
              </li>
              <li>
                <a href="/contactpage" className="block px-4 py-2 hover:text-yellow-500 duration-300">Contact</a>
              </li>
            </ul>
          </div>
        )}

        {/* Sign In and Sign Up Buttons */}
        {!isMobile && !isTablet && (
          <div className="flex items-center gap-x-5">
            <a className="bg-white text-black font-bold py-2 px-5 rounded hover:bg-yellow-600 hover:text-white duration-700"
               href='/loginpage'>Log In</a>
            <a className="bg-yellow-600 text-white font-bold py-2 px-5 rounded hover:bg-white hover:text-black duration-700"
               href='/signuppage'>Sign Up</a>
          </div>
        )}
      </div>

      {/* Dropdown Menu - Visible when hamburger menu is open */}
      {menuOpen && (
        <div className="absolute top-20 right-0 bg-white shadow-md p-5 flex flex-col gap-y-5 w-64 z-10">
        <ul>
          {isMobile && (
            <>
              <li className="hover:text-yellow-500 duration-300"><a href="/">Home</a></li>
              <li className="hover:text-yellow-500 duration-300"><a href="/jobpage">Job</a></li>
              <li className="hover:text-yellow-500 duration-300"><a href="/aboutpage">About</a></li>
              <li className="hover:text-yellow-500 duration-300"><a href="/contactpage">Contact</a></li>
              <li className="hover:text-yellow-500 duration-300"><a href="/loginpage">Log In</a></li>
              <li className="hover:text-yellow-500 duration-300"><a href="/signuppage">Sign Up</a></li>
            </>
          )}
          {isTablet && (
            <>
              <li className="hover:text-yellow-500 duration-300"><a href="/loginpage">Log In</a></li>
              <li className="hover:text-yellow-500 duration-300"><a href="/signuppage">Sign Up</a></li>
            </>
          )}
        </ul>
      </div>
      )}
    </div>
  );
}
