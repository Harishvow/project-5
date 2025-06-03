/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#e5f3ff',
          100: '#cce7ff',
          200: '#99cfff',
          300: '#66b7ff',
          400: '#339fff',
          500: '#0087ff',
          600: '#006ccc',
          700: '#005199',
          800: '#003666',
          900: '#001b33',
          950: '#000d1a',
        },
        secondary: {
          50: '#f2f2f2',
          100: '#e6e6e6',
          200: '#cccccc',
          300: '#b3b3b3',
          400: '#999999',
          500: '#808080',
          600: '#666666',
          700: '#1a1a1a',
          800: '#141414',
          900: '#0d0d0d',
          950: '#080808',
        },
        accent: {
          50: '#ffe5f0',
          100: '#ffcce1',
          200: '#ff99c3',
          300: '#ff66a5',
          400: '#ff3387',
          500: '#ff0069',
          600: '#cc0054',
          700: '#99003f',
          800: '#66002a',
          900: '#330015',
          950: '#1a000b',
        },
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'bounce-slow': 'bounce 3s infinite',
        'spin-slow': 'spin 30s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'orbit': 'orbit 20s linear infinite',
        'orbit-reverse': 'orbit 25s linear infinite reverse',
        'orbit-slow': 'orbit 30s linear infinite',
        'scale-pulse': 'scalePulse 3s ease-in-out infinite',
        'slide-right': 'slideRight 3s ease-out infinite',
        'slide-left': 'slideLeft 3s ease-out infinite',
        'slide-up': 'slideUp 3s ease-out infinite',
        'slide-down': 'slideDown 3s ease-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { 
            boxShadow: '0 0 20px 5px rgba(0, 135, 255, 0.2)',
            transform: 'scale(1)',
          },
          '50%': { 
            boxShadow: '0 0 30px 10px rgba(0, 135, 255, 0.4)',
            transform: 'scale(1.05)',
          },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(0) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(0) rotate(-360deg)' },
        },
        scalePulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(-100%)' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};