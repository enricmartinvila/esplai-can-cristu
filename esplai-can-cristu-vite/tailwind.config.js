/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'mobile': '380px',      // Mobile breakpoint
        'tablet': '768px',      // Tablet breakpoint
        'desktop': '1024px',    // Desktop breakpoint
        'laptop': '1280px',     // Laptop breakpoint
        'xl': '1440px',         // Extra-large breakpoint
      },
    },
  },
  plugins: [],
};
