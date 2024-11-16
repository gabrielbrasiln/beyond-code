/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'main-bg': '#0e0e0e',
        'primary': "#183593",
        'secondary': "#1955E9",
        'info': "#8EA9FF",
      },
      fontFamily: {
        'sans': ['"Poppins"', ...defaultTheme.fontFamily.sans],
        'nunito': ['"Nunito"'],
      },
      backgroundImage: {
        'step': "url('./img/bg-step.png')",
      },
    },
  },
  plugins: [
		require('tailwindcss-animated'),
    require('tailwindcss-intersect')
	],
}

