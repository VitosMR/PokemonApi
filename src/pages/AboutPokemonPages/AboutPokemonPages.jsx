import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './AboutPokemonPages.module.css';

const AboutPokemonPages = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const pokemonId = location.pathname.split("/")[2];
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const pokemonResponses = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
      const pokemonData = pokemonResponses.data;
      setPokemonData(pokemonData);
    }
    fetchData();
  }, [pokemonId]);

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  return (
    <div className={styles.pokemonContainer}>
      <button className={styles.button} onClick={handleBackButtonClick}>
        Back
      </button>
      <div className={styles.pokemonInfo}>
        <h2 className={styles.pokemonName}>{pokemonData.name}</h2>
        <div className={styles.pokemonImageContainer}>
          <img 
            className={styles.pokemonImage} 
            src={pokemonData.sprites?.other?.dream_world?.front_default || pokemonData.sprites?.front_default} 
            alt={pokemonData.name} 
          />
        </div>
        <div className={styles.pokemonDetails}>
          <p>
            <span className={styles.pokemonDetailLabel}>Type: {pokemonData.types?.map(type => type.type.name).join(", ")}</span>
          </p>
          <p>
            <span className={styles.pokemonDetailLabel}>Height: {pokemonData.height}</span> 
          </p>
          <p>
            <span className={styles.pokemonDetailLabel}>Weight: {pokemonData.weight}</span> 
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPokemonPages;
