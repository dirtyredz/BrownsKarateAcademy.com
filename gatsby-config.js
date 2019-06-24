var Colors = require('./src/utils/colors')
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.brownskarateacademy.com`,
    title: `Brown's Karate Academy`,
    description: `.`,
    author: `Digital Redz | David McClain (Dirtyredz)`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
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
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Browns Karate Academy`,
        short_name: `BKA`,
        start_url: `/`,
        background_color: Colors.White,
        theme_color: Colors.Red,
        display: `minimal-ui`,
        icon: `src/images/Logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    'gatsby-plugin-offline',
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.brownskarateacademy.com',
        sitemap: 'https://www.brownskarateacademy.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Montserrat:300,400,600,700,900']
        }
      }
    },
    {
      resolve: "gatsby-plugin-sentry",
      options: {
        dsn: "https://5855b310b2644e33af154c16da12ad45@sentry.io/1449089",
        // Optional settings, see https://docs.sentry.io/clients/node/config/#optional-settings
        environment: process.env.NODE_ENV,
        enabled: (() => ["production", "stage"].indexOf(process.env.NODE_ENV) !== -1)()
      }
    },
    {
      resolve: `gatsby-source-ical`,
      options: {
        name: `Barron Classes`,
        other: {
          color: 'dodgerblue'
        },
        url: `https://calendar.google.com/calendar/ical/kcbv0efmm5jfrcoecduhuhve9o%40group.calendar.google.com/private-4a0c543d54b23aaf3926b9cc0b51a89e/basic.ics`,
      },
    },
    {
      resolve: `gatsby-source-ical`,
      options: {
        name: `Outside Events`,
        other: {
          color: 'forestgreen'
        },
        url: `https://calendar.google.com/calendar/ical/dfoud45ms57i7glgh9e929s1kg%40group.calendar.google.com/private-8244262cdd77a9f32e04a715faa846ae/basic.ics`,
      },
    },
    {
      resolve: `gatsby-source-ical`,
      options: {
        name: `Barron Events`,
        other: {
          color: 'lightgreen'
        },
        url: `https://calendar.google.com/calendar/ical/qq2dco3isjk62mqgg877ch7e2k%40group.calendar.google.com/private-db9726e57a1bd4b054d8b75c3aa1d8bd/basic.ics`,
      },
    },
    {
      resolve: `gatsby-source-ical`,
      options: {
        name: `Hayward Classes`,
        other: {
          color: 'orchid'
        },
        url: `https://calendar.google.com/calendar/ical/1klpv7c8ak6eh30jmsdlicg2e8%40group.calendar.google.com/private-57fe04833a80ffcb3e0f098a0af1ac48/basic.ics`,
      },
    },
    {
      resolve: `gatsby-source-ical`,
      options: {
        name: `Hayward Events`,
        other: {
          color: 'lightpink'
        },
        url: `https://calendar.google.com/calendar/ical/9rslp7dqepa7lcediuitc62sn0%40group.calendar.google.com/private-a6a12e9ac8dd77525f21d50f930a473d/basic.ics`,
      },
    },
  ],
}
