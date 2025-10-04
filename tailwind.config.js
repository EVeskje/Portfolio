/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          400: '#60a5fa',
          500: '#3b82f6'
        },
        vib: {
          400: '#a78bfa'
        }
      },
      boxShadow: {
        soft: '0 10px 30px rgba(2,6,23,.08)',
        strong: '0 10px 25px rgba(2,8,23,.45)'
      },
      borderRadius: {
        '2xl': '1rem'
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: 0, transform: 'translateY(12px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up .6s ease forwards'
      }
    }
  },
  plugins: []
};