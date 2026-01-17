
import React, { useState } from 'react';
import { Icons } from '../constants.tsx';

interface FooterSectionProps {
  title: string;
  links: { label: string; href: string }[];
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, links }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10 md:border-none">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 md:py-0 flex items-center justify-between md:cursor-default group"
      >
        <h3 className="text-lg font-semibold text-[#FFFFFD] md:mb-6">{title}</h3>
        <div className="md:hidden relative w-4 h-4">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white transition-transform duration-300" />
          <div className={`absolute top-0 left-1/2 w-[1px] h-full bg-white transition-transform duration-300 ${isOpen ? 'rotate-90 opacity-0' : 'rotate-0'}`} />
        </div>
      </button>

      <div className={`overflow-hidden transition-all duration-300 ease-in-out md:max-h-none ${isOpen ? 'max-h-60 pb-6' : 'max-h-0 md:max-h-none'}`}>
        <ul className="space-y-4 text-[#FFFFFD]/70 text-sm">
          {links.map((link, idx) => (
            <li key={idx}>
              <a href={link.href} className="hover:text-[#00518B] transition-colors block py-1 md:py-0">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Footer: React.FC = () => {
  const sections = [
    {
      title: "Produits",
      links: [
        { label: "Électroniques", href: "#electronics" },
        { label: "IoT & Connecté", href: "#electronics" },
        { label: "Énergie solaire", href: "#electronics" },
        { label: "Logiciels SaaS", href: "#software" },
      ]
    },
    {
      title: "Services",
      links: [
        { label: "IA & Cloud Computing", href: "#services" },
        { label: "Sécurité Réseaux", href: "#services" },
        { label: "Support Premium", href: "#services" },
        { label: "Formation Pro", href: "#services" },
      ]
    },
    {
      title: "Entreprise",
      links: [
        { label: "À Propos", href: "#about" },
        { label: "Blog", href: "#blog" },
        { label: "Laboratoires R&D", href: "#innovation" },
        { label: "Carrières", href: "#account" },
        { label: "Investisseurs", href: "#about" },
      ]
    }
  ];

  const socialLinks = [
    { icon: Icons.Facebook, href: "#", label: "Facebook" },
    { icon: Icons.Twitter, href: "#", label: "Twitter" },
    { icon: Icons.Linkedin, href: "#", label: "LinkedIn" },
    { icon: Icons.Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-[#000200] text-[#FFFFFD] pt-12 md:pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 mb-16 md:mb-20">
          <div className="space-y-6 pb-6 md:pb-0 border-b border-white/10 md:border-none">
            <Icons.Logo className="h-10 w-auto" fill="#FFFFFD" />
            <p className="text-[#FFFFFD]/60 text-sm font-light leading-relaxed max-w-sm">
              Leader technologique en solutions électroniques et logicielles innovantes. Nous créons les outils qui définissent l'avenir.
            </p>
            <div className="flex space-x-4 pt-2">
               {socialLinks.map((social, idx) => (
                 <a 
                   key={idx} 
                   href={social.href}
                   aria-label={social.label}
                   className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#00518B] hover:border-[#00518B] hover:text-white text-white/60 transition-all active:scale-90"
                 >
                   <social.icon className="w-4 h-4" />
                 </a>
               ))}
            </div>
          </div>
          {sections.map((section, idx) => (
            <FooterSection 
              key={idx} 
              title={section.title} 
              links={section.links} 
            />
          ))}
          <div className="space-y-6 pt-6 md:pt-0">
            <h3 className="text-lg font-semibold text-[#FFFFFD]">Restez Connecté</h3>
            <p className="text-[#FFFFFD]/60 text-xs">Abonnez-vous pour recevoir les dernières innovations de Virtssoft.</p>
            <div className="flex border-b border-white/20 pb-2 group focus-within:border-[#00518B] transition-colors">
              <input 
                type="email" 
                placeholder="Votre email" 
                className="bg-transparent text-sm w-full focus:outline-none placeholder:text-white/20"
              />
              <button className="text-[#00518B] font-bold text-xs uppercase ml-2 tracking-widest hover:brightness-125 transition-all">OK</button>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-[10px] text-[#FFFFFD]/40 uppercase tracking-[0.2em]">
          <p className="text-center md:text-left">© 2024 VIRTSSOFT INC. TOUS DROITS RÉSERVÉS.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-[#FFFFFD] transition-colors">Confidentialité</a>
            <a href="#" className="hover:text-[#FFFFFD] transition-colors">Conditions</a>
            <a href="#" className="hover:text-[#FFFFFD] transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
