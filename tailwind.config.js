/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brandBg: "#fff9f0",
        brandCard: "#F9F2E5",
        accent: "#f59e0b",
        neutralDec: "#57564f",
        brandDark: "#000000"
      },
      keyframes: {
        float: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0)" },
        }
      },
      animation: {
        float: "float 4s ease-in-out infinite"
      }
    },
  },
  plugins: [],
};
