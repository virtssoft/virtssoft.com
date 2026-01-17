
import React from 'react';

const InnovationPage: React.FC = () => {
  return (
    <div className="bg-[#000200] min-h-screen text-white">
      {/* Hero */}
      <section className="h-[80vh] flex items-center justify-center relative overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=1600" 
          className="absolute inset-0 w-full h-full object-cover opacity-40 scale-110" 
          alt="R&D Lab" 
        />
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/80 z-[1]" />
        <div className="relative z-10 text-center max-w-4xl px-6">
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-8 leading-none">RECHERCHE &<br/>AVENIR</h1>
          <p className="text-white/60 text-lg md:text-2xl font-light italic">
            "Le futur ne se prédit pas, il se code ici même."
          </p>
        </div>
      </section>

      {/* Présentation R&D */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        <div>
          <h2 className="text-4xl font-bold mb-8 tracking-tight">Nos Laboratoires Virtssoft Labs</h2>
          <p className="text-white/70 text-lg leading-relaxed mb-10">
            Nous concentrons les meilleurs ingénieurs en robotique, IA et thermodynamique pour concevoir les brevets de demain. Nos centres de recherche collaborent avec les plus grandes universités mondiales pour repousser les limites de la technologie embarquée.
          </p>
          <div className="space-y-8">
            {['IA Générative Edge', 'Stockage Énergétique Quantum', 'Bio-IoT Intégré'].map((item, idx) => (
              <div key={idx} className="flex items-center space-x-6 border-l-4 border-[#00518B] pl-8 py-3 bg-white/5 rounded-r-2xl">
                <span className="font-bold text-2xl md:text-3xl tracking-tight">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8">
          {[
            { tag: 'PROTOTYPE v.4.0', title: 'Eolis Park Connecté', status: 'Tests finaux à 95%', img: 'https://images.unsplash.com/photo-1466611653911-95282fc3656b?auto=format&fit=crop&q=80&w=800' },
            { tag: 'BREVET DÉPOSÉ', title: 'NGL Core Engine', status: 'Validation Q4 2024', img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800' }
          ].map((item, i) => (
            <div key={i} className="group relative h-[300px] rounded-[32px] overflow-hidden border border-white/10">
              <img src={item.img} className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-all duration-700" alt={item.title} />
              <div className="absolute inset-0 bg-black/60 p-10 flex flex-col justify-end">
                <span className="text-[#00518B] font-black text-xs uppercase tracking-[0.4em] mb-4 block">{item.tag}</span>
                <h3 className="text-3xl font-bold mb-2">{item.title}</h3>
                <p className="text-white/50 text-sm font-light italic">{item.status}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Recrutement */}
      <section className="py-32 bg-[#00518B] text-center overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold mb-10 tracking-tight">Prêt à hacker le futur ?</h2>
          <p className="text-xl mb-12 opacity-80 font-light">Nous recherchons des génies pour nos labos de Douala et Paris.</p>
          <button className="bg-white text-[#00518B] px-16 py-5 rounded-full font-black uppercase text-sm tracking-[0.2em] hover:scale-110 transition-all shadow-2xl">
            Rejoindre l'équipe R&D
          </button>
        </div>
      </section>
    </div>
  );
};

export default InnovationPage;
