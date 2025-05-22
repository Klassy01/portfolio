import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const linkStyle =
    'relative text-white hover:text-cyan-400 transition duration-300 hover:after:w-full after:content-[""] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-300';

  return (
    <nav
      className={`fixed top-0 w-full z-10 transition-all duration-300 ${
        scrolled ? 'bg-gray-800 shadow-lg' : 'bg-transparent'
      }`}
      style={{
        backgroundColor: '#0a0a0a',
        backgroundImage:
          'repeating-linear-gradient(0deg, rgba(0,255,255,0.1), rgba(0,255,255,0.1) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, rgba(0,255,255,0.1), rgba(0,255,255,0.1) 1px, transparent 1px, transparent 40px)',
        backgroundSize: '40px 40px',
        backgroundBlendMode: 'screen',
      }}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-white">
          David Jayaraj
        </a>

        {/* Icon Button */}
        <div
          className="lg:hidden text-white text-3xl cursor-pointer"
          onClick={toggleMenu}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex space-x-8">
          <li>
            <a href="#home" className={linkStyle}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className={linkStyle}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" className={linkStyle}>
              Skills
            </a>
          </li>
          <li>
            <a href="#internships" className={linkStyle}>
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" className={linkStyle}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className={linkStyle}>
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="lg:hidden bg-gray-800 text-white px-6 py-4">
          <ul className="space-y-2">
            <li>
              <a
                href="#home"
                className="block py-2 hover:text-cyan-400 transition duration-300"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block py-2 hover:text-cyan-400 transition duration-300"
                onClick={() => setMenuOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="block py-2 hover:text-cyan-400 transition duration-300"
                onClick={() => setMenuOpen(false)}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#internships"
                className="block py-2 hover:text-cyan-400 transition duration-300"
                onClick={() => setMenuOpen(false)}
              >
                Internship
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="block py-2 hover:text-cyan-400 transition duration-300"
                onClick={() => setMenuOpen(false)}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block py-2 hover:text-cyan-400 transition duration-300"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
