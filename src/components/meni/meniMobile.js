import React, { useEffect, useState } from "react"
import { WrapAll } from "./style.js"

const MeniMobile = ({ isOpen }) => {
  return (
    <>
      <div className={`menu ${isOpen ? "openMenu" : "closedMenu"}`}></div>
    </>
  )
}

export default MeniMobile
