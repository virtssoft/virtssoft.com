
import React, { useState, useEffect } from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import ElectronicsSection from './components/ElectronicsSection.tsx';
import ITSection from './components/ITSection.tsx';
import ServicesSection from './components/ServicesSection.tsx';
import Testimonials from './components/Testimonials.tsx';
import RDSection from './components/RDSection.tsx';
import Footer from './components/Footer.tsx';
import LoadingScreen from './components/LoadingScreen.tsx';

// Pages
import AboutPage from './pages/AboutPage.tsx';
import ElectronicsPage from './pages/ElectronicsPage.tsx';
import ITPage from './pages/ITPage.tsx';
import ServicesPage from './pages/ServicesPage.tsx';
import InnovationPage from './pages/InnovationPage.tsx';
import MediaPage from './pages/MediaPage.tsx';
import BlogPage from './pages/BlogPage.tsx';
import ContactPage from './pages/ContactPage.tsx';
import AccountPage from './pages/AccountPage.tsx';

// Pages de détails
import ServiceDetailPage from './pages/ServiceDetailPage.tsx';
import BlogArticlePage from './pages/BlogArticlePage.tsx';
import ProductDetailPage from './pages/ProductDetailPage.tsx';
import LegalPage from './pages/LegalPage.tsx';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');
  const [currentId, setCurrentId] = useState<string | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const fullHash = window.location.hash.replace('#', '') || 'home';
      
      // Gestion spéciale pour les ancres légales rapides
      if (['privacy', 'terms', 'cookies', 'legal'].includes(fullHash)) {
        setCurrentPage('legal');
        setCurrentId(fullHash);
        return;
      }

      const [page, id] = fullHash.split('/');
      
      setCurrentPage(page);
      setCurrentId(id || null);
      
      // Scroll to top instantané sur changement de page
      if (!['privacy', 'terms', 'cookies'].includes(fullHash)) {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderContent = () => {
    switch (currentPage) {
      case 'about': return <AboutPage />;
      case 'electronics': return <ElectronicsPage />;
      case 'software': return <ITPage />;
      case 'services': return <ServicesPage />;
      case 'service': return <ServiceDetailPage id={currentId} />;
      case 'product': return <ProductDetailPage id={currentId} />;
      case 'innovation': return <InnovationPage />;
      case 'media': return <MediaPage />;
      case 'blog': return <BlogPage />;
      case 'blog-article': return <BlogArticlePage id={currentId} />;
      case 'contact': return <ContactPage />;
      case 'account': return <AccountPage />;
      case 'legal': return <LegalPage />;
      default: return (
        <>
          <Hero isFlagship={true} />
          <div id="electronics"><ElectronicsSection /></div>
          <div id="software"><ITSection /></div>
          <div id="services"><ServicesSection /></div>
          <Testimonials />
          <RDSection />
        </>
      );
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
      
      {!isLoading && (
        <div className="animate-fadeIn duration-1000 flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {renderContent()}
          </main>
          <Footer />
        </div>
      )}

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .animate-fadeIn { animation: fadeIn 1s ease-out forwards; }
        html { scroll-behavior: smooth; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default App;
