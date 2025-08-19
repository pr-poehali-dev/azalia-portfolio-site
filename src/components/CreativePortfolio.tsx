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
    <section className="py-20 px-4 bg-gradient-to-br from-amber-900/20 via-amber-800/30 to-red-900/40">
      <div className="container mx-auto max-w-6xl">
        
        {/* Navigation arrows */}
        <div className="flex justify-between items-center mb-8">
          <button className="text-cream/60 hover:text-cream transition-colors">
            <span className="text-xl font-mono">{"<<<"}</span>
          </button>
          <button className="text-cream/60 hover:text-cream transition-colors">
            <span className="text-xl font-mono">{">>>"}</span>
          </button>
        </div>

        {/* String line with clothespins */}
        <div className="relative">
          {/* Rope/String */}
          <div className="absolute top-6 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-200/60 to-transparent"></div>
          <div className="absolute top-6 left-8 right-8 h-px bg-amber-200/80"></div>
          
          {/* Instagram cards hanging from rope */}
          <div className="flex justify-center items-start gap-8 md:gap-12 overflow-x-auto py-2">
            {portfolioItems.slice(0, 3).map((item, index) => (
              <div key={item.id} className="relative group cursor-pointer flex-shrink-0">
                
                {/* Clothespin */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="w-6 h-8 bg-gradient-to-b from-amber-200 to-amber-300 rounded-sm shadow-md">
                    <div className="absolute top-1 left-1 right-1 h-2 bg-amber-100 rounded-sm"></div>
                    <div className="absolute bottom-1 left-1 right-1 h-1 bg-amber-400 rounded-sm"></div>
                  </div>
                </div>
                
                {/* Instagram card mockup */}
                <div 
                  className="w-72 bg-white rounded-xl shadow-2xl overflow-hidden transform rotate-1 hover:rotate-0 transition-all duration-500 hover:scale-105"
                  style={{
                    transform: `rotate(${index % 2 === 0 ? '2deg' : '-2deg'}) ${index === 1 ? 'translateY(10px)' : ''}`
                  }}
                >
                  {/* Instagram header */}
                  <div className="flex items-center justify-between p-4 border-b border-gray-100">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-purple-600 p-0.5">
                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                          <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                        </div>
                      </div>
                      <div className="text-sm font-semibold text-gray-900">azaluk</div>
                    </div>
                    <Icon name="MoreHorizontal" size={20} className="text-gray-400" />
                  </div>
                  
                  {/* Image content */}
                  <div className="relative h-72 bg-gray-100 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {item.type === 'video' && (
                      <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1 text-white text-xs flex items-center">
                        <Icon name="Play" size={12} className="mr-1" />
                        {item.duration}
                      </div>
                    )}
                  </div>
                  
                  {/* Instagram actions */}
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-4">
                        <Icon name="Heart" size={24} className="text-gray-700 hover:text-red-500 cursor-pointer transition-colors" />
                        <Icon name="MessageCircle" size={24} className="text-gray-700 hover:text-gray-900 cursor-pointer transition-colors" />
                        <Icon name="Send" size={24} className="text-gray-700 hover:text-gray-900 cursor-pointer transition-colors" />
                      </div>
                      <Icon name="Bookmark" size={24} className="text-gray-700 hover:text-gray-900 cursor-pointer transition-colors" />
                    </div>
                    
                    {/* Likes */}
                    <div className="text-sm font-semibold text-gray-900 mb-2">
                      {Math.floor(Math.random() * 500) + 100} отметок «Нравится»
                    </div>
                    
                    {/* Caption */}
                    <div className="text-sm text-gray-900 mb-2">
                      <span className="font-semibold">azaluk</span>{" "}
                      <span className="lowercase">
                        {item.description.length > 120 
                          ? `${item.description.substring(0, 120)}...` 
                          : item.description}
                      </span>
                    </div>
                    
                    {/* Comments and time */}
                    <div className="text-sm text-gray-500 mb-1">
                      Посмотреть все комментарии ({Math.floor(Math.random() * 50) + 5})
                    </div>
                    <div className="text-xs text-gray-400">
                      {Math.floor(Math.random() * 7) + 1} {Math.floor(Math.random() * 7) + 1 === 1 ? 'день' : 'дня'} назад
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
              className="flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 font-medium shadow-lg"
              onClick={() => window.open('https://instagram.com/azaluk', '_blank')}
            >
              <Icon name="Instagram" size={16} className="mr-2" />
              смотреть в инстаграм
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