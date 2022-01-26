module.exports = {
  siteMetadata: {
      title: "Musikschule Weimar",
  },
    plugins: [
	"gatsby-plugin-image",
	"gatsby-plugin-sharp",
	{
	    resolve: `gatsby-source-filesystem`,
	    options: {
		name: `pages`,
		path: `${__dirname}/src/pages/`,
	    },
	},
	{
	    resolve: "gatsby-source-filesystem",
	    options: {
		name: `staff`,
		path: `${__dirname}/src/staff`,
	    }
	},
	"gatsby-plugin-mdx",
	"gatsby-transformer-sharp",
	"gatsby-transformer-remark",
	`gatsby-remark-images`,
    ],
};
