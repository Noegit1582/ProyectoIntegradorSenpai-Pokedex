import React from "react";

function Card(props) {
  const pokemon = props.pokemon;
  return (
    <div className="containerCard">
      <p>{pokemon.Number}</p>
      <img src={pokemon.Image} alt="Pokemon" />
      <h3>{pokemon.Name}</h3>
    </div>
  );
}

export default Card;
