
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

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
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
