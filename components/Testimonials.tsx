
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
  { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
  { name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
  { name: 'Samsung', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg' },
  { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { name: 'Tesla', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg' },
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
    <section className="py-12 md:py-16 bg-[#FFFFFD]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          <div className="space-y-8">
            <h2 className="text-3xl font-semibold text-[#000200] mb-8">Pourquoi nous choisir</h2>
            {ARGUMENTS.map((arg) => (
              <div key={arg.title} className="flex items-start space-x-6">
                <div className="text-3xl p-4 bg-[#00518B]/5 rounded-full flex-shrink-0">{arg.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-[#000200]">{arg.title}</h3>
                  <p className="text-[#000200]/60 mt-1 leading-relaxed">{arg.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#000200]/5 p-8 md:p-12 rounded-3xl relative overflow-hidden flex flex-col justify-center min-h-[400px]">
            <h2 className="text-2xl font-semibold text-[#000200] mb-10">Paroles de partenaires</h2>
            
            <div className={`transition-all duration-500 transform ${isTransitioning ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'}`}>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-black/5 relative">
                <div className="absolute -top-4 -left-4 text-6xl text-[#00518B]/10 font-serif">“</div>
                <p className="text-[#000200]/80 italic text-lg mb-8 leading-relaxed">
                  {TESTIMONIALS[activeIdx].message}
                </p>
                <div className="flex items-center space-x-4">
                  <img 
                    src={TESTIMONIALS[activeIdx].avatar} 
                    alt={TESTIMONIALS[activeIdx].name} 
                    className="w-14 h-14 rounded-full border-2 border-[#00518B]" 
                  />
                  <div>
                    <h4 className="font-semibold text-[#000200]">{TESTIMONIALS[activeIdx].name}</h4>
                    <p className="text-xs text-[#000200]/40 uppercase tracking-[0.15em] font-medium">{TESTIMONIALS[activeIdx].company}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-8">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeIdx === idx ? 'bg-[#00518B] w-6' : 'bg-black/10 w-1.5 hover:bg-black/20'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-black/5 overflow-hidden">
          <p className="text-center text-[11px] uppercase tracking-[0.3em] text-black/30 font-semibold mb-10">
            Ils nous font confiance
          </p>
          
          <div className="relative flex overflow-hidden group">
            <div className="flex animate-scroll whitespace-nowrap py-4">
              {[...PARTNERS, ...PARTNERS].map((partner, idx) => (
                <div key={idx} className="flex items-center justify-center px-12 md:px-20">
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="h-6 md:h-8 w-auto grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer object-contain"
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
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
