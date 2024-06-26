/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bxm-card": "#1F1F1F",
        "bxm-footer": "#2D2D2D",
        "bxm-black": "#000000",
        "bxm-gray": "#B7B7B7",
        "bxm-red": "#E20613",
        "bxm-main": "#161517",
        "bxm-white": "#FFFFFF",
        "bxm-modal-background": "#16151766",
      },
      letterSpacing: {
        lighter: "calc(1em / -50)",
        light: "calc(1em / -33)",
      },
    },
    screens: {
      xxs: { min: "360px" },
      xs: { min: "540px" },
      sm: { min: "640px" },
      s: { min: "768px" },
      md: { min: "900px" },
      lg: { min: "1100px" },
      xl: { min: "1440px" },
      "has-hover": { raw: "(hover: hover)" },
      "no-hover": { raw: "(hover: none)" },
    },
  },
  plugins: [],
};
