/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      
      // design system colors
      primary: '#005f73',
      secondary: '#ee9b00',
      tertiary: '#39347a',
      canvas: '#fcf9f8',
      mint: '#94d2bd',
      burntOrange: '#ca6702',
      charcoal: '#181818',
      slatePurple: '#615e88',
      bulletLilac: '#9a9ce0',

      // legacy colors
      teal: '#001219',
      teal400: '#0A9396',
      emerald: '#005F73',
      sky: '#94D2BD',
      orange: '#CA6702',
      yellow: '#EE9B00',
      purple: '#39347A',
      purpleLight: '#615E88',
      purpleHover: '#642E8D',
      lilac: '#9A9CE0'
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
      '3xl': '1.8rem',
      '4xl': '2rem',
      '5xl': '2.2rem',
      '6xl': '2.4rem',
      '7xl': '2.6rem'
    },
    extend: {}
  },
  plugins: []
}
