module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary: '#FEBE08',
        light:'#FFFFFF',
        lightGray:'#F3F3F3',
        dark: '#161616',
        darkGray: '#2B2A2D',   
        gray: '#707070'    
      },
      
      spacing:{
        100: '25rem',
        120: '30rem',
        140: '35rem',
        160: '40rem',
        180: '45rem',
        200: '50rem',
      },

      // shadow

      boxShadow: {
        btnShado: '35px 35px 0 10px #febe08',
      }


      
    },

    container: {
      center: true,
      padding: '1rem',
    },

  },
  
  plugins: [  require('flowbite/plugin')],
};