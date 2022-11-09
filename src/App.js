import logo from "./logo.svg";
import "./index.css";
import HangmanVisual from "./components/HangmanVisual";
import HangmanWord from "./components/HangmanWord";
import Keypad from "./components/Keypad";

function App() {
  return (
    <div>
      <div>Hangman</div>
      <HangmanVisual />
      <HangmanWord />
      <Keypad />
    </div>
  );
}

export default App;
