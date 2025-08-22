import { motion } from "framer-motion";
import { CheckCircle, XCircle, ArrowRight, Users, Brain, MessageSquare, Target, Zap, Calendar } from "lucide-react";
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
      { name: "Brand voice learning", engagebot: true, competitor: false },
    ]
  },
  {
    category: "Content Planning & Publishing",
    features: [
      { name: "Visual content calendar", engagebot: false, competitor: true },
      { name: "Drag-and-drop scheduling", engagebot: false, competitor: true },
      { name: "Post scheduling", engagebot: true, competitor: true },
      { name: "Multi-platform publishing", engagebot: false, competitor: true },
    ]
  },
  {
    category: "Engagement & Growth",
    features: [
      { name: "Automated relationship building", engagebot: true, competitor: false },
      { name: "Lead generation from conversations", engagebot: true, competitor: false },
      { name: "Expert positioning", engagebot: true, competitor: false },
      { name: "Hashtag suggestions", engagebot: false, competitor: true },
    ]
  },
  {
    category: "Analytics & Insights",
    features: [
      { name: "Engagement quality scoring", engagebot: true, competitor: false },
      { name: "Relationship building metrics", engagebot: true, competitor: false },
      { name: "Content performance analytics", engagebot: true, competitor: true },
      { name: "Team productivity insights", engagebot: false, competitor: true },
    ]
  }
];

const benefits = [
  {
    icon: Brain,
    title: "AI-Driven Intelligence",
    description: "While Plannable focuses on content organization, EngageBot uses AI to identify and engage in high-value conversations that build your authority."
  },
  {
    icon: Users,
    title: "Active Relationship Building",
    description: "Go beyond planning posts to actively participating in conversations where your expertise can create real business connections."
  },
  {
    icon: Target,
    title: "Strategic Engagement",
    description: "Instead of just organizing content, EngageBot strategically targets conversations that align with your business goals and expertise."
  },
  {
    icon: MessageSquare,
    title: "Authentic Interactions",
    description: "Transform scheduled posts into genuine conversations that position you as an expert and generate business opportunities."
  }
];

export default function VsPlannable() {
  return (
    <div className="min-h-screen bg-slate-50">
      <SEOHead
        title="EngageBot vs Plannable: AI Engagement vs Visual Content Planning | EngageBot"
        description="Compare EngageBot's AI-powered Twitter engagement with Plannable's visual content planning. Discover how intelligent conversations outperform scheduled content for business growth."
        keywords="EngageBot vs Plannable, AI social media automation, Twitter engagement vs content planning, social media management comparison, automated engagement tools"
        canonical="/vs-plannable"
      />
      
      <Navbar />
      
      <main className="pt-20" data-testid="vs-plannable-page">
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
                <div className="bg-pink-500 text-white px-6 py-3 rounded-xl font-bold text-xl">
                  Plannable
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6" data-testid="vs-plannable-title">
                AI Engagement vs <span className="text-brand-purple">Content Planning</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-8" data-testid="vs-plannable-description">
                While Plannable excels at visual content planning, EngageBot transforms your Twitter presence through intelligent engagement that builds real business relationships and drives growth.
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
                The Key Difference: <span className="text-brand-purple">Active Engagement vs Planning</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Plannable helps you plan and organize content. EngageBot actively engages in conversations to build your authority and generate business opportunities.
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
                  <div className="bg-pink-500 text-white p-3 rounded-xl mr-4">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Plannable's Approach</h3>
                    <Badge variant="outline" className="mt-1">Planning-First</Badge>
                  </div>
                </div>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Visual content calendar with drag-and-drop
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Team collaboration on content approval
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Schedule posts across multiple platforms
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Focus on content organization and workflow
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
                    AI-powered conversation discovery and analysis
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-brand-purple rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Generate contextual, expert responses automatically
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-brand-purple rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Build relationships through meaningful interactions
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-brand-purple rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Focus on authority building and lead generation
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
                Why Choose <span className="text-brand-purple">EngageBot</span> Over Plannable
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Move beyond content planning to intelligent engagement that positions you as an expert and drives business growth.
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
                Compare EngageBot's AI-powered engagement capabilities with Plannable's content planning features.
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
                            <span className="text-sm text-slate-500 w-20 text-center">Plannable</span>
                            {feature.competitor ? (
                              <CheckCircle className="h-5 w-5 text-pink-500" />
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
                Ready to Move Beyond Content Planning?
              </h2>
              <p className="text-xl mb-8 text-brand-purple-light">
                Join entrepreneurs who've discovered that active engagement beats perfect planning when it comes to building authority and generating leads.
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