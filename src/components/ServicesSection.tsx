import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import FilmStrip from './FilmStrip';
import DecorativeLines from './DecorativeLines';

const ServicesSection = () => {
  const services = [
    {
      title: 'лайф-съемка событий',
      description: 'ненавязчиво ловлю эмоции и детали. естественные цвета, без ретуши. отдача в течение 24–72 часов общим альбомом.',
      price: 'от 3 000 ₽/час',
      details: 'день от 18 000 ₽',
      icon: 'Camera'
    },
    {
      title: 'монтаж видео',
      description: 'превращу разрозненные фрагменты в цельную историю: музыка, титры, деликатные переходы, мягкая "плёнка" по желанию.',
      price: 'ролик 5–10 мин от 8 000 ₽',
      details: '',
      icon: 'Film'
    }
  ];

  // Создаём фейковые изображения для киноленты
  const serviceImages = [
    "https://cdn.poehali.dev/files/9b170a93-eea7-476b-8160-d67784a3a587.jpg",
    "https://cdn.poehali.dev/files/59c859bd-6d48-487f-95c1-4648d29b1d96.png"
  ];

  return (
    <section id="services" className="py-16 px-4 relative">
      <div className="container mx-auto">
        {/* Decorative elements for mobile */}
        <div className="md:hidden mb-8">
          <DecorativeLines type="wavy" className="mb-4 opacity-60" />
        </div>
        
        <h2 className="text-4xl font-montserrat font-bold text-center uppercase my-5 text-amber-50">услуги</h2>
        

        
        <div className="grid md:grid-cols-2 gap-8 mb-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border hover:bg-card/80 transition-colors">
              <CardContent className="p-6">
                <div className="mb-4">
                  {service.title === 'лайф-съемка событий' ? (
                    <div className="flex space-x-2 mb-3">
                      <Icon name="Camera" size={32} className="text-accent" />
                      <Icon name="Video" size={32} className="text-accent" />
                    </div>
                  ) : (
                    <Icon name={service.icon} size={32} className="text-accent mb-3" />
                  )}
                  <h3 className="text-xl font-montserrat font-bold mb-3 uppercase">{service.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed lowercase">
                  {service.description}
                </p>
                <div className="mt-auto">
                  <div className="text-accent font-semibold text-lg">{service.price}</div>
                  {service.details && (
                    <div className="text-sm text-muted-foreground">{service.details}</div>
                  )}
                </div>
                <Button 
                  className="w-full mt-4 bg-accent text-accent-foreground hover:bg-accent/80"
                  onClick={() => window.open('https://t.me/azaluk', '_blank')}
                >
                  обсудить в tg
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Decorative lines between sections */}
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
          <DecorativeLines type="curved" className="w-full md:w-1/3 opacity-50" />
          <div className="text-center text-sm lowercase" style={{ color: '#f5f0e8' }}>
цены ориентировочные, точная стоимость определится по деталям вашего заказа. смело пишите в телеграм!
          </div>
          <DecorativeLines type="curved" className="w-full md:w-1/3 opacity-50 rotate-180" />
        </div>

        <div className="text-center text-sm text-muted-foreground lowercase"></div>
      </div>
    </section>
  );
};

export default ServicesSection;