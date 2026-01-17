
import React, { useState } from 'react';
import { Icons } from '../constants';

interface HeroProps {
  isFlagship?: boolean;
}

const Hero: React.FC<HeroProps> = ({ isFlagship = true }) => {
  const [imgError, setImgError] = useState(false);

  // Données du produit phare
  const product = {
    name: 'Virtss Pro Max',
    description: 'La puissance réinventée pour l\'avenir de l\'IoT.',
    price: '999€',
    stock: 45, // < 50 donc affichera "Précommander"
    image: 'https://images.unsplash.com/photo-1546868889-4e0c68197877?auto=format&fit=crop&q=80&w=800'
  };

  // Composant de fallback si l'image ne charge pas
  const ImageFallback = () => (
    <div className="w-full aspect-square bg-gradient-to-br from-[#00518B]/20 to-transparent rounded-full flex items-center justify-center border border-white/5">
      <Icons.Logo className="w-1/2 h-auto opacity-20" fill="#FFFFFD" />
    </div>
  );

  if (isFlagship) {
    return (
      <section className="relative w-full min-h-[85vh] lg:h-screen bg-[#000200] overflow-hidden flex flex-col lg:flex-row pt-[56px] md:pt-[60px] lg:pt-[64px]">
        
        {/* --- COLONNE IMAGE --- */}
        <div className="w-full lg:w-1/2 h-[40vh] lg:h-full flex items-center justify-center p-6 lg:p-0">
          <div className="relative w-[65%] md:w-[50%] lg:w-[50%] animate-float">
            {!imgError ? (
              <img 
                src={product.image} 
                alt={product.name}
                onError={() => setImgError(true)}
                className="w-full h-auto object-contain drop-shadow-[0_20px_80px_rgba(0,81,139,0.45)] lg:drop-shadow-[0_30px_100px_rgba(0,81,139,0.5)]"
              />
            ) : (
              <ImageFallback />
            )}
          </div>
        </div>

        {/* --- COLONNE CONTENU --- */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center px-6 md:px-12 lg:pr-24 lg:pl-0 pb-12 lg:pb-0 text-center lg:text-left">
          <div className="max-w-[420px] lg:max-w-[480px] animate-slideIn">
            
            <h1 className="text-[#FFFFFD] text-[22px] md:text-[26px] lg:text-[42px] font-semibold tracking-tight leading-tight">
              {product.name}
            </h1>

            <p className="text-[#FFFFFD]/80 text-[13px] md:text-[14px] lg:text-[16px] font-light mt-2 lg:mt-4">
              {product.description}
            </p>

            <p className="text-[#00518B] text-[16px] md:text-[18px] lg:text-[22px] font-medium mt-3 lg:mt-6">
              {product.price}
            </p>

            <div className="flex flex-col items-center lg:items-start gap-3 mt-8 lg:mt-10 w-full">
              <button className="bg-[#00518B] text-[#FFFFFD] w-full lg:w-[260px] h-[44px] lg:h-[48px] rounded-[8px] font-medium transition-all hover:brightness-110 active:scale-[0.97] shadow-lg shadow-blue-900/20">
                {product.stock > 50 ? 'Acheter' : 'Précommander'}
              </button>
              
              <a 
                href="#learn-more" 
                className="text-[#FFFFFD] w-full lg:w-[260px] h-[40px] lg:h-[48px] flex items-center justify-center lg:justify-start font-light text-sm lg:text-base hover:underline underline-offset-4 decoration-[#00518B] transition-all active:opacity-70"
              >
                En savoir plus &rsaquo;
              </a>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-12px); }
          }
          @keyframes slideIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          .animate-slideIn {
            animation: slideIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
          @media (min-width: 1024px) {
            @keyframes slideInDesktop {
              from { opacity: 0; transform: translateX(30px); }
              to { opacity: 1; transform: translateX(0); }
            }
            .lg\\:animate-slideIn {
              animation: slideInDesktop 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
          }
        `}</style>
      </section>
    );
  }

  return (
    <section className="relative w-full h-screen bg-[#000200] overflow-hidden flex items-center justify-center pt-16">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 scale-105 transition-transform duration-[10000ms]"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000")' }}
      />
      <div className="relative z-20 text-center px-4 max-w-3xl space-y-8 animate-slideUp">
        <h1 className="text-[#FFFFFD] text-4xl md:text-7xl font-bold tracking-tight">Innovation sans frontières.</h1>
        <p className="text-[#FFFFFD]/80 text-lg md:text-2xl font-light">L'avenir de la technologie commence ici.</p>
        <button className="bg-[#00518B] text-[#FFFFFD] px-10 py-4 rounded-full font-medium transition-all active:scale-95 shadow-xl">
          Découvrir Virtssoft
        </button>
      </div>
    </section>
  );
};

export default Hero;
