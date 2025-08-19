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
    <section className="py-12 bg-cream">


      {/* Full-width carousel */}
      <div className="relative w-full">
        {/* Desktop navigation arrows */}
        <button 
          onClick={prevSlide}
          className="hidden md:block absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300"
        >
          <Icon name="ChevronLeft" size={20} />
        </button>
        <button 
          onClick={nextSlide}
          className="hidden md:block absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300"
        >
          <Icon name="ChevronRight" size={20} />
        </button>
        
        <div className="flex items-center w-full overflow-hidden">
          {/* Left preview - edge positioned */}
          <div className="flex-shrink-0 w-20 md:w-32 opacity-40 scale-75 transition-all duration-500 -ml-10 md:-ml-16">
            {currentIndex > 0 && (
              <div className="relative h-32 md:h-64 overflow-hidden rounded-r-xl">
                <img 
                  src={portfolioItems[currentIndex - 1].image} 
                  alt={portfolioItems[currentIndex - 1].title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>

          {/* Main centered image - takes remaining space */}
          <div 
            className="flex-1 px-4"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="relative group cursor-pointer max-w-4xl mx-auto">
              <div className="relative w-full h-80 md:h-96 overflow-hidden rounded-2xl shadow-xl bg-gray-100">
                <img 
                  src={portfolioItems[currentIndex].image} 
                  alt={portfolioItems[currentIndex].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Type indicator */}
                {portfolioItems[currentIndex].type === 'video' && (
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm rounded-full px-3 py-2 text-white text-sm flex items-center">
                    <Icon name="Play" size={16} className="mr-2" />
                    {portfolioItems[currentIndex].duration}
                  </div>
                )}
                
                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                  <div className="text-xs font-mono opacity-70 mb-2">({portfolioItems[currentIndex].id})</div>
                  <h3 className="text-lg md:text-xl font-montserrat font-bold uppercase mb-2 md:mb-3 leading-tight">
                    {portfolioItems[currentIndex].title}
                  </h3>
                  <p className="text-sm opacity-90 lowercase leading-relaxed">
                    {portfolioItems[currentIndex].description.length > 150 
                      ? `${portfolioItems[currentIndex].description.substring(0, 150)}...` 
                      : portfolioItems[currentIndex].description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right preview - edge positioned */}
          <div className="flex-shrink-0 w-20 md:w-32 opacity-40 scale-75 transition-all duration-500 -mr-10 md:-mr-16">
            {currentIndex < portfolioItems.length - 1 && (
              <div className="relative h-32 md:h-64 overflow-hidden rounded-l-xl">
                <img 
                  src={portfolioItems[currentIndex + 1].image} 
                  alt={portfolioItems[currentIndex + 1].title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        </div>
        
        {/* Dots indicator */}
        <div className="flex justify-center mt-6 space-x-2 px-6">
          {portfolioItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-forest w-6' : 'bg-forest/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreativePortfolio;