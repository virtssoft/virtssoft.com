
import React, { useState, useEffect } from 'react';
import { NAV_ITEMS, Icons } from '../constants.tsx';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 15);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (href: string) => {
    setMobileMenuOpen(false);
    setCartOpen(false);
    setExpandedItem(null);
    window.location.hash = href.startsWith('#') ? href : `#${href}`;
  };

  const bgColor = mobileMenuOpen || cartOpen
    ? 'bg-[#FFFFFD]' 
    : isScrolled 
      ? 'bg-[#FFFFFD]/95 backdrop-blur-md border-b border-black/5 shadow-sm' 
      : 'bg-black/30 backdrop-blur-md';

  const textColor = (isScrolled || mobileMenuOpen || cartOpen) ? 'text-[#000200]' : 'text-[#FFFFFD]';
  const iconColor = (isScrolled || mobileMenuOpen || cartOpen) ? '#000200' : '#FFFFFD';

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 h-[64px] md:h-[74px] ${bgColor}`}>
        <div className="max-w-7xl mx-auto h-full px-6 md:px-10 flex items-center justify-between">
          <button onClick={() => handleNavigate('#home')} className="flex-shrink-0 transition-transform active:scale-95">
            <Icons.Logo 
              variant={(isScrolled || mobileMenuOpen || cartOpen) ? 'blue' : 'white'} 
              className="h-[32px] md:h-[38px] w-auto" 
            />
          </button>

          <nav className="hidden lg:flex items-center space-x-12 h-full">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="group relative h-full flex items-center">
                <button
                  onClick={() => item.children ? setExpandedItem(expandedItem === item.label ? null : item.label) : handleNavigate(item.href)}
                  className={`text-[12px] font-black flex items-center gap-2.5 uppercase tracking-[0.25em] hover:text-[#00518B] transition-colors ${textColor}`}
                >
                  {item.label}
                  {item.children && <Icons.Menu className="w-3 h-3 rotate-90 opacity-40" />}
                </button>
                
                {item.children && (
                  <div className="absolute top-[85%] left-1/2 -translate-x-1/2 pt-4 opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                    <div className="bg-white rounded-[24px] shadow-2xl border border-black/5 min-w-[260px] p-4 overflow-hidden">
                      {item.children.map((child) => (
                        <button
                          key={child.label}
                          onClick={() => handleNavigate(child.href)}
                          className="w-full text-left px-6 py-4 text-[13px] font-bold text-black/60 hover:text-[#00518B] hover:bg-neutral-50 rounded-xl transition-all"
                        >
                          {child.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center space-x-8">
            <button onClick={() => setCartOpen(true)} className="relative group transition-transform active:scale-90">
              <Icons.Cart className="w-6 h-6 group-hover:text-[#00518B]" style={{ color: iconColor }} />
            </button>
            <button onClick={() => handleNavigate('#account')} className="group transition-transform active:scale-90">
              <Icons.User className="w-6 h-6 group-hover:text-[#00518B]" style={{ color: iconColor }} />
            </button>
            <button className="lg:hidden p-2 -mr-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <Icons.X className="w-7 h-7 text-[#000200]" /> : <Icons.Menu className="w-7 h-7" style={{ color: iconColor }} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="fixed inset-0 top-[64px] md:top-[74px] bg-[#FFFFFD] z-40 lg:hidden p-10 space-y-4 h-[calc(100vh-64px)] overflow-y-auto">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="flex flex-col border-b border-black/5 last:border-0">
                <button 
                  className="flex justify-between items-center py-7 text-3xl font-black uppercase tracking-tighter text-[#000200] hover:text-[#00518B]"
                  onClick={() => item.children ? setExpandedItem(expandedItem === item.label ? null : item.label) : handleNavigate(item.href)}
                >
                  {item.label}
                  {item.children && <span className="text-black/20">{expandedItem === item.label ? '−' : '+'}</span>}
                </button>
                {item.children && expandedItem === item.label && (
                  <div className="flex flex-col space-y-6 pb-8 pl-4">
                    {item.children.map((child) => (
                      <button key={child.label} onClick={() => handleNavigate(child.href)} className="text-left text-xl font-bold text-black/40 hover:text-[#00518B]">
                        {child.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </header>

      {/* Cart Sidebar simplifiée */}
      {cartOpen && (
        <div className="fixed inset-0 z-[60]">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setCartOpen(false)} />
          <div className="absolute inset-y-0 right-0 w-full max-w-md bg-white shadow-2xl flex flex-col animate-slideInRight">
            <div className="p-8 flex items-center justify-between border-b border-black/5">
              <h2 className="text-2xl font-black uppercase tracking-tight">Votre Panier</h2>
              <button onClick={() => setCartOpen(false)} className="p-2"><Icons.X className="w-6 h-6" /></button>
            </div>
            <div className="flex-grow flex items-center justify-center p-8">
              <p className="text-black/30 italic">Votre panier est vide.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
