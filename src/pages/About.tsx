import { Target, Eye, Heart, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">About Super Tech</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Super Tech began operations in 1990 as a fabrication partner to Thermax, 
            providing critical components for boiler systems. Over time, we expanded 
            our expertise and facilities to become a globally recognized fabrication company.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card className="shadow-medium">
            <CardHeader className="text-center">
              <Eye className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-2xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg leading-relaxed">
                To be a world-class leader in heavy fabrication, delivering excellence 
                with innovation and global reliability.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-medium">
            <CardHeader className="text-center">
              <Target className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Provide superior quality and cost-effective fabrication solutions</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Ensure on-time delivery through efficient processes and skilled manpower</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Continuously invest in technology and infrastructure</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Build lasting relationships with clients across the globe</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center shadow-medium hover:shadow-strong transition-all duration-300">
              <CardContent className="p-6">
                <Heart className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Integrity & Commitment</h3>
                <p className="text-sm text-muted-foreground">
                  Unwavering dedication to ethical practices and client satisfaction
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-medium hover:shadow-strong transition-all duration-300">
              <CardContent className="p-6">
                <Target className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Precision Engineering</h3>
                <p className="text-sm text-muted-foreground">
                  Meticulous attention to detail in every fabrication process
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-medium hover:shadow-strong transition-all duration-300">
              <CardContent className="p-6">
                <div className="h-10 w-10 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">Q</span>
                </div>
                <h3 className="font-bold mb-2">Quality & Safety</h3>
                <p className="text-sm text-muted-foreground">
                  ISO 9001:2015 certified processes ensuring superior quality
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-medium hover:shadow-strong transition-all duration-300">
              <CardContent className="p-6">
                <Lightbulb className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Innovation & Teamwork</h3>
                <p className="text-sm text-muted-foreground">
                  Collaborative approach driving continuous improvement
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Company Story */}
        <div className="bg-muted/30 rounded-lg p-8 lg:p-12">
          <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              What began as a specialized fabrication partnership with Thermax in 1990 
              has evolved into a comprehensive heavy fabrication enterprise serving 
              global markets. Our commitment to quality and innovation has been the 
              cornerstone of our three-decade journey.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Today, Super Tech stands as a testament to Indian manufacturing excellence, 
              with state-of-the-art facilities, skilled workforce, and a proven track 
              record of delivering complex fabrication projects on time and within budget.
            </p>
            <p className="text-lg leading-relaxed">
              We are a process-driven, teamwork-oriented, and growth-focused company, 
              constantly evolving to meet the changing demands of the global fabrication industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;