/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#BAB3B5",
        secondary: "#B5C8B5", //#D8D6D7
        tertiary: "#030343",
        whiteColour: "#ffffff",
      },
      fontFamily: {
        regular: ["Lora", "serif"],
        cursive: ["Great Vibes", "cursive"],
      },
      backgroundImage: {
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
