import app from './src/components/'

/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  mode: 'jit',
  content: ["index.html", "./src/components/*.jsx", "./src/components/*.js", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      dropShadow: {
        glow: [
          "0 0px 20px rgba(255,255, 255, 0.35)",
          "0 0px 65px rgba(255, 255,255, 0.2)"
        ],
        colors: {
          primary: '#202225',
          secondary: '#5865f2',
          gray: {
            900: '#20225',
            800: '#2f3136',
            700: '#36393f',
            600: '#4f545c',
            400: '#d4d7dc',
            300: '#e3e5e8',
            200: '#ebedef',
            100: '#f2f3f5'
          }
        }
      }    
    },
  },
  plugins: [],
}
