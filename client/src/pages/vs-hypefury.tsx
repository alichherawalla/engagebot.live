import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, XCircle, ArrowRight, Users, Brain, MessageSquare, Target, Zap, TrendingUp } from "lucide-react";
import SEOHead from "@/components/seo-head";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import TrialRequestModal from "@/components/trial-request-modal";

const comparisonFeatures = [
  {
    category: "AI-Powered Engagement",
    features: [
      { name: "Intelligent conversation discovery", engagebot: true, competitor: false },
      { name: "AI-generated authentic responses", engagebot: true, competitor: false },
      { name: "Context-aware reply generation", engagebot: true, competitor: false },
      { name: "Brand voice consistency", engagebot: true, competitor: false },
    ]
  },
  {
    category: "Content Automation",
    features: [
      { name: "Auto-retweet top tweets", engagebot: false, competitor: true },
      { name: "Auto-reply to comments", engagebot: true, competitor: true },
      { name: "Thread scheduling", engagebot: true, competitor: true },
      { name: "Content recycling", engagebot: false, competitor: true },
    ]
  },
  {
    category: "Growth & Engagement",
    features: [
      { name: "Expert conversation targeting", engagebot: true, competitor: false },
      { name: "Relationship building automation", engagebot: true, competitor: false },
      { name: "Authority positioning", engagebot: true, competitor: false },
      { name: "Auto-follow strategies", engagebot: false, competitor: true },
    ]
  },
  {
    category: "Analytics & Insights",
    features: [
      { name: "Engagement quality scoring", engagebot: true, competitor: false },
      { name: "ROI tracking for conversations", engagebot: true, competitor: false },
      { name: "Tweet performance analytics", engagebot: true, competitor: true },
      { name: "Best time to post analysis", engagebot: false, competitor: true },
    ]
  }
];

const benefits = [
  {
    icon: Brain,
    title: "Intelligent vs Mechanical",
    description: "While Hypefury focuses on mechanical automation and growth hacks, EngageBot uses sophisticated AI to create authentic, meaningful engagement that builds real authority."
  },
  {
    icon: Target,
    title: "Quality Over Quantity",
    description: "Instead of mass auto-follows and retweets, EngageBot strategically targets high-value conversations where your expertise can create genuine business opportunities."
  },
  {
    icon: Users,
    title: "Relationship-Centered Growth",
    description: "Move beyond follower count metrics to build meaningful professional relationships through expert-level conversations that position you as an industry leader."
  },
  {
    icon: MessageSquare,
    title: "Authentic Engagement",
    description: "Replace generic automation with AI-powered responses that maintain your unique voice and demonstrate your expertise in every interaction."
  }
];

export default function VsHypefury() {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  return (
    <div className="min-h-screen bg-slate-50">
      <SEOHead
        title="EngageBot vs Hypefury: AI-Powered Engagement vs Growth Automation | EngageBot"
        description="Compare EngageBot's intelligent Twitter engagement with Hypefury's growth automation. Discover why authentic AI conversations outperform mechanical growth hacks for building authority."
        keywords="EngageBot vs Hypefury, AI Twitter automation, smart engagement vs growth hacks, Twitter automation comparison, authentic vs mechanical automation"
        canonical="/vs-hypefury"
      />
      
      <Navbar />
      
      <main className="pt-20" data-testid="vs-hypefury-page">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center space-x-4 mb-8">
                <div className="bg-brand-purple text-white px-6 py-3 rounded-xl font-bold text-xl">
                  EngageBot
                </div>
                <span className="text-3xl text-slate-400">vs</span>
                <div className="bg-orange-500 text-white px-6 py-3 rounded-xl font-bold text-xl">
                  Hypefury
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6" data-testid="vs-hypefury-title">
                Intelligent AI vs <span className="text-brand-purple">Growth Automation</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-8" data-testid="vs-hypefury-description">
                While Hypefury focuses on growth hacks and mechanical automation, EngageBot uses sophisticated AI to build authentic relationships and establish genuine authority on Twitter.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="bg-brand-purple hover:bg-brand-purple-dark" data-testid="start-free-trial">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Link href="/blog">
                  <Button variant="outline" size="lg" data-testid="learn-more">
                    Learn More
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Key Differences */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                The Key Difference: <span className="text-brand-purple">Intelligent vs Mechanical</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Hypefury uses mechanical automation for rapid growth. EngageBot uses intelligent AI to build authentic authority and meaningful business relationships.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <motion.div 
                className="bg-slate-50 p-8 rounded-2xl"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex items-center mb-6">
                  <div className="bg-orange-500 text-white p-3 rounded-xl mr-4">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Hypefury's Approach</h3>
                    <Badge variant="outline" className="mt-1">Growth-First</Badge>
                  </div>
                </div>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Auto-retweet your top-performing tweets
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Automated follow/unfollow strategies
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Schedule threads and content recycling
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Focus on follower count and vanity metrics
                  </li>
                </ul>
              </motion.div>

              <motion.div 
                className="bg-brand-purple/5 p-8 rounded-2xl"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="flex items-center mb-6">
                  <div className="bg-brand-purple text-white p-3 rounded-xl mr-4">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">EngageBot's Approach</h3>
                    <Badge variant="secondary" className="mt-1 bg-brand-purple/10 text-brand-purple">Intelligence-First</Badge>
                  </div>
                </div>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-brand-purple rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    AI-powered conversation discovery and analysis
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-brand-purple rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Generate expert responses that showcase knowledge
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-brand-purple rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Build authentic relationships through meaningful engagement
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-brand-purple rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Focus on authority building and business outcomes
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Why Choose <span className="text-brand-purple">EngageBot</span> Over Hypefury
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Move beyond growth hacks and vanity metrics to intelligent engagement that builds real authority and drives business growth.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  className="bg-white p-8 rounded-2xl shadow-sm"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  data-testid={`benefit-${index}`}
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-brand-purple/10 text-brand-purple p-3 rounded-xl mr-4">
                      <benefit.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{benefit.title}</h3>
                  </div>
                  <p className="text-slate-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Feature Comparison
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Compare EngageBot's intelligent engagement approach with Hypefury's growth automation features.
              </p>
            </motion.div>

            <div className="space-y-12">
              {comparisonFeatures.map((section, index) => (
                <motion.div
                  key={section.category}
                  className="bg-slate-50 rounded-2xl p-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">{section.category}</h3>
                  <div className="grid gap-4">
                    {section.features.map((feature) => (
                      <div key={feature.name} className="flex items-center justify-between py-3 px-4 bg-white rounded-lg">
                        <span className="text-slate-700 font-medium">{feature.name}</span>
                        <div className="flex items-center space-x-8">
                          <div className="flex items-center space-x-2">
                            <span className="text-sm text-slate-500 w-20 text-center">EngageBot</span>
                            {feature.engagebot ? (
                              <CheckCircle className="h-5 w-5 text-brand-purple" />
                            ) : (
                              <XCircle className="h-5 w-5 text-slate-300" />
                            )}
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm text-slate-500 w-20 text-center">Hypefury</span>
                            {feature.competitor ? (
                              <CheckCircle className="h-5 w-5 text-orange-500" />
                            ) : (
                              <XCircle className="h-5 w-5 text-slate-300" />
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-brand-purple text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Ready to Move Beyond Growth Hacks?
              </h2>
              <p className="text-xl mb-8 text-brand-purple-light">
                Join entrepreneurs who've discovered that authentic engagement and authority building create more sustainable growth than mechanical automation.
              </p>
              <div className="flex items-center justify-center">
                <Button 
                  size="lg" 
                  onClick={() => setIsTrialModalOpen(true)}
                  className="bg-brand-green hover:bg-brand-green-light text-white px-8 py-4 text-lg font-semibold shadow-lg" 
                  data-testid="get-early-access"
                >
                  Get Early Access
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      <TrialRequestModal 
        isOpen={isTrialModalOpen} 
        onClose={() => setIsTrialModalOpen(false)} 
      />
    </div>
  );
}