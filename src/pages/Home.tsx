import { Building2, Award, Globe, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-manufacturing.jpg";
import superTechLogo from "@/assets/super-tech-logo.png";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-primary via-primary-hover to-primary/80 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        
        <div className="relative z-10 container mx-auto px-4 py-24 flex items-center min-h-screen">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-8">
              <img src={superTechLogo} alt="Super-Tech Logo" className="h-16 w-16" />
              <div>
                <h1 className="text-5xl lg:text-7xl font-bold mb-4">
                  Welcome to <span className="text-red-200">Super Tech</span>
                </h1>
                <p className="text-xl lg:text-2xl text-red-100 mb-2">
                  Precision in Fabrication | Excellence in Delivery
                </p>
              </div>
            </div>
            
            <p className="text-lg lg:text-xl mb-8 leading-relaxed max-w-3xl">
              A trusted leader in heavy fabrication and boiler component manufacturing.
              Established in 1990, we specialize in the fabrication of HRSG casing panels, 
              chimneys, stacks, ducts, tanks, hoppers, platforms, railings, and structural steelwork.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" className="text-primary hover:text-primary-hover">
                Explore Our Services
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Super Tech?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              With two modern manufacturing facilities at Bhosari and Chakan MIDC, Pune, 
              we combine engineering excellence, advanced infrastructure, and ISO 9001:2015 
              certified processes to deliver high-quality solutions to industries worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center shadow-medium hover:shadow-strong transition-all duration-300">
              <CardContent className="p-8">
                <Building2 className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Modern Facilities</h3>
                <p className="text-muted-foreground">
                  Two well-equipped manufacturing units with advanced machinery
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-medium hover:shadow-strong transition-all duration-300">
              <CardContent className="p-8">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">ISO 9001:2015</h3>
                <p className="text-muted-foreground">
                  Certified quality management system ensuring excellence
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-medium hover:shadow-strong transition-all duration-300">
              <CardContent className="p-8">
                <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Global Reach</h3>
                <p className="text-muted-foreground">
                  Serving clients across Asia, Africa, and North America
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-medium hover:shadow-strong transition-all duration-300">
              <CardContent className="p-8">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">30+ Years</h3>
                <p className="text-muted-foreground">
                  Three decades of reliable partnership and expertise
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Our Legacy</h2>
            <p className="text-lg leading-relaxed mb-8">
              For over three decades, Super Tech has been a reliable partner to clients 
              across India, Asia, Africa, and North America. Our reputation is built on 
              quality, trust, and timely delivery.
            </p>
            <p className="text-lg leading-relaxed">
              We handle small, medium, and high tonnage projects, ensuring 100% quality 
              control and timely delivery. Super Tech exports its products through customers 
              to Indonesia, Malaysia, Singapore, South Africa, USA, Mexico, Sri Lanka, 
              Bhutan, and Nepal.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;