const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // brand: "#1053f3",
        brand: {
          DEFAULT: "#4621ff",
          light: "#edebfa",
          lighter: "#f7f5ff",
        },
        blue: {
          light: "#c8d6ed",
          softLight: "#efedfa",
        },
        regular: {
          light: "#C9C9C9",
          soft: "#C2C2C2",
          mini: "#CACACA",
        },
        red: {
          DEFAULT: "#FF3030",
        },
        pink: {
          DEFAULT: "#f56868",
          light: "#fff5f5",
        },
        green: {
          light: "#f0fff4",
        },
        orange: {
          DEFAULT: "#FD9302",
        },
        purple: {
          light: "#faf5ff",
        },
        yellow: {
          light: "#feebc8",
        },
        blue: {
          light: "#ebf8ff",
        },
        lightGrayShadow: "#F8F8FC",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
