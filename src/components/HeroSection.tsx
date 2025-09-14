import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Globe, Factory } from 'lucide-react';
import heroImage from '@/assets/hero-manufacturing.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Super-Tech heavy fabrication manufacturing facility"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-industrial opacity-75"></div>
        <div className="absolute inset-0 industrial-pattern opacity-5"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-semibold mb-4 shadow-soft">
                Since 1990 • Trusted Globally
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Heavy Fabrication
              <span className="block text-accent">Excellence</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed max-w-xl">
              Heavy Fabrication | Excellence in Delivery. 
              Leading manufacturer of boiler components and critical fabricated structures.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="accent" size="xl" className="group">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                View Portfolio
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <div className="text-3xl font-bold">30+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Globe className="h-8 w-8 text-accent" />
                </div>
                <div className="text-3xl font-bold">9</div>
                <div className="text-sm text-gray-300">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Factory className="h-8 w-8 text-accent" />
                </div>
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm text-gray-300">Quality Control</div>
              </div>
            </div>
          </div>

          {/* Right side can show additional content or remain as visual space */}
          <div className="hidden lg:block">
            {/* Optional: Add floating cards or additional visual elements here */}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;