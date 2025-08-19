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
        {/* Fan Layout with Overlapping Folders */}
        <div className="relative flex justify-center items-center min-h-[400px]">
          {portfolioItems.map((item, index) => (
            <div 
              key={item.id} 
              className="absolute"
              style={{
                transform: `rotate(${(index - 4) * 8}deg) translateY(${Math.abs(index - 4) * 10}px)`,
                zIndex: hoveredItem === index ? 20 : 10 - Math.abs(index - 4),
                transformOrigin: 'center bottom'
              }}
            >
              {/* Folder shape container */}
              <div 
                className="relative group cursor-pointer overflow-hidden transition-all duration-300 hover:scale-110"
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
                style={{
                  width: '220px',
                  height: '280px',
                  clipPath: 'polygon(0% 15%, 20% 15%, 25% 0%, 100% 0%, 100% 100%, 0% 100%)',
                  backgroundColor: '#a8a693'
                }}
              >
                {/* Folder tab */}
                <div 
                  className="absolute top-0 left-0"
                  style={{
                    width: '25%',
                    height: '15%',
                    backgroundColor: '#8b7f6b',
                    clipPath: 'polygon(0% 0%, 80% 0%, 100% 100%, 0% 100%)'
                  }}
                ></div>

                {/* Image container */}
                <div className="relative w-full h-full overflow-hidden">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    style={{
                      clipPath: 'polygon(0% 15%, 20% 15%, 25% 0%, 100% 0%, 100% 100%, 0% 100%)'
                    }}
                  />
                  
                  {/* Gradient overlay */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"
                    style={{
                      clipPath: 'polygon(0% 15%, 20% 15%, 25% 0%, 100% 0%, 100% 100%, 0% 100%)'
                    }}
                  ></div>

                  {/* Content overlay */}
                  <div className="absolute bottom-6 left-6 text-white max-w-[70%]">
                    <div className="text-xs font-mono mb-2 opacity-80">({item.id})</div>
                    <h3 className="text-lg font-bold uppercase mb-1 leading-tight">{item.title}</h3>
                    <p className="text-sm opacity-90 lowercase mb-3 line-clamp-2">{item.subtitle}</p>
                    <div className="flex items-center text-xs">
                      <Icon name={item.type === 'video' ? 'Play' : 'Camera'} size={14} className="mr-2" />
                      <span>{item.duration}</span>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  {hoveredItem === index && (
                    <div 
                      className="absolute inset-0 bg-black/30 transition-opacity duration-300"
                      style={{
                        clipPath: 'polygon(0% 15%, 25% 15%, 30% 0%, 100% 0%, 100% 100%, 0% 100%)'
                      }}
                    >
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <Icon name={item.type === 'video' ? 'Play' : 'Eye'} size={32} className="text-white/80" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Folder edge shadow */}
                <div 
                  className="absolute top-0 left-0 w-full h-full pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0,0,0,0.1) 0%, transparent 15%)',
                    clipPath: 'polygon(0% 15%, 25% 15%, 30% 0%, 100% 0%, 100% 100%, 0% 100%)'
                  }}
                ></div>
              </div>

              {/* Label below folder */}
              <div className="mt-4 text-center">
                <div className="text-sm font-mono text-forest/60 mb-1">({item.id})</div>
                <h4 className="text-base font-bold uppercase text-forest">{item.category}</h4>
              </div>
            </div>
          ))}
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