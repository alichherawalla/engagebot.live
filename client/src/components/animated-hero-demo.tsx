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
        <div className="flex-1 p-6 flex items-center">
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
                <div className="p-4">
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
                      <div className="text-sm text-slate-600 mb-3">
                        {currentDemo.mockup.conversations?.length} high-value opportunities
                      </div>
                      {currentDemo.mockup.conversations?.map((conv, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.2 }}
                          className="border border-slate-200 rounded-lg p-3 space-y-2"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-sm">@{conv.user}</span>
                            <div className="flex items-center space-x-2">
                              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                                {conv.relevance}% match
                              </span>
                              <span className="text-xs text-slate-500">{conv.audience}</span>
                            </div>
                          </div>
                          <p className="text-sm text-slate-700">{conv.snippet}</p>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {currentStep === 2 && (
                    <div className="space-y-4">
                      <div className="bg-slate-50 p-3 rounded-lg">
                        <div className="text-xs text-slate-600 mb-2">Original Post:</div>
                        <p className="text-sm">{currentDemo.mockup.originalPost}</p>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
                        <div className="text-xs text-blue-600 mb-2">AI-Generated Response:</div>
                        <motion.p 
                          className="text-sm text-slate-800"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                        >
                          {currentDemo.mockup.aiResponse}
                        </motion.p>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-center">
                        {Object.entries(currentDemo.mockup.metrics || {}).map(([key, value]) => (
                          <div key={key} className="bg-slate-50 p-2 rounded">
                            <div className="text-xs text-slate-600 capitalize">
                              {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                            </div>
                            <div className="font-semibold text-green-600">{value}%</div>
                          </div>
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