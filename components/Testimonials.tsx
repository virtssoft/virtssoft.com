
import React, { useState, useEffect } from 'react';

const ARGUMENTS = [
  { title: 'Innovation Continue', desc: 'Plus de 20% de notre budget investi en R&D chaque année.', icon: '💡' },
  { title: 'Engagement Social', desc: '10% de notre chiffre d\'affaires investi dans notre programme solidaire qui oeuvre dans le social.', icon: '🌍' },
  { title: 'Support Dédié', desc: 'Des experts à votre écoute 24h/24 et 7j/7.', icon: '🤝' },
];

const TESTIMONIALS = [
  { id: 1, name: 'Marc Dupont', company: 'Global Tech', message: 'Virtssoft a transformé notre infrastructure cloud avec une rapidité déconcertante.', avatar: 'https://i.pravatar.cc/150?u=marc' },
  { id: 2, name: 'Sarah Lea', company: 'Innovate AI', message: 'Leurs solutions IoT sont tout simplement les meilleures du marché actuel.', avatar: 'https://i.pravatar.cc/150?u=sarah' },
  { id: 3, name: 'Jean-Luc Picard', company: 'Enterprise Corp', message: 'Une vision technologique qui dépasse nos attentes les plus folles.', avatar: 'https://i.pravatar.cc/150?u=jeanluc' },
];

const PARTNERS = [
  { name: 'Google Cloud', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_Logo.svg' },
  { name: 'Microsoft Azure', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg' },
  { name: 'AWS', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
  { name: 'Schneider Electric', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Schneider_Electric_wikipedia_logo.svg' },
  { name: 'Siemens', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Siemens-logo.svg' },
  { name: 'Cisco', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg' },
  { name: 'Intel', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282006-2020%29.svg' },
  { name: 'Huawei', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Huawei_logo.svg' },
  { name: 'Dell Technologies', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg' },
  { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
];

const Testimonials: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveIdx((prev) => (prev + 1) % TESTIMONIALS.length);
        setIsTransitioning(false);
      }, 500);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 md:py-32 bg-[#FFFFFD] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32">
          <div className="space-y-12">
            <div>
               <span className="text-[#00518B] font-black text-[11px] uppercase tracking-[0.4em] mb-4 block">EXCELLENCE</span>
               <h2 className="text-4xl md:text-5xl font-black text-[#000200] leading-tight tracking-tighter">Pourquoi choisir<br/>VIRTSSOFT ?</h2>
            </div>
            <div className="space-y-10">
              {ARGUMENTS.map((arg) => (
                <div key={arg.title} className="flex items-start space-x-8 group">
                  <div className="text-3xl p-5 bg-[#00518B]/5 rounded-3xl flex-shrink-0 group-hover:bg-[#00518B] group-hover:text-white transition-all duration-500 shadow-sm">{arg.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-[#000200] mb-2">{arg.title}</h3>
                    <p className="text-[#000200]/50 leading-relaxed font-light">{arg.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-neutral-50/50 p-10 md:p-16 rounded-[48px] relative overflow-hidden flex flex-col justify-center min-h-[450px] border border-black/[0.03]">
            <h2 className="text-2xl font-bold text-[#000200] mb-12 tracking-tight">Ce qu'en disent nos partenaires</h2>
            
            <div className={`transition-all duration-500 transform ${isTransitioning ? 'opacity-0 translate-x-8' : 'opacity-100 translate-x-0'}`}>
              <div className="bg-white p-10 rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.04)] border border-black/5 relative">
                <div className="absolute -top-6 -left-4 text-8xl text-[#00518B]/5 font-serif select-none">“</div>
                <p className="text-[#000200]/70 italic text-xl mb-10 leading-relaxed font-light">
                  {TESTIMONIALS[activeIdx].message}
                </p>
                <div className="flex items-center space-x-5">
                  <img 
                    src={TESTIMONIALS[activeIdx].avatar} 
                    alt={TESTIMONIALS[activeIdx].name} 
                    className="w-16 h-16 rounded-full border-2 border-[#00518B] shadow-lg" 
                  />
                  <div>
                    <h4 className="font-bold text-[#000200] text-lg">{TESTIMONIALS[activeIdx].name}</h4>
                    <p className="text-[10px] text-[#00518B] uppercase tracking-[0.2em] font-black">{TESTIMONIALS[activeIdx].company}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-3 mt-12">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    activeIdx === idx ? 'bg-[#00518B] w-10' : 'bg-black/10 w-2 hover:bg-black/20'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Section Partenaires Améliorée */}
        <div className="pt-20 border-t border-black/5">
          <p className="text-center text-[10px] uppercase tracking-[0.5em] text-black/20 font-black mb-16">
            RÉSEAU GLOBAL ET ALLIANCES STRATÉGIQUES
          </p>
          
          <div className="relative flex overflow-hidden">
            {/* Dégradés pour l'effet de fondu sur les bords */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#FFFFFD] to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#FFFFFD] to-transparent z-10" />

            <div className="flex animate-scroll whitespace-nowrap py-10 items-center">
              {[...PARTNERS, ...PARTNERS].map((partner, idx) => (
                <div key={idx} className="flex items-center justify-center px-16 md:px-24">
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    title={partner.name}
                    className="h-7 md:h-10 w-auto grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-700 cursor-pointer object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
