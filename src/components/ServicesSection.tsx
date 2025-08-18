import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import FilmStrip from './FilmStrip';
import DecorativeLines from './DecorativeLines';

const ServicesSection = () => {
  const services = [
    {
      title: 'лайф-фото событий',
      description: 'ненавязчиво ловлю эмоции и детали. естественные цвета, без ретуши. отдача в течение 24–72 часов общим альбомом.',
      price: 'от 3 000 ₽/час',
      details: 'полудень от 12 000 ₽, день от 18 000 ₽',
      icon: 'Camera'
    },
    {
      title: 'лайф-видео событий',
      description: 'сниму атмосферу праздника, интервью с гостями, детали пространства. живой звук + музыка по вайбу.',
      price: 'съёмка от 15 000 ₽',
      details: 'по тз',
      icon: 'Video'
    },
    {
      title: 'монтаж ваших материалов',
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
    <section id="services" className="py-16 px-4 bg-muted/30 relative">
      <div className="container mx-auto">
        {/* Decorative elements for mobile */}
        <div className="md:hidden mb-8">
          <DecorativeLines type="wavy" className="mb-4 opacity-60" />
        </div>
        
        <h2 className="text-4xl font-montserrat font-bold text-center mb-12 text-accent uppercase">услуги</h2>
        
        {/* Mobile film strip */}
        <div className="md:hidden flex justify-center mb-8">
          <FilmStrip 
            images={serviceImages} 
            orientation="horizontal" 
            className="max-w-xs"
          />
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border hover:bg-card/80 transition-colors">
              <CardContent className="p-6">
                <div className="mb-4">
                  <Icon name={service.icon} size={32} className="text-accent mb-3" />
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
          <div className="text-center text-sm text-muted-foreground lowercase">
            точная смета — в tg после 3–5 вопросов (длительность, локация, срок)
          </div>
          <DecorativeLines type="curved" className="w-full md:w-1/3 opacity-50 rotate-180" />
        </div>

        <div className="text-center text-sm text-muted-foreground lowercase"></div>
      </div>
    </section>
  );
};

export default ServicesSection;