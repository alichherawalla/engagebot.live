import { Link } from "wouter";
import { Mail, ArrowRight, Zap } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import logoPath from "@assets/engagebot-logo-circular.png";
import type { InsertTrialRequest } from "@shared/schema";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    const payload: InsertTrialRequest = {
      name: "Newsletter Subscriber",
      email: email.trim(),
      company: null,
      twitterHandle: null,
      message: "Subscribed to newsletter",
    };
    setIsSubmitting(true);
    fetch("/api/trial-requests", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then(() => {
        toast({
          title: "Successfully Subscribed!",
          description:
            "You'll receive the latest insights on AI-powered Twitter automation.",
        });
        setEmail("");
      })
      .catch(() => {
        toast({
          title: "Error",
          description: "Failed to subscribe to newsletter. Please try again.",
          variant: "destructive",
        });
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-900 to-brand-purple/10 text-white" data-testid="footer">
      {/* Newsletter Section */}
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Zap className="h-8 w-8 text-brand-purple mr-3" />
              <h3 className="text-2xl font-bold text-white">Stay Updated</h3>
            </div>
            <p className="text-slate-400 mb-6">
              Get the latest insights on AI-powered Twitter automation and expert engagement strategies delivered to your inbox.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="flex-1 relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent"
                  data-testid="newsletter-email"
                />
              </div>
              <button 
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-brand-purple hover:bg-brand-purple-dark disabled:opacity-50 text-white font-semibold rounded-lg transition-colors flex items-center justify-center" 
                data-testid="newsletter-subscribe"
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2" data-testid="footer-brand">
            <div className="flex items-center mb-6">
              <img 
                src={logoPath} 
                alt="EngageBot Logo" 
                className="h-12 w-12 rounded-full object-cover mr-4"
              />
              <h3 className="text-2xl font-bold text-white">EngageBot</h3>
            </div>
            <p className="text-slate-400 mb-6 max-w-md leading-relaxed">
              Transform your Twitter presence with AI-powered engagement that builds authentic relationships and drives business growth. EngageBot discovers conversations and drafts on-brand replies that scale your authority.
            </p>
          </div>
          
          {/* Product Links */}
          <div data-testid="footer-product">
            <h4 className="font-bold text-white mb-6 text-lg">Product</h4>
            <ul className="space-y-4 text-slate-400">
              <li>
                <button
                  onClick={() => scrollToSection('features')}
                  className="hover:text-white transition-colors hover:translate-x-1 transform duration-200"
                  data-testid="footer-features"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="hover:text-white transition-colors hover:translate-x-1 transform duration-200"
                  data-testid="footer-pricing"
                >
                  Pricing
                </button>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200" data-testid="footer-blog">
                  Blog
                </Link>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('trial')}
                  className="hover:text-white transition-colors hover:translate-x-1 transform duration-200"
                  data-testid="footer-trial"
                >
                  Free Trial
                </button>
              </li>
            </ul>
          </div>
          
          {/* Comparisons Links */}
          <div data-testid="footer-comparisons">
            <h4 className="font-bold text-white mb-6 text-lg">Comparisons</h4>
            <ul className="space-y-4 text-slate-400">
              <li>
                <Link href="/vs-buffer" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200" data-testid="footer-vs-buffer">
                  vs Buffer
                </Link>
              </li>
              <li>
                <Link href="/vs-plannable" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200" data-testid="footer-vs-plannable">
                  vs Plannable
                </Link>
              </li>
              <li>
                <Link href="/vs-sproutsocial" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200" data-testid="footer-vs-sproutsocial">
                  vs Sprout Social
                </Link>
              </li>
              <li>
                <Link href="/vs-hypefury" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200" data-testid="footer-vs-hypefury">
                  vs Hypefury
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-slate-800 pt-8" data-testid="footer-bottom">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-slate-400">
              <p data-testid="footer-copyright">
                &copy; 2025 EngageBot. All rights reserved.
              </p>
            </div>
            <div className="flex items-center space-x-2 text-slate-400 text-sm">
              <span>Powered by AI</span>
              <div className="w-2 h-2 bg-brand-purple rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
