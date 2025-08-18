interface FilmStripProps {
  images: string[];
  className?: string;
  orientation?: 'horizontal' | 'vertical';
}

const FilmStrip = ({ images, className = '', orientation = 'horizontal' }: FilmStripProps) => {
  const isVertical = orientation === 'vertical';
  
  return (
    <div className={`relative ${className}`}>
      {/* Film strip background */}
      <div className={`
        bg-black rounded-lg p-2 relative
        ${isVertical ? 'flex flex-col space-y-2' : 'flex space-x-2 overflow-x-auto'}
      `}>
        {/* Film holes */}
        <div className={`
          absolute bg-black z-10 
          ${isVertical 
            ? 'left-0 top-0 bottom-0 w-6 flex flex-col justify-around items-center py-4' 
            : 'top-0 left-0 right-0 h-6 flex justify-around items-center px-4'
          }
        `}>
          {Array.from({ length: isVertical ? 8 : 12 }).map((_, i) => (
            <div 
              key={i} 
              className="w-2 h-2 bg-cream rounded-full"
            />
          ))}
        </div>
        
        {/* Film holes - opposite side */}
        <div className={`
          absolute bg-black z-10 
          ${isVertical 
            ? 'right-0 top-0 bottom-0 w-6 flex flex-col justify-around items-center py-4' 
            : 'bottom-0 left-0 right-0 h-6 flex justify-around items-center px-4'
          }
        `}>
          {Array.from({ length: isVertical ? 8 : 12 }).map((_, i) => (
            <div 
              key={i} 
              className="w-2 h-2 bg-cream rounded-full"
            />
          ))}
        </div>

        {/* Images */}
        <div className={`
          ${isVertical 
            ? 'flex flex-col space-y-2 mx-8' 
            : 'flex space-x-2 my-8 px-2'
          }
        `}>
          {images.map((src, index) => (
            <div key={index} className="flex-shrink-0">
              <img
                src={src}
                alt={`Frame ${index + 1}`}
                className={`
                  object-cover rounded
                  ${isVertical ? 'w-20 h-16' : 'w-16 h-20'}
                `}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilmStrip;