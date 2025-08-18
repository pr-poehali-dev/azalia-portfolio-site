import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import VlogSection from '@/components/VlogSection';
import OtherSections from '@/components/OtherSections';
import ScrollToTop from '@/components/ScrollToTop';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'services', 'vlog', 'collaboration', 'reviews', 'support', 'contacts'];
      const scrollPos = window.scrollY + 100;

      // Show/hide scroll to top button
      setShowScrollTop(window.scrollY > 400);

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPos >= element.offsetTop && scrollPos < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { id: 'about', label: 'обо мне' },
    { id: 'services', label: 'услуги' },
    { id: 'vlog', label: 'влог под ключ' },
    { id: 'collaboration', label: 'сотрудничество' },
    { id: 'support', label: 'поддержать' }
  ];

  const filmStrip = [
    'https://cdn.poehali.dev/files/aacb02f5-853c-4511-89c9-f6fd5714da7a.jpg',
    'https://cdn.poehali.dev/files/9b170a93-eea7-476b-8160-d67784a3a587.jpg',
    'https://cdn.poehali.dev/files/897f8f74-fa81-437f-bd57-8576ee19afbc.jpg',
    'https://cdn.poehali.dev/files/aacb02f5-853c-4511-89c9-f6fd5714da7a.jpg',
    'https://cdn.poehali.dev/files/9b170a93-eea7-476b-8160-d67784a3a587.jpg',
    'https://cdn.poehali.dev/files/897f8f74-fa81-437f-bd57-8576ee19afbc.jpg'
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header
        navItems={navItems}
        activeSection={activeSection}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        scrollToSection={scrollToSection}
      />

      <HeroSection
        filmStrip={filmStrip}
        scrollToSection={scrollToSection}
      />

      <AboutSection filmStrip={filmStrip} />

      <ServicesSection />

      <VlogSection />

      <OtherSections filmStrip={filmStrip} />

      <ScrollToTop
        showScrollTop={showScrollTop}
        scrollToTop={scrollToTop}
      />
    </div>
  );
};

export default Index;