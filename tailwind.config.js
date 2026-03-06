/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'diwali-gold': '#FFD700',
        'diwali-orange': '#FF8C00',
        'diwali-red': '#DC143C',
        'diwali-maroon': '#800000',
        'diwali-yellow': '#FFA500',
        'diwali-dark': '#1a1a1a',
      },
      fontFamily: {
        display: ['Georgia', 'serif'],
      },
      animation: {
        'sparkle': 'sparkle 1.5s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        sparkle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.2)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
