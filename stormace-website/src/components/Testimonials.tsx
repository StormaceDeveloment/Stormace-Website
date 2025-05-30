import React from 'react';

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  avatar?: string;
};

const testimonials: Testimonial[] = [
  {
    name: 'Samantha Jones',
    role: 'CEO at FreshTech',
    quote:
      "Wesley's ability to turn complex specs into clean, scalable solutions blew us away. He’s our go-to developer.",
    avatar: '/assets/client1.jpg',
  },
  {
    name: 'David Kim',
    role: 'CTO at Nexus Labs',
    quote:
      'Excellent communication and outstanding technical skill. He delivered everything ahead of schedule.',
    avatar: '/assets/client2.jpg',
  },
  {
    name: 'Laura Smith',
    role: 'Product Designer at BrightPath',
    quote:
      'A great team player who writes elegant code and has a keen eye for design. Highly recommended!',
    avatar: '/assets/client3.jpg',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white px-6 text-gray-800" id="testimonials">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Testimonials</h2>
        <p className="text-gray-600 mb-12">
          Hear what my past clients and colleagues have to say.
        </p>

        <div className="grid gap-10 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <p className="text-sm text-gray-600 mb-6">“{t.quote}”</p>
              <div className="flex items-center gap-4">
                {t.avatar && (
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                )}
                <div className="text-left">
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
