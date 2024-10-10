/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      blue: "#002855",
      orange: "#EAAA00",
      green: "#13ce66",
      yellow: "#EAAA00",
      warning: "#E46561",
      success: "#90CA7D",
      gray: "#D9D9D9",
      info: "#47A4CB",
      white: "white",
      whitesmoke: "#f7f7f7",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {},
  },
  plugins: [],
};
