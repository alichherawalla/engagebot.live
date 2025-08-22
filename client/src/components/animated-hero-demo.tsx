import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, MessageSquare, Target, TrendingUp } from "lucide-react";

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
    <div className="relative w-full h-[400px] sm:h-[450px] lg:h-[500px] bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden shadow-2xl">
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
        <div className="flex-1 p-4 sm:p-6 lg:p-8 flex flex-col justify-center">
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
                <div className={`p-3 rounded-xl bg-gradient-to-br ${currentDemo.color} mr-4`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{currentDemo.title}</h3>
                </div>
              </div>
              <p className="text-blue-100 text-lg leading-relaxed">
                {currentDemo.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Side - Simple Visual */}
        <div className="flex-1 p-6 lg:p-12 flex items-center justify-center">
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
                  <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-blue-600 rounded-3xl flex items-center justify-center shadow-2xl">
                    <Brain className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Content Analysis</h3>
                  <p className="text-blue-200">AI learns your unique voice and communication style</p>
                </>
              )}
              
              {currentStep === 1 && (
                <>
                  <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl flex items-center justify-center shadow-2xl">
                    <Target className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Smart Discovery</h3>
                  <p className="text-blue-200">Identifies high-value conversations in your industry</p>
                </>
              )}
              
              {currentStep === 2 && (
                <>
                  <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center shadow-2xl">
                    <MessageSquare className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Professional Responses</h3>
                  <p className="text-blue-200">Generates authentic, engaging replies that convert</p>
                </>
              )}
              
              {currentStep === 3 && (
                <>
                  <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center shadow-2xl">
                    <TrendingUp className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Performance Tracking</h3>
                  <p className="text-blue-200">Delivers measurable growth and ROI insights</p>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Tagline */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="text-white/80 text-sm text-center">
          <span className="font-medium">Real engagement.</span> Real growth. Real results.
        </div>
      </div>
    </div>
  );
}