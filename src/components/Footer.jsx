// src/components/Footer.jsx

import React from 'react';

const Footer = () => {
  return (
    <footer
      className="text-white py-6 px-4 border-t border-gray-800"
      style={{
        background: `
          radial-gradient(circle at 20% 30%, rgba(255, 0, 100, 0.15), transparent 40%),
          radial-gradient(circle at 80% 70%, rgba(0, 255, 200, 0.15), transparent 40%),
          radial-gradient(circle at 50% 50%, rgba(0, 100, 255, 0.1), transparent 50%),
          #000000
        `,
        backgroundBlendMode: 'screen',
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
        {/* Left side */}
        <div className="mb-2 md:mb-0 font-semibold">
          David Jayaraj
        </div>
        {/* Right side */}
        <div className="text-gray-400">
          © 2025 David Jayaraj. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
