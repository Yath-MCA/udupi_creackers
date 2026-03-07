import React from 'react';
import { Minus, Plus, Trash2, IndianRupee } from 'lucide-react';
import { CartItem as CartItemType } from '../../types';
import { useCartStore } from '../../store/cartStore';

interface CartItemComponentProps {
  item: CartItemType;
}

const CartItemComponent: React.FC<CartItemComponentProps> = ({ item }) => {
  const { updateQuantity, removeItem } = useCartStore();
  const displayPrice = item.discountPrice || item.price;

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(item.id);
    } else if (newQuantity <= item.stock) {
      updateQuantity(item.id, newQuantity);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 hover:shadow-lg transition-shadow">
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Product Image */}
        <div className="w-full sm:w-24 h-24 sm:h-24 bg-gradient-to-br from-diwali-orange/10 to-diwali-red/10 rounded-lg overflow-hidden flex-shrink-0">
          <img
            src={item.imageUrl}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-semibold text-gray-900 text-lg mb-1">
                {item.name}
              </h3>
              <p className="text-sm text-diwali-orange font-medium uppercase">
                {item.category.replace('-', ' ')}
              </p>
            </div>
            <button
              onClick={() => removeItem(item.id)}
              className="text-red-500 hover:text-red-700 transition-colors p-1"
            >
              <Trash2 size={18} />
            </button>
          </div>

          {/* Price */}
          <div className="flex items-center space-x-2 mb-3">
            {item.discountPrice && (
              <span className="text-gray-400 line-through text-sm">
                <IndianRupee size={12} className="inline" />
                {item.price}
              </span>
            )}
            <span className="text-lg font-bold text-diwali-dark">
              <IndianRupee size={16} className="inline" />
              {displayPrice}
            </span>
            <span className="text-sm text-gray-500">× {item.quantity}</span>
          </div>

          {/* Quantity Controls */}
          <div className="flex items-center space-x-3">
            <span className="text-sm text-gray-600">Quantity:</span>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleQuantityChange(item.quantity - 1)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 w-8 h-8 rounded-full flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={item.quantity <= 1}
              >
                <Minus size={16} />
              </button>
              <span className="w-12 text-center font-semibold">
                {item.quantity}
              </span>
              <button
                onClick={() => handleQuantityChange(item.quantity + 1)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 w-8 h-8 rounded-full flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={item.quantity >= item.stock}
              >
                <Plus size={16} />
              </button>
            </div>
            
            {/* Stock Warning */}
            {item.quantity >= item.stock && (
              <span className="text-xs text-red-500 font-medium">
                Max stock reached
              </span>
            )}
          </div>

          {/* Item Total */}
          <div className="mt-3 pt-3 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Item Total:</span>
              <span className="text-lg font-bold text-diwali-dark">
                <IndianRupee size={16} className="inline" />
                {displayPrice * item.quantity}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemComponent;
