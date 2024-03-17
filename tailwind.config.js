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
          light: "#F9E9E9",
        },
        pink: {
          DEFAULT: "#f56868",
          light: "#fff5f5",
        },
        green: {
          DEFAULT: "#22ba00",
          light: "#f0fff4",
        },
        orange: {
          DEFAULT: "#FD9302",
          light: "#feebc8",
        },
        purple: {
          light: "#faf5ff",
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
