import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus } from 'lucide-react';
import { CartItem as CartItemType } from '../../types';
import { useCartStore } from '../../store/cartStore';

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCartStore();

  return (
    <div className="flex gap-4 py-4 border-b last:border-b-0">
      <Link to={`/products/${item.product.id}`} className="shrink-0">
        <img
          src={item.product.image}
          alt={item.product.name}
          className="w-20 h-20 object-cover rounded-xl"
          loading="lazy"
        />
      </Link>
      <div className="flex-1 min-w-0">
        <Link to={`/products/${item.product.id}`}>
          <h3 className="font-semibold text-gray-800 hover:text-diwali-orange transition-colors text-sm leading-snug truncate">
            {item.product.name}
          </h3>
        </Link>
        <p className="text-diwali-maroon font-bold mt-1">₹{item.product.price}</p>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-2">
            <button
              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
              className="w-7 h-7 rounded-full bg-gray-100 hover:bg-diwali-orange hover:text-white flex items-center justify-center transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus size={14} />
            </button>
            <span className="font-semibold text-gray-800 w-6 text-center text-sm">
              {item.quantity}
            </span>
            <button
              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
              className="w-7 h-7 rounded-full bg-gray-100 hover:bg-diwali-orange hover:text-white flex items-center justify-center transition-colors"
              aria-label="Increase quantity"
            >
              <Plus size={14} />
            </button>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold text-gray-700">
              ₹{item.product.price * item.quantity}
            </span>
            <button
              onClick={() => removeItem(item.product.id)}
              className="text-gray-400 hover:text-diwali-red transition-colors"
              aria-label="Remove item"
            >
              <Trash2 size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
