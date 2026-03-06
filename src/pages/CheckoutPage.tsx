import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { MessageCircle, ShoppingBag } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import { CustomerInfo } from '../types';

const initialInfo: CustomerInfo = {
  name: '',
  phone: '',
  email: '',
  address: '',
  city: '',
  pincode: '',
  deliveryPreference: 'home-delivery',
  orderType: 'standard',
  specialInstructions: '',
};

export default function CheckoutPage() {
  const { items, getTotalPrice, clearCart } = useCartStore();
  const navigate = useNavigate();
  const [info, setInfo] = useState<CustomerInfo>(initialInfo);
  const total = getTotalPrice();

  if (items.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <ShoppingBag size={72} className="text-gray-200 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-700">No items to checkout</h2>
        <Link
          to="/products"
          className="inline-block mt-4 bg-diwali-orange text-white font-bold px-8 py-3 rounded-full"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInfo((prev) => ({ ...prev, [name]: value }));
  };

  const buildWhatsAppMsg = () => {
    const itemLines = items
      .map((i) => `• ${i.product.name} × ${i.quantity} = ₹${i.product.price * i.quantity}`)
      .join('\n');
    return encodeURIComponent(
      `🎆 *New Order from Udupi Crackers Website*\n\n*Customer Details:*\nName: ${info.name}\nPhone: ${info.phone}\nEmail: ${info.email}\nAddress: ${info.address}, ${info.city} - ${info.pincode}\n\n*Order Items:*\n${itemLines}\n\n*Total: ₹${total}*\n\n*Delivery:* ${info.deliveryPreference === 'home-delivery' ? 'Home Delivery' : 'Store Pickup'}\n*Order Type:* ${info.orderType === 'bulk' ? 'Bulk Order' : 'Standard Order'}${info.specialInstructions ? `\n\n*Special Instructions:*\n${info.specialInstructions}` : ''}`
    );
  };

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '919876543210';
    const msg = buildWhatsAppMsg();
    window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, '_blank');
    clearCart();
    navigate('/order-success');
  };

  const inputCls =
    'w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-diwali-orange transition-colors';

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-800 font-display mb-6">Checkout</h1>

      <form onSubmit={handleWhatsApp}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Customer details */}
          <div className="lg:col-span-2 space-y-5">
            <div className="bg-white rounded-2xl border shadow-sm p-6">
              <h2 className="font-bold text-gray-700 mb-4 text-base">Customer Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">
                    Full Name *
                  </label>
                  <input
                    required
                    name="name"
                    value={info.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={inputCls}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">
                    Phone Number *
                  </label>
                  <input
                    required
                    name="phone"
                    value={info.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    type="tel"
                    className={inputCls}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-gray-600 mb-1">
                    Email Address
                  </label>
                  <input
                    name="email"
                    value={info.email}
                    onChange={handleChange}
                    placeholder="you@email.com"
                    type="email"
                    className={inputCls}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-gray-600 mb-1">
                    Delivery Address *
                  </label>
                  <input
                    required
                    name="address"
                    value={info.address}
                    onChange={handleChange}
                    placeholder="House/Flat No, Street, Area"
                    className={inputCls}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">
                    City *
                  </label>
                  <input
                    required
                    name="city"
                    value={info.city}
                    onChange={handleChange}
                    placeholder="City"
                    className={inputCls}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">
                    PIN Code *
                  </label>
                  <input
                    required
                    name="pincode"
                    value={info.pincode}
                    onChange={handleChange}
                    placeholder="576101"
                    maxLength={6}
                    className={inputCls}
                  />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-6">
              <h2 className="font-bold text-gray-700 mb-4 text-base">Delivery Preferences</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">
                    Delivery Option
                  </label>
                  <select
                    name="deliveryPreference"
                    value={info.deliveryPreference}
                    onChange={handleChange}
                    className={inputCls}
                  >
                    <option value="home-delivery">Home Delivery</option>
                    <option value="pickup">Store Pickup</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">
                    Order Type
                  </label>
                  <select
                    name="orderType"
                    value={info.orderType}
                    onChange={handleChange}
                    className={inputCls}
                  >
                    <option value="standard">Standard Order</option>
                    <option value="bulk">Bulk Order</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-gray-600 mb-1">
                    Special Instructions (optional)
                  </label>
                  <textarea
                    name="specialInstructions"
                    value={info.specialInstructions}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Any special requirements..."
                    className={inputCls}
                  />
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4 text-sm text-yellow-800">
              🔒 <strong>Safe &amp; Secure:</strong> Your order will be processed via WhatsApp for
              easy communication and confirmation.
            </div>
          </div>

          {/* Order summary */}
          <div className="bg-white rounded-2xl border shadow-sm p-5 h-fit">
            <h2 className="font-bold text-gray-700 text-base mb-4">Order Summary</h2>
            <div className="space-y-2 text-sm text-gray-600 max-h-48 overflow-y-auto">
              {items.map((i) => (
                <div key={i.product.id} className="flex justify-between">
                  <span className="truncate max-w-[140px]">
                    {i.product.name} × {i.quantity}
                  </span>
                  <span className="font-medium text-gray-700 shrink-0 ml-2">
                    ₹{i.product.price * i.quantity}
                  </span>
                </div>
              ))}
            </div>
            <div className="border-t mt-4 pt-4 flex justify-between font-bold text-gray-800 text-lg">
              <span>Total</span>
              <span className="text-diwali-maroon">₹{total}</span>
            </div>
            <button
              type="submit"
              className="mt-5 w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition-colors text-base"
            >
              <MessageCircle size={20} />
              Place Order via WhatsApp
            </button>
            <p className="text-xs text-gray-400 text-center mt-2">
              You'll be redirected to WhatsApp to confirm your order
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
