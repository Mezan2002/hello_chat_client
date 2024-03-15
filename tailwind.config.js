/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // brand: "#1053f3",
        brand: "#4621ff",
        blue: {
          light: "#c8d6ed",
          softLight: "#e7effd",
        },
        regular: {
          light: "#C9C9C9",
          soft: "#C2C2C2",
          mini: "#CACACA",
        },
        red: {
          DEFAULT: "#FF3030",
        },
        green: {
          DEFAULT: "#22BA00",
        },
        orange: {
          DEFAULT: "#FD9302",
        },
        lightGrayShadow: "#F8F8FC",
      },
    },
  },
  plugins: [],
};
