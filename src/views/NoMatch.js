import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid, { GridSpacing } from "@material-ui/core/Grid";
import Menubar from "./Components/Menubar";
import Footer from "./Components/Footer";
const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      flexGrow: 1
    },
    control: {
      padding: theme.spacing(2)
    },
    ieAlignCenter: {
      //display: "-webkit-box",
      //display: "-moz-box",
      //display: "box",
      //display: "-webkit-flex",
      //display: "-moz-flex",
      //display: "-ms-flexbox",
      display: "flex"
    },
    section2Height: {
      //minHeight: 680
    }
  })
);

export default function NoMatch() {
  const classes = useStyles();
  return (
    <Grid container justify="center" className={classes.root}>
      <Grid item align="center" xs={12} className={classes.header}>
        <Menubar />
      </Grid>
      <Grid item xs={12} className={`${classes.ieAlignCenter}`}>
        <span>no...</span>
      </Grid>
      <Grid item xs={12} className={classes.footer}>
        <Footer />
      </Grid>
    </Grid>
  );
}
