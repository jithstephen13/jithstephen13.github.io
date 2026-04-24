/** @type {import('tailwindcss').Config} */
const {fontFamily}= require("tailwindcss/defaultTheme")
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}',
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)',...fontFamily.sans],
        
      },
      colors: {
        dark: "#1a1b1e",
        light: "#f5f5f5",
        primary: "#ffcc00",
        primaryDark: "#e6b800",
      },
    
    
    },
  },
  plugins: [],
}

