
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ElectronicsSection from './components/ElectronicsSection';
import ITSection from './components/ITSection';
import ServicesSection from './components/ServicesSection';
import Testimonials from './components/Testimonials';
import RDSection from './components/RDSection';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

// Pages
import AboutPage from './pages/AboutPage';
import ElectronicsPage from './pages/ElectronicsPage';
import ITPage from './pages/ITPage';
import ServicesPage from './pages/ServicesPage';
import InnovationPage from './pages/InnovationPage';
import MediaPage from './pages/MediaPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import AccountPage from './pages/AccountPage';

// Pages de détails
import ServiceDetailPage from './pages/ServiceDetailPage';
import BlogArticlePage from './pages/BlogArticlePage';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      // Gestion simplifiée des routes
      if (hash.startsWith('blog/')) {
        setCurrentPage('blog-article');
      } else if (hash.startsWith('service/')) {
        setCurrentPage('service-detail');
      } else {
        setCurrentPage(hash);
      }
      window.scrollTo(0, 0);
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
      case 'service-detail': return <ServiceDetailPage />;
      case 'innovation': return <InnovationPage />;
      case 'media': return <MediaPage />;
      case 'blog': return <BlogPage />;
      case 'blog-article': return <BlogArticlePage />;
      case 'contact': return <ContactPage />;
      case 'account': return <AccountPage />;
      default: return (
        <>
          <Hero isFlagship={true} />
          <ElectronicsSection />
          <ITSection />
          <ServicesSection />
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
      `}</style>
    </div>
  );
};

export default App;
