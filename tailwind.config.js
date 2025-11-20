/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f7ff',
          100: '#eef2ff',
          200: '#e0e7ff',
          300: '#c7d2fe',
          400: '#a5b4fc',
          500: '#7c3aed',
          600: '#6d28d9',
          700: '#5b21b6',
          800: '#4c1d95',
          900: '#38106f'
        },
        accent: {
          50: '#fff7ed',
          100: '#fff1e6',
          200: '#ffedd5',
          300: '#fed7aa',
          400: '#fdba74',
          500: '#fb923c',
          600: '#f97316',
          700: '#ea580c',
          800: '#c2410c',
          900: '#9a3412'
        },
        neutral: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e9e9ea',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#26272b',
          900: '#111113'
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
