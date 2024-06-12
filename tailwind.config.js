const plugin = require('tailwindcss/plugin')
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      margin:{
        '-100p' : '-100%'
      },
      fontFamily: {
        poppin: ['"Poppins"']
      },
      screens: {
        '05sz':'575px',
        '07sz': '764px',
        '10sz': '1080px',
        '12sz': '1200px',
        '13sz': '1370px',
      },
    },
    
  },
  plugins: [
    plugin(function({addUtilities}){
      addUtilities({
        '.scrollbar-none' : {
          'scrollbar-width' : 'none',
        },
      })
    })
  ],
}


