import { useState } from "react";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState({});
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonName, setPokemonName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchPokemonList() {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=50`
      );

      setPokemonList(response.data.results);
    }
    if (!pokemonList.length) {
      fetchPokemonList();
    }
  }, []);

  return (
    <>
      <div className="container-form">
        {pokemonList.map((pokemon) => (
          <Link to={`pokemon/${pokemon.name}`}>{pokemon.name}</Link>
        ))}
      </div>
      {loading && <p>Loading ...</p>}
      {error && <p className="error">{error}</p>}
      {selectedPokemon.name && (
        <img
          className="pokemon"
          src={`${selectedPokemon.sprites.front_shiny}`}
        />
      )}
    </>
  );
}

export default App;
