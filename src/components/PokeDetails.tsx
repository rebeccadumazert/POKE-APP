import { useEffect, useState } from "react";
import { getPokemon } from "../api/pokeApi";
import { useParams } from "react-router-dom";

type pokemonApiOutput = {
  name: string;
  id: number;
  weight: number;
};

function PokeDetails() {
  const [pokemon, setPokemon] = useState<pokemonApiOutput>();

  const params = useParams();
  const pokeName = params.pokeName as string;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getPokemon(pokeName);
        setPokemon(response);
      } catch (error) {
        console.error("Erreur lors de la récupération des pokémons :", error);
      }
    }
    fetchData();
  }, [pokeName]);

  console.log(pokemon);
  return <div>{pokemon ? <h1>{pokemon.name} coucou</h1> : "loading"}</div>;
}

export default PokeDetails;
