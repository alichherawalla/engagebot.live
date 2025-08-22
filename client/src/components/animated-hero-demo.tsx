import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, MessageSquare, Target, TrendingUp, Users, Zap } from "lucide-react";

export default function AnimatedHeroDemo() {
  const [currentStep, setCurrentStep] = useState(0);

  const demoSteps = [
    {
      id: "voice-training",
      title: "AI Learns Your Voice",
      subtitle: "Upload your expertise content",
      description: "EngageBot analyzes your writing style, expertise, and brand voice",
      icon: Brain,
      mockup: {
        title: "Voice Training Complete",
        progress: 100,
        insights: [
          "Professional, data-driven tone detected",
          "SaaS & growth expertise identified", 
          "Conversational style preferences learned"
        ],
        stats: {
          documents: 12,
          voiceScore: 95
        }
      },
      color: "from-purple-500 to-blue-600"
    },
    {
      id: "conversation-discovery", 
      title: "Discovers Relevant Conversations",
      subtitle: "AI finds high-value engagement opportunities",
      description: "Smart algorithms identify conversations where your expertise adds real value",
      icon: Target,
      mockup: {
        title: "Fresh Opportunities Found",
        conversations: [
          {
            user: "StartupFounder2024",
            snippet: "Struggling with customer acquisition for our B2B SaaS...",
            relevance: 94,
            audience: "2.3K followers"
          },
          {
            user: "GrowthHacker_Pro", 
            snippet: "What metrics should early-stage startups focus on?",
            relevance: 89,
            audience: "8.1K followers"
          },
          {
            user: "TechEntrepreneur",
            snippet: "Looking for proven frameworks to scale our team...",
            relevance: 87,
            audience: "5.7K followers"
          }
        ]
      },
      color: "from-emerald-500 to-teal-600"
    },
    {
      id: "ai-responses",
      title: "Generates Perfect Responses", 
      subtitle: "AI crafts authentic, expert responses",
      description: "Every response showcases your expertise while maintaining your authentic voice",
      icon: MessageSquare,
      mockup: {
        title: "AI Response Generator",
        originalPost: "Struggling with customer acquisition for our B2B SaaS startup. Any proven frameworks?",
        aiResponse: "Consider implementing a product-led growth strategy combined with content marketing. Start with these 3 steps:\n\n1. Identify your ideal customer profile (ICP)\n2. Create educational content that solves their pain points\n3. Build in-product virality loops\n\nI've seen startups increase CAC efficiency by 40% using this approach. Happy to share specific tactics if helpful!",
        metrics: {
          brandAlignment: 96,
          expertiseScore: 94,
          engagementPredict: 92
        }
      },
      color: "from-blue-500 to-indigo-600"
    },
    {
      id: "growth-results",
      title: "Builds Your Brand Authority",
      subtitle: "Engagement drives real follower growth", 
      description: "Quality engagement with relevant audience builds genuine followers and business opportunities",
      icon: TrendingUp,
      mockup: {
        title: "Growth Analytics",
        timeframe: "Last 30 Days",
        metrics: [
          { label: "Quality Followers", value: "+347", change: "+23%" },
          { label: "Engagement Rate", value: "8.4%", change: "+156%" },
          { label: "Business Inquiries", value: "12", change: "+400%" },
          { label: "Brand Mentions", value: "28", change: "+180%" }
        ],
        insight: "Your expertise-driven engagement is building real business relationships"
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
    <div className="relative w-full h-[500px] bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden shadow-2xl">
      {/* Animated Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${currentDemo.color} opacity-20 transition-all duration-1000`} />
      
      {/* Progress Indicators */}
      <div className="absolute top-6 left-6 flex space-x-2">
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
      <div className="flex h-full">
        {/* Left Side - Description */}
        <div className="flex-1 p-8 flex flex-col justify-center">
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
                  <p className="text-blue-200 text-sm">{currentDemo.subtitle}</p>
                </div>
              </div>
              <p className="text-blue-100 text-lg leading-relaxed">
                {currentDemo.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Side - Mockup */}
        <div className="flex-1 p-6 pb-16 flex items-center">
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
                <div className="p-4 pb-16">
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
                    <div className="space-y-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-sm font-semibold text-slate-700">
                            {currentDemo.mockup.conversations?.length} Live Opportunities
                          </span>
                        </div>
                        <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full font-medium">
                          Real-time
                        </span>
                      </div>
                      
                      {currentDemo.mockup.conversations?.slice(0, 2).map((conv, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.3 }}
                          className="bg-gradient-to-r from-slate-50 to-emerald-50 border border-emerald-200 rounded-xl p-4 space-y-3 hover:shadow-md transition-shadow"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex items-center space-x-2">
                              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                                <span className="text-white text-xs font-bold">
                                  {conv.user.charAt(0).toUpperCase()}
                                </span>
                              </div>
                              <div>
                                <span className="font-semibold text-sm text-slate-800">@{conv.user}</span>
                                <div className="text-xs text-slate-500">{conv.audience}</div>
                              </div>
                            </div>
                            <div className="flex flex-col items-end space-y-1">
                              <span className="text-xs bg-gradient-to-r from-green-500 to-emerald-600 text-white px-2 py-1 rounded-full font-medium">
                                {conv.relevance}% match
                              </span>
                              <div className="flex items-center space-x-1">
                                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                                <span className="text-xs text-slate-500">Hot</span>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white rounded-lg p-3 border-l-4 border-emerald-400">
                            <p className="text-sm text-slate-700 leading-relaxed">{conv.snippet}</p>
                          </div>
                        </motion.div>
                      ))}
                      
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="text-center"
                      >
                        <span className="text-xs text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                          +{(currentDemo.mockup.conversations?.length || 3) - 2} more opportunities
                        </span>
                      </motion.div>
                    </div>
                  )}

                  {currentStep === 2 && (
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-semibold text-slate-700">AI Response Generator</span>
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Live</span>
                      </div>
                      
                      <div className="bg-gradient-to-r from-slate-50 to-blue-50 p-4 rounded-xl border border-slate-200">
                        <div className="flex items-center space-x-2 mb-3">
                          <div className="w-6 h-6 bg-slate-400 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">S</span>
                          </div>
                          <span className="text-xs font-medium text-slate-600">@StartupFounder2024</span>
                        </div>
                        <p className="text-sm text-slate-700 leading-relaxed bg-white p-3 rounded-lg border-l-4 border-slate-300">
                          {currentDemo.mockup.originalPost}
                        </p>
                      </div>
                      
                      <div className="relative">
                        <div className="absolute left-4 top-0 w-0.5 h-4 bg-gradient-to-b from-slate-300 to-blue-500"></div>
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-200 ml-8">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center space-x-2">
                              <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                                <span className="text-white text-xs font-bold">You</span>
                              </div>
                              <span className="text-xs font-medium text-blue-700">AI-Generated Response</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                              <span className="text-xs text-green-600 font-medium">Optimized</span>
                            </div>
                          </div>
                          <motion.div 
                            className="bg-white p-3 rounded-lg border-l-4 border-blue-500"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                          >
                            <p className="text-sm text-slate-800 leading-relaxed">
                              {currentDemo.mockup.aiResponse}
                            </p>
                          </motion.div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-2">
                        {Object.entries(currentDemo.mockup.metrics || {}).map(([key, value]) => (
                          <motion.div 
                            key={key} 
                            className="bg-gradient-to-br from-green-50 to-emerald-50 p-3 rounded-lg border border-green-200 text-center"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.7 }}
                          >
                            <div className="text-xs text-slate-600 font-medium capitalize mb-1">
                              {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                            </div>
                            <div className="text-lg font-bold text-green-600">{value}%</div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {currentStep === 3 && (
                    <div className="space-y-4">
                      <div className="text-center mb-4">
                        <div className="text-lg font-bold text-slate-900">
                          {currentDemo.mockup.timeframe}
                        </div>
                        <div className="text-sm text-slate-600">
                          {currentDemo.mockup.insight}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        {(currentDemo.mockup.metrics as any[])?.map((metric: any, i: number) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-gradient-to-br from-green-50 to-emerald-50 p-3 rounded-lg border border-green-200"
                          >
                            <div className="text-xs text-slate-600">{metric.label}</div>
                            <div className="font-bold text-lg text-slate-900">{metric.value}</div>
                            <div className="text-xs text-green-600 font-medium">{metric.change}</div>
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