const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: "/(pages)/.*\.md$/"}}
        ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
            }
            parent {
              ... on File {
                name
              }
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(edge => {
      const id = edge.node.id
      createPage({
        path: edge.node.fields.slug,
        component: `${__dirname}/src/templates/${String(edge.node.parent.name)}/index.js`,
        // additional data can be passed via context
        context: {
          id,
          title: edge.node.frontmatter.title,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}