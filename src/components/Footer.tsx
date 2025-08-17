import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-amber-400">The Inn Between Bar</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Experience authentic Italian cuisine in the heart of the city. 
              Fresh ingredients, traditional recipes, and warm hospitality.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-amber-400">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-amber-400 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-white transition-colors">
                  (123) 456-7890
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-amber-400 flex-shrink-0" />
                <a href="mailto:info@TheInnBetweenBar.com" className="text-gray-300 hover:text-white transition-colors">
                  info@TheInnBetweenBar.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-amber-400 flex-shrink-0 mt-1" />
                <address className="text-gray-300 not-italic">
                  123 Restaurant Street<br />
                  Downtown, NY 10001
                </address>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-amber-400">Hours</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock size={16} className="text-amber-400 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <div className="font-medium">Mon - Thu</div>
                  <div>11:00 AM - 10:00 PM</div>
                </div>
              </div>
              <div className="text-gray-300 text-sm ml-7">
                <div className="font-medium">Fri - Sat</div>
                <div>11:00 AM - 11:00 PM</div>
              </div>
              <div className="text-gray-300 text-sm ml-7">
                <div className="font-medium">Sunday</div>
                <div>12:00 PM - 9:00 PM</div>
              </div>
            </div>
          </div>

          {/* Social Media & Map */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-amber-400">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-amber-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-amber-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-amber-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
            </div>
            
            {/* Google Maps Embed */}
            <div className="mt-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2452.574821170589!2d-9.6371127!3d52.069265099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x484538a15aec1603%3A0x96e79c4ca60bc95c!2sThe%20Inn%20Between%20Bar%20%26%20Restaurant%20%26%20Galvins%20Bar!5e0!3m2!1sen!2stn!4v1755468001357!5m2!1sen!2stn"
                width="100%"
                height="150"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
                title="The Inn Between Bar Location"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 The Inn Between Bar Restaurant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;