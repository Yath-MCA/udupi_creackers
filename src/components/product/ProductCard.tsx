import { Link } from 'react-router-dom';
import { ShoppingCart, Star, AlertTriangle, BadgeCheck } from 'lucide-react';
import { Product } from '../../types';
import { useCartStore } from '../../store/cartStore';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((s) => s.addItem);
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group flex flex-col">
      {/* Image */}
      <Link to={`/products/${product.id}`} className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.bestSeller && (
            <span className="bg-diwali-orange text-white text-xs font-bold px-2 py-0.5 rounded-full">
              Best Seller
            </span>
          )}
          {product.newArrival && (
            <span className="bg-diwali-red text-white text-xs font-bold px-2 py-0.5 rounded-full">
              New
            </span>
          )}
          {discount > 0 && (
            <span className="bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
              {discount}% OFF
            </span>
          )}
        </div>
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white font-bold bg-diwali-red px-3 py-1 rounded-full text-sm">
              Out of Stock
            </span>
          </div>
        )}
        {product.stockCount !== undefined &&
          product.stockCount > 0 &&
          product.stockCount <= 10 && (
            <div className="absolute bottom-2 right-2">
              <span className="bg-diwali-orange/90 text-white text-xs font-medium px-2 py-0.5 rounded-full flex items-center gap-1">
                <AlertTriangle size={10} />
                Only {product.stockCount} left
              </span>
            </div>
          )}
      </Link>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <Link to={`/products/${product.id}`}>
          <h3 className="font-semibold text-gray-800 hover:text-diwali-orange transition-colors line-clamp-2 text-sm leading-snug">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-1.5">
          <Star size={13} className="text-diwali-gold fill-diwali-gold" />
          <span className="text-xs font-medium text-gray-700">{product.rating}</span>
          <span className="text-xs text-gray-400">({product.reviewCount})</span>
        </div>

        {/* Safety */}
        <div className="flex items-center gap-1 mt-1.5">
          <BadgeCheck
            size={13}
            className={
              product.safetyLevel === 'low'
                ? 'text-green-500'
                : product.safetyLevel === 'medium'
                ? 'text-yellow-500'
                : 'text-red-500'
            }
          />
          <span className="text-xs text-gray-500 capitalize">
            {product.safetyLevel === 'low'
              ? 'Safe for kids'
              : product.safetyLevel === 'medium'
              ? 'Adult supervision'
              : 'Adults only (18+)'}
          </span>
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between mt-auto pt-3">
          <div>
            <span className="text-lg font-bold text-diwali-maroon">₹{product.price}</span>
            {product.originalPrice && (
              <span className="text-xs text-gray-400 line-through ml-1">
                ₹{product.originalPrice}
              </span>
            )}
          </div>
          <button
            onClick={() => product.inStock && addItem(product)}
            disabled={!product.inStock}
            className={`flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-full transition-colors ${
              product.inStock
                ? 'bg-diwali-orange hover:bg-diwali-red text-white'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            <ShoppingCart size={14} />
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
