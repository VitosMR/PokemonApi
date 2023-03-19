import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';
import PokemonCard from "../PokemonCard";
import style from "./style.css";

function PokemonList({ allPokemon }) {
  const [isCard, setCard] = useState([]);

  return (
    <div className="displey">
      <ol>
        {allPokemon.map((pokemon, index) => (
          <Link to={`/about/${pokemon.id}`}>
            <li
              key={index}
              className="table"
              onMouseOver={() => {
                setCard(pokemon);
              }}
              onMouseLeave={() => {
                setCard("");
              }}
            >

              <div className="pokemon">
                <img
                  src={pokemon.sprites.other.dream_world.front_default}
                  className="icon"
                  alt=""
                />
                <p>{pokemon.name.toUpperCase()}</p>

              </div>
              <p>id: {pokemon.id}</p>

            </li>
          </Link>
        ))}
      </ol>

      {isCard.length === 0 ? null : <PokemonCard pokemon={isCard} />}
    </div >
  );
}

export default PokemonList;
