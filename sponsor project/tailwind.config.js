/** @type {import('tailwindcss').Config} */
module.exports = {
  content:["./src/**/*.{html,js}"],

  theme: {
    extend: {
      margin: {
        '1000px': '1000px',
        '350px':'350px',
        '100px':'100px'
  
  
      },
      spacing:{
        '107px':'107px',
        '100px':'100px'
      },
    
  
    },
  },
  plugins: [require('@shrutibalasa/tailwind-grid-auto-fit')],
}

