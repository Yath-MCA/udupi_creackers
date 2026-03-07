import { Product } from '../types';

export const products: Product[] = [
  // Flower Pots
  {
    id: 'fp-001',
    name: 'Golden Flower Pot',
    description: 'Beautiful golden flower pot with sparkling effects that lights up the sky',
    category: 'flower-pots',
    price: 150,
    discountPrice: 120,
    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
    stock: 50,
    safetyInstructions: ['Use in open space', 'Keep 15 feet distance', 'Adult supervision required'],
    features: ['Long lasting', 'Golden sparks', 'Low smoke']
  },
  {
    id: 'fp-002',
    name: 'Rainbow Flower Pot',
    description: 'Multi-colored flower pot that creates a rainbow effect in the sky',
    category: 'flower-pots',
    price: 200,
    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
    stock: 30,
    safetyInstructions: ['Use in open space', 'Keep 15 feet distance', 'Adult supervision required'],
    features: ['Multi-color', 'High intensity', 'Eco-friendly']
  },
  {
    id: 'fp-003',
    name: 'Silver Champa',
    description: 'Traditional silver champa flower pot with classic effects',
    category: 'flower-pots',
    price: 120,
    discountPrice: 100,
    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
    stock: 75,
    safetyInstructions: ['Use in open space', 'Keep 10 feet distance'],
    features: ['Classic design', 'Silver sparks', 'Long duration']
  },

  // Sparklers
  {
    id: 'sp-001',
    name: 'Magic Sparklers',
    description: 'Long-lasting magic sparklers perfect for kids and celebrations',
    category: 'sparklers',
    price: 80,
    discountPrice: 60,
    imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop',
    stock: 100,
    safetyInstructions: ['Hold at arm\'s length', 'Adult supervision for kids', 'Keep water nearby'],
    features: ['5 minutes burn time', 'Safe for kids', 'Bright sparks']
  },
  {
    id: 'sp-002',
    name: 'Colorful Sparklers',
    description: 'Multi-colored sparklers that create beautiful patterns',
    category: 'sparklers',
    price: 100,
    imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop',
    stock: 80,
    safetyInstructions: ['Hold at arm\'s length', 'Adult supervision for kids'],
    features: ['Multi-color', 'Pattern effects', 'Smokeless']
  },
  {
    id: 'sp-003',
    name: 'Heart Sparklers',
    description: 'Romantic heart-shaped sparklers for special occasions',
    category: 'sparklers',
    price: 120,
    imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop',
    stock: 60,
    safetyInstructions: ['Hold at arm\'s length', 'Adult supervision required'],
    features: ['Heart shape', 'Romantic', 'Photo perfect']
  },

  // Rockets
  {
    id: 'rk-001',
    name: 'Sky Rocket Deluxe',
    description: 'High-flying rocket with explosive finale',
    category: 'rockets',
    price: 250,
    discountPrice: 200,
    imageUrl: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=400&h=400&fit=crop',
    stock: 40,
    safetyInstructions: ['Launch from open ground', 'Keep 30 feet distance', 'Stand clear of launch area'],
    features: ['500 feet height', 'Loud explosion', 'Multi-stage']
  },
  {
    id: 'rk-002',
    name: 'Moon Rocket',
    description: 'Powerful rocket that reaches incredible heights',
    category: 'rockets',
    price: 300,
    imageUrl: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=400&h=400&fit=crop',
    stock: 25,
    safetyInstructions: ['Launch from open ground', 'Keep 30 feet distance', 'Adult operation only'],
    features: ['1000 feet height', 'Powerful thrust', 'Spectacular finale']
  },
  {
    id: 'rk-003',
    name: 'Whistle Rocket',
    description: 'Rocket with whistling sound effects during flight',
    category: 'rockets',
    price: 180,
    imageUrl: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=400&h=400&fit=crop',
    stock: 35,
    safetyInstructions: ['Launch from open ground', 'Keep 25 feet distance'],
    features: ['Whistle sound', 'Medium height', 'Family friendly']
  },

  // Bombs
  {
    id: 'bm-001',
    name: 'Atom Bomb',
    description: 'Powerful ground bomb with thunderous sound',
    category: 'bombs',
    price: 150,
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
    stock: 20,
    safetyInstructions: ['Use in open area', 'Keep 50 feet distance', 'Ear protection recommended'],
    features: ['Loud sound', 'Ground effect', 'High impact']
  },
  {
    id: 'bm-002',
    name: 'Garland Bomb',
    description: 'Series of small explosions creating garland effect',
    category: 'bombs',
    price: 200,
    discountPrice: 180,
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
    stock: 30,
    safetyInstructions: ['Use in open area', 'Keep 40 feet distance'],
    features: ['Multiple explosions', 'Chain reaction', 'Visual effect']
  },

  // Kids Crackers
  {
    id: 'kd-001',
    name: 'Kids Fun Pack',
    description: 'Safe and fun crackers specially designed for children',
    category: 'kids-crackers',
    price: 100,
    discountPrice: 80,
    imageUrl: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop',
    stock: 200,
    safetyInstructions: ['Adult supervision required', 'Use in open space', 'Keep away from face'],
    features: ['Child safe', 'Low noise', 'Colorful']
  },
  {
    id: 'kd-002',
    name: 'Pencil Crackers',
    description: 'Small pencil-sized crackers perfect for kids',
    category: 'kids-crackers',
    price: 50,
    imageUrl: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop',
    stock: 300,
    safetyInstructions: ['Adult supervision required', 'Hold at arm\'s length'],
    features: ['Easy to use', 'Small size', 'Low intensity']
  },

  // Gift Boxes
  {
    id: 'gb-001',
    name: 'Deluxe Diwali Gift Box',
    description: 'Premium collection of assorted crackers for complete Diwali celebration',
    category: 'gift-boxes',
    price: 2000,
    discountPrice: 1500,
    imageUrl: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop',
    stock: 15,
    safetyInstructions: ['Read individual instructions', 'Use each item as directed'],
    features: ['50+ items', 'Variety pack', 'Premium quality', 'Gift wrapped']
  },
  {
    id: 'gb-002',
    name: 'Family Celebration Box',
    description: 'Complete family pack with crackers for all age groups',
    category: 'gift-boxes',
    price: 1500,
    imageUrl: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop',
    stock: 20,
    safetyInstructions: ['Read individual instructions', 'Adult supervision required'],
    features: ['30+ items', 'Family friendly', 'Mixed variety']
  },
  {
    id: 'gb-003',
    name: 'Eco-Friendly Gift Box',
    description: 'Environmentally friendly crackers with low smoke and pollution',
    category: 'gift-boxes',
    price: 1800,
    discountPrice: 1600,
    imageUrl: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop',
    stock: 10,
    safetyInstructions: ['Read individual instructions', 'Use in open space'],
    features: ['Green crackers', 'Low pollution', 'Eco-friendly']
  }
];

export const categories = [
  {
    id: 'flower-pots',
    name: 'Flower Pots',
    description: 'Beautiful flower pots that light up the sky',
    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
  },
  {
    id: 'sparklers',
    name: 'Sparklers',
    description: 'Safe and colorful sparklers for all ages',
    imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=300&fit=crop'
  },
  {
    id: 'rockets',
    name: 'Rockets',
    description: 'High-flying rockets with spectacular effects',
    imageUrl: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=400&h=300&fit=crop'
  },
  {
    id: 'bombs',
    name: 'Bombs',
    description: 'Powerful ground bombs for loud celebrations',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop'
  },
  {
    id: 'kids-crackers',
    name: 'Kids Crackers',
    description: 'Safe and fun crackers specially for children',
    imageUrl: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=300&fit=crop'
  },
  {
    id: 'gift-boxes',
    name: 'Gift Boxes',
    description: 'Premium gift boxes with assorted crackers',
    imageUrl: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=300&fit=crop'
  }
];
