import React from 'react';
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
  return (
    <section id="services" className="py-24 bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">What I Do</h2>
        <p className="text-gray-600 text-lg mb-12">
          I help businesses and individuals turn ideas into working digital products.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md p-8 rounded-lg hover:shadow-xl transition"
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
