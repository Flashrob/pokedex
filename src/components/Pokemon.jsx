import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const Pokemon = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    async function fetchPokemon() {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      );

      setPokemon(response.data);
    }
    if (!pokemon.name) {
      fetchPokemon();
    }
  }, []);

  const hasLoaded = !!pokemon.name;

  return (
    <>
      {hasLoaded && <p>{pokemon.name}</p>}
      {hasLoaded && <img src={pokemon.sprites.front_shiny} />}
      {hasLoaded && (
        <p>
          Type:
          <Link to={`/types/:${pokemon.types[0].type.name}`}>
            {pokemon.types[0].type.name}
          </Link>
        </p>
      )}
    </>
  );
};
