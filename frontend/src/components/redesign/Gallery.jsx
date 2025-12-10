import React from 'react';

const galleryImages = [
  'https://images.unsplash.com/photo-1623051786509-57224cdc43e1?w=800&q=80',
  'https://images.unsplash.com/photo-1686056040370-b5e5c06c4273?w=800&q=80',
  'https://images.unsplash.com/photo-1580041065738-e72023775cdc?w=800&q=80',
  'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
  'https://images.unsplash.com/photo-1563714193017-5a5fb60bc02b?w=800&q=80',
  'https://images.unsplash.com/photo-1616593969747-4797dc75033e?w=800&q=80',
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Gallery
            </h2>
            <p className="text-lg text-slate-600">
              Explore the beauty and elegance of Aurum Alumni Bliss
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-semibold">View Image</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
