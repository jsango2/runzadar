import styled from "styled-components"
import vrataFosa from "../../images/vrataFosa.png"

// import { HeroWrap } from "./style.js"
export const WrapAll = styled.div`
  position: relative;
  width: 100%;
  height: 795px;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* background-image: url(${vrataFosa});
  background-position: 50% 90%;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #151520; */
`

export const Naslov = styled.div`
  width: 70%;
  position: relative;
  margin-top: 450px;
  font-family: "Montserrat", sans-serif;
  font-style: italic;
  font-weight: 900;
  color: white;
  font-size: 48px;
  text-align: center;
  line-height: 120%;
  z-index: 5;
  @media only screen and (max-width: 600px) {
    margin-top: 350px;
  }
  @media only screen and (max-width: 420px) {
    font-size: 40px;
  }
`

export const Utrke = styled.div`
  position: relative;
  width: 100%;
  margin-top: 13px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  color: #ffffff;
  @media only screen and (max-width: 420px) {
    flex-direction: column;
  }
`
export const Utrka = styled.div`
  font-size: 21px;
  margin: 0px 20px 0 20px;
  @media only screen and (max-width: 420px) {
    text-align: center;
  }
`
export const Buttons = styled.div`
  position: relative;
  width: 570px;
  height: 200px;
  margin-top: 33px;
  display: flex;
  z-index: 1;
  justify-content: space-between;
  @media only screen and (max-width: 600px) {
    div:nth-child(2) {
      display: none;
    }
    justify-content: center;
  }
`
export const Overlay = styled.div`
  position: absolute;
  height: 192px;
  width: 100%;
  bottom: 0;
  /* Gradient skroz plavi */

  background: linear-gradient(180deg, #0f162b 18.24%, rgba(15, 21, 43, 0) 100%);
  transform: rotate(-180deg);
  @media only screen and (max-width: 600px) {
    bottom: 10px;
  }
`
export const OverlayGore = styled.div`
  position: absolute;
  height: 192px;
  width: 100%;
  top: 0;
  /* Gradient skroz plavi */

  background: linear-gradient(180deg, #191c26 14.59%, rgba(25, 28, 38, 0) 100%);
  transform: matrix(-1, 0, 0, 1, 0, 0);
`
