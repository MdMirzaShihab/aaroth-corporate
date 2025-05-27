/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'earthy-yellow': '#D4A373',
        'earthy-brown': '#8C644A',
        'earthy-beige': '#F5ECD9',
        'earthy-tan': '#E6D5B8',
        'olive': '#708238',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

