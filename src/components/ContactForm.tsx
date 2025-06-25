import React, { useState } from 'react';
import { Mail, Phone, Calendar, Users, DollarSign, MessageSquare } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  experience: string;
  travelDates: string;
  groupSize: string;
  budget: string;
  specialRequests: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    experience: '',
    travelDates: '',
    groupSize: '',
    budget: '',
    specialRequests: ''
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const experiences = [
    'Sunset Treasure Hunt',
    'Caribbean Reef Explorer',
    'Historic Harbor Adventure',
    'Island Hopping Expedition',
    'Lighthouse Keeper\'s Tale',
    'Pirate\'s Legacy Tour',
    'Custom Adventure'
  ];

  const budgetRanges = [
    'Under $500',
    '$500 - $1,000',
    '$1,000 - $2,000',
    '$2,000 - $5,000',
    'Over $5,000'
  ];

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.experience) newErrors.experience = 'Please select an experience';
    if (!formData.groupSize.trim()) newErrors.groupSize = 'Group size is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      experience: '',
      travelDates: '',
      groupSize: '',
      budget: '',
      specialRequests: ''
    });
    
    setIsSubmitting(false);
    alert('Ahoy! Your message has been sent. We\'ll chart a course back to you within 24 hours!');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 to-amber-900/20 relative overflow-hidden">
      {/* Parchment background effect */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-amber-100"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, transparent 20%, rgba(139, 69, 19, 0.1) 21%, rgba(139, 69, 19, 0.1) 30%, transparent 31%), radial-gradient(circle at 80% 50%, transparent 20%, rgba(139, 69, 19, 0.1) 21%, rgba(139, 69, 19, 0.1) 30%, transparent 31%)'
        }}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-pirata text-amber-500 mb-6">
            Chart Your Adventure
          </h2>
          <p className="text-xl text-amber-100 font-crimson max-w-2xl mx-auto">
            Ready to embark on your next great adventure? Drop us a line and let's 
            plan something extraordinary together.
          </p>
        </div>

        <div className="bg-slate-800/80 backdrop-blur-sm border border-amber-500/30 rounded-3xl p-8 md:p-12 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Email */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-amber-300 font-crimson font-semibold mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-slate-700/50 border ${errors.name ? 'border-red-500' : 'border-amber-500/30'} rounded-lg text-amber-100 placeholder-amber-300/50 focus:outline-none focus:border-amber-500 transition-colors`}
                  placeholder="Your name"
                />
                {errors.name && <p className="text-red-400 text-sm mt-1 font-crimson">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-amber-300 font-crimson font-semibold mb-2">
                  Email *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-amber-500" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full pl-12 pr-4 py-3 bg-slate-700/50 border ${errors.email ? 'border-red-500' : 'border-amber-500/30'} rounded-lg text-amber-100 placeholder-amber-300/50 focus:outline-none focus:border-amber-500 transition-colors`}
                    placeholder="your@email.com"
                  />
                </div>
                {errors.email && <p className="text-red-400 text-sm mt-1 font-crimson">{errors.email}</p>}
              </div>
            </div>

            {/* Phone and Experience */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-amber-300 font-crimson font-semibold mb-2">
                  Phone *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-amber-500" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full pl-12 pr-4 py-3 bg-slate-700/50 border ${errors.phone ? 'border-red-500' : 'border-amber-500/30'} rounded-lg text-amber-100 placeholder-amber-300/50 focus:outline-none focus:border-amber-500 transition-colors`}
                    placeholder="(555) 123-4567"
                  />
                </div>
                {errors.phone && <p className="text-red-400 text-sm mt-1 font-crimson">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="experience" className="block text-amber-300 font-crimson font-semibold mb-2">
                  Preferred Experience *
                </label>
                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-slate-700/50 border ${errors.experience ? 'border-red-500' : 'border-amber-500/30'} rounded-lg text-amber-100 focus:outline-none focus:border-amber-500 transition-colors`}
                >
                  <option value="">Select an adventure</option>
                  {experiences.map((exp) => (
                    <option key={exp} value={exp}>{exp}</option>
                  ))}
                </select>
                {errors.experience && <p className="text-red-400 text-sm mt-1 font-crimson">{errors.experience}</p>}
              </div>
            </div>

            {/* Travel Dates and Group Size */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="travelDates" className="block text-amber-300 font-crimson font-semibold mb-2">
                  Travel Dates
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-amber-500" />
                  <input
                    type="text"
                    id="travelDates"
                    name="travelDates"
                    value={formData.travelDates}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 bg-slate-700/50 border border-amber-500/30 rounded-lg text-amber-100 placeholder-amber-300/50 focus:outline-none focus:border-amber-500 transition-colors"
                    placeholder="Flexible / March 2024"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="groupSize" className="block text-amber-300 font-crimson font-semibold mb-2">
                  Group Size *
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-amber-500" />
                  <input
                    type="text"
                    id="groupSize"
                    name="groupSize"
                    value={formData.groupSize}
                    onChange={handleChange}
                    className={`w-full pl-12 pr-4 py-3 bg-slate-700/50 border ${errors.groupSize ? 'border-red-500' : 'border-amber-500/30'} rounded-lg text-amber-100 placeholder-amber-300/50 focus:outline-none focus:border-amber-500 transition-colors`}
                    placeholder="2 adults, 1 child"
                  />
                </div>
                {errors.groupSize && <p className="text-red-400 text-sm mt-1 font-crimson">{errors.groupSize}</p>}
              </div>
            </div>

            {/* Budget Range */}
            <div>
              <label htmlFor="budget" className="block text-amber-300 font-crimson font-semibold mb-2">
                Budget Range
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-amber-500" />
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 bg-slate-700/50 border border-amber-500/30 rounded-lg text-amber-100 focus:outline-none focus:border-amber-500 transition-colors"
                >
                  <option value="">Select budget range</option>
                  {budgetRanges.map((range) => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Special Requests */}
            <div>
              <label htmlFor="specialRequests" className="block text-amber-300 font-crimson font-semibold mb-2">
                Special Requests
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-4 h-5 w-5 text-amber-500" />
                <textarea
                  id="specialRequests"
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  rows={4}
                  className="w-full pl-12 pr-4 py-3 bg-slate-700/50 border border-amber-500/30 rounded-lg text-amber-100 placeholder-amber-300/50 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                  placeholder="Tell us about any special occasions, dietary restrictions, accessibility needs, or specific interests..."
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-slate-900 font-bold py-4 px-12 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Sending Message...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;