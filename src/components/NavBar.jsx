import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import logo from './../assets/Frame 298.png';
import arrow from './../assets/ic_round-arrow-drop-down.png';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Landing Animation
    gsap.fromTo(
      '.logo img',
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    );

    gsap.fromTo(
      '.menu-item',
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, delay: 0.5, ease: 'power2.out' }
    );

    gsap.fromTo(
      '.request-demo',
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, delay: 1, ease: 'elastic.out(1, 0.75)' }
    );
  }, []);

  return (
    <nav className="bg-[#E8E8E8] shadow-md">
      <div className="flex justify-between items-center py-4 px-6 md:px-32">
        {/* Logo Section */}
        <div className="logo flex items-center">
          <img src={logo} alt="Logo" className="h-1 md:h-7" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8">
          <li className="menu-item text-gray-700 hover:text-blue-700 cursor-pointer">
            Product
          </li>
          <li className="menu-item text-gray-700 hover:text-blue-700 cursor-pointer">
            Plans
          </li>
          <li className="menu-item flex items-center text-gray-700 hover:text-blue-700 cursor-pointer">
            <span>More</span>
            <img src={arrow} alt="Dropdown" className="ml-1 h-5 w-5" />
          </li>
        </ul>

        {/* Login & Button */}
        <div className="hidden md:flex items-center space-x-8">
          <h4 className="menu-item text-gray-700 hover:text-blue-700 cursor-pointer">
            Login
          </h4>
          <button className="request-demo bg-blue-700 text-white px-4 py-2 rounded-full hover:bg-blue-600">
            Request a Demo
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-100 border-t border-gray-300">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li className="text-gray-700 hover:text-blue-700 cursor-pointer">
              Product
            </li>
            <li className="text-gray-700 hover:text-blue-700 cursor-pointer">
              Plans
            </li>
            <li className="flex items-center text-gray-700 hover:text-blue-700 cursor-pointer">
              <span>More</span>
              <img src={arrow} alt="Dropdown" className="ml-1 h-5 w-5" />
            </li>
            <li className="text-gray-700 hover:text-blue-700 cursor-pointer">
              Login
            </li>
            <button className="bg-blue-700 text-white px-4 py-2 rounded-full hover:bg-blue-600">
              Request a Demo
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
