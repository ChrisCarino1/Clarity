import app from './src/components/'

/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: ["index.html", "./src/components/*.jsx", "./src/components/*.js", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // fontFamily: {
      //   'sans' : ['Proxima Nova']
      // }
    },
  },
  plugins: [],
}
