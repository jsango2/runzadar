import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import BackgroundImage from "gatsby-background-image"
import FormHero from "./formHero"

const BackgroundSection = ({ className }) => {
  const data = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "heroRun2.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1600) {
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
    <BackgroundImage
      Tag="section"
      className={className}
      fluid={imageData}
      backgroundColor={`#040e18`}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-end",
        zIndex: "10",
      }}
    >
      <Overlay />
      <div className="heroTitle">
        Prijavi se
        {/* Sa osmijehom <br /> do cilja */}
      </div>{" "}
      <div className="heroText">Vaši podaci za upis Škole trčanja Zadar:</div>{" "}
      <FormHero />
      {/* <Buttoncta /> */}
    </BackgroundImage>
  )
}

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  background-position: 50% 50%;
  background-size: cover;
  height: 50vw;
  max-height: 800px;
  min-height: 550px;
`
const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #0000004d;
  z-index: 2;
`

export default StyledBackgroundSection
