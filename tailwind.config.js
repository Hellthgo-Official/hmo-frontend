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
        grey: '#D5D8D6',
        blandGreen: '#D2F9DF',
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
        green: '#07A53D',
      },
    },
  },
  plugins: [],
};

