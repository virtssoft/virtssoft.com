
import React, { useState, useEffect, useRef } from 'react';

const TEAM = [
  { name: 'John K. Biloto', role: 'Président & CEO', desc: 'Expertise en électronique et business, visionnaire de la souveraineté numérique.', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600' },
  { name: 'Elie K. Kaseya', role: 'Vice-Président & CTO', desc: 'Spécialiste IA et systèmes embarqués, garant de l\'excellence technique.', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600' },
  { name: 'Pascal N. Keynes', role: 'Administrateur & CFO', desc: 'Stratège financier dédié au développement industriel et à l\'investissement.', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600' },
  { name: 'Marie L. Mwaza', role: 'Dir. Médias & Com', desc: 'Ambassadrice de l\'image de marque et des relations institutionnelles.', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600' }
];

const DOMAINS = [
  { title: 'Intelligence Artificielle', icon: '🧠', desc: 'Algorithmes prédictifs et modèles souverains pour l\'industrie.' },
  { title: 'IoT & Connectivité', icon: '📡', desc: 'Écosystèmes intelligents et capteurs de pointe pour les infrastructures.' },
  { title: 'Logiciels & SaaS', icon: '💻', desc: 'Plateformes de gestion Cloud sécurisées et interfaces OneAccount.' },
  { title: 'Énergies Renouvelables', icon: '🌱', desc: 'Micro-éoliennes domestiques et solutions micro-grids durables.' },
  { title: 'Formation & R&D', icon: '🎓', desc: 'Accompagnement académique AcaLab et brevets technologiques.' }
];

const VALUES = [
  { title: 'Authenticité & Innovation', desc: 'Fidèles à nos clients en créant des solutions qui résonnent émotionnellement.' },
  { title: 'Qualité & Intégrité', desc: 'Normes élevées d\'excellence et éthique de travail rigoureuse.' },
  { title: 'Durabilité & Collaboration', desc: 'Pratiques respectueuses de l\'environnement et synergie de talents.' },
  { title: 'Orientation Client', desc: 'Compréhension profonde des besoins pour des solutions sur mesure.' }
];

const AboutPage: React.FC = () => {
  const [teamIndex, setTeamIndex] = useState(0);
  const teamRef = useRef<HTMLDivElement>(null);

  const handleNavigate = (h: string) => {
    window.location.hash = h;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Slider d'équipe automatique - Change toutes les 5 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setTeamIndex((prev) => (prev + 1) % TEAM.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (teamRef.current) {
      const container = teamRef.current;
      const card = container.children[teamIndex] as HTMLElement;
      if (card) {
        // Calcul du scroll pour centrer ou aligner selon le mode
        const scrollLeft = card.offsetLeft - (window.innerWidth < 768 ? 0 : 0);
        container.scrollTo({
          left: scrollLeft,
          behavior: 'smooth'
        });
      }
    }
  }, [teamIndex]);

  return (
    <div className="bg-[#FFFFFD]">
      {/* 1.1 Hero institutionnel */}
      <section className="relative h-[65vh] md:h-[85vh] bg-[#000200] overflow-hidden flex flex-col md:flex-row pt-[64px] md:pt-[74px]">
        <div className="absolute inset-0 bg-[#00518B]/50 z-10 mix-blend-multiply pointer-events-none" />
        
        <div className="w-full md:w-1/2 h-full flex flex-col justify-center px-8 md:px-20 relative z-20 text-center md:text-left order-2 md:order-1">
          <div className="max-w-[540px] animate-slideUp">
            <h1 className="text-white text-4xl md:text-7xl font-black tracking-tighter mb-6 uppercase leading-tight">
              À propos de Virtssoft Technologies
            </h1>
            <p className="text-white/80 text-xl md:text-3xl font-light italic leading-relaxed">
              Innovons ensemble, inspirons l’avenir.
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 h-[40%] md:h-full order-1 md:order-2 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600" 
            className="w-full h-full object-cover scale-105 animate-slowZoom" 
            alt="Virtssoft Headquarters" 
          />
        </div>
      </section>

      {/* 1.2 Informations sur l’entreprise */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div>
              <h2 className="text-[11px] font-black text-[#00518B] uppercase tracking-[0.4em] mb-4">Notre Mission</h2>
              <p className="text-xl md:text-2xl font-light text-[#000200] leading-relaxed italic border-l-4 border-[#00518B] pl-8">
                "Transformer la technologie en une force qui éveille les émotions et inspire l'avenir. Nous créons des connexions profondes et significatives avec ceux que nous servons."
              </p>
            </div>
            <div>
              <h2 className="text-[11px] font-black text-[#00518B] uppercase tracking-[0.4em] mb-4">Notre Vision</h2>
              <p className="text-lg md:text-xl font-light text-black/60 leading-relaxed">
                Devenir le phare de l'innovation technologique en RDC et à travers l'Afrique. Nous croyons que la technologie de demain doit apporter des moments de joie et d'inspiration pour construire un avenir plus humain.
              </p>
            </div>
          </div>
          <div className="bg-neutral-50 p-12 md:p-16 rounded-[48px] border border-black/5 flex flex-col justify-center">
            <h2 className="text-[11px] font-black text-[#00518B] uppercase tracking-[0.4em] mb-10">Informations Clés</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { label: 'Fondation', val: '2025' },
                { label: 'Siège Social', val: 'Goma, Nord-Kivu, RDC' },
                { label: 'Type', val: 'Corporation Tech' },
                { label: 'Secteurs Clés', val: 'IoT, IA, Énergie, SaaS' }
              ].map((info, i) => (
                <div key={i} className="border-b border-black/5 pb-6">
                  <p className="text-black/30 text-[10px] uppercase font-black tracking-widest mb-2">{info.label}</p>
                  <p className="text-xl font-bold text-[#000200]">{info.val}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 1.3 Direction (Slider 3 Desktop / 1 Mobile) */}
      <section className="py-24 bg-[#000200] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-[11px] font-black text-[#00518B] uppercase tracking-[0.5em] mb-4">Direction & Gouvernance</h2>
            <h3 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">Conseil d'Administration</h3>
          </div>
          <div className="flex gap-4">
            <button onClick={() => setTeamIndex((prev) => (prev - 1 + TEAM.length) % TEAM.length)} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
              &larr;
            </button>
            <button onClick={() => setTeamIndex((prev) => (prev + 1) % TEAM.length)} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
              &rarr;
            </button>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div 
            ref={teamRef}
            className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory px-6 md:px-0 gap-6"
          >
            {TEAM.map((m, i) => (
              <div 
                key={i} 
                className="flex-shrink-0 w-full md:w-[calc((100%/3)-(24px*2/3))] snap-center group"
              >
                <div className="bg-white/5 rounded-[40px] overflow-hidden border border-white/10 group-hover:border-[#00518B]/50 transition-all duration-700 flex flex-col h-full">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img src={m.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" alt={m.name} />
                  </div>
                  <div className="p-10">
                    <h4 className="text-2xl font-bold mb-1 tracking-tight">{m.name}</h4>
                    <p className="text-[#00518B] text-[10px] font-black uppercase tracking-widest mb-6">{m.role}</p>
                    <p className="text-white/40 text-sm font-light italic leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-3 mt-16">
          {TEAM.map((_, i) => (
            <button key={i} onClick={() => setTeamIndex(i)} className={`h-1.5 rounded-full transition-all duration-500 ${teamIndex === i ? 'bg-[#00518B] w-12' : 'bg-white/10 w-3'}`} />
          ))}
        </div>
      </section>

      {/* 1.4 Domaines d’activité */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-[11px] font-black text-[#00518B] uppercase tracking-[0.4em] mb-4">Nos Secteurs</h2>
          <h3 className="text-4xl md:text-6xl font-black text-[#000200] tracking-tighter">Domaines d'Activité</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DOMAINS.map((d, i) => (
            <div key={i} className="p-12 bg-neutral-50 rounded-[48px] border border-black/5 hover:bg-white hover:shadow-2xl transition-all duration-500 group">
              <div className="text-5xl mb-8 group-hover:scale-110 transition-transform">{d.icon}</div>
              <h4 className="text-xl font-bold mb-4 tracking-tight">{d.title}</h4>
              <p className="text-black/40 text-sm font-light italic leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 1.5 Image de marque (Valeurs) */}
      <section className="py-24 bg-[#00518B] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-[11px] font-black uppercase tracking-[0.5em] mb-20 text-center">Valeurs Fondamentales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
            {VALUES.map((v, i) => (
              <div key={i} className="space-y-6">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-xl font-black">0{i+1}</div>
                <h4 className="text-xl font-bold tracking-tight uppercase">{v.title}</h4>
                <p className="text-white/60 text-sm italic font-light leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 1.6 - 1.9 Sections Institutionnelles */}
      <section className="py-24 max-w-7xl mx-auto px-6 space-y-32">
        {/* Carrières & Investisseurs */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
          <div className="lg:col-span-1 bg-[#000200] p-12 rounded-[48px] text-white">
            <h3 className="text-3xl font-black mb-6 tracking-tighter">Carrières</h3>
            <p className="text-white/50 italic font-light mb-10">Rejoignez l'élite technologique et façonnez l'avenir à Goma ou Douala.</p>
            <button onClick={() => handleNavigate('#account')} className="text-[#00518B] font-black uppercase tracking-[0.2em] text-[10px] hover:text-white transition-colors">Postuler maintenant &rarr;</button>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-10 bg-neutral-50 rounded-[40px] border border-black/5">
              <h4 className="text-xl font-bold mb-3">Investisseurs</h4>
              <p className="text-sm text-black/40 italic font-light mb-8">Participez à l'expansion de la première startup souveraine d'Afrique Centrale.</p>
              <button className="text-[10px] font-black uppercase text-[#00518B] tracking-widest">Relations Investisseurs</button>
            </div>
            <div className="p-10 bg-neutral-50 rounded-[40px] border border-black/5">
              <h4 className="text-xl font-bold mb-3">Presse & Médias</h4>
              <p className="text-sm text-black/40 italic font-light mb-8">Accédez à nos communiqués officiels et kits média haute résolution.</p>
              <button onClick={() => handleNavigate('#media')} className="text-[10px] font-black uppercase text-[#00518B] tracking-widest">Espace Presse</button>
            </div>
          </div>
        </div>

        {/* Éthique */}
        <div className="pt-24 border-t border-black/5">
          <h2 className="text-center text-[11px] font-black text-[#000200]/20 uppercase tracking-[0.6em] mb-16">Engagement Éthique</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {['Protection des données', 'Innovation responsable', 'Impact social', 'Transparence'].map((e, i) => (
              <div key={i} className="text-center">
                <h4 className="text-sm font-black uppercase tracking-tight mb-2">{e}</h4>
                <div className="w-8 h-[1px] bg-[#00518B] mx-auto opacity-40" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes slowZoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
        .animate-slowZoom {
          animation: slowZoom 40s linear infinite alternate;
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default AboutPage;
