import React from "react"
import Lottie from "lottie-react"
import { Text, HeroWrap, WrapLogoText } from "./style.js"
import Button from "../button/button"
import Video from "../../video/nightrun.mp4"
import Logo from "../../svg/nightrunlogo-01.svg"
import { IoIosArrowForward } from "react-icons/io"

const NightRun = () => {
  return (
    <HeroWrap>
      <video autoPlay muted loop="loop" className="NightRun">
        <source src={Video} type="video/mp4" />
      </video>
      <WrapLogoText>
        {" "}
        <Logo className="logoNightRun" />
        <div className="nightRunDiv">
          <Text>
            Posebno smo ponosni na našu utrku Zadar Night Run. Utrka je 2019.
            godine na startu okupila preko 1300 trkača na 2.5km, 5km i 10km te
            na polu maratonu. Prijavite se i budite dio trkačkog spektakla u
            našem gradu!
          </Text>
          <div
            style={{
              marginTop: "20px",
            }}
          >
            <a
              style={{
                textDecoration: "none",
                color: "white",
                display: "flex",
                alignItems: "center",
              }}
              href="https://www.zadarnight.run"
            >
              ZADARNIGHT.RUN <IoIosArrowForward />
            </a>
          </div>
        </div>
      </WrapLogoText>
    </HeroWrap>
  )
}

export default NightRun
