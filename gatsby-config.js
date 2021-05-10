module.exports = {
  siteMetadata: {
    title: `Pictures in Words`,
    name: `Pictures in Words`,
    siteUrl: `https://novela.narative.co`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    hero: {
      heading: `Welcome to Pictures in Words, a blog dedicated to photographs with tales behind them.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `instagram`,
        url: `https://www.instagram.com/ljubisavukov/`,
      },
      {
        name: `facebook`,
        url: `https://www.facebook.com/callmevolk/`,
      }
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
