import React from "react";
import "./SearchBar.css";
import search from "../../assets/search.svg";

function SearchBar() {
  return (
    <>
      <div className="searchBar">
        <input type="text" className="filterPokemon" placeholder="Search" />
        <button className="btnFilter">#</button>
      </div>
    </>
  );
}

export default SearchBar;
