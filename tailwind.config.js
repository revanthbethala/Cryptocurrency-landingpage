/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: { inter: ["Inter"] },
    extend: { fontFamily: { inter: ["Inter", "sans-serif"] } },
  },

  plugins: [],
};
