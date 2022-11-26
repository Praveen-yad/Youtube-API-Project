/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        slide: 'slide 0.5s ease-in-out'
      },
      keyframes: {
        slide:{
          from:{opacity: 0.5, transform: 'translateX(5%)'},
          to:{opacity:1, tranaform: 'translateX(0)'}
        },
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}