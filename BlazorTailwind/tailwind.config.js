module.exports = {
  content: ['./Components/**/*.razor'],
  theme: {
    fontFamily: {
      sans: ['Inter var'],
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
