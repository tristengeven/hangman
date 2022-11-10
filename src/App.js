import logo from "./logo.svg";
import "./index.css";
import HangmanVisual from "./components/HangmanVisual";
import HangmanWord from "./components/HangmanWord";
import Keypad from "./components/Keypad";
import { useState, useEffect, useCallback } from "react";

function App() {
  const [hangmanWord, setHangmanWord] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [lettersToGuess, setLettersToGuess] = useState([]);
  const [turn, setTurn] = useState(1);
  const [gameWon, setGameWon] = useState(false);
  const MAX_TURNS = 10;

  const handleKeyup = ({ key }) => {
    console.log(key);
    // check if turns exceeded
    if (turn > MAX_TURNS) {
      console.log("no more guesses");
    }
    // don't submit duplicate letters
    if (guessedLetters.includes(key))
      return () => window.removeEventListener("keyup", handleKeyup);
    setGuessedLetters((guessedLetters) => [...new Set(guessedLetters), key]);
    // remove guess from lettersToGuess if present
    if (lettersToGuess.includes(key)) {
      const arrayCopy = [...lettersToGuess].filter((element) => {
        return element !== key;
      });
      setLettersToGuess(arrayCopy);
    }
    setTurn((prevTurn) => {
      // increment turn
      return prevTurn + 1;
    });
    window.removeEventListener("keyup", handleKeyup);
    window.addEventListener("keyup", handleKeyup);
  };

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);
  }, []);

  useEffect(() => {
    setHangmanWord("tristen");
    setLettersToGuess([...new Set(hangmanWord.split(""))]);
  }, [hangmanWord]);

  return (
    <div className="h-screen">
      <div className="text-lg text-center mt-2 font-bold">Hangman</div>
      <HangmanVisual />
      <HangmanWord word={hangmanWord} guessedLetters={guessedLetters} />
      <Keypad />
    </div>
  );
}

export default App;
