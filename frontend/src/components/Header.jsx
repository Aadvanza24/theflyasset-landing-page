import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
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
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/#services' },
    { name: 'About', path: '/#about' },
    { name: 'Team', path: '/#team' },
    { name: 'Contact', path: '/#contact' }
  ];

  const scrollToSection = (e, path) => {
    if (path.includes('#')) {
      e.preventDefault();
      const sectionId = path.split('#')[1];
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="https://customer-assets.emergentagent.com/job_660d5179-119d-444e-bd85-65d7622ccd1e/artifacts/mc40ek90_WhatsApp%20Image%202026-03-02%20at%2011.34.05%20PM.jpeg"
              alt="The Fly Asset"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => scrollToSection(e, link.path)}
                className="text-[#0a1628] hover:text-[#D4AF37] transition-colors duration-200 font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              className="bg-[#D4AF37] hover:bg-[#B8941F] text-[#0a1628] font-semibold px-6 py-2 transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#0a1628]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <nav className="flex flex-col py-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={(e) => scrollToSection(e, link.path)}
                  className="text-[#0a1628] hover:text-[#D4AF37] px-4 py-2 transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
              <div className="px-4 pt-2">
                <Button
                  className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-[#0a1628] font-semibold"
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
