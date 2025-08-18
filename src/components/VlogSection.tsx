import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import DecorativeLines from './DecorativeLines';

const VlogSection = () => {
  return (
    <section id="vlog" className="py-16 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        {/* Mobile-optimized layout */}
        <div className="bg-forest text-cream rounded-3xl p-8 md:p-12 relative overflow-hidden">
          {/* Decorative background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 right-10 w-20 h-20 border border-cream/20 rounded-full"></div>
            <div className="absolute bottom-20 left-10 w-16 h-16 border border-cream/20 rounded-full"></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="md:text-5xl font-montserrat font-bold uppercase leading-tight text-3xl my-0">ВЛОГ 
ПОД 
КЛЮЧ</h2>
            
            <DecorativeLines type="wavy" className="mb-8 opacity-40" />
            
            <div className="text-lg md:text-xl leading-relaxed mb-10 font-light">
              <p className="lowercase">
                я приезжаю на ваше событие (свадьба, день рождения, открытие пространства, вечеринка), 
                снимаю живую атмосферу, пару тёплых интервью и за 3–7 дней собираю 8–12-минутный влог-фильм, 
                который хочется пересматривать.
              </p>
            </div>
            
            {/* Service features */}
            <div className="space-y-6 mb-10">
              <div className="flex items-center space-x-4 bg-forest/50 rounded-2xl p-4 border border-cream/20">
                <div className="flex-shrink-0 w-12 h-12 bg-cream/20 rounded-full flex items-center justify-center">
                  <Icon name="Video" size={24} className="text-cream" />
                </div>
                <span className="text-lg font-medium lowercase">съёмка 1 день</span>
              </div>
              
              <div className="flex items-center space-x-4 bg-forest/50 rounded-2xl p-4 border border-cream/20">
                <div className="flex-shrink-0 w-12 h-12 bg-cream/20 rounded-full flex items-center justify-center">
                  <Icon name="Clock" size={24} className="text-cream" />
                </div>
                <span className="text-lg font-medium lowercase">сдача до 7 дней</span>
              </div>
              
              <div className="flex items-center space-x-4 bg-forest/50 rounded-2xl p-4 border border-cream/20">
                <div className="flex-shrink-0 w-12 h-12 bg-cream/20 rounded-full flex items-center justify-center">
                  <Icon name="Link" size={24} className="text-cream" />
                </div>
                <span className="text-lg font-medium lowercase">youtube-ссылка + исходники на диске</span>
              </div>
            </div>
            
            {/* Price */}
            <div className="text-center mb-8">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-cream/90">
                от 35 000 ₽
              </div>
              <div className="text-lg text-cream/70 lowercase">
                обсудить блог под ключ (тз)
              </div>
            </div>
            
            <DecorativeLines type="curved" className="mb-8 opacity-40" />
            
            {/* CTA Button */}
            <div className="text-center">
              <Button 
                size="lg"
                className="bg-cream text-forest hover:bg-cream/90 rounded-full px-12 py-4 text-lg font-semibold uppercase tracking-wide shadow-lg"
                onClick={() => window.open('https://t.me/azaluk', '_blank')}
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                обсудить проект
              </Button>
            </div>
          </div>
        </div>
        
        {/* Mobile decorative elements */}
        <div className="md:hidden mt-8">
          <DecorativeLines type="dashed" className="opacity-30" />
        </div>
      </div>
    </section>
  );
};

export default VlogSection;