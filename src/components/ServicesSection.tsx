import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const ServicesSection = () => {
  const services = [
    {
      id: 'photo',
      category: 'СОБЫТИЯ',
      title: 'Лайф-фото событий.',
      description: 'НЕНАВЯЗЧИВО ЛОВЛЮ ЭМОЦИИ И ДЕТАЛИ. ЕСТЕСТВЕННЫЕ ЦВЕТА, БЕЗ РЕТУШИ. ОТДАЧА В ТЕЧЕНИЕ 24–72 ЧАСОВ ОБЩИМ АЛЬБОМОМ.',
      price: 'ОТ 3 000 ₽/ЧАС',
      details: 'ПОЛУДЕНЬ ОТ 12 000 ₽, ДЕНЬ ОТ 18 000 ₽',
      image: 'https://cdn.poehali.dev/files/aacb02f5-853c-4511-89c9-f6fd5714da7a.jpg',
      size: 'large'
    },
    {
      id: 'video',
      category: 'СОБЫТИЯ',
      title: 'Лайф-видео.',
      description: 'СНИМУ АТМОСФЕРУ ПРАЗДНИКА, ИНТЕРВЬЮ С ГОСТЯМИ, ДЕТАЛИ ПРОСТРАНСТВА. ЖИВОЙ ЗВУК + МУЗЫКА ПО ВАЙБУ.',
      price: 'ОТ 15 000 ₽',
      details: 'ПО ТЗ',
      image: 'https://cdn.poehali.dev/files/9b170a93-eea7-476b-8160-d67784a3a587.jpg',
      size: 'medium'
    },
    {
      id: 'editing',
      category: 'ПОСТПРОДАКШН',
      title: 'Монтаж материалов.',
      description: 'ПРЕВРАЩУ РАЗРОЗНЕННЫЕ ФРАГМЕНТЫ В ЦЕЛЬНУЮ ИСТОРИЮ: МУЗЫКА, ТИТРЫ, ДЕЛИКАТНЫЕ ПЕРЕХОДЫ, МЯГКАЯ "ПЛЁНКА".',
      price: '5–10 МИН ОТ 8 000 ₽',
      details: '',
      image: 'https://cdn.poehali.dev/files/897f8f74-fa81-437f-bd57-8576ee19afbc.jpg',
      size: 'small'
    },
    {
      id: 'vlog',
      category: 'ПРЕМИУМ',
      title: 'Влог о событии под ключ.',
      description: 'ПРИЕЗЖАЮ НА СОБЫТИЕ, СНИМАЮ ЖИВУЮ АТМОСФЕРУ + ТЁПЛЫЕ ИНТЕРВЬЮ И ЗА 7 ДНЕЙ СОБИРАЮ 8–12-МИНУТНЫЙ ВЛОГ-ФИЛЬМ.',
      price: 'ОТ 35 000 ₽',
      details: 'СЪЁМКА 1 ДЕНЬ • СДАЧА ДО 7 ДНЕЙ • YOUTUBE + ИСХОДНИКИ',
      image: 'https://cdn.poehali.dev/files/9b170a93-eea7-476b-8160-d67784a3a587.jpg',
      size: 'large-wide'
    }
  ];

  return (
    <section id="services" className="py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl font-cormorant font-bold text-center mb-12 text-accent">Услуги</h2>
        
        {/* Museum-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-8">
          {/* Large photo card */}
          <div className="md:col-span-6 lg:col-span-4">
            <div className="bg-cream rounded-3xl p-6 h-full border border-earth/20">
              <div className="mb-4">
                <div className="inline-block bg-earth/20 px-3 py-1 rounded-full text-xs font-medium text-earth/80 mb-4">
                  {services[0].category}
                </div>
                <h3 className="text-2xl md:text-3xl font-cormorant font-bold text-forest mb-4 leading-tight">
                  {services[0].title}
                </h3>
              </div>
              
              <div className="mb-6">
                <img 
                  src={services[0].image}
                  alt="Фото событий"
                  className="w-full h-48 object-cover rounded-2xl"
                />
              </div>

              <div className="space-y-4">
                <p className="text-xs text-earth/70 font-medium leading-relaxed">
                  {services[0].description}
                </p>
                
                <div className="pt-4 border-t border-earth/20">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-sm font-bold text-forest">{services[0].price}</div>
                      <div className="text-xs text-earth/60">{services[0].details}</div>
                    </div>
                    <Button 
                      size="sm"
                      className="bg-forest text-cream hover:bg-forest/80 rounded-full px-4"
                      onClick={() => window.open('https://t.me/azaluk', '_blank')}
                    >
                      <Icon name="ArrowRight" size={16} />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Large wide vlog card */}
          <div className="md:col-span-6 lg:col-span-8">
            <div className="bg-gradient-to-r from-earth to-copper rounded-3xl p-6 h-full text-cream relative overflow-hidden">
              <div className="relative z-10">
                <div className="inline-block bg-cream/20 px-3 py-1 rounded-full text-xs font-medium text-cream/90 mb-4">
                  {services[3].category}
                </div>
                <h3 className="text-2xl md:text-4xl font-cormorant font-bold mb-4 leading-tight">
                  {services[3].title}
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div className="space-y-4">
                    <p className="text-xs text-cream/80 font-medium leading-relaxed">
                      {services[3].description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {services[3].details.split(' • ').map((badge, index) => (
                        <div key={index} className="bg-cream/10 px-3 py-1 rounded-full text-xs text-cream/90">
                          {badge}
                        </div>
                      ))}
                    </div>

                    <div className="pt-4">
                      <div className="flex justify-between items-center">
                        <div className="text-lg font-bold text-gold">{services[3].price}</div>
                        <Button 
                          size="sm"
                          className="bg-cream text-forest hover:bg-cream/90 rounded-full px-4"
                          onClick={() => window.open('https://t.me/azaluk', '_blank')}
                        >
                          <Icon name="ArrowRight" size={16} />
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <img 
                      src={services[3].image}
                      alt="Влог под ключ"
                      className="w-full h-40 md:h-48 object-cover rounded-2xl"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-2xl">
                      <div className="w-12 h-12 bg-cream rounded-full flex items-center justify-center">
                        <Icon name="Play" size={20} className="text-forest ml-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Medium video card */}
          <div className="md:col-span-6">
            <div className="bg-gradient-to-br from-charcoal to-earth/60 rounded-3xl p-6 h-full text-cream">
              <div className="mb-4">
                <img 
                  src={services[1].image}
                  alt="Лайф-видео"
                  className="w-full h-32 object-cover rounded-2xl mb-4"
                />
                <div className="inline-block bg-cream/20 px-3 py-1 rounded-full text-xs font-medium text-cream/90 mb-3">
                  {services[1].category}
                </div>
                <h3 className="text-xl font-cormorant font-bold mb-3 leading-tight">
                  {services[1].title}
                </h3>
              </div>

              <div className="space-y-4">
                <p className="text-xs text-cream/80 font-medium leading-relaxed">
                  {services[1].description}
                </p>
                
                <div className="pt-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-sm font-bold text-cream">{services[1].price}</div>
                      <div className="text-xs text-cream/60">{services[1].details}</div>
                    </div>
                    <Button 
                      size="sm"
                      className="bg-cream/20 text-cream hover:bg-cream/30 rounded-full px-4"
                      onClick={() => window.open('https://t.me/azaluk', '_blank')}
                    >
                      <Icon name="ArrowRight" size={16} />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Small editing card */}
          <div className="md:col-span-6">
            <div className="bg-cream rounded-3xl p-6 h-full border border-earth/20">
              <div className="flex items-start justify-between mb-4">
                <div className="inline-block bg-earth/20 px-3 py-1 rounded-full text-xs font-medium text-earth/80">
                  {services[2].category}
                </div>
                <div className="w-12 h-12 bg-earth/10 rounded-full flex items-center justify-center">
                  <Icon name="Film" size={20} className="text-earth" />
                </div>
              </div>
              
              <h3 className="text-xl font-cormorant font-bold text-forest mb-4 leading-tight">
                {services[2].title}
              </h3>

              <div className="space-y-4">
                <p className="text-xs text-earth/70 font-medium leading-relaxed">
                  {services[2].description}
                </p>
                
                <div className="pt-4 border-t border-earth/20">
                  <div className="flex justify-between items-center">
                    <div className="text-sm font-bold text-forest">{services[2].price}</div>
                    <Button 
                      size="sm"
                      className="bg-forest text-cream hover:bg-forest/80 rounded-full px-4"
                      onClick={() => window.open('https://t.me/azaluk', '_blank')}
                    >
                      <Icon name="ArrowRight" size={16} />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-sm text-muted-foreground">
          Точная смета — в TG после 3–5 вопросов (длительность, локация, срок)
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;