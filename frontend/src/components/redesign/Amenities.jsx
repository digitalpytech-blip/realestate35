import React from 'react';
import { Card, CardContent } from '../ui/card';

const amenities = [
  { title: 'Swimming Pool', image: 'https://images.unsplash.com/photo-1580041065738-e72023775cdc?w=600&q=80', category: 'Sports' },
  { title: 'Gymnasium', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80', category: 'Fitness' },
  { title: 'Tennis Court', image: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=600&q=80', category: 'Sports' },
  { title: 'Kids Play Area', image: 'https://images.unsplash.com/photo-1587454436116-c10e5b09d88d?w=600&q=80', category: 'Recreation' },
  { title: 'Yoga Deck', image: 'https://images.unsplash.com/photo-1545389336-cf090694435e?w=600&q=80', category: 'Wellness' },
  { title: 'Clubhouse', image: 'https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?w=600&q=80', category: 'Social' },
  { title: 'Landscaped Gardens', image: 'https://images.unsplash.com/photo-1563714193017-5a5fb60bc02b?w=600&q=80', category: 'Nature' },
  { title: 'Jogging Track', image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&q=80', category: 'Fitness' },
];

const Amenities = () => {
  return (
    <section id="amenities" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Top-Tier Amenities Unveiled
            </h2>
            <p className="text-lg text-slate-300">
              Experience world-class facilities designed for your comfort
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => (
              <Card key={index} className="group overflow-hidden bg-slate-800 border-slate-700 hover:border-cyan-500 transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={amenity.image}
                    alt={amenity.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="inline-block text-xs font-semibold text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full mb-2">
                      {amenity.category}
                    </span>
                    <h3 className="text-lg font-bold text-white">{amenity.title}</h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-slate-800 rounded-2xl p-8 md:p-12 border border-slate-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-3xl font-bold text-cyan-400 mb-2">50+</p>
                <p className="text-slate-300">Premium Amenities</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-cyan-400 mb-2">24/7</p>
                <p className="text-slate-300">Security & Surveillance</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-cyan-400 mb-2">100%</p>
                <p className="text-slate-300">Power Backup</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
