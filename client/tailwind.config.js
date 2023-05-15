/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: '#f4f4f4',
      black: '#181818',
      teal: '#001219',
      teal400: '#0A9396',
      sky: '#94D2BD',
      orange: '#CA6702',
      yellow: '#EE9B00',
      purple: '#39347A',
      purpleLight: '#615E88',
      purpleHover: '#642E8D'
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif']
    },
    fontSize: {
      sm: '.8rem',
      base: '1rem',
      lg: '1.2rem',
      xl: '1.4rem',
      '2xl': '1.6rem',
      '3xl': '1.8rem'
    },
    extend: {}
  },
  plugins: []
}
