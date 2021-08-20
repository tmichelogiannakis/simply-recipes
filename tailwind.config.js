module.exports = {
  purge: ['./src/**/*.{ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Roboto']
    },

    extend: {
      height: {
        'screen-40': '40vh'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
