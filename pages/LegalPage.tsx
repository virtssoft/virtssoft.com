
import React, { useEffect } from 'react';

const LegalPage: React.FC = () => {
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && (hash === 'privacy' || hash === 'terms' || hash === 'cookies')) {
      const element = document.getElementById(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, []);

  return (
    <div className="bg-[#FFFFFD] min-h-screen py-32">
      <div className="max-w-4xl mx-auto px-6">
        <header className="mb-24">
          <span className="text-[#00518B] font-black text-[10px] uppercase tracking-[0.5em] mb-4 block">OFFICIEL</span>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-[#000200]">Espace Légal</h1>
        </header>
        
        <div className="space-y-32">
          <section id="privacy" className="scroll-mt-32">
            <h2 className="text-3xl font-black mb-8 text-[#00518B] uppercase tracking-tighter">Politique de Confidentialité</h2>
            <div className="prose prose-xl text-black/60 font-light leading-relaxed italic space-y-6">
              <p>Chez Virtssoft Technologies Inc., la protection de vos données est une priorité absolue. Nous collectons uniquement les informations nécessaires à la fourniture de nos services SaaS et à l'amélioration de votre expérience utilisateur via OneAccount.</p>
              <p>Vos données sont hébergées sur nos serveurs souverains situés en RDC et au Cameroun, sécurisés par cryptage 256-bit AES.</p>
            </div>
          </section>

          <section id="terms" className="scroll-mt-32">
            <h2 className="text-3xl font-black mb-8 text-[#00518B] uppercase tracking-tighter">Conditions Générales</h2>
            <div className="prose prose-xl text-black/60 font-light leading-relaxed italic space-y-6">
              <p>L'achat de produits matériels ou de licences logicielles est soumis à l'acceptation de nos CGV. Les garanties TGPro s'appliquent sur une durée de 24 mois pour tout équipement neuf.</p>
              <p>Virtssoft se réserve le droit de modifier ses tarifs d'abonnement SaaS avec un préavis de 30 jours pour ses clients OneAccount.</p>
            </div>
          </section>

          <section id="cookies" className="scroll-mt-32">
            <h2 className="text-3xl font-black mb-8 text-[#00518B] uppercase tracking-tighter">Gestion des Cookies</h2>
            <div className="prose prose-xl text-black/60 font-light leading-relaxed italic space-y-6">
              <p>Nous utilisons des cookies techniques essentiels au fonctionnement de votre session OneAccount. Aucun cookie tiers publicitaire n'est utilisé sans votre consentement explicite.</p>
            </div>
          </section>
        </div>

        <div className="mt-40 pt-16 border-t border-black/5 text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-black/20">Dernière mise à jour : Janvier 2025 • Virtssoft Legal Dept.</p>
        </div>
      </div>
    </div>
  );
};

export default LegalPage;
