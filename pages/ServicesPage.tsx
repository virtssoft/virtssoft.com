
import React from 'react';

const SERVICES_LIST = [
  { 
    id: 'acalab', 
    name: 'Acalab', 
    desc: "Formations professionnelles et encadrement académique d'excellence pour les futurs leaders de la tech.", 
    img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1600' 
  },
  { 
    id: 'tgpro', 
    name: 'Maison TGpro', 
    desc: "Expertise en maintenance électronique et informatique. Redonnez vie à vos équipements de pointe.", 
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600' 
  },
  { 
    id: 'cloud', 
    name: 'IA & Cloud', 
    desc: "Solutions d'infrastructure sur mesure pour une transformation numérique agile et sécurisée.", 
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600' 
  },
];

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-[#FFFFFD]">
      {/* Hero Video Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-black overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-60">
          <source src="https://cdn.pixabay.com/video/2016/01/19/1892-152207908_medium.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-[1]" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-white text-6xl md:text-9xl font-bold tracking-tighter mb-6 uppercase">Nos Services</h1>
          <p className="text-white/80 text-xl md:text-2xl font-light italic max-w-2xl mx-auto">
            "Explorer les limites du possible pour servir votre ambition."
          </p>
        </div>
      </section>

      {/* Services Immersifs */}
      <section className="py-24 max-w-7xl mx-auto px-6 space-y-24">
        {SERVICES_LIST.map((service, idx) => (
          <div key={service.id} className={`flex flex-col lg:flex-row items-center gap-16 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
            <div className="w-full lg:w-1/2 rounded-[40px] overflow-hidden shadow-2xl group">
              <img src={service.img} alt={service.name} className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-[2000ms]" />
            </div>
            <div className="w-full lg:w-1/2">
              <span className="text-[14px] font-black uppercase tracking-[0.5em] text-[#00518B] mb-4 block">EXPLORE</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">{service.name}</h2>
              <p className="text-black/60 text-lg leading-relaxed mb-10 italic">{service.desc}</p>
              <button className="bg-black text-white px-12 py-4 rounded-full font-bold hover:bg-[#00518B] transition-all shadow-xl">
                En savoir plus
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-[#00518B] text-white text-center">
        <h2 className="text-4xl font-bold mb-8">Un projet spécifique ?</h2>
        <a href="#contact" className="inline-block bg-white text-[#00518B] px-16 py-5 rounded-full font-black uppercase text-xs tracking-widest hover:scale-105 transition-all">
          Demander un devis personnalisé
        </a>
      </section>
    </div>
  );
};

export default ServicesPage;
