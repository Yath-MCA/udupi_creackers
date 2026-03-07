export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  discountPrice?: number;
  imageUrl: string;
  stock: number;
  safetyInstructions?: string[];
  features?: string[];
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Order {
  id: string;
  customerName: string;
  phone: string;
  address?: string;
  items: CartItem[];
  totalPrice: number;
  createdAt: Date;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

export type CartState = {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
};
