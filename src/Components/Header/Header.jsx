import React from "react";
import "./Header.css";

import Pokeball from "../../assets/Pokeball.png";
import SearchBar from "../Search-Bar/Search-Bar";

function Header() {
  return (
    <>
      <div className="container">
        <input type="image" src={Pokeball} className="pokeball" />
        <h1>Pokédex</h1>
      </div>
      <div className="container2">
        <SearchBar />
      </div>
    </>
  );
}

export default Header;
