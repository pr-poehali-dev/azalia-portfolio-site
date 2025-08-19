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
    },
    {
      text: 'каждый кадр пронизан душой. смотрю и чувствую, что не одинока в своих переживаниях.',
      author: 'Алёна',
      role: 'подписчица'
    },
    {
      text: 'монтаж превзошёл ожидания! простые моменты стали волшебными воспоминаниями.',
      author: 'Дмитрий',
      role: 'клиент'
    },
    {
      text: 'атмосфера в видео настолько уютная, что хочется оказаться там прямо сейчас.',
      author: 'Мария К.',
      role: 'зрительница'
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
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-montserrat font-bold text-center mb-12 uppercase text-amber-50">отзывы</h2>
          
          {/* Desktop - карусель с тремя отзывами */}
          <div className="hidden md:block relative">
            {/* Navigation arrows */}
            <button 
              onClick={prevReview}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300"
            >
              <Icon name="ChevronLeft" size={24} />
            </button>
            <button 
              onClick={nextReview}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300"
            >
              <Icon name="ChevronRight" size={24} />
            </button>

            {/* Desktop carousel container */}
            <div className="overflow-hidden px-16">
              <div 
                className="flex transition-transform duration-500 ease-out gap-6"
                style={{
                  transform: `translateX(-${currentReview * (100/3)}%)`
                }}
              >
                {reviews.map((review, index) => (
                  <div key={index} className="flex-shrink-0 w-1/3">
                    <Card className="bg-card border-border h-32">
                      <CardContent className="p-4 h-full flex flex-col justify-between">
                        <p className="text-foreground/90 text-sm italic leading-snug line-clamp-3">
                          "{review.text}"
                        </p>
                        <div className="text-right mt-2">
                          <div className="font-semibold text-accent text-sm">— {review.author}</div>
                          <div className="text-xs text-muted-foreground">{review.role}</div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop dots indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {Array.from({ length: Math.ceil(reviews.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index * 3)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    Math.floor(currentReview / 3) === index ? 'bg-accent w-6' : 'bg-accent/30'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Mobile - карусель с peek эффектом */}
          <div className="md:hidden relative -mx-4">
            {/* Mobile carousel container with peek effect */}
            <div className="flex items-center w-full">
              {/* Left peek - выглядывает из-за левого края */}
              <div className="flex-shrink-0 w-20 scale-90 -ml-8 z-0">
                {(() => {
                  const prevIndex = currentReview === 0 ? reviews.length - 1 : currentReview - 1;
                  return (
                    <Card className="bg-card border-border h-20">
                      <CardContent className="p-2 h-full flex items-center">
                        <p className="text-foreground/90 text-xs leading-tight line-clamp-3">
                          "{reviews[prevIndex].text}"
                        </p>
                      </CardContent>
                    </Card>
                  );
                })()}
              </div>

              {/* Main review - центральный отзыв */}
              <div 
                className="flex-1 px-4 z-10"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <Card className="bg-card border-border h-28 shadow-lg">
                  <CardContent className="p-4 h-full flex flex-col justify-between">
                    <p className="text-foreground/90 text-sm italic leading-snug line-clamp-2">
                      "{reviews[currentReview].text}"
                    </p>
                    <div className="text-right mt-2">
                      <div className="font-semibold text-accent text-sm">— {reviews[currentReview].author}</div>
                      <div className="text-xs text-muted-foreground">{reviews[currentReview].role}</div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right peek - выглядывает из-за правого края */}
              <div className="flex-shrink-0 w-20 scale-90 -mr-8 z-0">
                {(() => {
                  const nextIndex = currentReview === reviews.length - 1 ? 0 : currentReview + 1;
                  return (
                    <Card className="bg-card border-border h-20">
                      <CardContent className="p-2 h-full flex items-center">
                        <p className="text-foreground/90 text-xs leading-tight line-clamp-3">
                          "{reviews[nextIndex].text}"
                        </p>
                      </CardContent>
                    </Card>
                  );
                })()}
              </div>
            </div>

            {/* Mobile dots indicator */}
            <div className="flex justify-center mt-6 space-x-1">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    index === currentReview ? 'bg-accent w-4' : 'bg-accent/30'
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