import React, { useRef, useEffect, useState } from 'react';
import CS2AnalyzerImage from '../assets/CS2Analyzer.png';
import BlazorImage from '../assets/Blazor.png'
import KinemationImage from '../assets/scr_6.png';

type Project = {
  title: string;
  description: string;
  image: string;
  github?: string;
  demo?: string;
};

const projects: Project[] = [
  {
    title: 'CS2 Analyzer AI',
    description: 'AI tool that provides feedback on CS:GO gameplay using video input and YOLO models.',
    image: CS2AnalyzerImage,
  },
  {
    title: 'Blazor Chat App',
    description: 'Omegle-style chat app using WebRTC, SignalR, and Blazor Server.',
    image: BlazorImage,
  },
  {
    title: 'Digital webshop',
    description: 'A webshop made in Blazor and .NET Framework with Stripe as the backbone for payments and an SQL database for data storage.',
    image: KinemationImage,
    demo: 'https://kinemation.com',
  },
];

const Portfolio: React.FC = () => {
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
    <section id="portfolio" className="py-24 px-6 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto text-center" ref={sectionRef}>
        <h2 className="text-4xl font-bold mb-4">My Projects</h2>
        <p className="text-gray-600 mb-4">
          I love building projects that solve real problems and push the boundaries of what’s possible with modern web technologies.
        </p>
        <p className="text-gray-500 mb-12">
          Here are a few things I've built recently. Each project is a unique challenge and a chance to learn something new.
        </p>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-gray-100 rounded-lg shadow-md hover:shadow-2xl hover:scale-105 transition transform duration-300 flex flex-col ${
                inView ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
              }`}
              style={{
                animationDelay: `${0.1 + index * 0.15}s`,
                animationFillMode: 'both',
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-md h-48 w-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 text-sm flex-grow">{project.description}</p>
              <div className="flex gap-4 mt-4">
                {project.github &&
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    GitHub
                  </a>
                }
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;