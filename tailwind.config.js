/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bxm-black": "#000000",
        "bxm-gray": "#B7B7B7",
        "bxm-red": "#E20613",
        "bxm-main": "#161517",
        "bxm-white": "#FFFFFF",
      },
      letterSpacing: {
        lighter: "calc(1em / -50)",
        light: "calc(1em / -33)",
      },
    },
  },
  plugins: [],
};
