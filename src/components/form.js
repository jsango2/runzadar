import React from "react"
import styled from "styled-components"
import RunZadar from "../images/runzadar.png"

const FormSection = styled.div`
  position: relative;
  padding: 120px 0 20px 0;
  width: 100%;
  height: auto;
  background-color: rgba(236, 236, 236, 0.327);
`
const Heading = styled.div`
  font-size: 2rem;
  margin-bottom: 50px;
  font-weight: 700;
`
const FormWrap = styled.div`
  position: relative;
  z-index: 5;
  padding: 120px 40px 80px 40px;
  margin: 0 auto 150px auto;
  width: 70%;
  font-size: 1rem;
  line-height: 2rem;
  text-align: center;
  border-radius: 5px;
  -webkit-box-shadow: 3px 4px 15px -4px rgba(0, 0, 0, 0.13);
  box-shadow: 3px 4px 15px -4px rgba(0, 0, 0, 0.13);
  background: #ffffff;
`
const Form2 = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: 0 auto;
`
const RunZD = styled.div`
  position: absolute;
  z-index: 10;
  left: 50%;
  top: 0;
  transform: translate(-50%, -50%);
`

const handleSubmit = e => {
  e.preventDefault()
}

const Form = () => (
  <FormSection id="prijava">
    <FormWrap
      data-sal="slide-right"
      data-sal-delay="300"
      data-sal-easing="easeOutCubic"
    >
      {" "}
      <RunZD
      // data-sal="slide-right"
      // data-sal-delay="800"
      // data-sal-easing="easeOutCubic"
      >
        <img style={{ width: "150px" }} src={RunZadar} alt="" />
      </RunZD>
      <Heading>Prijavi se</Heading>
      <form
        id="email-form"
        method="POST"
        name="email-form"
        className="form-2"
        data-netlify="true"
        // onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="email-form" />

        <label for="name-2" className="field-label">
          Ime i Prezime*
        </label>
        <input
          type="text"
          className="text-field w-input"
          maxlength="256"
          placeholder="ime i prezime"
          id="name-2"
          required=""
          name="ime i prezime"
        />
        <label for="email-2" className="field-label">
          Email adresa*
        </label>
        <input
          type="email"
          className="text-field w-input"
          maxlength="256"
          placeholder="Email"
          id="email-2"
          required=""
          name="email"
        />
        <label for="Spol-2" className="field-label">
          Spol*
        </label>
        <select
          id="Spol-2"
          name="Spol-2"
          required=""
          className="text-field w-select"
        >
          <option value="">Spol</option>
          <option value="Muško">Muško</option>
          <option value="Žensko">Žensko</option>
        </select>
        <label for="Godina-ro-enja" className="field-label">
          Godina rođenja
        </label>
        <input
          type="number"
          className="text-field w-input"
          maxlength="256"
          placeholder="Godina rođenja"
          id="Godina-ro-enja"
          required=""
          name="godina rođenja"
        />
        <label for="Iskustvo-3" className="field-label">
          Trkačko iskustvo*
        </label>
        <select
          id="Iskustvo-3"
          name="Iskustvo-3"
          required=""
          data-name="Iskustvo 3"
          className="text-field w-select"
        >
          <option value="">Trkačko iskustvo</option>
          <option value="0-6 mjeseci">0-6 mjeseci</option>
          <option value="6 mjeseci - 1 godina">6 mjeseci - 1 godina</option>
          <option value="&gt; 1 godina">&gt; 1 godina</option>
          <option value="Nemam iskustva">Nemam iskustva</option>
        </select>
        <label for="Iskustvo-4" className="field-label">
          Program*
        </label>
        <select
          id="Iskustvo-2"
          name="Iskustvo-2"
          required=""
          data-name="Iskustvo 2"
          className="text-field w-select"
        >
          <option value="">Program</option>
          <option value="Škola trčanja">Škola trčanja</option>
          <option value="Nordijsko hodanje">Nordijsko hodanje</option>
        </select>
        <input
          type="submit"
          value="Prijava"
          data-wait="Please wait..."
          className="submit-button w-button"
        />
      </form>
    </FormWrap>
  </FormSection>
)

export default Form
