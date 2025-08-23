import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, XCircle, ArrowRight, Users, Brain, MessageSquare, Target, Zap, BarChart3 } from "lucide-react";
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
    category: "Content Management",
    features: [
      { name: "Post scheduling", engagebot: true, competitor: true },
      { name: "Content calendar", engagebot: true, competitor: true },
      { name: "Multi-platform support", engagebot: false, competitor: true },
      { name: "Team collaboration", engagebot: false, competitor: true },
    ]
  },
  {
    category: "Engagement & Relationships",
    features: [
      { name: "Automated relationship building", engagebot: true, competitor: false },
      { name: "Lead generation from conversations", engagebot: true, competitor: false },
      { name: "Expertise-based targeting", engagebot: true, competitor: false },
      { name: "Basic social listening", engagebot: false, competitor: true },
    ]
  },
  {
    category: "Analytics & Insights",
    features: [
      { name: "Engagement quality scoring", engagebot: true, competitor: false },
      { name: "ROI tracking for conversations", engagebot: true, competitor: false },
      { name: "Basic analytics dashboard", engagebot: true, competitor: true },
      { name: "Custom reporting", engagebot: false, competitor: true },
    ]
  }
];

const benefits = [
  {
    icon: Brain,
    title: "AI-First Approach",
    description: "While Buffer focuses on scheduling, EngageBot uses advanced AI to create authentic engagement that builds real relationships."
  },
  {
    icon: MessageSquare,
    title: "Conversation-Driven",
    description: "Go beyond posting content. EngageBot finds and participates in relevant conversations where your expertise adds value."
  },
  {
    icon: Target,
    title: "Precision Targeting",
    description: "Instead of broad social listening, EngageBot identifies high-value conversations based on your specific expertise and goals."
  },
  {
    icon: Users,
    title: "Relationship Focus",
    description: "Transform Twitter interactions into business relationships, not just vanity metrics like likes and shares."
  }
];

export default function VsBuffer() {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  return (
    <div className="min-h-screen bg-slate-50">
      <SEOHead
        title="EngageBot vs Buffer: AI-Powered Engagement vs Content Scheduling | EngageBot"
        description="Compare EngageBot's AI-powered Twitter engagement automation with Buffer's content scheduling. Discover why authentic conversation beats scheduled posts for building business relationships."
        keywords="EngageBot vs Buffer, AI social media automation, Twitter engagement vs scheduling, social media management comparison, automated Twitter responses"
        canonical="/vs-buffer"
      />
      
      <Navbar />
      
      <main className="pt-20" data-testid="vs-buffer-page">
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
                <div className="bg-blue-500 text-white px-6 py-3 rounded-xl font-bold text-xl">
                  Buffer
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6" data-testid="vs-buffer-title">
                AI-Powered Engagement vs <span className="text-brand-purple">Content Scheduling</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-8" data-testid="vs-buffer-description">
                While Buffer excels at scheduling content, EngageBot transforms how you build relationships on Twitter through intelligent, authentic engagement that drives real business results.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  size="lg" 
                  className="bg-brand-purple hover:bg-brand-purple-dark" 
                  data-testid="start-free-trial"
                  onClick={() => setIsTrialModalOpen(true)}
                >
                  Get Early Access
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
                The Key Difference: <span className="text-brand-purple">Engagement vs Scheduling</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Buffer focuses on publishing content. EngageBot focuses on building relationships through meaningful conversations.
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
                  <div className="bg-blue-500 text-white p-3 rounded-xl mr-4">
                    <BarChart3 className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Buffer's Approach</h3>
                    <Badge variant="outline" className="mt-1">Content-First</Badge>
                  </div>
                </div>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Schedule posts across multiple platforms
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Track basic engagement metrics
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Manage content calendar and team workflow
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Focus on broadcasting your message
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
                    <Badge variant="secondary" className="mt-1 bg-brand-purple/10 text-brand-purple">Relationship-First</Badge>
                  </div>
                </div>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-brand-purple rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Discover and join relevant conversations
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-brand-purple rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Generate authentic, expert responses using AI
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-brand-purple rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Build meaningful business relationships
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-brand-purple rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Focus on two-way engagement and value creation
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
                Why Choose <span className="text-brand-purple">EngageBot</span> Over Buffer
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Move beyond content scheduling to intelligent relationship building that drives real business growth.
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
                See how EngageBot's AI-powered engagement compares to Buffer's content scheduling features.
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
                            <span className="text-sm text-slate-500 w-20 text-center">Buffer</span>
                            {feature.competitor ? (
                              <CheckCircle className="h-5 w-5 text-blue-500" />
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
                Ready to Move Beyond Content Scheduling?
              </h2>
              <p className="text-xl mb-8 text-brand-purple-light">
                Join successful entrepreneurs who've discovered the power of AI-driven engagement over traditional social media scheduling.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" variant="secondary" className="bg-white text-brand-purple hover:bg-slate-100" data-testid="get-started">
                  Get Started with EngageBot
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Link href="/blog">
                  <Button 
                    size="lg" 
                    variant="secondary" 
                    className="bg-white text-brand-purple hover:bg-slate-100" 
                    data-testid="read-case-studies"
                  >
                    Read Case Studies
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <TrialRequestModal 
        isOpen={isTrialModalOpen} 
        onClose={() => setIsTrialModalOpen(false)} 
      />
      
      <Footer />
    </div>
  );
}