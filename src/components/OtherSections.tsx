import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface OtherSectionsProps {
  filmStrip: string[];
}

const OtherSections = ({ filmStrip }: OtherSectionsProps) => {
  const reviews = [
    {
      text: 'ваши влоги — как тёплое одеяло. после просмотра хочется жить медленнее. спасибо!',
      author: 'наталья',
      role: 'зрительница'
    },
    {
      text: 'фото со свадьбы — будто маленький фильм о нас. живые лица, свет, смех — восторг!',
      author: 'антон и мария',
      role: 'молодожёны'
    },
    {
      text: 'влог об открытии студии передал атмосферу до мурашек. гости пересылают друзьям!',
      author: 'команда пространства',
      role: 'клиенты'
    }
  ];

  const socialLinks = [
    { icon: 'MessageCircle', label: 'telegram', url: 'https://t.me/azaluk' },
    { icon: 'Youtube', label: 'youtube', url: 'https://youtube.com/@azaluk' },
    { icon: 'Instagram', label: 'instagram', url: '#' },
    { icon: 'Heart', label: 'vk', url: '#' }
  ];

  return (
    <>
      {/* Collaboration Section */}
      <section id="collaboration" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-montserrat font-bold mb-6 text-accent uppercase">сотрудничество</h2>
          <p className="text-lg leading-relaxed mb-8 text-muted-foreground lowercase">
            открыта к тёплым коллаборациям и аккуратным интеграциям — только то, что резонирует с атмосферой канала 
            (slow life, велнесс, творчество, места силы, уютные бренды). форматы: интеграции во влоги, съёмка контента, 
            совместные проекты. напишите, придумаем красиво.
          </p>
          <Button 
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/80"
            onClick={() => window.open('https://t.me/azaluk', '_blank')}
          >
            обсудить коллаборацию
          </Button>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-cormorant font-bold text-center mb-12 text-accent">Отзывы</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="p-6">
                  <p className="text-foreground/90 leading-relaxed mb-4 italic">
                    "{review.text}"
                  </p>
                  <div className="text-right">
                    <div className="font-semibold text-accent">— {review.author}</div>
                    <div className="text-sm text-muted-foreground">{review.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-cormorant font-bold mb-6 text-accent">Поддержать проект</h2>
          <p className="text-lg leading-relaxed mb-8 text-muted-foreground">
            Если мои видео греют душу — можно "угостить меня кофе" ☕️. 
            Ваша поддержка превращается в новые тёплые истории.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            >
              Boosty
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            >
              VK Донаты
            </Button>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-cormorant font-bold text-center mb-12 text-accent">Контакты</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-cormorant font-semibold mb-6">Соцсети</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="lg"
                    className="flex items-center space-x-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                    onClick={() => window.open(social.url, '_blank')}
                  >
                    <Icon name={social.icon} size={20} />
                    <span>{social.label}</span>
                  </Button>
                ))}
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-cormorant font-semibold mb-6">Связаться</h3>
              <div className="space-y-4">
                <Button
                  size="lg"
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/80"
                  onClick={() => window.open('https://t.me/azaluk', '_blank')}
                >
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Написать в Telegram
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                  onClick={() => window.location.href = 'mailto:azaluk@example.com'}
                >
                  <Icon name="Mail" size={20} className="mr-2" />
                  Написать email
                </Button>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 pt-8 border-t border-border">
            <div className="flex justify-center mb-4">
              {filmStrip.slice(0, 6).map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Footer frame ${index + 1}`}
                  className="w-12 h-8 object-cover mx-1 rounded opacity-60"
                />
              ))}
            </div>
            <p className="text-muted-foreground">© Азалия, 2025</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default OtherSections;