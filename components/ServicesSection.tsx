
import React, { useState, useEffect } from 'react';

const SERVICES = [
  { 
    id: 'acalab', 
    name: 'acalab', 
    sub: "Construisons l'avenir ensemble. Formations professionnelles et encadrement académique d'excellence.", 
    youtubeId: 'eCDTp5h59hg',
    type: 'youtube'
  },
  { 
    id: 'tgpro', 
    name: 'maison TGpro', 
    sub: "Une seconde vie pour vos appareils. Maintenance experte électronique et informatique.", 
    youtubeId: 'M0FKp2y9JoA',
    type: 'youtube'
  },
];

const ServicesSection: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SERVICES.length);
    }, 12000); 
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="services" className="relative h-[80vh] md:h-[85vh] w-full overflow-hidden bg-[#000200]">
      {SERVICES.map((service, idx) => (
        <div 
          key={service.id}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          {/* Overlays pour la lisibilité du texte */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#000200]/60 via-transparent to-[#000200]/90 z-[2]" />
          <div className="absolute inset-0 bg-black/30 z-[1]" />

          {/* Background YouTube Immersif */}
          <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
            <iframe
              className="absolute top-1/2 left-1/2 w-[115%] h-[115%] -translate-x-1/2 -translate-y-1/2 object-cover scale-110 md:scale-125"
              src={`https://www.youtube.com/embed/${service.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${service.youtubeId}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1`}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title={service.name}
            ></iframe>
          </div>
          
          {/* Contenu textuel */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-[3] text-center px-6 md:px-12">
            <div className={`transition-all duration-1000 transform ${idx === current ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              
              {/* EXPLORE Stylisé */}
              <div className="mb-4">
                <span className="text-[12px] md:text-[14px] font-black uppercase tracking-[0.6em] text-[#00518B] bg-white/5 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 inline-block shadow-2xl">
                  EXPLORE
                </span>
              </div>

              {/* Nom du service */}
              <h2 className="text-[#FFFFFD] text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tighter uppercase max-w-5xl leading-tight drop-shadow-2xl">
                {service.name}
              </h2>

              {/* Description */}
              <p className="text-[#FFFFFD]/80 text-sm md:text-xl max-w-2xl font-light mb-12 leading-relaxed italic drop-shadow-lg">
                {service.sub}
              </p>

              {/* Bouton Premium */}
              <button className="group relative overflow-hidden bg-[#00518B] text-[#FFFFFD] px-14 py-5 rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(0,81,139,0.3)]">
                <span className="relative z-10 uppercase tracking-[0.2em] text-[10px] md:text-xs">Découvrir l'univers</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Pagination (Dots) */}
      <div className="absolute bottom-12 left-0 right-0 z-20 flex justify-center space-x-4">
        {SERVICES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`transition-all duration-700 rounded-full h-1.5 ${
              idx === current 
              ? 'bg-[#00518B] w-12' 
              : 'bg-white/20 w-3 hover:bg-white/40'
            }`}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>

      <style>{`
        /* Hack pour masquer les éléments UI de YouTube si possible */
        iframe {
          pointer-events: none;
          user-select: none;
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;
