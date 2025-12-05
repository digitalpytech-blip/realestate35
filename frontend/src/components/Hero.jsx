import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, MapPin } from 'lucide-react';
import { projectData } from '../utils/mockData';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background - Video for Mobile, Image for Desktop */}
      <div className="absolute inset-0">
        {/* Mobile Video Background */}
        <div className="lg:hidden absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://customer-assets.emergentagent.com/job_pdf-landing-pro/artifacts/j0nzdret_WhatsApp%20Video%202025-12-05%20at%2010.08.30%20AM.mp4" type="video/mp4" />
          </video>
          {/* Dark overlay for mobile video */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Desktop Image Background */}
        <div className="hidden lg:block absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519662978799-2f05096d3636?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmV8ZW58MHx8fHwxNzY0ODM1Njc2fDA&ixlib=rb-4.1.0&q=85"
            alt="Luxury Architecture"
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay for desktop image */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-slate-800/60 to-slate-900/70" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Developer Name */}
          <div className="inline-block mb-6">
            <span className="text-sm font-semibold tracking-wider text-slate-900 uppercase bg-white/90 backdrop-blur-sm px-6 py-2 rounded-full shadow-lg">
              {projectData.developer}
            </span>
          </div>

          {/* Project Name */}
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-tight text-white drop-shadow-2xl">
            {projectData.name}
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-white font-medium mb-4 tracking-wide drop-shadow-lg">
            {projectData.tagline}
          </p>

          {/* Subtitle */}
          <p className="text-lg text-white/90 mb-8 drop-shadow-md">
            {projectData.subtitle}
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed drop-shadow-md">
            {projectData.description}
          </p>

          {/* Location Badge */}
          <div className="flex items-center justify-center space-x-2 mb-12">
            <MapPin className="h-5 w-5 text-red-500" />
            <span className="text-sm text-white/90 drop-shadow-md">Sector-22D, YEIDA, Greater Noida</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-white hover:bg-white/90 text-slate-900 px-8 py-6 text-base font-semibold group shadow-xl"
            >
              Schedule Site Visit
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={() => {
                const element = document.getElementById('floor-plans');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-6 text-base font-semibold shadow-xl"
            >
              View Floor Plans
            </Button>
          </div>

          {/* RERA */}
          <div className="mt-16 text-xs text-white/70 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full inline-block">
            RERA No: {projectData.rera}
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default Hero;
