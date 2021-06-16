import React, { useState, useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

import { Link } from "gatsby"
import readingTime from "reading-time"
import AccessAlarmsIcon from "@material-ui/icons/AccessAlarms"
import { Divider } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    width: "48%",
    marginBottom: 30,
    margin: 10,
    [theme.breakpoints.down("lg")]: {
      width: 490,
    },
  },
  tags: {
    color: "grey",
    fontSize: "14px",
    margin: "4px",
  },
}))

export default function BlogCard({
  image,
  title,
  tags,
  text,
  slug,
  excerpt,
  date,
}) {
  const classes = useStyles()
  const stats = readingTime(text).minutes
  const vrijeme = Math.floor(stats)
  const [datum, setDatum] = useState("-")

  useEffect(() => {
    let datumPosta = date
    function formatDate(date) {
      var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear()

      if (month.length < 2) month = "0" + month
      if (day.length < 2) day = "0" + day

      return [day, month, year].join(".")
    }
    setDatum(formatDate(datumPosta))
  }, [date])
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="RunZadar.jpg"
          height="240"
          image={image ? image.node.sourceUrl : null}
          title="RunZadar"
        ></CardMedia>
        <CardContent>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex" }}>
              {tags.edges.map(tag => (
                <Typography
                  key={tag.node.name}
                  gutterBottom
                  variant="body2"
                  component="p"
                  className={classes.tags}
                >
                  #{tag.node.name}
                </Typography>
              ))}
            </div>
            <div style={{ display: "flex" }}>
              <AccessAlarmsIcon
                style={{
                  // marginLeft: "30px",
                  fontSIze: "10px",
                  color: "grey",
                  width: "18px",
                  height: "18px",
                }}
              />

              <div
                style={{ marginLeft: "6px", fontSize: "14px", color: "grey" }}
              >
                {vrijeme + 1} min
              </div>
            </div>
          </div>
          <Divider />
          <Typography
            style={{ marginTop: "15px" }}
            gutterBottom
            variant="h6"
            component="h3"
            dangerouslySetInnerHTML={{ __html: title }}
          ></Typography>
          <Typography variant="body2" color="textSecondary" component="div">
            <div dangerouslySetInnerHTML={{ __html: excerpt }}></div>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary">
          <Link style={{ textDecoration: "none" }} to="/">
            {" "}
            Podjeli
          </Link>
        </Button> */}
        <Button size="small" color="primary">
          <Link style={{ textDecoration: "none" }} to={slug}>
            Pročitaj više
          </Link>
        </Button>
        <Typography style={{ marginLeft: "auto", fontSize: "0.8rem" }}>
          {datum}
        </Typography>
      </CardActions>
    </Card>
  )
}
