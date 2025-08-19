import Icon from '@/components/ui/icon';

const CreativePortfolio = () => {
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

  return (
    <section className="py-20 px-4 bg-cream text-forest">
      <div className="container mx-auto max-w-7xl">
        {/* Uniform Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          
          {portfolioItems.map((item, index) => (
            <div key={item.id} className="relative group cursor-pointer">
              <div 
                className="relative h-64 overflow-hidden transition-all duration-500 hover:scale-[1.02] rounded-lg"
                style={{ backgroundColor: item.color }}
              >
                {/* Background pattern for some variety */}
                {index % 2 === 0 && (
                  <div className="absolute inset-0 opacity-5">
                    <div className="w-full h-full" style={{
                      backgroundImage: `radial-gradient(circle at 30% 70%, ${item.color} 0%, transparent 50%)`
                    }}></div>
                  </div>
                )}
                
                {/* Decorative elements */}
                {index % 3 === 1 && (
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-cream/20"></div>
                )}
                
                {index % 3 === 2 && (
                  <div 
                    className="absolute top-2 left-2 w-12 h-16 bg-cream/10"
                    style={{ 
                      clipPath: 'ellipse(50% 60% at 50% 40%)',
                      borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%'
                    }}
                  ></div>
                )}
                
                {/* Image placement varies by layout type */}
                {index % 4 === 0 && (
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="absolute right-0 top-0 w-2/3 h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                
                {index % 4 === 1 && (
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="absolute bottom-0 left-0 right-0 h-1/2 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                
                {index % 4 === 2 && (
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-50 transition-all duration-700 group-hover:opacity-70 group-hover:scale-105"
                  />
                )}
                
                {index % 4 === 3 && (
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="absolute top-0 left-0 w-full h-2/3 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                
                {/* Content overlay */}
                <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div className="text-xs font-mono text-forest/60 bg-cream/80 px-2 py-1 rounded">
                      ({item.id})
                    </div>
                    <div className="flex items-center bg-black/20 backdrop-blur-sm px-2 py-1 rounded-full text-xs text-white">
                      <Icon 
                        name={item.type === 'video' ? 'Play' : 'Camera'} 
                        size={10} 
                        className="mr-1" 
                      />
                      {item.duration}
                    </div>
                  </div>
                  
                  <div className={`${index % 4 === 2 ? 'text-cream' : 'text-forest'}`}>
                    <h3 className="text-sm sm:text-base font-montserrat font-bold uppercase mb-2 leading-tight">
                      {item.title}
                    </h3>
                    <p className={`text-xs sm:text-sm lowercase leading-tight ${
                      index % 4 === 2 ? 'text-cream/90' : 'text-forest/80'
                    }`}>
                      {item.description.length > 85 
                        ? `${item.description.substring(0, 85)}...` 
                        : item.description}
                    </p>
                  </div>
                </div>
                
                {/* Hover overlay for better text visibility */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
              </div>
            </div>
          ))}

        </div>

        {/* Bottom section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-6 bg-white/40 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg">
            <button 
              className="flex items-center px-6 py-3 bg-forest text-cream rounded-full hover:bg-forest/80 transition-all duration-300 font-medium"
              onClick={() => window.open('https://youtube.com/@azaluk', '_blank')}
            >
              <Icon name="ExternalLink" size={16} className="mr-2" />
              смотреть все работы
            </button>
            <button 
              className="flex items-center px-6 py-3 border border-forest text-forest rounded-full hover:bg-forest hover:text-cream transition-all duration-300 font-medium"
              onClick={() => window.open('https://t.me/azaluk', '_blank')}
            >
              <Icon name="MessageCircle" size={16} className="mr-2" />
              обсудить проект
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativePortfolio;