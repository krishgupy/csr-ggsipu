/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-color': '#FBFBE1',
        'box-color':'#D8E8DB',
        'bg-color':'#1E2B3C',
        'yellow-col':'#D8A647',
        'blue-col':"#4A9AC5"
        
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}