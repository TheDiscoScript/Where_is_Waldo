import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import Neo from "../images/Neopng.jpg";
import Tom from "../images/Tompng.png";
import Yubaba from "../images/Yubabapng.png";

const SideCheck = (props: { gridName: string }) => {
  const classes = useStyles();

  return (
    <div className={props.gridName}>
      <div className={classes.charactersContainer}>
        <div className={classes.characterDiv}>
          <Typography variant="h6">Tom</Typography>
          <div className={classes.imgdiv}>
            <img
              alt="Tom from Tom and Jerry"
              src={Tom}
              className={classes.img}
            />
          </div>
        </div>
        <div className={classes.characterDiv}>
          <Typography variant="h6">Yubaba</Typography>
          <div className={classes.imgdiv}>
            <img
              alt="Yubaba from Spirited away"
              src={Yubaba}
              className={classes.img}
            />
          </div>
        </div>
        <div className={classes.characterDiv}>
          <Typography>Neo</Typography>
          <div className={classes.imgdiv}>
            <img alt="Neo from Matrix" src={Neo} className={classes.img} />
          </div>
        </div>
        <div />
      </div>
    </div>
  );
};
const useStyles = makeStyles(() => ({
  theContainer: {},
  charactersContainer: {
    position: "sticky",
    display: "flex",
    flexDirection: "column",
    top: "20%",
  },
  characterDiv: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
  },
  imgdiv: { width: "140px", height: "170px", border: "red solid 5px" },
  img: { width: "100%", height: "100%" },
}));

export default SideCheck;
