import React from 'react';
import { MapPin, Clock, Car } from 'lucide-react';
import { projectData } from '../../utils/mockData';

const LocationAdvantage = () => {
  return (
    <section id="location" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Location Advantage
            </h2>
            <p className="text-lg text-slate-300">
              Strategically located for unparalleled connectivity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {projectData.location.map((loc, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">{loc.name}</h3>
                    <div className="flex items-center space-x-2 mb-2">
                      <Clock className="h-4 w-4 text-cyan-400" />
                      <span className="text-sm font-semibold text-cyan-400">{loc.distance}</span>
                    </div>
                    <p className="text-sm text-slate-400">{loc.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Google Map */}
          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
            <div className="aspect-video rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.7847845168886!2d77.48956087550064!3d28.45877897574654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc1f3c0000001%3A0x1234567890abcdef!2sSector%2022D%2C%20Greater%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Project Location Map"
              />
            </div>
            <div className="mt-6 text-center">
              <p className="text-slate-300 mb-2">
                <MapPin className="inline h-5 w-5 mr-2 text-cyan-400" />
                {projectData.contact.projectAddress}
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Sector+22D+Greater+Noida+YEIDA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-semibold mt-2"
              >
                <MapPin className="h-4 w-4 mr-1" />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationAdvantage;
