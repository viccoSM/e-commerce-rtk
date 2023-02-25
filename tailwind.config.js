/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          red: '#EB2128',
          gray: {
            light: '#E5E5E5'
          }
        }
      }
    },
  },
  plugins: [],
}
