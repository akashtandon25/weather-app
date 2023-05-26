/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      flex: {
        '2': '2 2 0%',
        '6': '6 6 0%'
      },
      spacing: {
        '700': '800px',
        '100': '100px',
        '50': '50px'
      }
    },
    fontFamily: {
      sans: ['Inter var', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
}

