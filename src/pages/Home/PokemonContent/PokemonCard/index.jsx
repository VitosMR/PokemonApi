import React from "react";
import { useState } from "react";
import style from "./../PokemonCard/style.css";

function PokemonCard({ pokemon }) {

    return (
      
      <div className="flex">
        <ol className="container">
            <div className="card">
              <div className="stop">
                <p>id: {pokemon.id}</p>
                <p>{pokemon.name}</p>
              </div>

              <li className="li">
                <div className="pokemon_card">
                  <img
                    src={pokemon.sprites.other.dream_world.front_default}
                    alt=""
                  />
                </div>
              </li>
              <li className="otstup">
                type:
                {pokemon.types.map((pokemonType) => (
                  <p className="pad">{pokemonType.type.name}</p>
                ))}
              </li>
              <li className="li">weight:{pokemon.weight}</li>
              <li className="li">height:{pokemon.height}</li>
            </div>
        </ol>
      </div>
    );
  }

export default PokemonCard;
