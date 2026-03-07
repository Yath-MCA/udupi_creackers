import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, MessageCircle } from 'lucide-react';
import BrandIdentity from './BrandIdentity';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-indigo-100 bg-gradient-to-br from-orange-50 via-white to-emerald-50 text-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <BrandIdentity size="sm" />
            </div>
            <p className="mb-4 text-gray-600">
              Your trusted destination for premium quality crackers and fireworks. 
              Celebrate festivals with joy and safety!
            </p>
            <div className="flex space-x-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-indigo-100 p-2 text-indigo-700 transition-colors hover:bg-indigo-200"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-indigo-100 p-2 text-indigo-700 transition-colors hover:bg-indigo-200"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-indigo-100 p-2 text-indigo-700 transition-colors hover:bg-indigo-200"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-indigo-900">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-600 transition-colors hover:text-indigo-700">Home</a></li>
              <li><a href="/products" className="text-gray-600 transition-colors hover:text-indigo-700">All Products</a></li>
              <li><a href="/categories" className="text-gray-600 transition-colors hover:text-indigo-700">Categories</a></li>
              <li><a href="/about" className="text-gray-600 transition-colors hover:text-indigo-700">About Us</a></li>
              <li><a href="/contact" className="text-gray-600 transition-colors hover:text-indigo-700">Contact</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-indigo-900">Categories</h3>
            <ul className="space-y-2">
              <li><a href="/products?category=flower-pots" className="text-gray-600 transition-colors hover:text-indigo-700">Flower Pots</a></li>
              <li><a href="/products?category=sparklers" className="text-gray-600 transition-colors hover:text-indigo-700">Sparklers</a></li>
              <li><a href="/products?category=rockets" className="text-gray-600 transition-colors hover:text-indigo-700">Rockets</a></li>
              <li><a href="/products?category=bombs" className="text-gray-600 transition-colors hover:text-indigo-700">Bombs</a></li>
              <li><a href="/products?category=kids-crackers" className="text-gray-600 transition-colors hover:text-indigo-700">Kids Crackers</a></li>
              <li><a href="/products?category=gift-boxes" className="text-gray-600 transition-colors hover:text-indigo-700">Gift Boxes</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-indigo-900">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-indigo-700" />
                <span className="text-gray-600">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-indigo-700" />
                <span className="text-gray-600">info@dipawalicrackers.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-indigo-700" />
                <span className="text-gray-600">123 Festival Street, Chennai, Tamil Nadu 600001</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-indigo-100 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">
              © 2026 Sri Udupi Krishna Crackers. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="text-sm text-gray-600 transition-colors hover:text-indigo-700">Privacy Policy</a>
              <a href="/terms" className="text-sm text-gray-600 transition-colors hover:text-indigo-700">Terms of Service</a>
              <a href="/safety" className="text-sm text-gray-600 transition-colors hover:text-indigo-700">Safety Guidelines</a>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919876543210?text=Hi%20I%20would%20like%20to%20inquire%20about%20your%20crackers"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 z-50 hover:scale-110"
      >
        <MessageCircle size={24} />
      </a>
    </footer>
  );
};

export default Footer;
