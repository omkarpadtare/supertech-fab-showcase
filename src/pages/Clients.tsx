import { Users, Handshake, Trophy, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Clients = () => {
  const clientTestimonials = [
    {
      company: "Leading Power Generation Company",
      feedback: "Super Tech has been our reliable partner for over two decades. Their precision in fabricating HRSG components and commitment to quality has made them our preferred vendor.",
      project: "HRSG Casing Panels & Structural Components"
    },
    {
      company: "International Process Equipment Manufacturer",
      feedback: "The team at Super Tech consistently delivers complex fabrication projects on time and within specifications. Their ISO certification reflects in their work quality.",
      project: "Custom Process Equipment Fabrication"
    },
    {
      company: "Infrastructure Development Corporation",
      feedback: "Super Tech's expertise in heavy structural fabrication has been instrumental in several of our major infrastructure projects. Their attention to detail is commendable.",
      project: "Heavy Structural Steelwork"
    }
  ];

  const clientCategories = [
    {
      title: "Strategic Partners",
      icon: Handshake,
      description: "Long-term partnerships built on trust and excellence",
      details: [
        "Thermax - Primary partner since 1990",
        "Multi-decade relationships",
        "Exclusive fabrication agreements",
        "Joint development projects"
      ]
    },
    {
      title: "Industrial Clients",
      icon: Users,
      description: "Diverse portfolio of industrial manufacturing clients",
      details: [
        "Power generation companies",
        "Process equipment manufacturers",
        "Infrastructure developers",
        "Heavy engineering firms"
      ]
    },
    {
      title: "Global Customers",
      icon: Trophy,
      description: "International clients across multiple continents",
      details: [
        "Export partners in Asia-Pacific",
        "North American distributors",
        "African industrial partners",
        "Growing international presence"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Users className="h-12 w-12 text-primary mx-auto mb-4" />
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Valued Clients</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Over the years, Super Tech has built strong relationships with some of the 
            leading names in the industry. Our clients trust us for our engineering 
            expertise, quality commitment, and on-time deliveries.
          </p>
        </div>

        {/* Strategic Partnership Highlight */}
        <div className="bg-gradient-to-r from-primary to-primary-hover text-white rounded-lg p-8 lg:p-12 mb-16">
          <div className="text-center">
            <Handshake className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Thermax Partnership</h2>
            <p className="text-xl mb-6 text-red-100">
              Our strategic partnership with Thermax since 1990 has been the foundation 
              of our growth and expertise in boiler component fabrication
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">30+</div>
                <p className="text-red-200">Years of Partnership</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">500+</div>
                <p className="text-red-200">Projects Completed</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">100%</div>
                <p className="text-red-200">On-Time Delivery</p>
              </div>
            </div>
          </div>
        </div>

        {/* Client Categories */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Client Portfolio</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our diverse client base spans across industries and geographies
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {clientCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card key={index} className="shadow-medium hover:shadow-strong transition-all duration-300">
                  <CardHeader className="text-center">
                    <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                    <p className="text-muted-foreground">{category.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Client Testimonials */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <Star className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              What our clients say about our services and partnership
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {clientTestimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-medium hover:shadow-strong transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.company}</CardTitle>
                  <p className="text-sm text-muted-foreground">{testimonial.project}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed italic">
                    "{testimonial.feedback}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Global Client Network */}
        <div className="bg-muted/30 rounded-lg p-8 lg:p-12 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Global Client Network</h2>
            <p className="text-lg text-muted-foreground">
              Our products serve clients across multiple continents
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-primary mb-1">India</div>
              <p className="text-sm text-muted-foreground">Domestic Market Leader</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1">Asia</div>
              <p className="text-sm text-muted-foreground">Indonesia, Malaysia, Singapore</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1">South Asia</div>
              <p className="text-sm text-muted-foreground">Sri Lanka, Bhutan, Nepal</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1">Africa</div>
              <p className="text-sm text-muted-foreground">South Africa</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1">Americas</div>
              <p className="text-sm text-muted-foreground">USA, Mexico</p>
            </div>
          </div>
        </div>

        {/* Partnership Values */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">Why Clients Choose Super Tech</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">30+</div>
              <p className="font-semibold mb-1">Years of Trust</p>
              <p className="text-sm text-muted-foreground">Proven track record</p>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <p className="font-semibold mb-1">Quality Assurance</p>
              <p className="text-sm text-muted-foreground">ISO 9001:2015 certified</p>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">On-Time</div>
              <p className="font-semibold mb-1">Delivery</p>
              <p className="text-sm text-muted-foreground">Reliable project completion</p>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">Global</div>
              <p className="font-semibold mb-1">Reach</p>
              <p className="text-sm text-muted-foreground">International expertise</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;