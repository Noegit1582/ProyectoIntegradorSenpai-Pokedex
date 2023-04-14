import React from "react";
import "./SearchBar.css";
import search from "../../assets/search.svg";

import { useState } from "react";
import Pokedex from "../../Data-Base-Pokedex/DataPokedex";

function SearchBar(props) {
  const [clickButton, setClickButton] = useState(false);

  function handleChange(e) {
    /*  e.preventDefault(); */
    console.log(e.target.value);
    props.setPokedex(
      Pokedex.filter((item) => {
        return item.Name.toLowerCase().includes(e.target.value);
      })
    );
  }
  /*   ************* FILTRO NOMBRE ********** */
  const onclickName = () => {
    console.log("pepito");
    const orderName = Pokedex.sort((a, b) => {
      if (a.Name < b.Name) {
        return -1;
      }
      if (a.Name > b.Name) {
        return 1;
      }
      // a debe ser igual b
      return 0;
    });
    console.log(orderName);
    props.setPokedex([...orderName]);
  };

  /*   ************* FILTRO NUMERO ********** */
  const onclickNumber = () => {
    console.log("pepito");
    const orderNumber = Pokedex.sort((a, b) => {
      if (a.Number < b.Number) {
        return -1;
      }
      if (a.Number > b.Number) {
        return 1;
      }
      // a debe ser igual b
      return 0;
    });
    console.log(orderNumber);
    props.setPokedex([...orderNumber]);
  };

  const showSort = () => {
    if (clickButton === true) {
      setClickButton(false);
    } else {
      setClickButton(true);
    }

    /*
    otra forma de mostrar el sort 
    setClickButton(!clickButton); 
    */
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
        <button className="btnFilter" onClick={showSort}>
          #
        </button>
        {clickButton ? (
          <div className="divContainer">
            <ul className="listFilter">
              <p>sort by:</p>
              <div className="divFilter">
                <li>
                  <input
                    type="radio"
                    name="status"
                    className="radioButton"
                    onClick={onclickName}
                  />

                  <label className="spaceRadioButton">Name</label>
                </li>
                <li>
                  <input
                    type="radio"
                    name="status"
                    className="radioButton"
                    onClick={onclickNumber}
                  />
                  <label className="spaceRadioButton">Number</label>
                </li>
              </div>
            </ul>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default SearchBar;
