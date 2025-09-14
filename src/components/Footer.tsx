import { MapPin, Phone, Mail, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import superTechLogo from "@/assets/super-tech-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={superTechLogo} alt="Super-Tech" className="h-10 w-10" />
              <div>
                <h3 className="text-xl font-bold">Super Tech</h3>
                <p className="text-sm text-red-200">Precision in Fabrication</p>
              </div>
            </div>
            <p className="text-red-100 text-sm leading-relaxed">
              A trusted leader in heavy fabrication and boiler component manufacturing 
              since 1990. ISO 9001:2015 certified with global reach.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-red-100 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/products" className="text-red-100 hover:text-white transition-colors">Products & Services</Link></li>
              <li><Link to="/quality" className="text-red-100 hover:text-white transition-colors">Quality</Link></li>
              <li><Link to="/gallery" className="text-red-100 hover:text-white transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="text-red-100 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-red-100">Structural Steelwork</li>
              <li className="text-red-100">Boiler Components</li>
              <li className="text-red-100">Tanks & Hoppers</li>
              <li className="text-red-100">Ducts & Chutes</li>
              <li className="text-red-100">Platforms & Railings</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Building2 className="h-4 w-4 text-red-200 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-red-100">Unit I - Bhosari MIDC</p>
                  <p className="text-red-200 text-xs">J251/252, M.I.D.C, Bhosari, Pune – 411026, Maharashtra, India</p>
                </div>
                <div>
                  <p className="text-red-100">Unit II - Chakan MIDC</p>
                  <p className="text-red-200 text-xs">Plot No. B4, M.I.D.C, Mahalunge, Tal. Khed, Pune – 410501, Maharashtra, India</p>
                </div> 
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-red-200" />
                <span className="text-red-100">supertech102@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-red-200" />
                <span className="text-red-100">+91 99228 61234</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-red-300/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-red-100 text-sm">
            © 2024 Super Tech. All rights reserved.
          </p>
          <p className="text-red-200 text-sm mt-2 md:mt-0">
            Design and Developed by <span className="text-white font-medium"><a target="_blank" href="https://raydito.com">Raydito Services</a></span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;