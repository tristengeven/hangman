import logo from "./logo.svg";
import "./index.css";
import HangmanVisual from "./components/HangmanVisual";
import HangmanWord from "./components/HangmanWord";
import Keypad from "./components/Keypad";
import { useState, useEffect, useCallback } from "react";

function App() {
  const [hangmanWord, setHangmanWord] = useState("tristen");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [lettersToGuess, setLettersToGuess] = useState([]);
  const [gameWon, setGameWon] = useState(false);

  const incorrectGuesses = guessedLetters.filter(
    (letter) => !hangmanWord.includes(letter)
  );

  const addGuessedLetter = (letter) => {
    console.log("STARTING ADD GUESSEd");
    if (guessedLetters.includes(letter)) return;

    setGuessedLetters((current) => [...current, letter]);
    console.log(guessedLetters);
    console.log(letter);
  };

  useEffect(() => {
    const handleKeyup = (event) => {
      window.removeEventListener("keyup", handleKeyup);

      if (!event.key.match(/^[a-z]$/)) return;

      event.preventDefault();
      console.log("HERE");
      addGuessedLetter(event.key);
      // window.addEventListener("keyup", handleKeyup);
    };
    window.addEventListener("keyup", handleKeyup);
  }, [guessedLetters]);
  return (
    <div className="h-screen">
      <div className="text-lg text-center mt-2 font-bold">Hangman</div>
      <HangmanVisual incorrectGuesses={incorrectGuesses.length} />
      <HangmanWord word={hangmanWord} guessedLetters={guessedLetters} />
      <Keypad word={hangmanWord} guessedLetters={guessedLetters} />
    </div>
  );
}

export default App;
