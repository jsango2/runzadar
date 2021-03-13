import React from "react"
import Layout from "./../components/layout"
import Footer from "./../components/footer"
import BlogCard from "./../components/BlogCard"
import { graphql } from "gatsby"
import BlogHero from "./../components/blogPageHero"

function blog({ data }) {
  const posts = data.wpgraphql.posts.edges
  return (
    <Layout>
      <BlogHero />
      <div
        className="container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          //   alignItems: "center",
        }}
      >
        {posts.map(post => (
          <BlogCard
            key={post.node.id}
            image={post.node.featuredImage}
            title={post.node.title}
            text={post.node.content}
            tags={post.node.tags}
            slug={post.node.slug}
            excerpt={post.node.excerpt}
          />
        ))}
      </div>
      <Footer />
    </Layout>
  )
}

export default blog

export const query = graphql`
  {
    wpgraphql {
      posts {
        edges {
          node {
            id
            title
            slug
            excerpt
            content
            featuredImage {
              node {
                sourceUrl
                srcSet
              }
            }
            tags {
              edges {
                node {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`
