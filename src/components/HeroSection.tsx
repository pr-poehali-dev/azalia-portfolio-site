import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  filmStrip: string[];
  scrollToSection: (sectionId: string) => void;
}

const HeroSection = ({ filmStrip, scrollToSection }: HeroSectionProps) => {
  return (
    <section id="hero" className="pt-24 pb-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="relative mb-8">
            <img
              src="https://cdn.poehali.dev/files/9b170a93-eea7-476b-8160-d67784a3a587.jpg"
              alt="Hero background"
              className="w-full h-96 object-cover rounded-3xl opacity-80"
            />
            <div className="absolute inset-0 bg-background/40 rounded-3xl flex items-center justify-center">
              <div className="text-center">
                <h1 className="md:text-6xl font-montserrat font-bold mb-6 leading-tight uppercase text-xl text-orange-50">
                  сохраняю живые<br />моменты красиво<br />и просто
                </h1>
                <p className="text-xl md:text-2xl text-cream/90 mb-8 max-w-3xl mx-auto lowercase">
                  живая фото- и видеосъёмка, монтаж и влоги под ключ — без тяжёлой постановки и долгой ретуши
                </p>
                <div className="flex justify-center">
                  <Button 
                    size="lg"
                    onClick={() => scrollToSection('services')}
                    className="bg-cream text-forest hover:bg-cream/90 rounded-full px-8"
                  >
                    смотреть примеры
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Film Strip */}
        <div className="overflow-hidden">
          <div className="flex space-x-4 animate-pulse">
            {filmStrip.map((src, index) => (
              <div key={index} className="flex-shrink-0">
                <img
                  src={src}
                  alt={`Frame ${index + 1}`}
                  className="w-24 h-16 object-cover rounded-lg opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;