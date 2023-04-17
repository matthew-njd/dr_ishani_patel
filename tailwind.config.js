/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#BAB3B5",
        secondary: "#EEE2DC",
        tertiary: "#030343",
        whiteColour: "#ffffff",
      },
      fontFamily: {
        regular: ["Playfair Display", "serif"],
        cursive: ["Great Vibes", "cursive"],
      },
      backgroundImage: {
        wave: "url('/src/assets/wave.svg')",
        wood: "url('/src/assets/white-wood.png')",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
