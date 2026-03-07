import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, ArrowLeft, MessageCircle, Phone, IndianRupee } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import CartItem from '../components/cart/CartItem';
import BrandIdentity from '../components/layout/BrandIdentity';

const CartPage: React.FC = () => {
  const { items, getTotalPrice, getTotalItems, clearCart } = useCartStore();
  const totalPrice = getTotalPrice();
  const totalItems = getTotalItems();

  const handleWhatsAppOrder = () => {
    if (items.length === 0) return;

    const orderDetails = items.map(item => 
      `${item.name} - ${item.quantity} pcs × ₹${item.discountPrice || item.price} = ₹${(item.discountPrice || item.price) * item.quantity}`
    ).join('\n');

    const message = `🎆 *New Order - Sri Udupi Krishna Crackers* 🎆

*Customer Details:*
Name: [Your Name]
Phone: [Your Phone Number]
Address: [Your Address]

*Order Details:*
${orderDetails}

*Total Items:* ${totalItems}
*Total Price:* ₹${totalPrice}

*Delivery Information:*
Preferred delivery date: [Date]
Preferred time: [Time]

Please confirm the order and share payment details.`;

    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, '_blank');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-6 text-center">
            <BrandIdentity align="center" size="sm" />
          </div>
          <div className="text-center">
            <div className="text-gray-400 mb-6">
              <ShoppingCart size={64} className="mx-auto" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h1>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added any crackers to your cart yet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products" className="btn-primary">
                <ArrowLeft size={20} className="mr-2 inline" />
                Continue Shopping
              </Link>
              <a
                href="https://wa.me/919876543210?text=Hi%20I%20would%20like%20to%20inquire%20about%20your%20crackers"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <MessageCircle size={20} />
                <span>Get Help on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8 text-center sm:text-left">
          <div className="mb-4">
            <BrandIdentity size="sm" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Shopping Cart</span>
          </h1>
          <p className="text-gray-600">
            You have {totalItems} {totalItems === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Cart Items</h2>
                <button
                  onClick={clearCart}
                  className="text-red-500 hover:text-red-700 text-sm font-medium transition-colors"
                >
                  Clear Cart
                </button>
              </div>
              
              <div className="space-y-4">
                {items.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
              
              {/* Price Breakdown */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal ({totalItems} items)</span>
                  <span>
                    <IndianRupee size={14} className="inline" />
                    {totalPrice}
                  </span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Delivery Fee</span>
                  <span className="text-green-600">FREE</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax</span>
                  <span>Included</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-diwali-dark">
                      <IndianRupee size={18} className="inline" />
                      {totalPrice}
                    </span>
                  </div>
                </div>
              </div>

              {/* Promo Code */}
              <div className="mb-6">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Promo code"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-diwali-orange focus:border-transparent"
                  />
                  <button className="btn-secondary text-sm px-4 py-2">
                    Apply
                  </button>
                </div>
              </div>

              {/* Checkout Options */}
              <div className="space-y-3">
                <button
                  onClick={handleWhatsAppOrder}
                  className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <MessageCircle size={20} />
                  <span>Order via WhatsApp</span>
                </button>
                
                <Link
                  to="/checkout"
                  className="w-full btn-primary text-center flex items-center justify-center space-x-2"
                >
                  <ShoppingCart size={20} />
                  <span>Proceed to Checkout</span>
                </Link>
              </div>

              {/* Contact Info */}
              <div className="mt-6 p-4 bg-diwali-orange/10 rounded-lg">
                <h3 className="font-semibold text-diwali-dark mb-2">Need Help?</h3>
                <div className="space-y-2">
                  <a
                    href="tel:+919876543210"
                    className="flex items-center space-x-2 text-diwali-orange hover:text-diwali-red transition-colors"
                  >
                    <Phone size={16} />
                    <span className="text-sm">+91 98765 43210</span>
                  </a>
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-green-600 hover:text-green-700 transition-colors"
                  >
                    <MessageCircle size={16} />
                    <span className="text-sm">Chat on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Safety Note */}
              <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-xs text-yellow-800">
                  <strong>Safety Note:</strong> All crackers should be used under adult supervision and following safety guidelines.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Continue Shopping */}
        <div className="mt-8 text-center">
          <Link to="/products" className="inline-flex items-center space-x-2 text-diwali-orange hover:text-diwali-red transition-colors">
            <ArrowLeft size={20} />
            <span>Continue Shopping</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
