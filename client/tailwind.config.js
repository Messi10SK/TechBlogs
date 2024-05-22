/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content()
  ],
  theme: {
    extend: {
      colors: {
        black:"#111",
        zinc: "#101010",
      },

      fontFamily:{
        robot :[ "Roboto", 'sans-serif'],
        mont :[ "Montserrat", 'sans-serif'],
      },


    },
  },
  plugins: [flowbite.plugin(), require('tailwind-scrollbar')],
}

