import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import TrialRequestModal from "@/components/trial-request-modal";
import logoPath from "@assets/engagebot-logo-circular.png";

export default function Navbar() {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  const scrollToSection = (sectionId: string) => {
    if (location !== "/") {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50" data-testid="navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0" data-testid="logo-link">
              <img 
                src={logoPath} 
                alt="EngageBot Logo" 
                className="h-20 w-20 rounded-full object-cover"
              />
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-8">
                <button
                  onClick={() => scrollToSection('features')}
                  className="text-slate-600 hover:text-brand-blue transition-colors"
                  data-testid="nav-features"
                >
                  Features
                </button>
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="text-slate-600 hover:text-brand-blue transition-colors"
                  data-testid="nav-pricing"
                >
                  Pricing
                </button>
                <Link
                  href="/blog"
                  className={`transition-colors ${
                    isActive('/blog') ? 'text-brand-blue' : 'text-slate-600 hover:text-brand-blue'
                  }`}
                  data-testid="nav-blog"
                >
                  Blog
                </Link>
                <button
                  onClick={() => scrollToSection('faq')}
                  className="text-slate-600 hover:text-brand-blue transition-colors"
                  data-testid="nav-faq"
                >
                  FAQ
                </button>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button
              onClick={() => setIsTrialModalOpen(true)}
              className="bg-brand-blue hover:bg-brand-blue-light text-white font-medium"
              data-testid="nav-cta"
            >
              Get Early Access
            </Button>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                data-testid="mobile-menu-toggle"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-200 py-4" data-testid="mobile-menu">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('features')}
                className="text-slate-600 hover:text-brand-blue transition-colors text-left"
                data-testid="mobile-nav-features"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="text-slate-600 hover:text-brand-blue transition-colors text-left"
                data-testid="mobile-nav-pricing"
              >
                Pricing
              </button>
              <Link
                href="/blog"
                className="text-slate-600 hover:text-brand-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
                data-testid="mobile-nav-blog"
              >
                Blog
              </Link>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-slate-600 hover:text-brand-blue transition-colors text-left"
                data-testid="mobile-nav-faq"
              >
                FAQ
              </button>
            </div>
          </div>
        )}
      </div>
      
      <TrialRequestModal 
        isOpen={isTrialModalOpen} 
        onClose={() => setIsTrialModalOpen(false)} 
      />
    </nav>
  );
}
