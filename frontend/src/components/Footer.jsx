import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/#services' },
    { name: 'About Us', path: '/#about' },
    { name: 'Team', path: '/#team' },
    { name: 'Contact', path: '/#contact' }
  ];

  const services = [
    'Investment Advisory',
    'Portfolio Management',
    'Wealth Management',
    'Alternative Investment Funds'
  ];

  return (
    <footer className="bg-[#0a1628] text-white border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img
              src="https://customer-assets.emergentagent.com/job_660d5179-119d-444e-bd85-65d7622ccd1e/artifacts/mc40ek90_WhatsApp%20Image%202026-03-02%20at%2011.34.05%20PM.jpeg"
              alt="The Fly Asset"
              className="h-12 w-auto mb-4"
            />
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Empowering your financial future with personalized investment solutions and expert wealth management.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-[#D4AF37] transition-colors duration-200">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-[#D4AF37] transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-[#D4AF37] transition-colors duration-200">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#D4AF37]">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className="text-white/70 hover:text-[#D4AF37] transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#D4AF37]">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-white/70 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#D4AF37]">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-[#D4AF37] mt-1 flex-shrink-0" />
                <span className="text-white/70 text-sm">info@theflyasset.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-[#D4AF37] mt-1 flex-shrink-0" />
                <span className="text-white/70 text-sm">+91 (XXX) XXX-XXXX</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-[#D4AF37] mt-1 flex-shrink-0" />
                <span className="text-white/70 text-sm">
                  Mumbai, Maharashtra, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © {currentYear} The Fly Asset. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-white/60 hover:text-[#D4AF37] text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-[#D4AF37] text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-white/60 hover:text-[#D4AF37] text-sm transition-colors duration-200">
                Disclaimer
              </a>
            </div>
          </div>
          <p className="text-white/50 text-xs mt-4 text-center">
            SEBI Registered | Investments are subject to market risks. Please read all scheme related documents carefully.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
