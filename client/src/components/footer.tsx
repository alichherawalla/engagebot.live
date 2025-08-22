import { Link } from "wouter";
import { Twitter, Linkedin, Github } from "lucide-react";
import logoPath from "@assets/ChatGPT Image Aug 22, 2025, 05_03_22 PM_1755862414193.png";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-900 text-white py-16" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div data-testid="footer-brand">
            <img 
              src={logoPath} 
              alt="EngageBot Logo" 
              className="h-10 w-auto mb-4"
            />
            <p className="text-slate-400 mb-4">
              Transform your expertise into automated Twitter engagement with AI-powered authenticity.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors" data-testid="social-twitter">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors" data-testid="social-linkedin">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors" data-testid="social-github">
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div data-testid="footer-product">
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button
                  onClick={() => scrollToSection('features')}
                  className="hover:text-white transition-colors"
                  data-testid="footer-features"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="hover:text-white transition-colors"
                  data-testid="footer-pricing"
                >
                  Pricing
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors" data-testid="footer-api">
                  API
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors" data-testid="footer-integrations">
                  Integrations
                </a>
              </li>
            </ul>
          </div>
          
          <div data-testid="footer-resources">
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="/blog" className="hover:text-white transition-colors" data-testid="footer-blog">
                  Blog
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors" data-testid="footer-docs">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors" data-testid="footer-help">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors" data-testid="footer-case-studies">
                  Case Studies
                </a>
              </li>
              <li>
                <Link href="/admin" className="hover:text-white transition-colors" data-testid="footer-admin">
                  Blog CMS
                </Link>
              </li>
            </ul>
          </div>
          
          <div data-testid="footer-company">
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#" className="hover:text-white transition-colors" data-testid="footer-about">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors" data-testid="footer-careers">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors" data-testid="footer-privacy">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors" data-testid="footer-terms">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center" data-testid="footer-bottom">
          <p className="text-slate-400" data-testid="footer-copyright">
            &copy; 2023 EngageBot. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <span className="text-slate-400 text-sm" data-testid="footer-powered">
              Powered by Claude 4.0
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
