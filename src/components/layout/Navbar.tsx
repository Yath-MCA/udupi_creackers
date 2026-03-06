import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search, Sparkles } from 'lucide-react';
import { useCartStore } from '../../store/cartStore';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const totalItems = useCartStore((s) => s.getTotalItems());

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="bg-diwali-dark sticky top-0 z-50 shadow-lg border-b border-diwali-gold/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <Sparkles className="text-diwali-gold" size={28} />
            <span className="text-xl font-bold text-diwali-gold font-display">
              Udupi Crackers
            </span>
          </Link>

          {/* Desktop search */}
          <form
            onSubmit={handleSearch}
            className="hidden md:flex flex-1 max-w-lg mx-6"
          >
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search crackers..."
                className="w-full bg-gray-800 text-white placeholder-gray-400 border border-gray-600 rounded-full py-2 pl-4 pr-10 focus:outline-none focus:border-diwali-gold text-sm"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-diwali-gold"
              >
                <Search size={16} />
              </button>
            </div>
          </form>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/products"
              className="text-gray-300 hover:text-diwali-gold text-sm font-medium transition-colors"
            >
              Products
            </Link>
            <Link
              to="/cart"
              className="relative text-gray-300 hover:text-diwali-gold transition-colors"
              aria-label="Shopping cart"
            >
              <ShoppingCart size={22} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-diwali-red text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile: cart + burger */}
          <div className="flex md:hidden items-center gap-4">
            <Link to="/cart" className="relative text-gray-300">
              <ShoppingCart size={22} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-diwali-red text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-700 pt-3 space-y-3">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search crackers..."
                className="w-full bg-gray-800 text-white placeholder-gray-400 border border-gray-600 rounded-full py-2 pl-4 pr-10 focus:outline-none focus:border-diwali-gold text-sm"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              >
                <Search size={16} />
              </button>
            </form>
            <Link
              to="/products"
              onClick={() => setIsMenuOpen(false)}
              className="block text-gray-300 hover:text-diwali-gold py-1 text-sm font-medium"
            >
              Products
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
