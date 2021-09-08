import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

const Welcome = () => {
  const classes = useStyles();

  return (
    <div className={classes.theContainer}>
      <div className={classes.welcomeDiv}>
        <Typography variant="h3" gutterBottom>
          Welcome to Where's Waldo game!
        </Typography>
        <Typography variant="h4" gutterBottom>
          The goal is simple. Find the specified characters.
        </Typography>
        <Typography variant="h4" gutterBottom>
          Click on correct character and choose a correct name.
        </Typography>
        <Typography variant="h4" gutterBottom>
          If you are quick enough you can make it to leaderboards!
        </Typography>
        <Button className={classes.button}>
          <PlayArrowIcon className={classes.icon} />
        </Button>
      </div>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  theContainer: {
    position: "fixed",
    zIndex: 2,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, .95)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  theContainerNone: {
    display: "none",
  },
  welcomeDiv: {
    position: "fixed",
    zIndex: 2,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    padding: "2rem",
    borderRadius: "5rem",
    backgroundColor: "#f7e346",
  },
  button: { width: "min-content", alignSelf: "center" },
  icon: { fontSize: "10rem" },
}));

export default Welcome;
