import { motion } from "framer-motion";
import { CheckCircle, XCircle, ArrowRight, Users, Brain, MessageSquare, Target, Zap, BarChart2 } from "lucide-react";
import SEOHead from "@/components/seo-head";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";

const comparisonFeatures = [
  {
    category: "AI-Powered Engagement",
    features: [
      { name: "Intelligent conversation discovery", engagebot: true, competitor: false },
      { name: "AI-generated authentic responses", engagebot: true, competitor: false },
      { name: "Context-aware reply generation", engagebot: true, competitor: false },
      { name: "Brand voice learning and consistency", engagebot: true, competitor: false },
    ]
  },
  {
    category: "Social Listening & Monitoring",
    features: [
      { name: "Keyword monitoring", engagebot: false, competitor: true },
      { name: "Brand mention tracking", engagebot: false, competitor: true },
      { name: "Competitor analysis", engagebot: false, competitor: true },
      { name: "Expert conversation targeting", engagebot: true, competitor: false },
    ]
  },
  {
    category: "Engagement & Relationships",
    features: [
      { name: "Automated relationship building", engagebot: true, competitor: false },
      { name: "Lead generation from conversations", engagebot: true, competitor: false },
      { name: "Authority positioning", engagebot: true, competitor: false },
      { name: "Social inbox management", engagebot: false, competitor: true },
    ]
  },
  {
    category: "Analytics & Reporting",
    features: [
      { name: "Engagement quality scoring", engagebot: true, competitor: false },
      { name: "ROI tracking for conversations", engagebot: true, competitor: false },
      { name: "Advanced social analytics", engagebot: false, competitor: true },
      { name: "Custom reporting dashboards", engagebot: false, competitor: true },
    ]
  },
  {
    category: "Team & Enterprise Features",
    features: [
      { name: "Multi-user collaboration", engagebot: false, competitor: true },
      { name: "Workflow management", engagebot: false, competitor: true },
      { name: "Role-based permissions", engagebot: false, competitor: true },
      { name: "Individual expert positioning", engagebot: true, competitor: false },
    ]
  }
];

const benefits = [
  {
    icon: Brain,
    title: "AI-First Intelligence",
    description: "While Sprout Social focuses on monitoring and analytics, EngageBot uses advanced AI to actively participate in conversations that matter to your business."
  },
  {
    icon: Target,
    title: "Quality Over Quantity",
    description: "Instead of tracking every mention, EngageBot strategically engages in high-value conversations where your expertise can create real business impact."
  },
  {
    icon: Users,
    title: "Direct Relationship Building",
    description: "Move beyond social listening to active relationship building through authentic, AI-powered engagement that positions you as an industry expert."
  },
  {
    icon: MessageSquare,
    title: "Conversation-Driven Growth",
    description: "Transform social media from a broadcasting channel into a powerful business development tool through meaningful, expert-level conversations."
  }
];

export default function VsSproutSocial() {
  return (
    <div className="min-h-screen bg-slate-50">
      <SEOHead
        title="EngageBot vs Sprout Social: AI Engagement vs Social Media Management | EngageBot"
        description="Compare EngageBot's AI-powered Twitter engagement with Sprout Social's comprehensive social media management. Discover how targeted engagement outperforms broad monitoring for business growth."
        keywords="EngageBot vs Sprout Social, AI social media automation, Twitter engagement vs social listening, social media management comparison, automated Twitter responses"
        canonical="/vs-sproutsocial"
      />
      
      <Navbar />
      
      <main className="pt-20" data-testid="vs-sproutsocial-page">
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
                <div className="bg-green-600 text-white px-6 py-3 rounded-xl font-bold text-xl">
                  Sprout Social
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6" data-testid="vs-sproutsocial-title">
                AI Engagement vs <span className="text-brand-purple">Social Media Management</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-8" data-testid="vs-sproutsocial-description">
                While Sprout Social excels at comprehensive social media management, EngageBot focuses specifically on AI-powered Twitter engagement that builds authority and drives business results.
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
                The Key Difference: <span className="text-brand-purple">Active Engagement vs Monitoring</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Sprout Social helps you monitor and manage social media across platforms. EngageBot actively builds your authority through intelligent Twitter conversations.
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
                  <div className="bg-green-600 text-white p-3 rounded-xl mr-4">
                    <BarChart2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Sprout Social's Approach</h3>
                    <Badge variant="outline" className="mt-1">Management-First</Badge>
                  </div>
                </div>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Monitor mentions and keywords across platforms
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Manage team workflows and approval processes
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Comprehensive analytics and reporting
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Multi-platform social media management
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
                    <Badge variant="secondary" className="mt-1 bg-brand-purple/10 text-brand-purple">Engagement-First</Badge>
                  </div>
                </div>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-brand-purple rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    AI-powered discovery of relevant conversations
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-brand-purple rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Generate contextual, expert responses automatically
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-brand-purple rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Focus on relationship building and authority
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-brand-purple rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Specialized Twitter engagement optimization
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
                Why Choose <span className="text-brand-purple">EngageBot</span> Over Sprout Social
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Move beyond social media monitoring to strategic engagement that positions you as an expert and generates business opportunities.
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
                Compare EngageBot's specialized Twitter engagement with Sprout Social's comprehensive social media management suite.
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
                            <span className="text-sm text-slate-500 w-20 text-center">Sprout Social</span>
                            {feature.competitor ? (
                              <CheckCircle className="h-5 w-5 text-green-600" />
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
                Ready to Move Beyond Social Media Monitoring?
              </h2>
              <p className="text-xl mb-8 text-brand-purple-light">
                Join successful entrepreneurs who've discovered that strategic engagement beats comprehensive monitoring when it comes to building authority and generating leads.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" variant="secondary" className="bg-white text-brand-purple hover:bg-slate-100" data-testid="get-started">
                  Get Started with EngageBot
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Link href="/blog">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-purple" data-testid="read-case-studies">
                    Read Success Stories
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}