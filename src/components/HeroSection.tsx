import { Sparkles } from "lucide-react";

interface HeroSectionProps {
  isRevealed: boolean;
}

const HeroSection = ({ isRevealed }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-20 left-10 w-32 h-32 rounded-full opacity-20 animate-float"
          style={{ background: "hsl(var(--dusty-rose-light))" }}
        />
        <div 
          className="absolute bottom-32 right-20 w-48 h-48 rounded-full opacity-15 animate-float"
          style={{ background: "hsl(var(--gold-light))", animationDelay: "1s" }}
        />
        <div 
          className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full opacity-20 animate-float"
          style={{ background: "hsl(var(--champagne))", animationDelay: "2s" }}
        />
      </div>

      {/* Shimmer overlay */}
      <div className="absolute inset-0 animate-shimmer opacity-30 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div 
          className={`text-center max-w-4xl mx-auto ${
            isRevealed ? "content-revealed" : "content-hidden"
          }`}
        >
          {/* Logo/Brand */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-gold" />
              <span className="text-sm font-body tracking-[0.3em] uppercase text-muted-foreground">
                Premium Beauty Studio
              </span>
              <Sparkles className="w-5 h-5 text-gold" />
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium mb-2">
              <span className="text-gradient-gold">Bhavzz</span>
            </h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display italic text-foreground/80">
              Makeover
            </h2>
          </div>

          {/* Tagline */}
          <p 
            className="text-xl md:text-2xl lg:text-3xl font-display italic text-foreground/70 mb-12 leading-relaxed"
            style={{ animationDelay: "2.4s" }}
          >
            Where Every Stroke Defines Elegance
          </p>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold" />
            <div className="w-2 h-2 rounded-full bg-gold" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold" />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#services"
              className="group relative px-8 py-4 bg-gradient-gold text-primary-foreground font-body font-medium tracking-wide rounded-full overflow-hidden transition-all duration-300 hover:shadow-gold hover:scale-105"
            >
              <span className="relative z-10">Explore Services</span>
              <div className="absolute inset-0 bg-gold-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              href="#custom-package"
              className="px-8 py-4 border-2 border-gold/40 text-foreground font-body font-medium tracking-wide rounded-full transition-all duration-300 hover:border-gold hover:bg-gold/10"
            >
              Custom Package
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
