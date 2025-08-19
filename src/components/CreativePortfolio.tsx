import { useState } from 'react';
import Icon from '@/components/ui/icon';

const CreativePortfolio = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const portfolioItems = [
    {
      id: '01',
      title: 'культурное пространство',
      subtitle: 'освящение гэс-2',
      category: 'видеоблог',
      image: '/img/9ba3555b-e97f-4b95-816d-667805624185.jpg',
      duration: '12:34',
      type: 'video'
    },
    {
      id: '02', 
      title: 'путешествие-ретрит',
      subtitle: 'поездка на перезагрузку',
      category: 'путешествие',
      image: '/img/c79bdef9-1d6a-4f7d-9fb7-57977e73666f.jpg',
      duration: '18:45',
      type: 'video'
    },
    {
      id: '03',
      title: 'база отдыха',
      subtitle: 'уикенд на природе',
      category: 'лайфстайл',
      image: '/img/c79bdef9-1d6a-4f7d-9fb7-57977e73666f.jpg',
      duration: '09:12',
      type: 'video'
    },
    {
      id: '04',
      title: 'распаковка',
      subtitle: 'новые находки',
      category: 'обзор',
      image: '/img/c79bdef9-1d6a-4f7d-9fb7-57977e73666f.jpg',
      duration: '06:28',
      type: 'video'
    },
    {
      id: '05',
      title: 'лепка из глины',
      subtitle: 'творческий процесс',
      category: 'творчество',
      image: '/img/0e64baa5-9fcc-433e-bd61-143e7fa9bdb6.jpg',
      duration: '15:17',
      type: 'video'
    },
    {
      id: '06',
      title: 'поехали! сервис',
      subtitle: 'обзор ии-платформы',
      category: 'технологии',
      image: '/img/9ba3555b-e97f-4b95-816d-667805624185.jpg',
      duration: '11:03',
      type: 'video'
    },
    {
      id: '07',
      title: 'женский ретрит',
      subtitle: 'съемка мероприятия',
      category: 'событие',
      image: '/img/c79bdef9-1d6a-4f7d-9fb7-57977e73666f.jpg',
      duration: '45 фото',
      type: 'photo'
    },
    {
      id: '08',
      title: 'випассана',
      subtitle: 'медитативная практика',
      category: 'духовность',
      image: '/img/c79bdef9-1d6a-4f7d-9fb7-57977e73666f.jpg',
      duration: '32 фото',
      type: 'photo'
    },
    {
      id: '09',
      title: 'свадебная история',
      subtitle: 'короткий фильм',
      category: 'свадьба',
      image: '/img/c79bdef9-1d6a-4f7d-9fb7-57977e73666f.jpg',
      duration: '03:24',
      type: 'video'
    }
  ];

  return (
    <section className="py-20 px-4 bg-cream text-forest">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-6xl font-montserrat font-bold uppercase tracking-tight mb-4">
            мой творческий<br />портфель
          </h2>
          <div className="w-24 h-1 bg-forest"></div>
        </div>

        {/* Swiss Grid Layout */}
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {/* Large featured item */}
          <div className="col-span-12 md:col-span-8 lg:col-span-6">
            <div 
              className="relative group cursor-pointer h-80 md:h-96 overflow-hidden bg-forest/10 rounded-sm"
              onMouseEnter={() => setHoveredItem(0)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <img 
                src={portfolioItems[0].image}
                alt={portfolioItems[0].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              
              {/* Content overlay */}
              <div className="absolute bottom-6 left-6 text-white">
                <div className="text-sm font-mono mb-2 opacity-80">({portfolioItems[0].id})</div>
                <h3 className="text-2xl font-bold uppercase mb-1">{portfolioItems[0].title}</h3>
                <p className="text-base opacity-90 lowercase">{portfolioItems[0].subtitle}</p>
                <div className="flex items-center mt-3 text-sm">
                  <Icon name={portfolioItems[0].type === 'video' ? 'Play' : 'Camera'} size={16} className="mr-2" />
                  <span>{portfolioItems[0].duration}</span>
                  <span className="mx-2">•</span>
                  <span className="uppercase tracking-wider">{portfolioItems[0].category}</span>
                </div>
              </div>

              {/* Hover overlay */}
              {hoveredItem === 0 && (
                <div className="absolute inset-0 bg-black/20 transition-opacity duration-300">
                  <div className="absolute center-center">
                    <Icon name="Play" size={48} className="text-white/80" />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Grid of smaller items */}
          <div className="col-span-12 md:col-span-4 lg:col-span-6 grid grid-cols-2 gap-4 md:gap-6">
            {portfolioItems.slice(1, 5).map((item, index) => (
              <div 
                key={item.id}
                className="relative group cursor-pointer h-36 md:h-44 overflow-hidden bg-forest/10 rounded-sm"
                onMouseEnter={() => setHoveredItem(index + 1)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                
                {/* Content */}
                <div className="absolute bottom-3 left-3 text-white">
                  <div className="text-xs font-mono mb-1 opacity-70">({item.id})</div>
                  <h4 className="text-sm font-bold uppercase leading-tight mb-1">{item.title}</h4>
                  <div className="flex items-center text-xs">
                    <Icon name={item.type === 'video' ? 'Play' : 'Camera'} size={12} className="mr-1" />
                    <span>{item.duration}</span>
                  </div>
                </div>

                {/* Hover effect */}
                {hoveredItem === index + 1 && (
                  <div className="absolute inset-0 bg-black/30 transition-opacity duration-300">
                    <div className="absolute center-center">
                      <Icon name={item.type === 'video' ? 'Play' : 'Eye'} size={24} className="text-white/80" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom row - varied sizes */}
          <div className="col-span-12 grid grid-cols-12 gap-4 md:gap-6 mt-4 md:mt-6">
            {/* Medium item */}
            <div className="col-span-12 md:col-span-5">
              <div 
                className="relative group cursor-pointer h-48 overflow-hidden bg-forest/10 rounded-sm"
                onMouseEnter={() => setHoveredItem(5)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <img 
                  src={portfolioItems[5].image}
                  alt={portfolioItems[5].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-xs font-mono mb-1 opacity-70">({portfolioItems[5].id})</div>
                  <h4 className="text-lg font-bold uppercase mb-1">{portfolioItems[5].title}</h4>
                  <p className="text-sm opacity-90 lowercase mb-2">{portfolioItems[5].subtitle}</p>
                  <div className="flex items-center text-xs">
                    <Icon name="Play" size={14} className="mr-2" />
                    <span>{portfolioItems[5].duration}</span>
                    <span className="mx-2">•</span>
                    <span className="uppercase">{portfolioItems[5].category}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Two small items */}
            <div className="col-span-12 md:col-span-7 grid grid-cols-2 gap-4 md:gap-6">
              {portfolioItems.slice(6, 8).map((item, index) => (
                <div 
                  key={item.id}
                  className="relative group cursor-pointer h-48 overflow-hidden bg-forest/10 rounded-sm"
                  onMouseEnter={() => setHoveredItem(index + 6)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-xs font-mono mb-1 opacity-70">({item.id})</div>
                    <h4 className="text-base font-bold uppercase leading-tight mb-1">{item.title}</h4>
                    <p className="text-xs opacity-90 lowercase mb-2">{item.subtitle}</p>
                    <div className="flex items-center text-xs">
                      <Icon name={item.type === 'video' ? 'Play' : 'Camera'} size={12} className="mr-1" />
                      <span>{item.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Last item - wide */}
          <div className="col-span-12 mt-4 md:mt-6">
            <div 
              className="relative group cursor-pointer h-64 overflow-hidden bg-forest/10 rounded-sm"
              onMouseEnter={() => setHoveredItem(8)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <img 
                src={portfolioItems[8].image}
                alt={portfolioItems[8].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent"></div>
              
              <div className="absolute left-8 top-1/2 transform -translate-y-1/2 text-white max-w-md">
                <div className="text-sm font-mono mb-2 opacity-80">({portfolioItems[8].id})</div>
                <h3 className="text-3xl font-bold uppercase mb-2">{portfolioItems[8].title}</h3>
                <p className="text-lg opacity-90 lowercase mb-4">{portfolioItems[8].subtitle}</p>
                <div className="flex items-center text-sm">
                  <Icon name="Play" size={16} className="mr-2" />
                  <span>{portfolioItems[8].duration}</span>
                  <span className="mx-3">•</span>
                  <span className="uppercase tracking-wider">{portfolioItems[8].category}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom text */}
        <div className="mt-16 text-center">
          <p className="text-lg font-light lowercase text-forest/70 max-w-2xl mx-auto">
            каждый проект — отдельная история, рассказанная через призму искреннности и внимания к деталям
          </p>
        </div>
      </div>
    </section>
  );
};

export default CreativePortfolio;