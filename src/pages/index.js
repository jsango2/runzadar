import React, { useState, useEffect } from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
// import Hero from "./../components/hero"
// import Buttoncta from "../components/buttonCta"
import Raspored from "../components/rasporedTreninga"
import ZastoSKola from "../components/zastoSKolaTrcanja"
import Onama from "../components/oNama"
import Video from "../components/video"
// import Form from "../components/form"
import Utrke from "../components/utrke"
import Footer from "../components/footer"
import Testimonial from "./../components/testimonial"
import StyledBackgroundSection from "../components/styledBackgroundSection"
import Bg from "../images/background-01.png"
import "bootstrap/dist/css/bootstrap.min.css"
import Logo from "../images/logoRunZd.png"

// import sal from "sal.js"
import "sal.js/dist/sal.css"
import CardFlip from "./../components/CardFlip"

const IndexPage = () => {
  const [offsetY, setOffsetY] = useState(0)
  const handleScroll = () => setOffsetY(window.pageYOffset)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  return (
    <Layout>
      {/* <div
        style={{
          position: "absolute",
          width: "100%",
          height: "900px",
          top: "700px",
          left: "0",
          backgroundImage: `url(${Bg})`,
          backgroundPosition: "center",
          backgroundSize: "contain ",
          backgroundRepeat: "no-repeat",
          zIndex: "1",
          opacity: "0.1",
          transform: `translateY(${offsetY * 0.17}px)`,
        }}
      ></div> */}
      <SEO title="Home" />
      <div id="home" className="heroWrap">
        <StyledBackgroundSection />
      </div>
      <Testimonial />
      <div className="container logoImage">
        <img src={Logo} alt="logo" />
      </div>
      <Raspored />
      <ZastoSKola />
      <Onama />

      {/* <Video /> */}
      {/* <Form /> */}
      {/* <Utrke /> */}
      <Footer />
    </Layout>
  )
}

export default IndexPage
