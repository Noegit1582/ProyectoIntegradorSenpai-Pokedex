import React, { useState, useEffect } from "react";
import "./CardInfo.css";

import { useParams } from "react-router-dom";
import Pokeball from "../../assets/Pokeball.png";
import Pokedex from "../../Data-Base-Pokedex/DataPokedex.js";

function CardInfo(props) {
  const { name } = useParams();

  const pokemon = Pokedex.find((pokemon) => {
    return pokemon.Name === name;
  });

  console.log(name);
  return (
    <div
      className="cardContainer"
      style={{ backgroundColor: pokemon.Main_Color }}
    >
      este es mi div
      <div className="">
        <button src=""></button>
        <h3>{pokemon.Name}</h3>
        <p>{pokemon.Number}</p>
      </div>
      <img src={Pokeball} alt="" />
      <img src={pokemon.Image} alt="" />
      <div className="classes">
        <p>{pokemon.Main_Class}</p>
        <p>{pokemon.Secondary_Class}</p>
      </div>
      <p></p>
    </div>
  );
}

export default CardInfo;
