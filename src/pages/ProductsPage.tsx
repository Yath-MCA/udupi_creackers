import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, Grid, List, Star } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/product/ProductCard';
import BrandIdentity from '../components/layout/BrandIdentity';

const ProductsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (categoryParam) {
      filtered = filtered.filter(product => product.category === categoryParam);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort products
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return (a.discountPrice || a.price) - (b.discountPrice || b.price);
        case 'price-high':
          return (b.discountPrice || b.price) - (a.discountPrice || a.price);
        case 'name':
          return a.name.localeCompare(b.name);
        case 'rating':
          return 4 - 4; // All have same rating for now
        default:
          return 0;
      }
    });

    return sorted;
  }, [categoryParam, searchTerm, sortBy]);

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'flower-pots', name: 'Flower Pots' },
    { id: 'sparklers', name: 'Sparklers' },
    { id: 'rockets', name: 'Rockets' },
    { id: 'bombs', name: 'Bombs' },
    { id: 'kids-crackers', name: 'Kids Crackers' },
    { id: 'gift-boxes', name: 'Gift Boxes' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mb-4">
            <BrandIdentity align="center" size="sm" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Our Products</span>
          </h1>
          <p className="text-gray-600">
            {categoryParam 
              ? `Showing ${categories.find(c => c.id === categoryParam)?.name}`
              : 'Browse our complete collection of premium crackers'
            }
          </p>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-diwali-orange focus:border-transparent"
                />
              </div>
            </div>

            {/* Sort */}
            <div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-diwali-orange focus:border-transparent"
              >
                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Sort by Rating</option>
              </select>
            </div>

            {/* View Mode */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${viewMode === 'grid' ? 'bg-diwali-orange text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                <Grid size={20} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${viewMode === 'list' ? 'bg-diwali-orange text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                <List size={20} />
              </button>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mt-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  const url = new URL(window.location.href);
                  if (category.id === 'all') {
                    url.searchParams.delete('category');
                  } else {
                    url.searchParams.set('category', category.id);
                  }
                  window.location.href = url.toString();
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  (category.id === 'all' && !categoryParam) || categoryParam === category.id
                    ? 'bg-diwali-orange text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 flex justify-between items-center">
          <p className="text-gray-600">
            Showing {filteredAndSortedProducts.length} products
          </p>
        </div>

        {/* Products Grid/List */}
        {filteredAndSortedProducts.length > 0 ? (
          <div className={
            viewMode === 'grid' 
              ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
              : 'space-y-4'
          }>
            {filteredAndSortedProducts.map((product) => (
              viewMode === 'grid' ? (
                <ProductCard key={product.id} product={product} />
              ) : (
                <div key={product.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="w-full sm:w-48 h-48 bg-gradient-to-br from-diwali-orange/10 to-diwali-red/10 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-1">
                            {product.name}
                          </h3>
                          <p className="text-sm text-diwali-orange font-medium uppercase">
                            {product.category.replace('-', ' ')}
                          </p>
                        </div>
                        <div className="text-right">
                          {product.discountPrice && (
                            <span className="text-gray-400 line-through text-sm">
                              ₹{product.price}
                            </span>
                          )}
                          <div className="text-xl font-bold text-diwali-dark">
                            ₹{product.discountPrice || product.price}
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{product.description}</p>
                      
                      <div className="flex items-center mb-4">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={14}
                              className={i < 4 ? 'fill-diwali-gold text-diwali-gold' : 'text-gray-300'}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-gray-500 ml-2">(4.0)</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          Stock: {product.stock} pieces
                        </span>
                        <button className="btn-primary text-sm px-4 py-2">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Filter size={48} className="mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
