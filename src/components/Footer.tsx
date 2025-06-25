import React from 'react';
import { Compass, Mail, Phone, MapPin, Anchor } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Compass className="h-8 w-8 text-amber-500 animate-pulse" />
              <h3 className="text-xl font-pirata text-amber-500">Wandering with Michael</h3>
            </div>
            <p className="text-amber-100 font-crimson leading-relaxed">
              Your trusted guide to extraordinary Caribbean and East Coast adventures. 
              Creating unforgettable memories one voyage at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-pirata text-amber-400">Quick Links</h4>
            <ul className="space-y-2">
              {['Destinations', 'Experiences', 'About', 'Contact', 'Reviews'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-amber-100 hover:text-amber-500 transition-colors font-crimson"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-pirata text-amber-400">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-500" />
                <span className="text-amber-100 font-crimson">michael@wanderingwithmichael.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-500" />
                <span className="text-amber-100 font-crimson">(555) 123-SAIL</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-amber-500" />
                <span className="text-amber-100 font-crimson">Caribbean & US East Coast</span>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-4">
            <h4 className="text-lg font-pirata text-amber-400">Certifications</h4>
            <div className="space-y-2 text-sm text-amber-100 font-crimson">
              <p>USCG Licensed Captain</p>
              <p>PADI Dive Master</p>
              <p>First Aid & CPR Certified</p>
              <p>Travel & Leisure Award Winner</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-amber-500/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-amber-100 font-crimson text-sm">
            © 2024 Wandering with Michael. All rights reserved.
          </p>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <Anchor className="h-5 w-5 text-amber-500/60" />
            <span className="text-amber-100/60 font-crimson text-sm">
              Crafted with passion for adventure
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;