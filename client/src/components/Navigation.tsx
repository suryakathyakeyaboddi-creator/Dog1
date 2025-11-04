import { Button } from '@/components/ui/button';
import { Dog } from 'lucide-react';

export default function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2 hover-elevate rounded-md px-2 py-1"
            data-testid="link-logo"
          >
            <Dog className="w-6 h-6 text-primary" />
            <span className="font-bold text-lg text-foreground">WoofWise</span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('blog')}
              className="text-foreground hover-elevate rounded-md px-3 py-2"
              data-testid="link-blog"
            >
              Blog
            </button>
            <button
              onClick={() => scrollToSection('reviews')}
              className="text-foreground hover-elevate rounded-md px-3 py-2"
              data-testid="link-reviews"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-foreground hover-elevate rounded-md px-3 py-2"
              data-testid="link-faq"
            >
              FAQ
            </button>
          </div>

          <Button
            onClick={() => scrollToSection('home')}
            className="rounded-full px-6"
            data-testid="button-get-started"
          >
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
}
