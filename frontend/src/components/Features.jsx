import React from 'react';
import { Card, CardContent } from './ui/card';
import { Home, Maximize2, Shield, Waves, Award, CheckCircle } from 'lucide-react';
import { projectData } from '../utils/mockData';

const iconMap = {
  Home,
  Maximize2,
  Shield,
  Waves,
  Award,
  CheckCircle
};

const Features = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Distinctive Features
          </h2>
          <p className="text-lg text-slate-600">
            Every detail crafted to perfection, every amenity designed for luxury living
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projectData.highlights.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border-slate-200 hover:border-slate-300 cursor-pointer"
              >
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center space-y-4">
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-100 to-blue-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-slate-700" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-900">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Highlights */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-slate-50 to-blue-50/50 rounded-3xl p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-900">Premium Construction</h3>
                <p className="text-slate-600">
                  Built with advanced Mivan technology ensuring superior strength, faster construction, and flawless finishing.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-900">Natural Serenity</h3>
                <p className="text-slate-600">
                  A gently rippling stream connects nature and luxury throughout the project, creating a peaceful ambiance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
