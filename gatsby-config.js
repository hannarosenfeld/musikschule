module.exports = {
  siteMetadata: {
    title: "Musikschule Weimar",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `staff`,
        path: `${__dirname}/staff`,
      }
    },
  ],
};
