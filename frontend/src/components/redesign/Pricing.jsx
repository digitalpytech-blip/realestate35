import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Check } from 'lucide-react';
import { toast } from 'sonner';
import { projectData } from '../../utils/mockData';

const Pricing = () => {
  const handleInterested = (planType) => {
    const message = `*Interested in ${planType}*\n\nProject: Aurum Alumni Bliss\nLocation: Sector-22D, YEIDA, Greater Noida\n\nI would like to know more about pricing and availability.`;
    const whatsappUrl = `https://wa.me/918586946000?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    toast.success('Redirecting to WhatsApp...');
  };

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Unlock The Luxury
            </h2>
            <p className="text-lg text-slate-600">
              Choose from our spacious configurations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectData.floorPlans.map((plan, index) => (
              <Card key={index} className="overflow-hidden border-2 border-slate-200 hover:border-cyan-500 transition-all duration-300 hover:shadow-2xl">
                <CardHeader className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-8">
                  <CardTitle className="text-3xl font-bold">{plan.type}</CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="flex items-baseline space-x-2 mb-4">
                      <span className="text-4xl font-bold text-slate-900">{plan.carpetArea}</span>
                      <span className="text-slate-600">sq. ft.</span>
                    </div>
                    <p className="text-sm text-slate-500">Carpet Area</p>
                    <div className="mt-2 pt-2 border-t border-slate-200">
                      <p className="text-2xl font-semibold text-slate-700">{plan.builtUpArea} sq. ft.</p>
                      <p className="text-xs text-slate-500">Built-Up Area</p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Check className="h-5 w-5 text-cyan-500 flex-shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3">
                    <Button
                      onClick={() => handleInterested(plan.type)}
                      className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-6"
                    >
                      INTERESTED
                    </Button>
                    <p className="text-center text-xs text-slate-500">Click to get pricing details via WhatsApp</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-4">Special offers and flexible payment plans available</p>
            <Button
              onClick={() => document.getElementById('quick-enquiry')?.scrollIntoView({ behavior: 'smooth' })}
              size="lg"
              variant="outline"
              className="border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white"
            >
              SCHEDULE SITE VISIT
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
