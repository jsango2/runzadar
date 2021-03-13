import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Form from "../components/form"
import Reservation from "../components/netlifyForm"

const Prijava = () => (
  <Layout>
    <SEO title="Prijava" />
    {/* <div style={{ height: "50px" }}></div> */}
    <Form />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Prijava
