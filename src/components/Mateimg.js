import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const MateWrap = styled(Img)`
  border-radius: 50%;
  width: 160px;
  height: 160px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-box-shadow: 4px 4px 13px 3px rgba(91,91,91,0.32); 
box-shadow: 4px 4px 13px 3px rgba(91,91,91,0.32);
}
  border-width: 10px;
  border-color: ;
`

const Mateimg = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "rojc.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
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
      <MateWrap fluid={data.placeholderImage.childImageSharp.fluid} />
    </>
  )
}

export default Mateimg
