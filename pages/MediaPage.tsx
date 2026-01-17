
import React from 'react';

const MediaPage: React.FC = () => {
  return (
    <div className="bg-[#FFFFFD] min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-24">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">Espace Média</h1>
          <p className="text-black/40 text-2xl font-light italic">Suivez toute l'actualité tech de l'écosystème Virtssoft.</p>
        </header>

        {/* WebTV Section */}
        <section className="mb-32">
          <div className="flex items-center justify-between mb-12 border-b border-black/5 pb-6">
            <h2 className="text-4xl font-bold tracking-tight">Virtssoft WebTV</h2>
            <button className="text-[#00518B] font-bold uppercase tracking-widest text-xs">Accès Live &rsaquo;</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[1, 2, 3].map(i => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-video rounded-[32px] overflow-hidden bg-black mb-6 shadow-xl">
                  <img 
                    src={`https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600&sig=${i}`} 
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-all duration-700" 
                    alt="WebTV Video" 
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/10 apple-blur rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-[#00518B] transition-all">
                      <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[22px] border-l-white border-b-[12px] border-b-transparent ml-2" />
                    </div>
                  </div>
                </div>
                <h3 className="font-bold text-2xl mb-2 group-hover:text-[#00518B] transition-colors">Virtssoft Talk : Le futur de l'IoT en 2025</h3>
                <p className="text-black/50 text-sm font-light italic">Épisode #0{i} • 12 Octobre 2024</p>
              </div>
            ))}
          </div>
        </section>

        {/* Podcasts & News */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <h2 className="text-4xl font-bold mb-12 border-b border-black/5 pb-6">Podcasts</h2>
            <div className="space-y-8">
              {[1, 2, 3].map(i => (
                <div key={i} className="flex items-center p-8 bg-neutral-50 rounded-[32px] hover:bg-[#00518B]/5 transition-all cursor-pointer group border border-black/5">
                   <div className="w-16 h-16 bg-[#00518B] rounded-2xl flex items-center justify-center text-white mr-8 group-hover:scale-110 transition-transform">
                     🎙️
                   </div>
                   <div>
                     <h4 className="font-bold text-xl mb-1">L'Afrique Connectée #0{i}</h4>
                     <p className="text-sm text-black/40 italic">Par Jean de Virtssoft • 45 min</p>
                   </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-12 border-b border-black/5 pb-6">Articles Tech</h2>
            <div className="space-y-10">
              {[1, 2].map(i => (
                <div key={i} className="group cursor-pointer flex gap-8 items-start">
                  <div className="w-32 h-32 bg-neutral-100 rounded-[24px] flex-shrink-0 overflow-hidden shadow-lg">
                    <img src={`https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=200&sig=${i}`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" alt="News Article" />
                  </div>
                  <div>
                    <h4 className="font-bold text-2xl group-hover:text-[#00518B] transition-colors leading-tight">Comment la 5G transforme les zones rurales d'Afrique Centrale</h4>
                    <p className="text-black/50 text-base mt-4 line-clamp-2 italic font-light">Analyse approfondie sur les infrastructures de demain et leur impact socio-économique...</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MediaPage;
