import { useEffect, useRef, useState } from "react";
import { Package, ArrowRight } from "lucide-react";

const CTASection = () => {
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

  return (
    <section
      ref={sectionRef}
      id="custom-package"
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, 
            hsl(var(--dusty-rose-light)) 0%, 
            hsl(var(--champagne)) 50%, 
            hsl(var(--gold-light)) 100%)`,
        }}
      />
      
      {/* Pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(hsl(var(--gold)) 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Icon */}
          <div className="inline-flex p-5 bg-card rounded-full shadow-gold mb-8">
            <Package className="w-10 h-10 text-gold-dark" />
          </div>

          {/* Content */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6">
            Custom <span className="italic text-gradient-gold">Package</span>
          </h2>
          
          <p className="text-lg md:text-xl font-body text-foreground/80 mb-10 max-w-xl mx-auto leading-relaxed">
            Combine services for a complete luxury makeover experience. 
            From bridal makeup to hairstyling and saree draping – 
            create your perfect package.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {["Makeup", "Hairstyling", "Draping", "Touch-ups"].map((item) => (
              <span
                key={item}
                className="px-5 py-2.5 bg-card/90 font-body text-sm tracking-wide rounded-full border border-gold/30 shadow-soft"
              >
                {item}
              </span>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="https://wa.me/918861509324?text=Hi%20Bhavzz%20Makeover!%20I'm%20interested%20in%20a%20custom%20package."
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-gold text-primary-foreground font-body font-semibold tracking-wide rounded-full shadow-gold transition-all duration-300 hover:shadow-float hover:scale-105"
          >
            <span>Create Your Package</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>

          <p className="mt-6 text-sm font-body text-foreground/60">
            Get a personalized quote within 24 hours
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
