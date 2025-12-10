import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';
import { projectData } from '../utils/mockData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    unitType: '',
    message: ''
  });
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
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    // Format WhatsApp message
    const unitTypeText = {
      '3bhk-sq': '3 BHK + SQ',
      '3bhk-sq-max': '3 BHK + SQ MAX',
      '4bhk-sq': '4 BHK + SQ',
      '4bhk-sq-max': '4 BHK + SQ MAX',
      'not-sure': 'Not Sure'
    };

    let message = `*New Enquiry - Aurum Alumni Bliss*\n\n`;
    message += `*Name:* ${formData.name}\n`;
    message += `*Phone:* ${formData.phone}\n`;
    message += `*Email:* ${formData.email}\n`;
    if (formData.unitType) message += `*Interested In:* ${unitTypeText[formData.unitType]}\n`;
    if (formData.message) message += `*Message:* ${formData.message}\n`;
    message += `\nLooking forward to hearing from you.`;

    const phoneNumber = '919811707522'; // Remove spaces and special characters
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    toast.success('Redirecting to WhatsApp...');
    setFormData({ name: '', email: '', phone: '', unitType: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Get In Touch
          </h2>
          <p className="text-lg text-slate-600">
            Schedule a site visit or request more information about Bliss
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-8">
                  <CardTitle className="text-2xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="p-8 space-y-6">
                  {/* Phone Numbers */}
                  <div className="space-y-3">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                          <Phone className="h-6 w-6 text-slate-700" />
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-slate-500 mb-1">Call Us</p>
                        {projectData.contact.phones.map((phone, index) => (
                          <a
                            key={index}
                            href={`tel:${phone}`}
                            className="block text-slate-900 font-semibold hover:text-slate-700 transition-colors"
                          >
                            {phone}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center">
                        <Mail className="h-6 w-6 text-slate-700" />
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 mb-1">Email Us</p>
                      <a
                        href={`mailto:${projectData.contact.email}`}
                        className="text-slate-900 font-semibold hover:text-slate-700 transition-colors"
                      >
                        {projectData.contact.email}
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-slate-700" />
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 mb-1">Visit Our Office</p>
                      <p className="text-slate-900 font-semibold">
                        {projectData.contact.address}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card className="border-0 shadow-lg bg-gradient-to-r from-slate-50 to-blue-50/50">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Office Hours</h3>
                  <div className="space-y-2 text-slate-700">
                    <p><span className="font-semibold">Monday - Saturday:</span> 10:00 AM - 7:00 PM</p>
                    <p><span className="font-semibold">Sunday:</span> 10:00 AM - 5:00 PM</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="border-0 shadow-xl">
              <CardHeader className="p-8 pb-0">
                <CardTitle className="text-2xl text-slate-900">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="w-full"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      className="w-full"
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      className="w-full"
                      required
                    />
                  </div>

                  {/* Unit Type */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Interested In
                    </label>
                    <Select value={formData.unitType} onValueChange={handleSelectChange}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select unit type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="3bhk-sq">3 BHK + SQ</SelectItem>
                        <SelectItem value="3bhk-sq-max">3 BHK + SQ MAX</SelectItem>
                        <SelectItem value="4bhk-sq">4 BHK + SQ</SelectItem>
                        <SelectItem value="4bhk-sq-max">4 BHK + SQ MAX</SelectItem>
                        <SelectItem value="not-sure">Not Sure</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your requirements..."
                      className="w-full min-h-[120px]"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white py-6 text-base group"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
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

export default Contact;
