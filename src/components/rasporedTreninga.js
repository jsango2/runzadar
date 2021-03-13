import React from "react"
import styled from "styled-components"
import Trkaci from "../images/runners2.jpeg"
import RivaRun from "../images/rivaRun.jpg"
import Nin from "../images/nin.jpg"
import Wfl from "../images/wfl.jpg"
import WC from "../images/WC.jpg"
import Prvi from "../images/prvi.jpg"
import CardFlip from "./CardFlip"

const RasporedStyle = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  text-align: center;
  padding-bottom: 100px;
  ${"" /* background-color: rgba(236, 236, 236, 0.327); */}
  z-index: 10;

  p {
    margin: 0;
    text-align: center;
  }
`
const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`

const FlipCardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${"" /* -webkit-backface-visibility: hidden;
  backface-visibility: hidden; */}
  background-color: #fff;
  overflow: hidden;
  -webkit-box-shadow: 3px 4px 15px -4px rgba(0, 0, 0, 0.05);
  box-shadow: 3px 4px 15px -4px rgba(0, 0, 0, 0.05);
  color: black;
  transition: opacity 0.5s linear;
`
const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  background-color: black;
  opacity: 0.15;
`
const FlipCardBack = styled.div`
  opacity: 0;
  transition: opacity 0.3s linear;
  padding: 30px;
  position: absolute;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  ${"" /* -webkit-backface-visibility: hidden;
  backface-visibility: hidden; */}
  background-color: #1056b1ec;
  -webkit-box-shadow: 3px 4px 15px -4px rgba(0, 0, 0, 0.05);
  box-shadow: 3px 4px 15px -4px rgba(0, 0, 0, 0.05);
  color: white;
  ${"" /* transform: rotateY(180deg); */}
`

const FlipCard = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  width: 45%;
  min-width: 350px;
  height: 300px;
  ${"" /* perspective: 1000px; */}
  margin: 5px 5px;
  z-index: 1;
  ${"" /* transition: z-index 0ms 400ms; */}
  ${"" /* -webkit-box-shadow: 3px 4px 15px -4px rgba(0, 0, 0, 0.13);
  box-shadow: 3px 4px 15px -4px rgba(0, 0, 0, 0.13); */}
  background-color: transparent;
  cursor: pointer;
  ${"" /* &:hover ${FlipCardInner} {
    transform: rotateY(180deg);
    z-index: 100;
  }
  :hover {
    z-index: 100;
    transition: z-index 0ms 0ms;
  } */}
  &:hover ${FlipCardFront} {
    opacity: 0.4;
  }
  &:hover ${FlipCardBack} {
    opacity: 0.8;
  }
  @media only screen and (max-width: 450px) {
    width: 95%;
  }
`
const Text = styled.div`
  transition: opacity 0.3s linear;

  position: absolute;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 30px;
  width: 100%;
  height: 100%;
  display: flex;
  color: white;
  font-size: 2rem;
  font-family: "Roboto";
  font-weight: 500;
  line-height: 2rem;
`
const TextBack = styled.div`
  color: white;
  font-size: 1rem;
  font-family: "Montserrat";
  font-weight: 500;
  line-height: 2rem;
`

const Raspored = () => (
  <>
    <RasporedStyle>
      {" "}
      <div className="singleRaspored">
        {" "}
        <CardFlip
          front="Termini treninga"
          back="PONEDJELJAK: 8.00 / 19.15 Park Vladimira Nazora
              <br />
              UTORAK: 19.15 Park Vladimira Nazora
              <br />
              SRIJEDA: 8.00 Park Vladimira Nazora / 19.15 Park Vladimira Nazora
              <br />
              ČETVRTAK: 19.15 Park Vladimira Nazora
              <br />
              PETAK: 19.10 Park Vladimira Nazora
              <br />
              SUBOTA: 19.10 Park Vladimira Nazora"
          klasaBack="jedan"
          klasaFront="jedanF"
        />
      </div>
      <div className="singleRaspored">
        {" "}
        <CardFlip
          front="Utrke"
          back="Redovito odlazimo na utrke po cijeloj Europi!"
          klasaBack="dva"
          klasaFront="dvaF"
        />
      </div>
      <div className="singleRaspored">
        <CardFlip
          front="Cijena"
          back=" Redovna cijena: 180kn <br />
              Umirovljenici: 150kn <br /> Fitness na otvorenom + trčanje: 260kn
              <br /> Fitness na otvorenom: 150kn"
          klasaBack="tri"
          klasaFront="triF"
        />
      </div>
      <div className="singleRaspored">
        <CardFlip
          front="Pripremi se za omiljenu utrku"
          back=" U optimalnom izdanju dočekaj Wings for Life i Zadar Night Run ili
              neku od svojih omiljenih utrka!"
          klasaBack="cetri"
          klasaFront="cetriF"
        />
      </div>
      <div className="singleRaspored">
        <CardFlip
          front="Gdje trčimo?"
          back=" Okupljamo se u parku V.Nazora i na atletskoj stazi a trčimo po
              cijelom gradu! Park, staza, cesta, šuma..."
          klasaBack="pet"
          klasaFront="petF"
        />
      </div>{" "}
      <div className="singleRaspored">
        <CardFlip
          front="Uspjesi"
          back="  Kroz program škole trčanja prošlo je više od 1100 Zadrana. Iza nas
              je tisuće pretrčanih kilometara, stotine utrka, polumaratona i
              maratona. Pokrenuli smo Zadar i postali trkački grad!"
          klasaBack="sest"
          klasaFront="sestF"
        />
      </div>
      {/* <FlipCard data-sal="fade">
        <FlipCardInner>
          <FlipCardFront>
            <Overlay />
            <Text>Termini treninga</Text>
            <img
              style={{ width: "100%", minWidth: "400px" }}
              src={Trkaci}
              alt=""
            />
          </FlipCardFront>
          <FlipCardBack>
            <TextBack>
              PONEDJELJAK: 8.00 / 19.15 Park Vladimira Nazora
              <br />
              UTORAK: 19.15 Park Vladimira Nazora
              <br />
              SRIJEDA: 8.00 Park Vladimira Nazora / 19.15 Park Vladimira Nazora
              <br />
              ČETVRTAK: 19.15 Park Vladimira Nazora
              <br />
              PETAK: 19.10 Park Vladimira Nazora
              <br />
              SUBOTA: 19.10 Park Vladimira Nazora
            </TextBack>
          </FlipCardBack>
        </FlipCardInner>
      </FlipCard>
      <FlipCard data-sal="fade">
        <FlipCardInner>
          <FlipCardFront>
            <Overlay />
            <Text>Utrke</Text>
            <img
              style={{ width: "115%", minWidth: "600px" }}
              src={RivaRun}
              alt=""
            />
          </FlipCardFront>
          <FlipCardBack>
            <TextBack>Redovito odlazimo na utrke po cijeloj Europi!</TextBack>
          </FlipCardBack>
        </FlipCardInner>
      </FlipCard>
      <FlipCard data-sal="fade">
        <FlipCardInner>
          <FlipCardFront>
            <Overlay />
            <Text>Cijena</Text>
            <img
              style={{ width: "105%", minWidth: "650px" }}
              src={Nin}
              alt=""
            />
          </FlipCardFront>
          <FlipCardBack>
            <TextBack>
              Redovna cijena: 180kn <br />
              Umirovljenici: 150kn <br /> Fitness na otvorenom + trčanje: 260kn{" "}
              <br /> Fitness na otvorenom: 150kn{" "}
            </TextBack>
          </FlipCardBack>
        </FlipCardInner>
      </FlipCard>
      <FlipCard data-sal="fade">
        <FlipCardInner>
          <FlipCardFront>
            <Overlay />
            <Text>Pripremi se za omiljenu utrku</Text>
            <img
              style={{ width: "120%", minWidth: "650px" }}
              src={Wfl}
              alt=""
            />
          </FlipCardFront>
          <FlipCardBack>
            <TextBack>
              U optimalnom izdanju dočekaj Wings for Life i Zadar Night Run ili
              neku od svojih omiljenih utrka!
            </TextBack>
          </FlipCardBack>
        </FlipCardInner>
      </FlipCard>
      <FlipCard data-sal="fade">
        <FlipCardInner>
          <FlipCardFront>
            <Overlay />

            <Text>Gdje trčimo?</Text>
            <img
              style={{ width: "115%", minWidth: "600px", bottom: "100px" }}
              src={WC}
              alt=""
            />
          </FlipCardFront>
          <FlipCardBack>
            <TextBack>
              Okupljamo se u parku V.Nazora i na atletskoj stazi a trčimo po
              cijelom gradu! Park, staza, cesta, šuma...
            </TextBack>
          </FlipCardBack>
        </FlipCardInner>
      </FlipCard>
      <FlipCard data-sal="fade">
        <FlipCardInner>
          <FlipCardFront>
            <Overlay />

            <Text>Uspjesi</Text>
            <img
              style={{ width: "115%", minWidth: "600px", bottom: "100px" }}
              src={Prvi}
              alt=""
            />
          </FlipCardFront>
          <FlipCardBack>
            <TextBack>
              Kroz program škole trčanja prošlo je više od 1100 Zadrana. Iza nas
              je tisuće pretrčanih kilometara, stotine utrka, polumaratona i
              maratona. Pokrenuli smo Zadar i postali trkački grad!
            </TextBack>
          </FlipCardBack>
        </FlipCardInner>
      </FlipCard> */}
    </RasporedStyle>
  </>
)

export default Raspored
