import { Link } from 'react-router-dom';
import { ShoppingBag, MessageCircle, Trash2 } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import CartItem from '../components/cart/CartItem';

export default function CartPage() {
  const { items, clearCart, getTotalPrice, getTotalItems } = useCartStore();
  const total = getTotalPrice();
  const count = getTotalItems();

  const whatsappMsg = encodeURIComponent(
    `Hi, I'd like to order:\n${items
      .map((i) => `• ${i.product.name} x${i.quantity} = ₹${i.product.price * i.quantity}`)
      .join('\n')}\n\nTotal: ₹${total}`
  );
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '919876543210';

  if (items.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <ShoppingBag size={72} className="text-gray-200 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-700">Your cart is empty</h2>
        <p className="text-gray-400 mt-2">Looks like you haven't added any products yet.</p>
        <Link
          to="/products"
          className="inline-block mt-6 bg-diwali-orange hover:bg-diwali-red text-white font-bold px-8 py-3 rounded-full transition-colors"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800 font-display">
          Shopping Cart
          <span className="text-base font-normal text-gray-400 ml-2">({count} items)</span>
        </h1>
        <button
          onClick={clearCart}
          className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-diwali-red transition-colors"
        >
          <Trash2 size={15} />
          Clear all
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Items */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border p-5">
          {items.map((item) => (
            <CartItem key={item.product.id} item={item} />
          ))}
        </div>

        {/* Order summary */}
        <div className="bg-white rounded-2xl shadow-sm border p-5 h-fit">
          <h2 className="font-bold text-gray-800 text-lg mb-4">Order Summary</h2>
          <div className="space-y-2 text-sm text-gray-600">
            {items.map((i) => (
              <div key={i.product.id} className="flex justify-between">
                <span className="truncate max-w-[160px]">
                  {i.product.name} × {i.quantity}
                </span>
                <span className="font-medium text-gray-700">₹{i.product.price * i.quantity}</span>
              </div>
            ))}
          </div>
          <div className="border-t mt-4 pt-4">
            <div className="flex justify-between font-bold text-gray-800 text-lg">
              <span>Total</span>
              <span className="text-diwali-maroon">₹{total}</span>
            </div>
            <p className="text-xs text-gray-400 mt-1">Shipping calculated at checkout</p>
          </div>

          <div className="space-y-3 mt-5">
            <Link
              to="/checkout"
              className="block text-center bg-diwali-orange hover:bg-diwali-red text-white font-bold py-3 px-6 rounded-full transition-colors"
            >
              Proceed to Checkout
            </Link>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition-colors"
            >
              <MessageCircle size={18} />
              Order via WhatsApp
            </a>
          </div>

          <Link
            to="/products"
            className="block text-center mt-3 text-diwali-orange text-sm font-medium hover:underline"
          >
            ← Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
