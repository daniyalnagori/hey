module.exports = {
  plugins: ["gatsby-plugin-typescript",
  {
    resolve: `gatsby-plugin-netlify-functions`,
    options: {
      functionsSrc: `${__dirname}/src/functions`,
      functionsOutput: `${__dirname}/functions`,
    },
  },
],
};
