import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { projectData } from '../../utils/mockData';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <img
              src="https://customer-assets.emergentagent.com/job_pdf-landing-pro/artifacts/6t2qzgj5_Untitled%20design%20%2822%29.png"
              alt="Aurum Alumni Bliss"
              className="h-12 w-auto mb-6"
            />
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              {projectData.developer} presents {projectData.name} - Transforming addresses into landmarks.
            </p>
            <p className="text-xs text-slate-500">RERA: {projectData.rera}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><button onClick={() => scrollToSection('overview')} className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">About Us</button></li>
              <li><button onClick={() => scrollToSection('highlights')} className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Highlights</button></li>
              <li><button onClick={() => scrollToSection('amenities')} className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Amenities</button></li>
              <li><button onClick={() => scrollToSection('pricing')} className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Pricing</button></li>
              <li><button onClick={() => scrollToSection('floor-plans')} className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Floor Plans</button></li>
              <li><button onClick={() => scrollToSection('location')} className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Location</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    {projectData.contact.phones.map((phone, index) => (
                      <a key={index} href={`tel:${phone}`} className="block text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <a href={`mailto:${projectData.contact.email}`} className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                    {projectData.contact.email}
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-400 text-sm">{projectData.contact.address}</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Project Location */}
          <div>
            <h3 className="text-lg font-bold mb-6">Project Location</h3>
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-cyan-400 flex-shrink-0 mt-0.5" />
              <p className="text-slate-400 text-sm leading-relaxed">
                {projectData.contact.projectAddress}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} CitiBricks. All rights reserved.
            </p>
            <p className="text-xs text-slate-600 text-center">
              Disclaimer: Information is representational and subject to change. Please refer to RERA website for detailed information.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
