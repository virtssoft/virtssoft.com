
import React from 'react';
import { Icons } from '../constants.tsx';

const Footer: React.FC = () => {
  const handleNavigate = (href: string) => {
    // Si c'est une ancre interne (ex: #privacy), on l'utilise directement
    // Sinon on s'assure qu'elle commence par #
    window.location.hash = href.startsWith('#') ? href : `#${href}`;
    // Scroll au top si ce n'est pas une ancre de section
    if (!['privacy', 'terms', 'cookies'].includes(href.replace('#', ''))) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const sections = [
    {
      title: "Produits",
      links: [
        { label: "Hardware Pro", href: "#electronics" },
        { label: "IoT Connecté", href: "#product/veido-conlight" },
        { label: "Énergie NGL", href: "#product/ngl-eolis-home" },
        { label: "Logiciels SaaS", href: "#software" },
      ]
    },
    {
      title: "Services",
      links: [
        { label: "Maintenance TGPro", href: "#service/tgpro" },
        { label: "Formation AcaLab", href: "#service/acalab" },
        { label: "IA & Infrastructure", href: "#service/cloud" },
        { label: "Support Premium", href: "#contact" },
      ]
    },
    {
      title: "Entreprise",
      links: [
        { label: "À Propos", href: "#about" },
        { label: "Médias", href: "#media" },
        { label: "Blog Tech", href: "#blog" },
        { label: "Carrières", href: "#account" },
        { label: "Innovation Lab", href: "#innovation" },
      ]
    }
  ];

  return (
    <footer className="bg-[#000200] text-[#FFFFFD] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-24">
          <div className="lg:col-span-2 space-y-10">
            <button onClick={() => handleNavigate('#home')} className="block transition-transform active:scale-95 text-left">
              <Icons.Logo variant="white" className="h-12 w-auto" />
            </button>
            <p className="text-[#FFFFFD]/40 text-lg font-light leading-relaxed italic max-w-sm">
              "L'innovation est le battement de cœur de notre souveraineté technologique."
            </p>
            <div className="flex space-x-6">
              {[Icons.Facebook, Icons.Twitter, Icons.Linkedin, Icons.Instagram].map((Icon, i) => (
                <button key={i} className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center hover:bg-[#00518B] transition-all text-white/40 hover:text-white">
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>
          
          {sections.map((section, idx) => (
            <div key={idx} className="space-y-6">
              <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-white/90">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <button 
                      onClick={() => handleNavigate(link.href)}
                      className="text-[#FFFFFD]/60 text-sm hover:text-[#00518B] transition-colors italic font-light text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 text-[10px] text-[#FFFFFD]/30 uppercase tracking-[0.4em] font-black">
          <p>© 2025 VIRTSSOFT TECHNOLOGIES INC.</p>
          <div className="flex space-x-10">
            {['privacy', 'terms', 'cookies'].map(l => (
              <button key={l} onClick={() => handleNavigate(l)} className="hover:text-white transition-colors">
                {l === 'privacy' ? 'Confidentialité' : l === 'terms' ? 'CGV' : 'Cookies'}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
