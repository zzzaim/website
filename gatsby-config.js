/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'zzzaim freelancer website',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-svgr-svgo',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Nunito'],
        display: 'swap',
      },
    },
  ],
}
