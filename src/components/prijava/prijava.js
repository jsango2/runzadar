import React, { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { WrapAll, WrapForm, Left, Right, Naslov2, Foto } from "./style.js"
import axios from "axios"
import Lottie from "lottie-react"

import Swish from "../../svg/Swish.svg"
import KosaCrta from "../../svg/kosacrta.svg"
import CrteCesta from "../../svg/linijaForm.svg"
import Banina from "../../images/banina.png"
import Banina2 from "../../images/banina2.png"
import Nin from "../../images/ninzadar.png"
import Sale from "../../images/sale.png"
import Xmasrun from "../../images/xmasrun.png"
import Skip from "../../images/skip.png"
import { Parallax } from "react-scroll-parallax"
import animacijaIkona from "./animacijaIkona.js"

// import { HeroWrap } from "./style.js"

const Prijava = () => {
  const [value, setValue] = useState({})
  const [inputs, setInputs] = useState({})
  const [result, setResult] = useState(null)
  const [issubmiting, setIssubmiting] = useState(false)
  const [poslano, setPoslano] = useState("")
  const [currentImage, setCurrentImage] = useState(0)

  const grupa = [Banina, Banina2, Skip, Nin]
  const grupa2 = [Xmasrun, Skip, Banina2, Sale]

  useEffect(() => {
    const switchImage = setInterval(() => {
      if (currentImage < grupa.length - 1) {
        setCurrentImage(currentImage + 1)
      } else {
        setCurrentImage(0)
      }
      return currentImage
    }, 3000)
    return () => clearInterval(switchImage)
  })

  function handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    setInputs(values => ({ ...values, [name]: value }))
    console.log(inputs)
  }
  const handleSubmit = async event => {
    setIssubmiting(true)
    event.preventDefault()
    axios
      .post("https://runzadarserver.herokuapp.com/send", { ...inputs })
      .then(response => {
        setResult(response.data)
        // setState({ Ime: "", mail: "", poruka: "" })
        setInputs({ ime: "" }, { prezime: "" }, { datum: "" }, { email: "" })
        setPoslano(
          "Poslano! Uskoro će te na Email dobiti sve potrebne informacije"
        )
        setIssubmiting(false)
        setTimeout(function () {
          setPoslano("")
        }, 4000)
      })
      .catch(err => {
        setResult({
          success: false,
          message: "Something went wrong. Try again later.",
        })
        console.error(err)
      })
  }

  return (
    <WrapAll>
      <Parallax y={[-20, 50]}>
        <CrteCesta
          style={{
            position: "relative",
            top: "180px",
          }}
        />
      </Parallax>
      <WrapForm>
        <Left>
          <Naslov2>
            <KosaCrta
              style={{
                position: "absolute",
                transform: "translate(-35px,0px",
              }}
            />
            Prijava na besplatni prvi trening
          </Naslov2>
          <form onSubmit={handleSubmit} className="formular">
            <input
              type="text"
              placeholder="Ime"
              name="ime"
              // {...register("Ime", { required: true })}
              value={inputs.ime || ""}
              onChange={handleChange}
            />
            {/* {errors.Ime?.type === "required" && "Ime je obavezno"} */}
            <input
              type="text"
              placeholder="Prezime"
              name="prezime"
              // {...register("Prezime", { required: true })}
              value={inputs.prezime || ""}
              onChange={handleChange}
            />
            {/* {errors.Prezime?.type === "required" && "Prezime je obavezno"} */}
            <input
              type="date"
              placeholder="Datum rođenja"
              name="datum"
              // {...register("Datum", { required: true })}
              value={inputs.datum || ""}
              onChange={handleChange}
            />
            {/* <div style={{ color: "red" }}>
              {errors.Datum?.type === "required" && "Datum je obavezan"}
            </div> */}
            <input
              type="email"
              placeholder="Email"
              name="email"
              // {...register("Email", { required: true })}
              value={inputs.email || ""}
              onChange={handleChange}
            />
            {/* {errors.Ime?.Email === "required" && "Email je obavezan"} */}
            <input type="submit" className="submitButton" value="Prijava" />
            {issubmiting ? (
              <div
                style={{
                  position: "absolute",
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "20px",
                }}
              >
                <div>Šaljem prijavu....</div>
                <Lottie animationData={animacijaIkona} loop={true} />
              </div>
            ) : (
              ""
            )}{" "}
            <div
              style={{
                position: "absolute",
                display: "flex",
                alignItems: "center",
                marginLeft: "20px",
                marginTop: "28px",
                width: "400px",
              }}
            >
              {poslano}
            </div>
          </form>
        </Left>
        <Right>
          <Foto style={{ backgroundImage: `url(${grupa[currentImage]})` }} />
          <Foto style={{ backgroundImage: `url(${grupa2[currentImage]})` }} />
          <Foto style={{ backgroundImage: `url(${grupa2[currentImage]})` }} />
          <Foto style={{ backgroundImage: `url(${grupa[currentImage]})` }} />
          <Foto style={{ backgroundImage: `url(${grupa[currentImage]})` }} />
          <Foto style={{ backgroundImage: `url(${grupa2[currentImage]})` }} />
        </Right>
        <Swish style={{ position: "absolute" }} />
      </WrapForm>
    </WrapAll>
  )
}

export default Prijava
