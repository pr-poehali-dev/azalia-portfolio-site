import { useState, useRef } from 'react';
import Icon from '@/components/ui/icon';

const CreativePortfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const portfolioItems = [
    {
      id: '01',
      title: 'культурное пространство гэс-2',
      description: 'атмосферное освящение современного арт-центра через призму архитектуры и человеческих эмоций',
      image: '/img/9ba3555b-e97f-4b95-816d-667805624185.jpg',
      duration: '12:34',
      type: 'video',
      color: '#d4a574'
    },
    {
      id: '02', 
      title: 'путешествие на ретрит',
      description: 'история внутренней трансформации через смену пространства и погружение в практики осознанности',
      image: '/img/c79bdef9-1d6a-4f7d-9fb7-57977e73666f.jpg',
      duration: '18:45',
      type: 'video',
      color: '#6b8aa0'
    },
    {
      id: '03',
      title: 'уикенд на базе отдыха',
      description: 'простые радости загородной жизни, где каждый момент наполнен присутствием и благодарностью',
      image: '/img/c79bdef9-1d6a-4f7d-9fb7-57977e73666f.jpg',
      duration: '09:12',
      type: 'video',
      color: '#8b7a6b'
    },
    {
      id: '04',
      title: 'медитативная лепка',
      description: 'процесс создания через прикосновение к глине становится метафорой внутреннего творчества',
      image: '/img/0e64baa5-9fcc-433e-bd61-143e7fa9bdb6.jpg',
      duration: '15:17',
      type: 'video',
      color: '#a67c52'
    },
    {
      id: '05',
      title: 'женский ретрит в природе',
      description: 'совместный опыт исцеления и поддержки в кругу единомышленниц среди лесной тишины',
      image: '/img/c79bdef9-1d6a-4f7d-9fb7-57977e73666f.jpg',
      duration: '45 фото',
      type: 'photo',
      color: '#7a8471'
    },
    {
      id: '06',
      title: 'випассана практика',
      description: 'документирование глубокой медитативной практики и состояний внутренней тишины',
      image: '/img/c79bdef9-1d6a-4f7d-9fb7-57977e73666f.jpg',
      duration: '32 фото',
      type: 'photo',
      color: '#5a5a52'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % portfolioItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
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
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <section className="py-16 bg-cream min-h-screen relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-6xl text-forest/20 rotate-12">✦</div>
      <div className="absolute top-32 right-20 text-4xl text-sand/40 -rotate-12">✧</div>
      <div className="absolute bottom-40 left-16 text-5xl text-forest/30 rotate-45">❋</div>
      <div className="absolute bottom-20 right-10 text-3xl text-sand/50 -rotate-6">◇</div>
      
      {/* Vintage border frame */}
      <div className="absolute inset-4 border-2 border-forest/20 pointer-events-none"></div>
      <div className="absolute inset-8 border border-sand/30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Header with tabs design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          <div className="text-center py-4 border-b-2 border-forest/30">
            <h3 className="text-lg font-serif text-forest/70 uppercase tracking-wide">воспоминания</h3>
          </div>
          <div className="text-center py-4 border-b-2 border-forest bg-forest/5">
            <h2 className="text-2xl font-serif text-forest uppercase tracking-wider">избранные работы</h2>
          </div>
          <div className="text-center py-4 border-b-2 border-forest/30">
            <h3 className="text-lg font-serif text-forest/70 uppercase tracking-wide">вдохновение</h3>
          </div>
        </div>

        {/* Main content with asymmetric layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left side - Text content */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative">
              <h1 className="text-5xl md:text-6xl font-serif text-forest leading-none">
                Next Level of
                <br />
                <span className="text-6xl md:text-7xl italic">ТВОРЧЕСТВА</span>
              </h1>
              <div className="absolute -top-4 -right-8 text-3xl text-sand/60 rotate-12">✦</div>
            </div>
            
            <div className="relative bg-cream/80 p-6 rounded-2xl border border-sand/20">
              <p className="text-forest/80 text-base leading-relaxed font-light">
                {portfolioItems[currentIndex].description}
              </p>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-sand/40 rounded-full"></div>
            </div>

            {/* Quote section */}
            <div className="relative mt-12 p-6 bg-forest/5 rounded-xl border-l-4 border-forest/30">
              <p className="text-forest/70 text-sm italic leading-relaxed">
                "каждый кадр рассказывает историю, которая живет в сердце зрителя долгие годы после просмотра"
              </p>
              <div className="mt-4 text-xs uppercase text-forest/50 tracking-wider">
                — философия творчества
              </div>
              <div className="absolute -top-2 -left-2 text-2xl text-sand/50">❝</div>
            </div>
          </div>

          {/* Right side - Image with organic shapes */}
          <div className="lg:col-span-7 relative">
            {/* Navigation arrows */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-cream/90 hover:bg-cream text-forest p-3 rounded-full shadow-lg transition-all duration-300 border border-sand/30"
            >
              <Icon name="ChevronLeft" size={20} />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-cream/90 hover:bg-cream text-forest p-3 rounded-full shadow-lg transition-all duration-300 border border-sand/30"
            >
              <Icon name="ChevronRight" size={20} />
            </button>

            {/* Image container with organic shape */}
            <div 
              className="relative w-full h-96 md:h-[500px] overflow-hidden"
              style={{
                clipPath: 'polygon(0% 15%, 15% 0%, 85% 0%, 100% 20%, 100% 80%, 85% 100%, 15% 100%, 0% 85%)'
              }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Background decorative shape */}
              <div className="absolute -inset-4 bg-gradient-to-br from-sand/30 to-forest/20 -z-10"
                   style={{
                     clipPath: 'polygon(0% 10%, 20% 0%, 80% 0%, 100% 25%, 100% 75%, 80% 100%, 20% 100%, 0% 90%)'
                   }}
              ></div>

              <div className="relative w-full h-full">
                <img 
                  src={portfolioItems[currentIndex].image} 
                  alt={portfolioItems[currentIndex].title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest/40 via-transparent to-transparent"></div>
                
                {/* Type indicator with vintage style */}
                {portfolioItems[currentIndex].type === 'video' && (
                  <div className="absolute top-6 right-6 bg-cream/90 backdrop-blur-sm rounded-full px-4 py-2 text-forest text-sm flex items-center border border-sand/30">
                    <Icon name="Play" size={14} className="mr-2" />
                    {portfolioItems[currentIndex].duration}
                  </div>
                )}
                
                {/* Project info overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-cream/95 backdrop-blur-sm rounded-xl p-4 border border-sand/30">
                    <div className="text-xs font-mono text-forest/70 mb-2">({portfolioItems[currentIndex].id})</div>
                    <h3 className="text-xl font-serif text-forest uppercase mb-2 leading-tight">
                      {portfolioItems[currentIndex].title}
                    </h3>
                  </div>
                </div>
              </div>
              
              {/* Decorative stars around image */}
              <div className="absolute -top-6 -left-6 text-2xl text-sand/60 rotate-12">✦</div>
              <div className="absolute -top-4 -right-8 text-xl text-forest/40 -rotate-12">✧</div>
              <div className="absolute -bottom-8 -left-4 text-3xl text-sand/50 rotate-45">❋</div>
            </div>

            {/* Side images with organic shapes */}
            <div className="hidden lg:block absolute -right-8 top-20 w-24 h-32 opacity-40">
              {currentIndex < portfolioItems.length - 1 && (
                <div className="w-full h-full overflow-hidden rounded-full border-4 border-cream shadow-lg">
                  <img 
                    src={portfolioItems[currentIndex + 1].image} 
                    alt={portfolioItems[currentIndex + 1].title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>

            <div className="hidden lg:block absolute -left-12 bottom-16 w-28 h-20 opacity-50">
              {currentIndex > 0 && (
                <div className="w-full h-full overflow-hidden"
                     style={{
                       clipPath: 'ellipse(50% 40% at 50% 50%)'
                     }}>
                  <img 
                    src={portfolioItems[currentIndex - 1].image} 
                    alt={portfolioItems[currentIndex - 1].title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom section with color palette and credits */}
        <div className="mt-16 pt-8 border-t border-forest/20">
          {/* Color palette */}
          <div className="text-center mb-8">
            <h4 className="text-sm font-serif text-forest/70 uppercase tracking-wider mb-4">color palette</h4>
            <div className="flex justify-center space-x-4">
              <div className="w-12 h-6 bg-forest rounded-full shadow-sm border border-sand/30"></div>
              <div className="w-12 h-6 bg-[#8b7a6b] rounded-full shadow-sm border border-sand/30"></div>
              <div className="w-12 h-6 bg-[#a67c52] rounded-full shadow-sm border border-sand/30"></div>
              <div className="w-12 h-6 bg-sand rounded-full shadow-sm border border-forest/30"></div>
            </div>
          </div>

          {/* Navigation dots with vintage style */}
          <div className="flex justify-center space-x-3 mb-8">
            {portfolioItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-8 h-3 bg-forest rounded-full' 
                    : 'w-3 h-3 bg-forest/30 rounded-full hover:bg-forest/50'
                }`}
              />
            ))}
          </div>

          {/* Credits section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-xs text-forest/60">
            <div className="p-3 border border-sand/30 rounded-lg">
              <div className="font-serif mb-1">Pictures by</div>
              <div className="font-mono">@creative.studio</div>
            </div>
            <div className="p-3 border border-sand/30 rounded-lg">
              <div className="font-serif mb-1">Edited by</div>
              <div className="font-mono">@visual.poet</div>
            </div>
            <div className="p-3 border border-sand/30 rounded-lg">
              <div className="font-serif mb-1">Concepts by</div>
              <div className="font-mono">@story.weaver</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativePortfolio;