import { Button } from "@/components/ui/button";
import { CheckCircle, Play } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="gradient-hero py-20 lg:py-32" data-testid="hero-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6" data-testid="hero-title">
              Turn Your Expertise Into{" "}
              <span className="text-brand-green-light">Automated Twitter</span>{" "}
              Engagement
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed" data-testid="hero-description">
              Transform Twitter engagement from manual, time-consuming work into intelligent automation. 
              Build meaningful professional relationships at scale without losing authenticity.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3" data-testid="hero-benefit-1">
                <CheckCircle className="h-6 w-6 text-brand-green-light" />
                <span className="text-blue-100">Save 15+ hours weekly on Twitter engagement</span>
              </div>
              <div className="flex items-center space-x-3" data-testid="hero-benefit-2">
                <CheckCircle className="h-6 w-6 text-brand-green-light" />
                <span className="text-blue-100">95% brand voice consistency across all responses</span>
              </div>
              <div className="flex items-center space-x-3" data-testid="hero-benefit-3">
                <CheckCircle className="h-6 w-6 text-brand-green-light" />
                <span className="text-blue-100">AI-powered discovery of relevant conversations</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-brand-green hover:bg-brand-green-light text-white px-8 py-4 text-lg font-semibold shadow-lg"
                data-testid="hero-cta-primary"
              >
                Start 14-Day Free Trial
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-brand-blue px-8 py-4 text-lg font-semibold"
                data-testid="hero-cta-secondary"
              >
                <Play className="h-5 w-5 mr-2" />
                Watch Demo
              </Button>
            </div>
            
            <p className="text-blue-200 text-sm mt-4" data-testid="hero-disclaimer">
              No credit card required • Cancel anytime
            </p>
          </motion.div>
          
          <motion.div 
            className="lg:pl-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="AI-powered automation technology dashboard"
              className="rounded-2xl shadow-2xl w-full h-auto"
              data-testid="hero-image"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
