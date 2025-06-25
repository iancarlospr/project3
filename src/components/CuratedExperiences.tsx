import React from 'react';
import { Clock, Users, Star, Compass } from 'lucide-react';

const CuratedExperiences: React.FC = () => {
  const experiences = [
    {
      id: 1,
      title: 'Sunset Treasure Hunt',
      image: 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg',
      duration: '4 hours',
      difficulty: 'Easy',
      groupSize: '2-8 people',
      price: '$149',
      highlights: ['Golden hour photography', 'Hidden beach discovery', 'Local legends'],
      description: 'Follow ancient maps to discover secluded beaches as the sun paints the Caribbean sky.'
    },
    {
      id: 2,
      title: 'Caribbean Reef Explorer',
      image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg',
      duration: '6 hours',
      difficulty: 'Moderate',
      groupSize: '4-12 people',
      price: '$199',
      highlights: ['Coral reef snorkeling', 'Marine life encounters', 'Underwater photography'],
      description: 'Dive into crystal waters to explore vibrant coral reefs teeming with tropical marine life.'
    },
    {
      id: 3,
      title: 'Historic Harbor Adventure',
      image: 'https://images.pexels.com/photos/2157404/pexels-photo-2157404.jpeg',
      duration: '5 hours',
      difficulty: 'Easy',
      groupSize: '2-10 people',
      price: '$129',
      highlights: ['Colonial history', 'Maritime museums', 'Traditional sailing'],
      description: 'Step back in time exploring historic ports and learning tales of maritime adventures.'
    },
    {
      id: 4,
      title: 'Island Hopping Expedition',
      image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg',
      duration: '8 hours',
      difficulty: 'Moderate',
      groupSize: '6-15 people',
      price: '$279',
      highlights: ['Multiple islands', 'Local cuisine', 'Cultural immersion'],
      description: 'Discover multiple islands in one epic day, each with unique character and hidden treasures.'
    },
    {
      id: 5,
      title: 'Lighthouse Keeper\'s Tale',
      image: 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg',
      duration: '3 hours',
      difficulty: 'Easy',
      groupSize: '2-6 people',
      price: '$99',
      highlights: ['Historic lighthouses', 'Keeper stories', 'Coastal views'],
      description: 'Climb historic lighthouses and hear fascinating tales of the brave keepers who guided ships to safety.'
    },
    {
      id: 6,
      title: 'Pirate\'s Legacy Tour',
      image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg',
      duration: '7 hours',
      difficulty: 'Challenging',
      groupSize: '4-8 people',
      price: '$229',
      highlights: ['Pirate history', 'Treasure hunting', 'Cave exploration'],
      description: 'Follow in the footsteps of legendary pirates, exploring hidden caves and searching for lost treasures.'
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-400 bg-green-400/10';
      case 'Moderate': return 'text-yellow-400 bg-yellow-400/10';
      case 'Challenging': return 'text-red-400 bg-red-400/10';
      default: return 'text-amber-400 bg-amber-400/10';
    }
  };

  return (
    <section id="experiences" className="py-20 bg-gradient-to-br from-slate-900 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-pirata text-amber-500 mb-6">
            Curated Adventures
          </h2>
          <p className="text-xl text-amber-100 font-crimson max-w-3xl mx-auto">
            Hand-picked experiences that reveal the true spirit of adventure. 
            Each journey is crafted to create memories that last a lifetime.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience) => (
            <div
              key={experience.id}
              className="group relative overflow-hidden rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-amber-500/20 hover:border-amber-500/40 transition-all duration-500 hover:scale-105"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={experience.image}
                  alt={experience.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
                
                {/* Price */}
                <div className="absolute top-4 right-4 bg-amber-500 text-slate-900 font-bold px-3 py-1 rounded-full">
                  {experience.price}
                </div>

                {/* Difficulty */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-semibold ${getDifficultyColor(experience.difficulty)}`}>
                  {experience.difficulty}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-pirata text-amber-400 mb-2">{experience.title}</h3>
                <p className="text-amber-100 font-crimson text-sm mb-4 leading-relaxed">
                  {experience.description}
                </p>

                {/* Details */}
                <div className="flex items-center space-x-4 mb-4 text-sm text-amber-200">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{experience.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{experience.groupSize}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-amber-300 mb-2">Highlights:</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.highlights.map((highlight, index) => (
                      <span
                        key={index}
                        className="text-xs bg-amber-500/10 border border-amber-500/20 rounded-full px-2 py-1 text-amber-200"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-slate-900 font-bold py-3 px-6 rounded-full transition-all duration-300 transform group-hover:scale-105">
                  Reserve Your Adventure
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CuratedExperiences;