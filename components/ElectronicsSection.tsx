
import React, { useState, useEffect, useCallback } from 'react';
import { Product } from '../types';

interface SectionData {
  category: string;
  products: Product[];
}

const CATEGORIES_DATA: SectionData[] = [
  {
    category: 'Objet connecté',
    products: [
      { id: 'veido-conlight', name: 'Veido Conlight', description: 'Éclairage intelligent adaptatif et bioclimatique.', image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=800', category: 'Objet connecté', stock: 100, price: '89€' },
      { id: 'veido-io', name: 'Veido IO', description: 'Interface de contrôle universelle pour écosystèmes IoT.', image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800', category: 'Objet connecté', stock: 40, price: '129€' },
      { id: 'veido-konnect', name: 'Veido Konnect', description: 'Passerelle ultra-rapide sécurisée par IA.', image: 'https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?auto=format&fit=crop&q=80&w=800', category: 'Objet connecté', stock: 120, price: '199€' },
    ]
  },
  {
    category: 'Son et vidéo',
    products: [
      { id: 'soundbox-pro', name: 'Soundbox Pro', description: 'Fidélité acoustique studio pour votre salon.', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800', category: 'Son et vidéo', stock: 60, price: '449€' },
      { id: 'home', name: 'Home Audio', description: 'Système multiroom immersif haute résolution.', image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80&w=800', category: 'Son et vidéo', stock: 30, price: '899€' },
      { id: 'mini', name: 'Mini Audio', description: 'Petit format, son gigantesque, autonomie 24h.', image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=800', category: 'Son et vidéo', stock: 150, price: '149€' },
      { id: 'kai-vision', name: 'K.ai Vision', description: 'Vidéosurveillance prédictive 4K avec vision nocturne.', image: 'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?auto=format&fit=crop&q=80&w=800', category: 'Son et vidéo', stock: 45, price: '299€' },
    ]
  },
  {
    category: 'Énergie renouvelables',
    products: [
      { id: 'ngl-eolis-home', name: 'NGL Eolis Home', description: 'Micro-éolienne domestique ultra-silencieuse.', image: 'https://images.unsplash.com/photo-1509391366360-fe5bb65830bb?auto=format&fit=crop&q=80&w=800', category: 'Énergie renouvelables', stock: 15, price: '2490€' },
      { id: 'eolis-park', name: 'Eolis Park', description: 'Solution modulaire pour parcs éoliens intelligents.', image: 'https://images.unsplash.com/photo-1466611653911-95282fc3656b?auto=format&fit=crop&q=80&w=800', category: 'Énergie renouvelables', stock: 5, price: 'Sur devis' },
    ]
  }
];

const CategorySection: React.FC<{ data: SectionData }> = ({ data }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const activeProduct = data.products[activeIdx];

  const navigateTo = (href: string) => {
    window.location.hash = href;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const changeProduct = useCallback((index: number) => {
    if (index === activeIdx) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIdx(index);
      setIsTransitioning(false);
    }, 400);
  }, [activeIdx]);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      const nextIdx = (activeIdx + 1) % data.products.length;
      changeProduct(nextIdx);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPlaying, activeIdx, data.products.length, changeProduct]);

  return (
    <div className="py-12 md:py-16 border-b border-black/5 last:border-0">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        
        {/* Nom Catégorie */}
        <div className="text-center md:text-left mb-6">
          <h2 className="text-[26px] md:text-[34px] font-semibold tracking-tight text-[#000200]">
            {data.category}
          </h2>
        </div>

        {/* Tabs Produits */}
        <div className="relative mb-8 flex justify-center md:justify-start overflow-x-auto no-scrollbar border-b border-black/5">
          <div className="flex space-x-6 md:space-x-10 px-2">
            {data.products.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => changeProduct(idx)}
                className={`pb-3 text-sm md:text-base transition-all relative whitespace-nowrap ${
                  activeIdx === idx 
                  ? 'text-[#00518B] font-bold' 
                  : 'text-[#000200]/40 hover:text-[#000200]'
                }`}
              >
                {p.name}
                {activeIdx === idx && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#00518B] animate-scaleX" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Carte Produit */}
        <div className="flex justify-center items-center perspective-1000">
          <div 
            className={`relative w-full max-w-[400px] min-h-[480px] md:min-h-[540px] bg-[#FFFFFD] rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-black/[0.03] transition-all duration-500 transform flex flex-col
              ${isTransitioning ? 'opacity-0 translate-y-4 scale-95' : 'opacity-100 translate-y-0 scale-100'}
              hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] group
            `}
          >
            <div className="relative flex-[1.6] flex items-center justify-center p-8 md:p-10 bg-gradient-to-b from-transparent to-black/[0.01]">
              <img 
                src={activeProduct.image} 
                alt={activeProduct.name}
                className="w-full h-full object-contain drop-shadow-[0_12px_30px_rgba(0,0,0,0.1)] transition-transform duration-700 group-hover:scale-105 animate-float"
              />
            </div>

            <div className="flex-1 px-6 pb-8 flex flex-col items-center justify-center text-center bg-white">
              <h3 className="text-[20px] md:text-[23px] font-semibold text-[#000200] leading-tight">
                {activeProduct.name}
              </h3>
              
              <p className="text-[13px] md:text-[14px] text-[#000200]/50 mt-1 line-clamp-2 italic max-w-[90%]">
                {activeProduct.description}
              </p>

              <div className="flex flex-col items-center mt-3">
                <span className="text-[18px] md:text-[20px] font-bold text-[#00518B]">
                  {activeProduct.price}
                </span>
                <button 
                  onClick={() => navigateTo(`#product/${activeProduct.id}`)}
                  className="text-[12px] md:text-[13px] text-[#000200]/50 mt-1.5 hover:text-[#00518B] transition-colors hover:underline underline-offset-4"
                >
                  En savoir plus &rsaquo;
                </button>
              </div>
              
              <div className="w-full max-w-[240px] mt-5">
                <button className="w-full h-[44px] md:h-[48px] bg-[#00518B] text-[#FFFFFD] text-[14px] md:text-[15px] rounded-lg font-medium tracking-wide transition-all hover:brightness-110 active:scale-[0.97] shadow-lg shadow-blue-900/10">
                  {activeProduct.stock > 30 ? 'Acheter' : 'Précommander'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination & Controls */}
        <div className="mt-8 flex items-center justify-center gap-6">
          <div className="flex gap-2.5">
            {data.products.map((_, idx) => (
              <button
                key={idx}
                onClick={() => changeProduct(idx)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  activeIdx === idx ? 'bg-[#00518B] w-6' : 'bg-black/15 hover:bg-black/30'
                }`}
                aria-label={`Go to item ${idx + 1}`}
              />
            ))}
          </div>
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-black/5 hover:bg-black/10 transition-colors"
            title={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-black/40"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
            ) : (
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-black/40"><path d="M8 5v14l11-7z"/></svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

const ElectronicsSection: React.FC = () => {
  return (
    <section id="electronics" className="bg-[#FFFFFD] overflow-hidden">
      {CATEGORIES_DATA.map((section, idx) => (
        <CategorySection key={idx} data={section} />
      ))}

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes scaleX {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        .animate-scaleX {
          animation: scaleX 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          transform-origin: left;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};

export default ElectronicsSection;
