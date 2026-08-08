import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navItems, personalInfo } from '../utils/constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-panel/90 backdrop-blur-xl border-b border-glass-border shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 md:h-16">
          {/* Logo */}
          <motion.div
            className="font-mono text-lg md:text-xl font-bold cursor-pointer text-cyan-bright"
            whileHover={{ scale: 1.03 }}
            onClick={() => scrollToSection('#home')}
          >
            <span className="text-term-green">▸ </span>
            <span className="gradient-text">{personalInfo.name}</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              const termPath = `~/${item.href.substring(1)}`;
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`font-mono text-xs lg:text-sm px-3 py-1.5 rounded-md transition-all duration-300 relative ${
                    isActive
                      ? 'text-term-green bg-term-green/10'
                      : 'text-text-secondary hover:text-text-primary hover:bg-cyan-bright/5'
                  }`}
                >
                  {termPath}
                  {isActive && (
                    <span className="absolute -bottom-0.5 left-3 right-3 h-[2px] bg-term-green rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-text-primary p-2 hover:bg-cyan-bright/10 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, y: -10 }}
        animate={isMobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
      >
        <div className="px-4 pt-2 pb-4 space-y-1 bg-panel/95 backdrop-blur-xl border-t border-glass-border">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left px-4 py-2.5 rounded-lg font-mono text-sm transition-all duration-300 ${
                  isActive
                    ? 'bg-term-green/10 text-term-green'
                    : 'text-text-secondary hover:bg-cyan-bright/5 hover:text-text-primary'
                }`}
              >
                <span className="text-text-mono-dim">~/</span>{item.href.substring(1)}
              </button>
            );
          })}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
