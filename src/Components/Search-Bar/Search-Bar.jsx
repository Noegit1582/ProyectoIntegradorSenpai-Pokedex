import React from "react";
import "./SearchBar.css";
import search from "../../assets/search.svg";

import { useState } from "react";
import Pokedex from "../../Data-Base-Pokedex/DataPokedex";

function SearchBar(props) {
  function handleChange(e) {
    /*  e.preventDefault(); */
    console.log(e.target.value);
    props.setPokedex(
      Pokedex.filter((item) => {
        return item.Name.toLowerCase().includes(e.target.value);
      })
    );
  }

  return (
    <>
      <div className="searchBar">
        <input
          type="text"
          className="filterPokemon"
          placeholder="Search"
          onChange={handleChange}
        />
        <button className="btnFilter">#</button>
      </div>
    </>
  );
}

export default SearchBar;