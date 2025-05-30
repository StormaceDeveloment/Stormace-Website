import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center text-center px-4 relative overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-br from-blue-200 via-white to-purple-200 opacity-80"></div>
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 animate-fade-in-up">
          Hi, I'm Wesley
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8 animate-fade-in-up delay-200">
          Full-Stack Developer with a passion for building beautiful web experiences.
          Provide a fully customized experience for your users with my expertise in Front and Back-End Development.
        </p>
        <div className="flex justify-center gap-4 mb-8">
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 font-semibold px-6 py-3 rounded-lg transition !text-white transform hover:scale-105 shadow-lg"
          >
            Contact Me
          </a>
          <a
            href="#portfolio"
            className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:!text-white font-semibold px-6 py-3 rounded-lg transition transform hover:scale-105 shadow-lg"
          >
            View Work
          </a>
        </div>
        <div className="flex justify-center gap-6 text-6xl text-gray-700">
          <a href="https://github.com/StormaceDeveloment" target="_blank" rel="noreferrer">
            <FaGithub className="hover:text-black transition animate-float" />
          </a>
          <a href="https://linkedin.com/in/wesley-coomans-9458a9177/" target="_blank" rel="noreferrer">
            <FaLinkedin className="hover:text-blue-700 transition animate-float delay-200" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
