import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const Tooltip = () => {
  const classes = useStyles();
  return (
    <div className={classes.theContainer}>
      <div className={classes.boxRadius}>targeting box</div>
      <div className={classes.choicesDiv}>
        <Button>Tom</Button>
        <Button>Yubaba</Button>
        <Button>Neo</Button>
      </div>
    </div>
  );
};
const useStyles = makeStyles(() => ({
  theContainer: {
    zIndex: 2,
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  boxRadius: {
    height: "50px",
    width: "50px",
    border: "white solid 3px",
    borderRadius: "3px",
  },
  choicesDiv: {
    display: "flex",
    flexDirection: "column",
  },
}));

export default Tooltip;
