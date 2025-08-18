import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ServicesSection = () => {
  const services = [
    {
      title: 'Лайф-фото событий',
      description: 'Ненавязчиво ловлю эмоции и детали. Естественные цвета, без ретуши. Отдача в течение 24–72 часов общим альбомом.',
      price: 'от 3 000 ₽/час',
      details: 'полудень от 12 000 ₽, день от 18 000 ₽',
      icon: 'Camera'
    },
    {
      title: 'Лайф-видео событий',
      description: 'Сниму атмосферу праздника, интервью с гостями, детали пространства. Живой звук + музыка по вайбу.',
      price: 'съёмка от 15 000 ₽',
      details: 'по ТЗ',
      icon: 'Video'
    },
    {
      title: 'Монтаж ваших материалов',
      description: 'Превращу разрозненные фрагменты в цельную историю: музыка, титры, деликатные переходы, мягкая "плёнка" по желанию.',
      price: 'ролик 5–10 мин от 8 000 ₽',
      details: '',
      icon: 'Film'
    }
  ];

  return (
    <section id="services" className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="text-4xl font-montserrat font-bold text-center mb-12 text-accent uppercase">услуги</h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border hover:bg-card/80 transition-colors">
              <CardContent className="p-6">
                <div className="mb-4">
                  <Icon name={service.icon} size={32} className="text-accent mb-3" />
                  <h3 className="text-xl font-cormorant font-semibold mb-3">{service.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
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
                  Обсудить в TG
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center text-sm text-muted-foreground lowercase">
          точная смета — в tg после 3–5 вопросов (длительность, локация, срок)
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;