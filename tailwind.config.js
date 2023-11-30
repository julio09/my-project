/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize :{
      'Xlarge': '144px',
      'large': '64px',
      'normal': '18px',
      'medium': '48px'
    },
    extend: {
      borderRadius: {
        'radius': '40px',
        'elypse': '64px'
      },
      colors:{
        'primary': '#1C1C1C',
        'stroke': '#D4D4D4',
        'slate': '#91ACA7'
      },
      fontFamily: {
        'sans': ['"Century Gothic"','ui-sans-serif', 'system-ui'],
      }
    },
  },
  plugins: [],
}