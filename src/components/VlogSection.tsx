import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import DecorativeLines from './DecorativeLines';

const VlogSection = () => {
  return (
    <section id="vlog" className="py-16 px-4 relative" style={{ backgroundColor: '#2a1e16' }}>
      <div className="container mx-auto max-w-4xl px-0">
        {/* Mobile-optimized layout */}
        <div className="text-cream rounded-3xl p-8 md:p-12 relative overflow-hidden" style={{ backgroundColor: '#2a1e16' }}>
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
              <p className="lowercase text-lg">я приезжаю на ваше событие (это может быть свадьба, день рождения, открытие пространства, вечеринка и др.), снимаю на видео живую атмосферу, тёплые интервью, важные детали момента. по заранее согласованному ТЗ. далее за 7 дней собираю атмосферный 10-15 минутный влог-фильм  и отправляю вам.</p>
            </div>
            
            {/* Service features */}
            <div className="space-y-6 mb-10">
              <div className="flex items-center space-x-4 bg-forest/50 rounded-2xl p-4 border border-cream/20 my-0 py-[5px] px-[5px]">
                <div className="flex-shrink-0 w-12 h-12 bg-cream/20 rounded-full flex items-center justify-center">
                  <Icon name="Ticket" size={24} className="text-cream" />
                </div>
                <span className="font-medium lowercase text-base">готова рассмотреть проекты вне Москвы</span>
              </div>
              
              <div className="flex items-center space-x-4 bg-forest/50 p-4 border border-cream/20 py-[5px] rounded-2xl px-[5px]">
                <div className="flex-shrink-0 w-12 h-12 bg-cream/20 rounded-full flex items-center justify-center">
                  <Icon name="Wallet" size={24} className="text-cream" />
                </div>
                <span className="font-medium lowercase text-base">точная стоимость рассчитывается исходя из продолжительности мероприятия и деталей-пожеланий заказчика</span>
              </div>
              
              <div className="flex items-center space-x-4 bg-forest/50 rounded-2xl p-4 border border-cream/20 px-[5px] py-[5px]">
                <div className="flex-shrink-0 w-12 h-12 bg-cream/20 rounded-full flex items-center justify-center">
                  <Icon name="Link" size={24} className="text-cream" />
                </div>
                <span className="font-medium lowercase text-base">вы получите youtube-ссылку с роликом + все материалы на диске</span>
              </div>
            </div>
            
            {/* Price */}
            <div className="text-center mb-8">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-cream/90">от 30 000 ₽</div>

            </div>
            
            <DecorativeLines type="curved" className="mb-8 opacity-40" />
            
            {/* CTA Button */}
            <div className="flex justify-center">
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