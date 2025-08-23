import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import TrialRequestModal from "@/components/trial-request-modal";
import logoPath from "@assets/engagebot-logo-circular.png";

export default function Navbar() {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const [isComparisonsOpen, setIsComparisonsOpen] = useState(false);
  const [isMobileComparisonsOpen, setIsMobileComparisonsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsComparisonsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
                  href="/case-studies"
                  className={`transition-colors ${isActive('/case-studies') ? 'text-brand-blue border-b-2 border-brand-blue' : 'text-slate-600 hover:text-brand-blue'}`}
                  data-testid="nav-case-studies"
                >
                  Case Studies
                </Link>
                
                {/* Comparisons Dropdown */}
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setIsComparisonsOpen(!isComparisonsOpen)}
                    className={`flex items-center space-x-1 transition-colors ${
                      location.startsWith('/vs-') ? 'text-brand-blue' : 'text-slate-600 hover:text-brand-blue'
                    }`}
                    data-testid="nav-comparisons"
                  >
                    <span>Comparisons</span>
                    <ChevronDown className={`h-4 w-4 transition-transform ${isComparisonsOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isComparisonsOpen && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-slate-200 py-2 z-50" data-testid="nav-comparisons-dropdown">
                      <Link
                        href="/vs-buffer"
                        className="block px-4 py-2 text-slate-600 hover:text-brand-blue hover:bg-slate-50 transition-colors"
                        onClick={() => setIsComparisonsOpen(false)}
                        data-testid="nav-vs-buffer"
                      >
                        vs Buffer
                      </Link>
                      <Link
                        href="/vs-plannable"
                        className="block px-4 py-2 text-slate-600 hover:text-brand-blue hover:bg-slate-50 transition-colors"
                        onClick={() => setIsComparisonsOpen(false)}
                        data-testid="nav-vs-plannable"
                      >
                        vs Plannable
                      </Link>
                      <Link
                        href="/vs-sproutsocial"
                        className="block px-4 py-2 text-slate-600 hover:text-brand-blue hover:bg-slate-50 transition-colors"
                        onClick={() => setIsComparisonsOpen(false)}
                        data-testid="nav-vs-sproutsocial"
                      >
                        vs Sprout Social
                      </Link>
                      <Link
                        href="/vs-hypefury"
                        className="block px-4 py-2 text-slate-600 hover:text-brand-blue hover:bg-slate-50 transition-colors"
                        onClick={() => setIsComparisonsOpen(false)}
                        data-testid="nav-vs-hypefury"
                      >
                        vs Hypefury
                      </Link>
                    </div>
                  )}
                </div>
                
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
                href="/case-studies"
                className={`transition-colors text-left ${isActive('/case-studies') ? 'text-brand-blue' : 'text-slate-600 hover:text-brand-blue'}`}
                onClick={() => setIsMenuOpen(false)}
                data-testid="mobile-nav-case-studies"
              >
                Case Studies
              </Link>
              
              {/* Mobile Comparisons */}
              <div>
                <button
                  onClick={() => setIsMobileComparisonsOpen(!isMobileComparisonsOpen)}
                  className="flex items-center justify-between w-full text-slate-600 hover:text-brand-blue transition-colors text-left"
                  data-testid="mobile-nav-comparisons"
                >
                  <span>Comparisons</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${isMobileComparisonsOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMobileComparisonsOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <Link
                      href="/vs-buffer"
                      className="block text-slate-500 hover:text-brand-blue transition-colors"
                      onClick={() => {setIsMenuOpen(false); setIsMobileComparisonsOpen(false);}}
                      data-testid="mobile-nav-vs-buffer"
                    >
                      vs Buffer
                    </Link>
                    <Link
                      href="/vs-plannable"
                      className="block text-slate-500 hover:text-brand-blue transition-colors"
                      onClick={() => {setIsMenuOpen(false); setIsMobileComparisonsOpen(false);}}
                      data-testid="mobile-nav-vs-plannable"
                    >
                      vs Plannable
                    </Link>
                    <Link
                      href="/vs-sproutsocial"
                      className="block text-slate-500 hover:text-brand-blue transition-colors"
                      onClick={() => {setIsMenuOpen(false); setIsMobileComparisonsOpen(false);}}
                      data-testid="mobile-nav-vs-sproutsocial"
                    >
                      vs Sprout Social
                    </Link>
                    <Link
                      href="/vs-hypefury"
                      className="block text-slate-500 hover:text-brand-blue transition-colors"
                      onClick={() => {setIsMenuOpen(false); setIsMobileComparisonsOpen(false);}}
                      data-testid="mobile-nav-vs-hypefury"
                    >
                      vs Hypefury
                    </Link>
                  </div>
                )}
              </div>
              
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
