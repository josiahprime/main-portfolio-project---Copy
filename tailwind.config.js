/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens :{
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    extend: {
      colors: {
        'primary': '#212121',
        'secondary': 'cyan',
        'base': 'rgb(143, 224, 143)',
      },
      fontFamily:{
        custom1: ['DM Sans'],
        custom2: ['Nunito'],
        custom3: ['Roboto']

      },
      textColor: {
        skin: {
          base: 'var(--color)'
        }
      }
      
    },
  },
  plugins: [],
}

