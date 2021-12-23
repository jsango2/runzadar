import React from "react"
import { WrapAll, Naslov } from "./style.js"
import CrteCesta from "../../images/linijaForm.svg"

const Ponosni = () => {
  return (
    <WrapAll>
      <CrteCesta
        style={{
          position: "absolute",
          top: "10px",
        }}
      />
      <Naslov>UTRKE NA KOJE SMO PONOSNI</Naslov>
    </WrapAll>
  )
}

export default Ponosni
