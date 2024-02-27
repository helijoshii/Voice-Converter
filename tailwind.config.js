/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'dropdown': "url('/images/dropdown.png')",
      }
    },
  },
  plugins: [],
}

