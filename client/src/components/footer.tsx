import { Link } from "wouter";
import { Twitter, Linkedin, Github } from "lucide-react";
import logoPath from "@assets/ChatGPT Image Aug 22, 2025, 05_03_22 PM_1755863825599.png";

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
        <div className="grid md:grid-cols-2 gap-8 mb-8">
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
                <Link href="/blog" className="hover:text-white transition-colors" data-testid="footer-blog">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center" data-testid="footer-bottom">
          <p className="text-slate-400" data-testid="footer-copyright">
            &copy; 2025 EngageBot. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
