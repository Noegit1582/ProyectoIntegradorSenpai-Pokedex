import { useState } from "react";

import "./App.css";
import Card from "./Components/Card/Card";
import Header from "./Components/Header/Header";
import Pokedex from "../src/Data-Base-Pokedex/DataPokedex.js";
import CardInfo from "./Components/Card-Info/CardInfo";

function App() {
  console.log(Pokedex);
  const pokedex = Pokedex;
  return (
    <div className="App">
      <Header />
      <main>
        {pokedex.map((pokemon) => {
          return <Card pokemon={pokemon} />;
        })}
      </main>
    </div>
  );
}

export default App;
