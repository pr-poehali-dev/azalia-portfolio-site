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
    setCurrentIndex((prev) => (prev + 1) % (portfolioItems.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + (portfolioItems.length - 2)) % (portfolioItems.length - 2));
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-amber-900/20 via-amber-800/30 to-black/60">
      <div className="container mx-auto max-w-5xl">
        
        {/* Navigation arrows */}
        <div className="flex justify-between items-center mb-8">
          <button 
            onClick={prevSlide}
            className="text-cream/60 hover:text-cream transition-colors cursor-pointer"
          >
            <span className="text-xl font-mono">{"<<<"}</span>
          </button>
          <button 
            onClick={nextSlide}
            className="text-cream/60 hover:text-cream transition-colors cursor-pointer"
          >
            <span className="text-xl font-mono">{">>>"}</span>
          </button>
        </div>

        {/* String line with clothespins */}
        <div className="relative overflow-hidden">
          {/* Rope/String */}
          <div className="absolute top-4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-200/60 to-transparent"></div>
          <div className="absolute top-4 left-16 right-16 h-px bg-amber-200/80"></div>
          
          {/* Photos hanging from rope */}
          <div 
            className="flex items-start gap-6 transition-transform duration-500 ease-out py-2"
            style={{
              transform: `translateX(-${currentIndex * 200}px)`
            }}
          >
            {portfolioItems.map((item, index) => (
              <div key={item.id} className="relative group cursor-pointer flex-shrink-0">
                
                {/* Clothespin */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="w-4 h-6 bg-gradient-to-b from-amber-200 to-amber-300 rounded-sm shadow-md">
                    <div className="absolute top-0.5 left-0.5 right-0.5 h-1.5 bg-amber-100 rounded-sm"></div>
                    <div className="absolute bottom-0.5 left-0.5 right-0.5 h-0.5 bg-amber-400 rounded-sm"></div>
                  </div>
                </div>
                
                {/* Photo */}
                <div 
                  className="w-48 h-60 bg-white p-2 shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-500"
                  style={{
                    transform: `rotate(${index % 2 === 0 ? '2deg' : '-2deg'}) ${index % 3 === 1 ? 'translateY(15px)' : ''}`
                  }}
                >
                  <div className="relative w-full h-full overflow-hidden bg-gray-100">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Gradient overlay at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    
                    {/* Type indicator */}
                    {item.type === 'video' && (
                      <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm rounded-full px-2 py-1 text-white text-xs flex items-center">
                        <Icon name="Play" size={10} className="mr-1" />
                        {item.duration}
                      </div>
                    )}
                    
                    {/* Title overlay */}
                    <div className="absolute bottom-2 left-2 right-2 text-white">
                      <h3 className="text-sm font-montserrat font-bold uppercase leading-tight">
                        {item.title.length > 30 ? `${item.title.substring(0, 30)}...` : item.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-6 bg-white/10 backdrop-blur-md rounded-full px-8 py-4 shadow-xl border border-white/20">
            <button 
              className="flex items-center px-6 py-3 bg-forest text-cream rounded-full hover:bg-forest/80 transition-all duration-300 font-medium shadow-lg"
              onClick={() => window.open('https://youtube.com/@azaluk', '_blank')}
            >
              <Icon name="ExternalLink" size={16} className="mr-2" />
              смотреть все работы
            </button>
            <button 
              className="flex items-center px-6 py-3 border border-white/30 text-cream rounded-full hover:bg-white/10 transition-all duration-300 font-medium"
              onClick={() => window.open('https://t.me/azaluk', '_blank')}
            >
              <Icon name="MessageCircle" size={16} className="mr-2" />
              написать
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativePortfolio;