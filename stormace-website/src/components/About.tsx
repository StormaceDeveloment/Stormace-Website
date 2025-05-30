import React, { useRef, useEffect, useState } from 'react';
import profileImg from '../assets/profile.jpeg';

const techStack = [
  'React',
  'TypeScript',
  'Tailwind CSS',
  '.NET',
  'SQL Server',
  'Blazor',
];

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // Stop observing after first trigger
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 bg-white text-gray-800 px-6">
      <div ref={sectionRef} className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">
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
            {techStack.map((tech, i) => (
              <li
                key={tech}
                className={`bg-gray-100 px-3 py-2 rounded transition-all duration-700 ${
                  inView ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  animationDelay: `${0.1 + i * 0.1}s`,
                  animationFillMode: 'both',
                }}
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
