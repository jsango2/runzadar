import React from "react"
import { Link } from "gatsby"
import scrollTo from "gatsby-plugin-smoothscroll"
import styled from "styled-components"

const ButtonCta = styled.div`
  margin: 0px 0 50px 60px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-family: "Roboto", Helvetica, sans-serif;
  font-size: 1rem;
  position: relative;
  /* z-index: 999; */
  width: 180px;
  height: 44px;
  border: 1px solid #ffffff;
  border-radius: 5px;
  background-color: transparent;
  text-decoration: none;
  
  :hover {
  
  background-color: hsla(0, 0.00%, 100.00%, 0.2);
  
  text-decoration: none;
  -webkit-transform: translateY(-3px);
	transform: translateY(-3px);
  }}
  transition: all .4s ease;
-webkit-transition: all .4s ease;
@media only screen and (min-width: 1000px) {
    display: none;
  }
  @media only screen and (max-width: 480px) {
    margin: 0px 0 40px 30px;

  }
`

const Text = styled.div`
  color: white;
  opacity: 1;
  position: absolute;
  z-index: 10;
`

const Buttoncta = () => (
  <ButtonCta onClick={() => scrollTo("#prijava")}>
    <Text>Prijavi se</Text>
  </ButtonCta>
)

export default Buttoncta
