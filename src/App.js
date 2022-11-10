import logo from "./logo.svg";
import "./index.css";
import HangmanVisual from "./components/HangmanVisual";
import HangmanWord from "./components/HangmanWord";
import Keypad from "./components/Keypad";
import { useState, useEffect, useCallback } from "react";

const MAX_WRONG_GUESSES = 6;

function App() {
  const [hangmanWord, setHangmanWord] = useState("tristen");
  const [guessedLetters, setGuessedLetters] = useState([]);

  const incorrectGuesses = guessedLetters.filter(
    (letter) => !hangmanWord.includes(letter)
  );

  const isLoser = incorrectGuesses.length >= MAX_WRONG_GUESSES;
  const isWinner = hangmanWord
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const addGuessedLetter = (letter) => {
    console.log("STARTING ADD GUESSEd");
    if (guessedLetters.includes(letter)) return;

    setGuessedLetters((current) => [...current, letter]);
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
      <div className="text-2xl text-center my-1 font-bold">Hangman</div>
      {(isWinner || isLoser) && (
        <div className="fixed z-50 left-1/2 translate-x-[-50%] w-1/2 border-2 bg-white text-center text-xl">
          {isWinner && <p>You Won!</p>}
          {isLoser && <p>You Lost...</p>}
        </div>
      )}
      <HangmanVisual incorrectGuesses={incorrectGuesses.length} />
      <HangmanWord word={hangmanWord} guessedLetters={guessedLetters} />
      <Keypad word={hangmanWord} guessedLetters={guessedLetters} />
    </div>
  );
}

export default App;
