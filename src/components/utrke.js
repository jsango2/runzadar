import React from "react"
import styled from "styled-components"
import ControlledAccordions from "./accordion"

const UtrkeStyle = styled.div`
  padding: 10px 20px;
  margin-top: 5px;
  margin-left: 8px;
  border-radius: 5px;
  background-color: hsla(0, 0%, 0%, 0.41);
  color: grey;
  margin-right: 32px;
  margin-bottom: 9px;
`

const Utrke = () => (
  <div className="sekcijaUtrke">
    <div id="utrke3">
      <div>
        <h1 className="heading">NAŠE UTRKE</h1>
      </div>
      <div data-duration-in="300" data-duration-out="100" className="tabs">
        <ControlledAccordions />
      </div>
    </div>
  </div>
)

export default Utrke
