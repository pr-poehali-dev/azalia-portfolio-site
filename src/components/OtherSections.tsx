import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface OtherSectionsProps {
  filmStrip: string[];
}

const OtherSections = ({ filmStrip }: OtherSectionsProps) => {
  const [currentReview, setCurrentReview] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const reviews = [
    {
      text: 'ваши влоги — как тёплое одеяло. после просмотра хочется жить медленнее. спасибо!',
      author: 'Наталья',
      role: 'зрительница'
    },
    {
      text: 'фото со свадьбы — будто маленький фильм о нас. живые лица, свет, смех — восторг!',
      author: 'Антон и Мария',
      role: 'молодожёны'
    },
    {
      text: 'влог об открытии студии передал атмосферу до мурашек. гости пересылают друзьям!',
      author: 'команда пространства',
      role: 'клиенты'
    }
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextReview();
    }
    if (isRightSwipe) {
      prevReview();
    }
  };

  const socialLinks = [
    { icon: 'MessageCircle', label: 'telegram', url: 'https://t.me/azaluk' },
    { icon: 'Youtube', label: 'youtube', url: 'https://youtube.com/@azaluk' },
    { icon: 'Instagram', label: 'instagram', url: '#' },
    { icon: 'Heart', label: 'vk', url: '#' }
  ];

  return (
    <>
      {/* Collaboration Section */}
      <section id="collaboration" className="py-16 px-4 bg-cream text-forest">
        <div className="container mx-auto max-w-4xl text-center px-0">
          <h2 className="font-montserrat font-bold text-accent uppercase my-0 text-3xl">сотрудничество</h2>
          <p className="text-lg leading-relaxed mb-8 text-muted-foreground lowercase">
            я открыта к тёплым коллаборациям и аккуратным интеграциям — только то, что резонирует с атмосферой канала (slow life, велнесс, творчество, места силы, уютные бренды).
            <br /><br />
            форматы:
            <br />
            — интеграции во влоги
            <br />
            — прямая реклама
            <br />
            — совместные проекты
            <br /><br />
            напишите, придумаем красиво!
          </p>
          <Button 
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/80"
            onClick={() => window.open('https://t.me/azaluk', '_blank')}
          >обсудить сотрудничество</Button>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-montserrat font-bold text-center mb-12 uppercase text-amber-50">отзывы</h2>
          
          {/* Desktop - все отзывы видны */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
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

          {/* Mobile - карусель с одним отзывом */}
          <div className="md:hidden relative">
            {/* Navigation arrows */}
            <button 
              onClick={prevReview}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300"
            >
              <Icon name="ChevronLeft" size={20} />
            </button>
            <button 
              onClick={nextReview}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300"
            >
              <Icon name="ChevronRight" size={20} />
            </button>

            {/* Carousel container */}
            <div 
              className="overflow-hidden px-8"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${currentReview * 100}%)`
                }}
              >
                {reviews.map((review, index) => (
                  <div key={index} className="flex-shrink-0 w-full px-2">
                    <Card className="bg-card border-border">
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
                  </div>
                ))}
              </div>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentReview ? 'bg-accent w-6' : 'bg-accent/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="py-16 px-4 bg-cream text-forest">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-montserrat font-bold mb-6 text-accent uppercase">поддержать проект</h2>
          <p className="text-lg leading-relaxed mb-8 text-muted-foreground lowercase">
            если мои видео греют душу — можно "угостить меня кофе" ☕️. 
            ваша поддержка превращается в новые тёплые истории.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            >
              boosty
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            >
              vk донаты
            </Button>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-montserrat font-bold text-center mb-12 uppercase text-amber-50">контакты</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-montserrat font-bold mb-6 uppercase">соцсети</h3>
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
              <h3 className="text-2xl font-montserrat font-bold mb-6 uppercase">связаться</h3>
              <div className="space-y-4">
                <Button
                  size="lg"
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/80"
                  onClick={() => window.open('https://t.me/azaluk', '_blank')}
                >
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  написать в telegram
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                  onClick={() => window.location.href = 'mailto:azaluk@example.com'}
                >
                  <Icon name="Mail" size={20} className="mr-2" />
                  написать email
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