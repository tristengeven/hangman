export default function Keypad({ word, guessedLetters }) {
  const letters = [
    { key: "q", line: "1" },
    { key: "w", line: "1" },
    { key: "e", line: "1" },
    { key: "r", line: "1" },
    { key: "t", line: "1" },
    { key: "y", line: "1" },
    { key: "u", line: "1" },
    { key: "i", line: "1" },
    { key: "o", line: "1" },
    { key: "p", line: "1" },
    { key: "a", line: "2" },
    { key: "s", line: "2" },
    { key: "d", line: "2" },
    { key: "f", line: "2" },
    { key: "g", line: "2" },
    { key: "h", line: "2" },
    { key: "j", line: "2" },
    { key: "k", line: "2" },
    { key: "l", line: "2" },
    { key: "z", line: "3" },
    { key: "x", line: "3" },
    { key: "c", line: "3" },
    { key: "v", line: "3" },
    { key: "b", line: "3" },
    { key: "n", line: "3" },
    { key: "m", line: "3" },
  ];

  const firstRowLetters = letters.filter((entry) => entry.line === "1");
  const secondRowLetters = letters.filter((entry) => entry.line === "2");
  const thirdRowLetters = letters.filter((entry) => entry.line === "3");

  const handleButtonClick = (event, keyPressed) => {
    // console.log(`${keyPressed} clicked`);
    window.dispatchEvent(new KeyboardEvent("keyup", { key: keyPressed }));
  };

  const getKeyColor = (key) => {
    var bgColor = "bg-gray-300";
    if (guessedLetters.includes(key.key) && word.includes(key.key))
      bgColor = "bg-green-300";
    if (guessedLetters.includes(key.key) && !word.includes(key.key))
      bgColor = "bg-red-300";
    return bgColor;
  };

  return (
    <div className="border-2 mt-4 mx-1 block h-1/4">
      <div className="flex w-full mx-auto my-1">
        {firstRowLetters &&
          firstRowLetters.map((l) => {
            return (
              <button
                key={l.key}
                onClick={(event) => handleButtonClick(event, l.key)}
                className=" flex-1 cursor-pointer justify-center align-middle disabled:opacity-50"
                disabled={guessedLetters.includes(l.key)}
              >
                <div
                  key={l.key}
                  className={` uppercase font-semibold ${getKeyColor(
                    l
                  )} rounded-md  h-[50px] leading-[50px] m-1 `}
                >
                  {l.key}
                </div>
              </button>
            );
          })}
      </div>
      <div className="flex w-full mx-auto my-1">
        {secondRowLetters &&
          secondRowLetters.map((l) => {
            return (
              <button
                key={l.key}
                onClick={(event) => handleButtonClick(event, l.key)}
                className=" flex-1 cursor-pointer justify-center align-middle disabled:opacity-50"
                disabled={guessedLetters.includes(l.key)}
              >
                <div
                  key={l.key}
                  className={` uppercase font-semibold ${getKeyColor(
                    l
                  )}  rounded-md  h-[50px] leading-[50px] m-1 `}
                >
                  {l.key}
                </div>
              </button>
            );
          })}
      </div>
      <div className="flex w-full mx-auto my-1">
        {thirdRowLetters &&
          thirdRowLetters.map((l) => {
            return (
              <button
                key={l.key}
                onClick={(event) => handleButtonClick(event, l.key)}
                className=" flex-1 cursor-pointer justify-center align-middle disabled:opacity-50"
                disabled={guessedLetters.includes(l.key)}
              >
                <div
                  key={l.key}
                  className={` uppercase font-semibold ${getKeyColor(
                    l
                  )} rounded-md  h-[50px] leading-[50px] m-1 `}
                >
                  {l.key}
                </div>
              </button>
            );
          })}
      </div>
      {/* {letters &&
        letters.map((l) => {
          return (
            <button
              key={l.key}
              onClick={(event) => handleButtonClick(event, l.key)}
              className=" inline-block   cursor-pointer"
            >
              <div
                key={l.key}
                className="text-blue uppercase font-semibold bg-gray-300 rounded-md w-[40px] h-[50px] leading-[50px] m-1 "
              >
                {l.key}
              </div>
            </button>
          );
        })} */}
    </div>
  );
}
