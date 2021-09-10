import React, { useState, useEffect } from "react";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Waldo from "./components/Waldo";
import SideCheck from "./components/SideCheck";
import Welcome from "./components/Welcome";
import Tooltip from "./components/Tooltip";

import charactersDatabase from "./utils/charactersDatabase";
import { firestore } from "./firebase/config";
import { getDoc, doc } from "firebase/firestore";

function App() {
  const classes = useStyles();
  //States
  const [gameStarted, setGameStarted] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [gameOver, setGameOver] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [characters, setCharacters] = useState(charactersDatabase);
  const [mouseXY, setMouseXY] = useState({ x: 0, y: 0 });
  const [showTooltip, setShowTooltip] = useState(false);

  //handle starting the game
  const startGame = () => {
    setGameStarted(true);
    console.log("Game started.");
    console.log("this is state characters");
    console.log(characters);
    console.log(characters[0]);
    console.log(characters[0].characters);
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
      (char: any) => char.name === pickedName
    );
    pickedCharacter.xy.x = x;
    pickedCharacter.xy.y = y;
    pickedCharacter.processing = true;
    //close tooltip
    displayTooltip();
  };

  //check if the box is on correct char and change found
  const checkForMatch = async () => {
    const charForProcessing: any = characters[0].characters.find(
      (char: any) => char.processing === true
    );
    console.log(charForProcessing);
    // choice boolean - returns true if correct
    const choiceBoolean = await calculatingMatch(charForProcessing);
    //test
    console.log("testing choiceBoolean");
    console.log(choiceBoolean);

    charForProcessing.processing = false;

    choiceBoolean
      ? (charForProcessing.found = true)
      : (charForProcessing.found = false);

    if (choiceBoolean) {
      // setCharacters(
      //   characters[0].characters.filter((char: any) => char.found !== true)
      // );
      const remainingChars: any = characters[0].characters.filter(
        (char: any) => char.found !== true
      );
      console.log("not found characters");
      console.log(remainingChars);
      if (remainingChars.length === 0) {
        setGameOver(true);
      }
    }
  };
  //calculates if it's correct
  const calculatingMatch = async (character: any) => {
    const charRef = doc(firestore, "characters", "charactersID");
    const docSnap = await getDoc(charRef);
    const db: any = docSnap.data();
    console.log("this is db");
    console.log(db);

    const charName = character.name;
    const theChar = db[charName];
    console.log("this is thechar");
    console.log(theChar);

    let xPassed = null;
    character.xy.x > theChar.minX && character.xy.x < theChar.maxX
      ? (xPassed = true)
      : (xPassed = false);
    console.log("did x passed?");
    console.log(xPassed);

    let yPassed = null;
    character.xy.y > theChar.minY && character.xy.y < theChar.maxY
      ? (yPassed = true)
      : (yPassed = false);
    console.log("did y passed?");
    console.log(yPassed);

    if (xPassed && yPassed) {
      return true;
    } else {
      return false;
    }
  };

  //check for win every update
  useEffect(() => {
    if (gameOver) alert("GameOver, rest#TODO");
  }, [gameOver]);

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
