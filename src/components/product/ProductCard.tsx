import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star, Zap } from 'lucide-react';
import { Product } from '../../types';
import { useCartStore } from '../../store/cartStore';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCartStore();
  const discount = product.discountPrice 
    ? Math.round(((product.price - product.discountPrice) / product.price) * 100)
    : 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product);
  };

  const displayPrice = product.discountPrice || product.price;

  return (
    <Link to={`/product/${product.id}`} className="block group">
      <div className="card bg-white overflow-hidden">
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-diwali-orange/10 to-diwali-red/10">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
          
          {/* Discount Badge */}
          {discount > 0 && (
            <div className="absolute top-2 left-2 bg-diwali-red text-white px-2 py-1 rounded-md text-sm font-bold">
              {discount}% OFF
            </div>
          )}
          
          {/* Stock Badge */}
          {product.stock <= 10 && (
            <div className="absolute top-2 right-2 bg-yellow-500 text-diwali-dark px-2 py-1 rounded-md text-xs font-semibold">
              Only {product.stock} left
            </div>
          )}
          
          {/* Quick Add Button */}
          <button
            onClick={handleAddToCart}
            className="absolute bottom-2 right-2 bg-diwali-gold text-diwali-dark p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110 transform"
            disabled={product.stock === 0}
          >
            <ShoppingCart size={18} />
          </button>
        </div>

        {/* Product Info */}
        <div className="p-4">
          {/* Category */}
          <div className="text-xs text-diwali-orange font-semibold uppercase tracking-wide mb-1">
            {product.category.replace('-', ' ')}
          </div>

          {/* Product Name */}
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-diwali-orange transition-colors">
            {product.name}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {product.description}
          </p>

          {/* Rating */}
          <div className="flex items-center mb-3">
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

          {/* Price and Action */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {product.discountPrice && (
                <span className="text-gray-400 line-through text-sm">
                  ₹{product.price}
                </span>
              )}
              <span className="text-xl font-bold text-diwali-dark">
                ₹{displayPrice}
              </span>
            </div>
            
            <button
              onClick={handleAddToCart}
              className="btn-primary text-sm px-4 py-2 flex items-center space-x-1"
              disabled={product.stock === 0}
            >
              <ShoppingCart size={16} />
              <span>Add</span>
            </button>
          </div>

          {/* Features */}
          {product.features && product.features.length > 0 && (
            <div className="mt-3 flex items-center space-x-2">
              <Zap size={14} className="text-diwali-orange" />
              <div className="flex flex-wrap gap-1">
                {product.features.slice(0, 2).map((feature, index) => (
                  <span
                    key={index}
                    className="text-xs bg-diwali-orange/10 text-diwali-orange px-2 py-1 rounded"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
