import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PokemonContent from "./PokemonContent/index";
import Homestyle from "./Homestyle.css"

const Home = () => {
  const [data, setData] = useState([]);
  const [allPokemon, setAllPokemon] = useState([]);
  useEffect(
    () => async () => {
      try {
        const result = await axios(
          "https://pokeapi.co/api/v2/pokemon?limit=100"
        );
        setData(result.data.results);

        result.data.results.map(async (item) => {
          const result = await axios(item.url);
          setAllPokemon((oldArray) => [...oldArray, result.data]);
        });
      } catch {}
    },
    []
  );

  return (
    <>
      <div>
        {/* <Link to="/about">
          <div className="App">about</div>
        </Link> */}

        <div className="search"></div>
        <PokemonContent allPokemon={allPokemon}/>
        <div className="paginate"></div>
      </div>
    </>
  );
};

export default Home;
