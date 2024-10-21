/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'mobile': '380px',      // Mobile breakpoint
        'tablet': '768px',      // Tablet breakpoint
        'laptop': '1280px',     // Laptop breakpoint
        'desktop': '1920px',    // Desktop breakpoint
        'xl': '2560px',         // Extra-large breakpoint
      },
    },
  },
  plugins: [],
};
