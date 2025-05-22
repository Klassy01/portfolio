import React from 'react';

const Footer = () => {
  return (
    <footer
      className="text-white py-6 px-4 border-t border-gray-800"
      style={{
  backgroundColor: '#0a0a0a',
  backgroundImage:
    'repeating-linear-gradient(0deg, rgba(0,255,255,0.1), rgba(0,255,255,0.1) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, rgba(0,255,255,0.1), rgba(0,255,255,0.1) 1px, transparent 1px, transparent 40px)',
  backgroundSize: '40px 40px',
}} 
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
        {/* Left side: your name */}
        <div className="mb-2 md:mb-0 font-semibold">David Jayaraj A</div>

        {/* Right side: copyright */}
        <div className="text-gray-400">© 2025 David Jayaraj. All Rights Reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
