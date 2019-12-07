module.exports = {
  siteMetadata: {
    siteUrl: 'http://member.ieeebeykent.org',
    name: 'IEEE Beykent Member Platform',
    title: `IEEE Beykent Member Platform`,
    description: `IEEE Beykent`,
    author: `@ozandundar`
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#074264`,
        theme_color: `#074264`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    },

    // Additional Plugins
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        showSpinner: true,
        trickle: false,
        minimum: 0.4,
        color: 'indianred'
      }
    },
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 'http://panel.ieeebeykent.org',
        protocol: 'http',
        hostingWPCOM: false,
        useACF: true,
        acfOptionPageIds: [],
        verboseOutput: false,
        perPage: 100,
        // searchAndReplaceContentUrls: {
        //   sourceUrl: 'http://panel.ieeebeykent.org',
        //   replacementUrl: 'http://member.ieeebeykent.org'
        // },
        // Set how many simultaneous requests are sent at once.
        concurrentRequests: 10,
        includedRoutes: [
          '**/categories',
          '**/posts',
          '**/pages',
          '**/media',
          '**/tags',
          '**/taxonomies',
          '**/users',
          '**/*/*/menus', // <== Menu api endpoint
          '**/*/*/menu-locations' // <== Menu api endpoint
        ],
        excludedRoutes: [],
        normalizer: function({ entities }) {
          return entities;
        }
      }
    }
  ]
};
