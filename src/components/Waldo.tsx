import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Background from "../images/whereiswaldo.jpg";

const Waldo = (props: { gridName: string }) => {
  const classes = useStyles();

  return (
    <div className={props.gridName}>
      <img className={classes.image} alt="Background" src={Background} />
    </div>
  );
};
const useStyles = makeStyles(() => ({
  image: { maxWidth: "100%" },
}));
export default Waldo;
