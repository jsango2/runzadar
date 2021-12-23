import React from "react"
import {
  WrapAll,
  Card,
  WrapTestimonial,
  Left,
  Right,
  Text,
  Ime,
} from "./style.js"
import Livo from "../../images/STRELICALIVO.svg"
import Desno from "../../images/STRELICADESNO.svg"

import musapstan1 from "../../images/musapstan1.png"
import sanja from "../../images/sanja.png"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const NextArrow = ({ currentSlide, slideCount, ...props }) => (
  <div {...props}>
    <Desno />
  </div>
)
const PrevArrow = ({ currentSlide, slideCount, ...props }) => (
  <div {...props}>
    <Livo />
  </div>
)
const ParallaxComp = () => {
  const settings = {
    arrows: true,
    // dots: true,
    infinite: true,
    fade: true,
    // autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    className: "testimonialSlider",
    responsive: [
      {
        breakpoint: 450,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          lazyLoad: true,
          arrows: false,
          speed: 500,
        },
      },
    ],
  }

  return (
    <WrapAll>
      <Slider {...settings}>
        <WrapTestimonial>
          <Card>
            <Left
              style={{
                backgroundImage: `url(${musapstan1})`,
                borderRadius: "30px",
              }}
            ></Left>
            <Right>
              <Text>
                {" "}
                "Škola trčanja mi je u potpunosti promijenila lifestyle. Postao
                sam aktivna osoba, sportaš rekreativac, trkač na duge pruge, a
                prije samo 3 godine bio sam bez energije, bez snage i što je
                najvažnije bez poleta i elana. "
              </Text>
              <Ime>ZADAR NIGHT RUN 2019</Ime>
            </Right>
          </Card>
        </WrapTestimonial>
        <WrapTestimonial>
          <Card style={{ transform: "translate(0, 100px)" }}>
            {" "}
            <Right>
              <Ime>ZADAR CHRISTMAS RUN</Ime>
              <Text>
                {" "}
                "Škola trčanja mi je u potpunosti promijenila lifestyle. Postao
                sam aktivna osoba, sportaš rekreativac, trkač na duge pruge, a
                prije samo 3 godine bio sam bez energije, bez snage i što je
                najvažnije bez poleta i elana. "
              </Text>
            </Right>
            <Left
              style={{ backgroundImage: `url(${sanja})`, borderRadius: "30px" }}
            ></Left>
          </Card>
        </WrapTestimonial>
      </Slider>
    </WrapAll>
  )
}

export default ParallaxComp
