import { useRoute } from "wouter";
import SEOHead from "@/components/seo-head";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { Users, TrendingUp, MessageCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import TrialRequestModal from "@/components/trial-request-modal";

// Reuse a minimal dataset; in a real app, fetch by slug
const allStudies = [
  { id: 1, slug: "b2b-saas", industry: "B2B SaaS", challenge: "Struggling to build authority in competitive martech space with limited social media presence", solution: "Used EngageBot to consistently engage in industry discussions and share technical insights", results: { followers: { before: 890, after: 3200 }, engagement: { before: "1.2%", after: "4.8%" }, leads: "127 qualified leads in 6 months", timeframe: "6 months" } },
  { id: 2, slug: "sustainability-consulting", industry: "Sustainability Consulting", challenge: "Needed to establish credibility and connect with eco-conscious business leaders", solution: "Leveraged EngageBot to participate in sustainability conversations and climate tech discussions", results: { followers: { before: 1200, after: 4100 }, engagement: { before: "0.9%", after: "3.6%" }, leads: "89 consultation requests", timeframe: "8 months" } },
  { id: 3, slug: "data-science", industry: "Data Science", challenge: "Difficulty showcasing expertise and attracting enterprise clients in data analytics market", solution: "Used EngageBot to engage with data science communities and share industry insights consistently", results: { followers: { before: 650, after: 2800 }, engagement: { before: "1.8%", after: "5.2%" }, leads: "43 enterprise inquiries", timeframe: "5 months" } },
  { id: 4, slug: "legal-services", industry: "Legal Services", challenge: "Needed to build trust and demonstrate expertise to attract startup founders as clients", solution: "Engaged in startup ecosystem conversations and provided valuable legal insights through automated responses", results: { followers: { before: 1800, after: 5600 }, engagement: { before: "2.1%", after: "6.4%" }, leads: "156 legal consultations", timeframe: "7 months" } },
  { id: 5, slug: "cybersecurity", industry: "Cybersecurity", challenge: "Competing with established players in cybersecurity space, needed to build brand recognition", solution: "Participated in cybersecurity discussions and shared threat intelligence insights using EngageBot", results: { followers: { before: 1100, after: 4200 }, engagement: { before: "1.5%", after: "4.1%" }, leads: "91 security assessments booked", timeframe: "6 months" } },
];

export default function CaseStudy() {
  const [, params] = useRoute("/case-studies/:slug");
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const slug = params?.slug as string | undefined;
  const study = allStudies.find((s) => s.slug === slug);

  if (!study) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Navbar />
        <main className="pt-24 text-center text-slate-700">Case study not found.</main>
        <Footer />
      </div>
    );
  }

  const followerGrowth = Math.round(((study.results.followers.after - study.results.followers.before) / study.results.followers.before) * 100);
  const engagementIncrease = Math.round((parseFloat(study.results.engagement.after) / parseFloat(study.results.engagement.before)) * 100 - 100);

  return (
    <div className="min-h-screen bg-slate-50">
      <SEOHead
        title={`Case Study: A ${study.industry} company | EngageBot`}
        description={`How a ${study.industry} company used EngageBot to achieve measurable growth through AI-powered engagement.`}
        canonical={`/case-studies/${slug}`}
      />
      <Navbar />
      <main>
        <section className="py-20 bg-gradient-to-br from-brand-purple via-brand-purple-dark to-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="uppercase tracking-wide text-brand-green mb-3">Case Study</p>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">A {study.industry} company</h1>
              <p className="text-brand-purple-light text-lg max-w-3xl">Real-world results with anonymized details for privacy.</p>
            </motion.div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Challenge</h2>
                <p className="text-slate-700 mb-8">{study.challenge}</p>

                <h2 className="text-2xl font-bold text-slate-900 mb-4">Solution</h2>
                <p className="text-slate-700 mb-8">{study.solution}</p>

                <div className="bg-slate-50 rounded-lg p-6">
                  <p className="text-slate-600 text-sm">Testimonial from a senior leader (name and photo withheld)</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Results</h2>
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="bg-gradient-to-br from-brand-green/10 to-brand-green/5 p-6 rounded-lg">
                    <div className="flex items-center mb-3">
                      <Users className="h-5 w-5 text-brand-green mr-2" />
                      <span className="text-sm font-medium text-slate-600">Followers</span>
                    </div>
                    <p className="text-2xl font-bold text-slate-900">
                      {study.results.followers.before.toLocaleString()} → {study.results.followers.after.toLocaleString()}
                    </p>
                    <p className="text-sm text-brand-green font-medium">+{followerGrowth}% growth</p>
                  </div>
                  <div className="bg-gradient-to-br from-brand-purple/10 to-brand-purple/5 p-6 rounded-lg">
                    <div className="flex items-center mb-3">
                      <TrendingUp className="h-5 w-5 text-brand-purple mr-2" />
                      <span className="text-sm font-medium text-slate-600">Engagement</span>
                    </div>
                    <p className="text-2xl font-bold text-slate-900">
                      {study.results.engagement.before} → {study.results.engagement.after}
                    </p>
                    <p className="text-sm text-brand-purple font-medium">{engagementIncrease}% increase</p>
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
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button onClick={() => setIsTrialModalOpen(true)} className="bg-brand-green hover:bg-brand-green-light text-white">
                Get Early Access
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <TrialRequestModal isOpen={isTrialModalOpen} onClose={() => setIsTrialModalOpen(false)} />
    </div>
  );
}
