import React from 'react';
import { Shield, Users, Compass, Star, Award, Heart } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Expert Navigation',
      description: 'Over 15 years of maritime experience guiding adventurers safely through Caribbean waters.'
    },
    {
      icon: Users,
      title: 'Small Groups',
      description: 'Intimate experiences with personalized attention, never more than 15 adventurers per journey.'
    },
    {
      icon: Compass,
      title: 'Local Knowledge',
      description: 'Insider access to hidden gems and secret spots that only locals know about.'
    },
    {
      icon: Star,
      title: 'Premium Service',
      description: 'Luxury amenities and first-class service throughout your entire adventure.'
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized as the Caribbean\'s premier adventure guide by Travel & Leisure magazine.'
    },
    {
      icon: Heart,
      title: 'Passion Driven',
      description: 'Every journey is crafted with genuine love for the sea and dedication to unforgettable experiences.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      location: 'New York, NY',
      rating: 5,
      text: 'Michael showed us hidden coves and secret beaches we never would have found on our own. The sunset treasure hunt was magical!'
    },
    {
      name: 'Robert Chen',
      location: 'San Francisco, CA',
      rating: 5,
      text: 'The Caribbean reef exploration exceeded all expectations. Michael\'s knowledge of marine life is incredible.'
    },
    {
      name: 'Emily Rodriguez',
      location: 'Miami, FL',
      rating: 5,
      text: 'Our island hopping adventure was perfectly planned. Every detail was taken care of, allowing us to just enjoy the journey.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Why Choose Us */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-pirata text-amber-500 mb-6">
            Why Sail With Us
          </h2>
          <p className="text-xl text-amber-100 font-crimson max-w-3xl mx-auto">
            More than just a guide, Michael is your captain, storyteller, and gateway 
            to authentic Caribbean adventures that create lifelong memories.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-amber-500/20 hover:border-amber-500/40 transition-all duration-500 p-6 hover:scale-105"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-amber-500/10 rounded-full border border-amber-500/30">
                  <feature.icon className="h-6 w-6 text-amber-500" />
                </div>
                <h3 className="text-xl font-pirata text-amber-400">{feature.title}</h3>
              </div>
              <p className="text-amber-100 font-crimson leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-pirata text-amber-500 mb-4">
            Tales from Fellow Adventurers
          </h3>
          <p className="text-lg text-amber-100 font-crimson">
            Don't just take our word for it - hear from those who've sailed with us
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-100/10 to-amber-50/5 backdrop-blur-sm border border-amber-500/20 p-6 hover:border-amber-500/40 transition-all duration-500"
            >
              {/* Quote decoration */}
              <div className="absolute top-4 right-4 text-6xl text-amber-500/20 font-serif">"</div>
              
              {/* Stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-500 fill-current" />
                ))}
              </div>

              <p className="text-amber-100 font-crimson italic mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="border-t border-amber-500/20 pt-4">
                <p className="text-amber-400 font-semibold">{testimonial.name}</p>
                <p className="text-amber-200 text-sm">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;