/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enables dark mode
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dotgothic: ["DotGothic16", "sans-serif"],
      },
    },
  },
  plugins: [],
};
