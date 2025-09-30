// File: tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#2D5BFF',
        secondary: '#FF9F1C',
        success: '#2ECC71',
        danger: '#E74C3C',
        warning: '#F39C12',
        info: '#3498DB',
      }
    },
  },
  plugins: [],
}