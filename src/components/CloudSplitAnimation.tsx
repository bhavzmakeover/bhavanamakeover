import { useState, useEffect } from "react";

interface CloudSplitAnimationProps {
  onComplete: () => void;
}

const CloudSplitAnimation = ({ onComplete }: CloudSplitAnimationProps) => {
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    // Start the cloud animation after a brief moment
    const startTimer = setTimeout(() => {
      setAnimationStarted(true);
    }, 100);

    // Notify parent when animation is complete
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 2800);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
      {/* Left Cloud */}
      <div
        className={`absolute inset-y-0 left-0 w-1/2 ${
          animationStarted ? "animate-cloud-left" : ""
        }`}
        style={{
          background: `linear-gradient(135deg, 
            hsl(350 35% 92%) 0%, 
            hsl(40 30% 97%) 40%, 
            hsl(38 50% 90%) 70%,
            hsl(350 30% 88%) 100%)`,
        }}
      >
        {/* Cloud texture overlay */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: `radial-gradient(ellipse at 80% 50%, hsl(40 40% 98%) 0%, transparent 50%),
                        radial-gradient(ellipse at 60% 30%, hsl(350 35% 95%) 0%, transparent 40%),
                        radial-gradient(ellipse at 90% 70%, hsl(38 50% 95%) 0%, transparent 45%)`,
          }}
        />
        {/* Logo hint on left cloud */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-right pr-8 opacity-60">
            <span 
              className="text-4xl md:text-5xl font-display italic"
              style={{ color: "hsl(38 45% 45%)" }}
            >
              Bhavzz
            </span>
          </div>
        </div>
      </div>

      {/* Right Cloud */}
      <div
        className={`absolute inset-y-0 right-0 w-1/2 ${
          animationStarted ? "animate-cloud-right" : ""
        }`}
        style={{
          background: `linear-gradient(-135deg, 
            hsl(350 35% 92%) 0%, 
            hsl(40 30% 97%) 40%, 
            hsl(38 50% 90%) 70%,
            hsl(350 30% 88%) 100%)`,
        }}
      >
        {/* Cloud texture overlay */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: `radial-gradient(ellipse at 20% 50%, hsl(40 40% 98%) 0%, transparent 50%),
                        radial-gradient(ellipse at 40% 70%, hsl(350 35% 95%) 0%, transparent 40%),
                        radial-gradient(ellipse at 10% 30%, hsl(38 50% 95%) 0%, transparent 45%)`,
          }}
        />
        {/* Logo hint on right cloud */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-left pl-8 opacity-60">
            <span 
              className="text-4xl md:text-5xl font-display italic"
              style={{ color: "hsl(38 45% 45%)" }}
            >
              Makeover
            </span>
          </div>
        </div>
      </div>

      {/* Center divider glow */}
      <div
        className={`absolute inset-y-0 left-1/2 w-px transform -translate-x-1/2 transition-opacity duration-1000 ${
          animationStarted ? "opacity-0" : "opacity-100"
        }`}
        style={{
          background: `linear-gradient(180deg, 
            transparent 0%, 
            hsl(38 60% 70% / 0.6) 30%, 
            hsl(38 60% 75% / 0.8) 50%, 
            hsl(38 60% 70% / 0.6) 70%, 
            transparent 100%)`,
          boxShadow: "0 0 30px 15px hsl(38 60% 70% / 0.3)",
        }}
      />
    </div>
  );
};

export default CloudSplitAnimation;
