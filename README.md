# Dipawali Crackers - E-commerce Website

A modern, responsive e-commerce website for selling Diwali crackers and fireworks, built with React, Vite, TypeScript, and TailwindCSS.

## 🎆 Features

- **Modern UI/UX** with Diwali festival theme
- **Product Catalog** with categories (Flower Pots, Sparklers, Rockets, Bombs, Kids Crackers, Gift Boxes)
- **Shopping Cart** with real-time updates
- **WhatsApp Integration** for easy ordering
- **Responsive Design** optimized for all devices
- **Search & Filter** functionality
- **Product Detail Pages** with image galleries
- **Checkout Process** with delivery preferences
- **SEO Optimized** with proper meta tags
- **Performance Optimized** with lazy loading and code splitting

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS + Custom Diwali theme
- **Icons**: Lucide React
- **State Management**: Zustand
- **Routing**: React Router v6
- **Deployment**: Vercel (ready)

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd dipawali-crackers
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically build and deploy your site

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to your hosting provider

## 📱 Environment Variables

Create a `.env` file based on `.env.example`:

```bash
cp .env.example .env
```

Optional variables for Supabase integration:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 🎨 Customization

### Colors
The Diwali theme colors are defined in `tailwind.config.js`:
- `diwali-gold`: #FFD700
- `diwali-orange`: #FF8C00
- `diwali-red`: #DC143C
- `diwali-maroon`: #800000
- `diwali-yellow`: #FFA500
- `diwali-dark`: #1a1a1a

### Products
Update product data in `src/data/products.ts`:
- Add new products
- Update prices
- Modify categories
- Change images

### WhatsApp Number
Update the WhatsApp business number in:
- `.env` file
- Component files (search for `919876543210`)

## 📂 Project Structure

```
src/
├── components/          # Reusable components
│   ├── layout/         # Navbar, Footer
│   ├── product/        # ProductCard
│   ├── cart/           # CartItem
│   └── ui/             # UI components
├── pages/              # Page components
│   ├── HomePage.tsx
│   ├── ProductsPage.tsx
│   ├── ProductDetailPage.tsx
│   ├── CartPage.tsx
│   ├── CheckoutPage.tsx
│   └── OrderSuccessPage.tsx
├── store/              # Zustand state management
│   └── cartStore.ts
├── data/               # Static data
│   └── products.ts
├── types/              # TypeScript types
│   └── index.ts
├── utils/              # Utility functions
├── assets/             # Static assets
├── App.tsx             # Main app component
├── main.tsx            # App entry point
└── index.css           # Global styles
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Features Breakdown

### Homepage
- Hero section with call-to-action
- Featured categories
- Product showcases
- Special offers
- Trust indicators

### Product Catalog
- Grid/List view toggle
- Category filtering
- Search functionality
- Sort options (price, name, rating)
- Product cards with quick add

### Product Detail
- Image gallery
- Product information
- Safety instructions
- Quantity selector
- WhatsApp order button
- Related products

### Shopping Cart
- Item management
- Quantity updates
- Price calculation
- Order summary
- WhatsApp checkout

### Checkout
- Customer information form
- Delivery preferences
- Order type selection
- Order summary
- WhatsApp integration

## 🚀 Performance Features

- **Lazy Loading**: Images load as needed
- **Code Splitting**: Optimized bundle sizes
- **SEO**: Meta tags and structured data
- **Responsive**: Mobile-first design
- **Animations**: Smooth transitions and effects

## 📞 Contact & Support

- **Phone**: +91 98765 43210
- **WhatsApp**: +91 98765 43210
- **Email**: info@dipawalicrackers.com
- **Address**: 123 Festival Street, Chennai, Tamil Nadu 600001

## 🔒 Safety Features

- Safety instructions on all products
- Age-appropriate categorization
- Warning badges for limited stock
- Safety reminders during checkout

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 Notes

- The project uses placeholder images from Unsplash
- WhatsApp integration opens the WhatsApp app/web with pre-filled message
- All prices are in Indian Rupees (₹)
- The project is ready for Supabase integration if needed

---

🎆 **Happy Diwali!** Celebrate safely with Dipawali Crackers! 🎆
