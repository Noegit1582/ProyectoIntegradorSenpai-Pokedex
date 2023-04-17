import { useState } from "react";

import "./App.css";
import Card from "./Components/Card/Card";
import Header from "./Components/Header/Header";
import Pokedex from "../src/Data-Base-Pokedex/DataPokedex.js";

function App() {
  /*  console.log(Pokedex); */
  const [pokedex, setPokedex] = useState(Pokedex);

  return (
    <div className="App">
      <Header pokedex={pokedex} setPokedex={setPokedex} />
      <main>
        {pokedex.map((pokemon) => {
          return <Card key={pokemon.Number} pokemon={pokemon} />;
        })}
      </main>
    </div>
  );
}

export default App;
