/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      colors: {
        digitalLavender: "#e6e6fa",
        beige: "#F0E5DE",
        lusciousRed: "#8a3242",
        tranquilBlue: "#a6cae5",
        blue: "#30a9de",
        red: "#e53a40",
        black: "#1e2022",
        darkGray: "#3f4040",
        mediumGray: "#8b8687",
        lightGray: "#e3dede",
      },
      fontFamily: {
        sans: ["Raleway", ...defaultTheme.fontFamily.sans],
        serif: ["Marcellus", ...defaultTheme.fontFamily.serif],
        cursive: ["Solitreo"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
