import React from 'react';
import profileImg from '../assets/profile.jpeg';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white text-gray-800 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">
        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src={profileImg}
            alt="Profile"
            className="w-60 h-60 rounded-full object-cover shadow-lg"
          />
        </div>

        {/* Text Content */}
        <div>
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg leading-relaxed mb-6">
            I'm a passionate Full-Stack Developer based in the Netherlands, with experience in building responsive web apps using React, TypeScript, and .NET. I love turning complex problems into elegant, scalable solutions.
          </p>
          <h3 className="text-xl font-semibold mb-2">Tech Stack:</h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm text-gray-700">
            <li className="bg-gray-100 px-3 py-2 rounded">React</li>
            <li className="bg-gray-100 px-3 py-2 rounded">TypeScript</li>
            <li className="bg-gray-100 px-3 py-2 rounded">Tailwind CSS</li>
            <li className="bg-gray-100 px-3 py-2 rounded">.NET</li>
            <li className="bg-gray-100 px-3 py-2 rounded">SQL Server</li>
            <li className="bg-gray-100 px-3 py-2 rounded">Blazor</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
