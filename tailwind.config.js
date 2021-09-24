module.exports = {
  purge: ['./src/**/*.{ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ['Libre Baskerville']
    },
    extend: {
      height: {
        'screen-40': '40vh'
      },
      gridTemplateColumns: {
        recipes: '200px 1fr'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/forms')]
};
