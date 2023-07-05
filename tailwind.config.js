/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/daisyui/dist/**/*.js', 'node_modules/react-daisyui/dist/**/*.js'
  ],
  theme: {
    fontFamily: {
      "montserrat":['Montserrat', "sans-serif"],
      "lato":['Lato', "sans-serif"]
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}