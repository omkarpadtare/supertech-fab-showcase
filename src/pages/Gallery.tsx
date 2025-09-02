import { Image, Factory, Wrench, Truck, Building } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import fabricationWork from "@/assets/fabrication-work.jpg";
import heroManufacturing from "@/assets/hero-manufacturing.jpg";
import machinery from "@/assets/machinery.jpg";

const Gallery = () => {
  const galleryCategories = [
    {
      id: "facilities",
      title: "Manufacturing Facilities",
      icon: Factory,
      description: "Our state-of-the-art manufacturing facilities at Bhosari & Chakan",
      images: [
        {
          src: heroManufacturing,
          title: "Unit I - Bhosari MIDC",
          description: "Main manufacturing facility with 90,000 sq ft plot area"
        },
        {
          src: machinery,
          title: "Advanced Machinery",
          description: "Modern fabrication equipment and machinery"
        },
        {
          src: fabricationWork,
          title: "Fabrication Workshop",
          description: "Skilled workforce operating advanced equipment"
        }
      ]
    },
    {
      id: "products",
      title: "Fabricated Products",
      icon: Building,
      description: "Showcase of our high-quality fabricated components and structures",
      images: [
        {
          src: fabricationWork,
          title: "HRSG Casing Panels",
          description: "Precision-fabricated Heat Recovery Steam Generator panels"
        },
        {
          src: heroManufacturing,
          title: "Structural Steelwork",
          description: "Heavy structural columns, beams, and assemblies"
        },
        {
          src: machinery,
          title: "Industrial Tanks",
          description: "Custom-designed storage and process tanks"
        }
      ]
    },
    {
      id: "processes",
      title: "Manufacturing Processes",
      icon: Wrench,
      description: "Our advanced fabrication and surface treatment processes",
      images: [
        {
          src: machinery,
          title: "Welding Operations",
          description: "Advanced CO₂ and Arc welding processes"
        },
        {
          src: fabricationWork,
          title: "Surface Treatment",
          description: "Grit blasting and industrial painting operations"
        },
        {
          src: heroManufacturing,
          title: "Quality Control",
          description: "Comprehensive inspection and testing procedures"
        }
      ]
    },
    {
      id: "dispatch",
      title: "Export & Dispatch",
      icon: Truck,
      description: "Export-ready assemblies and dispatch operations",
      images: [
        {
          src: heroManufacturing,
          title: "Export Packaging",
          description: "Professional packaging for international shipments"
        },
        {
          src: fabricationWork,
          title: "Container Loading",
          description: "Systematic loading and dispatch operations"
        },
        {
          src: machinery,
          title: "Quality Verification",
          description: "Final inspection before dispatch"
        }
      ]
    }
  ];

  const projectHighlights = [
    {
      title: "Hoppers & Bulk Handling",
      description: "Custom-designed hoppers for various industrial applications",
      category: "Process Equipment"
    },
    {
      title: "Ducting Systems",
      description: "Stainless steel and insulated ducting for process industries",
      category: "HVAC Components"
    },
    {
      title: "Mockup Assembly",
      description: "Pre-delivery mockup assembly of ducting & economizer casing",
      category: "Quality Assurance"
    },
    {
      title: "Fabricated Girders",
      description: "Heavy structural girders for construction and industrial projects",
      category: "Structural Steel"
    },
    {
      title: "HRSG Casing Panels",
      description: "Precision-manufactured panels for heat recovery steam generators",
      category: "Boiler Components"
    },
    {
      title: "Stainless Steel Jobs",
      description: "Specialized stainless steel fabrication for corrosive environments",
      category: "Specialty Fabrication"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Image className="h-12 w-12 text-primary mx-auto mb-4" />
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Project Gallery</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive gallery showcasing manufacturing facilities, 
            fabricated products, advanced processes, and successful project deliveries 
            across various industrial sectors.
          </p>
        </div>

        <Tabs defaultValue="facilities" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-12">
            {galleryCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="text-xs sm:text-sm">
                <category.icon className="h-4 w-4 mr-2 hidden sm:inline" />
                {category.title.split(' ')[0]}
              </TabsTrigger>
            ))}
          </TabsList>

          {galleryCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="mb-8 text-center">
                <h2 className="text-2xl font-bold mb-2">{category.title}</h2>
                <p className="text-muted-foreground">{category.description}</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {category.images.map((image, index) => (
                  <Card key={index} className="shadow-medium hover:shadow-strong transition-all duration-300 overflow-hidden">
                    <div className="aspect-video relative overflow-hidden">
                      <img 
                        src={image.src} 
                        alt={image.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300"></div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold mb-2">{image.title}</h3>
                      <p className="text-sm text-muted-foreground">{image.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Project Highlights */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Project Highlights</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Showcasing our diverse fabrication capabilities across various project types
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {projectHighlights.map((project, index) => (
              <Card key={index} className="shadow-medium hover:shadow-strong transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Building className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                      <span className="inline-flex items-center px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Capabilities Overview */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-8 lg:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Manufacturing Capabilities</h2>
            <p className="text-lg text-muted-foreground">
              Our comprehensive facilities enable diverse fabrication projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <Factory className="h-10 w-10 text-primary mx-auto mb-3" />
              <h3 className="font-bold mb-2">Two Modern Units</h3>
              <p className="text-sm text-muted-foreground">
                185,600 sq ft total manufacturing area
              </p>
            </div>
            <div>
              <Wrench className="h-10 w-10 text-primary mx-auto mb-3" />
              <h3 className="font-bold mb-2">Advanced Equipment</h3>
              <p className="text-sm text-muted-foreground">
                State-of-the-art fabrication machinery
              </p>
            </div>
            <div>
              <Building className="h-10 w-10 text-primary mx-auto mb-3" />
              <h3 className="font-bold mb-2">Diverse Products</h3>
              <p className="text-sm text-muted-foreground">
                Complete range of fabricated components
              </p>
            </div>
            <div>
              <Truck className="h-10 w-10 text-primary mx-auto mb-3" />
              <h3 className="font-bold mb-2">Global Delivery</h3>
              <p className="text-sm text-muted-foreground">
                Export-ready packaging and logistics
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;