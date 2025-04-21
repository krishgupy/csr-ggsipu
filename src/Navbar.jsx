import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="relative font-poppins">
        {/* Navbar */}
        <nav
          className={`${
            isScrolled
              ? 'fixed top-5 left-1/2 transform -translate-x-1/2 z-50 bg-[#D9F0DF] rounded-full drop-shadow-xl transition-all duration-500'
              : 'absolute top-0 left-0 w-full z-50 bg-transparent'
          } flex items-center justify-between space-x-1 sm:space-x-2 text-[10px] sm:text-sm md:text-xl lg:text-2xl text-[#232E26] font-black md:font-black px-1 sm:px-2 md:px-10 lg:px-14`}
        >
          {/* Logo, only visible when not scrolled */}
          {!isScrolled && (
            <img
              alt="csr logo"
              loading="lazy"
              width="50"
              height="50"
              className="h-8 sm:h-14 md:h-16 lg:h-20 py-0.5 w-auto bg-transparent"
              src="LOGO.png"
            />
          )}

          {/* Links */}
          <div
            className={`flex items-center justify-center space-x-1 sm:space-x-2 md:space-x-3 text-[10px] sm:text-sm md:text-xl lg:text-2xl font-normal hover:bg-[#D9F0DF] rounded-full py-0.5 px-0.5 sm:py-1 sm:px-2 md:py-1.5 md:px-3 md:gap-2 lg:gap-6 hover:text-green-950 font-font3 ${
              isScrolled ? 'w-auto' : ''
            }`}
          >
            <a href="#home" className="cursor-pointer hover:bg-green-800 px-1 py-0.5 sm:px-2 sm:py-1 md:px-4 rounded-full hover:text-white active">
              Home
            </a>
            <a href="#about" className="cursor-pointer hover:bg-green-800 px-1 py-0.5 sm:px-2 sm:py-1 md:px-4 rounded-full hover:text-white">
              About
            </a>
            <a href="#events" className="cursor-pointer hover:bg-green-800 px-1 py-0.5 sm:px-2 sm:py-1 md:px-4 rounded-full hover:text-white">
              Events
            </a>
            <a href="#team" className="cursor-pointer hover:bg-green-800 px-1 py-0.5 sm:px-2 sm:py-1 md:px-4 rounded-full hover:text-white">
              Team
            </a>
            <a href="#contact" className="cursor-pointer hover:bg-green-800 px-1 py-0.5 sm:px-2 sm:py-1 md:px-4 rounded-full hover:text-white">
              Contact
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;