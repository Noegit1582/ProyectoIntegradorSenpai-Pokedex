import React from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";

function Card(props) {
  const pokemon = props.pokemon;

  const navigate = useNavigate();
  const onclick = () => {
    navigate(`/${pokemon.Name}`);
  };
  return (
    <section className="gContainer" onClick={onclick}>
      <div className="containerCard">
        <p className="pokemonNumber">{pokemon.Number} </p>
        <img src={pokemon.Image} alt="Pokemon" className="imgCard" />
        <div className="pokemonName">{pokemon.Name}</div>
      </div>
    </section>
  );
}

export default Card;
