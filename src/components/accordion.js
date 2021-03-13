import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Accordion from "@material-ui/core/Accordion"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import Typography from "@material-ui/core/Typography"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { Link } from "gatsby"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}))

export default function ControlledAccordions() {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <div className={classes.root}>
      <Accordion
        // style={{ backgroundColor: "grey" }}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>ZADAR NIGHT RUN</Typography>
          <Typography className={classes.secondaryHeading}>
            Polumaraton, 10k, 5k, 2.5k, Kids Run
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Jedinstveni doživljaj grada Zadra pružiti će vam Zadar Night
            Halfmarathon! Ovo je prvi noćni polumaraton u Dalmaciji. Otrčite
            21097 metara uz predivnu stazu prema zapadnom dijelu grada. To je
            staza koja spaja prošlosti i sadašnjosti, more i nebo osuto
            zvijezdama. Vrhunska atmosfera koju ima samo Zadar Night Run i
            potpuno ravna staza garantiraju odličnu zabavu i maksimalne
            rezultate!
            <br />
            <br />
            <a href="www.zadarnight.run">www.zadarnight.run</a>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className="ZadarChristmasRun"
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>
            ZADAR CHRISTMAS RUN
          </Typography>
          <Typography className={classes.secondaryHeading}>5k</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Božićna utrka u našem gradu! 5km od Puntamike do Adventa po
            prekrasnoj stazi uz more. Dođi u Zadar i sudjeluj u hit utrci ove
            zime! ‍ <br />
            <br />
            <a href="www.runzadar.com/christmasrun">
              www.RunZadar.com/ChristmasRun
            </a>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className="RockTrail"
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>
            ROCK TRAIL FESTIVAL
          </Typography>
          <Typography className={classes.secondaryHeading}>
            BLUE. GREEN, PINK staze
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Jedinstvena trail utrka. Rock and Roll, Craft piva, sport. Sve na
            jednom mjestu!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
