import { Link } from 'react-router-dom';
import { ShoppingCart, MessageCircle, Shield, Truck, Star, ChevronRight } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/product/ProductCard';

export default function HomePage() {
  const featuredProducts = products.filter((p) => p.featured);
  const bestSellers = products.filter((p) => p.bestSeller);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-diwali-dark via-diwali-maroon to-diwali-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-6xl animate-float">🎆</div>
          <div className="absolute top-20 right-20 text-5xl animate-sparkle">✨</div>
          <div className="absolute bottom-20 left-1/4 text-4xl animate-float">🎇</div>
          <div className="absolute bottom-10 right-1/3 text-5xl animate-sparkle">🌟</div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center">
            <p className="text-diwali-gold font-semibold tracking-widest text-sm uppercase mb-3">
              🎆 Premium Quality Fireworks
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-white font-display leading-tight">
              Celebrate Diwali with
              <br />
              <span className="text-diwali-gold">Udupi Crackers</span>
            </h1>
            <p className="text-gray-300 mt-4 text-lg max-w-xl mx-auto">
              Discover our curated collection of premium crackers and fireworks.
              Safe, vibrant, and perfect for every celebration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 bg-diwali-gold hover:bg-diwali-orange text-diwali-dark font-bold px-8 py-3 rounded-full transition-colors text-lg"
              >
                <ShoppingCart size={20} />
                Shop Now
              </Link>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-3 rounded-full transition-colors text-lg"
              >
                <MessageCircle size={20} />
                Order via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-diwali-gold/10 border-y border-diwali-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { icon: <Shield size={20} />, label: 'Safety Certified', sub: 'All products tested' },
              { icon: <Truck size={20} />, label: 'Fast Delivery', sub: 'Pan India shipping' },
              { icon: <Star size={20} />, label: '4.8/5 Rating', sub: '1000+ happy customers' },
              { icon: <MessageCircle size={20} />, label: 'WhatsApp Orders', sub: 'Easy ordering' },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-1">
                <div className="text-diwali-orange">{item.icon}</div>
                <p className="font-semibold text-gray-800 text-sm">{item.label}</p>
                <p className="text-xs text-gray-500">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 font-display">Shop by Category</h2>
            <p className="text-gray-500 mt-2">Find the perfect crackers for every moment</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to={`/products?category=${cat.id}`}
                className="flex flex-col items-center gap-2 bg-white rounded-2xl p-4 shadow-sm hover:shadow-md hover:border-diwali-gold border border-transparent transition-all text-center group"
              >
                <span className="text-4xl group-hover:scale-110 transition-transform">
                  {cat.emoji}
                </span>
                <span className="text-xs font-semibold text-gray-700 group-hover:text-diwali-orange transition-colors">
                  {cat.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 font-display">Best Sellers</h2>
              <p className="text-gray-500 mt-1">Most loved by our customers</p>
            </div>
            <Link
              to="/products"
              className="flex items-center gap-1 text-diwali-orange font-semibold hover:underline text-sm"
            >
              View all <ChevronRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 font-display">Featured Products</h2>
              <p className="text-gray-500 mt-1">Hand-picked for you</p>
            </div>
            <Link
              to="/products"
              className="flex items-center gap-1 text-diwali-orange font-semibold hover:underline text-sm"
            >
              View all <ChevronRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-diwali-maroon to-diwali-orange py-14">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white font-display mb-3">
            Order via WhatsApp 📲
          </h2>
          <p className="text-white/80 mb-6">
            Prefer to order by phone? Chat with us on WhatsApp and we'll guide you
            through the entire process. Bulk discounts available!
          </p>
          <a
            href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20order%20Diwali%20crackers"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-diwali-maroon font-bold px-8 py-3 rounded-full hover:bg-diwali-gold transition-colors text-lg"
          >
            <MessageCircle size={20} />
            Chat Now
          </a>
        </div>
      </section>
    </div>
  );
}
