import axios from "axios";

const baseUrl: string =
  "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";

// export const fetchPokemons = () =>
//   fetch(baseUrl)
//     .then((response) => response.json())
//     .then((result) => console.log(result));

export const fetchPokemons = async () => {
  const response = await axios.get(baseUrl);
  return response.data.results;
};
