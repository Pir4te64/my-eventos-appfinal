// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './index.html',
      './src/**/*.{js,jsx,ts,tsx}'
    ],
    theme: {
      extend: {
        fontFamily: {
          bevietnam: ['"Be Vietnam Pro"', 'sans-serif'],
          source: ['"Source Sans Variable"', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }
  