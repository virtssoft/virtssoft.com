
import React from 'react';

const AccountPage: React.FC = () => {
  return (
    <div className="bg-[#FFFFFD] min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tighter">Rejoignez l'écosystème.</h1>
          <p className="text-black/40 text-2xl font-light italic">Choisissez votre profil pour commencer l'aventure Virtssoft.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { title: 'Client', desc: 'Accédez à votre support prioritaire et gérez vos licences logicielles.', color: 'bg-white', icon: '👤' },
            { title: 'Talent', desc: 'Postulez à nos offres et rejoignez nos labos R&D innovants.', color: 'bg-[#00518B] text-white shadow-blue-500/20', icon: '🚀' },
            { title: 'Partenaire', desc: 'Devenez revendeur, installateur ou partenaire stratégique certifié.', color: 'bg-black text-white shadow-black/30', icon: '🤝' },
          ].map((item, idx) => (
            <div key={idx} className={`${item.color} p-16 rounded-[48px] shadow-2xl flex flex-col items-center text-center hover:scale-105 transition-all duration-500 cursor-pointer border border-black/5 group`}>
              <div className="text-7xl mb-10 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h3 className="text-4xl font-bold mb-6 tracking-tight">{item.title}</h3>
              <p className="opacity-70 text-lg mb-12 italic leading-relaxed font-light">{item.desc}</p>
              <button className={`w-full py-5 rounded-full font-black uppercase text-[10px] tracking-[0.4em] border transition-all ${
                item.title === 'Client' ? 'border-[#00518B] text-[#00518B] hover:bg-[#00518B] hover:text-white' : 'border-white/20 hover:bg-white hover:text-black'
              }`}>
                Continuer
              </button>
            </div>
          ))}
        </div>

        <div className="mt-32 text-center">
           <div className="inline-block p-10 bg-neutral-50 rounded-[32px] border border-black/5">
              <p className="text-black/30 text-xs font-black tracking-[0.3em] uppercase mb-4">Déjà membre ?</p>
              <button className="text-[#00518B] text-xl font-bold hover:underline underline-offset-8 decoration-2">Se connecter à mon compte &rarr;</button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
