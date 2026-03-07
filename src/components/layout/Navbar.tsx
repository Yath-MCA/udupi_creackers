import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Phone, Instagram, Facebook } from 'lucide-react';
import { useCartStore } from '../../store/cartStore';
import BrandIdentity from './BrandIdentity';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { getTotalItems } = useCartStore();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Categories', path: '/categories' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 border-b border-indigo-100 bg-white/95 text-gray-900 shadow-sm backdrop-blur">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="max-w-[220px] sm:max-w-none">
            <BrandIdentity size="sm" showTagline={false} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`transition-colors duration-300 hover:text-indigo-700 ${
                  isActive(item.path) ? 'text-indigo-700' : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Social Icons */}
            <div className="hidden lg:flex items-center space-x-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 transition-colors hover:text-indigo-700">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 transition-colors hover:text-indigo-700">
                <Facebook size={20} />
              </a>
              <a href="tel:+919876543210" className="text-gray-600 transition-colors hover:text-emerald-600">
                <Phone size={20} />
              </a>
            </div>

            {/* Cart */}
            <Link to="/cart" className="relative text-gray-700 transition-colors hover:text-indigo-700">
              <ShoppingCart size={24} />
              {getTotalItems() > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-xs text-white">
                  {getTotalItems()}
                </span>
              )}
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 transition-colors hover:text-indigo-700 md:hidden"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="border-t border-indigo-100 py-4 md:hidden">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 transition-colors duration-300 hover:text-indigo-700 ${
                  isActive(item.path) ? 'text-indigo-700' : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4 flex items-center space-x-4 border-t border-indigo-100 pt-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 transition-colors hover:text-indigo-700">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 transition-colors hover:text-indigo-700">
                <Facebook size={20} />
              </a>
              <a href="tel:+919876543210" className="text-gray-600 transition-colors hover:text-emerald-600">
                <Phone size={20} />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
