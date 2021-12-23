import styled from "styled-components"

// import { HeroWrap } from "./style.js"
export const WrapAll = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 300px;
  z-index: 3;
  background-color: #151520;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`

export const Naslov = styled.h3`
  position: relative;
  margin-top: 120px;
  margin-bottom: 100px;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 700;
  color: white;
  font-size: 42px;
  text-align: center;
  line-height: 120%;
  z-index: 5;
  background: #151520;
  width: auto;
`
