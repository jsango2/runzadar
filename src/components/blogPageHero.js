import React from "react"
import { Container, Jumbotron } from "react-bootstrap"
import Cover from "../images/heroRun.jpg"

function BlogHero() {
  return (
    <Jumbotron fluid>
      <Container>
        <h1>Blog</h1>
        <p>Škola trčanja Zadar</p>
      </Container>
    </Jumbotron>
  )
}

export default BlogHero
