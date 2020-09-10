import React from "react";
import "../App.css";
import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";
function Jotto() {
  return (
    <div className="App">
      <h3>Hello, World, It's The Jotto App :) </h3>
      <Congrats success={true} />
      <GuessedWords
        guessedWords={[
          {
            guessedWord: "train",
            letterMatchCount: 3,
          },
        ]}
      />
    </div>
  );
}

export default Jotto;
