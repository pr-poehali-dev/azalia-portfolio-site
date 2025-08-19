import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const PortfolioSection = () => {
  const [hoveredFolder, setHoveredFolder] = useState<number | null>(null);

  const portfolioItems = [
    {
      id: 1,
      title: 'ВЛОГИ',
      subtitle: 'атмосферные истории',
      description: 'slow life видео о путешествиях, ретритах и повседневности',
      color: '#f5f0e8',
      textColor: '#2d3e2f',
      url: 'https://youtube.com/@azaluk'
    },
    {
      id: 2,
      title: 'СОБЫТИЯ',
      subtitle: 'живые моменты',
      description: 'свадьбы, дни рождения, открытия пространств',
      color: '#d4c4a0',
      textColor: '#2d3e2f',
      url: '#'
    },
    {
      id: 3,
      title: 'ПОРТРЕТЫ',
      subtitle: 'естественная красота',
      description: 'портретные съемки без ретуши в естественном свете',
      color: '#a8a693',
      textColor: '#f5f0e8',
      url: '#'
    },
    {
      id: 4,
      title: 'МЕСТА',
      subtitle: 'атмосфера пространств',
      description: 'интерьеры, кафе, студии, места силы',
      color: '#2d3e2f',
      textColor: '#f5f0e8',
      url: '#'
    }
  ];

  return (
    <section className="py-16 px-4 bg-cream text-forest">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-caveat font-bold text-center text-forest mb-12">
          мой творческий портфель
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredFolder(index)}
              onMouseLeave={() => setHoveredFolder(null)}
              onClick={() => window.open(item.url, '_blank')}
            >
              {/* Folder container */}
              <div 
                className="relative h-80 rounded-t-lg shadow-lg transition-all duration-300 transform group-hover:scale-105 group-hover:-rotate-2"
                style={{ backgroundColor: item.color }}
              >
                {/* Folder tab */}
                <div 
                  className="absolute -top-4 left-4 w-20 h-8 rounded-t-lg border-2 border-gray-400"
                  style={{ backgroundColor: item.color }}
                ></div>
                
                {/* Folder content */}
                <div className="p-6 h-full flex flex-col justify-between relative overflow-hidden">
                  {/* Top section */}
                  <div>
                    <div 
                      className="text-xs uppercase tracking-wider font-bold mb-2 opacity-70"
                      style={{ color: item.textColor }}
                    >
                      FILE_{String(index + 1).padStart(2, '0')}
                    </div>
                    <h3 
                      className="text-2xl font-bold uppercase mb-2"
                      style={{ color: item.textColor }}
                    >
                      {item.title}
                    </h3>
                    <div 
                      className="text-sm lowercase mb-4"
                      style={{ color: item.textColor, opacity: 0.8 }}
                    >
                      {item.subtitle}
                    </div>
                  </div>

                  {/* Middle decorative elements */}
                  <div className="absolute top-1/2 left-0 w-full opacity-10">
                    <div className="flex justify-between items-center px-4">
                      <div className="w-12 h-12 border-2 rounded-full" style={{ borderColor: item.textColor }}></div>
                      <div className="flex space-x-1">
                        {Array(5).fill(0).map((_, i) => (
                          <div key={i} className="w-2 h-2 rounded-full" style={{ backgroundColor: item.textColor }}></div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom section */}
                  <div>
                    <p 
                      className="text-sm leading-tight lowercase mb-4"
                      style={{ color: item.textColor, opacity: 0.9 }}
                    >
                      {item.description}
                    </p>
                    
                    {/* Status indicator */}
                    <div className="flex items-center justify-between">
                      <div 
                        className="text-xs uppercase tracking-wider"
                        style={{ color: item.textColor, opacity: 0.6 }}
                      >
                        {hoveredFolder === index ? 'OPEN' : 'READY'}
                      </div>
                      <Icon 
                        name="ArrowRight" 
                        size={16} 
                        className={`transition-all duration-300 ${hoveredFolder === index ? 'translate-x-1' : ''}`}
                        style={{ color: item.textColor }}
                      />
                    </div>
                  </div>

                  {/* Vintage barcode */}
                  <div className="absolute bottom-4 right-4 opacity-20">
                    <div className="flex space-x-px">
                      {Array(8).fill(0).map((_, i) => (
                        <div 
                          key={i}
                          className="w-0.5"
                          style={{ 
                            height: Math.random() * 20 + 10,
                            backgroundColor: item.textColor
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>

                  {/* Hover overlay */}
                  {hoveredFolder === index && (
                    <div className="absolute inset-0 bg-black/10 rounded-t-lg transition-opacity duration-300"></div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-forest/70 lowercase mb-6">
            каждая папка — отдельная вселенная историй и эмоций
          </p>
          <Button 
            size="lg"
            className="bg-forest text-cream hover:bg-forest/80"
            onClick={() => window.open('https://t.me/azaluk', '_blank')}
          >
            обсудить проект
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;