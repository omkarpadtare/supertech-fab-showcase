import { MapPin, Factory, Wrench, Truck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Facilities = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Facilities</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Super Tech operates from two well-equipped manufacturing units designed 
            for large-scale heavy fabrication projects, combining modern infrastructure 
            with advanced machinery capabilities.
          </p>
        </div>

        {/* Units Overview */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Unit I */}
          <Card className="shadow-medium">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <Factory className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle className="text-2xl">Unit I - Bhosari MIDC</CardTitle>
                  <p className="text-muted-foreground">Primary Manufacturing Hub</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-1" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-sm text-muted-foreground">
                    J251/252, M.I.D.C, Bhosari, Pune – 411026, Maharashtra, India
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <p className="text-2xl font-bold text-primary">90,000</p>
                  <p className="text-sm text-muted-foreground">Plot Area (Sq. Ft.)</p>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <p className="text-2xl font-bold text-primary">16,000</p>
                  <p className="text-sm text-muted-foreground">Covered Area (Sq. Ft.)</p>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <p className="text-2xl font-bold text-primary">55,000</p>
                  <p className="text-sm text-muted-foreground">Open Area (Sq. Ft.)</p>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold">Key Features:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Fabrication Shed: 60m × 25m with 10 MT overhead crane</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Dedicated assembly and dispatch zones</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Advanced welding and cutting equipment</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Unit II */}
          <Card className="shadow-medium">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <Factory className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle className="text-2xl">Unit II - Chakan MIDC</CardTitle>
                  <p className="text-muted-foreground">Specialized Processing Hub</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-1" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-sm text-muted-foreground">
                    Plot No. B4, M.I.D.C, Mahalunge, Tal. Khed, Pune – 410501, Maharashtra, India
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <p className="text-2xl font-bold text-primary">95,600</p>
                  <p className="text-sm text-muted-foreground">Plot Area (Sq. Ft.)</p>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <p className="text-2xl font-bold text-primary">6,000</p>
                  <p className="text-sm text-muted-foreground">Covered Area (Sq. Ft.)</p>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <p className="text-2xl font-bold text-primary">76,600</p>
                  <p className="text-sm text-muted-foreground">Open Area (Sq. Ft.)</p>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold">Key Features:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Modern paint bay: 60m × 10m × 7m</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Open staging areas for export consignments</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Specialized surface treatment facilities</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Machinery & Capabilities */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Machinery & Capabilities</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              State-of-the-art equipment enabling precision fabrication 
              and efficient production processes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="shadow-medium hover:shadow-strong transition-all duration-300">
              <CardContent className="p-6">
                <Wrench className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-bold mb-2">Welding Equipment</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Advanced CO₂ & Arc Welding Machines by Mogora
                </p>
                <ul className="text-xs space-y-1">
                  <li>• High-precision welding capabilities</li>
                  <li>• Multiple welding processes</li>
                  <li>• Quality joint formation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover:shadow-strong transition-all duration-300">
              <CardContent className="p-6">
                <div className="h-10 w-10 bg-primary rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold">C</span>
                </div>
                <h3 className="font-bold mb-2">Cutting Systems</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Profile Gas Cutting & Plasma Cutting Machines
                </p>
                <ul className="text-xs space-y-1">
                  <li>• Plasma Cutting Machine – Messer (4m × 15m)</li>
                  <li>• Profile gas cutting capabilities</li>
                  <li>• Precision cutting operations</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover:shadow-strong transition-all duration-300">
              <CardContent className="p-6">
                <div className="h-10 w-10 bg-primary rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold">R</span>
                </div>
                <h3 className="font-bold mb-2">Rolling Equipment</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Plate & Pipe Rolling Machines
                </p>
                <ul className="text-xs space-y-1">
                  <li>• Plate rolling capabilities</li>
                  <li>• Pipe rolling operations</li>
                  <li>• Custom forming solutions</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover:shadow-strong transition-all duration-300">
              <CardContent className="p-6">
                <div className="h-10 w-10 bg-primary rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold">B</span>
                </div>
                <h3 className="font-bold mb-2">Machining Centers</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Broach Cutting Machines up to Ø130 mm
                </p>
                <ul className="text-xs space-y-1">
                  <li>• Precision broach cutting</li>
                  <li>• Up to 130mm diameter capability</li>
                  <li>• High-accuracy machining</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover:shadow-strong transition-all duration-300">
              <CardContent className="p-6">
                <div className="h-10 w-10 bg-primary rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold">S</span>
                </div>
                <h3 className="font-bold mb-2">Surface Treatment</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  60 HP Compressor for blasting operations
                </p>
                <ul className="text-xs space-y-1">
                  <li>• High-capacity air compression</li>
                  <li>• Grit blasting capabilities</li>
                  <li>• Surface preparation excellence</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover:shadow-strong transition-all duration-300">
              <CardContent className="p-6">
                <Truck className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-bold mb-2">Material Handling</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  10 MT Overhead Crane System
                </p>
                <ul className="text-xs space-y-1">
                  <li>• Heavy lifting capabilities</li>
                  <li>• Efficient material movement</li>
                  <li>• Safe handling operations</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Capabilities Summary */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-8 lg:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Manufacturing Capabilities</h2>
            <p className="text-lg text-muted-foreground">
              Our combined facilities enable us to handle projects of all scales
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">185,600</div>
              <p className="text-muted-foreground">Total Plot Area (Sq. Ft.)</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">131,600</div>
              <p className="text-muted-foreground">Total Open Area (Sq. Ft.)</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">22,000</div>
              <p className="text-muted-foreground">Total Covered Area (Sq. Ft.)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;