import React, { useRef, useEffect, useState } from 'react';

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating: number;
  avatar?: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Private User",
    role: "Indonesia",
    quote: "Great professional of seller, recommend to solve the problems",
    rating: 5
  },
  {
    name: "Private User",
    role: "Philippines",
    quote: "Workmanship was great. He went beyond what he was asked to do which is great. Very accommodating and works fast. I really recommend him and for sure will work with him again. Thank you!",
    rating: 5
  },
  {
    name: "Private User",
    role: "India",
    quote: "Delivered as promised, Awesome knowledge about multiplayer stuff like matchmaking. He is also good in UE. I will like to work with him again. Only disadvantage for me was our timezone other than that everything is fine.",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
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
    <section className="py-24 bg-white px-6 text-gray-800" id="testimonials">
      <div className="max-w-5xl mx-auto text-center" ref={sectionRef}>
        <h2 className="text-4xl font-bold mb-4">Testimonials</h2>
        <p className="text-gray-600 mb-12">
          Hear what my past clients and colleagues have to say.
        </p>

        <div className="grid gap-10 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className={`bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-lg hover:scale-105 transition transform duration-300 flex flex-col justify-between h-full ${
                inView ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
              }`}
              style={{
                minHeight: 300,
                animationDelay: `${0.1 + index * 0.15}s`,
                animationFillMode: 'both',
              }}
            >
              <p className="text-sm text-gray-600 mb-6 text-left flex-1">“{t.quote}”</p>
              <div className="flex items-end justify-start gap-4 mt-auto">
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
                  <div className="flex items-center mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${i < t.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.197-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
                      </svg>
                    ))}
                  </div>
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