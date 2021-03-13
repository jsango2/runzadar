import React from "react"
import { Form, Button, Col } from "react-bootstrap"

function FormHero() {
  return (
    <div
      className="formular col-l-4"
      style={{
        zIndex: "4",
      }}
    >
      <Form
        className="mb-5 ml-1 mr-1"
        name="heroForm"
        method="POST"
        data-netlify="true"
      >
        <input type="hidden" name="heroForm" value="heroForm" />
        <Form.Row>
          <Col>
            <Form.Control
              name="ime"
              className="mb-1 formPolje text-white"
              type="text"
              placeholder="Ime"
            />
          </Col>
          <Col>
            {" "}
            <Form.Control
              name="prezime"
              className="mb-1 formPolje text-white"
              type="text"
              placeholder="Prezime"
            />
          </Col>
        </Form.Row>
        <Form.Row>
          <Col>
            <Form.Control
              name="email"
              className="formPolje text-white"
              type="email"
              placeholder="Vaš email"
            />{" "}
          </Col>
          <Col>
            <Form.Control
              name="god rođ"
              as="select"
              className=" formPolje text-white"
              id="inlineFormCustomSelect"
              custom
            >
              <option value="0">Godina rođenja</option>
              <option value="1950">1950</option>
              <option value="1951">1951</option>
              <option value="1952">1952</option>
              <option value="1953">1953</option>
            </Form.Control>
          </Col>
        </Form.Row>
        <Form.Group className="mt-2" controlId="formBasicCheckbox">
          <Form.Check
            style={{ color: "white" }}
            name="Želim primati obavijesti škole"
            type="checkbox"
            label="Želim primati obavijesti Škole trčanja Zadar"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Pošalji prijavu
        </Button>
      </Form>
    </div>
  )
}

export default FormHero
