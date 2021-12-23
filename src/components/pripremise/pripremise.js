import React from "react"
import {
  Naslov,
  Utrke,
  Utrka,
  Buttons,
  Overlay,
  OverlayGore,
  WrapAll,
} from "./style.js"
import { graphql, useStaticQuery } from "gatsby"

import Button from "../button/button.js"
import BackgroundImage from "gatsby-background-image"
import vrataFosa from "../../images/vrataFosa.png"
import vrataFosaUze from "../../images/vrataFosaUze.png"

// import { Parallax } from "react-scroll-parallax"
import { Parallax } from "react-parallax"

const PripremiSe = () => {
  const data = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "vrataFosa.png" }) {
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
        bgImage={vrataFosaUze}
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
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: "2",
          }}
        >
          <Naslov>PRIPREMI SE ZA IDUĆU UTRKU!</Naslov>
          <Utrke>
            <Utrka>
              <strong>24.04.</strong> Zadar Night Run
            </Utrka>
            <Utrka>
              <strong>24.04.</strong> Zadar Night Run
            </Utrka>
            <Utrka>
              <strong>24.04.</strong> Zadar Night Run
            </Utrka>
          </Utrke>
          <Buttons>
            <Button
              title="Počni trenirati"
              width="270"
              height="61"
              fontWeight="700"
              colorText="black"
            />

            <Button
              title="Zadar Night Run"
              width="270"
              height="61"
              fontWeight="700"
              backgroundColor="#F1EBF5"
              colorText="black"
            />
          </Buttons>
          <Overlay />
          <OverlayGore />
        </div>
      </Parallax>
    </WrapAll>
  )
}

export default PripremiSe
