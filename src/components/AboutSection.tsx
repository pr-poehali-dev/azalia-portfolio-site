interface AboutSectionProps {
  filmStrip: string[];
}

const AboutSection = ({ filmStrip }: AboutSectionProps) => {
  return (
    <section id="about" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-cormorant font-bold mb-6 text-accent">Обо мне</h2>
              <div className="prose prose-lg">
                <p className="text-foreground/90 leading-relaxed">
                  Привет! Я Азалия — снимаю жизнь такой, как она есть: тёплой, честной, красивой в мелочах. 
                  Люблю атмосферу ретритов, праздников, семейных встреч и тихих будней.
                </p>
                <p className="text-foreground/90 leading-relaxed mt-4">
                  Делаю живые фотографии и видео без тяжёлой обработки, отдаю быстро и бережно. 
                  Здесь вы поймёте мой стиль и сразу увидите, подходит ли он вам.
                </p>
              </div>
              <div className="mt-6">
                <span className="text-2xl font-caveat text-accent">— Азалия @azaluk</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
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
        </div>
      </div>
    </section>
  );
};

export default AboutSection;