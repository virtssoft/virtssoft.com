
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-[#FFFFFD]">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-black">
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600" 
          className="absolute inset-0 w-full h-full object-cover opacity-40" 
          alt="Équipe Virtssoft" 
        />
        <div className="absolute inset-0 bg-black/60 z-[1]" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tight mb-4">Qui sommes-nous</h1>
          <p className="text-white/80 text-xl max-w-2xl mx-auto font-light italic">
            "Bâtir l'écosystème technologique de demain pour l'Afrique et le monde."
          </p>
        </div>
      </section>

      {/* Présentation */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#000200] mb-8">Notre Histoire</h2>
          <p className="text-[#000200]/70 leading-relaxed text-lg mb-6">
            Fondée sur une vision d'excellence, <span className="text-[#00518B] font-semibold">VIRTSSOFT</span> est née de la volonté de transformer les défis technologiques en opportunités durables. Nous croyons que l'innovation n'a de sens que si elle est accessible et utile.
          </p>
          <p className="text-[#000200]/70 leading-relaxed text-lg">
            Aujourd'hui, leader en solutions IoT, Cloud et Énergies renouvelables, notre groupe s'impose comme un pilier de la transformation numérique en Afrique Centrale et au-delà.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: 'IoT & Smart', icon: '🌐' },
            { label: 'IA & Cloud', icon: '🧠' },
            { label: 'Énergie', icon: '☀️' },
            { label: 'Médias', icon: '🎬' }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-8 border border-black/5 rounded-2xl text-center hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h4 className="font-bold text-[#00518B] uppercase text-xs tracking-widest">{item.label}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Vision Afrique */}
      <section className="py-24 bg-[#00518B] text-white overflow-hidden relative">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-10 tracking-tight">Une Ambition Panafricaine</h2>
          <p className="text-xl md:text-2xl font-light opacity-90 leading-relaxed max-w-3xl mx-auto">
            "De Douala à l'échelle globale, nous concevons des outils qui répondent aux réalités locales tout en respectant les standards internationaux."
          </p>
        </div>
      </section>

      {/* Programme Solidaire */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="relative rounded-[40px] overflow-hidden bg-black h-[500px] flex items-center shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1600" 
            className="absolute inset-0 w-full h-full object-cover opacity-60" 
            alt="Solidarité Virtssoft" 
          />
          <div className="relative z-10 p-8 md:p-20 max-w-2xl">
            <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">Programme SOLIDAIRE</h2>
            <p className="text-white/80 text-lg md:text-xl mb-10 leading-relaxed">
              10% de notre chiffre d'affaires est investi dans l'accès à l'éducation technologique pour les jeunes de milieux défavorisés.
            </p>
            <button className="bg-white text-[#00518B] px-10 py-4 rounded-full font-bold hover:scale-105 transition-all shadow-lg">
              Découvrir nos actions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
