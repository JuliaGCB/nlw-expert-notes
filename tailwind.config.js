/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.tsx", //A onde pode ter classes do tailwindcss
  ],
  theme: {
    extend: {
     fontFamily: {
        sans: ['Inter', 'sans-serif' ]
     },
    },
  },
  
  plugins: [],

}