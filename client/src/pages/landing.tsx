import SEOHead from "@/components/seo-head";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import { useEffect, useState, lazy, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

// Lazy-load below-the-fold sections to reduce initial bundle size
const ProblemSection = lazy(() => import("@/components/problem-section"));
const SolutionSection = lazy(() => import("@/components/solution-section"));
const FeaturesSection = lazy(() => import("@/components/features-section"));
const ProductShowcase = lazy(() => import("@/components/product-showcase"));
const CaseStudiesPreview = lazy(() => import("@/components/case-studies-preview"));
const PricingSection = lazy(() => import("@/components/pricing-section"));
const BlogSection = lazy(() => import("@/components/blog-section"));
const FAQSection = lazy(() => import("@/components/faq-section"));
const Footer = lazy(() => import("@/components/footer"));
const TrialRequestModal = lazy(() => import("@/components/trial-request-modal"));

export default function Landing() {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      <SEOHead
        title="EngageBot - AI-Drafted Twitter Replies | Discover Conversations and Respond Authentically"
        description="EngageBot finds relevant conversations and drafts authentic replies in your voice. Save 15+ hours weekly while building real relationships and authority."
        keywords="Twitter automation, AI engagement, Twitter reply drafts, brand voice, frontier models, social media tools"
        ogTitle="EngageBot - AI-Drafted Twitter Replies"
        ogDescription="Discover conversations and get on-brand reply drafts that build real relationships."
        ogType="website"
        canonical="/"
      />
      
      <Navbar />
      <HeroSection />
      <Suspense fallback={null}>
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <ProductShowcase />
        <CaseStudiesPreview />
        <PricingSection />
        <BlogSection />
        <FAQSection />
      </Suspense>
      
      {/* Final CTA Section */}
      <section className="py-20 gradient-hero" data-testid="final-cta-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
          
        </div>
      </section>
      
      <Suspense fallback={null}>
        <Footer />
        <TrialRequestModal 
          isOpen={isTrialModalOpen} 
          onClose={() => setIsTrialModalOpen(false)} 
        />
      </Suspense>
    </div>
  );
}
