import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FaGithub } from "react-icons/fa";
import IconButton from "@material-ui/core/IconButton";

const Footer = (props: { gridName: string }) => {
  const classes = useStyles();
  return (
    <div className={classes.footer + " " + props.gridName}>
      <IconButton
        href="https://github.com/Willdooo"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub style={{ color: "black" }} />{" "}
      </IconButton>

      <a
        href="https://linkedin.com/in/daniel-wollmann"
        target="_blank"
        rel="noreferrer"
      >
        Daniel Wollmann
      </a>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  footer: {
    width: "100%",
    textAlign: "center",
    alignSelf: "center",
  },
}));
export default Footer;
