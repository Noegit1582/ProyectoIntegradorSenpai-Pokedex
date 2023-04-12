import React from "react";
import "./Header.css";

import Pokeball from "../../assets/Pokeball.png";
import SearchBar from "../Search-Bar/Search-Bar";

function Header(props) {
  return (
    <>
      <div className="container">
        <input type="image" src={Pokeball} className="pokeball" />
        <h1>Pokédex</h1>
      </div>
      <div className="container2">
        <SearchBar pokedex={props.pokedex} setPokedex={props.setPokedex} />
      </div>
    </>
  );
}

export default Header;
