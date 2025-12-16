import { useEffect, useRef, useState } from "react";
import { Award, Heart, Star } from "lucide-react";

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Award,
      title: "Expert Artistry",
      description: "Years of experience in bridal and fashion makeup",
    },
    {
      icon: Heart,
      title: "Personalized Care",
      description: "Every look tailored to your unique beauty",
    },
    {
      icon: Star,
      title: "Premium Products",
      description: "Only the finest international cosmetics used",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 md:py-32 bg-secondary/30 relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="text-sm font-body tracking-[0.3em] uppercase text-gold-dark mb-4 block">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-display mb-6">
              The Art of <span className="italic text-gold-dark">Beauty</span>
            </h2>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-12 bg-gold" />
              <div className="w-1.5 h-1.5 rounded-full bg-gold" />
              <div className="h-px w-12 bg-gold" />
            </div>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div
              className={`transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <p className="text-lg md:text-xl font-body leading-relaxed text-foreground/80 mb-6">
                Welcome to <span className="font-display italic text-gold-dark">Bhavzz Makeover</span>, 
                where beauty meets artistry. With a passion for enhancing natural elegance, 
                we specialize in creating stunning, personalized looks for life's most memorable moments.
              </p>
              <p className="text-lg font-body leading-relaxed text-muted-foreground mb-8">
                From radiant bridal transformations to glamorous party looks, our expert team 
                uses premium techniques and products to ensure you feel confident and beautiful. 
                Every stroke is crafted with precision, every detail designed to define your unique elegance.
              </p>
              
            </div>

            {/* Feature Cards */}
            <div
              className={`space-y-4 transition-all duration-1000 delay-400 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="group p-6 bg-card rounded-2xl shadow-card border border-gold/10 transition-all duration-300 hover:shadow-gold hover:border-gold/30 hover:-translate-y-1"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-gold rounded-xl text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-display mb-1">{feature.title}</h3>
                      <p className="text-sm font-body text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
