import React, { useState } from "react";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Waldo from "./components/Waldo";
import SideCheck from "./components/SideCheck";
import Welcome from "./components/Welcome";
import Tooltip from "./components/Tooltip";

import charactersDatabase from "./utils/charactersDatabase";

function App() {
  const classes = useStyles();
  //States
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [characters, setCharacters] = useState(charactersDatabase);
  const [mouseXY, setMouseXY] = useState({ x: 0, y: 0 });
  const [showTooltip, setShowTooltip] = useState(false);

  //handle starting the game
  const startGame = () => {
    setGameStarted(true);
    console.log("Game started.");
  };

  //handle clicking after game started
  //show tooltip and get X and Y
  const handleClick = (e: React.MouseEvent): void => {
    displayTooltip();
    getXandY(e);
  };

  //sets state for tooltip to render out //toogle = true ? false:true
  const displayTooltip = () => {
    showTooltip ? setShowTooltip(false) : setShowTooltip(true);
  };

  //gets X and Y + correction (don't ask me why)
  const getXandY = (e: React.MouseEvent) => {
    setMouseXY({
      x: e.nativeEvent.offsetX + 225,
      y: e.nativeEvent.offsetY + 215,
    });
    // console.log(
    //   "Player clicked on x: " + mouseXY.x + " and on y: " + mouseXY.y
    // );
  };

  //handle picking the character after tooltip shown
  //pick character -> check for match
  const handlePlayerChoice = (x: number, y: number, e: React.MouseEvent) => {
    pickingCharacter(x, y, e);
    checkForMatch();
  };

  //picking character, adding X and Y and turning true for processing
  const pickingCharacter = (x: number, y: number, e: React.MouseEvent) => {
    const pickedName = e.currentTarget.id;
    const databaseOfCharacters = characters[0].characters;
    console.log("X is: " + x + " and Y is: " + y);
    const pickedCharacter: any = databaseOfCharacters.find(
      (char) => char.name === pickedName
    );
    pickedCharacter.xy.x = x;
    pickedCharacter.xy.y = y;
    pickedCharacter.processing = true;
    console.log(pickedCharacter);
    //close tooltip
    displayTooltip();
  };
  const checkForMatch = () => {
    console.log("checkForMatch fnc");
    console.log(characters);
    const charForProcessing = characters[0].characters.find(
      (char) => char.processing === true
    );
    console.log(charForProcessing);
  };

  return (
    <div className={classes.theGrid}>
      {!gameStarted && <Welcome startGame={startGame} />}
      {showTooltip && (
        <Tooltip
          mouseXY={mouseXY}
          characters={characters}
          handlePick={handlePlayerChoice}
        />
      )}
      <Header gridName={classes.Header} />
      <SideCheck gridName={classes.SideCheck} />
      <Waldo gridName={classes.Waldo} handleClick={handleClick} />
      <Footer gridName={classes.Footer} />
    </div>
  );
}
const useStyles = makeStyles(() => ({
  theGrid: {
    display: "grid",
    gridTemplateColumns: "200px 1500px 200px",
    gridTemplateRows: "0.3fr 7fr 0.1fr",
    gap: "0px 0px",
    gridTemplateAreas: `
      "Header Header Header"
      "SideCheck Waldo ."
      "Footer Footer Footer"
      `,
    minWidth: "1400px",
  },
  Header: { gridArea: "Header" },
  Waldo: { gridArea: "Waldo" },
  Footer: { gridArea: "Footer" },
  SideCheck: { gridArea: "SideCheck" },
}));

export default App;
