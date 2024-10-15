const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    extend: {
      colors: {
        'custom-color-1': '#202020',
        'font-color': '1A1A1A',
      },
      padding: {
        'custom-padding-1': '200px',
      },
      width: {
        'custom-size-1': '300px',
        'custom-size-2': '400px',
      },
      heigh: {
        'custom-size-1': '200px',
        'custom-size-2': '300px',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
  ]
}
