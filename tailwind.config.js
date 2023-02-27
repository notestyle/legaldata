/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "500px",
      md: "670px",
      lg: "1111px",
      xl: "1350px",
      "2xl": "1450px",
      "3xl": "1600px",
    },
    extend: {
      colors: {
        primary: "#252A47",
        secondary: "#E8494B",
        white: "#FFFFFF",
        white1: "#F5F7FA",
        gray: "#D9D9D9",
        star: "#FFAA05",
        "input-bg": "#F5F7FA",
        "input-border": "#EDEDED",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
