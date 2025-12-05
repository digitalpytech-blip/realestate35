import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Phone, Mail, Menu, X } from 'lucide-react';
import { projectData } from '../utils/mockData';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src="https://customer-assets.emergentagent.com/job_3f244764-57ce-4562-8039-fea433c94dc5/artifacts/jo4653ri_CitiBricks-Logo.webp"
              alt="CitiBricks Logo"
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('amenities')}
              className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
            >
              Amenities
            </button>
            <button
              onClick={() => scrollToSection('location')}
              className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
            >
              Location
            </button>
            <button
              onClick={() => scrollToSection('floor-plans')}
              className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
            >
              Floor Plans
            </button>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href={`tel:${projectData.contact.phones[0]}`} className="flex items-center space-x-2 text-sm text-slate-700 hover:text-slate-900 transition-colors">
              <Phone className="h-4 w-4" />
              <span>{projectData.contact.phones[0]}</span>
            </a>
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-slate-900 hover:bg-slate-800 text-white"
            >
              Enquire Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 bg-white border-t">
            <nav className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection('home')}
                className="text-left px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="text-left px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('amenities')}
                className="text-left px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                Amenities
              </button>
              <button
                onClick={() => scrollToSection('location')}
                className="text-left px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                Location
              </button>
              <button
                onClick={() => scrollToSection('floor-plans')}
                className="text-left px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                Floor Plans
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                Contact
              </button>
              <div className="px-4 pt-2">
                <a href={`tel:${projectData.contact.phones[0]}`} className="flex items-center space-x-2 text-sm text-slate-700 py-2">
                  <Phone className="h-4 w-4" />
                  <span>{projectData.contact.phones[0]}</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
