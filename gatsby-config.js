module.exports = {
  siteMetadata: {
    title: `Maurício Mutte`,
    author: `Maurício Mutte`,
    description: `Maurício Mutte, 18 anos, desenvolvedor full-stack, Javascript stack, apaixonado por tecnologia e pragmático`,
    siteUrl: ``,
    social: {
      twitter: `mauriciomutte`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          `gatsby-remark-prismjs`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
  ]
}
