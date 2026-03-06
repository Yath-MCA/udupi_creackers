import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, ShoppingCart, MessageCircle, Shield, AlertTriangle } from 'lucide-react';
import { products } from '../data/products';
import { useCartStore } from '../store/cartStore';
import ProductCard from '../components/product/ProductCard';

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const addItem = useCartStore((s) => s.addItem);
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Product not found</h2>
        <Link to="/products" className="text-diwali-orange font-semibold hover:underline">
          ← Back to products
        </Link>
      </div>
    );
  }

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const whatsappMsg = encodeURIComponent(
    `Hi, I'm interested in ordering: ${product.name} (₹${product.price}). Please let me know availability.`
  );
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '919876543210';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1 hover:text-diwali-orange transition-colors"
        >
          <ArrowLeft size={16} />
          Back
        </button>
        <span>/</span>
        <Link to="/products" className="hover:text-diwali-orange">
          Products
        </Link>
        <span>/</span>
        <span className="text-gray-700 truncate">{product.name}</span>
      </div>

      {/* Product detail */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-14">
        {/* Images */}
        <div>
          <div className="relative rounded-2xl overflow-hidden bg-gray-100 aspect-square">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {!product.inStock && (
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="bg-diwali-red text-white font-bold px-6 py-2 rounded-full text-lg">
                  Out of Stock
                </span>
              </div>
            )}
            {discount > 0 && (
              <span className="absolute top-4 left-4 bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                {discount}% OFF
              </span>
            )}
          </div>
          {/* Thumbnail gallery */}
          {product.images && product.images.length > 1 && (
            <div className="flex gap-3 mt-3">
              {product.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${product.name} view ${i + 1}`}
                  className="w-16 h-16 object-cover rounded-lg border-2 border-transparent hover:border-diwali-orange cursor-pointer transition-colors"
                  loading="lazy"
                />
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div>
          <div className="flex flex-wrap gap-2 mb-3">
            {product.bestSeller && (
              <span className="bg-diwali-orange text-white text-xs font-bold px-2.5 py-0.5 rounded-full">
                Best Seller
              </span>
            )}
            {product.newArrival && (
              <span className="bg-diwali-red text-white text-xs font-bold px-2.5 py-0.5 rounded-full">
                New Arrival
              </span>
            )}
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 font-display leading-snug">
            {product.name}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-3">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={16}
                  className={
                    star <= Math.round(product.rating)
                      ? 'text-diwali-gold fill-diwali-gold'
                      : 'text-gray-300'
                  }
                />
              ))}
            </div>
            <span className="font-semibold text-gray-700">{product.rating}</span>
            <span className="text-gray-400 text-sm">({product.reviewCount} reviews)</span>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-3 mt-4">
            <span className="text-3xl font-bold text-diwali-maroon">₹{product.price}</span>
            {product.originalPrice && (
              <>
                <span className="text-lg text-gray-400 line-through">₹{product.originalPrice}</span>
                <span className="text-green-600 font-semibold text-sm">Save ₹{product.originalPrice - product.price}</span>
              </>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-600 mt-4 leading-relaxed">{product.description}</p>

          {/* Safety info */}
          <div
            className={`flex items-start gap-3 mt-5 p-4 rounded-xl ${
              product.safetyLevel === 'low'
                ? 'bg-green-50 border border-green-200'
                : product.safetyLevel === 'medium'
                ? 'bg-yellow-50 border border-yellow-200'
                : 'bg-red-50 border border-red-200'
            }`}
          >
            <Shield
              size={20}
              className={
                product.safetyLevel === 'low'
                  ? 'text-green-600 shrink-0 mt-0.5'
                  : product.safetyLevel === 'medium'
                  ? 'text-yellow-600 shrink-0 mt-0.5'
                  : 'text-red-600 shrink-0 mt-0.5'
              }
            />
            <div>
              <p className="font-semibold text-sm text-gray-700">
                {product.safetyLevel === 'low'
                  ? 'Safe for children (age 5+)'
                  : product.safetyLevel === 'medium'
                  ? 'Use under adult supervision'
                  : 'Adults only — Age 18+'}
              </p>
              <p className="text-xs text-gray-500 mt-0.5">
                Always follow safety instructions. Keep water nearby.
              </p>
            </div>
          </div>

          {/* Stock indicator */}
          {product.stockCount !== undefined && product.stockCount > 0 && product.stockCount <= 20 && (
            <div className="flex items-center gap-2 mt-4 text-diwali-orange text-sm font-medium">
              <AlertTriangle size={16} />
              Only {product.stockCount} units left — order soon!
            </div>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <button
              onClick={() => product.inStock && addItem(product)}
              disabled={!product.inStock}
              className={`flex-1 flex items-center justify-center gap-2 font-bold py-3 px-6 rounded-full text-lg transition-colors ${
                product.inStock
                  ? 'bg-diwali-orange hover:bg-diwali-red text-white'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              <ShoppingCart size={20} />
              {product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </button>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full text-lg transition-colors"
            >
              <MessageCircle size={20} />
              Order on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-gray-800 font-display mb-6">
            Related Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
