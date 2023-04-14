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

  const [pokemonTest, setPokemonTest] = useState(pokemon);
  const navigate = useNavigate();

  const handlePrevious = () => {
    const previousid = pokemon.id - 1;
    const pokemonPrevious = Pokedex.find(
      (pokemon) => pokemon.id === previousid
    );
    if (pokemonPrevious) {
      setPokemonTest(pokemonPrevious);
      navigate(`/${pokemonPrevious.Name}`);
    } else {
      navigate(`/${pokemon.Name}`);
    }
  };
  const handleNext = () => {
    const forwardid = pokemon.id + 1;
    const pokemonForward = Pokedex.find((pokemon) => pokemon.id === forwardid);
    if (pokemonForward) {
      setPokemonTest(pokemonForward);
      navigate(`/${pokemonForward.Name}`);
    } else {
      navigate(`/${pokemon.Name}`);
    }
  };

  return (
    <>
      <div
        className="cardContainer"
        style={{ backgroundColor: pokemonTest.Main_Color }}
      >
        <div className="tokemItems">
          <Link to="/">
            <img src={arrowLeft} alt="" />
          </Link>

          <h3 className="pokeName">{pokemonTest.Name} </h3>
          <p>{pokemonTest.Number}</p>
        </div>
        <img src={Pokeball} alt="Pokeball" className="pokeBall" />
        <img src={pokemonTest.Image} alt="Pokemon" className="pokeImage" />
        <div className="carousel">
          <button onClick={handlePrevious} className="btnLeft">
            &lt;
          </button>
          <button onClick={handleNext} className="btnRight">
            &gt;
          </button>
        </div>
        <div className="whiteContent">
          <div className="classes">
            <p
              className="mainClass"
              style={{ backgroundColor: pokemonTest.Main_Color }}
            >
              {pokemonTest.Main_Class}
            </p>
            <p
              className="secondaryClass"
              style={{ backgroundColor: pokemonTest.Secondary_Color }}
            >
              {pokemonTest.Secondary_Class}
            </p>
          </div>
          <h5 className="headerabout" style={{ color: pokemonTest.Main_Color }}>
            About
          </h5>

          <article className="contentAbout">
            <div className="infoAbout1">
              <img src={weight} alt="weight" className="spaceImage" />
              <p>{pokemonTest.Weigth}</p>
              <p className="spaceParagraph spaceParagraph1">Weight</p>
            </div>
            <div className="infoAbout2">
              <img src={height} alt="height" className="spaceImage" />
              <p>{pokemonTest.Height}</p>
              <p className="spaceParagraph spaceParagraph2">Height</p>
            </div>
            <div className="infoAbout3">
              <p>{pokemonTest.Main_Move}</p>
              <p>{pokemonTest.Secondary_Move}</p>

              <p className="spaceParagraph">Moves</p>
            </div>
          </article>
          <p className="pokemonDescription">{pokemonTest.Description}</p>
          <h5 className="headerabout" style={{ color: pokemonTest.Main_Color }}>
            Base Stats
          </h5>

          <article className="footerStatics">
            <div className="staticsName">
              <p style={{ color: pokemonTest.Main_Color }}>HP</p>
              <p style={{ color: pokemonTest.Main_Color }}>ATK</p>
              <p style={{ color: pokemonTest.Main_Color }}>DEF</p>
              <p style={{ color: pokemonTest.Main_Color }}>SATK</p>
              <p style={{ color: pokemonTest.Main_Color }}>SDEF</p>
              <p style={{ color: pokemonTest.Main_Color }}>SPD</p>
            </div>
            <div className="staticsNumber">
              <p>{pokemonTest.Stats.HP}</p>
              <p>{pokemonTest.Stats.ATK}</p>
              <p>{pokemonTest.Stats.DEF}</p>
              <p>{pokemonTest.Stats.SATK}</p>
              <p>{pokemonTest.Stats.SDEF}</p>
              <p>{pokemonTest.Stats.SPD}</p>
            </div>
            <div className="staticBar">
              <progress
                max="200"
                value={pokemonTest.Stats.HP}
                className="barProgress"
                style={{ accentColor: pokemonTest.Main_Color }}
              ></progress>
              <progress
                max="200"
                style={{ accentColor: pokemonTest.Main_Color }}
                value={pokemonTest.Stats.ATK}
                className="barProgress"
              ></progress>
              <progress
                max="200"
                style={{ accentColor: pokemonTest.Main_Color }}
                value={pokemonTest.Stats.DEF}
                className="barProgress"
              ></progress>
              <progress
                max="200"
                style={{ accentColor: pokemonTest.Main_Color }}
                value={pokemonTest.Stats.SATK}
                className="barProgress"
              ></progress>
              <progress
                max="200"
                style={{ accentColor: pokemonTest.Main_Color }}
                value={pokemonTest.Stats.SDEF}
                className="barProgress"
              ></progress>
              <progress
                max="200"
                style={{ accentColor: pokemonTest.Main_Color }}
                value={pokemonTest.Stats.SPD}
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
