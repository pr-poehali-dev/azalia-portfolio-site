import FilmStrip from './FilmStrip';
import DecorativeLines from './DecorativeLines';

interface AboutSectionProps {
  filmStrip: string[];
}

const AboutSection = ({ filmStrip }: AboutSectionProps) => {
  return (
    <section id="about" className="py-16 px-4 relative bg-cream text-forest">
      <div className="container mx-auto px-5">
        <div className="max-w-4xl mx-auto">
          {/* Decorative line before section */}
          <DecorativeLines type="wavy" className="mb-8 opacity-70" />
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Mobile-first layout with film strip */}
            <div className="md:hidden">
              <h2 className="text-4xl font-montserrat font-bold mb-6 text-accent uppercase text-center">обо мне</h2>
              
              {/* Vertical film strip for mobile */}
              <div className="relative mb-6">
                {/* Film perforation on sides */}
                <div className="absolute left-0 top-0 bottom-0 w-8 bg-forest opacity-20 z-10">
                  <div className="flex flex-col justify-evenly h-full">
                    {Array(8).fill(0).map((_, i) => (
                      <div key={i} className="w-4 h-4 bg-forest rounded-full mx-auto"></div>
                    ))}
                  </div>
                </div>
                <div className="absolute right-0 top-0 bottom-0 w-8 bg-forest opacity-20 z-10">
                  <div className="flex flex-col justify-evenly h-full">
                    {Array(8).fill(0).map((_, i) => (
                      <div key={i} className="w-4 h-4 bg-forest rounded-full mx-auto"></div>
                    ))}
                  </div>
                </div>
                
                {/* Main photo */}
                <img 
                  src="https://cdn.poehali.dev/files/b103f201-04ae-48c1-927e-818bdae7d6f4.jpg" 
                  alt="Фото автора"
                  className="w-full max-w-sm mx-auto block rounded-lg shadow-lg object-cover aspect-[3/4]"
                />
              </div>
              
              <DecorativeLines type="curved" className="mb-6 opacity-60" />
              
              <div className="prose prose-lg text-center">
                <p className="text-foreground/90 leading-relaxed lowercase text-center">привет, я Азалия! я мастер находить красоту в самых простых моментах жизни и передавать их через свои кадры

больше 3-х лет я создаю атмосферные видео на youtube, участвую в мероприятиях в качестве лайф-фотографа и помогаю сохранить теплые воспоминания и эмоции о важных событиях нашей жизни. </p>
                <p className="text-foreground/90 leading-relaxed mt-4 lowercase">
                  делаю живые фотографии и видео без тяжёлой обработки, отдаю быстро и бережно. 
                  здесь вы поймёте мой стиль и сразу увидите, подходит ли он вам.
                </p>
              </div>
              
              <DecorativeLines type="dashed" className="my-6 opacity-50" />
              
              <div className="text-center">
                <span className="text-2xl font-caveat text-accent">— Азалия @azaluk</span>
              </div>
            </div>

            {/* Desktop layout */}
            <div className="hidden md:block">
              <h2 className="text-4xl font-montserrat font-bold mb-6 text-accent uppercase">обо мне</h2>
              <div className="prose prose-lg">
                <p className="text-foreground/90 leading-relaxed lowercase">
                  привет! я Азалия — снимаю жизнь такой, как она есть: тёплой, честной, красивой в мелочах. 
                  люблю атмосферу ретритов, праздников, семейных встреч и тихих будней.
                </p>
                <p className="text-foreground/90 leading-relaxed mt-4 lowercase">
                  делаю живые фотографии и видео без тяжёлой обработки, отдаю быстро и бережно. 
                  здесь вы поймёте мой стиль и сразу увидите, подходит ли он вам.
                </p>
              </div>
              <div className="mt-6">
                <span className="text-2xl font-caveat text-accent">— Азалия @azaluk</span>
              </div>
            </div>
            
            <div className="hidden md:grid grid-cols-2 gap-4">
              {filmStrip.slice(0, 4).map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-32 object-cover rounded-2xl hover:scale-105 transition-transform"
                />
              ))}
            </div>
          </div>
          
          {/* Decorative line after section */}
          <DecorativeLines type="wavy" className="mt-8 opacity-70 rotate-180" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;