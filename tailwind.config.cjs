/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {},
    colors:{
      'black':'#000000',
      'violet':'#756BF0',
      'blue':'#35FEFF',
      'yellow':'#FFE385',
      'white':'#F7F7F7',
      'green':'#5CDFA5',
      'dviolet':'#484575',
      'lviolet':'#666385',
      'red':'#F96256',
      'grey':'#E4E3E5',
      'lyellow':'#FDBC3D',
      'lgreen':'#33C948',


    },
    fontFamily:{
      'abel':['Abel', 'sans-serif']
    },

  },
  plugins: [],
}