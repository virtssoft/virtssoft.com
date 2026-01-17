
import React, { useState, useEffect } from 'react';

const SERVICES = [
  { 
    id: 'acalab', 
    name: 'acalab', 
    sub: "Construisons l'avenir ensemble. Formations professionnelles et encadrement académique d'excellence.", 
    video: 'https://cdn.pixabay.com/video/2021/04/12/70860-536965611_medium.mp4'
  },
  { 
    id: 'tgpro', 
    name: 'maison TGpro', 
    sub: "Une seconde vie pour vos appareils. Maintenance experte électronique et informatique.", 
    video: 'https://cdn.pixabay.com/video/2016/11/04/6303-190692751_medium.mp4'
  },
];

const ServicesSection: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SERVICES.length);
    }, 10000); 
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="services" className="relative h-[90vh] w-full overflow-hidden bg-[#000200]">
      {SERVICES.map((service, idx) => (
        <div 
          key={service.id}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          {/* Overlays pour contraste */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#000200]/70 via-transparent to-[#000200]/90 z-[2]" />
          <div className="absolute inset-0 bg-[#00518B]/10 mix-blend-overlay z-[2]" />
          
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            key={service.video}
            className={`w-full h-full object-cover transition-transform duration-[12000ms] ${idx === current ? 'scale-110' : 'scale-100'}`}
          >
            <source src={service.video} type="video/mp4" />
          </video>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center z-[3] text-center px-6 md:px-12">
            <div className={`transition-all duration-1000 transform ${idx === current ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="mb-6">
                <span className="text-[11px] md:text-[13px] font-black uppercase tracking-[0.5em] text-[#FFFFFD] bg-[#00518B]/80 backdrop-blur-xl px-6 py-2.5 rounded-full border border-white/10 inline-block shadow-2xl">
                  DÉCOUVRIR L'UNIVERS
                </span>
              </div>

              <h2 className="text-[#FFFFFD] text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter uppercase max-w-5xl leading-[0.9] drop-shadow-2xl">
                {service.name}
              </h2>

              <p className="text-[#FFFFFD]/90 text-sm md:text-xl max-w-2xl font-light mb-12 leading-relaxed italic drop-shadow-md">
                {service.sub}
              </p>

              <button className="group relative overflow-hidden bg-[#FFFFFD] text-[#000200] px-16 py-5 rounded-full font-black transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                <span className="relative z-10 uppercase tracking-[0.2em] text-[10px] md:text-xs">Explorer maintenant</span>
                <div className="absolute inset-0 bg-[#00518B] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <style>{`.group:hover span { color: #FFFFFD; transition: color 0.3s; }`}</style>
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Indicateurs de progression */}
      <div className="absolute bottom-16 left-0 right-0 z-20 flex justify-center space-x-6">
        {SERVICES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className="group relative py-4"
          >
            <div className={`h-[3px] rounded-full transition-all duration-700 ${
              idx === current ? 'bg-[#00518B] w-16' : 'bg-white/30 w-8 hover:bg-white/50'
            }`} />
            <span className={`absolute -top-4 left-1/2 -translate-x-1/2 text-[10px] font-black text-white/40 transition-opacity duration-300 ${idx === current ? 'opacity-100' : 'opacity-0'}`}>
              0{idx + 1}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
