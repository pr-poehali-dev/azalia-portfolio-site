import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'services', 'vlog', 'collaboration', 'reviews', 'support', 'contacts'];
      const scrollPos = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPos >= element.offsetTop && scrollPos < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'Обо мне' },
    { id: 'services', label: 'Услуги' },
    { id: 'vlog', label: 'Влог под ключ' },
    { id: 'collaboration', label: 'Сотрудничество' },
    { id: 'reviews', label: 'Отзывы' },
    { id: 'support', label: 'Поддержать' },
    { id: 'contacts', label: 'Контакты' }
  ];

  const filmStrip = [
    'https://cdn.poehali.dev/files/aacb02f5-853c-4511-89c9-f6fd5714da7a.jpg',
    'https://cdn.poehali.dev/files/9b170a93-eea7-476b-8160-d67784a3a587.jpg',
    'https://cdn.poehali.dev/files/897f8f74-fa81-437f-bd57-8576ee19afbc.jpg',
    'https://cdn.poehali.dev/files/aacb02f5-853c-4511-89c9-f6fd5714da7a.jpg',
    'https://cdn.poehali.dev/files/9b170a93-eea7-476b-8160-d67784a3a587.jpg',
    'https://cdn.poehali.dev/files/897f8f74-fa81-437f-bd57-8576ee19afbc.jpg'
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Sticky Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <h1 className="text-2xl font-caveat font-bold text-accent">Азалия</h1>
              <span className="text-sm text-muted-foreground">@azaluk</span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm transition-colors hover:text-accent ${
                    activeSection === item.id ? 'text-accent' : 'text-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <Button 
              onClick={() => window.open('https://t.me/azaluk', '_blank')}
              className="bg-accent text-accent-foreground hover:bg-accent/80"
            >
              Написать в Telegram
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="relative mb-8">
              <img
                src="https://cdn.poehali.dev/files/9b170a93-eea7-476b-8160-d67784a3a587.jpg"
                alt="Hero background"
                className="w-full h-96 object-cover rounded-3xl opacity-80"
              />
              <div className="absolute inset-0 bg-background/40 rounded-3xl flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-5xl md:text-6xl font-cormorant font-bold mb-6 text-cream leading-tight">
                    Сохраняю живые<br />моменты красиво<br />и просто
                  </h1>
                  <p className="text-xl md:text-2xl text-cream/90 mb-8 max-w-3xl mx-auto">
                    Живая фото- и видеосъёмка, монтаж и влоги под ключ — без тяжёлой постановки и долгой ретуши
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      size="lg"
                      onClick={() => scrollToSection('services')}
                      className="bg-cream text-forest hover:bg-cream/90 rounded-full px-8"
                    >
                      Смотреть примеры
                    </Button>
                    <Button 
                      size="lg"
                      variant="outline"
                      onClick={() => window.open('https://t.me/azaluk', '_blank')}
                      className="border-cream text-cream hover:bg-cream hover:text-forest rounded-full px-8"
                    >
                      Связаться в TG
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Film Strip */}
          <div className="overflow-hidden">
            <div className="flex space-x-4 animate-pulse">
              {filmStrip.map((src, index) => (
                <div key={index} className="flex-shrink-0">
                  <img
                    src={src}
                    alt={`Frame ${index + 1}`}
                    className="w-24 h-16 object-cover rounded-lg opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-cormorant font-bold mb-6 text-accent">Обо мне</h2>
                <div className="prose prose-lg">
                  <p className="text-foreground/90 leading-relaxed">
                    Привет! Я Азалия — снимаю жизнь такой, как она есть: тёплой, честной, красивой в мелочах. 
                    Люблю атмосферу ретритов, праздников, семейных встреч и тихих будней.
                  </p>
                  <p className="text-foreground/90 leading-relaxed mt-4">
                    Делаю живые фотографии и видео без тяжёлой обработки, отдаю быстро и бережно. 
                    Здесь вы поймёте мой стиль и сразу увидите, подходит ли он вам.
                  </p>
                </div>
                <div className="mt-6">
                  <span className="text-2xl font-caveat text-accent">— Азалия @azaluk</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {filmStrip.slice(0, 4).map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-32 object-cover rounded-2xl hover:scale-105 transition-transform"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-cormorant font-bold text-center mb-12 text-accent">Услуги</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {[
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
            ].map((service, index) => (
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

          <div className="text-center text-sm text-muted-foreground">
            Точная смета — в TG после 3–5 вопросов (длительность, локация, срок)
          </div>
        </div>
      </section>

      {/* Vlog Section */}
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
                      {[
                        { icon: 'Video', text: 'съёмка 1 день' },
                        { icon: 'Clock', text: 'сдача до 7 дней' },
                        { icon: 'Link', text: 'YouTube-ссылка + исходники на Диске' }
                      ].map((badge, index) => (
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

      {/* Collaboration Section */}
      <section id="collaboration" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-cormorant font-bold mb-6 text-accent">Сотрудничество</h2>
          <p className="text-lg leading-relaxed mb-8 text-muted-foreground">
            Открыта к тёплым коллаборациям и аккуратным интеграциям — только то, что резонирует с атмосферой канала 
            (slow life, велнесс, творчество, места силы, уютные бренды). Форматы: интеграции во влоги, съёмка контента, 
            совместные проекты. Напишите, придумаем красиво.
          </p>
          <Button 
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/80"
            onClick={() => window.open('https://t.me/azaluk', '_blank')}
          >
            Обсудить коллаборацию
          </Button>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-cormorant font-bold text-center mb-12 text-accent">Отзывы</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: 'Ваши влоги — как тёплое одеяло. После просмотра хочется жить медленнее. Спасибо!',
                author: 'Наталья',
                role: 'зрительница'
              },
              {
                text: 'Фото со свадьбы — будто маленький фильм о нас. Живые лица, свет, смех — восторг!',
                author: 'Антон и Мария',
                role: 'молодожёны'
              },
              {
                text: 'Влог об открытии студии передал атмосферу до мурашек. Гости пересылают друзьям!',
                author: 'команда пространства',
                role: 'клиенты'
              }
            ].map((review, index) => (
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
                {[
                  { icon: 'MessageCircle', label: 'Telegram', url: 'https://t.me/azaluk' },
                  { icon: 'Youtube', label: 'YouTube', url: 'https://youtube.com/@azaluk' },
                  { icon: 'Instagram', label: 'Instagram', url: '#' },
                  { icon: 'Heart', label: 'VK', url: '#' }
                ].map((social, index) => (
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
    </div>
  );
};

export default Index;