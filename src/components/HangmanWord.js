import React from "react";

export default function HangmanWord({ word, guessedLetters }) {
  return (
    <div className="border-2 mt-4 mx-auto h-1/5 flex justify-center gap-2 text-5xl uppercase">
      {word.split("").map((letter, index) => (
        <div
          key={index}
          className="border-b-2 border-black w-12 h-14 text-center mt-12"
        >
          <div
            className={`${
              guessedLetters.includes(letter) ? "visible" : "hidden"
            }`}
          >
            {letter}
          </div>
        </div>
      ))}
    </div>
  );
}
