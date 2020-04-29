import React from "react";
import Films from "./componant/Films";
import ShowMovies from "./componant/showFilms";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Films</h1>
      </header>
      <Films />
      <ShowMovies />
    </div>
  );
}

export default App;
