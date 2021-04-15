import React, { useState } from "react";
import "./App.css";
import Board from "./Board";

function App({}) {
  return (
    <div className="App">
      <Board rows={5} cols={5} />
    </div>
  );
}

export default App;
