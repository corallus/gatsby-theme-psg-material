module.exports = themeOptions => {
  return {
    plugins: [
      {
        resolve: `gatsby-theme-psg`,
        options: {
          ...themeOptions
        },
      },
      'gatsby-plugin-material-ui'
    ]
  }
}
