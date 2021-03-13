import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const MateWrap = styled(Img)`
  border-radius: 50%;
  width: 160px;
  height: 200px;
  position: absolute;
  top: -100px;
  left: 37%;
  border-width: 10px;
  border-color: ;
`

const Trkaciimg = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "runners2.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return (
    <>
      <MateWrap
        style={{ width: "200px" }}
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
    </>
  )
}

export default Trkaciimg
