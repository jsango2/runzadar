import React from "react"
import Lottie from "lottie-react"
import animacijaNaslova from "./animacijaNaslova"
import { HeroTitle, HeroWrap } from "./style.js"
import Button from "../button/button"
import HeroVideo from "../../video/kraciKvalitetniji.mp4"

const Hero = () => {
  return (
    <HeroWrap>
      <video autoPlay muted loop="loop" className="videoHero">
        <source src={HeroVideo} type="video/mp4" />
      </video>
      <HeroTitle>
        <Lottie
          animationData={animacijaNaslova}
          className="HeroNaslovAnimacija"
          loop={false}
        />
      </HeroTitle>
      <Button
        title="Počni trenirati"
        width="270"
        height="61"
        fontWeight="700"
        colorText="black"
      />
    </HeroWrap>
  )
}

export default Hero
