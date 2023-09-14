/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
      },
      screens: {
        "sm-440": "440px",
      },
      backgroundImage: {
        heroPattern: "url('/src/assets/bg-banner.png')",
        people: "url('/public/images/bgpeople.webp')",
        About: "url('/src/assets/bg-about.png')",
      },
    },
  },
  plugins: [],
};
