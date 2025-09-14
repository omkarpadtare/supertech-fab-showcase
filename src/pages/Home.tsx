import { Building2, Award, Globe, Users, ArrowRight, CheckCircle, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-manufacturing.jpg";
import superTechLogo from "@/assets/super-tech-logo.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Super-Tech heavy fabrication manufacturing facility"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary-hover/80 to-primary/70"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-secondary/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-accent/30 rounded-full blur-lg animate-pulse delay-500"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-24 flex items-center min-h-screen">
          <div className="max-w-5xl animate-fade-in">
            <div className="flex items-center gap-6 mb-12 group">
              <div className="relative">
                <img 
                  src={superTechLogo} 
                  alt="Super-Tech Logo" 
                  className="h-20 w-20 transition-transform duration-300 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div>
                <h1 className="text-6xl lg:text-8xl font-bold mb-6 text-white leading-tight">
                  Welcome to{" "}
                  <span className="bg-gradient-to-r from-accent via-secondary to-accent bg-clip-text text-transparent animate-pulse">
                    Super Tech
                  </span>
                </h1>
                <div className="relative">
                  <p className="text-2xl lg:text-3xl font-semibold text-accent mb-2 tracking-wide">
                    Heavy Fabrication | Excellence in Delivery
                  </p>
                  <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-accent to-secondary rounded-full"></div>
                </div>
              </div>
            </div>
            
            <p className="text-xl lg:text-2xl mb-12 leading-relaxed max-w-4xl text-gray-100 backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10">
              A trusted leader in heavy fabrication and boiler component manufacturing.
              Established in 1990, we specialize in the fabrication of HRSG casing panels, 
              chimneys, stacks, ducts, tanks, hoppers, platforms, railings, and structural steelwork.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-16">
              <Link to="/products" className="group">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-accent to-secondary hover:from-secondary hover:to-accent text-white px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-accent/30 transition-all duration-300 transform hover:scale-105"
                >
                  Explore Our Services
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <Link to="/contact" className="group">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 text-white bg-white/10 hover:bg-white hover:text-primary backdrop-blur-sm px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Get Quote
                  <Zap className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center backdrop-blur-sm">
            <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full mb-6">
              <span className="text-primary font-semibold">Our Excellence</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Why Choose Super Tech?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              With two modern manufacturing facilities at Bhosari and Chakan MIDC, Pune, 
              we combine engineering excellence, advanced infrastructure, and ISO 9001:2015 
              certified processes to deliver high-quality solutions to industries worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group text-center relative overflow-hidden border-0 bg-gradient-to-br from-white to-gray-50 hover:from-primary/5 hover:to-accent/5 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-10 relative z-10">
                <div className="relative mb-6">
                  <Building2 className="h-16 w-16 text-primary mx-auto group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary">Modern Facilities</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Two well-equipped manufacturing units with advanced machinery
                </p>
              </CardContent>
            </Card>

            <Card className="group text-center relative overflow-hidden border-0 bg-gradient-to-br from-white to-gray-50 hover:from-accent/5 hover:to-secondary/5 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-10 relative z-10">
                <div className="relative mb-6">
                  <Award className="h-16 w-16 text-accent mx-auto group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-accent/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-accent">ISO 9001:2015</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Certified quality management system ensuring excellence
                </p>
              </CardContent>
            </Card>

            <Card className="group text-center relative overflow-hidden border-0 bg-gradient-to-br from-white to-gray-50 hover:from-secondary/5 hover:to-primary/5 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-10 relative z-10">
                <div className="relative mb-6">
                  <Globe className="h-16 w-16 text-secondary mx-auto group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-secondary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-secondary">Global Reach</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Serving clients across Asia, Africa, and North America
                </p>
              </CardContent>
            </Card>

            <Card className="group text-center relative overflow-hidden border-0 bg-gradient-to-br from-white to-gray-50 hover:from-primary/5 hover:to-accent/5 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-10 relative z-10">
                <div className="relative mb-6">
                  <Users className="h-16 w-16 text-primary mx-auto group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary">30+ Years</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Three decades of reliable partnership and expertise
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-muted/50 via-background to-muted/30"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5QzkyQUMiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full mb-8">
              <span className="text-primary font-semibold flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                Our Legacy
              </span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold mb-12 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Our Legacy
            </h2>
            
            <div className="space-y-8">
              <div className="backdrop-blur-sm bg-white/80 p-8 rounded-3xl shadow-2xl border border-white/20 transform hover:scale-[1.02] transition-all duration-300">
                <p className="text-xl leading-relaxed text-gray-700">
                  For over three decades, Super Tech has been a reliable partner to clients 
                  across India, Asia, Africa, and North America. Our reputation is built on 
                  quality, trust, and timely delivery.
                </p>
              </div>
              
              <div className="backdrop-blur-sm bg-gradient-to-r from-primary/5 to-accent/5 p-8 rounded-3xl shadow-2xl border border-primary/10 transform hover:scale-[1.02] transition-all duration-300">
                <p className="text-xl leading-relaxed text-gray-700">
                  We handle small, medium, and high tonnage projects, ensuring 100% quality 
                  control and timely delivery. Super Tech exports its products through customers 
                  to Indonesia, Malaysia, Singapore, South Africa, USA, Mexico, Sri Lanka, 
                  Bhutan, and Nepal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;