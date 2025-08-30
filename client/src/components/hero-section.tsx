import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Play } from "lucide-react";
import TrialRequestModal from "@/components/trial-request-modal";
import AnimatedHeroDemo from "@/components/animated-hero-demo";

export default function HeroSection() {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);

  return (
    <section className="gradient-hero py-20 lg:py-32" data-testid="hero-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6" data-testid="hero-title">
              Grow your Twitter with safe, human‑like automation
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed" data-testid="hero-description">
              Queue smart replies, triage your inbox, and turn conversations into followers—without risking your account.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3" data-testid="hero-benefit-1">
                <CheckCircle className="h-6 w-6 text-brand-green-light" />
                <span className="text-blue-100">Safe throttling controls</span>
              </div>
              <div className="flex items-center space-x-3" data-testid="hero-benefit-2">
                <CheckCircle className="h-6 w-6 text-brand-green-light" />
                <span className="text-blue-100">Replies drafted in your voice</span>
              </div>
              <div className="flex items-center space-x-3" data-testid="hero-benefit-3">
                <CheckCircle className="h-6 w-6 text-brand-green-light" />
                <span className="text-blue-100">AI-powered discovery of relevant conversations</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
              <Button
                size="lg"
                onClick={() => setIsTrialModalOpen(true)}
                className="bg-brand-green hover:bg-brand-green-light text-white px-8 py-4 text-lg font-semibold shadow-lg"
                data-testid="hero-cta-primary"
              >
                Get Early Access
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  const el = document.getElementById("demo");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-8 py-4 text-lg font-semibold"
                data-testid="hero-cta-secondary"
              >
                <Play className="h-5 w-5 mr-2" /> Watch 60‑sec demo
              </Button>
            </div>
            
            <p className="text-blue-200 text-sm mt-4" data-testid="hero-disclaimer">
              Throttle‑controlled • No password needed
            </p>
          </div>

          <div className="mt-8 lg:mt-0 lg:pl-8">
            <AnimatedHeroDemo />
          </div>
        </div>
      </div>
      
      <TrialRequestModal 
        isOpen={isTrialModalOpen} 
        onClose={() => setIsTrialModalOpen(false)} 
      />
    </section>
  );
}
