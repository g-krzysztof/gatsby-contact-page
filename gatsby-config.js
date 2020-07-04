module.exports = {
  siteMetadata: {
    title: `Krzysztof Gryc :: Front-end developer`,
    description: `A simple contact page created with Gatsby`,
    author: `hello@krzysztofg.pl`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Krzysztof Gryc :: Front-end developer`,
        short_name: `krzysztofg.pl`,
        start_url: `/`,
        background_color: `#52a5a0`,
        theme_color: `#52a5a0`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        excludedRoutes: [
          '/wp/v2/users/**',
          '/wp/v2/settings*',
          '/wp/v2/themes*',
        ],
        baseUrl: 'rubinow3.pro-linuxpl.com/_gatsby_krzysztofg',
        protocol: 'http',
        hostingWPCOM: false,
        useACF: false,
        searchAndReplaceContentUrls: {
          sourceUrl: 'http://rubinow3.pro-linuxpl.com/_gatsby_krzysztofg',
          replacementUrl: '',
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
