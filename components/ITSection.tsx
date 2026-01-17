
import React, { useState, useEffect, useRef } from 'react';

const IT_PRODUCTS = [
  { 
    id: '1', 
    title: 'Virtss Cloud', 
    desc: 'Solution cloud hybride haute performance pour entreprises.', 
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    cta: 'Découvrir'
  },
  { 
    id: '2', 
    title: 'Security Shield', 
    desc: 'Protection IA contre les menaces avancées et le phishing.', 
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    cta: 'Essai'
  },
  { 
    id: '3', 
    title: 'DevOps Flow', 
    desc: 'Automatisation complète de vos pipelines CI/CD.', 
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800',
    cta: 'Acheter'
  },
  { 
    id: '4', 
    title: 'AI Analytics', 
    desc: 'Exploitez la puissance de vos données avec l\'IA.', 
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=800',
    cta: 'Découvrir'
  },
];

const ITSection: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % IT_PRODUCTS.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  useEffect(() => {
    if (carouselRef.current) {
      const carousel = carouselRef.current;
      const card = carousel.children[currentIdx] as HTMLElement;
      if (card) {
        const scrollPos = card.offsetLeft - (carousel.offsetWidth / 2) + (card.offsetWidth / 2);
        carousel.scrollTo({ left: scrollPos, behavior: 'smooth' });
      }
    }
  }, [currentIdx]);

  return (
    <section id="software" className="py-12 md:py-16 bg-[#FFFFFD] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-[#000200] tracking-tight">
          Produits Informatiques
        </h2>
        
        <div className="relative">
          <div 
            ref={carouselRef}
            className="flex gap-4 md:gap-6 overflow-x-auto pb-10 no-scrollbar snap-x snap-mandatory"
          >
            {IT_PRODUCTS.map((item, idx) => (
              <div 
                key={item.id} 
                className={`
                  flex-shrink-0 snap-center cursor-pointer relative rounded-[12px] overflow-hidden shadow-[0_8px_20px_rgba(0,0,0,0.1)] 
                  transition-all duration-500 transform
                  w-[90vw] h-[160px] 
                  md:w-[320px] md:h-[160px] 
                  lg:w-[420px] lg:h-[180px]
                  ${idx === currentIdx ? 'scale-[1.02] z-10' : 'scale-100 opacity-60 md:opacity-80'}
                  hover:shadow-[0_12px_30px_rgba(0,0,0,0.15)] group/card
                `}
                onClick={() => setCurrentIdx(idx)}
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover/card:scale-110"
                />
                
                <div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover/card:bg-black/50" />
                
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-center items-center lg:items-start text-center lg:text-left text-[#FFFFFD]">
                  <h3 className="text-[18px] md:text-[20px] font-semibold tracking-tight mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[14px] md:text-[16px] text-[#FFFFFD]/90 font-light line-clamp-1 max-w-[85%] mb-4">
                    {item.desc}
                  </p>
                  
                  <button className="bg-[#00518B] text-[#FFFFFD] w-[160px] md:w-[200px] h-[44px] rounded-[8px] text-[15px] font-medium transition-all hover:scale-[0.97] active:scale-95 shadow-lg shadow-black/20">
                    {item.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-8 mt-4">
          <div className="flex gap-3">
            {IT_PRODUCTS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIdx(idx)}
                className={`h-2.5 rounded-full transition-all duration-500 ${
                  currentIdx === idx ? 'bg-[#00518B] w-8' : 'bg-[#000200]/10 hover:bg-[#000200]/20 w-2.5'
                }`}
              />
            ))}
          </div>

          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#000200]/5 hover:bg-[#000200]/10 transition-colors shadow-sm"
          >
            {isPlaying ? (
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#000200]/60"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
            ) : (
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#000200]/60"><path d="M8 5v14l11-7z"/></svg>
            )}
          </button>
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default ITSection;
