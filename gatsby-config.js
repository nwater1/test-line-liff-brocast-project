module.exports = {
  siteMetadata: {
    title: `Gatsby Starter Krisp`,
    description: `A Clean, Minimal and Responsive Site`,
    author: `@mohanmonu777`,
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
        name: `gatsby-starter-krisp`,
        short_name: `krisp`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./content/data/`,
      },
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyCfj7k5kUq1exxyfiqh6wT7VU06G3YjncM",
          authDomain: "test-line-liff-brocast-project.firebaseapp.com",
          projectId: "test-line-liff-brocast-project",
          storageBucket: "test-line-liff-brocast-project.appspot.com",
          messagingSenderId: "333537918364",
          appId: "1:333537918364:web:e7e49368eb60754d701c59",
        },
      },
    },
  ],
}
