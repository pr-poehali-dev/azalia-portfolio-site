import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const VlogSection = () => {
  const badges = [
    { icon: 'Video', text: 'съёмка 1 день' },
    { icon: 'Clock', text: 'сдача до 7 дней' },
    { icon: 'Link', text: 'YouTube-ссылка + исходники на Диске' }
  ];

  return (
    <section id="vlog" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <Card className="bg-gradient-to-br from-forest to-earth text-cream border-none">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-4xl font-cormorant font-bold mb-6">
                    Влог о событии под ключ
                  </h2>
                  <p className="text-cream/90 leading-relaxed mb-6 text-lg">
                    Я приезжаю на ваше событие (свадьба, день рождения, открытие пространства, вечеринка), 
                    снимаю живую атмосферу + пару тёплых интервью и за 7 дней собираю 8–12-минутный 
                    влог-фильм, который хочется пересматривать.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mb-6">
                    {badges.map((badge, index) => (
                      <div key={index} className="flex items-center space-x-2 bg-cream/10 px-4 py-2 rounded-full">
                        <Icon name={badge.icon} size={16} className="text-cream" />
                        <span className="text-sm">{badge.text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mb-6">
                    <span className="text-3xl font-bold text-gold">от 35 000 ₽</span>
                  </div>

                  <Button 
                    size="lg"
                    className="bg-cream text-forest hover:bg-cream/90"
                    onClick={() => window.open('https://t.me/azaluk', '_blank')}
                  >
                    Обсудить влог под ключ (TG)
                  </Button>
                </div>
                
                <div className="relative">
                  <img
                    src="https://cdn.poehali.dev/files/897f8f74-fa81-437f-bd57-8576ee19afbc.jpg"
                    alt="Vlog preview"
                    className="w-full h-64 object-cover rounded-2xl"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-2xl">
                    <Button size="icon" className="w-16 h-16 rounded-full bg-cream text-forest">
                      <Icon name="Play" size={24} />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VlogSection;