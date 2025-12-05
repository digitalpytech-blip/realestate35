import React from 'react';
import { Card, CardContent } from './ui/card';
import { MapPin, Clock } from 'lucide-react';
import { projectData } from '../utils/mockData';

const Location = () => {
  return (
    <section id="location" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Strategic Location
          </h2>
          <p className="text-lg text-slate-600">
            Perfectly positioned for connectivity and convenience
          </p>
        </div>

        {/* Location Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {projectData.location.map((loc, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 border-slate-200 hover:border-slate-300 overflow-hidden"
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-100 to-red-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <MapPin className="h-7 w-7 text-slate-700" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{loc.name}</h3>
                    <div className="flex items-center space-x-2 mb-3">
                      <Clock className="h-4 w-4 text-slate-500" />
                      <span className="text-sm font-semibold text-slate-700">{loc.distance}</span>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">{loc.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Map Section with Image */}
        <div className="max-w-6xl mx-auto">
          <Card className="border-0 shadow-xl overflow-hidden">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1560448205-d82bf18b9bcf?w=1200&q=80" 
                alt="City View"
                className="w-full h-full object-cover absolute inset-0"
              />
              <div className="relative bg-gradient-to-r from-white/95 to-white/85 backdrop-blur-sm p-12 md:p-16">
                <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-8">
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-slate-900 mb-4">
                      Your Gateway to Everything
                    </h3>
                    <p className="text-lg text-slate-600 mb-6">
                      Located in the heart of YEIDA's premium corridor, with seamless connectivity to:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full bg-slate-900" />
                        <span className="text-slate-700">Pari Chowk Metro Station</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full bg-slate-900" />
                        <span className="text-slate-700">Fortis, Kailash & Felix Hospitals</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full bg-slate-900" />
                        <span className="text-slate-700">Grand Venice & Mall of India</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full bg-slate-900" />
                        <span className="text-slate-700">Leading IT Parks (TCS, Infosys, VIVO)</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full bg-slate-900" />
                        <span className="text-slate-700">Top Educational Institutions</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1616593969747-4797dc75033e?w=400&q=80" 
                        alt="Balcony View"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Address */}
        <div className="max-w-6xl mx-auto mt-12 text-center">
          <p className="text-slate-600">
            <MapPin className="inline h-5 w-5 mr-2 text-red-600" />
            {projectData.contact.projectAddress}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Location;
