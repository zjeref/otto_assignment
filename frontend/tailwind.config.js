/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F4F4F4",
        primary: "#076AE1",
        secondary: "#3e3e40",
        blackk: "#101519",
        greyy: "#4D4D4D",
        greyy2: "#4F4646",
        greyy3: "#7A7A7A",
        whitee: "#FFFFFF",
        bluee: "#2680EB",
        header: "#076AE1",
      },
      maxWidth: {
        "8xl": "1440px",
      },
    },
    fontFamily: {
      sans: ["DM Sans", "sans-serif"],
    },
  },
  plugins: [],
};
