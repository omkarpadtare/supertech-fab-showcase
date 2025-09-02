import { Award, CheckCircle, FileText, Download, Eye, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Quality = () => {
  const [showPDFViewer, setShowPDFViewer] = useState(false);

  const qualityProcesses = [
    {
      title: "100% Dimensional Checks",
      description: "Comprehensive dimensional verification during fabrication process",
      icon: CheckCircle
    },
    {
      title: "Welding Inspections",
      description: "Advanced welding quality control and NDT testing where required",
      icon: CheckCircle
    },
    {
      title: "Surface Treatment Quality",
      description: "Blasting and painting with long-lasting protection standards",
      icon: CheckCircle
    },
    {
      title: "Final Inspection",
      description: "Complete quality verification before dispatch and delivery",
      icon: CheckCircle
    }
  ];

  const qualityFeatures = [
    {
      title: "ISO 9001:2015 Certified",
      description: "International quality management system certification ensuring consistent excellence",
      highlight: true
    },
    {
      title: "Process-Driven Approach",
      description: "Systematic quality control at every stage of fabrication"
    },
    {
      title: "Skilled Workforce",
      description: "Trained professionals committed to quality excellence"
    },
    {
      title: "Advanced Testing",
      description: "Modern testing equipment and quality assurance protocols"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Award className="h-12 w-12 text-primary" />
            <h1 className="text-4xl lg:text-5xl font-bold">Quality Assurance</h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At Super Tech, quality is at the core of everything we do. We are an 
            ISO 9001:2015 Certified Company, ensuring compliance with international 
            quality standards and delivering excellence in every project.
          </p>
        </div>

        {/* ISO Certification Highlight */}
        <div className="bg-gradient-to-r from-primary to-primary-hover text-white rounded-lg p-8 lg:p-12 mb-16">
          <div className="text-center">
            <Award className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">ISO 9001:2015 Certified</h2>
            <p className="text-xl mb-6 text-red-100">
              Internationally recognized quality management system ensuring 
              consistent excellence in all our fabrication processes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => setShowPDFViewer(true)}
                className="text-primary hover:text-primary-hover"
              >
                <Eye className="h-5 w-5 mr-2" />
                View Certificate
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                <Download className="h-5 w-5 mr-2" />
                Download Certificate
              </Button>
            </div>
          </div>
        </div>

        {/* PDF Viewer Modal */}
        {showPDFViewer && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg w-full max-w-4xl h-[80vh] flex flex-col">
              <div className="flex items-center justify-between p-4 border-b">
                <h3 className="text-lg font-semibold">ISO 9001:2015 Certificate</h3>
                <Button variant="ghost" onClick={() => setShowPDFViewer(false)}>
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <div className="flex-1 p-4 bg-muted/30 flex items-center justify-center">
                <div className="text-center">
                  <FileText className="h-16 w-16 text-primary mx-auto mb-4" />
                  <p className="text-lg font-semibold mb-2">Quality Certificate</p>
                  <p className="text-muted-foreground mb-4">
                    ISO 9001:2015 Certification for Quality Management System
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Certificate viewing and download functionality will be integrated 
                    with actual certificate documents.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Quality Process */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Quality Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We implement rigorous quality control measures at every stage 
              to ensure superior fabrication standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {qualityProcesses.map((process, index) => {
              const Icon = process.icon;
              return (
                <Card key={index} className="shadow-medium hover:shadow-strong transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Icon className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-bold mb-2">{process.title}</h3>
                        <p className="text-muted-foreground">{process.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Quality Features */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Quality Excellence Features</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {qualityFeatures.map((feature, index) => (
              <Card 
                key={index} 
                className={`shadow-medium hover:shadow-strong transition-all duration-300 ${
                  feature.highlight ? 'border-primary bg-primary/5' : ''
                }`}
              >
                <CardHeader>
                  <CardTitle className={`text-xl ${feature.highlight ? 'text-primary' : ''}`}>
                    {feature.highlight && <Award className="h-6 w-6 inline mr-2" />}
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quality Commitment */}
        <div className="bg-muted/30 rounded-lg p-8 lg:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Our Quality Commitment</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <p className="text-lg font-semibold mb-2">Quality Control</p>
              <p className="text-sm text-muted-foreground">
                Every product undergoes comprehensive quality checks
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">30+</div>
              <p className="text-lg font-semibold mb-2">Years Experience</p>
              <p className="text-sm text-muted-foreground">
                Three decades of quality fabrication expertise
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">2027</div>
              <p className="text-lg font-semibold mb-2">ISO Valid Till</p>
              <p className="text-sm text-muted-foreground">
                Current ISO 9001:2015 certification validity
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-lg leading-relaxed max-w-3xl mx-auto">
              Our commitment to quality extends beyond certifications. We believe in 
              continuous improvement, investing in advanced testing equipment, training 
              our workforce, and implementing best practices to ensure that every product 
              we deliver meets the highest standards of excellence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quality;