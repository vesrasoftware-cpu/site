/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f7ff',
          100: '#ebf0fe',
          200: '#d6e0fd',
          300: '#b3c5fb',
          400: '#8ca5f8',
          500: '#667eea',
          600: '#5568d3',
          700: '#4453b8',
          800: '#37429a',
          900: '#2d3677',
        },
        secondary: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
        },
      },
      boxShadow: {
        'wp': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'wp-lg': '0 8px 24px rgba(0, 0, 0, 0.12)',
        'wp-xl': '0 16px 48px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
};
