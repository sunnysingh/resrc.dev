require('dotenv').config();

const AIRTABLE_BASE_ID = 'appxAjT2ITT8Y4zRv';

module.exports = {
  siteMetadata: {
    title: 'Resrc',
    description: 'Resources for software development',
    author: '@sunnysinghio',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'resrcdev',
        short_name: 'resrc',
        start_url: '/',
        background_color: '#222222',
        theme_color: '#042340',
        display: 'minimal-ui',
        icon: 'src/images/resrc-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-chakra-ui',
    {
      resolve: 'gatsby-source-airtable',
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        tables: [
          {
            baseId: AIRTABLE_BASE_ID,
            tableName: 'Resources',
            tableView: 'Recent',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-fathom',
      options: {
        trackingUrl: 'penguin.sunny.app',
        siteId: 'QDGPYMRN',
        whitelistHostnames: ['resrc.dev', 'www.resrc.dev'],
        embedVersion: 'v2',
      },
    },
  ],
};
