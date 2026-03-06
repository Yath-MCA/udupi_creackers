import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { products, categories } from '../data/products';
import { ProductCategory } from '../types';
import ProductCard from '../components/product/ProductCard';

type SortOption = 'default' | 'price-asc' | 'price-desc' | 'rating' | 'name';

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState<SortOption>('default');

  const categoryParam = searchParams.get('category') as ProductCategory | null;
  const searchParam = searchParams.get('search') ?? '';

  const filtered = useMemo(() => {
    let result = [...products];
    if (categoryParam) {
      result = result.filter((p) => p.category === categoryParam);
    }
    if (searchParam) {
      const q = searchParam.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tags.some((t) => t.includes(q))
      );
    }
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }
    return result;
  }, [categoryParam, searchParam, sortBy]);

  const setCategory = (cat: string | null) => {
    const params = new URLSearchParams(searchParams);
    if (cat) {
      params.set('category', cat);
    } else {
      params.delete('category');
    }
    setSearchParams(params);
  };

  const clearSearch = () => {
    const params = new URLSearchParams(searchParams);
    params.delete('search');
    setSearchParams(params);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 font-display">
            {categoryParam
              ? categories.find((c) => c.id === categoryParam)?.name ?? 'Products'
              : searchParam
              ? `Search: "${searchParam}"`
              : 'All Products'}
          </h1>
          <p className="text-gray-500 text-sm mt-0.5">{filtered.length} products found</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 text-sm font-medium hover:border-diwali-orange transition-colors"
          >
            <SlidersHorizontal size={16} />
            Filters
          </button>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="border border-gray-300 rounded-full px-4 py-2 text-sm font-medium focus:outline-none focus:border-diwali-orange"
          >
            <option value="default">Sort: Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
            <option value="name">Name A-Z</option>
          </select>
        </div>
      </div>

      {/* Active filters */}
      {(categoryParam || searchParam) && (
        <div className="flex flex-wrap gap-2 mb-5">
          {categoryParam && (
            <span className="flex items-center gap-1.5 bg-diwali-orange/10 text-diwali-orange border border-diwali-orange/30 px-3 py-1 rounded-full text-sm font-medium">
              {categories.find((c) => c.id === categoryParam)?.name}
              <button onClick={() => setCategory(null)} aria-label="Remove filter">
                <X size={14} />
              </button>
            </span>
          )}
          {searchParam && (
            <span className="flex items-center gap-1.5 bg-blue-50 text-blue-600 border border-blue-200 px-3 py-1 rounded-full text-sm font-medium">
              Search: {searchParam}
              <button onClick={clearSearch} aria-label="Clear search">
                <X size={14} />
              </button>
            </span>
          )}
        </div>
      )}

      {/* Filter panel */}
      {showFilters && (
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 mb-6">
          <h3 className="font-semibold text-gray-700 mb-3 text-sm">Categories</h3>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setCategory(null)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                !categoryParam
                  ? 'bg-diwali-orange text-white'
                  : 'bg-white border border-gray-300 hover:border-diwali-orange text-gray-600'
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  categoryParam === cat.id
                    ? 'bg-diwali-orange text-white'
                    : 'bg-white border border-gray-300 hover:border-diwali-orange text-gray-600'
                }`}
              >
                {cat.emoji} {cat.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Product grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <Search size={48} className="text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-600">No products found</h3>
          <p className="text-gray-400 mt-1 text-sm">Try adjusting your filters or search query.</p>
          <button
            onClick={() => {
              setCategory(null);
              clearSearch();
            }}
            className="mt-4 bg-diwali-orange text-white px-6 py-2 rounded-full font-medium hover:bg-diwali-red transition-colors text-sm"
          >
            Clear all filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
