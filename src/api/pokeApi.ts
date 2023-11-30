import axios from "axios";

interface Pokemon {
  name: string;
  url: string;
}

export async function getPokemons() {
  const { data } = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/?limit=1300`,
  );
  const pokeNames = data.results.map(({ name }: Pokemon) => name);
  return pokeNames;
}

export async function getPokemon(pokeName: string | undefined) {
  const response = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${pokeName}`,
  );
  return response.data;
}
