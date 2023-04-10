import React from "react";
import "./Card.css";

function Card(props) {
  const pokemon = props.pokemon;
  return (
    <section className="gContainer">
      <div className="containerCard">
        <p className="pokemonNumber">{pokemon.Number} </p>
        <img src={pokemon.Image} alt="Pokemon" className="imgCard" />
        <h3 className="pokemonName">{pokemon.Name}</h3>
      </div>
    </section>
  );
}

export default Card;
