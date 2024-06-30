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
        pink:"#f472b6",
        blue:"#38bdf8",
        bla:"#000",
        yellow: "#0047AB",
        green :"#50C878",
        red:"#FFFD37"
      },

      fontFamily:{
        robot :[ "Roboto", 'sans-serif'],
        mont :[ "Montserrat", 'sans-serif'],
        head:[ "Raleway", 'sans-serif'],
         tut:[ "Nunito Sans", 'sans-serif'],
      },


    },
  },
  plugins: [flowbite.plugin(), require('tailwind-scrollbar')],
}

