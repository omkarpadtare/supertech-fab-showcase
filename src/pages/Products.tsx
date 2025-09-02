import { Building, Factory, Wrench, Shield, Layers, Truck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Products = () => {
  const products = [
    {
      category: "Structural Steelwork",
      icon: Building,
      items: ["Columns, beams, bracings, and girders", "Heavy structural assemblies", "Industrial framework", "Support structures"]
    },
    {
      category: "Boiler Components",
      icon: Factory,
      items: ["HRSG casing panels", "Chimneys and stacks", "Boiler casings", "Heat exchanger components"]
    },
    {
      category: "Tanks & Hoppers",
      icon: Layers,
      items: ["Bulk handling solutions", "Storage tanks", "Process hoppers", "Custom containers"]
    },
    {
      category: "Ducts & Chutes",
      icon: Shield,
      items: ["Stainless steel ducts", "Insulated ducting", "Custom chute designs", "Process conveyance systems"]
    },
    {
      category: "Platforms & Access",
      icon: Wrench,
      items: ["Industrial platforms", "Safety railings", "Walkways", "Access solutions"]
    },
    {
      category: "Heavy Assemblies",
      icon: Truck,
      items: ["Base frames", "Equipment housings", "Large-scale assemblies", "Custom fabrications"]
    }
  ];

  const services = [
    {
      title: "Blasting & Industrial Painting",
      description: "Complete surface preparation and protective coating solutions",
      features: ["Grit blasting", "Copper blasting", "Industrial painting", "Corrosion protection"]
    },
    {
      title: "Packing & Export Logistics",
      description: "Professional packaging and logistics for global shipments",
      features: ["Export packaging", "Container loading", "Documentation", "Logistics coordination"]
    },
    {
      title: "On-site Assembly & Mock-ups",
      description: "Field assembly services and pre-delivery testing",
      features: ["Site assembly", "Mock-up testing", "Fit verification", "Installation support"]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Products & Services</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We deliver a comprehensive range of fabrication solutions, backed by 
            precision engineering and industry expertise. Our products serve diverse 
            industries with reliable, high-quality fabricated components.
          </p>
        </div>

        <Tabs defaultValue="products" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-12">
            <TabsTrigger value="products">Core Products</TabsTrigger>
            <TabsTrigger value="services">Value-Added Services</TabsTrigger>
          </TabsList>

          <TabsContent value="products">
            {/* Core Products */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {products.map((product, index) => {
                const Icon = product.icon;
                return (
                  <Card key={index} className="shadow-medium hover:shadow-strong transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-4">
                        <Icon className="h-8 w-8 text-primary" />
                        <CardTitle className="text-xl">{product.category}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {product.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2 text-sm">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Product Highlights */}
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-8 lg:p-12 mb-16">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Product Specializations</h2>
                <p className="text-lg text-muted-foreground">
                  Our expertise spans across various fabrication domains
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">HRSG Components</div>
                  <p className="text-sm text-muted-foreground">Heat Recovery Steam Generator casing panels and assemblies</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">Stainless Steel</div>
                  <p className="text-sm text-muted-foreground">Specialized stainless steel fabrication and ducting</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">Insulated Systems</div>
                  <p className="text-sm text-muted-foreground">Insulated ducting and thermal management solutions</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">Heavy Tonnage</div>
                  <p className="text-sm text-muted-foreground">Large-scale structural and process equipment</p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="services">
            {/* Value-Added Services */}
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {services.map((service, index) => (
                <Card key={index} className="shadow-medium hover:shadow-strong transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Service Process */}
            <div className="bg-muted/30 rounded-lg p-8 lg:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Our Process</h2>
                <p className="text-lg text-muted-foreground">
                  From concept to delivery, we ensure excellence at every step
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
                  <h3 className="font-semibold mb-2">Design & Engineering</h3>
                  <p className="text-sm text-muted-foreground">Detailed engineering and design optimization</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
                  <h3 className="font-semibold mb-2">Precision Fabrication</h3>
                  <p className="text-sm text-muted-foreground">Advanced manufacturing with quality control</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
                  <h3 className="font-semibold mb-2">Surface Treatment</h3>
                  <p className="text-sm text-muted-foreground">Blasting, painting, and protective coatings</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
                  <h3 className="font-semibold mb-2">Delivery & Support</h3>
                  <p className="text-sm text-muted-foreground">Packaging, logistics, and after-sales support</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Products;