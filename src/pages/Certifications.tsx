import { Award, FileText, Shield, CheckCircle, Download, Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Certifications = () => {
  const certifications = [
    {
      title: "ISO 9001:2015",
      description: "Quality Management System Certification",
      validTill: "2027",
      issuer: "International Organization for Standardization",
      icon: Award,
      status: "Active",
      color: "border-primary bg-primary/5"
    },
    {
      title: "UDYAM Registration",
      description: "Government of India MSME Registration",
      number: "UDYAM-MH-26-0010205",
      issuer: "Ministry of MSME, Government of India",
      icon: Shield,
      status: "Active",
      color: "border-green-500 bg-green-50"
    },
    {
      title: "GST Registration",
      description: "Goods and Services Tax Registration",
      number: "27AEYPK2673R1ZB",
      issuer: "Government of India",
      icon: FileText,
      status: "Active",
      color: "border-blue-500 bg-blue-50"
    }
  ];

  const qualityStandards = [
    {
      standard: "ISO 9001:2015",
      description: "Quality management systems — Requirements",
      focus: "Customer satisfaction through consistent quality delivery"
    },
    {
      standard: "Welding Standards",
      description: "AWS, ASME welding procedure qualifications",
      focus: "Certified welding processes and quality assurance"
    },
    {
      standard: "Material Testing",
      description: "NDT and material verification protocols",
      focus: "Material integrity and performance validation"
    },
    {
      standard: "Safety Compliance",
      description: "Industrial safety and environmental standards",
      focus: "Workplace safety and environmental responsibility"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Award className="h-12 w-12 text-primary mx-auto mb-4" />
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Certifications & Registrations</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Super Tech holds prestigious certifications and registrations that reinforce 
            our credibility and commitment to quality, compliance, and professional excellence 
            in heavy fabrication industry.
          </p>
        </div>

        {/* Main Certifications */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <Card key={index} className={`shadow-medium hover:shadow-strong transition-all duration-300 ${cert.color}`}>
                <CardHeader className="text-center">
                  <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl">{cert.title}</CardTitle>
                  <p className="text-muted-foreground">{cert.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                      <CheckCircle className="h-4 w-4" />
                      {cert.status}
                    </div>
                  </div>
                  
                  {cert.validTill && (
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">Valid Till</p>
                      <p className="font-semibold">{cert.validTill}</p>
                    </div>
                  )}
                  
                  {cert.number && (
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">Registration Number</p>
                      <p className="font-mono text-sm font-semibold">{cert.number}</p>
                    </div>
                  )}
                  
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground">Issued by</p>
                    <p className="text-sm font-medium">{cert.issuer}</p>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Eye className="h-4 w-4 mr-2" />
                      View
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* ISO 9001:2015 Highlight */}
        <div className="bg-gradient-to-r from-primary to-primary-hover text-white rounded-lg p-8 lg:p-12 mb-16">
          <div className="text-center">
            <Award className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">ISO 9001:2015 Excellence</h2>
            <p className="text-xl mb-8 text-red-100">
              Our ISO 9001:2015 certification demonstrates our commitment to quality 
              management systems and continuous improvement in all aspects of our operations
            </p>
            
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold mb-2">2015</div>
                <p className="text-red-200 text-sm">Latest ISO Version</p>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">Valid</div>
                <p className="text-red-200 text-sm">Till 2027</p>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">Annual</div>
                <p className="text-red-200 text-sm">Audits Passed</p>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">100%</div>
                <p className="text-red-200 text-sm">Compliance Rate</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quality Standards */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Quality Standards & Compliance</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We adhere to international quality standards and industry best practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {qualityStandards.map((standard, index) => (
              <Card key={index} className="shadow-medium hover:shadow-strong transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold mb-2">{standard.standard}</h3>
                      <p className="text-muted-foreground mb-3">{standard.description}</p>
                      <p className="text-sm font-medium text-primary">{standard.focus}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certification Benefits */}
        <div className="bg-muted/30 rounded-lg p-8 lg:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Certification Benefits</h2>
            <p className="text-lg text-muted-foreground">
              How our certifications benefit our clients and operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <Shield className="h-10 w-10 text-primary mx-auto mb-3" />
              <h3 className="font-bold mb-2">Quality Assurance</h3>
              <p className="text-sm text-muted-foreground">
                Systematic quality management ensures consistent excellence
              </p>
            </div>
            <div className="text-center p-6">
              <CheckCircle className="h-10 w-10 text-primary mx-auto mb-3" />
              <h3 className="font-bold mb-2">Process Control</h3>
              <p className="text-sm text-muted-foreground">
                Documented processes ensure repeatability and reliability
              </p>
            </div>
            <div className="text-center p-6">
              <Award className="h-10 w-10 text-primary mx-auto mb-3" />
              <h3 className="font-bold mb-2">Client Confidence</h3>
              <p className="text-sm text-muted-foreground">
                International recognition builds trust and credibility
              </p>
            </div>
            <div className="text-center p-6">
              <FileText className="h-10 w-10 text-primary mx-auto mb-3" />
              <h3 className="font-bold mb-2">Compliance</h3>
              <p className="text-sm text-muted-foreground">
                Legal and regulatory compliance across all operations
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-lg leading-relaxed max-w-3xl mx-auto">
              Our certifications are not just documents on the wall—they represent our 
              commitment to excellence, continuous improvement, and customer satisfaction. 
              We regularly update our processes and maintain compliance to ensure we 
              deliver the highest quality products to our clients worldwide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;