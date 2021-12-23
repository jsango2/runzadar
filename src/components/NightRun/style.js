import styled from "styled-components"

import heroPhoto from "../../images/hero.png"

// import { HeroWrap } from "./style.js"

export const HeroWrap = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  @media only screen and (max-width: 600px) {
    padding-left: 38px;
  }
`
export const Text = styled.div`
  width: 90%;

  margin: 100px 0 40px 0;
  font-weight: 500;
  font-size: 21px;
  line-height: 120%;
  z-index: 2;
  @media only screen and (max-width: 600px) {
    font-size: 18px;
    width: 100%;
  }
`
export const WrapLogoText = styled.div`
  position: absolute;
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    height: 600px;
  }
`
