import React, { useState } from "react";
import PokemonCard from "./PokemonCard";
import PokemonList from "./PokemonList/index";
import style from "./../PokemonContent/style.css"
import Pagination from "../../components/Pagination/index"

function PokemonContent({ allPokemon }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  const indexLastPost = currentPage * postsPerPage;
  const indexFirstPost = indexLastPost - postsPerPage;

  const sortedPokemon = allPokemon.sort((a, b) => {
    return a.id - b.id;
  });

  const currentPosts = sortedPokemon.slice(indexFirstPost, indexLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="content">
      <PokemonList allPokemon={currentPosts} />
      <Pagination postsPerPage={postsPerPage} totalPosts={allPokemon.length} paginate={paginate}/>
    </div>
  );
}

export default PokemonContent;
