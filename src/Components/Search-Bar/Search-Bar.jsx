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

/* const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  const filteredPokemon = pokemonList.filter(pokemon => {
    const regex = new RegExp(searchTerm, 'gi');
    return pokemon.name.match(regex);
  });

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleSearchChange} placeholder="Buscar por nombre" />
     
    </div>
  );
} */
