/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      listStyleImage: {
        checkmark: 'url("/images/check-mark.svg")',
      },
      colors: {
        "theme-red": "#FA8787",
        "theme-orange": "#FF9245",
        "theme-blue": "#5083FF",
        "theme-purple": "#6E6CCC",
        "theme-amber": "FF660B",
      },
      fontFamily: {
        sans: ["Futura", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "graph-papper": "url('/images/graph-paper.svg')",
      },
    },
  },
  plugins: [],
};
