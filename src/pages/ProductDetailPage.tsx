import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ShoppingCart, 
  Star, 
  Shield, 
  Zap, 
  ChevronLeft, 
  ChevronRight,
  MessageCircle,
  Phone,
  Share2,
  Heart
} from 'lucide-react';
import { products } from '../data/products';
import { useCartStore } from '../store/cartStore';
import ProductCard from '../components/product/ProductCard';
import BrandIdentity from '../components/layout/BrandIdentity';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addItem } = useCartStore();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === id);
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link to="/products" className="btn-primary">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const displayPrice = product.discountPrice || product.price;
  const discount = product.discountPrice 
    ? Math.round(((product.price - product.discountPrice) / product.price) * 100)
    : 0;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
  };

  const handleWhatsAppOrder = () => {
    const message = `Hi! I would like to order:\n\nProduct: ${product.name}\nPrice: ₹${displayPrice}\nQuantity: ${quantity}\nTotal: ₹${displayPrice * quantity}\n\nPlease confirm availability.`;
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, '_blank');
  };

  const images = [product.imageUrl]; // In real app, this would be multiple images

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <BrandIdentity size="sm" />
        </div>

        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li><Link to="/" className="hover:text-diwali-orange">Home</Link></li>
            <li>/</li>
            <li><Link to="/products" className="hover:text-diwali-orange">Products</Link></li>
            <li>/</li>
            <li><Link to={`/products?category=${product.category}`} className="hover:text-diwali-orange capitalize">{product.category.replace('-', ' ')}</Link></li>
            <li>/</li>
            <li className="text-gray-900">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-gradient-to-br from-diwali-orange/10 to-diwali-red/10 rounded-2xl overflow-hidden">
              <img
                src={images[currentImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              
              {/* Discount Badge */}
              {discount > 0 && (
                <div className="absolute top-4 left-4 bg-diwali-red text-white px-3 py-1 rounded-md text-sm font-bold">
                  {discount}% OFF
                </div>
              )}

              {/* Image Navigation */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={() => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 text-gray-800 p-2 rounded-full hover:bg-white transition-colors"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={() => setCurrentImageIndex((prev) => (prev + 1) % images.length)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 text-gray-800 p-2 rounded-full hover:bg-white transition-colors"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail Images */}
            {images.length > 1 && (
              <div className="flex space-x-2">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      currentImageIndex === index ? 'border-diwali-orange' : 'border-gray-200'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="text-sm text-diwali-orange font-semibold uppercase tracking-wide mb-2">
                {product.category.replace('-', ' ')}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              
              {/* Rating */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={i < 4 ? 'fill-diwali-gold text-diwali-gold' : 'text-gray-300'}
                    />
                  ))}
                </div>
                <span className="text-gray-600">4.0 out of 5</span>
                <span className="text-gray-400">(128 reviews)</span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-4">
              {product.discountPrice && (
                <span className="text-gray-400 line-through text-xl">
                  ₹{product.price}
                </span>
              )}
              <span className="text-3xl font-bold text-diwali-dark">
                ₹{displayPrice}
              </span>
              {discount > 0 && (
                <span className="bg-diwali-red text-white px-2 py-1 rounded-md text-sm font-bold">
                  Save ₹{product.price - product.discountPrice}
                </span>
              )}
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Description</h3>
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Features */}
            {product.features && product.features.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-3">Features</h3>
                <div className="grid grid-cols-2 gap-3">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Zap size={16} className="text-diwali-orange" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Stock Info */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Shield size={20} className="text-green-500" />
                <span className={`font-medium ${product.stock > 10 ? 'text-green-600' : 'text-yellow-600'}`}>
                  {product.stock > 10 ? 'In Stock' : `Only ${product.stock} left`}
                </span>
              </div>
              <span className="text-gray-500">• {product.stock} pieces available</span>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity
                </label>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  >
                    -
                  </button>
                  <span className="w-16 text-center font-semibold text-lg">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                    disabled={quantity >= product.stock}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleAddToCart}
                  className="btn-primary flex-1 flex items-center justify-center space-x-2"
                  disabled={product.stock === 0}
                >
                  <ShoppingCart size={20} />
                  <span>Add to Cart</span>
                </button>
                <button
                  onClick={handleWhatsAppOrder}
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <MessageCircle size={20} />
                  <span>WhatsApp Order</span>
                </button>
              </div>
            </div>

            {/* Safety Instructions */}
            {product.safetyInstructions && product.safetyInstructions.length > 0 && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-yellow-800 mb-3">
                  ⚠️ Safety Instructions
                </h3>
                <ul className="space-y-2">
                  {product.safetyInstructions.map((instruction, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-yellow-600 mt-1">•</span>
                      <span className="text-yellow-700">{instruction}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Share and Contact */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 text-gray-600 hover:text-diwali-orange transition-colors">
                  <Heart size={20} />
                  <span>Save</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-diwali-orange transition-colors">
                  <Share2 size={20} />
                  <span>Share</span>
                </button>
              </div>
              <a
                href="tel:+919876543210"
                className="flex items-center space-x-2 text-diwali-orange hover:text-diwali-red transition-colors"
              >
                <Phone size={20} />
                <span>Call for Details</span>
              </a>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;
