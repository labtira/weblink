/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
            backgroundImage: theme => ({
             'hero': "url('../assets/img/Classroom.jpg')"
            })
    },
    colors: {
      primary: '#ff5f00',
      black: "#000000",
      white: "#ffffff",
      grey: "#808080",
      greyshadow: "hsla(0, 0%, 79%, 0.20)",
      darkgrey: "#36393e",
      lightgrey: "hsla(0, 0%, 100%, 0.7)",
      green: "#00FF00"
    },
  },
  plugins: [],
}
