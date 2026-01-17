
import React from 'react';

const RDSection: React.FC = () => {
  return (
    <section id="innovation" className="relative py-24 md:py-32 overflow-hidden bg-[#000200]">
      {/* Background Image */}
      <img 
        src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1600" 
        alt="Engineering Lab" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Overlay: Blue radial gradient (30% at edges, 0% at center) */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle, rgba(0,81,139,0) 0%, rgba(0,81,139,0.3) 100%)'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-[#FFFFFD] text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 drop-shadow-lg">
          Rejoignez le futur de la technologie.
        </h2>
        <p className="text-[#FFFFFD]/90 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
          Notre laboratoire de R&D recherche constamment les esprits les plus brillants pour relever les défis de l'IA et de l'énergie de demain.
        </p>
        <button className="bg-[#FFFFFD] text-[#00518B] px-14 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all active:scale-95 shadow-2xl">
          Nous rejoindre
        </button>
      </div>
    </section>
  );
};

export default RDSection;
