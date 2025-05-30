import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-screen bg-gradient-to-b from-white via-gray-100 to-white flex items-center justify-center text-center px-4"
    >
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
          Hi, I'm Wesley
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8">
          Full-Stack Developer with a passion for building beautiful web experiences.
        </p>
        <div className="flex justify-center gap-4 mb-8">
            <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 font-semibold px-6 py-3 rounded-lg transition !text-white"
            >
            Contact Me
            </a>
            <a
            href="#portfolio"
            className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:!text-white font-semibold px-6 py-3 rounded-lg transition"
            >
            View Work
            </a>
        </div>
        <div className="flex justify-center gap-6 text-2xl text-gray-700">
          <a href="https://github.com/yourprofile" target="_blank" rel="noreferrer">
            <FaGithub className="hover:text-black transition" />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">
            <FaLinkedin className="hover:text-blue-700 transition" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
