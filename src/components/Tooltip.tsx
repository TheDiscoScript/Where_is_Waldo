import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

interface TooltipIF {
  mouseXY: { x: number; y: number };
  characters: any; //troubleshooting with maping over
  handlePick: (x: number, y: number, e: React.MouseEvent) => void;
}

const Tooltip: React.FC<TooltipIF> = (props) => {
  const classes = useStyles();
  return (
    <div
      className={classes.theContainer}
      style={{ left: props.mouseXY.x, top: props.mouseXY.y }}
    >
      <div className={classes.boxRadius}></div>
      <div className={classes.choicesDiv}>
        {props.characters[0].characters
          .filter((char: any) => char.found !== true)
          .map((char: any, i: any) => (
            <Button
              onClick={(e) =>
                props.handlePick(props.mouseXY.x, props.mouseXY.y, e)
              }
              variant="contained"
              className={classes.button}
              id={char.name}
              key={i}
            >
              {char.name}
            </Button>
          ))}
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
    height: "75px",
    width: "75px",
    border: "white solid 3px",
    borderRadius: "3px",
  },
  choicesDiv: {
    display: "flex",
    flexDirection: "column",
  },
  button: {
    width: "60px",
    margin: "0.1rem",
  },
}));

export default Tooltip;
