import React from "react"

const Footer = () => (
  <div className="sekcijaFooter">
    <div>
      <div className="container">
        <div className="stupci2">
          <div className="column w-col w-col-4 ZadarNightRunColumn">
            <h5>ZADAR NIGHT RUN</h5>
            <p>
              Posebno smo ponosni na našu utrku
              <a href="http://www.zadarnight.run"> Zadar Night Run</a>. Utrka je
              2019. godine na startu okupila preko 1300 trkača na 2.5km, 5km i
              10km te na polu maratonu.
              <a href="http://www.zadarnight.run"> Prijavite se</a> i budite dio
              trkačkog spektakla u našem gradu!
            </p>
          </div>
          <div className="column w-col w-col-4">
            <h5>KORISNI LINKOVI</h5>
            <a
              href="http://www.wingsforlifeworldrun.com/hr/en/zadar/"
              className="footer-lik"
            >
              Wings for life World Run
            </a>
            <a href="http://www.3sporta.com" className="footer-link">
              3sporta.com
            </a>
            <a href="http://www.trcanje.hr" className="footer-link">
              Trčanje.hr
            </a>
            <a href="http://www.runnersworld.com" className="footer-link">
              Runner&#x27;s World
            </a>
            <a
              href="http://www.runzadar.com/christmasrun"
              className="footer-link"
            >
              Zadar Christmas Run
            </a>
          </div>
          <div className="column w-col-4">
            <h5>POVEŽITE SE</h5>

            <a
              href="http://www.facebook.com/skolatrcanjazadar"
              className="footer-link with-icon"
            >
              Facebook
            </a>
            <a
              href="http://www.instagram.com/skola_trcanja_zadar/"
              className="footer-link with-icon"
            >
              Instagram
            </a>
            <a
              href="mailto:info@runzadar.com?subject=Runzadar%20mail"
              className="footer-link with-icon"
            >
              Kontakt Email: Info@Runzadar.com
            </a>
          </div>{" "}
          <div className="column" style={{ fontSize: "17px" }}>
            <h5>O NAMA</h5>
            Sport Zone j.d.o.o.
            <br />
            Ante Starčevića 8, Zadar
            <br />
            IBAN: HR4924840081135097153
            <br />
            BIC: RZBHHR2X
            <br />
            info@runzadar.com
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Footer
