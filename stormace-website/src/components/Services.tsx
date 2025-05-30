import React, { useRef, useEffect, useState } from 'react';
import { FaCode, FaServer, FaMobileAlt } from 'react-icons/fa';

const services = [
  {
    icon: <FaCode className="text-4xl text-blue-600 mb-4" />,
    title: 'Frontend Development',
    desc: 'Building responsive and performant interfaces using React, TypeScript, and modern frameworks.',
  },
  {
    icon: <FaServer className="text-4xl text-blue-600 mb-4" />,
    title: 'Backend Development',
    desc: 'Designing and implementing APIs, databases, and authentication systems with .NET and SQL Server.',
  },
  {
    icon: <FaMobileAlt className="text-4xl text-blue-600 mb-4" />,
    title: 'Cross-Platform Apps',
    desc: 'Creating web apps that run smoothly on both desktop and mobile devices using Blazor and PWA standards.',
  },
];

const Services: React.FC = () => {
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
    <section id="services" className="py-24 bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto text-center" ref={sectionRef}>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">What I Do</h2>
        <p className="text-gray-600 text-lg mb-4">
          I help businesses and individuals turn ideas into working digital products.
        </p>
        <p className="text-gray-500 mb-12">
          My approach combines modern technologies, clean code, and a focus on user experience. I believe in transparent communication and delivering solutions that scale with your needs.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`bg-white shadow-md p-8 rounded-lg hover:shadow-2xl hover:scale-105 transition transform duration-300 ${
                inView ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
              }`}
              style={{
                animationDelay: `${0.1 + idx * 0.15}s`,
                animationFillMode: 'both',
              }}
            >
              {service.icon}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;