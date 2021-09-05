import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const Header = (props: { gridName: string }) => {
  const classes = useStyles();

  return (
    <div className={props.gridName + " " + classes.theContainer}>
      <div className={classes.title}>
        <Typography variant="h1">Where's Waldo</Typography>
      </div>
      <div className={classes.underTitle}>
        <div>
          {" "}
          <Typography variant="h2">0:00:00</Typography>
        </div>
      </div>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  theContainer: { display: "flex", flexDirection: "column", height: "100%" },
  title: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  underTitle: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
}));
export default Header;
