
import React from 'react';

const MediaPage: React.FC = () => {
  return (
    <div className="bg-[#FFFFFD] min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-24">
          <span className="text-[#00518B] font-black text-[10px] uppercase tracking-[0.4em] mb-4 block">PRESSE & VISIBILITÉ</span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 text-[#000200]">Espace Média</h1>
          <p className="text-black/40 text-2xl font-light italic max-w-3xl">
            Suivez la voix officielle de Virtssoft Technologies et accédez à nos contenus exclusifs.
          </p>
        </header>

        {/* WebTV Section */}
        <section className="mb-32">
          <div className="flex items-center justify-between mb-12 border-b border-black/5 pb-6">
            <h2 className="text-4xl font-black tracking-tight">Virtssoft WebTV</h2>
            <div className="flex items-center space-x-3">
              <span className="w-3 h-3 bg-red-600 rounded-full animate-pulse" />
              <button className="text-[#00518B] font-black uppercase tracking-widest text-[10px]">Accès Live &rsaquo;</button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[1, 2].map(i => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-video rounded-[48px] overflow-hidden bg-black mb-8 shadow-2xl">
                  <img 
                    src={`https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800&sig=${i}`} 
                    className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-all duration-[2000ms]" 
                    alt="WebTV Video" 
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-[#00518B] transition-all duration-500">
                      <div className="w-0 h-0 border-t-[14px] border-t-transparent border-l-[26px] border-l-white border-b-[14px] border-b-transparent ml-2" />
                    </div>
                  </div>
                  <div className="absolute bottom-10 left-10">
                     <span className="bg-red-600 text-white text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest">Episode #0{i}</span>
                  </div>
                </div>
                <h3 className="font-black text-3xl mb-4 group-hover:text-[#00518B] transition-colors tracking-tight">Parlons Tech : Le futur de l'IoT en RDC</h3>
                <p className="text-black/40 text-sm font-light italic">Diffusé le 12 Octobre 2024 • Emission Spéciale</p>
              </div>
            ))}
          </div>
        </section>

        {/* Podcasts & News */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <h2 className="text-4xl font-black tracking-tight mb-12 border-b border-black/5 pb-6">🎙️ Podcasts Officiels</h2>
            <div className="space-y-6">
              {[1, 2, 3].map(i => (
                <div key={i} className="flex items-center p-8 bg-neutral-50 rounded-[40px] hover:bg-[#00518B]/5 transition-all cursor-pointer group border border-black/5 shadow-sm">
                   <div className="w-16 h-16 bg-[#00518B] rounded-2xl flex items-center justify-center text-white mr-8 group-hover:scale-110 transition-transform">
                     🔊
                   </div>
                   <div>
                     <h4 className="font-bold text-xl mb-1 tracking-tight">L'Afrique Connectée #0{i}</h4>
                     <p className="text-sm text-black/40 italic">Hébergé par John K. Biloto • 45 min</p>
                   </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-black tracking-tight mb-12 border-b border-black/5 pb-6">📰 Revue de Presse</h2>
            <div className="space-y-12">
              {[1, 2].map(i => (
                <div key={i} className="group cursor-pointer flex gap-8 items-start">
                  <div className="w-24 h-24 bg-neutral-100 rounded-[32px] flex-shrink-0 overflow-hidden shadow-lg border border-black/5">
                    <img src={`https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=200&sig=${i}`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="News Article" />
                  </div>
                  <div>
                    <h4 className="font-bold text-2xl group-hover:text-[#00518B] transition-colors leading-tight tracking-tight">Virtssoft Technologies annonce son extension vers le Rwanda</h4>
                    <p className="text-black/40 text-sm mt-4 line-clamp-2 italic font-light">Analyse approfondie sur les infrastructures de demain et leur impact socio-économique...</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Link to Blog */}
        <section className="mt-32 text-center py-20 border-t border-black/5">
           <p className="text-black/30 text-[10px] font-black tracking-[0.5em] uppercase mb-8">POUR ALLER PLUS LOIN</p>
           <h2 className="text-4xl font-black tracking-tighter mb-12">Découvrez nos analyses de fond sur le Blog.</h2>
           <a href="#blog" className="inline-block bg-[#00518B] text-white px-16 py-6 rounded-full font-black uppercase text-xs tracking-[0.2em] hover:scale-105 transition-all shadow-xl">
             Accéder au Blog Tech
           </a>
        </section>
      </div>
    </div>
  );
};

export default MediaPage;
