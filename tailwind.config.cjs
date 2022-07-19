/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}',],
  theme: {
    fontFamily: {
      'display': ['Righteous'],
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
  darkMode: 'class',
  daisyui: {
    themes: ["garden", "light"],
  }
}
