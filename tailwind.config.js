/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    boxShadow: {
      authFormContainer: '0px 2px 18px 3px #00291214',
    },
    extend: {
      backgroundColor: {
        primaryBG: '#F5FFF9',
        secondaryBG: '#07A53D',
        healthgoBlack: '#002912',
        sectionBg: '#F5FFF8'
      },
      colors: {
        white: '#FFFFFF',
        primary: '#F5FFF9',
        secondary: '#07A53D',
        healthgoBlack: '#002912',
        black: {
          100: "#000000",
          200: '#545C58'
        },
        blue: {
          100: '#DBFAE7',
          200: '#B4F9D2'
        }
      },

      fontFamily: {
        sans: ['"Sofia Sans"', ...defaultTheme.fontFamily.sans],
        barlow: ['Barlow', ...defaultTheme.fontFamily.sans],
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

