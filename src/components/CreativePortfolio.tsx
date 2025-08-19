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
        {/* Collage Grid Layout */}
        <div className="grid grid-cols-12 gap-6 auto-rows-auto">
          
          {/* First item - Large horizontal */}
          <div className="col-span-12 md:col-span-8 relative group cursor-pointer">
            <div 
              className="relative h-96 overflow-hidden transition-all duration-500 hover:scale-[1.02]"
              style={{ backgroundColor: portfolioItems[0].color }}
            >
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="w-full h-full" style={{
                  backgroundImage: `radial-gradient(circle at 20% 80%, ${portfolioItems[0].color} 0%, transparent 50%),
                                   radial-gradient(circle at 80% 20%, ${portfolioItems[0].color} 0%, transparent 50%)`
                }}></div>
              </div>
              
              {/* Image */}
              <img 
                src={portfolioItems[0].image}
                alt={portfolioItems[0].title}
                className="absolute right-0 top-0 w-3/5 h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Content overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="text-xs font-mono text-forest/60">({portfolioItems[0].id})</div>
                  <div className="flex items-center bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white">
                    <Icon name="Play" size={12} className="mr-1" />
                    {portfolioItems[0].duration}
                  </div>
                </div>
                
                <div className="max-w-md">
                  <h3 className="text-2xl font-montserrat font-bold uppercase mb-4 text-forest leading-tight">
                    {portfolioItems[0].title}
                  </h3>
                  <p className="text-sm text-forest/80 lowercase leading-relaxed">
                    {portfolioItems[0].description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Second item - Vertical */}
          <div className="col-span-12 md:col-span-4 relative group cursor-pointer">
            <div 
              className="relative h-96 overflow-hidden transition-all duration-500 hover:scale-[1.02] flex flex-col"
              style={{ backgroundColor: portfolioItems[1].color }}
            >
              {/* Decorative shape */}
              <div className="absolute top-8 left-8 w-16 h-16 rounded-full bg-cream/30"></div>
              
              <div className="p-8 flex-1 flex flex-col justify-between text-cream">
                <div>
                  <div className="text-xs font-mono opacity-70 mb-4">({portfolioItems[1].id})</div>
                  <h3 className="text-xl font-montserrat font-bold uppercase mb-4 leading-tight">
                    {portfolioItems[1].title}
                  </h3>
                </div>
                
                <div>
                  <p className="text-sm opacity-90 lowercase mb-4 leading-relaxed">
                    {portfolioItems[1].description}
                  </p>
                  <div className="flex items-center text-xs">
                    <Icon name="Play" size={12} className="mr-2" />
                    {portfolioItems[1].duration}
                  </div>
                </div>
              </div>
              
              <div className="h-32 relative overflow-hidden">
                <img 
                  src={portfolioItems[1].image}
                  alt={portfolioItems[1].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
          </div>

          {/* Third item - Medium with cutout */}
          <div className="col-span-12 md:col-span-5 relative group cursor-pointer">
            <div 
              className="relative h-80 overflow-hidden transition-all duration-500 hover:scale-[1.02]"
              style={{ backgroundColor: portfolioItems[2].color }}
            >
              {/* Organic shape cutout */}
              <div 
                className="absolute top-4 right-4 w-24 h-32 bg-cream/20 rounded-t-full"
                style={{ 
                  clipPath: 'ellipse(50% 60% at 50% 40%)'
                }}
              ></div>
              
              <img 
                src={portfolioItems[2].image}
                alt={portfolioItems[2].title}
                className="absolute inset-0 w-full h-full object-cover opacity-60 transition-all duration-700 group-hover:opacity-80 group-hover:scale-105"
              />
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="text-xs font-mono text-cream/70 mb-2">({portfolioItems[2].id})</div>
                <h3 className="text-lg font-montserrat font-bold uppercase mb-3 text-cream leading-tight">
                  {portfolioItems[2].title}
                </h3>
                <p className="text-sm text-cream/90 lowercase leading-tight mb-3">
                  {portfolioItems[2].description.substring(0, 80)}...
                </p>
                <div className="flex items-center text-xs text-cream/80">
                  <Icon name="Play" size={12} className="mr-1" />
                  {portfolioItems[2].duration}
                </div>
              </div>
            </div>
          </div>

          {/* Fourth item - Square with illustration style */}
          <div className="col-span-12 md:col-span-4 relative group cursor-pointer">
            <div 
              className="relative h-80 overflow-hidden transition-all duration-500 hover:scale-[1.02]"
              style={{ backgroundColor: portfolioItems[3].color }}
            >
              {/* Abstract decorative element */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 opacity-20">
                <div className="w-full h-full rounded-full border-2 border-cream"></div>
                <div className="absolute top-2 left-2 w-16 h-16 rounded-full border border-cream"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 h-2/3">
                <img 
                  src={portfolioItems[3].image}
                  alt={portfolioItems[3].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono text-forest/60 mb-2">({portfolioItems[3].id})</div>
                  <h3 className="text-lg font-montserrat font-bold uppercase text-forest leading-tight">
                    {portfolioItems[3].title}
                  </h3>
                </div>
                
                <div className="bg-black/20 backdrop-blur-sm p-3 rounded">
                  <p className="text-xs text-cream/90 lowercase leading-tight mb-2">
                    {portfolioItems[3].description.substring(0, 60)}...
                  </p>
                  <div className="flex items-center text-xs text-cream/80">
                    <Icon name="Play" size={12} className="mr-1" />
                    {portfolioItems[3].duration}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fifth item - Wide with text emphasis */}
          <div className="col-span-12 md:col-span-3 relative group cursor-pointer">
            <div 
              className="relative h-80 overflow-hidden transition-all duration-500 hover:scale-[1.02] flex flex-col"
              style={{ backgroundColor: portfolioItems[4].color }}
            >
              <div className="flex-1 p-6 flex flex-col justify-center text-cream">
                <div className="text-xs font-mono opacity-70 mb-3">({portfolioItems[4].id})</div>
                <h3 className="text-xl font-montserrat font-bold uppercase mb-4 leading-tight">
                  {portfolioItems[4].title}
                </h3>
                <p className="text-sm opacity-90 lowercase mb-4 leading-relaxed">
                  {portfolioItems[4].description}
                </p>
                <div className="flex items-center text-xs">
                  <Icon name="Camera" size={12} className="mr-2" />
                  {portfolioItems[4].duration}
                </div>
              </div>
              
              <div className="h-20 relative overflow-hidden">
                <img 
                  src={portfolioItems[4].image}
                  alt={portfolioItems[4].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
          </div>

          {/* Sixth item - Final card with special treatment */}
          <div className="col-span-12 md:col-span-9 relative group cursor-pointer">
            <div 
              className="relative h-64 overflow-hidden transition-all duration-500 hover:scale-[1.02]"
              style={{ backgroundColor: portfolioItems[5].color }}
            >
              {/* Organic shape overlay */}
              <div 
                className="absolute top-0 right-0 w-1/3 h-full bg-cream/10"
                style={{
                  clipPath: 'polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)'
                }}
              ></div>
              
              <div className="absolute inset-0 flex">
                <div className="flex-1 p-8 flex flex-col justify-center">
                  <div className="text-xs font-mono text-cream/70 mb-3">({portfolioItems[5].id})</div>
                  <h3 className="text-2xl font-montserrat font-bold uppercase mb-4 text-cream leading-tight">
                    {portfolioItems[5].title}
                  </h3>
                  <p className="text-sm text-cream/90 lowercase leading-relaxed mb-4 max-w-md">
                    {portfolioItems[5].description}
                  </p>
                  <div className="flex items-center text-xs text-cream/80">
                    <Icon name="Camera" size={12} className="mr-2" />
                    {portfolioItems[5].duration}
                  </div>
                </div>
                
                <div className="w-1/2 relative overflow-hidden">
                  <img 
                    src={portfolioItems[5].image}
                    alt={portfolioItems[5].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>

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