
import React, { useState, useEffect } from 'react';
import { COLORS, NAV_ITEMS, Icons } from '../constants.tsx';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (href: string) => {
    setMobileMenuOpen(false);
    window.location.hash = href;
  };

  const toggleAccordion = (label: string) => {
    setExpandedItem(expandedItem === label ? null : label);
  };

  const isSolid = isScrolled || mobileMenuOpen;
  const textColor = isSolid ? 'text-[#000200]' : 'text-[#FFFFFD]';
  const iconColor = isSolid ? '#000200' : '#FFFFFD';
  const logoFill = isSolid ? '#00518B' : '#FFFFFD';
  
  const bgColor = mobileMenuOpen 
    ? 'bg-[#FFFFFD]' 
    : isScrolled 
      ? 'bg-[#FFFFFD]/95 apple-blur border-b border-black/5 shadow-sm' 
      : 'bg-black/30 backdrop-blur-sm';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 h-[60px] md:h-[70px] ${bgColor}`}>
      <div className="max-w-7xl mx-auto h-full px-6 md:px-10 flex items-center justify-between">
        <div className="flex-shrink-0">
          <a href="#home" className="block transition-transform active:scale-95" onClick={() => navigateTo('#home')}>
            <Icons.Logo 
              className="h-[30px] md:h-[36px] w-auto transition-all duration-300" 
              fill={logoFill} 
            />
          </a>
        </div>

        <nav className="hidden lg:flex items-center space-x-10 h-full">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="group relative h-full flex items-center">
              <a
                href={item.href}
                onClick={(e) => {
                  if (!item.children) {
                    e.preventDefault();
                    navigateTo(item.href);
                  }
                }}
                className={`text-[12px] font-bold transition-all hover:text-[#00518B] flex items-center gap-2 uppercase tracking-[0.2em] ${textColor}`}
              >
                {item.label}
                {item.children && (
                  <svg className="w-3 h-3 opacity-40 group-hover:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </a>
              
              {item.children && (
                <div className="absolute top-[80%] left-1/2 -translate-x-1/2 pt-4 opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                  <div className="bg-white rounded-2xl shadow-2xl border border-black/5 min-w-[240px] p-3 overflow-hidden">
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        onClick={(e) => { e.preventDefault(); navigateTo(child.href); }}
                        className="block px-6 py-4 text-[13px] font-medium text-black/70 hover:text-[#00518B] hover:bg-neutral-50 rounded-xl transition-all"
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

        <div className="flex items-center space-x-6">
          <button onClick={() => navigateTo('#account')} className="relative group">
            <Icons.Cart className="w-5 h-5 transition-colors group-hover:text-[#00518B]" style={{ color: iconColor }} />
            <span className="absolute -top-2 -right-2 bg-[#00518B] text-[#FFFFFD] text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-black">2</span>
          </button>
          <button onClick={() => navigateTo('#account')} className="group">
            <Icons.User className="w-5 h-5 transition-colors group-hover:text-[#00518B]" style={{ color: iconColor }} />
          </button>
          
          <button 
            className="lg:hidden p-2 -mr-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <Icons.X className="w-6 h-6" style={{ color: iconColor }} />
            ) : (
              <Icons.Menu className="w-6 h-6" style={{ color: iconColor }} />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] bg-[#FFFFFD] z-40 lg:hidden flex flex-col p-8 space-y-2 animate-fadeIn h-[calc(100vh-60px)] overflow-y-auto">
          {NAV_ITEMS.map((item) => {
            const hasChildren = item.children && item.children.length > 0;
            const isExpanded = expandedItem === item.label;

            return (
              <div key={item.label} className="flex flex-col border-b border-black/5 last:border-0">
                <div 
                  className="flex justify-between items-center py-6 cursor-pointer group"
                  onClick={() => hasChildren ? toggleAccordion(item.label) : navigateTo(item.href)}
                >
                  <span className="text-2xl font-bold text-[#000200] group-hover:text-[#00518B] transition-colors">
                    {item.label}
                  </span>
                  
                  {hasChildren && (
                    <div className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                      <svg className="w-6 h-6 text-black/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  )}
                </div>

                {hasChildren && (
                  <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-[500px] pb-6' : 'max-h-0'}`}>
                    <div className="pl-6 flex flex-col space-y-5 border-l-2 border-[#00518B]/10 ml-1">
                      {item.children?.map(child => (
                        <button 
                          key={child.label} 
                          onClick={() => navigateTo(child.href)}
                          className="text-left text-lg text-black/50 hover:text-[#00518B] transition-colors"
                        >
                          {child.label}
                        </button>
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
