import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

const LightFooter = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Capabilities', path: '/capabilities' },
    { name: 'Process', path: '/process' },
    { name: 'Insights', path: '/insights' },
    { name: 'Contact', path: '/contact' }
  ];

  const legalLinks = [
    { name: 'Disclaimer', path: '/legal/disclaimer' },
    { name: 'Risk Disclosure', path: '/legal/risk-disclosure' },
    { name: 'Privacy Policy', path: '/legal/privacy-policy' },
    { name: 'Terms of Use', path: '/legal/terms' }
  ];

  return (
    <footer className="bg-gray-50 text-gray-700 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="https://customer-assets.emergentagent.com/job_660d5179-119d-444e-bd85-65d7622ccd1e/artifacts/mc40ek90_WhatsApp%20Image%202026-03-02%20at%2011.34.05%20PM.jpeg"
                alt="The Fly Asset"
                className="h-10 w-auto"
              />
              <span className="text-lg font-semibold text-[#0a1628]">THE FLY ASSET</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Research-driven proprietary trading and market research firm based in Kolkata, India.
            </p>
            <div className="flex items-start space-x-2">
              <MapPin size={18} className="text-[#D4AF37] mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-600">Kolkata, West Bengal, India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-[#0a1628] mb-4 uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-600 hover:text-[#D4AF37] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-semibold text-[#0a1628] mb-4 uppercase tracking-wider">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-600 hover:text-[#D4AF37] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-500">
              © {currentYear} THE FLY ASSET. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 text-center">
              For educational and informational purposes only. Not investment advice.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LightFooter;
