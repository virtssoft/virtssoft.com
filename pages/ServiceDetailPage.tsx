
import React from 'react';

const SERVICE_DATABASE: Record<string, any> = {
  'tgpro': {
    name: 'Maison TGPro',
    tagline: 'Maintenance d\'Excellence Electronique & Informatique',
    desc: 'Expertise certifiée pour redonner vie à vos équipements de pointe, des serveurs cloud aux stations de travail.',
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600'
  },
  'acalab': {
    name: 'AcaLab',
    tagline: 'Accompagnement Académique & Recherche',
    desc: 'Encadrement d\'excellence pour les étudiants et chercheurs en sciences et technologies avancées.',
    img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1600'
  },
  'cloud': {
    name: 'IA & Cloud Infrastructure',
    tagline: 'Puissance de calcul & Intelligence répartie',
    desc: 'Déployez vos applications sur notre infrastructure souveraine sécurisée, optimisée pour l\'intelligence artificielle générative.',
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600'
  }
};

const ServiceDetailPage: React.FC<{ id: string | null }> = ({ id }) => {
  const service = id ? SERVICE_DATABASE[id] : SERVICE_DATABASE['tgpro'];

  if (!service) {
    return (
      <div className="h-screen flex items-center justify-center bg-[#FFFFFD]">
        <div className="text-center">
          <p className="text-black/20 text-sm font-black uppercase tracking-[0.5em] mb-4">404 SERVICE</p>
          <h1 className="text-4xl font-black text-[#000200]">Service Introuvable</h1>
          <a href="#services" className="mt-8 inline-block text-[#00518B] font-bold">&larr; Retour aux services</a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FFFFFD]">
      <section className="relative h-[65vh] flex items-center justify-center bg-black overflow-hidden">
        <img 
          src={service.img} 
          className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105" 
          alt={service.name} 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-white text-5xl md:text-8xl font-black tracking-tighter mb-6 uppercase leading-none">{service.name}</h1>
          <p className="text-white/80 text-xl md:text-2xl font-light italic max-w-2xl mx-auto">{service.tagline}</p>
        </div>
      </section>

      <section className="py-32 max-w-5xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-[#00518B] font-black text-[10px] uppercase tracking-[0.5em] mb-6 block">NOTRE PROMESSE</span>
          <h2 className="text-4xl md:text-6xl font-black text-[#000200] tracking-tight leading-tight">Innovation & Précision.</h2>
        </div>

        <p className="text-black/60 text-xl md:text-3xl text-center leading-relaxed mb-24 italic font-light max-w-4xl mx-auto">
          "{service.desc}"
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24">
          {[
            { title: 'Précision', desc: 'Analyse et diagnostic de pointe.', icon: '🔍' },
            { title: 'Souveraineté', desc: 'Contrôle total sur vos infrastructures.', icon: '🛡️' },
            { title: 'Excellence', desc: 'Standards internationaux certifiés.', icon: '✅' },
            { title: 'Proximité', desc: 'Support local 24/7.', icon: '🏢' },
          ].map((item, idx) => (
            <div key={idx} className="p-12 bg-neutral-50 rounded-[48px] border border-black/5 hover:bg-white hover:shadow-2xl transition-all duration-500 group">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h4 className="font-bold text-2xl mb-3">{item.title}</h4>
              <p className="text-black/40 text-sm italic leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#000200] p-16 md:p-24 rounded-[64px] text-center text-white shadow-3xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[#00518B]/10 mix-blend-overlay" />
          <h3 className="text-4xl md:text-5xl font-black mb-8 relative z-10">Confiez-nous<br/>votre vision.</h3>
          <p className="mb-12 opacity-60 italic text-lg relative z-10">Nos experts Virtssoft vous répondent sous 24h.</p>
          <a href="#contact" className="relative z-10 inline-block bg-[#00518B] text-white px-16 py-6 rounded-full font-black uppercase text-xs tracking-widest hover:scale-105 transition-all shadow-xl">
            Lancer mon projet
          </a>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailPage;
