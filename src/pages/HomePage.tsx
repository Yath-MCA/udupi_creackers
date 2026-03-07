import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Zap, Shield, Truck, Phone, MessageCircle, Sparkles } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/product/ProductCard';
import BrandIdentity from '../components/layout/BrandIdentity';

const HomePage: React.FC = () => {
  const featuredProducts = products.slice(0, 8);
  const topCategories = categories.slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-diwali-dark via-diwali-maroon to-diwali-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <BrandIdentity theme="dark" />
              <div className="flex items-center space-x-2">
                <Sparkles className="text-diwali-gold animate-pulse" size={24} />
                <span className="text-diwali-gold font-semibold">🎆 Diwali Special Offer 🎆</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="text-gradient">Celebrate With</span>
                <br />
                Professional Festive Fireworks
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Discover the finest collection of high-quality crackers and fireworks. 
                Safe, reliable, and perfect for your festive celebrations!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/products" className="btn-primary text-center">
                  Shop Now
                  <ArrowRight size={20} className="ml-2 inline" />
                </Link>
                <a
                  href="https://wa.me/919876543210?text=Hi%20I%20would%20like%20to%20inquire%20about%20your%20crackers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-center"
                >
                  <MessageCircle size={20} className="mr-2 inline" />
                  WhatsApp Order
                </a>
              </div>
              
              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-4 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-diwali-gold">5000+</div>
                  <div className="text-sm text-gray-300">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-diwali-gold">100+</div>
                  <div className="text-sm text-gray-300">Products</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-diwali-gold">4.8★</div>
                  <div className="text-sm text-gray-300">Rating</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-diwali-gold/20 rounded-full blur-3xl animate-pulse"></div>
              <img
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop"
                alt="Diwali Crackers"
                className="relative rounded-2xl shadow-2xl w-full h-auto animate-glow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-diwali-gold text-diwali-dark w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Shield size={32} />
              </div>
              <h3 className="font-semibold text-lg mb-2">100% Safe</h3>
              <p className="text-gray-600">Quality tested and certified crackers</p>
            </div>
            <div className="text-center group">
              <div className="bg-diwali-orange text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Truck size={32} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Quick delivery across the city</p>
            </div>
            <div className="text-center group">
              <div className="bg-diwali-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Zap size={32} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Premium Quality</h3>
              <p className="text-gray-600">Best quality crackers at great prices</p>
            </div>
            <div className="text-center group">
              <div className="bg-diwali-gold text-diwali-dark w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Phone size={32} />
              </div>
              <h3 className="font-semibold text-lg mb-2">24/7 Support</h3>
              <p className="text-gray-600">Always here to help you</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">Shop by Category</span>
            </h2>
            <p className="text-gray-600 text-lg">Find exactly what you're looking for</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topCategories.map((category) => (
              <Link
                key={category.id}
                to={`/products?category=${category.id}`}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="aspect-w-16 aspect-h-12">
                  <img
                    src={category.imageUrl}
                    alt={category.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                    <p className="text-sm text-gray-200">{category.description}</p>
                    <div className="flex items-center mt-3 text-diwali-gold">
                      <span className="text-sm font-medium">Shop Now</span>
                      <ArrowRight size={16} className="ml-1" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">Featured Products</span>
            </h2>
            <p className="text-gray-600 text-lg">Handpicked crackers for your celebrations</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/products" className="btn-primary">
              View All Products
              <ArrowRight size={20} className="ml-2 inline" />
            </Link>
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16 bg-gradient-to-r from-diwali-orange to-diwali-red text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Star className="text-diwali-gold" size={32} />
              <h2 className="text-3xl md:text-4xl font-bold">Limited Time Offer!</h2>
              <Star className="text-diwali-gold" size={32} />
            </div>
            <p className="text-xl mb-8">Get up to 30% off on selected items</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products?offer=discount" className="btn-secondary">
                View Offers
              </Link>
              <a
                href="https://wa.me/919876543210?text=Hi%20I%20would%20like%20to%20know%20about%20the%20special%20offers"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-diwali-orange px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle size={20} className="mr-2 inline" />
                Get Offer Details
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
