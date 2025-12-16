import { Phone, MessageCircle } from "lucide-react";

const FloatingActions = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* Phone Button */}
      <a
        href="tel:+918861509324"
        className="group relative flex items-center justify-center w-14 h-14 bg-gradient-gold rounded-full shadow-gold animate-pulse-soft transition-all duration-300 hover:scale-110"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6 text-primary-foreground" />
        
        {/* Tooltip */}
        <span className="absolute right-full mr-3 px-3 py-1.5 bg-card text-sm font-body text-foreground rounded-lg shadow-card opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Call Now
        </span>
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918861509324"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full shadow-card transition-all duration-300 hover:scale-110"
        style={{ 
          background: "linear-gradient(135deg, #25D366, #128C7E)",
          animationDelay: "0.5s"
        }}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-white" />
        
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full animate-ping opacity-30" style={{ background: "#25D366" }} />
        
        {/* Tooltip */}
        <span className="absolute right-full mr-3 px-3 py-1.5 bg-card text-sm font-body text-foreground rounded-lg shadow-card opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          WhatsApp
        </span>
      </a>
    </div>
  );
};

export default FloatingActions;
