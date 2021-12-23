const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blogPost.js`)

  const result = await graphql(
    `
      {
        objekt: wpgraphql {
          posts(first: 50) {
            edges {
              node {
                title
                slug
              }
            }
          }
        }
      }
    `
  )

  const posts = result.data.objekt.posts.edges

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach(post => {
      createPage({
        path: `/blog/${post.node.slug}`,
        component: blogPost,
        context: {
          slug: post.node.slug,
        },
      })
    })
  }
}
