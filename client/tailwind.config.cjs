/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#176B87'
      }
    },
  },
  plugins: [require('@tailwindcss/line-clamp'),],
};
