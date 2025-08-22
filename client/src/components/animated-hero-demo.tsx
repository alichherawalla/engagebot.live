import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, MessageSquare, Target, TrendingUp, Users, Zap } from "lucide-react";

export default function AnimatedHeroDemo() {
  const [currentStep, setCurrentStep] = useState(0);

  const demoSteps = [
    {
      id: "voice-training",
      title: "AI Learns Your Voice",
      subtitle: "Upload your expertise",
      description: "Analyzes your writing style and expertise to maintain authenticity",
      icon: Brain,
      mockup: {
        title: "Voice Training",
        progress: 100,
        insights: [
          "Professional tone detected",
          "SaaS expertise identified", 
          "Voice preferences learned"
        ]
      },
      color: "from-purple-500 to-blue-600"
    },
    {
      id: "conversation-discovery", 
      title: "Finds Conversations",
      subtitle: "Discovers opportunities",
      description: "Identifies relevant conversations where your expertise adds value",
      icon: Target,
      mockup: {
        title: "Opportunities",
        conversations: [
          {
            user: "StartupFounder",
            snippet: "Need help with customer acquisition...",
            score: 94
          },
          {
            user: "GrowthHacker", 
            snippet: "What metrics should startups track?",
            score: 89
          }
        ]
      },
      color: "from-emerald-500 to-teal-600"
    },
    {
      id: "ai-responses",
      title: "Generates Responses", 
      subtitle: "Creates expert replies",
      description: "Crafts authentic responses that showcase your expertise",
      icon: MessageSquare,
      mockup: {
        title: "AI Response",
        originalPost: "Need help with customer acquisition...",
        aiResponse: "Consider product-led growth with content marketing. Start with:\n\n1. Define your ICP\n2. Create educational content\n3. Build virality loops\n\nSeen 40% CAC improvement with this approach.",
        metrics: {
          voice: 96,
          expertise: 94,
          engagement: 92
        }
      },
      color: "from-blue-500 to-indigo-600"
    },
    {
      id: "growth-results",
      title: "Drives Growth",
      subtitle: "Real results", 
      description: "Quality engagement builds followers and business opportunities",
      icon: TrendingUp,
      mockup: {
        title: "30-Day Results",
        metrics: [
          { label: "Followers", value: "+347" },
          { label: "Engagement", value: "8.4%" },
          { label: "Inquiries", value: "+12" },
          { label: "Mentions", value: "+28" }
        ]
      },
      color: "from-green-500 to-emerald-600"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % demoSteps.length);
    }, 4000);

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
              <div className="flex items-center mb-3 sm:mb-4">
                <div className={`p-2 sm:p-3 rounded-xl bg-gradient-to-br ${currentDemo.color} mr-3 sm:mr-4`}>
                  <Icon className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold">{currentDemo.title}</h3>
                  <p className="text-blue-200 text-xs sm:text-sm">{currentDemo.subtitle}</p>
                </div>
              </div>
              <p className="text-blue-100 text-sm sm:text-base lg:text-lg leading-relaxed">
                {currentDemo.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Side - Mockup */}
        <div className="flex-1 p-3 sm:p-6 lg:p-12 xl:p-16 pb-16 sm:pb-20 flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                {/* Browser Header */}
                <div className="bg-slate-100 px-4 py-2 border-b flex items-center">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-sm font-medium text-slate-600">
                      {currentDemo.mockup.title}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-2 sm:p-3 lg:p-4 max-h-[200px] sm:max-h-[250px] lg:max-h-[300px] overflow-y-auto">
                  {currentStep === 0 && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Voice Analysis</span>
                        <span className="text-sm text-green-600 font-semibold">
                          {currentDemo.mockup.progress}% Complete
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div 
                          className="bg-gradient-to-r from-purple-500 to-blue-600 h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 2 }}
                        />
                      </div>
                      <div className="space-y-2">
                        {currentDemo.mockup.insights?.map((insight, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.3 }}
                            className="flex items-center text-sm"
                          >
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                            {insight}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {currentStep === 1 && (
                    <div className="space-y-3">
                      <div className="text-center mb-3">
                        <span className="text-sm font-semibold text-slate-700">
                          {currentDemo.mockup.conversations?.length} Live Opportunities
                        </span>
                      </div>
                      
                      {currentDemo.mockup.conversations?.map((conv, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.3 }}
                          className="bg-slate-50 border border-slate-200 rounded-lg p-3 space-y-2"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                                <span className="text-white text-xs font-bold">
                                  {conv.user.charAt(0)}
                                </span>
                              </div>
                              <span className="font-medium text-sm text-slate-800">@{conv.user}</span>
                            </div>
                            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
                              {conv.score}% match
                            </span>
                          </div>
                          <div className="bg-white rounded p-2 border-l-4 border-emerald-400">
                            <p className="text-sm text-slate-700">{conv.snippet}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {currentStep === 2 && (
                    <div className="space-y-3">
                      <div className="text-center mb-3">
                        <span className="text-sm font-semibold text-slate-700">AI Response</span>
                      </div>
                      
                      <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-5 h-5 bg-slate-400 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">Q</span>
                          </div>
                          <span className="text-xs font-medium text-slate-600">Question</span>
                        </div>
                        <p className="text-sm text-slate-700 bg-white p-2 rounded border-l-4 border-slate-300">
                          {currentDemo.mockup.originalPost}
                        </p>
                      </div>
                      
                      <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">You</span>
                          </div>
                          <span className="text-xs font-medium text-blue-700">Your AI Response</span>
                        </div>
                        <motion.div 
                          className="bg-white p-2 rounded border-l-4 border-blue-500"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                        >
                          <p className="text-sm text-slate-800">
                            {currentDemo.mockup.aiResponse}
                          </p>
                        </motion.div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-2">
                        {Object.entries(currentDemo.mockup.metrics || {}).map(([key, value]) => (
                          <motion.div 
                            key={key} 
                            className="bg-green-50 p-2 rounded border border-green-200 text-center"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.7 }}
                          >
                            <div className="text-xs text-slate-600 font-medium capitalize">
                              {key}
                            </div>
                            <div className="text-lg font-bold text-green-600">{value}%</div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {currentStep === 3 && (
                    <div className="space-y-4">
                      <div className="text-center mb-3">
                        <div className="text-sm font-bold text-slate-900">
                          {currentDemo.mockup.title}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {currentDemo.mockup.metrics?.map((metric: any, i: number) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-green-50 p-3 rounded-lg border border-green-200 text-center"
                          >
                            <div className="text-xs text-slate-600">{metric.label}</div>
                            <div className="font-bold text-lg text-slate-900">{metric.value}</div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
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