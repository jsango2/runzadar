import React from "react"
import { WrapAll, Overlay, Social } from "./style.js"
import FooterBg from "../../images/footerbg.svg"
import Runzadar from "../../images/runzadar.svg"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Footer = posts => {
  return (
    <WrapAll>
      <Overlay />
      <FooterBg
        style={{
          position: "absolute",
          top: "0",
        }}
      />
      <Runzadar
        style={{
          position: "relative",
          zIndex: "2",
          marginTop: "30px",
          width: "100vw",
        }}
      />
      <Social>
        <div>info@runzadar.com</div>
        <div>facebook</div>
        <div>instagram</div>
      </Social>
    </WrapAll>
  )
}

export default Footer
