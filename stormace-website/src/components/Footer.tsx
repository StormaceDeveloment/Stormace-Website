import React from 'react';
import { FaGithub, FaLinkedin, FaArrowUp } from 'react-icons/fa';

const Footer: React.FC = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white py-8 px-6 overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-40 animate-gradient bg-gradient-to-r from-blue-700 via-purple-700 to-gray-900" />
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h4 className="text-xl font-semibold tracking-wide">Wesley Coomans</h4>
          <p className="text-sm text-gray-300">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
        <div className="flex gap-6 text-2xl mb-4 md:mb-0">
          <a
            href="https://github.com/StormaceDeveloment"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-transform transform hover:scale-125"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/wesley-coomans-9458a9177/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-transform transform hover:scale-125"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
        <button
          onClick={scrollToTop}
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-transform transform hover:scale-110 focus:outline-none"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;