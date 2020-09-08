import React from "react";
import ClickCounter from "./ClickCounter";
import Jotto from "./Jotto-Redux/Jotto";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Hello, World!</h1>
      <ClickCounter />
      <Jotto />
    </div>
  );
}

export default App;
