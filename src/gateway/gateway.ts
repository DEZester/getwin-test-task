import axios from "axios";

const baseUrl: string =
  "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";

const typesUrl: string = "https://pokeapi.co/api/v2/type";

export const fetchPokemonsList = async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data.results;
  } catch (error) {
    alert(error);
  }
};

export const fetchPokemon = async (pokemonUrl: string) => {
  try {
    const response = await axios.get(pokemonUrl);
    return response.data;
  } catch (error) {
    alert(error);
  }
};

export const fetchTypes = () =>
  axios.get(typesUrl).then((response) => response.data);

export const fetchPokemonsListByType = async (pokemonUrl: string) => {
  try {
    const response = await axios.get(pokemonUrl);
    return response.data.pokemon;
  } catch (error) {
    alert(error);
  }
};
