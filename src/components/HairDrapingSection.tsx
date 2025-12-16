import { useEffect, useRef, useState } from "react";

const HairDrapingSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const hairStyles = [
    {
      title: "Open Hairstyle",
      description: "Flowing, romantic styles with soft waves, curls, or sleek elegance.",
      image: "🌸",
    },
    {
      title: "Elegant Buns",
      description: "Classic and modern bun styles, from low chignons to high statement buns.",
      image: "💐",
    },
    {
      title: "Braided Beauty",
      description: "Intricate braids, fishtails, and woven styles for a bohemian touch.",
      image: "🌺",
    },
  ];

  const drapingStyle = {
    title: "Saree Draping",
    description: "Expert saree draping in multiple styles – from classic Nivi to modern designer drapes. Perfect pleats, secure pinning, and a flawless finish for your special day.",
    styles: ["Nivi Style", "Bengali Style", "Gujarati Style", "Maharashtrian Style", "Designer Drapes"],
  };

  return (
    <section
      ref={sectionRef}
      id="hair-draping"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{
        background: `linear-gradient(180deg, hsl(var(--cream)) 0%, hsl(var(--background)) 100%)`,
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-40 h-40 rounded-full opacity-20" style={{ background: "hsl(var(--dusty-rose))" }} />
      <div className="absolute bottom-20 left-10 w-32 h-32 rounded-full opacity-15" style={{ background: "hsl(var(--gold-light))" }} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-sm font-body tracking-[0.3em] uppercase text-gold-dark mb-4 block">
            Complete Your Look
          </span>
          <h2 className="text-4xl md:text-5xl font-display mb-6">
            Hair & <span className="italic text-gold-dark">Draping</span>
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-gold" />
            <div className="w-1.5 h-1.5 rounded-full bg-gold" />
            <div className="h-px w-12 bg-gold" />
          </div>
        </div>

        {/* Hair Styles */}
        <div className="max-w-5xl mx-auto mb-16">
          <h3
            className={`text-2xl md:text-3xl font-display text-center mb-10 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Hairstyling
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {hairStyles.map((style, index) => (
              <div
                key={style.title}
                className={`group text-center p-8 bg-card rounded-2xl border border-gold/10 shadow-card transition-all duration-500 hover:shadow-gold hover:border-gold/30 hover:-translate-y-2 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {style.image}
                </div>
                <h4 className="text-xl font-display mb-3 group-hover:text-gold-dark transition-colors duration-300">
                  {style.title}
                </h4>
                <p className="text-sm font-body text-muted-foreground">
                  {style.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Saree Draping */}
        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative p-8 md:p-12 bg-gradient-to-br from-rose-light/50 to-gold-light/30 rounded-3xl border border-gold/20 shadow-card">
            {/* Decorative corner elements */}
            <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-gold/40 rounded-tl-lg" />
            <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-gold/40 rounded-tr-lg" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-gold/40 rounded-bl-lg" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-gold/40 rounded-br-lg" />

            <div className="text-center">
              <span className="text-4xl mb-4 block">🪷</span>
              <h3 className="text-2xl md:text-3xl font-display mb-4">
                {drapingStyle.title}
              </h3>
              <p className="text-lg font-body text-foreground/80 mb-6 max-w-2xl mx-auto">
                {drapingStyle.description}
              </p>
              
              {/* Style Tags */}
              <div className="flex flex-wrap justify-center gap-3">
                {drapingStyle.styles.map((style) => (
                  <span
                    key={style}
                    className="px-4 py-2 bg-card/80 text-sm font-body text-foreground/70 rounded-full border border-gold/20 hover:border-gold/40 hover:bg-card transition-all duration-300"
                  >
                    {style}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HairDrapingSection;
