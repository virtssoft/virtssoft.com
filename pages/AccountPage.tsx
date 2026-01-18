
import React from 'react';
import { Icons } from '../constants.tsx';

const AccountPage: React.FC = () => {
  return (
    <div className="bg-[#FFFFFD] min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <div className="flex justify-center mb-8">
            <div className="bg-[#00518B] text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.4em]">
              OneAccount
            </div>
          </div>
          <h1 className="text-6xl md:text-9xl font-bold mb-6 tracking-tighter text-[#000200]">Un seul compte,<br/>tout Virtssoft.</h1>
          <p className="text-black/40 text-2xl font-light italic max-w-3xl mx-auto">Gérez vos services, vos licences et vos projets depuis une interface unique et sécurisée.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { 
              title: 'Client Privé', 
              desc: 'Accédez à votre support prioritaire et gérez vos licences logicielles.', 
              color: 'bg-white', 
              icon: '👤',
              label: 'Accéder'
            },
            { 
              title: 'Virtssoft Talent', 
              desc: 'Postulez à nos offres et rejoignez nos labos R&D innovants.', 
              color: 'bg-[#00518B] text-white shadow-blue-500/20', 
              icon: '🚀',
              label: 'Rejoindre'
            },
            { 
              title: 'Partenaire Pro', 
              desc: 'Devenez revendeur certifié ou partenaire stratégique OneAccount.', 
              color: 'bg-black text-white shadow-black/30', 
              icon: '🤝',
              label: 'Collaborer'
            },
          ].map((item, idx) => (
            <div key={idx} className={`${item.color} p-12 md:p-16 rounded-[56px] shadow-2xl flex flex-col items-center text-center hover:scale-105 transition-all duration-700 cursor-pointer border border-black/5 group relative overflow-hidden`}>
              {/* Effet visuel au hover */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              
              <div className="text-8xl mb-12 group-hover:scale-110 transition-transform duration-700 drop-shadow-2xl">{item.icon}</div>
              <h3 className="text-4xl font-bold mb-6 tracking-tight">{item.title}</h3>
              <p className="opacity-70 text-lg mb-12 italic leading-relaxed font-light">{item.desc}</p>
              
              <button className={`w-full py-6 rounded-full font-black uppercase text-[10px] tracking-[0.4em] border transition-all duration-500 ${
                item.title === 'Client Privé' ? 'border-[#00518B] text-[#00518B] hover:bg-[#00518B] hover:text-white' : 'border-white/20 hover:bg-white hover:text-black'
              }`}>
                {item.label}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-32 text-center">
           <div className="inline-block p-12 bg-neutral-50 rounded-[48px] border border-black/5 shadow-inner">
              <p className="text-black/30 text-[10px] font-black tracking-[0.5em] uppercase mb-6">DÉJÀ MEMBRE ONEACCOUNT ?</p>
              <button className="text-[#00518B] text-2xl font-black hover:underline underline-offset-[12px] decoration-2 flex items-center gap-4 mx-auto group">
                Se connecter à mon espace <span className="group-hover:translate-x-2 transition-transform">&rarr;</span>
              </button>
           </div>
        </div>

        {/* Footer info OneAccount */}
        <div className="mt-24 pt-16 border-t border-black/5 flex flex-col md:flex-row items-center justify-between gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-black/20">
           <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Systèmes OneAccount Opérationnels
           </div>
           <div className="flex gap-12">
              <a href="#" className="hover:text-black transition-colors">Sécurité 256-bit</a>
              <a href="#" className="hover:text-black transition-colors">Confidentialité</a>
              <a href="#" className="hover:text-black transition-colors">Support 24/7</a>
           </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
