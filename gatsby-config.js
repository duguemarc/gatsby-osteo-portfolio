/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata : {
    title: 'Gatsby Portfolio',
    author: 'Marc Dugué'
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }

    },
  {
      resolve: `gatsby-plugin-less`,
      options: {
          lessOptions: {       
            modifyVars: {
            'theme': 'dark',
            'primary-color': '#001529',
            },
            javascriptEnabled: true,
          }
      }
  },

  'gatsby-plugin-sass',
  'gatsby-background-image',
  `gatsby-plugin-styled-components`,
  {
    resolve: `gatsby-plugin-google-fonts`,
    options: {
      fonts: [
        'raleway',
        'playfair'
      ],
      display: 'swap'
    }
  },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    
    {
      resolve: 'gatsby-plugin-antd',
      options: {
        style: true
      }
  },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve:'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    }
  ]
}
