
import React from 'react';

const SOFTWARES = [
  { id: 1, name: 'Virtss Cloud', desc: 'Infrastructures cloud haute disponibilité pour entreprises.', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800' },
  { id: 2, name: 'Security Shield', desc: 'Protection IA temps réel contre les cyber-menaces.', img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800' },
  { id: 3, name: 'DevOps Flow', desc: 'Automatisation complète de vos pipelines CI/CD.', img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800' },
];

const ITPage: React.FC = () => {
  return (
    <div className="bg-[#000200] min-h-screen text-white">
      {/* Hero */}
      <section className="py-24 md:py-32 text-center px-6">
        <h1 className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter">Software & IA</h1>
        <p className="text-white/60 text-lg md:text-2xl max-w-2xl mx-auto italic font-light">
          L'intelligence logicielle au service de la performance métier.
        </p>
      </section>

      {/* Grid Software */}
      <section className="max-w-7xl mx-auto px-6 pb-24 grid gap-12">
        {SOFTWARES.map((sw, idx) => (
          <div key={idx} className="relative h-[400px] md:h-[600px] rounded-[40px] overflow-hidden group">
            <img src={sw.img} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms] opacity-60" alt={sw.name} />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-[1]" />
            <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-20 max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">{sw.name}</h2>
              <p className="text-white/80 text-xl mb-10 leading-relaxed">{sw.desc}</p>
              <button className="bg-[#00518B] w-fit px-12 py-5 rounded-full font-bold hover:scale-105 transition-all shadow-xl">
                Découvrir le produit
              </button>
            </div>
          </div>
        ))}
      </section>
      
      {/* Focus Phare */}
      <section className="py-32 bg-white text-[#000200]">
         <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-10 tracking-tight">Une plateforme, des possibilités infinies.</h2>
            <p className="text-xl text-black/60 mb-12 max-w-2xl mx-auto">
              Intégrez nos solutions SaaS dans votre écosystème existant et libérez votre potentiel de croissance.
            </p>
            <button className="bg-[#00518B] text-white px-16 py-5 rounded-full font-bold shadow-2xl hover:brightness-110 transition-all">
               Demander une démonstration
            </button>
         </div>
      </section>
    </div>
  );
};

export default ITPage;
