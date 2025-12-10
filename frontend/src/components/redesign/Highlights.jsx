import React from 'react';
import { Check } from 'lucide-react';

const highlights = [
  "Spread across 7+ acres with only 528 exclusive residential units",
  "Spacious 3 BHK and 4 BHK apartments with servant quarters",
  "9-foot wide semi wrap-around balconies for breathtaking views",
  "Only 2 flats per floor ensuring maximum privacy",
  "All-weather temperature-controlled swimming pool",
  "Fully paid-up land with zero encumbrance",
  "Complete construction using advanced Mivan technology",
  "Gently rippling stream connecting nature and luxury",
  "On-site retail hub for daily conveniences",
  "10 minutes from Jewar Airport and Noida",
  "World-class sports amenities including tennis, badminton, and basketball courts",
  "Landscaped gardens with yoga park, pet park, and meditation spaces"
];

const Highlights = () => {
  return (
    <section id="highlights" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Key Highlights
            </h2>
            <p className="text-lg text-slate-600">
              Discover what makes Aurum Alumni Bliss exceptional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>
                <p className="text-slate-700 leading-relaxed pt-1">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
