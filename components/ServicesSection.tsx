
import React, { useState, useEffect } from 'react';

const SERVICES = [
  { 
    id: 'acalab', 
    name: 'acalab', 
    sub: "Construisons l'avenir ensemble. Formations professionnelles et encadrement académique d'excellence.", 
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1600'
  },
  { 
    id: 'tgpro', 
    name: 'maison TGpro', 
    sub: "Une seconde vie pour vos appareils. Maintenance experte électronique et informatique.", 
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600'
  },
];

const ServicesSection: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SERVICES.length);
    }, 8000); 
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="services" className="relative h-[80vh] md:h-[85vh] w-full overflow-hidden bg-[#000200]">
      {SERVICES.map((service, idx) => (
        <div 
          key={service.id}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#000200]/60 via-transparent to-[#000200]/90 z-[2]" />
          
          <img 
            src={service.image} 
            alt={service.name} 
            className={`w-full h-full object-cover transition-transform duration-[10000ms] ${idx === current ? 'scale-110' : 'scale-100'}`}
          />
          
          <div className="absolute inset-0 flex flex-col items-center justify-center z-[3] text-center px-6 md:px-12">
            <div className={`transition-all duration-1000 transform ${idx === current ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="mb-4">
                <span className="text-[12px] md:text-[14px] font-black uppercase tracking-[0.6em] text-[#00518B] bg-white/5 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 inline-block">
                  EXPLORE
                </span>
              </div>

              <h2 className="text-[#FFFFFD] text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tighter uppercase max-w-5xl leading-tight">
                {service.name}
              </h2>

              <p className="text-[#FFFFFD]/80 text-sm md:text-xl max-w-2xl font-light mb-12 leading-relaxed italic">
                {service.sub}
              </p>

              <button className="group relative overflow-hidden bg-[#00518B] text-[#FFFFFD] px-14 py-5 rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-xl">
                <span className="relative z-10 uppercase tracking-[0.2em] text-[10px] md:text-xs">Découvrir l'univers</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-12 left-0 right-0 z-20 flex justify-center space-x-4">
        {SERVICES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`transition-all duration-700 rounded-full h-1.5 ${
              idx === current ? 'bg-[#00518B] w-12' : 'bg-white/20 w-3 hover:bg-white/40'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
