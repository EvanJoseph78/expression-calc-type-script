/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': {
          '50': '#f6f7f9',
          '100': '#eceef2',
          '200': '#d5dae2',
          '300': '#afb9ca',
          '400': '#8495ac',
          '500': '#657792',
          '600': '#506079',
          '700': '#424e62',
          '800': '#394353',
          '900': '#2b313c',
          '950': '#22262f',
        },

        'secondary-color': {
          '50': '#fff8ec',
          '100': '#fff0d2',
          '200': '#ffdda4',
          '300': '#ffc36b',
          '400': '#ff9e2f',
          '500': '#ff7f07',
          '600': '#f96300',
          '700': '#c64600',
          '800': '#a33a09',
          '900': '#83310b',
          '950': '#471603',
        },

      }
    },
  },
  plugins: [],
  darkMode: "class"
}

