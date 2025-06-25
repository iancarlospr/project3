import React from 'react';
import { MapPin, Star } from 'lucide-react';

const FeaturedDestinations: React.FC = () => {
  const destinations = [
    {
      id: 1,
      name: 'US East Coast',
      image: 'https://images.pexels.com/photos/2157404/pexels-photo-2157404.jpeg',
      description: 'Explore historic harbors, charming coastal towns, and scenic lighthouses along America\'s eastern seaboard.',
      highlights: ['Historic Harbors', 'Coastal Towns', 'Lighthouse Tours', 'Seafood Adventures'],
      rating: 4.9
    },
    {
      id: 2,
      name: 'US Virgin Islands',
      image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg',
      description: 'Discover pristine beaches, coral reefs, and tropical paradise in these stunning Caribbean islands.',
      highlights: ['Crystal Waters', 'Coral Reefs', 'Beach Hopping', 'Island Culture'],
      rating: 5.0
    },
    {
      id: 3,
      name: 'Caribbean Islands',
      image: 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg',
      description: 'Uncover hidden gems, vibrant cultures, and breathtaking landscapes across the Caribbean archipelago.',
      highlights: ['Hidden Coves', 'Local Culture', 'Adventure Sports', 'Sunset Cruises'],
      rating: 4.8
    }
  ];

  return (
    <section id="destinations" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-pirata text-amber-500 mb-6">
            Legendary Destinations
          </h2>
          <p className="text-xl text-amber-100 font-crimson max-w-3xl mx-auto">
            Three distinct regions, countless adventures. Each destination offers its own 
            unique treasures and unforgettable experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="group relative overflow-hidden rounded-2xl bg-slate-700/50 backdrop-blur-sm border border-amber-500/20 hover:border-amber-500/40 transition-all duration-500 hover:scale-105"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                
                {/* Rating */}
                <div className="absolute top-4 right-4 flex items-center space-x-1 bg-amber-500/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <Star className="h-4 w-4 text-slate-900 fill-current" />
                  <span className="text-sm font-bold text-slate-900">{destination.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <MapPin className="h-5 w-5 text-amber-500" />
                  <h3 className="text-2xl font-pirata text-amber-400">{destination.name}</h3>
                </div>
                
                <p className="text-amber-100 font-crimson mb-4 leading-relaxed">
                  {destination.description}
                </p>

                {/* Highlights */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {destination.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="bg-amber-500/10 border border-amber-500/20 rounded-lg px-3 py-2 text-center"
                    >
                      <span className="text-sm font-crimson text-amber-200">{highlight}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-slate-900 font-bold py-3 px-6 rounded-full transition-all duration-300 transform group-hover:scale-105">
                  Explore Region
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;