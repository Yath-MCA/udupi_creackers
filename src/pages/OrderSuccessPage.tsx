import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, MessageCircle, Phone, ShoppingBag } from 'lucide-react';
import BrandIdentity from '../components/layout/BrandIdentity';

const OrderSuccessPage: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-orange-50 via-white to-emerald-50 py-16">
      <div className="pointer-events-none absolute -left-24 top-10 h-56 w-56 rounded-full bg-orange-300/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-14 h-64 w-64 rounded-full bg-emerald-300/20 blur-3xl" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          {/* Success Icon */}
          <div className="mb-8">
            <div className="mx-auto flex h-24 w-24 animate-pulse items-center justify-center rounded-full bg-green-500 shadow-lg shadow-green-200">
              <CheckCircle size={48} className="text-white" />
            </div>
          </div>

          {/* Brand Logo */}
          <div className="mb-8">
            <BrandIdentity align="center" />
          </div>

          {/* Success Message */}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Order Placed Successfully! 🎉
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Thank you for choosing Sri Udupi Krishna Crackers! Your order has been received and we'll contact you shortly.
          </p>

          {/* Order Details Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6">What Happens Next?</h2>
            
            <div className="space-y-4 text-left">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-diwali-orange text-white rounded-full flex items-center justify-center flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Order Confirmation</h3>
                  <p className="text-gray-600">You'll receive a WhatsApp message confirming your order details within 30 minutes.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-diwali-orange text-white rounded-full flex items-center justify-center flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Order Processing</h3>
                  <p className="text-gray-600">Our team will verify your order and prepare your crackers for delivery.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-diwali-orange text-white rounded-full flex items-center justify-center flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Delivery</h3>
                  <p className="text-gray-600">Your order will be delivered on your selected date and time slot.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Options */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Need Help With Your Order?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="https://wa.me/919876543210?text=Hi%20I%20have%20a%20question%20about%20my%20recent%20order"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle size={24} />
                <span className="font-semibold">Chat on WhatsApp</span>
              </a>
              
              <a
                href="tel:+919876543210"
                className="flex items-center justify-center space-x-2 bg-diwali-orange hover:bg-diwali-red text-white px-6 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <Phone size={24} />
                <span className="font-semibold">Call Us</span>
              </a>
            </div>
          </div>

          {/* Safety Reminder */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-yellow-800 mb-2">⚠️ Important Safety Reminder</h3>
            <p className="text-yellow-700 text-sm">
              Please remember to follow all safety instructions when using crackers. 
              Always use them in open spaces under adult supervision, and keep water nearby.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products" className="btn-primary flex items-center justify-center space-x-2">
              <ShoppingBag size={20} />
              <span>Continue Shopping</span>
            </Link>
            
            <Link to="/" className="btn-secondary flex items-center justify-center space-x-2">
              <ArrowRight size={20} />
              <span>Back to Home</span>
            </Link>
          </div>

          {/* Thank You Message */}
          <div className="mt-12 text-center">
            <p className="text-gray-600">
              From all of us at <span className="font-semibold text-indigo-900">SRI UDUPI KRISHNA CRACKERS</span>, 
              thank you for your business! 🎆
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Wishing you a safe and joyous Diwali celebration!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessPage;
