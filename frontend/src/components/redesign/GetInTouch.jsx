import React, { useState } from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Phone, Mail, MapPin, User, Home } from 'lucide-react';
import { toast } from 'sonner';
import { projectData } from '../../utils/mockData';

const GetInTouch = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', unitType: '', message: '' });
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
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error('Please fill in all required fields');
      return;
    }
    setIsSubmitting(true);
    const unitTypeText = { '3bhk-sq': '3 BHK + SQ', '3bhk-sq-max': '3 BHK + SQ MAX', '4bhk-sq': '4 BHK + SQ', '4bhk-sq-max': '4 BHK + SQ MAX', 'not-sure': 'Not Sure' };
    let message = `*New Enquiry - Aurum Alumni Bliss*\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email}\n`;
    if (formData.unitType) message += `*Interested In:* ${unitTypeText[formData.unitType]}\n`;
    if (formData.message) message += `*Message:* ${formData.message}\n`;
    message += `\nLooking forward to hearing from you.`;
    const phoneNumber = '918586946000';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    toast.success('Redirecting to WhatsApp...');
    setFormData({ name: '', email: '', phone: '', unitType: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-slate-300">
              We'd love to hear from you. Send us a message!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center">
                      <Phone className="h-6 w-6 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 mb-1">Call Us</p>
                      {projectData.contact.phones.map((phone, index) => (
                        <a key={index} href={`tel:${phone}`} className="block text-white font-semibold hover:text-cyan-400 transition-colors">
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center">
                      <Mail className="h-6 w-6 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 mb-1">Email Us</p>
                      <a href={`mailto:${projectData.contact.email}`} className="text-white font-semibold hover:text-cyan-400 transition-colors">
                        {projectData.contact.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 mb-1">Visit Our Office</p>
                      <p className="text-white font-semibold">{projectData.contact.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                <h4 className="text-lg font-semibold text-white mb-3">Office Hours</h4>
                <div className="space-y-2 text-slate-300">
                  <p><span className="font-semibold text-white">Monday - Saturday:</span> 10:00 AM - 7:00 PM</p>
                  <p><span className="font-semibold text-white">Sunday:</span> 10:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your Name *" className="pl-10 bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400" required />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email Address *" className="pl-10 bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400" required />
                  </div>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Phone Number *" className="pl-10 bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400" required />
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
                        <SelectItem value="not-sure">Not Sure</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Your Message..." className="min-h-[120px] bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400" />
                  <Button type="submit" disabled={isSubmitting} className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-6">
                    {isSubmitting ? 'SENDING...' : 'SUBMIT NOW'}
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

export default GetInTouch;
