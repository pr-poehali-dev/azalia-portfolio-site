import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  filmStrip: string[];
  scrollToSection: (sectionId: string) => void;
}

const HeroSection = ({ filmStrip, scrollToSection }: HeroSectionProps) => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative bg-forest"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-montserrat text-cream leading-tight uppercase font-bold mb-6">
            сохраняю живые<br />моменты красиво<br />и просто
          </h1>
          <p className="text-lg md:text-2xl text-cream/80 mb-8 max-w-3xl mx-auto lowercase">
            живая фото- и видеосъёмка, монтаж и влоги под ключ — без тяжёлой постановки и долгой ретуши
          </p>
          <div className="flex justify-center">
            <Button 
              size="lg"
              onClick={() => scrollToSection('services')}
              className="bg-cream text-forest hover:bg-cream/80 rounded-full px-8"
            >
              смотреть примеры
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;