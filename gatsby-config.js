const config = require('./config/website')

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix

const contentfulHost = process.env.NODE_ENV !== 'production' ? 'preview.contentful.com' : 'cdn.contentful.com'

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    siteUrl: config.siteUrl + pathPrefix
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-emotion',
      options: {
        autoLabel: process.env.NODE_ENV !== 'production',
        labelFormat: '[filename]--[local]'
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 820,
              quality: 90,
              linkImagesToOriginal: false
            }
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow noopener noreferrer'
            }
          },
          'gatsby-remark-responsive-iframe'
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: config.googleAnalyticsID
      }
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: config.facebookPixelID
      }
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: config.themeColor
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-ramda',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.jsx'
      }
    },
    'gatsby-plugin-catch-links',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleAlt,
        description: config.siteDescription,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'standalone',
        icon: 'src/favicon.jpg'
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
    {
      resolve: `gatsby-source-contentful`,

      options: {
        spaceId: 'x29fsil08ck7',
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: contentfulHost
      }
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        access_token: process.env.INSTAGRAM_ACCESS_TOKEN,
        instagram_id: process.env.INSTAGRAM_ID
      }
    }
  ]
}
