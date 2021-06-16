import React from "react"
// import Quote from "../svg/left-quotes-sign.svg"
import styled from "styled-components"
import Mateimg from "./Mateimg.js"
import Sanjaimg from "./Anaimg"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.css"

const Testimon = styled.div`
  position: relative;
  z-index: 10;
  padding: 0 40px 40px 40px;
  margin: 100px auto 100px auto;
  width: 45%;
  min-width: 350px;
  font-size: 1rem;
  line-height: 2rem;
  text-align: center;
  border-radius: 5px;
  -webkit-box-shadow: 3px 4px 15px -4px rgba(0, 0, 0, 0.33);
  box-shadow: 3px 4px 15px -3px rgba(0, 0, 0, 0.33);
  background: white;
  @media only screen and (max-width: 450px) {
    width: 95%;
  }
`

// const Avatar = styled.div`
//   position: absolute;
//   width: 150px;
//   opacity: 0.37;
//   transform: rotate(180deg);
// `
const WrapperTestimonial = styled.div`
  position: relative;

  width: 100%;
  height: auto;

  background-color: #fffff;

  padding: 100px 0 70px 0;
`
const Wrap = styled.div`
  position: relative;
  display: flex;

  width: 90%;
  margin: 0 auto;
  align-items: center;
  justify-content: "space-around";
`

const Testimonial = () => (
  <WrapperTestimonial>
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={6100}
      showIndicators={false}
    >
      <Testimon>
        <div>
          <Mateimg />
        </div>
        <div>
          Škola trčanja mi je u potpunosti promijenila lifestyle. Postao sam
          aktivna osoba, sportaš rekreativac, trkač na duge pruge, a prije samo
          3 godine bio sam bez energije, bez snage i što je najvažnije bez
          poleta i elana.
        </div>

        <div
          style={{
            marginTop: "30px",
            textAlign: "center",
            fontSize: "1.2rem",
          }}
        >
          <strong>Mate (47)</strong>
        </div>
      </Testimon>
      <Testimon>
        <div>
          <Mateimg />
        </div>
        <div>
          Škola trčanja mi je u potpunosti promijenila lifestyle. Postao sam
          aktivna osoba, sportaš rekreativac, trkač na duge pruge, a prije samo
          3 godine bio sam bez energije, bez snage i što je najvažnije bez
          poleta i elana.
        </div>

        <div
          style={{
            marginTop: "30px",
            textAlign: "center",
            fontSize: "1.2rem",
          }}
        >
          <strong>Mate (47)</strong>
        </div>
      </Testimon>
      <Testimon>
        <div>
          <Mateimg />
        </div>
        <div>
          Škola trčanja mi je u potpunosti promijenila lifestyle. Postao sam
          aktivna osoba, sportaš rekreativac, trkač na duge pruge, a prije samo
          3 godine bio sam bez energije, bez snage i što je najvažnije bez
          poleta i elana.
        </div>

        <div
          style={{
            marginTop: "30px",
            textAlign: "center",
            fontSize: "1.2rem",
          }}
        >
          <strong>Mate (47)</strong>
        </div>
      </Testimon>
      <Testimon>
        <div>
          <Sanjaimg />
        </div>
        <div>
          Škola trčanja mi je u potpunosti promijenila lifestyle. Postala sam
          aktivna osoba, sportaš rekreativac, trkač na duge pruge, a prije samo
          3 godine bila sam bez energije, bez snage i što je najvažnije bez
          poleta i elana.
        </div>

        <div
          style={{
            marginTop: "30px",
            textAlign: "center",
            fontSize: "1.2rem",
          }}
        >
          <strong>Sanja (52)</strong>
        </div>
      </Testimon>
    </Carousel>
  </WrapperTestimonial>
)

export default Testimonial
