import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Building2,
  Cog,
  Globe,
  Award,
  Users,
  MapPin,
  Phone,
  Mail,
  Factory,
  Wrench,
  Shield,
  CheckCircle,
  ArrowRight,
  Target,
  Eye,
  Zap
} from 'lucide-react';
import fabricationWork from '@/assets/fabrication-work.jpg';
import machinery from '@/assets/machinery.jpg';

const LandingPage = () => {
  const products = [
    'Structural Steelwork',
    'HRSG Casing Panels',
    'Walkways / Railings',
    'Platforms',
    'Tanks',
    'Hoppers',
    'Canopies',
    'Chutes',
    'Ducts',
    'Chimneys / Stacks',
    'Columns / Beams / Bracing',
    'Girders',
    'Base Frames'
  ];

  const machineries = [
    'Welding Machines (CO2 / Arc) – Mogora',
    'Profile Gas Cutting Machine – Mogora',
    'Plate Rolling Machine',
    'Pipe Rolling Machine',
    'Compressor (60HP) for Blasting',
    'Broach Cutting Machines (up to 130mm Dia.)',
    'Plasma Cutting Machine – Messer, Size: 4m × 15m'
  ];

  const activities = [
    'Fabrication',
    'Blasting & Painting (Grit / Copper)',
    'Packing',
    'Transportation',
    'Ducting',
    'Fabricated Girders',
    'HRSG Casing Panels',
    'Stainless Steel Jobs',
    'Stainless Steel Ducting',
    'Insulated Ducting',
    'Chimneys / Stacks'
  ];

  const exportCountries = [
    'Indonesia', 'Malaysia', 'Singapore', 'South Africa', 
    'USA', 'Mexico', 'Sri Lanka', 'Bhutan', 'Nepal'
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />

      {/* About Us Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-6">Since 1990</Badge>
              <h2 className="text-4xl font-bold mb-6">About Super-Tech</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Super-Tech is a heavy fabrication company founded in 1990, specializing in manufacturing 
                boiler components and critical fabricated structures. Initially established to cater to 
                Thermax, Super-Tech has grown into a trusted partner for both domestic and international customers.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We produce high-quality components such as HRSG boiler components, chimneys, stacks, columns, 
                fabricated girders, chutes, ducts, tanks, hoppers, and heavy structural steelwork.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 bg-background rounded-lg shadow-soft">
                  <Building2 className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="font-semibold">Process-Driven</div>
                </div>
                <div className="text-center p-4 bg-background rounded-lg shadow-soft">
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="font-semibold">Teamwork-Oriented</div>
                </div>
              </div>

              <Button variant="industrial" size="lg">
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            <div className="relative">
              <img 
                src={fabricationWork} 
                alt="Heavy steel fabrication work at Super-Tech facility"
                className="rounded-lg shadow-strong"
              />
              <div className="absolute inset-0 gradient-industrial opacity-20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 gradient-steel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="shadow-medium">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Target className="h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To exceed our customers' expectations in quality, delivery, and cost through continuous 
                  improvement and customer collaboration, while creating an atmosphere of excellence for employees.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="h-8 w-8 text-accent" />
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To consistently expand production capacities and meet the growing global demand, 
                  maintaining leadership in the heavy fabrication business.
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Core Values */}
          <div className="mt-16 text-center">
            <h3 className="text-3xl font-bold mb-12">Core Values</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Zap, title: 'Continuous Improvement' },
                { icon: Shield, title: '100% Quality Control' },
                { icon: CheckCircle, title: 'On-Time Delivery' },
                { icon: ArrowRight, title: 'Growth-Oriented' }
              ].map((value, index) => (
                <Card key={index} className="text-center shadow-soft">
                  <CardContent className="p-6">
                    <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h4 className="font-semibold">{value.title}</h4>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6">Product Range</Badge>
            <h2 className="text-4xl font-bold mb-6">Our Products</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We handle small, medium, and high tonnage projects, ensuring 100% quality control and timely delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <Cog className="h-6 w-6 text-primary flex-shrink-0" />
                    <span className="font-medium">{product}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="accent" size="lg">
              Request Quote <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section id="infrastructure" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6">Infrastructure</Badge>
            <h2 className="text-4xl font-bold mb-6">Capacity & Infrastructure</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Factory className="h-8 w-8 text-primary" />
                  Unit I – Bhosari
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-sm text-muted-foreground">Plot Area</span>
                    <p className="font-semibold">90,000 Sq. Ft.</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Covered Area</span>
                    <p className="font-semibold">16,000 Sq. Ft.</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Open Area</span>
                    <p className="font-semibold">55,000 Sq. Ft.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Factory className="h-8 w-8 text-accent" />
                  Unit II – Chakan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-sm text-muted-foreground">Plot Area</span>
                    <p className="font-semibold">95,600 Sq. Ft.</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Covered Area</span>
                    <p className="font-semibold">6,000 Sq. Ft.</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Open Area</span>
                    <p className="font-semibold">76,600 Sq. Ft.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Facilities */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-8 text-center">Key Facilities</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center shadow-soft">
                <CardContent className="p-6">
                  <Building2 className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Painting Area</h4>
                  <p className="text-muted-foreground">60m × 10m × 7m</p>
                </CardContent>
              </Card>
              <Card className="text-center shadow-soft">
                <CardContent className="p-6">
                  <Factory className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Fabrication Shed</h4>
                  <p className="text-muted-foreground">60m × 25m</p>
                </CardContent>
              </Card>
              <Card className="text-center shadow-soft">
                <CardContent className="p-6">
                  <Wrench className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Overhead Crane</h4>
                  <p className="text-muted-foreground">10 MT Capacity</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Machineries Section */}
      <section id="machineries" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-6">Equipment</Badge>
              <h2 className="text-4xl font-bold mb-6">Advanced Machineries</h2>
              <p className="text-lg text-muted-foreground mb-8">
                State-of-the-art equipment for precision fabrication and quality manufacturing.
              </p>

              <div className="space-y-4">
                {machineries.map((machine, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm font-medium">{machine}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={machinery} 
                alt="Advanced industrial machinery at Super-Tech manufacturing facility"
                className="rounded-lg shadow-strong"
              />
              <div className="absolute inset-0 gradient-industrial opacity-20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20 gradient-steel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6">Services</Badge>
            <h2 className="text-4xl font-bold mb-6">Our Activities</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth">
                <CardContent className="p-6 text-center">
                  <Cog className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold">{activity}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section id="quality" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6">Quality Assurance</Badge>
            <h2 className="text-4xl font-bold mb-6">100% Quality Control</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Super-Tech ensures 100% quality control in all fabrication and delivery processes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center shadow-medium">
              <CardContent className="p-8">
                <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-4">Quality Standards</h3>
                <p className="text-muted-foreground">
                  Rigorous quality control processes ensure every product meets the highest standards.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-medium">
              <CardContent className="p-8">
                <Award className="h-16 w-16 text-accent mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-4">Certified Processes</h3>
                <p className="text-muted-foreground">
                  All manufacturing processes are certified and regularly audited for compliance.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-medium">
              <CardContent className="p-8">
                <CheckCircle className="h-16 w-16 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-4">Quality Certificates</h3>
                <p className="text-muted-foreground">
                  Comprehensive documentation and certificates for all quality control measures.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button variant="industrial" size="lg">
              View Quality Certificates <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6">Global Presence</Badge>
            <h2 className="text-4xl font-bold mb-6">Serving Worldwide</h2>
            <p className="text-xl text-muted-foreground">
              Super-Tech exports its products through customers to multiple countries
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4">
            {exportCountries.map((country, index) => (
              <div key={index} className="text-center">
                <div className="bg-background rounded-lg p-4 shadow-soft hover:shadow-medium transition-smooth">
                  <Globe className="h-6 w-6 text-primary mx-auto mb-2" />
                  <span className="text-sm font-medium">{country}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section id="gallery" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6">Portfolio</Badge>
            <h2 className="text-4xl font-bold mb-6">Our Work Gallery</h2>
            <p className="text-xl text-muted-foreground">
              Showcase of our fabrication excellence and completed projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Hoppers',
              'Ducting',
              'Mockup Assembly',
              'Fabricated Girders',
              'HRSG Casing Panels',
              'Stainless Steel Jobs',
              'Structural Work',
              'Industrial Components'
            ].map((item, index) => (
              <Card key={index} className="overflow-hidden shadow-soft hover:shadow-medium transition-smooth">
                <div className="h-48 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                  <Factory className="h-16 w-16 text-muted-foreground" />
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold text-center">{item}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="accent" size="lg">
              View Full Gallery <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 gradient-industrial text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 bg-white/10 border-white/30 text-white">Contact Us</Badge>
            <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
            <p className="text-xl text-gray-200">
              Ready to start your next fabrication project? Contact us today.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="bg-white/10 border-white/20 text-white shadow-strong">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <MapPin className="h-8 w-8 text-accent" />
                  Unit I – Bhosari
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  J251/252, M.I.D.C, Bhosari<br />
                  Pune – 411026, Maharashtra (India)
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-accent" />
                    <span>+91 [Insert Number]</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-accent" />
                    <span>info@super-tech.com</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white shadow-strong">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <MapPin className="h-8 w-8 text-accent" />
                  Unit II – Chakan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Plot No. B4, M.I.D.C, Mahalunge<br />
                  Tal. Khed, Dist. Chakan<br />
                  Pune – 410501, Maharashtra (India)
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-accent" />
                    <span>+91 [Insert Number]</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-accent" />
                    <span>info@super-tech.com</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button variant="accent" size="xl">
              Request Quote Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Super-Tech</h3>
              <p className="text-sm text-muted mb-4">
                Precision in Fabrication | Excellence in Delivery
              </p>
              <p className="text-xs text-muted">
                GSTIN: 27AEYPK2673R1ZB
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <a href="#about" className="block hover:text-accent transition-smooth">About Us</a>
                <a href="#products" className="block hover:text-accent transition-smooth">Products</a>
                <a href="#infrastructure" className="block hover:text-accent transition-smooth">Infrastructure</a>
                <a href="#quality" className="block hover:text-accent transition-smooth">Quality</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+91 [Insert Number]</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>info@super-tech.com</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-muted pt-8 text-center text-sm text-muted">
            <p>&copy; 2024 Super-Tech. All rights reserved.</p>
            <p className="mt-2">Design and Developed by Raydito Services</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;