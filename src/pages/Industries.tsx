import { Factory, Zap, Droplets, Building2, Wrench, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Industries = () => {
  const industries = [
    {
      title: "Power & Energy",
      icon: Zap,
      description: "Comprehensive solutions for power generation facilities",
      products: ["Boilers & HRSG panels", "Chimneys & stacks", "Heat exchanger components", "Power plant structures"],
      color: "from-yellow-500/10 to-orange-500/10"
    },
    {
      title: "Oil & Gas / Process Industries",
      icon: Droplets,
      description: "Specialized fabrication for process and petrochemical industries",
      products: ["Process tanks", "Ducting systems", "Storage hoppers", "Pressure vessels"],
      color: "from-blue-500/10 to-cyan-500/10"
    },
    {
      title: "Infrastructure & Heavy Engineering",
      icon: Building2,
      description: "Large-scale infrastructure and construction projects",
      products: ["Structural columns", "Heavy girders", "Bridge components", "Industrial buildings"],
      color: "from-gray-500/10 to-slate-500/10"
    },
    {
      title: "Equipment Manufacturing",
      icon: Wrench,
      description: "Custom fabrication for industrial equipment manufacturers",
      products: ["Equipment base frames", "Machine housings", "Large assemblies", "Custom fabrications"],
      color: "from-green-500/10 to-emerald-500/10"
    }
  ];

  const globalMarkets = [
    { region: "India", description: "Domestic market leadership with comprehensive coverage" },
    { region: "Southeast Asia", countries: ["Indonesia", "Malaysia", "Singapore"] },
    { region: "South Asia", countries: ["Sri Lanka", "Bhutan", "Nepal"] },
    { region: "Africa", countries: ["South Africa"] },
    { region: "North America", countries: ["USA", "Mexico"] }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Industries We Serve</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We provide customized fabrication solutions to a diverse set of industries, 
            delivering precision-engineered components that meet the unique requirements 
            of each sector with excellence and reliability.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <Card key={index} className="shadow-medium hover:shadow-strong transition-all duration-300">
                <CardHeader>
                  <div className={`bg-gradient-to-br ${industry.color} rounded-lg p-6 mb-4`}>
                    <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle className="text-2xl text-center">{industry.title}</CardTitle>
                    <p className="text-center text-muted-foreground mt-2">{industry.description}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-3">Key Products & Solutions:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {industry.products.map((product, productIndex) => (
                      <div key={productIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span>{product}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Global Reach */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Global Footprint</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our products reach markets across multiple continents, serving 
              diverse industrial sectors with reliable fabrication solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {globalMarkets.map((market, index) => (
              <Card key={index} className="shadow-medium hover:shadow-strong transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-3 text-primary">{market.region}</h3>
                  {market.description ? (
                    <p className="text-sm text-muted-foreground">{market.description}</p>
                  ) : (
                    <ul className="space-y-1">
                      {market.countries?.map((country, countryIndex) => (
                        <li key={countryIndex} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span>{country}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Industry Applications */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-8 lg:p-12 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Specialized Applications</h2>
            <p className="text-lg text-muted-foreground">
              Our expertise extends across various industrial applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <Factory className="h-10 w-10 text-primary mx-auto mb-3" />
              <h3 className="font-bold mb-2">Thermal Power Plants</h3>
              <p className="text-sm text-muted-foreground">
                Boiler components, chimneys, and structural support systems
              </p>
            </div>
            <div className="text-center">
              <Droplets className="h-10 w-10 text-primary mx-auto mb-3" />
              <h3 className="font-bold mb-2">Process Industries</h3>
              <p className="text-sm text-muted-foreground">
                Chemical processing equipment and containment systems
              </p>
            </div>
            <div className="text-center">
              <Building2 className="h-10 w-10 text-primary mx-auto mb-3" />
              <h3 className="font-bold mb-2">Infrastructure</h3>
              <p className="text-sm text-muted-foreground">
                Heavy structural components for large construction projects
              </p>
            </div>
            <div className="text-center">
              <Wrench className="h-10 w-10 text-primary mx-auto mb-3" />
              <h3 className="font-bold mb-2">OEM Partners</h3>
              <p className="text-sm text-muted-foreground">
                Custom fabrication for equipment manufacturers
              </p>
            </div>
          </div>
        </div>

        {/* Commitment Statement */}
        <div className="text-center bg-muted/30 rounded-lg p-8 lg:p-12">
          <h2 className="text-3xl font-bold mb-6">Our Industry Commitment</h2>
          <p className="text-lg leading-relaxed max-w-4xl mx-auto mb-8">
            With over three decades of experience, Super Tech has built strong relationships 
            across diverse industrial sectors. We understand the unique challenges and 
            requirements of each industry, enabling us to deliver tailored solutions that 
            meet specific operational needs while maintaining our commitment to quality, 
            safety, and timely delivery.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-primary mb-2">25+</div>
              <p className="text-sm text-muted-foreground">Industrial Sectors Served</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-2">10+</div>
              <p className="text-sm text-muted-foreground">Countries Reached</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-2">1000+</div>
              <p className="text-sm text-muted-foreground">Projects Completed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industries;