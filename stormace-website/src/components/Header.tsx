import React, { useState } from 'react';

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, any> }) => void;
  }
}

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleContactClick = () => {
    if (window.plausible) {
      window.plausible('Contact');
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="text-2xl font-bold text-gray-800">Stormace</div>
        {/* Hamburger button for mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 focus:outline-none"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {/* Hamburger SVG icon */}
          <svg
            className={`w-6 h-6 absolute transition-opacity duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <span className={`block h-1 w-6 bg-gray-800 rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block h-1 w-6 bg-gray-800 rounded my-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block h-1 w-6 bg-gray-800 rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
        {/* Desktop nav */}
        <nav className="space-x-6 text-gray-700 font-medium hidden md:block">
          <a href="#about" className="hover:text-blue-500">About</a>
          <a href="#services" className="hover:text-blue-500">Services</a>
          <a href="#portfolio" className="hover:text-blue-500">Portfolio</a>
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 font-semibold px-6 py-3 rounded-lg transition !text-white transform hover:scale-105 shadow-lg"
            onClick={handleContactClick}
          >
            Contact Me
          </a>
        </nav>
      </div>
      {/* Mobile nav */}
      {menuOpen && (
        <nav className="md:hidden bg-white shadow px-6 py-4 space-y-4 text-gray-700 font-medium">
          <a href="#about" className="block hover:text-blue-500" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#services" className="block hover:text-blue-500" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#portfolio" className="block hover:text-blue-500" onClick={() => setMenuOpen(false)}>Portfolio</a>
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 font-semibold px-6 py-3 rounded-lg transition !text-white transform hover:scale-105 shadow-lg block"
            onClick={() => {
              handleContactClick();
              setMenuOpen(false);
            }}
          >
            Contact Me
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
