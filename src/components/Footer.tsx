import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-secondary/50 border-t border-gold/10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-6">
            <h3 className="text-2xl font-display">
              <span className="text-gradient-gold">Bhavzz</span>
              <span className="italic text-foreground/80 ml-2">Makeover</span>
            </h3>
          </div>

          {/* Tagline */}
          <p className="font-display italic text-foreground/60 mb-8">
            Where Every Stroke Defines Elegance
          </p>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a href="#services" className="text-sm font-body text-muted-foreground hover:text-gold-dark transition-colors duration-300">
              Services
            </a>
            <a href="#hair-draping" className="text-sm font-body text-muted-foreground hover:text-gold-dark transition-colors duration-300">
              Hair & Draping
            </a>
            <a href="#custom-package" className="text-sm font-body text-muted-foreground hover:text-gold-dark transition-colors duration-300">
              Custom Package
            </a>
            <a href="#about" className="text-sm font-body text-muted-foreground hover:text-gold-dark transition-colors duration-300">
              About Us
            </a>
          </div>

          {/* Contact */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-body text-muted-foreground">
            <a href="tel:+918861509324" className="hover:text-gold-dark transition-colors duration-300">
              +91 98765 43210
            </a>
            <span className="hidden sm:inline text-gold/40">|</span>
            <a href="https://wa.me/918861509324" target="_blank" rel="noopener noreferrer" className="hover:text-gold-dark transition-colors duration-300">
              WhatsApp
            </a>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/30" />
            <div className="w-1.5 h-1.5 rounded-full bg-gold/40" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/30" />
          </div>

          {/* Copyright */}
          <p className="text-xs font-body text-muted-foreground flex items-center justify-center gap-1">
            Made with <Heart className="w-3 h-3 text-rose fill-rose" /> 
            <span className="mx-1">•</span> © {new Date().getFullYear()} Bhavzz Makeover
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
