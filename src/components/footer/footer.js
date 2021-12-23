import React from "react"
import { WrapAll, Overlay, Social } from "./style.js"
import FooterBg from "../../svg/footerbg.svg"
import Runzadar from "../../svg/runzadar.svg"

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
