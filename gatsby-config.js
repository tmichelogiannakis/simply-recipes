module.exports = {
  siteMetadata: {
    title: 'Simply Recipes',
    description: 'Nice and clean recipes site'
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/components/Layout/Layout.tsx')
      }
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Roboto:wght@400;700'],
        display: 'swap'
      }
    }
  ]
};
