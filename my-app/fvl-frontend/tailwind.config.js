/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width : {
        '100' : '25rem',
        '104' : '26rem',
      }
    },
  },
  plugins: [],
}

