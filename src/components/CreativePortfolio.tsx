import { useState } from 'react';
import Icon from '@/components/ui/icon';

const CreativePortfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  return (
    <section className="py-12 px-4 bg-cream">
      <div className="container mx-auto max-w-4xl">
        
        {/* Title and navigation */}
        <div className="text-center mb-2">

          
          {/* Navigation arrows */}
          <div className="flex justify-between items-center mb-2">
            <button 
              onClick={prevSlide}
              className="text-forest/60 hover:text-forest transition-colors cursor-pointer"
            >
              <span className="text-lg font-mono">{"<<<"}</span>
            </button>
            <button 
              onClick={nextSlide}
              className="text-forest/60 hover:text-forest transition-colors cursor-pointer"
            >
              <span className="text-lg font-mono">{">>>"}</span>
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`
            }}
          >
            {portfolioItems.map((item, index) => (
              <div key={item.id} className="w-full flex-shrink-0 px-4">
                <div className="relative group cursor-pointer">
                  <div className="relative w-full h-96 overflow-hidden rounded-2xl shadow-xl bg-gray-100">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Type indicator */}
                    {item.type === 'video' && (
                      <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm rounded-full px-3 py-2 text-white text-sm flex items-center">
                        <Icon name="Play" size={16} className="mr-2" />
                        {item.duration}
                      </div>
                    )}
                    
                    {/* Content overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="text-xs font-mono opacity-70 mb-2">({item.id})</div>
                      <h3 className="text-xl font-montserrat font-bold uppercase mb-3 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-sm opacity-90 lowercase leading-relaxed">
                        {item.description.length > 150 
                          ? `${item.description.substring(0, 150)}...` 
                          : item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Dots indicator */}
          <div className="flex justify-center mt-6 space-x-2">
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

        {/* Bottom section */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-forest/20">
            <button 
              className="flex items-center px-4 py-2 bg-forest text-cream rounded-full hover:bg-forest/80 transition-all duration-300 font-medium text-sm"
              onClick={() => window.open('https://youtube.com/@azaluk', '_blank')}
            >
              <Icon name="ExternalLink" size={14} className="mr-2" />
              смотреть все работы
            </button>
            <button 
              className="flex items-center px-4 py-2 border border-forest text-forest rounded-full hover:bg-forest hover:text-cream transition-all duration-300 font-medium text-sm"
              onClick={() => window.open('https://t.me/azaluk', '_blank')}
            >
              <Icon name="MessageCircle" size={14} className="mr-2" />
              написать
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativePortfolio;