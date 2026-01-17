
import React, { useState, useEffect } from 'react';
import { COLORS, NAV_ITEMS, Icons } from '../constants.tsx';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Déclenchement au premier mouvement pour le mode clair
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (href: string) => {
    setMobileMenuOpen(false);
    setExpandedItem(null);
    
    if (window.location.hash === href) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        window.location.hash = href;
    }
  };

  const toggleAccordion = (label: string) => {
    setExpandedItem(expandedItem === label ? null : label);
  };

  // Sombre au début, Clair au scroll
  const isSolid = isScrolled;
  
  const textColor = isSolid ? 'text-[#000200]' : 'text-[#FFFFFD]';
  const iconColor = isSolid ? '#000200' : '#FFFFFD';
  
  // Le logo est bleu quand le fond est blanc (isSolid ou menu ouvert), blanc quand le fond est transparent sombre
  const logoVariant = (isSolid || mobileMenuOpen) ? 'blue' : 'white';
  
  const bgColor = mobileMenuOpen 
    ? 'bg-[#FFFFFD]' 
    : isScrolled 
      ? 'bg-[#FFFFFD]/95 apple-blur border-b border-black/5 shadow-sm' 
      : 'bg-black/30 backdrop-blur-md'; // Mode sombre initial (Apple-style)

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 h-[64px] md:h-[74px] ${bgColor}`}>
      <div className="max-w-7xl mx-auto h-full px-6 md:px-10 flex items-center justify-between">
        <div className="flex-shrink-0">
          <button onClick={() => navigateTo('#home')} className="block transition-transform active:scale-95">
            <Icons.Logo 
              className="h-[32px] md:h-[38px] w-auto transition-all duration-300" 
              variant={logoVariant} 
            />
          </button>
        </div>

        <nav className="hidden lg:flex items-center space-x-12 h-full">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="group relative h-full flex items-center">
              <a
                href={item.href}
                onClick={(e) => {
                  if (item.children) {
                    e.preventDefault();
                  } else {
                    e.preventDefault();
                    navigateTo(item.href);
                  }
                }}
                className={`text-[12px] font-black transition-all hover:text-[#00518B] flex items-center gap-2.5 uppercase tracking-[0.25em] ${mobileMenuOpen ? 'text-[#000200]' : textColor}`}
              >
                {item.label}
                {item.children && (
                  <svg className="w-3.5 h-3.5 opacity-40 group-hover:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </a>
              
              {item.children && (
                <div className="absolute top-[85%] left-1/2 -translate-x-1/2 pt-4 opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                  <div className="bg-white rounded-[24px] shadow-2xl border border-black/5 min-w-[260px] p-4 overflow-hidden">
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        onClick={(e) => { e.preventDefault(); navigateTo(child.href); }}
                        className="block px-6 py-4 text-[13px] font-bold text-black/60 hover:text-[#00518B] hover:bg-neutral-50 rounded-xl transition-all"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center space-x-8">
          <button onClick={() => navigateTo('#account')} className="relative group transition-transform active:scale-90">
            <Icons.Cart className="w-6 h-6 transition-colors group-hover:text-[#00518B]" style={{ color: mobileMenuOpen ? '#000200' : iconColor }} />
            <span className="absolute -top-2.5 -right-2.5 bg-[#00518B] text-[#FFFFFD] text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-black shadow-lg">2</span>
          </button>
          <button onClick={() => navigateTo('#account')} className="group transition-transform active:scale-90">
            <Icons.User className="w-6 h-6 transition-colors group-hover:text-[#00518B]" style={{ color: mobileMenuOpen ? '#000200' : iconColor }} />
          </button>
          
          <button 
            className="lg:hidden p-2 -mr-2 transition-transform active:scale-90"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <Icons.X className="w-7 h-7 text-[#000200]" />
            ) : (
              <Icons.Menu className="w-7 h-7" style={{ color: iconColor }} />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[64px] md:top-[74px] bg-[#FFFFFD] z-40 lg:hidden flex flex-col p-10 space-y-4 animate-fadeIn h-[calc(100vh-64px)] overflow-y-auto">
          {NAV_ITEMS.map((item) => {
            const hasChildren = item.children && item.children.length > 0;
            const isExpanded = expandedItem === item.label;

            return (
              <div key={item.label} className="flex flex-col border-b border-black/5 last:border-0">
                <div 
                  className="flex justify-between items-center py-7 cursor-pointer group"
                  onClick={() => hasChildren ? toggleAccordion(item.label) : navigateTo(item.href)}
                >
                  <span className="text-3xl font-black uppercase tracking-tighter text-[#000200] group-hover:text-[#00518B] transition-colors">
                    {item.label}
                  </span>
                  
                  {hasChildren && (
                    <div className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                      <svg className="w-7 h-7 text-black/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  )}
                </div>

                {hasChildren && (
                  <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-[600px] pb-8' : 'max-h-0'}`}>
                    <div className="flex flex-col space-y-6 pl-4">
                      {item.children?.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          onClick={(e) => { e.preventDefault(); navigateTo(child.href); }}
                          className="text-xl font-bold text-black/40 hover:text-[#00518B] transition-colors"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </header>
  );
};

export default Header;
