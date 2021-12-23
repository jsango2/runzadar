import React from "react"
import { Naslov, Overlay, WrapAll } from "./style.js"
import { graphql, useStaticQuery } from "gatsby"

import LocationIcon from "../../svg/location.svg"
import slikaTartan from "../../images/slikatartana.png"

import BackgroundImage from "gatsby-background-image"
import { Parallax } from "react-parallax"

const Tartan = () => {
  const data = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "slikatartana.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1440) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  // Set ImageData.
  const imageData = data.placeholderImage.childImageSharp.fluid
  return (
    <WrapAll>
      <Parallax
        bgImage={slikaTartan}
        strength={70}
        style={{
          height: "100%",
          width: "100%",
          backgroundPosition: "50% 50%",
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            height: "610px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: "2",
          }}
        >
          <LocationIcon width="54" height="54" />
          <Naslov>
            Treninzi se održavaju ili na stazi na Višnjiku ili u parku Vladimir
            Nazor odakle se najčešće trči ruta Karmom uz more prema Punti Bajlo.
          </Naslov>
        </div>
        <Overlay />
      </Parallax>
    </WrapAll>
  )
}

export default Tartan
