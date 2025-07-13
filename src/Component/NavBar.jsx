import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const linkClasses =
    "cursor-pointer border-2 border-purple-400 transition-transform hover:scale-105 hover:tracking-wide px-3.5 py-1.5 rounded-md";

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-white/5 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="text-2xl text-purple-500 border p-2.5 rounded-full font-bold italic">
          CP
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-base font-medium text-gray-100">
          <ScrollLink to="home" smooth={true} duration={500} className={linkClasses}>
            Home
          </ScrollLink>
          <ScrollLink to="about" smooth={true} duration={500} className={linkClasses}>
            About
          </ScrollLink>
          <ScrollLink to="projects" smooth={true} duration={500} className={linkClasses}>
            Projects
          </ScrollLink>
          <ScrollLink to="resume" smooth={true} duration={500} className={linkClasses}>
            Resume
          </ScrollLink>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden text-white text-2xl cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center gap-4 py-4 bg-[#1a1a1a] text-white font-medium text-base">
          <ScrollLink to="home" smooth={true} duration={500} onClick={toggleMenu} className="hover:text-purple-400">
            Home
          </ScrollLink>
          <ScrollLink to="about" smooth={true} duration={500} onClick={toggleMenu} className="hover:text-purple-400">
            About
          </ScrollLink>
          <ScrollLink to="projects" smooth={true} duration={500} onClick={toggleMenu} className="hover:text-purple-400">
            Projects
          </ScrollLink>
          <ScrollLink to="resume" smooth={true} duration={500} onClick={toggleMenu} className="hover:text-purple-400">
            Resume
          </ScrollLink>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
