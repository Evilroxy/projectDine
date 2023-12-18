/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-mobile": "url('img/hero-bg-mobile.jpg)",
      },
      fontFamily: {
        spartan: ["Spartan", "sans-serif"],
      },

    },
  },
  plugins: [],
};

