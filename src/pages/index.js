import React from "react"
import { graphql } from "gatsby"
import Layout from "./../components/layout/layout"
import Seo from "../components/seo"
import Hero from "../components/hero/hero"
import ZastoSkola from "../components/zastoSkola/ZastoSkola"
import PripremiSe from "../components/pripremise/pripremise"
import Treneri from "../components/treneri/treneri"
import Tartan from "../components/tartan/tartan"
import { ParallaxProvider } from "react-scroll-parallax"
import Prijava from "../components/prijava/prijava"
import Testimonial from "../components/testimonial/testimonial"
import Blast from "../components/blast/blast"
import Ponosni from "../components/ponosni/ponosni"
import Utrke from "../components/utrke/parallax"
import BlogFront from "../components/blog/blogFront"
import NightRun from "../components/NightRun/nightrun"

const IndexPage = ({ data }) => {
  const posts = data.wpgraphql.posts
  return (
    <ParallaxProvider>
      <Layout>
        <Seo title="Početna" description="Prva Škola trčanja u Zadru" />
        <Hero />
        <ZastoSkola />
        <PripremiSe />
        <Treneri />
        <Tartan />
        <Prijava />
        <Testimonial />
        <Blast />
        <Ponosni />
        <Utrke />
        <NightRun />
        <BlogFront posts={posts} />
      </Layout>
    </ParallaxProvider>
  )
}

export default IndexPage

export const query = graphql`
  query {
    wpgraphql {
      posts {
        edges {
          node {
            id
            title
            slug
            content
            featuredImage {
              node {
                sourceUrl
              }
            }
            categories {
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
