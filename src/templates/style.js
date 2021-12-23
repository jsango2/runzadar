import styled from "styled-components"

// import { HeroWrap } from "./style.js"
export const WrapAll = styled.div`
  position: relative;
  width: 100%;
  height: 625px;
  padding-top: 50px;
  z-index: 3;
  overflow: hidden;
  background-color: #151520;
`

export const Naslov = styled.div`
  position: relative;
  font-style: italic;
  width: 700px;
  font-weight: 800;
  font-size: 72px;
  line-height: 120%;
  margin-top: 0;
`

export const WrapNaslovButton = styled.div`
  position: absolute;
  width: 868px;
  height: auto;
  bottom: 8%;
  /* left: 16%; */
  margin: 0 auto;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`
export const Overlay = styled.div`
  position: absolute;
  z-index: 0;
  width: 100%;
  height: 100%;
  display: flex;
  background-color: rgb(0 0 0 / 15%);
`
export const Text = styled.div`
  font-size: 21px;
  line-height: 142.5%;
  & img {
    width: 100%;
  }
`
