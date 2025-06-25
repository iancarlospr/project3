/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'pirata': ['Pirata One', 'cursive'],
        'crimson': ['Crimson Text', 'serif'],
      },
      colors: {
        'caribbean-blue': '#0ea5e9',
        'weathered-gold': '#d97706',
        'aged-parchment': '#fef3c7',
        'deep-navy': '#1e3a8a',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s infinite',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};