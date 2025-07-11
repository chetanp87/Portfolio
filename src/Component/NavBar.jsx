import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for menu toggle

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

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
          <Link
            to="/"
            className="cursor-pointer border-2 border-purple-400 transition-transform hover:scale-105 hover:tracking-wide px-3.5 py-1.5 rounded-md"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="cursor-pointer border-2 border-purple-400 transition-transform hover:scale-105 hover:tracking-wide px-3.5 py-1.5 rounded-md"
          >
            About
          </Link>
          <Link
            to="/projects"
            className="cursor-pointer border-2 border-purple-400 transition-transform hover:scale-105 hover:tracking-wide px-3.5 py-1.5 rounded-md"
          >
            Projects
          </Link>
          <Link
            to="/resume"
            className="cursor-pointer border-2 border-purple-400 transition-transform hover:scale-105 hover:tracking-wide px-3.5 py-1.5 rounded-md"
          >
            Resume
          </Link>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden text-white text-2xl cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center gap-4 py-4 bg-[#1a1a1a] text-white font-medium text-base">
          <Link to="/" onClick={toggleMenu} className="hover:text-purple-400">
            Home
          </Link>
          <Link to="/about" onClick={toggleMenu} className="hover:text-purple-400">
            About
          </Link>
          <Link to="/projects" onClick={toggleMenu} className="hover:text-purple-400">
            Projects
          </Link>
          <Link to="/resume" onClick={toggleMenu} className="hover:text-purple-400">
            Resume
          </Link>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
