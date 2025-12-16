import { useEffect, useRef, useState } from "react";
import { Crown, Sparkles, PartyPopper, Droplets, Shield, Gem } from "lucide-react";

const ServicesSection = () => {
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

  const services = [
    {
      icon: Crown,
      title: "Bridal Radiant",
      description: "Your dream bridal look with a flawless, radiant finish that lasts from ceremony to celebration.",
      highlight: "Most Popular",
    },
    {
      icon: Sparkles,
      title: "Non-Bridal Glam",
      description: "Elegant makeup for engagements, receptions, and special family occasions.",
      highlight: null,
    },
    {
      icon: PartyPopper,
      title: "Party Glam",
      description: "Bold, stunning looks for parties, events, and celebrations that make you stand out.",
      highlight: null,
    },
    {
      icon: Droplets,
      title: "Airbrush Makeup",
      description: "Ultra-smooth, HD-ready finish with professional airbrush technique for a flawless look.",
      highlight: "Premium",
    },
    {
      icon: Shield,
      title: "Waterproof Makeup",
      description: "Sweat-proof, tear-proof makeup perfect for emotional moments and outdoor events.",
      highlight: null,
    },
    {
      icon: Gem,
      title: "Glossy Makeup",
      description: "Dewy, luminous finish for a fresh, youthful glow that photographs beautifully.",
      highlight: "Trending",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-24 md:py-32 bg-background relative"
    >
      {/* Background decoration */}
      <div 
        className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 20% 20%, hsl(var(--dusty-rose-light)) 0%, transparent 40%),
                      radial-gradient(ellipse at 80% 80%, hsl(var(--gold-light)) 0%, transparent 40%)`,
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-sm font-body tracking-[0.3em] uppercase text-gold-dark mb-4 block">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-display mb-6">
            Makeup <span className="italic text-gold-dark">Services</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-gold" />
            <div className="w-1.5 h-1.5 rounded-full bg-gold" />
            <div className="h-px w-12 bg-gold" />
          </div>
          <p className="text-lg font-body text-muted-foreground max-w-2xl mx-auto">
            From timeless bridal elegance to trendy party glam, discover our range of 
            professional makeup services designed for your special moments.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative p-8 bg-card rounded-2xl border border-gold/10 shadow-card transition-all duration-500 hover:shadow-gold hover:border-gold/30 hover:-translate-y-2 ${
                isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {/* Highlight Badge */}
              {service.highlight && (
                <div className="absolute -top-3 left-6 px-4 py-1 bg-gradient-gold text-primary-foreground text-xs font-body font-medium tracking-wide rounded-full">
                  {service.highlight}
                </div>
              )}

              {/* Icon */}
              <div className="mb-6">
                <div className="inline-flex p-4 bg-gradient-rose rounded-2xl text-rose-dark group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-display mb-3 group-hover:text-gold-dark transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-sm font-body text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Hover decoration */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-gold rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
