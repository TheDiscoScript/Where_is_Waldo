import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Background from "../images/whereiswaldo.jpg";

interface WaldoContent {
  handleClick: (e: React.MouseEvent) => void;
  gridName: string;
}

const Waldo: React.FC<WaldoContent> = (props) => {
  const classes = useStyles();

  return (
    <div className={props.gridName}>
      <img
        className={classes.image}
        alt="Background"
        src={Background}
        onClick={(e) => props.handleClick(e)}
      />
    </div>
  );
};
const useStyles = makeStyles(() => ({
  image: { width: "1385px", height: "5830px" },
}));
export default Waldo;
