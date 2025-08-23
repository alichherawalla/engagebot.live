import SEOHead from "@/components/seo-head";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import ProblemSection from "@/components/problem-section";
import SolutionSection from "@/components/solution-section";
import FeaturesSection from "@/components/features-section";
import CaseStudiesPreview from "@/components/case-studies-preview";
import PricingSection from "@/components/pricing-section";
import ProductShowcase from "@/components/product-showcase";
import BlogSection from "@/components/blog-section";
import FAQSection from "@/components/faq-section";
import Footer from "@/components/footer";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import TrialRequestModal from "@/components/trial-request-modal";

export default function Landing() {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      <SEOHead
        title="EngageBot - AI-Powered Twitter Engagement Automation | Turn Your Expertise Into Automated Twitter Growth"
        description="Transform Twitter engagement with AI automation. EngageBot uses Claude 4.0 to discover conversations, generate authentic responses, and build meaningful relationships at scale. Save 15+ hours weekly."
        keywords="Twitter automation, AI engagement, social media marketing, Twitter growth, automated responses, Claude AI, social media tools"
        ogTitle="EngageBot - AI-Powered Twitter Engagement Automation"
        ogDescription="Turn your expertise into automated Twitter engagement. Save 15+ hours weekly while building authentic relationships."
        ogType="website"
        canonical="/"
      />
      
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
  <ProductShowcase />
  <CaseStudiesPreview />
      <PricingSection />
      <BlogSection />
      <FAQSection />
      
      {/* Final CTA Section */}
      <section className="py-20 gradient-hero" data-testid="final-cta-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6" data-testid="final-cta-title">
              Ready to Transform Your Twitter Engagement?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto" data-testid="final-cta-description">
              Join successful entrepreneurs who've saved 15+ hours weekly while building authentic relationships on Twitter. 
              Get early access today—no credit card required.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                size="lg"
                onClick={() => setIsTrialModalOpen(true)}
                className="bg-brand-green hover:bg-brand-green-light text-white px-8 py-4 text-lg font-semibold shadow-lg"
                data-testid="final-cta-primary"
              >
                Get Early Access
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-blue-200 text-sm">
              <div className="flex items-center space-x-2" data-testid="final-cta-benefit-1">
                <CheckCircle className="h-4 w-4" />
                <span>Early access</span>
              </div>
              <div className="flex items-center space-x-2" data-testid="final-cta-benefit-2">
                <CheckCircle className="h-4 w-4" />
                <span>No setup fees</span>
              </div>
              <div className="flex items-center space-x-2" data-testid="final-cta-benefit-3">
                <CheckCircle className="h-4 w-4" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
      
      <TrialRequestModal 
        isOpen={isTrialModalOpen} 
        onClose={() => setIsTrialModalOpen(false)} 
      />
    </div>
  );
}
