import React from "react"
import Layout from "./../components/layout/layout"
import { graphql, Link } from "gatsby"
import Seo from "../components/seo"
import Sunset from "../images/sunset.png"

import KosaCrta from "../svg/kosacrta.svg"
import Button from "../components/button/button"
import styled from "styled-components"

const Category = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 20px;
  top: 50%;
  font-style: normal;
  font-weight: 600;
  font-size: 8.39654px;
  line-height: 140%;
  text-align: right;
  text-transform: uppercase;
  color: #ffffff;
  align-items: center;
  padding: 7px 10px;
`
const Category2 = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 20px;
  top: 90%;
  font-style: normal;
  font-weight: 600;
  font-size: 8.39654px;
  line-height: 140%;
  text-align: right;
  text-transform: uppercase;
  color: #ffffff;
  align-items: center;
  padding: 7px 10px;
`

const Naslov = styled.div`
  position: relative;
  font-style: italic;
  width: 700px;
  font-weight: 800;
  font-size: 72px;
  line-height: 120%;
  margin-top: 0;
`

const WrapNaslovButton = styled.div`
  position: absolute;
  width: 82%;
  height: auto;
  bottom: 8%;
  left: 10%;
  margin: 0 auto;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`

const Card = styled.div`
  position: relative;
  width: 400px;
  height: 350px;
  margin: 25px auto;
  border-radius: 39px;
  overflow: hidden;
  /* display: flex; */
  background: #fff4d8;
`
const Card2 = styled.div`
  position: relative;
  width: 95%;
  height: 550px;
  margin: 25px auto;
  border-radius: 39px;

  display: flex;
  overflow: hidden;
  /* display: flex; */
  background: #fff4d8;
`
const Text = styled.div`
  font-size: 15px;
  font-weight: normal;
  padding: 15px 0 0 20px;
  width: 95%;
  /* & figure {
    width: 80%;
  } */
`
const Text2 = styled.div`
  font-size: 15px;
  font-weight: normal;
  padding: 15px 0 0 20px;
  width: 95%;
  color: black;
  /* & figure {
    width: 80%;
  } */
`
const Naslov2 = styled.div`
  font-size: 21px;
  font-weight: normal;
`
const Naslov3 = styled.div`
  font-size: 31px;
  font-weight: normal;
`
const Foto = styled.div`
  height: 60%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
const Foto2 = styled.div`
  width: 50%;
  height: 100%;
  /* border-radius: 39px; */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
const ReadMore = styled.div`
  position: absolute;
  bottom: 20px;
  cursor: pointer;
  right: 30px;
  font-size: 12px;
  color: #383691;
`
const ReadMore2 = styled.div`
  position: absolute;
  bottom: 20px;
  cursor: pointer;
  right: 30px;
  font-size: 12px;
  font-weight: 500;
  color: black;
`

function blog({ data }) {
  const posts = data.wpgraphql.posts.edges
  console.log(posts)
  return (
    <Layout>
      <Seo
        title="RunZadar blog"
        description="RunZadar blog o svemu povezanom sa treningom trčanja"
      />
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "450px",
          backgroundImage: `url(${Sunset})`,
          backgroundPosition: "50% 50%",
          backgroundSize: "cover ",
          zIndex: "1",
          borderRadius: "39px 39px 0 0 ",
        }}
      >
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
            BLOG
          </Naslov>
          <div style={{ marginBottom: "7px" }}>
            <Button
              title="Počni trenirati"
              width="270"
              height="61"
              fontWeight="700"
              colorText="black"
            />
          </div>
        </WrapNaslovButton>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          margin: "50px 0",
        }}
      >
        <Link
          style={{ textDecoration: "none", color: "#212121" }}
          to={`/blog/${posts[0].node.slug}`}
        >
          <Card2>
            <Category2 className={posts[0].node.categories.edges[0].node.name}>
              {posts[0].node.categories.edges[0].node.name}
            </Category2>

            <Foto2
              style={{
                backgroundImage: `url(${posts[0].node.featuredImage.node.sourceUrl})`,
              }}
            ></Foto2>
            <div
              style={{
                width: "40%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                paddingBottom: "70px",
                paddingLeft: "50px",
              }}
            >
              <Text2>
                <Naslov3>{posts[0].node.title}</Naslov3>
              </Text2>

              <Text2
                dangerouslySetInnerHTML={{
                  __html: [posts[0].node.content.slice(0, 400) + "..."],
                }}
              />
              <ReadMore2>PROČITAJ VIŠE</ReadMore2>
            </div>
          </Card2>
        </Link>
        {posts.slice(1, 50).map(post => (
          <Link
            style={{ textDecoration: "none", color: "#212121" }}
            to={`/blog/${post.node.slug}`}
            key={post.node.id}
          >
            <Card>
              <Category className={post.node.categories.edges[0].node.name}>
                {post.node.categories.edges[0].node.name}
              </Category>

              <Foto
                style={{
                  backgroundImage: `url(${post.node.featuredImage.node.sourceUrl})`,
                }}
              ></Foto>
              <Text>
                <Naslov2>{post.node.title}</Naslov2>
              </Text>

              <Text
                dangerouslySetInnerHTML={{
                  __html: [post.node.content.slice(0, 100) + "..."],
                }}
              />
              <ReadMore>PROČITAJ VIŠE</ReadMore>
            </Card>
          </Link>
        ))}
      </div>
    </Layout>
  )
}

export default blog

export const query = graphql`
  {
    wpgraphql {
      posts(first: 50, where: { orderby: { field: DATE, order: ASC } }) {
        edges {
          node {
            id
            title
            slug
            excerpt
            date
            content
            featuredImage {
              node {
                sourceUrl
                srcSet
              }
            }
            categories {
              edges {
                node {
                  name
                }
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
