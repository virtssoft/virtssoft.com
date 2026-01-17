
import React from 'react';

const ServiceDetailPage: React.FC = () => {
  return (
    <div className="bg-[#FFFFFD]">
      {/* Hero Service */}
      <section className="relative h-[60vh] flex items-center justify-center bg-black">
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600" 
          className="absolute inset-0 w-full h-full object-cover opacity-60" 
          alt="Maintenance Service" 
        />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tight mb-4">Maison TGPro</h1>
          <p className="text-white/80 text-xl font-light italic">Maintenance d'Excellence Electronique & Informatique</p>
        </div>
      </section>

      {/* Description */}
      <section className="py-24 max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">Redonner vie à vos équipements.</h2>
        <p className="text-black/60 text-lg leading-relaxed mb-10 italic">
          Chez Maison TGPro, nous comprenons que vos outils de travail sont précieux. Nos techniciens certifiés interviennent sur tous types d'équipements de pointe, des serveurs cloud aux stations de travail graphiques, en passant par les dispositifs IoT complexes.
        </p>

        {/* Avantages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {[
            { title: 'Diagnostic Précis', desc: 'Analyse approfondie en moins de 24h.', icon: '🔍' },
            { title: 'Pièces Certifiées', desc: 'Uniquement des composants d\'origine.', icon: '🛡️' },
            { title: 'Garantie 12 mois', desc: 'Sérénité totale sur toutes nos interventions.', icon: '✅' },
            { title: 'Intervention Site', desc: 'Nous nous déplaçons dans vos locaux.', icon: '🏢' },
          ].map((item, idx) => (
            <div key={idx} className="p-8 bg-neutral-50 rounded-3xl border border-black/5">
              <div className="text-3xl mb-4">{item.icon}</div>
              <h4 className="font-bold text-xl mb-2">{item.title}</h4>
              <p className="text-black/50 text-sm italic">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-[#00518B] p-12 rounded-[40px] text-center text-white shadow-2xl">
          <h3 className="text-3xl font-bold mb-6">Besoin d'une maintenance ?</h3>
          <p className="mb-10 opacity-80 italic">Nos experts vous répondent sous 2 heures avec un devis gratuit.</p>
          <a href="#contact" className="inline-block bg-white text-[#00518B] px-12 py-5 rounded-full font-black uppercase text-xs tracking-widest hover:scale-105 transition-all">
            Demander un devis
          </a>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailPage;
