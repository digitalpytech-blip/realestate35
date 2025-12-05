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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-red-400/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Developer Name */}
          <div className="inline-block mb-6">
            <span className="text-sm font-semibold tracking-wider text-slate-600 uppercase bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full shadow-sm">
              {projectData.developer}
            </span>
          </div>

          {/* Project Name */}
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
              {projectData.name}
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-slate-700 font-medium mb-4 tracking-wide">
            {projectData.tagline}
          </p>

          {/* Subtitle */}
          <p className="text-lg text-slate-600 mb-8">
            {projectData.subtitle}
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed">
            {projectData.description}
          </p>

          {/* Location Badge */}
          <div className="flex items-center justify-center space-x-2 mb-12">
            <MapPin className="h-5 w-5 text-red-600" />
            <span className="text-sm text-slate-600">Sector-22D, YEIDA, Greater Noida</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-6 text-base group"
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
              className="border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white px-8 py-6 text-base"
            >
              View Floor Plans
            </Button>
          </div>

          {/* RERA */}
          <div className="mt-16 text-xs text-slate-500">
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
