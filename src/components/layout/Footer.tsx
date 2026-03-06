import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle, Sparkles } from 'lucide-react';

export default function Footer() {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '919876543210';

  return (
    <footer className="bg-diwali-dark text-gray-300 border-t border-diwali-gold/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Sparkles className="text-diwali-gold" size={24} />
              <span className="text-lg font-bold text-diwali-gold font-display">
                Udupi Crackers
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Premium quality Diwali crackers and fireworks. Celebrate safely
              and brilliantly with our hand-picked selection.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-diwali-gold font-semibold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-diwali-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="hover:text-diwali-gold transition-colors"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=gift-boxes"
                  className="hover:text-diwali-gold transition-colors"
                >
                  Gift Boxes
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=kids-crackers"
                  className="hover:text-diwali-gold transition-colors"
                >
                  Kids' Crackers
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  className="hover:text-diwali-gold transition-colors"
                >
                  My Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-diwali-gold font-semibold mb-4 text-sm uppercase tracking-wider">
              Categories
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                ['flower-pots', '🌸 Flower Pots'],
                ['sparklers', '✨ Sparklers'],
                ['rockets', '🚀 Rockets'],
                ['bombs', '💥 Bombs'],
                ['kids-crackers', "🎈 Kids' Crackers"],
                ['gift-boxes', '🎁 Gift Boxes'],
              ].map(([slug, label]) => (
                <li key={slug}>
                  <Link
                    to={`/products?category=${slug}`}
                    className="hover:text-diwali-gold transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-diwali-gold font-semibold mb-4 text-sm uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone size={16} className="text-diwali-gold shrink-0 mt-0.5" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="text-diwali-gold shrink-0 mt-0.5" />
                <span>info@udupicrackers.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-diwali-gold shrink-0 mt-0.5" />
                <span>123 Festival Street, Udupi, Karnataka 576101</span>
              </li>
              <li>
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors mt-1"
                >
                  <MessageCircle size={16} />
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-700 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Udupi Crackers. All rights reserved.</p>
          <p>🎆 Celebrate safely. Follow all safety instructions.</p>
        </div>
      </div>
    </footer>
  );
}
