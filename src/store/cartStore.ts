import { create } from 'zustand';
import { CartState, Product } from '../types';

interface CartStore extends CartState {
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  totalItems: 0,
  totalPrice: 0,

  addItem: (product) => {
    set((state) => {
      const existingItem = state.items.find(item => item.id === product.id);
      
      if (existingItem) {
        const updatedItems = state.items.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return {
          items: updatedItems,
          totalItems: state.totalItems + 1,
          totalPrice: state.totalPrice + product.price
        };
      } else {
        return {
          items: [...state.items, { ...product, quantity: 1 }],
          totalItems: state.totalItems + 1,
          totalPrice: state.totalPrice + product.price
        };
      }
    });
  },

  removeItem: (productId) => {
    set((state) => {
      const itemToRemove = state.items.find(item => item.id === productId);
      if (!itemToRemove) return state;

      const updatedItems = state.items.filter(item => item.id !== productId);
      return {
        items: updatedItems,
        totalItems: state.totalItems - itemToRemove.quantity,
        totalPrice: state.totalPrice - (itemToRemove.price * itemToRemove.quantity)
      };
    });
  },

  updateQuantity: (productId, quantity) => {
    if (quantity <= 0) {
      get().removeItem(productId);
      return;
    }

    set((state) => {
      const item = state.items.find(item => item.id === productId);
      if (!item) return state;

      const quantityDiff = quantity - item.quantity;
      const updatedItems = state.items.map(item =>
        item.id === productId
          ? { ...item, quantity }
          : item
      );

      return {
        items: updatedItems,
        totalItems: state.totalItems + quantityDiff,
        totalPrice: state.totalPrice + (item.price * quantityDiff)
      };
    });
  },

  clearCart: () => {
    set({
      items: [],
      totalItems: 0,
      totalPrice: 0
    });
  },

  getTotalPrice: () => get().totalPrice,
  getTotalItems: () => get().totalItems
}));
