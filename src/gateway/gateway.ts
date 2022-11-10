import axios from "axios";

const baseUrl: string =
  "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";

export const fetchPokemonsList = async () => {
  const response = await axios.get(baseUrl);
  return response.data.results;
};

export const fetchPokemon = async () => {
  const response = await axios.get("https://pokeapi.co/api/v2/pokemon/6/");
  return response.data;
};
