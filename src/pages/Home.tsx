import { Building2, Award, Globe, Users, ArrowRight, CheckCircle, Zap, Factory, Settings, Wrench, Shield, Cog, Gauge, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import superTechLogo from "@/assets/super-tech-logo.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Industrial Header Bar */}
      <div className="h-2 bg-gradient-to-r from-slate-800 via-primary to-slate-800"></div>
      
      {/* Hero Section - Corporate Industrial */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        {/* Animated Industrial Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 animate-pulse">
            <div className="w-4 h-4 bg-primary rounded-full shadow-lg shadow-primary/50"></div>
          </div>
          <div className="absolute top-32 right-20 animate-bounce">
            <Cog className="w-8 h-8 text-primary/60 animate-spin-slow" />
          </div>
          <div className="absolute bottom-40 left-20 animate-pulse delay-1000">
            <div className="w-6 h-6 bg-accent rounded-full shadow-lg shadow-accent/50"></div>
          </div>
          <div className="absolute bottom-20 right-32 animate-bounce delay-500">
            <Settings className="w-6 h-6 text-accent/60 animate-spin-slow" />
          </div>
        </div>

        
        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 py-24 flex items-center min-h-screen">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Content */}
              <div className="space-y-8 animate-fade-in">
                <div className="flex items-center gap-4 mb-8">
                  <div className="relative">
                    <img 
                      src={superTechLogo} 
                      alt="Super-Tech Logo" 
                      className="h-16 w-16 rounded-lg shadow-2xl" 
                    />
                    <div className="absolute inset-0 bg-primary/20 rounded-lg blur-md"></div>
                  </div>
                  <div className="h-12 w-px bg-gradient-to-b from-transparent via-primary to-transparent"></div>
                  <div>
                    <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                      <span className="block">Super</span>
                      <span className="block text-primary">Tech</span>
                    </h1>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="inline-flex items-center px-4 py-2 bg-slate-800/80 backdrop-blur-sm rounded-full border border-primary/30">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse mr-3"></div>
                    <span className="text-primary font-semibold text-sm">Heavy Fabrication | Excellence in Delivery</span>
                  </div>
                  
                  <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-2xl">
                    A trusted leader in heavy fabrication and boiler component manufacturing.
                    Established in 1990, we specialize in the fabrication of HRSG casing panels, 
                    chimneys, stacks, ducts, tanks, hoppers, platforms, railings, and structural steelwork.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Link to="/products">
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary-hover text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-primary/30 transition-all duration-300 group"
                    >
                      Explore Services
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>

                  <Link to="/contact">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-slate-600 text-slate-300 bg-slate-800/50 hover:bg-slate-700 backdrop-blur-sm px-8 py-4 text-lg font-semibold transition-all duration-300"
                    >
                      Get Quote
                      <Zap className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
              
              {/* Right Content - Industrial Stats Grid */}
              <div className="grid grid-cols-2 gap-6 animate-fade-in delay-300">
                <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:bg-slate-700/60 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <Award className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                    <div className="text-right">
                      <div className="text-3xl font-bold text-white">30+</div>
                      <div className="text-sm text-slate-400">Years</div>
                    </div>
                  </div>
                  <div className="text-slate-300 text-sm">Experience</div>
                </div>
                
                <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:bg-slate-700/60 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <Globe className="h-8 w-8 text-accent group-hover:scale-110 transition-transform" />
                    <div className="text-right">
                      <div className="text-3xl font-bold text-white">9</div>
                      <div className="text-sm text-slate-400">Countries</div>
                    </div>
                  </div>
                  <div className="text-slate-300 text-sm">Global Reach</div>
                </div>
                
                <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:bg-slate-700/60 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <Factory className="h-8 w-8 text-secondary group-hover:scale-110 transition-transform" />
                    <div className="text-right">
                      <div className="text-3xl font-bold text-white">2</div>
                      <div className="text-sm text-slate-400">Facilities</div>
                    </div>
                  </div>
                  <div className="text-slate-300 text-sm">Modern Units</div>
                </div>
                
                <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:bg-slate-700/60 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <Shield className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                    <div className="text-right">
                      <div className="text-3xl font-bold text-white">100%</div>
                      <div className="text-sm text-slate-400">Quality</div>
                    </div>
                  </div>
                  <div className="text-slate-300 text-sm">ISO Certified</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/60 rounded-full flex justify-center backdrop-blur-sm">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Industrial Excellence Section */}
      <section className="py-24 bg-slate-100 relative overflow-hidden">
        {/* Industrial Pattern Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `
              linear-gradient(45deg, rgba(0,0,0,0.05) 25%, transparent 25%),
              linear-gradient(-45deg, rgba(0,0,0,0.05) 25%, transparent 25%),
              linear-gradient(45deg, transparent 75%, rgba(0,0,0,0.05) 75%),
              linear-gradient(-45deg, transparent 75%, rgba(0,0,0,0.05) 75%)
            `,
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center px-6 py-3 bg-slate-800 text-white rounded-full mb-6">
              <Gauge className="h-5 w-5 mr-2" />
              <span className="font-semibold">Industrial Excellence</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-slate-900">
              Why Choose <span className="text-primary">Super Tech</span>?
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              With two modern manufacturing facilities at Bhosari and Chakan MIDC, Pune, 
              we combine engineering excellence, advanced infrastructure, and ISO 9001:2015 
              certified processes to deliver high-quality solutions to industries worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group relative overflow-hidden border-0 bg-white hover:bg-slate-50 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary-hover"></div>
              <CardContent className="p-8 relative">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-slate-200 transition-colors">
                    <Building2 className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Modern Facilities</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Two well-equipped manufacturing units with advanced machinery
                </p>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden border-0 bg-white hover:bg-slate-50 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent/70"></div>
              <CardContent className="p-8 relative">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-slate-200 transition-colors">
                    <Award className="h-8 w-8 text-accent group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">ISO 9001:2015</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Certified quality management system ensuring excellence
                </p>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden border-0 bg-white hover:bg-slate-50 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-secondary/70"></div>
              <CardContent className="p-8 relative">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-slate-200 transition-colors">
                    <Globe className="h-8 w-8 text-secondary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Global Reach</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Serving clients across Asia, Africa, and North America
                </p>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden border-0 bg-white hover:bg-slate-50 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary-hover"></div>
              <CardContent className="p-8 relative">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-slate-200 transition-colors">
                    <Users className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">30+ Years</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Three decades of reliable partnership and expertise
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Corporate Legacy Section */}
      <section className="py-24 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
        {/* Industrial Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-2 h-40 bg-primary/20 transform rotate-12"></div>
          <div className="absolute bottom-20 right-20 w-2 h-32 bg-accent/20 transform -rotate-12"></div>
          <div className="absolute top-1/2 left-1/4 w-1 h-24 bg-secondary/30 transform rotate-45"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center px-6 py-3 bg-slate-700/80 backdrop-blur-sm border border-primary/30 rounded-full mb-8">
                <Target className="h-5 w-5 mr-2 text-primary" />
                <span className="text-white font-semibold">Our Legacy</span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold mb-8 text-white">
                Trusted <span className="text-primary">Partnership</span>
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-2xl p-8 hover:bg-slate-700/70 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 animate-pulse"></div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">Global Excellence</h3>
                      <p className="text-lg leading-relaxed text-slate-300">
                        For over three decades, Super Tech has been a reliable partner to clients 
                        across India, Asia, Africa, and North America. Our reputation is built on 
                        quality, trust, and timely delivery.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-2xl p-8 hover:bg-slate-700/70 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-2 h-2 bg-accent rounded-full mt-3 animate-pulse delay-500"></div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">Quality Commitment</h3>
                      <p className="text-lg leading-relaxed text-slate-300">
                        We handle small, medium, and high tonnage projects, ensuring 100% quality 
                        control and timely delivery. Super Tech exports its products through customers 
                        to Indonesia, Malaysia, Singapore, South Africa, USA, Mexico, Sri Lanka, 
                        Bhutan, and Nepal.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm border border-primary/30 rounded-xl p-6 text-center">
                  <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">30+</div>
                  <div className="text-slate-400 text-sm">Years Experience</div>
                </div>
                <div className="bg-gradient-to-br from-accent/20 to-accent/5 backdrop-blur-sm border border-accent/30 rounded-xl p-6 text-center">
                  <Globe className="h-12 w-12 text-accent mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">9</div>
                  <div className="text-slate-400 text-sm">Countries Served</div>
                </div>
                <div className="bg-gradient-to-br from-secondary/20 to-secondary/5 backdrop-blur-sm border border-secondary/30 rounded-xl p-6 text-center">
                  <Factory className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">2</div>
                  <div className="text-slate-400 text-sm">Modern Facilities</div>
                </div>
                <div className="bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm border border-primary/30 rounded-xl p-6 text-center">
                  <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">100%</div>
                  <div className="text-slate-400 text-sm">Quality Control</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;