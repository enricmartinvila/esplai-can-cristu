/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'mobile': '380px',      // Mobile breakpoint
        'tablet': '933px',      // Tablet breakpoint
        'laptop': '1280px',     // Laptop breakpoint
        'desktop': '1920px',    // Desktop breakpoint
        'xl': '2560px',         // Extra-large breakpoint
      },
      colors: {
        'text': '#9e3841', // Custom text color
        'bg': '#F4C3C9', // Custom text color
        'pur': '#B17BAA', // Custom text color
        'gran': '#7C2430', // Custom text color
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // Example for Google Fonts
      },
    },
  },
  plugins: [],
};