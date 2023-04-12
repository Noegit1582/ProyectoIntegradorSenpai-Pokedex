import React from "react";
import "./SearchBar.css";
import search from "../../assets/search.svg";

import { useState } from "react";

function SearchBar(props) {
  const handleChange = (e) => {
    e.preventDefault();
    const pokemonFilter = props.pokedex.filter((item) => {
      return item.Name.includes(e.target.value);
    });
    props.setPokedex(pokemonFilter);
    console.log(pokemonFilter);
  };

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
