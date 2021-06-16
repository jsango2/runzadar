import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "./../components/layout"
import Footer from "./../components/footer"
import Typography from "@material-ui/core/Typography"
import { Divider } from "@material-ui/core"

const BlogPost = ({ data }) => {
  // ------visibility lazy loading------------
  // --------------------------------------
  const post = data.wpgraphql.post
  const [datum, setDatum] = useState("-")

  useEffect(() => {
    let datumPosta = post.date
    function formatDate(date) {
      var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear()

      if (month.length < 2) month = "0" + month
      if (day.length < 2) day = "0" + day

      return [day, month, year].join(".")
    }
    setDatum(formatDate(datumPosta))
  }, [post.date])
  return (
    <>
      <Layout>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "450px",
            backgroundImage: `url(${data.wpgraphql.post.featuredImage.node.sourceUrl})`,
            backgroundPosition: "50% 30%",
            backgroundSize: "cover ",
            zIndex: "1",
          }}
        ></div>
        <div className="container">
          <div style={{ marginTop: "2rem", display: "flex" }}>
            {post.tags.edges.map(tag => (
              <Typography
                key={tag.node.name}
                gutterBottom
                variant="body2"
                component="p"
                style={{ margin: "4px", color: "grey" }}
              >
                #{tag.node.name}
              </Typography>
            ))}
          </div>
          <Typography
            style={{ marginTop: "2rem", fontSize: "2rem" }}
            gutterBottom
          >
            {post.title}{" "}
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography style={{ fontSize: "0.8rem" }}>
              Autor: RunZadar.com
            </Typography>
            <div style={{ fontSize: "0.8rem", marginRight: "1rem" }}>
              {datum}
            </div>
          </div>
          <Divider />
          <div style={{ marginTop: "20px" }}>
            <Typography
              gutterBottom
              variant="body1"
              component="div"
              dangerouslySetInnerHTML={{ __html: post.content }}
            ></Typography>
          </div>
        </div>

        <Footer />
      </Layout>
    </>
  )
}

export const query = graphql`
  query MyQuery($slug: ID!) {
    wpgraphql {
      post(id: $slug, idType: SLUG) {
        id
        title
        slug
        date
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
`

export default BlogPost
