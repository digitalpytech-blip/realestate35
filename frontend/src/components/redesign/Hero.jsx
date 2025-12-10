import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Card, CardContent } from '../ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { MapPin, Phone, Mail, User, Home, Download } from 'lucide-react';
import { toast } from 'sonner';
import { projectData } from '../../utils/mockData';
import HeroSlider from '../HeroSlider';

const Hero = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', unitType: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value) => {
    setFormData(prev => ({ ...prev, unitType: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      toast.error('Please fill in required fields');
      return;
    }
    setIsSubmitting(true);
    const unitTypeText = { '3bhk-sq': '3 BHK + SQ', '3bhk-sq-max': '3 BHK + SQ MAX', '4bhk-sq': '4 BHK + SQ', '4bhk-sq-max': '4 BHK + SQ MAX' };
    let message = `*New Enquiry - Aurum Alumni Bliss*\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n`;
    if (formData.email) message += `*Email:* ${formData.email}\n`;
    if (formData.unitType) message += `*Interested In:* ${unitTypeText[formData.unitType]}\n`;
    message += `\nI would like to book a site visit.`;
    const whatsappUrl = `https://wa.me/919811707522?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    toast.success('Redirecting to WhatsApp...');
    setFormData({ name: '', phone: '', email: '', unitType: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="lg:hidden absolute inset-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="https://customer-assets.emergentagent.com/job_pdf-landing-pro/artifacts/j0nzdret_WhatsApp%20Video%202025-12-05%20at%2010.08.30%20AM.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 to-slate-800/80" />
        </div>
        <div className="hidden lg:block">
          <HeroSlider />
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="text-left">
            <div className="inline-block mb-4">
              <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase px-4 py-2 bg-cyan-400/10 rounded-full border border-cyan-400/30">
                {projectData.developer} NEW LAUNCH
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight text-white">
              {projectData.name}
            </h1>
            <div className="inline-flex items-center space-x-2 mb-6 bg-cyan-500 px-4 py-2 rounded">
              <MapPin className="h-4 w-4 text-white" />
              <span className="text-sm font-bold text-white">At Sector-22D, YEIDA, Greater Noida</span>
            </div>
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-white rounded-full" />
                <span className="text-white text-base">Prime Location</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-white rounded-full" />
                <span className="text-white text-base">Only 2 Flats Per Floor</span>
              </div>
            </div>
            <div className="bg-gradient-to-r from-amber-600 to-amber-800 border-2 border-dashed border-amber-400 rounded-xl p-6 mb-6">
              <p className="text-white font-bold text-lg mb-2">EOI Window Now Open</p>
              <p className="text-white/90 text-sm">Avail Exclusive Launch Offers</p>
            </div>
            <div className="mb-8">
              <p className="text-white/90 text-lg mb-2">Ultra-Luxury 3 & 4 BHK Apartments</p>
              <div className="bg-slate-800/80 inline-block px-6 py-3 rounded-lg">
                <p className="text-sm text-white/70 mb-1">STARTING AT:</p>
                <p className="text-3xl font-bold text-white">₹ 3.20 CR*</p>
              </div>
            </div>
            <div className="hidden md:grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <p className="text-2xl font-bold text-white">7+ Acres</p>
                <p className="text-sm text-white/70">Premium Land</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <p className="text-2xl font-bold text-white">528 Units</p>
                <p className="text-sm text-white/70">Exclusive Living</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <p className="text-2xl font-bold text-white">3/4 BHK</p>
                <p className="text-sm text-white/70">Configurations</p>
              </div>
            </div>
            <div className="hidden lg:flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-4">
              <Button onClick={() => document.getElementById('quick-enquiry')?.scrollIntoView({ behavior: 'smooth' })} size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold px-8 py-6">
                BOOK A SITE VISIT !
              </Button>
              <Button onClick={() => document.getElementById('quick-enquiry')?.scrollIntoView({ behavior: 'smooth' })} size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-slate-900 font-bold px-8 py-6">
                QUICK ENQUIRY !
              </Button>
            </div>
            <Button variant="link" className="hidden lg:inline-flex text-cyan-400 hover:text-cyan-300">
              <Download className="h-4 w-4 mr-2" />
              DOWNLOAD BROCHURE
            </Button>
            <p className="text-xs text-white/50 mt-4">RERA No: {projectData.rera}</p>
          </div>

          {/* Right Form - Now visible on mobile too */}
          <div className="w-full">
            <Card className="bg-slate-800/90 backdrop-blur-lg border-slate-700 shadow-2xl">
              <CardContent className="p-6 lg:p-8">
                <div className="text-center mb-6">
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">Book a Site Visit</h3>
                  <p className="text-sm text-slate-400">Fill the form and we'll get back to you</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4" id="quick-enquiry">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your Name *" className="pl-10 bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400" required />
                  </div>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Phone Number *" className="pl-10 bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400" required />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email Address" className="pl-10 bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400" />
                  </div>
                  <div className="relative">
                    <Home className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 z-10" />
                    <Select value={formData.unitType} onValueChange={handleSelectChange}>
                      <SelectTrigger className="pl-10 bg-slate-700/50 border-slate-600 text-white">
                        <SelectValue placeholder="Select Configuration" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-700">
                        <SelectItem value="3bhk-sq">3 BHK + SQ</SelectItem>
                        <SelectItem value="3bhk-sq-max">3 BHK + SQ MAX</SelectItem>
                        <SelectItem value="4bhk-sq">4 BHK + SQ</SelectItem>
                        <SelectItem value="4bhk-sq-max">4 BHK + SQ MAX</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button type="submit" disabled={isSubmitting} className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-6">
                    {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
