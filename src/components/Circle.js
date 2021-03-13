import React from "react"
import styled from "styled-components"
import Krug from "../svg/krug.svg"

const Circle = styled.div`
  left: 80px;
  top: 5%;
  position: absolute;
  z-index: 5;
  width: 350px;
`

const CircleSvg = () => (
  <Circle>
    <Krug />
  </Circle>
)

export default CircleSvg
