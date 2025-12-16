import { useState, useCallback } from "react";
import CloudSplitAnimation from "@/components/CloudSplitAnimation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import HairDrapingSection from "@/components/HairDrapingSection";
import CTASection from "@/components/CTASection";
import FloatingActions from "@/components/FloatingActions";
import Footer from "@/components/Footer";

const Index = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [showFloatingActions, setShowFloatingActions] = useState(false);

  const handleAnimationComplete = useCallback(() => {
    setAnimationComplete(true);
    // Delay showing floating actions for a smoother reveal
    setTimeout(() => {
      setShowFloatingActions(true);
    }, 500);
  }, []);

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      {/* Cloud Split Intro Animation */}
      {!animationComplete && (
        <CloudSplitAnimation onComplete={handleAnimationComplete} />
      )}

      {/* Hero Section */}
      <HeroSection isRevealed={animationComplete} />

      {/* About Section */}
      <AboutSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Hair & Draping Section */}
      <HairDrapingSection />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      {showFloatingActions && <FloatingActions />}
    </main>
  );
};

export default Index;
