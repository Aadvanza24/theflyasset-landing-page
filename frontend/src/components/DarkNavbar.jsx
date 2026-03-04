import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const DarkNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Capabilities', path: '/capabilities' },
    { name: 'Process', path: '/process' },
    { name: 'Insights', path: '/insights' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0a0a0b]/95 backdrop-blur-md border-b border-neutral-800' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="https://customer-assets.emergentagent.com/job_660d5179-119d-444e-bd85-65d7622ccd1e/artifacts/mc40ek90_WhatsApp%20Image%202026-03-02%20at%2011.34.05%20PM.jpeg"
              alt="The Fly Asset"
              className="h-10 w-auto"
            />
            <span className="text-xl font-semibold text-neutral-100 tracking-tight">THE FLY ASSET</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-neutral-300 hover:text-[#D4AF37] transition-colors duration-200 font-medium ${
                  location.pathname === link.path ? 'text-[#D4AF37]' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/contact">
              <Button
                className="bg-[#D4AF37] hover:bg-[#B8941F] text-[#0a0a0b] font-semibold px-6 py-2 transition-all duration-300"
              >
                Connect
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-neutral-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#0a0a0b] border-t border-neutral-800">
            <nav className="flex flex-col py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-neutral-300 hover:text-[#D4AF37] px-4 py-2 transition-colors duration-200 ${
                    location.pathname === link.path ? 'text-[#D4AF37]' : ''
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button
                    className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-[#0a0a0b] font-semibold"
                  >
                    Connect
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default DarkNavbar;
