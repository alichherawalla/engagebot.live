import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, MessageSquare, Target, TrendingUp, Zap, Users, BarChart, Rocket } from "lucide-react";

export default function AnimatedHeroDemo() {
  const [currentStep, setCurrentStep] = useState(0);

  const demoSteps = [
    {
      title: "Content Analysis",
      description: "AI learns your unique voice and communication style",
      icon: Brain,
      color: "from-purple-500 to-blue-600"
    },
    {
      title: "Smart Discovery",
      description: "Identifies high-value conversations in your industry",
      icon: Target,
      color: "from-emerald-500 to-teal-600"
    },
    {
      title: "Professional Responses", 
      description: "Generates authentic, engaging replies that convert",
      icon: MessageSquare,
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Performance Tracking",
      description: "Delivers measurable growth and ROI insights",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-600"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % demoSteps.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const currentDemo = demoSteps[currentStep];
  const Icon = currentDemo.icon;

  return (
    <div className="relative w-full h-[400px] sm:h-[420px] lg:h-[480px] bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden shadow-2xl">
      {/* Animated Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${currentDemo.color} opacity-20 transition-all duration-1000`} />
      
      {/* Progress Indicators */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex space-x-2">
        {demoSteps.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-500 ${
              index === currentStep ? 'bg-white' : 'bg-white/30'
            }`}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row h-full">
        {/* Left Side - Description */}
        <div className="flex-1 px-4 py-8 sm:p-6 lg:p-8 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.6 }}
              className="text-white"
            >
              <div className="flex items-center mb-4">
                <div className={`p-2 sm:p-3 rounded-xl bg-gradient-to-br ${currentDemo.color} mr-3 sm:mr-4`}>
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold">{currentDemo.title}</h3>
                </div>
              </div>
              <p className="text-blue-100 text-sm sm:text-lg leading-relaxed">
                {currentDemo.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Side - Simple Visual */}
        <div className="flex-1 px-4 py-4 sm:p-6 lg:p-12 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.2 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              {currentStep === 0 && (
                <>
                  <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-3 sm:mb-4 lg:mb-6 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-2xl">
                    <Zap className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2">Instant Optimization</h3>
                  <p className="text-blue-200 text-sm sm:text-base">Transforms your content strategy in real-time</p>
                </>
              )}
              
              {currentStep === 1 && (
                <>
                  <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-3 sm:mb-4 lg:mb-6 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-2xl">
                    <Users className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2">Audience Expansion</h3>
                  <p className="text-blue-200 text-sm sm:text-base">Connects you with qualified prospects automatically</p>
                </>
              )}
              
              {currentStep === 2 && (
                <>
                  <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-3 sm:mb-4 lg:mb-6 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-2xl">
                    <BarChart className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2">Conversion Analytics</h3>
                  <p className="text-blue-200 text-sm sm:text-base">Tracks response effectiveness and lead quality</p>
                </>
              )}
              
              {currentStep === 3 && (
                <>
                  <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-3 sm:mb-4 lg:mb-6 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-2xl">
                    <Rocket className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2">Revenue Acceleration</h3>
                  <p className="text-blue-200 text-sm sm:text-base">Scales your business through automated engagement</p>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Tagline */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="text-white/80 text-xs sm:text-sm text-center px-4">
          <span className="font-medium">Real engagement.</span> Real growth. Real results.
        </div>
      </div>
    </div>
  );
}