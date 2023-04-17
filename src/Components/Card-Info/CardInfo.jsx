import React, { useState, useEffect } from "react";
import "./CardInfo.css";

import arrowLeft from "../../assets/arrow-left.svg";
import weight from "../../assets/Weight.svg";
import height from "../../assets/Height.svg";

import { useParams, Link, useNavigate } from "react-router-dom";
import Pokeball from "../../assets/Pokeball.png";
import Pokedex from "../../Data-Base-Pokedex/DataPokedex.js";

function CardInfo(props) {
  const { name } = useParams();

  const pokemon = Pokedex.find((pokemon) => {
    return pokemon.Name === name;
  });

  const currentIndex = Pokedex.findIndex((poke) => poke.id === pokemon.id);
  const navigate = useNavigate();
  console.log(currentIndex);
  const handlePrevious = () => {
    /*    const previousid = pokemon.id - 1;
    const pokemonPrevious = Pokedex.find(
      (pokemon) => pokemon.id === previousid
    );
    if (pokemonPrevious) {
      setpokemon(pokemonPrevious);
      navigate(`/${pokemonPrevious.Name}`);
    } else {
      navigate(`/${pokemon.Name}`);
    } */
    const previus = Pokedex[currentIndex - 1];
    navigate(`/${previus.Name}`);
  };
  const handleNext = () => {
    const forwardid = pokemon.id + 1;
    const pokemonForward = Pokedex.find((pokemon) => pokemon.id === forwardid);
    console.log(pokemon.Name);

    navigate(`/${pokemonForward.Name}`);
  };

  return (
    <>
      <div
        className="cardContainer"
        style={{ backgroundColor: pokemon.Main_Color }}
      >
        <div className="tokemItems">
          <Link to="/">
            <img src={arrowLeft} alt="" />
          </Link>

          <h3 className="pokeName">{pokemon.Name} </h3>
          <p>{pokemon.Number}</p>
        </div>
        <div className="contentImages">
          <img src={Pokeball} alt="Pokeball" className="pokeBall" />
          <img src={pokemon.Image} alt="Pokemon" className="pokeImage" />
        </div>
        <div className="carousel">
          {pokemon.id > 1 && (
            <button onClick={handlePrevious} className="btnLeft">
              &lt;
            </button>
          )}
          {Pokedex.length !== pokemon.id && (
            <button onClick={handleNext} className="btnRight">
              &gt;
            </button>
          )}
        </div>
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
          <p className="pokemonDescription">{pokemon.Description}</p>
          <h5 className="headerabout" style={{ color: pokemon.Main_Color }}>
            Base Stats
          </h5>

          <article className="footerStatics">
            <div className="staticsName">
              <p style={{ color: pokemon.Main_Color }}>HP</p>
              <p style={{ color: pokemon.Main_Color }}>ATK</p>
              <p style={{ color: pokemon.Main_Color }}>DEF</p>
              <p style={{ color: pokemon.Main_Color }}>SATK</p>
              <p style={{ color: pokemon.Main_Color }}>SDEF</p>
              <p style={{ color: pokemon.Main_Color }}>SPD</p>
            </div>
            <div className="staticsNumber">
              <p>{pokemon.Stats.HP}</p>
              <p>{pokemon.Stats.ATK}</p>
              <p>{pokemon.Stats.DEF}</p>
              <p>{pokemon.Stats.SATK}</p>
              <p>{pokemon.Stats.SDEF}</p>
              <p>{pokemon.Stats.SPD}</p>
            </div>
            <div className="staticBar">
              <progress
                max="200"
                value={pokemon.Stats.HP}
                className="barProgress"
                style={{ accentColor: pokemon.Main_Color }}
              ></progress>
              <progress
                max="200"
                style={{ accentColor: pokemon.Main_Color }}
                value={pokemon.Stats.ATK}
                className="barProgress"
              ></progress>
              <progress
                max="200"
                style={{ accentColor: pokemon.Main_Color }}
                value={pokemon.Stats.DEF}
                className="barProgress"
              ></progress>
              <progress
                max="200"
                style={{ accentColor: pokemon.Main_Color }}
                value={pokemon.Stats.SATK}
                className="barProgress"
              ></progress>
              <progress
                max="200"
                style={{ accentColor: pokemon.Main_Color }}
                value={pokemon.Stats.SDEF}
                className="barProgress"
              ></progress>
              <progress
                max="200"
                style={{ accentColor: pokemon.Main_Color }}
                value={pokemon.Stats.SPD}
                className="barProgress"
              ></progress>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export default CardInfo;
