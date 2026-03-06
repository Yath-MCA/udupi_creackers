export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: ProductCategory;
  image: string;
  images?: string[];
  rating: number;
  reviewCount: number;
  inStock: boolean;
  stockCount?: number;
  tags: string[];
  safetyLevel: 'low' | 'medium' | 'high';
  minAge?: number;
  featured?: boolean;
  newArrival?: boolean;
  bestSeller?: boolean;
}

export type ProductCategory =
  | 'flower-pots'
  | 'sparklers'
  | 'rockets'
  | 'bombs'
  | 'kids-crackers'
  | 'gift-boxes';

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartStore {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export interface CustomerInfo {
  name: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  pincode: string;
  deliveryPreference: 'home-delivery' | 'pickup';
  orderType: 'standard' | 'bulk';
  specialInstructions?: string;
}
