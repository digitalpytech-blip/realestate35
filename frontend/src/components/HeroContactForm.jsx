import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Phone, Mail, User, Home } from 'lucide-react';
import { toast } from 'sonner';

const HeroContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    unitType: ''
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
    
    if (!formData.name || !formData.phone) {
      toast.error('Please fill in required fields');
      return;
    }

    setIsSubmitting(true);

    // Format WhatsApp message
    const unitTypeText = {
      '3bhk-sq': '3 BHK + SQ',
      '3bhk-sq-max': '3 BHK + SQ MAX',
      '4bhk-sq': '4 BHK + SQ',
      '4bhk-sq-max': '4 BHK + SQ MAX'
    };

    let message = `*New Enquiry - Aurum Alumni Bliss*\n\n`;
    message += `*Name:* ${formData.name}\n`;
    message += `*Phone:* ${formData.phone}\n`;
    if (formData.email) message += `*Email:* ${formData.email}\n`;
    if (formData.unitType) message += `*Interested In:* ${unitTypeText[formData.unitType]}\n`;
    message += `\nI would like to know more about Aurum Alumni Bliss project.`;

    const phoneNumber = '919811707522'; // Remove spaces and special characters
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    toast.success('Redirecting to WhatsApp...');
    setFormData({ name: '', phone: '', email: '', unitType: '' });
    setIsSubmitting(false);
  };

  return (
    <Card className="w-full max-w-md bg-white/95 backdrop-blur-lg shadow-2xl border-0">
      <CardContent className="p-6">
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-slate-900 mb-2">Get a Call Back</h3>
          <p className="text-sm text-slate-600">Share your details and we'll reach out to you</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Full Name *"
              className="pl-10"
              required
            />
          </div>

          {/* Phone */}
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Phone Number *"
              className="pl-10"
              required
            />
          </div>

          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email Address"
              className="pl-10"
            />
          </div>

          {/* Unit Type */}
          <div className="relative">
            <Home className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 z-10" />
            <Select value={formData.unitType} onValueChange={handleSelectChange}>
              <SelectTrigger className="pl-10">
                <SelectValue placeholder="Select Configuration" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="3bhk-sq">3 BHK + SQ</SelectItem>
                <SelectItem value="3bhk-sq-max">3 BHK + SQ MAX</SelectItem>
                <SelectItem value="4bhk-sq">4 BHK + SQ</SelectItem>
                <SelectItem value="4bhk-sq-max">4 BHK + SQ MAX</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-slate-900 hover:bg-slate-800 text-white py-6"
          >
            {isSubmitting ? 'Submitting...' : 'Request Call Back'}
          </Button>
        </form>

        <p className="text-xs text-slate-500 text-center mt-4">
          By submitting, you agree to our terms and privacy policy
        </p>
      </CardContent>
    </Card>
  );
};

export default HeroContactForm;
