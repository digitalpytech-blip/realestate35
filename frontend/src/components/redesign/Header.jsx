import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { Phone, Menu, X } from 'lucide-react';
import { projectData } from '../../utils/mockData';

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
        scrolled ? 'bg-slate-900 shadow-xl' : 'bg-slate-900/95 backdrop-blur-md'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src="https://customer-assets.emergentagent.com/job_pdf-landing-pro/artifacts/fgkq0s5d_medium.avif"
              alt="Aurum Alumni Bliss"
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <button onClick={() => scrollToSection('overview')} className="text-sm font-medium text-white/90 hover:text-cyan-400 transition-colors">
              About Us
            </button>
            <button onClick={() => scrollToSection('highlights')} className="text-sm font-medium text-white/90 hover:text-cyan-400 transition-colors">
              Highlights
            </button>
            <button onClick={() => scrollToSection('amenities')} className="text-sm font-medium text-white/90 hover:text-cyan-400 transition-colors">
              Amenities
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-sm font-medium text-white/90 hover:text-cyan-400 transition-colors">
              Price
            </button>
            <button onClick={() => scrollToSection('floor-plans')} className="text-sm font-medium text-white/90 hover:text-cyan-400 transition-colors">
              Floor Plan
            </button>
            <button onClick={() => scrollToSection('location')} className="text-sm font-medium text-white/90 hover:text-cyan-400 transition-colors">
              Location
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-sm font-medium text-white/90 hover:text-cyan-400 transition-colors">
              Gallery
            </button>
          </nav>

          {/* Contact */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href={`tel:${projectData.contact.phones[0]}`} className="flex items-center space-x-2 text-white/90 hover:text-cyan-400 transition-colors">
              <Phone className="h-4 w-4" />
              <span className="text-sm font-medium">{projectData.contact.phones[0]}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 bg-slate-800 border-t border-slate-700">
            <nav className="flex flex-col space-y-3">
              <button onClick={() => scrollToSection('overview')} className="text-left px-4 py-2 text-sm font-medium text-white/90 hover:bg-slate-700">
                About Us
              </button>
              <button onClick={() => scrollToSection('highlights')} className="text-left px-4 py-2 text-sm font-medium text-white/90 hover:bg-slate-700">
                Highlights
              </button>
              <button onClick={() => scrollToSection('amenities')} className="text-left px-4 py-2 text-sm font-medium text-white/90 hover:bg-slate-700">
                Amenities
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-left px-4 py-2 text-sm font-medium text-white/90 hover:bg-slate-700">
                Price
              </button>
              <button onClick={() => scrollToSection('floor-plans')} className="text-left px-4 py-2 text-sm font-medium text-white/90 hover:bg-slate-700">
                Floor Plan
              </button>
              <button onClick={() => scrollToSection('location')} className="text-left px-4 py-2 text-sm font-medium text-white/90 hover:bg-slate-700">
                Location
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-left px-4 py-2 text-sm font-medium text-white/90 hover:bg-slate-700">
                Gallery
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
