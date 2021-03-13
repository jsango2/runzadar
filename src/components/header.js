import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Headroom from "react-headroom"
import scrollTo from "gatsby-plugin-smoothscroll"
import styled from "styled-components"
import { GiHamburgerMenu } from "react-icons/Gi"
import { Nav, Navbar } from "react-bootstrap"
import Logo from "../images/logoRunZd.png"

const NavigationBar = styled.div`
  position: relative;
  z-index: 999;
  left: 0%;
  top: 0%;
  right: 0%;
  bottom: auto;
  display: flex;
  height: 60px;
  /* align-items: center; */
  max-width: 100%;
  padding-right: 26px;
  justify-content: flex-end;
  align-items: center;
  flex: 0 auto;
  background-color: #fff;
  opacity: 1;
  -webkit-box-shadow: 3px 4px 15px -4px rgba(0, 0, 0, 0.13);
  box-shadow: 3px 4px 15px -4px rgba(0, 0, 0, 0.13);
  background: #ffffff;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  a {
    color: #0d3151;
  }
`
const NavLinks = styled.div`
  margin-left: auto;
  /* text-decoration: none; */
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 600px;
  font-size: 0.7rem;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`
const Hamburger = styled.div`
  cursor: pointer;
  color: #0d3151;

  @media screen and (min-width: 1000px) {
    display: none;
  }
`

const Header = ({ siteTitle }) => (
  <Headroom
    style={{
      WebkitTransition: "all .5s ease-in-out",
      Transition: "all .5s ease-in-out",
      transition: "all .5s ease-in-out",
      zIndex: "999",
    }}
  >
    <header>
      <Navbar bg="light" variant="light" expand="lg">
        <Navbar.Brand href="#home">
          {/* <img
            alt=""
            src={Logo}
            width="50"
            height="40"
            className="d-inline-block align-top"
          />{" "} */}
          Škola trčanja Zadar
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navlinks ml-auto">
            <Link to="../">Home</Link>
            <Link to="/onama">O nama</Link>
            <Link to="/blog">Blog</Link>
            <Link to="#pricing">Zašto Škola trčanja</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* <NavigationBar>
        <div className="container-50">
          <div className="logoNavbar">
            <Link to="/" className="headerTitle">
              {siteTitle}
            </Link>
          </div>
          <NavLinks>
            <div className="navigation-link" onClick={() => scrollTo("#home")}>
              <Link to="/">HOME</Link>
            </div>

            <div className="navigation-link">
              <Link to="/o-nama">O NAMA</Link>
            </div>
            <div className="navigation-link">
              <Link to="/blog">BLOG</Link>
            </div>
            <div className="navigation-link prijava">
              <Link to="/prijava">PRIJAVA</Link>
            </div>
            <div className="navigation-link">
              <Link to="/o-nama">ZAŠTO ŠKOLA TRČANJA</Link>
            </div>
          </NavLinks>
          <Hamburger>
            <GiHamburgerMenu />
          </Hamburger>
        </div>
      </NavigationBar> */}
    </header>
  </Headroom>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
