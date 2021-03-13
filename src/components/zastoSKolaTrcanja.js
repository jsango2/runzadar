import React from "react"
import styled from "styled-components"
import RunZadar from "../images/runzadar.png"

const WrapZasto = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 50px 0;
  width: 100%;
  height: auto;
  background-color: rgba(236, 236, 236, 0.327);

  border-radius: 5px;
`
const ZastoSkola = styled.div`
  position: relative;
  z-index: 1;
  margin: 50px auto 0 auto;
  padding: 100px 60px 70px 60px;
  max-width: 1160px;
  background-color: #fff;
  border-radius: 5px;
  -webkit-box-shadow: 3px 4px 15px -4px rgba(0, 0, 0, 0.13);
  box-shadow: 3px 4px 15px -4px rgba(0, 0, 0, 0.13);
`
const FlexZasto = styled.div`
  margin-top: 50px;
  display: flex;
  width: 100%;
  font-size: 16px;
  p {
    flex: 1;
    padding: 0 20px;
    line-height: 2rem;
  }
`
const RunZD = styled.div`
  position: absolute;
  z-index: 10;
  left: 43%;
  top: 0;
`
const ZastoSKola = () => (
  <WrapZasto>
    <RunZD
      data-sal="slide-right"
      data-sal-delay="300"
      data-sal-easing="easeOutCubic"
    >
      <img style={{ width: "200px" }} src={RunZadar} alt="" />
    </RunZD>

    <ZastoSkola>
      <h1
        style={{
          textAlign: "center",
          marginTop: "50px",
          fontFamily: "Montserrat",
          fontSize: "28px",
        }}
      >
        Zašto odabrati trčanje i Školu trčanja Zadar?
      </h1>
      <FlexZasto>
        <p>
          Škola trčanja Zadar® nudi najsigurniji i najtemeljitiji pristup
          treningu za trkače rekreativce na svim razinama treniranosti. Treninzi
          detaljno planirani i temeljeni na dugogodišnjim spoznajama struke.
          Individualiziran pristup osigurava trkačima trening skrojen po
          njihovim potrebama i trenažnim zonama. Trčanje je najbolji način za
          regulaciju tjelesne težine.
        </p>
        <p>
          Treniranje u grupi zajedno sa trkačima istih mogućnostima znači
          dodatnu motivaciju trkaču i postizanje optimalnih pomaka u
          sposobnostima. Škola trčanja Zadar® provodi edukativne seminare za
          svoje korisnike o pravilnoj prehrani, osnovama treninga ali i o
          važnosti pravilnog odabira opreme za trčanje. Povoljna članarina od
          180 kn / mjesečno osigurava 3 treninga tjedno vrhunskog trenažnog
          procesa, dizajniranog da vas dovede do vaših maksimalnih trkačkih
          mogućnosti
        </p>
      </FlexZasto>
    </ZastoSkola>
  </WrapZasto>
)

export default ZastoSKola
