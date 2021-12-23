import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "./../components/layout/layout"
import { Naslov, WrapNaslovButton, Overlay, Text } from "./style.js"
import KosaCrta from "../images/kosacrta.svg"

import Button from "../components/button/button"

const BlogPost = ({ data }) => {
  // ------visibility lazy loading------------
  // --------------------------------------
  const post = data.wpgraphql.post
  const [datum, setDatum] = useState("-")
  console.log(data)
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
        <Seo
          title={post.title}
          description="RunZadar blog o svemu povezanom sa treningom trčanja"
        />
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "450px",
            backgroundImage: `url(${data.wpgraphql.post.featuredImage.node.sourceUrl})`,
            backgroundPosition: "50% 50%",
            backgroundSize: "cover ",
            zIndex: "1",
            borderRadius: "39px 39px 0 0 ",
            display: "flex",
            justifyContent: "center ",
          }}
        >
          <Overlay />{" "}
          <WrapNaslovButton>
            <Naslov>
              <KosaCrta
                style={{
                  height: "50px",
                  width: "50px",
                  position: "absolute",
                  transform: "translate(-45px,20px",
                }}
              />
              {post.title}{" "}
            </Naslov>
          </WrapNaslovButton>
        </div>
        <div
          style={{
            margin: "20px auto 0 auto",
            width: "868px",
            fontSize: "21px",
          }}
        >
          <div style={{ marginTop: "2rem", display: "flex" }}>
            {post.tags.edges.map(tag => (
              <div key={tag.node.name} style={{ margin: "4px", color: "grey" }}>
                #{tag.node.name}
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ fontSize: "0.8rem" }}>Autor: RunZadar.com</div>
            <div style={{ fontSize: "0.8rem", marginRight: "1rem" }}>
              {datum}
            </div>
          </div>
          <div />
          <div
            style={{
              margin: "60px auto 0 auto",
              width: "100%",
              fontSize: "21px",
            }}
          >
            <Text dangerouslySetInnerHTML={{ __html: post.content }}></Text>
          </div>
        </div>
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
