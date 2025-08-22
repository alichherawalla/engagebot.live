import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, MessageSquare, Target, TrendingUp } from "lucide-react";

export default function AnimatedHeroDemo() {
  const [currentStep, setCurrentStep] = useState(0);

  const demoSteps = [
    {
      title: "Learn Voice",
      description: "AI learns style",
      icon: Brain,
      color: "from-purple-500 to-blue-600"
    },
    {
      title: "Find Posts",
      description: "Find opportunities",
      icon: Target,
      color: "from-emerald-500 to-teal-600"
    },
    {
      title: "Make Replies", 
      description: "Create responses",
      icon: MessageSquare,
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Grow Fans",
      description: "Build followers",
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

        {/* Right Side - Professional Dashboard */}
        <div className="flex-1 p-6 lg:p-12 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-sm"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-2xl">
                {currentStep === 0 && (
                  <>
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center mr-3">
                        <Brain className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">Voice Analysis</h3>
                        <p className="text-white/60 text-sm">Processing content</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-white/80">Documents</span>
                        <span className="text-green-400">✓ 12 processed</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <motion.div 
                          className="bg-gradient-to-r from-purple-400 to-blue-400 h-2 rounded-full"
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 2 }}
                        />
                      </div>
                      <p className="text-white/90 text-sm">Voice model: 95% accuracy</p>
                    </div>
                  </>
                )}
                
                {currentStep === 1 && (
                  <>
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center mr-3">
                        <Target className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">Discovery Engine</h3>
                        <p className="text-white/60 text-sm">Scanning Twitter</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-white/80">Opportunities</span>
                        <span className="text-emerald-400">148 found</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-white/80">Match Score</span>
                        <span className="text-emerald-400">94% avg</span>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3">
                        <p className="text-white/90 text-sm">"Need help with SaaS growth..."</p>
                        <div className="flex items-center mt-2">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></div>
                          <span className="text-white/60 text-xs">High-value match</span>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                
                {currentStep === 2 && (
                  <>
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                        <MessageSquare className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">AI Response</h3>
                        <p className="text-white/60 text-sm">Generating reply</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-white/10 rounded-lg p-3">
                        <p className="text-white/90 text-sm">"Consider product-led growth with content marketing..."</p>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div>
                          <p className="text-blue-400 font-semibold">96%</p>
                          <p className="text-white/60 text-xs">Voice</p>
                        </div>
                        <div>
                          <p className="text-blue-400 font-semibold">94%</p>
                          <p className="text-white/60 text-xs">Expert</p>
                        </div>
                        <div>
                          <p className="text-blue-400 font-semibold">92%</p>
                          <p className="text-white/60 text-xs">Impact</p>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                
                {currentStep === 3 && (
                  <>
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                        <TrendingUp className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">Growth Analytics</h3>
                        <p className="text-white/60 text-sm">30-day performance</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white/10 rounded-lg p-3 text-center">
                        <p className="text-green-400 font-bold text-lg">+347</p>
                        <p className="text-white/60 text-xs">Followers</p>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3 text-center">
                        <p className="text-green-400 font-bold text-lg">8.4%</p>
                        <p className="text-white/60 text-xs">Rate</p>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3 text-center">
                        <p className="text-green-400 font-bold text-lg">+12</p>
                        <p className="text-white/60 text-xs">Leads</p>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3 text-center">
                        <p className="text-green-400 font-bold text-lg">+28</p>
                        <p className="text-white/60 text-xs">Mentions</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
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