/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    fontFamily: {
      gilroy: ["Gilroy", "Arial", "sans-serif"],
    },
    colors: {
      "dark-slate-gray": "#2c2b35",
      green: "#43A548",
      "light-mist": "#f3f4f7",
      "light-gray": "#f7f8f8",
      transparent: "transparent",
      white: "#fff",
    },
    backgroundImage: {
      "green-gradient":
        "linear-gradient(148.89deg, rgb(67, 165, 72) -6.367%,rgb(82, 226, 89) 117.2%)",
    },
    extend: {},
  },
  plugins: [],
};
