import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MessageCircle, Phone, IndianRupee, MapPin, User, CreditCard } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import BrandIdentity from '../components/layout/BrandIdentity';

const CheckoutPage: React.FC = () => {
  const { items, getTotalPrice, getTotalItems, clearCart } = useCartStore();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    pincode: '',
    deliveryDate: '',
    deliveryTime: '',
    orderType: 'whatsapp' as 'whatsapp' | 'cod'
  });

  const totalPrice = getTotalPrice();
  const totalItems = getTotalItems();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsAppOrder = () => {
    const orderDetails = items.map(item => 
      `${item.name} - ${item.quantity} pcs × ₹${item.discountPrice || item.price} = ₹${(item.discountPrice || item.price) * item.quantity}`
    ).join('\n');

    const message = `🎆 *New Order - Sri Udupi Krishna Crackers* 🎆

*Customer Details:*
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Address: ${formData.address}, ${formData.city} - ${formData.pincode}

*Order Details:*
${orderDetails}

*Total Items:* ${totalItems}
*Total Price:* ₹${totalPrice}

*Delivery Information:*
Date: ${formData.deliveryDate}
Time: ${formData.deliveryTime}

*Order Type:* ${formData.orderType === 'cod' ? 'Cash on Delivery' : 'Prepaid'}

Please confirm the order and share further details.`;

    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, '_blank');
    
    // Clear cart after successful order
    setTimeout(() => {
      clearCart();
      window.location.href = '/order-success';
    }, 2000);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-6 text-center">
            <BrandIdentity align="center" size="sm" />
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">No items in cart</h1>
            <Link to="/products" className="btn-primary">
              <ArrowLeft size={20} className="mr-2 inline" />
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="mb-4">
            <BrandIdentity size="sm" />
          </div>
          <Link to="/cart" className="inline-flex items-center space-x-2 text-diwali-orange hover:text-diwali-red transition-colors mb-4">
            <ArrowLeft size={20} />
            <span>Back to Cart</span>
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold">
            <span className="text-gradient">Checkout</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-6">Customer Information</h2>
              
              <form className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-medium mb-4 flex items-center">
                    <User size={20} className="mr-2 text-diwali-orange" />
                    Personal Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-diwali-orange focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-diwali-orange focus:border-transparent"
                        placeholder="10-digit mobile number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-diwali-orange focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                </div>

                {/* Delivery Address */}
                <div>
                  <h3 className="text-lg font-medium mb-4 flex items-center">
                    <MapPin size={20} className="mr-2 text-diwali-orange" />
                    Delivery Address
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Street Address *
                      </label>
                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                        rows={3}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-diwali-orange focus:border-transparent"
                        placeholder="House/Flat No., Street, Area"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          City *
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-diwali-orange focus:border-transparent"
                          placeholder="Chennai"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          PIN Code *
                        </label>
                        <input
                          type="text"
                          name="pincode"
                          value={formData.pincode}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-diwali-orange focus:border-transparent"
                          placeholder="600001"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Delivery Preferences */}
                <div>
                  <h3 className="text-lg font-medium mb-4">Delivery Preferences</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Delivery Date *
                      </label>
                      <input
                        type="date"
                        name="deliveryDate"
                        value={formData.deliveryDate}
                        onChange={handleInputChange}
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-diwali-orange focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Time *
                      </label>
                      <select
                        name="deliveryTime"
                        value={formData.deliveryTime}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-diwali-orange focus:border-transparent"
                      >
                        <option value="">Select time slot</option>
                        <option value="9am-12pm">9:00 AM - 12:00 PM</option>
                        <option value="12pm-3pm">12:00 PM - 3:00 PM</option>
                        <option value="3pm-6pm">3:00 PM - 6:00 PM</option>
                        <option value="6pm-9pm">6:00 PM - 9:00 PM</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Order Type */}
                <div>
                  <h3 className="text-lg font-medium mb-4 flex items-center">
                    <CreditCard size={20} className="mr-2 text-diwali-orange" />
                    Order Type
                  </h3>
                  <div className="space-y-3">
                    <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                      <input
                        type="radio"
                        name="orderType"
                        value="whatsapp"
                        checked={formData.orderType === 'whatsapp'}
                        onChange={handleInputChange}
                        className="mr-3"
                      />
                      <div>
                        <div className="font-medium">WhatsApp Order</div>
                        <div className="text-sm text-gray-600">Order via WhatsApp and pay on delivery</div>
                      </div>
                    </label>
                    <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                      <input
                        type="radio"
                        name="orderType"
                        value="cod"
                        checked={formData.orderType === 'cod'}
                        onChange={handleInputChange}
                        className="mr-3"
                      />
                      <div>
                        <div className="font-medium">Cash on Delivery</div>
                        <div className="text-sm text-gray-600">Pay when you receive your order</div>
                      </div>
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
              
              {/* Order Items */}
              <div className="space-y-3 mb-6 max-h-64 overflow-y-auto">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <div>
                      <span className="font-medium">{item.name}</span>
                      <span className="text-gray-500 ml-2">× {item.quantity}</span>
                    </div>
                    <span>
                      <IndianRupee size={12} className="inline" />
                      {(item.discountPrice || item.price) * item.quantity}
                    </span>
                  </div>
                ))}
              </div>

              {/* Price Breakdown */}
              <div className="border-t pt-4 space-y-3">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>
                    <IndianRupee size={14} className="inline" />
                    {totalPrice}
                  </span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Delivery Fee</span>
                  <span className="text-green-600">FREE</span>
                </div>
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-diwali-dark">
                    <IndianRupee size={18} className="inline" />
                    {totalPrice}
                  </span>
                </div>
              </div>

              {/* Place Order Button */}
              <button
                onClick={handleWhatsAppOrder}
                disabled={!formData.name || !formData.phone || !formData.address || !formData.city || !formData.pincode}
                className="w-full mt-6 bg-green-500 hover:bg-green-600 disabled:bg-gray-300 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:scale-100 flex items-center justify-center space-x-2"
              >
                <MessageCircle size={20} />
                <span>Place Order via WhatsApp</span>
              </button>

              {/* Help Section */}
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
                  <strong>Important:</strong> Please ensure someone is available at the delivery address during the selected time slot.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
