import { Link } from 'react-router-dom';
import { CheckCircle, ShoppingBag, MessageCircle } from 'lucide-react';

export default function OrderSuccessPage() {
  return (
    <div className="max-w-xl mx-auto px-4 py-20 text-center">
      <CheckCircle size={80} className="text-green-500 mx-auto mb-6" />
      <h1 className="text-3xl font-bold text-gray-800 font-display mb-3">
        Order Placed! 🎆
      </h1>
      <p className="text-gray-500 text-lg mb-2">
        Thank you for shopping with Udupi Crackers!
      </p>
      <p className="text-gray-400 text-sm mb-8">
        Your order details have been sent via WhatsApp. Our team will confirm your
        order and provide delivery/pickup details shortly.
      </p>

      <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-8 text-left">
        <h2 className="font-semibold text-green-800 mb-2">What happens next?</h2>
        <ol className="space-y-1.5 text-sm text-green-700 list-decimal list-inside">
          <li>We'll confirm your order on WhatsApp within 1 hour</li>
          <li>Payment details will be shared (UPI / Cash on Delivery)</li>
          <li>Your order will be dispatched within 24 hours</li>
          <li>Track your delivery via WhatsApp updates</li>
        </ol>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          to="/products"
          className="flex items-center justify-center gap-2 bg-diwali-orange hover:bg-diwali-red text-white font-bold px-8 py-3 rounded-full transition-colors"
        >
          <ShoppingBag size={20} />
          Continue Shopping
        </Link>
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-3 rounded-full transition-colors"
        >
          <MessageCircle size={20} />
          Chat on WhatsApp
        </a>
      </div>
    </div>
  );
}
