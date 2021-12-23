import React, { useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
// import Headroom from "react-headroom"
// import scrollTo from "gatsby-plugin-smoothscroll"
// import styled from "styled-components"
import { GiHamburgerMenu } from "react-icons/gi"
import Button from "../components/button/button"
import MeniMobile from "./meni/meniMobile"

const Header = ({ siteTitle }) => {
  const [isOpen, setIsOpen] = useState(false)
  // <Headroom
  //   style={{
  //     WebkitTransition: "all .5s ease-in-out",
  //     Transition: "all .5s ease-in-out",
  //     transition: "all .5s ease-in-out",
  //     zIndex: "999",
  //     height: "65px",
  //   }}
  // >
  return (
    <header>
      <div className="navBar">
        <div>
          <Link to="/" className="navLink navTitle">
            ŠKOLA TRČANJA ZADAR
          </Link>
        </div>

        <MeniMobile isOpen={isOpen} />
        <div>
          <GiHamburgerMenu
            className="hamburgerMenu"
            onClick={() => {
              setIsOpen(() => !isOpen)
              // blockScroll()
            }}
          />

          <div className="navLinks">
            <Link className="navLink" to="/blog">
              Blog
            </Link>

            <a className="navLink" href="http://www.zadarnight.run">
              ZadarNight.run
            </a>
            <Button
              title="Prijava"
              width="81"
              height="40"
              colorText="black"
              fontSize="16"
              fontWeight="600"
            />
          </div>
        </div>
      </div>
    </header>

    // </Headroom>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
