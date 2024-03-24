/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        primaryBG: '#F5FFF9',
        secondaryBG: '#07A53D',
        healthgoBlack: '#002912',
      },

      fontFamily: {
        sans: ['"Sofia Sans"', ...defaultTheme.fontFamily.sans],
      },
      textColor: {
        healthgoBlack: '#002912',
        healthgoGreen: '#07A53D',
      },
      borderColor: {
        primary: '#B8E5CA',
      },
    },
  },
  plugins: [],
};

