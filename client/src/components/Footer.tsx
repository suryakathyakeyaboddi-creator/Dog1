import { Dog, Heart } from 'lucide-react';
import { SiInstagram, SiX, SiFacebook } from 'react-icons/si';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border bg-card py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Dog className="w-6 h-6 text-primary" />
              <span className="font-bold text-lg text-foreground">WoofWise</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Discover your best friend with the power of AI.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-sm text-muted-foreground hover-elevate rounded-md px-2 py-1"
                  data-testid="footer-link-home"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('blog')}
                  className="text-sm text-muted-foreground hover-elevate rounded-md px-2 py-1"
                  data-testid="footer-link-blog"
                >
                  Blog
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('faq')}
                  className="text-sm text-muted-foreground hover-elevate rounded-md px-2 py-1"
                  data-testid="footer-link-faq"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <button className="text-sm text-muted-foreground hover-elevate rounded-md px-2 py-1" data-testid="footer-link-privacy">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button className="text-sm text-muted-foreground hover-elevate rounded-md px-2 py-1" data-testid="footer-link-terms">
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Connect</h3>
            <div className="flex gap-4">
              <button
                className="w-9 h-9 rounded-md flex items-center justify-center hover-elevate"
                data-testid="footer-link-instagram"
              >
                <SiInstagram className="w-5 h-5 text-muted-foreground" />
              </button>
              <button
                className="w-9 h-9 rounded-md flex items-center justify-center hover-elevate"
                data-testid="footer-link-twitter"
              >
                <SiX className="w-5 h-5 text-muted-foreground" />
              </button>
              <button
                className="w-9 h-9 rounded-md flex items-center justify-center hover-elevate"
                data-testid="footer-link-facebook"
              >
                <SiFacebook className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            © 2025 WoofWise. All rights reserved. Built with{' '}
            <Heart className="w-4 h-4 fill-primary text-primary" /> by dog lovers.
          </p>
        </div>
      </div>
    </footer>
  );
}
