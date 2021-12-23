// Define a template for blog post
const path = require(`path`)
// const { createFilePath } = require(`gatsby-source-filesystem`)
// const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

// exports.createResolvers = async ({
//   actions,
//   cache,
//   createNodeId,
//   createResolvers,
//   store,
//   reporter,
// }) => {
//   const { createNode } = actions

//   await createResolvers({
//     WPGraphQL_MediaItem: {
//       imageFile: {
//         type: `File`,
//         async resolve(source) {
//           let sourceUrl = source.sourceUrl

//           if (source.mediaItemUrl !== undefined) {
//             sourceUrl = source.mediaItemUrl
//           }

//           return await createRemoteFileNode({
//             url: source.sourceUrl, // if encoding is unnecessary just replace with source.sourceUrl
//             store,
//             cache,
//             createNode,
//             createNodeId,
//             reporter,
//           })
//         },
//       },
//     },
//   })
// }

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
