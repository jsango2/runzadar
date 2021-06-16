import React from "react"
import Footer from "../components/footer"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Bart from "../images/bart.png"
const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div
      style={{
        height: "500px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div>
        <img src={Bart} width="100px" alt="bart" />{" "}
      </div>
      <h1>404: Stranica nije pronađena</h1>
      <p>Upisali ste adresu koja ne postoji</p>
    </div>
    <Footer />
  </Layout>
)

export default NotFoundPage
