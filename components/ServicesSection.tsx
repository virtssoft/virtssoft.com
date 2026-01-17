
import React, { useState, useEffect } from 'react';

const SERVICES = [
  { 
    id: 'acalab', 
    name: 'acalab', 
    sub: "Construisons l'avenir ensemble. Formations professionnelles et encadrement académique d'excellence.", 
    bg: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1600',
    type: 'image'
  },
  { 
    id: 'tgpro', 
    name: 'maison TGpro', 
    sub: "Une seconde vie pour vos appareils. Maintenance experte électronique et informatique.", 
    video: 'https://cdn.pixabay.com/video/2016/01/19/1892-152207908_medium.mp4', 
    type: 'video'
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
    <section id="services" className="relative h-[80vh] md:h-[85vh] w-full overflow-hidden bg-[#000200]">
      {SERVICES.map((service, idx) => (
        <div 
          key={service.id}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#000200]/50 via-transparent to-[#000200]/80 z-[2]" />
          <div className="absolute inset-0 bg-[#000200]/20 z-[1]" />

          {/* Background */}
          {service.type === 'video' ? (
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="w-full h-full object-cover"
            >
              <source src={service.video} type="video/mp4" />
            </video>
          ) : (
            <img 
              src={service.bg} 
              alt={service.name} 
              className="w-full h-full object-cover" 
            />
          )}
          
          {/* Contenu textuel */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-[3] text-center px-6 md:px-12">
            <div className={`transition-all duration-1000 transform ${idx === current ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              
              {/* EXPLORE Stylisé */}
              <div className="mb-3">
                <span className="text-[14px] md:text-[16px] font-black uppercase tracking-[0.5em] text-[#00518B] drop-shadow-md inline-block border-b-2 border-[#00518B] pb-1">
                  EXPLORE
                </span>
              </div>

              {/* Nom du service - Taille réduite */}
              <h2 className="text-[#FFFFFD] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight uppercase max-w-4xl leading-tight drop-shadow-xl">
                {service.name}
              </h2>

              {/* Description - Réduite */}
              <p className="text-[#FFFFFD]/90 text-sm md:text-lg max-w-xl font-light mb-10 leading-relaxed italic">
                {service.sub}
              </p>

              {/* Bouton */}
              <button className="group relative overflow-hidden bg-[#00518B] text-[#FFFFFD] px-12 py-4 rounded-full font-semibold transition-all hover:scale-105 active:scale-95 shadow-xl">
                <span className="relative z-10 uppercase tracking-[0.15em] text-xs">En savoir plus</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Pagination par points (dots) */}
      <div className="absolute bottom-12 left-0 right-0 z-20 flex justify-center space-x-3">
        {SERVICES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`transition-all duration-500 rounded-full ${
              idx === current 
              ? 'bg-[#00518B] w-8 h-2' 
              : 'bg-white/20 w-2 h-2 hover:bg-white/40'
            }`}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>

      <style>{`
        @keyframes subtleZoom {
          from { transform: scale(1); }
          to { transform: scale(1.15); }
        }
        .opacity-100 img, .opacity-100 video {
          animation: subtleZoom 25s linear infinite alternate;
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;
