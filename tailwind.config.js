/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#f9f9f9',
        'primary-font': '#616161',
        'secondary-font': '#a3a3a3',
        'secondary-bg': 'rgb(21, 219, 255)',
        overlay: 'rgb(21, 219, 255, 0.75)'
      },
      maxWidth: {
        container: '1440px'
      },
      backgroundImage: {
        hero: 'url(/header-x1.jpg)'
      },
      fontFamily: {
        body: ['Source Sans Pro', 'sans-serif']
      },
      boxShadow: {
        customShadow: '2px 2px 4px 0 rgba(0,0,0,0.10);'
      }

    }
  },
  plugins: []
}
