import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  filmStrip: string[];
  scrollToSection: (sectionId: string) => void;
}

const HeroSection = ({ filmStrip, scrollToSection }: HeroSectionProps) => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative"
      style={{
        backgroundImage: 'url(https://cdn.poehali.dev/files/59c859bd-6d48-487f-95c1-4648d29b1d96.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-montserrat text-white leading-tight uppercase font-extrabold px-0 text-left py-[50px] my-[5px] ">
            сохраняю живые<br />моменты красиво<br />и просто
          </h1>
          <p className="md:text-2xl max-w-3xl lowercase text-left text-2xl text-orange-100 font-light mx-0 my-[50px] py-0">привет, я Азалия! 
я мастер находить красоту в самых простых моментах жизни и передавать их через свои кадры</p>
          <div className="flex justify-center">
            <Button 
              size="lg"
              onClick={() => scrollToSection('services')}
              className="bg-white/90 text-forest hover:bg-white rounded-full px-8 backdrop-blur-sm"
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