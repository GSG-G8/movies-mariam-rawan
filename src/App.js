import React from "react";
import Films from "./componant/Films";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1 className="h1-app">Movies App</h1>
      </header>
      <Films />
    </div>
  );
}

export default App;
