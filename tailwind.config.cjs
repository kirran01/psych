/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        view: "url('/public/img/view2.jpg')",
      },
    },
  },
  plugins: [],
};
