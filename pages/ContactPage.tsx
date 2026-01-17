
import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-[#FFFFFD] min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h1 className="text-6xl md:text-9xl font-bold mb-8 tracking-tighter">Parlons de<br/>votre projet.</h1>
          <p className="text-black/40 text-2xl font-light italic max-w-2xl mx-auto">Notre équipe d'experts est prête à relever vos défis les plus complexes.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-32">
          <div className="lg:col-span-2">
            <form className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="flex flex-col border-b border-black/10 focus-within:border-[#00518B] transition-colors py-4">
                  <label className="text-[10px] uppercase tracking-[0.4em] font-black text-black/30 mb-4">Nom Complet</label>
                  <input type="text" className="bg-transparent py-2 focus:outline-none text-2xl font-light placeholder:text-black/10" placeholder="Jean Dupont" />
                </div>
                <div className="flex flex-col border-b border-black/10 focus-within:border-[#00518B] transition-colors py-4">
                  <label className="text-[10px] uppercase tracking-[0.4em] font-black text-black/30 mb-4">Email Professionnel</label>
                  <input type="email" className="bg-transparent py-2 focus:outline-none text-2xl font-light placeholder:text-black/10" placeholder="jean@entreprise.com" />
                </div>
              </div>
              <div className="flex flex-col border-b border-black/10 focus-within:border-[#00518B] transition-colors py-4">
                <label className="text-[10px] uppercase tracking-[0.4em] font-black text-black/30 mb-4">Message</label>
                <textarea className="bg-transparent py-2 focus:outline-none text-2xl font-light min-h-[160px] placeholder:text-black/10" placeholder="Décrivez votre projet ou votre besoin..." />
              </div>
              <button className="w-full md:w-fit bg-[#00518B] text-white px-20 py-6 rounded-full font-black uppercase text-sm tracking-[0.3em] hover:scale-105 active:scale-95 transition-all shadow-2xl">
                Envoyer ma demande
              </button>
            </form>
          </div>

          <div className="space-y-16">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-black/30 mb-6">Bureau Central</h4>
              <p className="text-2xl leading-relaxed font-light text-black/80 italic">
                Avenue de l'Indépendance<br/>Douala, Cameroun
              </p>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-black/30 mb-6">Contact Direct</h4>
              <p className="text-2xl font-light text-black/80">contact@virtssoft.com</p>
              <p className="text-2xl font-light text-black/80 mt-2">+237 600 000 000</p>
            </div>
            <div className="h-[300px] bg-neutral-100 rounded-[40px] overflow-hidden border border-black/5 shadow-inner">
              <img src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover grayscale opacity-40" alt="Map Location" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
