import React, { useState, useEffect } from "react";
import "./CardInfo.css";
import arrowLeft from "../../assets/arrow-left.svg";
import weight from "../../assets/Weight.svg";
import height from "../../assets/Height.svg";

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
      <div className="tokemItems">
        <button className="arrowCardInfo">
          <img src={arrowLeft} alt="" />
        </button>
        <h3 className="pokeName">{pokemon.Name} </h3>
        <p>{pokemon.Number}</p>
      </div>
      <img src={Pokeball} alt="Pokeball" className="pokeBall" />
      <img src={pokemon.Image} alt="Pokemon" className="pokeImage" />
      <div className="whiteContent">
        <div className="classes">
          <p
            className="mainClass"
            style={{ backgroundColor: pokemon.Main_Color }}
          >
            {pokemon.Main_Class}
          </p>
          <p
            className="secondaryClass"
            style={{ backgroundColor: pokemon.Secondary_Color }}
          >
            {pokemon.Secondary_Class}
          </p>
        </div>
        <h5 className="headerabout" style={{ color: pokemon.Main_Color }}>
          About
        </h5>
        <article className="contentAbout">
          <div className="infoAbout1">
            <img src={weight} alt="weight" className="spaceImage" />
            <p>{pokemon.Weigth}</p>
            <p className="spaceParagraph spaceParagraph1">Weight</p>
          </div>
          <div className="infoAbout2">
            <img src={height} alt="height" className="spaceImage" />
            <p>{pokemon.Height}</p>
            <p className="spaceParagraph spaceParagraph2">Height</p>
          </div>
          <div className="infoAbout3">
            <p>{pokemon.Main_Move}</p>
            <p>{pokemon.Secondary_Move}</p>

            <p className="spaceParagraph">Moves</p>
          </div>
        </article>
      </div>
    </div>
  );
}

export default CardInfo;
