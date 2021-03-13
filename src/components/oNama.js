import React from "react"
import Sangoimg from "./sangoimg.js"
// import Trkaciimg from "./trkaciimg.js"
import Tutaimg from "./tutaimg.js"
import styled from "styled-components"

const OnamaWrap = styled.div`
  position: relative;
  padding: 20px 0 0 0;
  width: 100%;
  height: auto;
  ${"" /* background-color: rgba(236, 236, 236, 0.327); */}
`
const OnamaBody = styled.div`
  max-width: 960px;
  margin: 0 auto;
  height: 100%;
  padding: 50px 0;
`
const Stupci = styled.div`
  display: flex;
  flex-direction: column;
`
const Stupac = styled.div`
  position: relative;
  z-index: 10;
  padding: 0 40px 40px 40px;
  margin: 60px auto 100px auto;
  width: 90%;
  font-size: 0.9rem;
  line-height: 2rem;
  text-align: center;
  border-radius: 5px;
  -webkit-box-shadow: 3px 4px 15px -4px rgba(0, 0, 0, 0.13);
  box-shadow: 3px 4px 15px -4px rgba(0, 0, 0, 0.13);
  ${"" /* background: #ffffff; */}
`

const Onama = () => (
  <OnamaWrap>
    <OnamaBody>
      <Stupci>
        <div>
          <Stupac
            data-sal="slide-right"
            data-sal-delay="100"
            data-sal-easing="easeOutCubic"
            threshold="0.01"
          >
            <Sangoimg />
            <p
              style={{ position: "relative", top: "-30px", textAlign: "left" }}
            >
              Školu trčanja Zadar organizira i vodi magistar kineziologije
              <strong> Jure Šango</strong>, kondicijski trener sa
              petnaestogodišnjim iskustvom u radu sa sportašima i rekreativcima.
              10 godina kondicijski trener u košarkaškom klubu Zadar te trener
              Hrvatske i BiH košarkaške reprezentacije na Europskim prvenstvima.
              Kondicijski trener Hrvatske košarkaške reprezentacije na
              Olimpijskim igrama u Riju 2016. godine. Trener triatlona a i sam
              rekreativni triatlonac već 6 godina.Vanjski suradnik-predavač na
              Kineziološkom fakultetu u Zagrebu. Aktivan u radu Triatlon kluba
              Zadar. Predsjednik Udruge kondicijskih trenera zadarske županije.
              “
              <em>
                Želja nsam je pružiti priliku Zadranima da nauče više o osnovama
                trčanja kroz provjereni program i kroz stručno vodstvo. Velik
                broj zadrana trči ali nije zadovoljno omjerom uloženog i
                postignutog. Ovo je prilika da svoje vrijeme za sport ulože na
                pametan način i da uživaju u ovom prelijepom sportu
              </em>
              “. – prof. Šango
            </p>
          </Stupac>
        </div>
        <div>
          <Stupac
            data-sal="slide-right"
            data-sal-delay="100"
            data-sal-easing="easeOutCubic"
          >
            <Tutaimg />

            <p
              style={{ position: "relative", top: "-30px", textAlign: "left" }}
            >
              Suradnik Škole trčanja Zadar je naš iskusni triatlonac
              <strong> Ivan Tuta. </strong>Ivan Tuta je apsolvent kineziološkog
              fakulteta sa usmjerenjem kondicijske pripreme sportaša. Bavi se
              triatlonom već 6 godina i postiže zapažene rezultate. Višestruki
              je finisher na Ironman natjecanjima. Natječe se i na brojnim
              dugoprugaškim trkačkim natjecanjima u hrvatskoj. Trener je u
              triatlon klubu Zadar.
              <br />‍
              <em>
                <br />
                “Postigli smo tako lijepe stvari sa našim programima u Školi
                trčanja. Jako veliki broj ljudi je u potpunosti promjenilo svoj
                stil života i na to smo jako ponosni. Najvažnije je da smo sve
                postigli uz veliko zadovoljstvo naših trkača što nam je i
                najvažnije u cijeloj priči.”  –
              </em>
              Ivan Tuta
            </p>
          </Stupac>
        </div>
      </Stupci>
    </OnamaBody>
  </OnamaWrap>
)

export default Onama
