import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Infrastructure', href: '#infrastructure' },
    { name: 'Machineries', href: '#machineries' },
    { name: 'Quality', href: '#quality' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50 shadow-soft">
      {/* Top Contact Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+91 [Phone Number]</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>info@super-tech.com</span>
            </div>
          </div>
          <div className="text-xs">
            Since 1990 | GSTIN: 27AEYPK2673R1ZB
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary">
              Super-Tech
            </h1>
            <p className="text-xs text-muted-foreground">
              Heavy Fabrication | Excellence in Delivery
            </p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-smooth font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex">
            <Button variant="accent" size="lg">
              Get Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-sm">
          <div className="px-4 py-6 space-y-4">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-foreground hover:text-primary transition-smooth font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4">
              <Button variant="accent" size="lg" className="w-full">
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;