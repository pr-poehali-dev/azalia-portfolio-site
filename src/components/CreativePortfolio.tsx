import { useState } from 'react';
import Icon from '@/components/ui/icon';

const CreativePortfolio = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

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
        {/* Interactive Fan Layout */}
        <div className="relative">
          {/* Header with expand/collapse toggle */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-montserrat font-bold uppercase mb-6 text-forest">портфолио</h2>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center px-8 py-4 bg-forest text-cream rounded-full hover:bg-forest/80 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Icon name={isExpanded ? "Minimize2" : "Maximize2"} size={18} className="mr-3" />
              <span className="font-medium">{isExpanded ? 'свернуть веер' : 'развернуть веер'}</span>
            </button>
            <p className="text-sm text-forest/70 mt-4 max-w-lg mx-auto lowercase leading-relaxed">
              {isExpanded 
                ? 'нажмите на любую папку для выбора проекта • изучайте детали каждой работы' 
                : 'наведите для предпросмотра • разверните веер для полного погружения в портфолио'
              }
            </p>
          </div>

          {/* Fan container */}
          <div className="relative flex justify-center items-center min-h-[600px] overflow-hidden">
            {portfolioItems.map((item, index) => {
              const isActive = hoveredItem === index || selectedItem === index;
              const fanRotation = isExpanded ? (index - 4) * 28 : (index - 4) * 8;
              const fanSpread = isExpanded ? 140 : 60;
              
              return (
                <div 
                  key={item.id} 
                  className="absolute transition-all duration-700 ease-out"
                  style={{
                    transform: isExpanded 
                      ? `rotate(${fanRotation}deg) translateY(-${fanSpread}px) scale(${isActive ? 1.15 : 0.95})`
                      : `rotate(${fanRotation}deg) translateY(${Math.abs(index - 4) * 12}px) scale(${isActive ? 1.08 : 1})`,
                    zIndex: isActive ? 40 : isExpanded ? 20 : (15 - Math.abs(index - 4)),
                    transformOrigin: 'center bottom',
                    filter: isExpanded && !isActive ? 'brightness(0.75) saturate(0.6) blur(0.5px)' : 'none'
                  }}
                >
                  {/* Folder shape container */}
                  <div 
                    className="relative group cursor-pointer overflow-hidden transition-all duration-500"
                    onMouseEnter={() => setHoveredItem(index)}
                    onMouseLeave={() => setHoveredItem(null)}
                    onClick={() => {
                      setSelectedItem(selectedItem === index ? null : index);
                      if (!isExpanded) setIsExpanded(true);
                    }}
                    style={{
                      width: '250px',
                      height: '320px',
                      clipPath: 'polygon(0% 15%, 18% 15%, 23% 0%, 100% 0%, 100% 100%, 0% 100%)',
                      backgroundColor: isActive ? '#6b5b4d' : '#a8a693',
                      boxShadow: isActive 
                        ? '0 25px 50px rgba(0,0,0,0.4), 0 0 0 3px rgba(107, 91, 77, 0.6), 0 0 20px rgba(107, 91, 77, 0.3)' 
                        : '0 10px 25px rgba(0,0,0,0.2), 0 2px 10px rgba(0,0,0,0.1)'
                    }}
                  >
                    {/* Folder tab with gradient */}
                    <div 
                      className="absolute top-0 left-0 transition-all duration-300"
                      style={{
                        width: '23%',
                        height: '15%',
                        background: isActive 
                          ? 'linear-gradient(135deg, #5a4d42, #6b5b4d, #7a6b5e)' 
                          : 'linear-gradient(135deg, #8b7f6b, #a8a693, #b5ab96)',
                        clipPath: 'polygon(0% 0%, 78% 0%, 100% 100%, 0% 100%)',
                        boxShadow: 'inset 0 1px 3px rgba(255,255,255,0.2)'
                      }}
                    ></div>

                    {/* Ambient glow effect */}
                    {isActive && (
                      <div 
                        className="absolute -inset-4 opacity-60 blur-xl transition-opacity duration-700"
                        style={{
                          background: 'radial-gradient(ellipse, rgba(107, 91, 77, 0.4) 0%, rgba(107, 91, 77, 0.2) 40%, transparent 70%)',
                          clipPath: 'polygon(0% 15%, 18% 15%, 23% 0%, 100% 0%, 100% 100%, 0% 100%)'
                        }}
                      ></div>
                    )}

                    {/* Image container */}
                    <div className="relative w-full h-full overflow-hidden">
                      <img 
                        src={item.image}
                        alt={item.title}
                        className={`w-full h-full object-cover transition-all duration-700 ${
                          isActive ? 'scale-110 brightness-115 contrast-105' : 'group-hover:scale-105 group-hover:brightness-110'
                        }`}
                        style={{
                          clipPath: 'polygon(0% 15%, 18% 15%, 23% 0%, 100% 0%, 100% 100%, 0% 100%)'
                        }}
                      />
                      
                      {/* Multi-layer gradient overlay */}
                      <div 
                        className="absolute inset-0 transition-opacity duration-500"
                        style={{
                          background: isActive 
                            ? 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.1) 70%, transparent 100%)'
                            : 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 50%, transparent 80%)',
                          clipPath: 'polygon(0% 15%, 18% 15%, 23% 0%, 100% 0%, 100% 100%, 0% 100%)'
                        }}
                      ></div>

                      {/* Progress indicator for videos */}
                      {item.type === 'video' && isActive && (
                        <div 
                          className="absolute bottom-20 left-6 right-6 h-1.5 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm"
                        >
                          <div 
                            className="h-full bg-gradient-to-r from-white/60 to-white/80 rounded-full transition-all duration-2000 ease-out"
                            style={{ width: '42%' }}
                          ></div>
                        </div>
                      )}

                      {/* Enhanced content overlay */}
                      <div className={`absolute bottom-6 left-6 right-6 text-white transition-all duration-500 ${
                        isActive ? 'transform translate-y-0 opacity-100' : 'transform translate-y-3 opacity-90'
                      }`}>
                        <div className="flex items-center justify-between mb-3">
                          <div className="text-xs font-mono bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20">
                            ({item.id})
                          </div>
                          <div className="flex items-center text-xs bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20">
                            <Icon name={item.type === 'video' ? 'Play' : 'Camera'} size={12} className="mr-2" />
                            <span className="font-medium">{item.duration}</span>
                          </div>
                        </div>
                        
                        <h3 className={`font-bold uppercase leading-tight mb-3 transition-all duration-300 ${
                          isActive ? 'text-2xl tracking-wide' : 'text-lg'
                        }`}>
                          {item.title}
                        </h3>
                        
                        <p className={`lowercase leading-tight transition-all duration-300 ${
                          isActive ? 'text-base line-clamp-3 opacity-95' : 'text-sm line-clamp-2 opacity-85'
                        }`}>
                          {item.subtitle}
                        </p>

                        {/* Category tag with enhanced styling */}
                        <div className={`inline-block mt-4 px-4 py-2 text-xs uppercase tracking-widest rounded-full transition-all duration-300 font-medium ${
                          isActive 
                            ? 'bg-white/25 text-white backdrop-blur-sm border border-white/30 shadow-lg' 
                            : 'bg-black/25 text-white/90 border border-white/20'
                        }`}>
                          {item.category}
                        </div>
                      </div>

                      {/* Interactive overlay with glassmorphism */}
                      <div 
                        className={`absolute inset-0 transition-all duration-500 ${
                          isActive ? 'bg-transparent' : 'bg-black/15 opacity-0 group-hover:opacity-100'
                        }`}
                        style={{
                          clipPath: 'polygon(0% 15%, 18% 15%, 23% 0%, 100% 0%, 100% 100%, 0% 100%)'
                        }}
                      >
                        {!isActive && (
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 group-hover:scale-110">
                            <div className="w-20 h-20 rounded-full bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-xl">
                              <Icon name={item.type === 'video' ? 'Play' : 'Eye'} size={28} className="text-white ml-1" />
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Selection indicator */}
                      {selectedItem === index && (
                        <div className="absolute top-6 right-6">
                          <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse shadow-lg border-2 border-white"></div>
                        </div>
                      )}

                      {/* Premium shimmer effect */}
                      {isActive && (
                        <div 
                          className="absolute inset-0 opacity-20 animate-pulse"
                          style={{
                            background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
                            clipPath: 'polygon(0% 15%, 18% 15%, 23% 0%, 100% 0%, 100% 100%, 0% 100%)'
                          }}
                        ></div>
                      )}
                    </div>

                    {/* Enhanced folder edge shadow */}
                    <div 
                      className="absolute top-0 left-0 w-full h-full pointer-events-none transition-opacity duration-300"
                      style={{
                        background: `linear-gradient(135deg, rgba(0,0,0,${isActive ? 0.2 : 0.12}) 0%, transparent 20%)`,
                        clipPath: 'polygon(0% 15%, 18% 15%, 23% 0%, 100% 0%, 100% 100%, 0% 100%)'
                      }}
                    ></div>
                  </div>

                  {/* Dynamic label with enhanced typography */}
                  <div className={`text-center transition-all duration-500 ${
                    isExpanded ? 'mt-8 opacity-100' : 'mt-5 opacity-80'
                  }`}>
                    <div className="text-xs font-mono text-forest/50 mb-2 tracking-wider">file_{item.id}</div>
                    <h4 className={`font-bold uppercase text-forest tracking-wide transition-all duration-300 ${
                      isActive ? 'text-xl' : isExpanded ? 'text-base' : 'text-sm'
                    }`}>
                      {item.category}
                    </h4>
                    {isActive && (
                      <div className="w-8 h-0.5 bg-forest/30 mx-auto mt-2 transition-all duration-300"></div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Enhanced action buttons */}
          {isExpanded && (
            <div className="text-center mt-16 animate-in slide-in-from-bottom duration-500">
              <div className="inline-flex items-center space-x-6 bg-white/60 backdrop-blur-md rounded-full px-8 py-5 shadow-xl border border-white/30">
                <button 
                  className="flex items-center px-6 py-3 bg-forest text-cream rounded-full hover:bg-forest/90 transition-all duration-300 hover:scale-105 shadow-lg font-medium"
                  onClick={() => window.open('#', '_blank')}
                >
                  <Icon name="ExternalLink" size={18} className="mr-3" />
                  посмотреть все работы
                </button>
                <button 
                  className="flex items-center px-6 py-3 border-2 border-forest text-forest rounded-full hover:bg-forest hover:text-cream transition-all duration-300 hover:scale-105 font-medium"
                  onClick={() => window.open('https://t.me/azaluk', '_blank')}
                >
                  <Icon name="MessageCircle" size={18} className="mr-3" />
                  обсудить проект
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Bottom inspiration text */}
        <div className="text-center mt-20">
          <p className="text-lg font-light lowercase text-forest/70 max-w-3xl mx-auto leading-relaxed">
            каждая папка — отдельная вселенная историй и эмоций, бережно собранная и готовая раскрыться перед вами
          </p>
        </div>
      </div>
    </section>
  );
};

export default CreativePortfolio;