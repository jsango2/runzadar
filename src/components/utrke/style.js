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
  & .slick-prev:before,
  .slick-next:before {
    display: none;
  }
`

export const WrapTestimonial = styled.div`
  position: relative;

  height: 555px;
  margin: 0 auto;
  display: flex;
`

export const Card = styled.div`
  position: relative;
  width: 1160px;
  height: 65%;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
`
export const Right = styled.div`
  position: relative;
  z-index: 10;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`

export const Left = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
export const Text = styled.div`
  margin-top: 60px;

  font-size: 21px;
  font-weight: normal;
  width: 432px;
  line-height: 122.5%;
`
export const Ime = styled.div`
  width: 432px;
  margin-top: 20px;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 120%;
  text-align: right;
  color: white;
`
