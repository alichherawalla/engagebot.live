import { motion } from "framer-motion";
import { ArrowRight, Users, TrendingUp, MessageCircle, Calendar } from "lucide-react";
import SEOHead from "@/components/seo-head";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import TrialRequestModal from "@/components/trial-request-modal";

const caseStudies = [
  {
  id: 1,
  slug: "b2b-saas",
  company: "TechFlow Solutions",
    industry: "B2B SaaS",
    challenge: "Struggling to build authority in competitive martech space with limited social media presence",
    solution: "Used EngageBot to consistently engage in industry discussions and share technical insights",
    results: {
      followers: { before: 890, after: 3200 },
      engagement: { before: "1.2%", after: "4.8%" },
      leads: "127 qualified leads in 6 months",
      timeframe: "6 months"
    },
    quote: "EngageBot helped us go from being invisible in our industry to being recognized as thought leaders. The AI-powered responses feel authentic and have generated real business conversations.",
  author: "Sarah Chen",
  role: "VP Marketing",
  avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face"
  },
  {
  id: 2,
  slug: "sustainability-consulting",
  company: "Verde Consulting",
    industry: "Sustainability Consulting",
    challenge: "Needed to establish credibility and connect with eco-conscious business leaders",
    solution: "Leveraged EngageBot to participate in sustainability conversations and climate tech discussions",
    results: {
      followers: { before: 1200, after: 4100 },
      engagement: { before: "0.9%", after: "3.6%" },
      leads: "89 consultation requests",
      timeframe: "8 months"
    },
    quote: "The platform helped us find and engage with the right conversations about sustainable business practices. We've connected with several Fortune 500 sustainability directors through Twitter engagement.",
  author: "Marcus Rivera",
  role: "Founder",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face"
  },
  {
  id: 3,
  slug: "data-science",
  company: "DataCraft Analytics",
    industry: "Data Science",
    challenge: "Difficulty showcasing expertise and attracting enterprise clients in data analytics market",
    solution: "Used EngageBot to engage with data science communities and share industry insights consistently",
    results: {
      followers: { before: 650, after: 2800 },
      engagement: { before: "1.8%", after: "5.2%" },
      leads: "43 enterprise inquiries",
      timeframe: "5 months"
    },
    quote: "EngageBot's AI understood our technical expertise and helped us engage meaningfully in data science discussions. We've landed three major enterprise contracts directly from Twitter connections.",
  author: "Dr. Emily Watson",
  role: "Chief Data Scientist",
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face"
  },
  {
  id: 4,
  slug: "legal-services",
  company: "Startup Legal Partners",
    industry: "Legal Services",
    challenge: "Needed to build trust and demonstrate expertise to attract startup founders as clients",
  solution: "Engaged in startup ecosystem conversations and provided valuable legal insights using AI-drafted replies",
    results: {
      followers: { before: 1800, after: 5600 },
      engagement: { before: "2.1%", after: "6.4%" },
      leads: "156 legal consultations",
      timeframe: "7 months"
    },
    quote: "The quality of conversations improved dramatically. Founders started reaching out directly because they saw our consistent, helpful presence in startup discussions.",
  author: "James Park",
  role: "Managing Partner",
  avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=64&h=64&fit=crop&crop=face"
  },
  {
  id: 5,
  slug: "cybersecurity",
  company: "CloudSecure",
    industry: "Cybersecurity",
    challenge: "Competing with established players in cybersecurity space, needed to build brand recognition",
    solution: "Participated in cybersecurity discussions and shared threat intelligence insights using EngageBot",
    results: {
      followers: { before: 1100, after: 4200 },
      engagement: { before: "1.5%", after: "4.1%" },
      leads: "91 security assessments booked",
      timeframe: "6 months"
    },
  quote: "EngageBot helped us establish credibility in cybersecurity conversations. The AI-drafted engagement felt natural and still saved time.",
  author: "Alex Thompson",
  role: "CEO",
  avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=64&h=64&fit=crop&crop=face"
  }
];

export default function CaseStudies() {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      <SEOHead
        title="Customer Success Stories & Case Studies | EngageBot"
        description="Discover how businesses across industries use EngageBot to build authority, generate leads, and grow their Twitter presence. Real results from real companies using AI-powered engagement automation."
        keywords="EngageBot case studies, Twitter automation success stories, social media ROI, B2B lead generation, customer testimonials"
      />
      
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-brand-purple via-brand-purple-dark to-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="secondary" className="mb-6 bg-brand-green/20 text-brand-green border-brand-green/30">
                Customer Success Stories
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Real Results from Real Companies
              </h1>
              <p className="text-xl mb-8 text-brand-purple-light max-w-3xl mx-auto">
                See how businesses across industries use EngageBot to build authority, generate quality leads, 
                and grow their Twitter presence with authentic AI-powered engagement.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                  data-testid={`case-study-${study.id}`}
                >
                  <div className="p-8 lg:p-12">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                      {/* Company Info & Challenge */}
                      <div>
                        <div className="flex items-center mb-6">
                          <div className="bg-brand-purple/10 p-3 rounded-lg mr-4">
                            <Users className="h-6 w-6 text-brand-purple" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-slate-900">{`A ${study.industry} company`}</h3>
                            <p className="text-slate-600">Case Study</p>
                          </div>
                        </div>
                        
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-slate-900 mb-3">Challenge</h4>
                          <p className="text-slate-700 leading-relaxed">{study.challenge}</p>
                        </div>
                        
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-slate-900 mb-3">Solution</h4>
                          <p className="text-slate-700 leading-relaxed">{study.solution}</p>
                        </div>

                        {/* Testimonial */}
                        <div className="bg-slate-50 rounded-lg p-6">
                          <blockquote className="text-slate-700 italic mb-4">
                            "{study.quote}"
                          </blockquote>
                          <p className="text-slate-600 text-sm">{study.role}</p>
                        </div>
                      </div>

                      {/* Results */}
                      <div>
                        <h4 className="text-lg font-semibold text-slate-900 mb-6">Results Achieved</h4>
                        
                        <div className="grid grid-cols-2 gap-6 mb-6">
                          <div className="bg-gradient-to-br from-brand-green/10 to-brand-green/5 p-6 rounded-lg">
                            <div className="flex items-center mb-3">
                              <Users className="h-5 w-5 text-brand-green mr-2" />
                              <span className="text-sm font-medium text-slate-600">Followers</span>
                            </div>
                            <p className="text-2xl font-bold text-slate-900">
                              {study.results.followers.before.toLocaleString()} → {study.results.followers.after.toLocaleString()}
                            </p>
                            <p className="text-sm text-brand-green font-medium">
                              +{Math.round(((study.results.followers.after - study.results.followers.before) / study.results.followers.before) * 100)}% growth
                            </p>
                          </div>
                          
                          <div className="bg-gradient-to-br from-brand-purple/10 to-brand-purple/5 p-6 rounded-lg">
                            <div className="flex items-center mb-3">
                              <TrendingUp className="h-5 w-5 text-brand-purple mr-2" />
                              <span className="text-sm font-medium text-slate-600">Engagement</span>
                            </div>
                            <p className="text-2xl font-bold text-slate-900">
                              {study.results.engagement.before} → {study.results.engagement.after}
                            </p>
                            <p className="text-sm text-brand-purple font-medium">
                              {Math.round((parseFloat(study.results.engagement.after) / parseFloat(study.results.engagement.before)) * 100 - 100)}% increase
                            </p>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                          <div className="bg-gradient-to-br from-blue-50 to-blue-25 p-6 rounded-lg">
                            <div className="flex items-center mb-3">
                              <MessageCircle className="h-5 w-5 text-blue-600 mr-2" />
                              <span className="text-sm font-medium text-slate-600">Business Impact</span>
                            </div>
                            <p className="text-lg font-bold text-slate-900">{study.results.leads}</p>
                          </div>
                          
                          <div className="bg-gradient-to-br from-orange-50 to-orange-25 p-6 rounded-lg">
                            <div className="flex items-center mb-3">
                              <Calendar className="h-5 w-5 text-orange-600 mr-2" />
                              <span className="text-sm font-medium text-slate-600">Timeframe</span>
                            </div>
                            <p className="text-lg font-bold text-slate-900">{study.results.timeframe}</p>
                          </div>
                        </div>

                        <div className="mt-6">
                          <a href={`/case-studies/${study.slug}`}>
                            <Button variant="secondary" className="bg-white text-brand-purple border border-brand-purple hover:bg-slate-100">
                              Read full case study
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </a>
                        </div>
                      </div>
                    </div>
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
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-xl mb-8 text-brand-purple-light">
                Join these successful companies and start building authentic engagement that drives real business results.
              </p>
              <Button 
                size="lg" 
                onClick={() => setIsTrialModalOpen(true)}
                className="bg-brand-green hover:bg-brand-green-light text-white px-8 py-4 text-lg font-semibold shadow-lg" 
                data-testid="cta-get-early-access"
              >
                Get Early Access
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
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