import {
  fetchPokemonsList,
  fetchPokemon,
  fetchPokemonsListByType,
} from "../gateway/gateway";
import {
  IPokemonsAction,
  IPokemonAction,
  IPokemonsActionByType,
} from "../types/interfaces";

export const POKEMONS_DATA: string = "POKEMONS_DATA";

export const POKEMON_DATA: string = "POKEMON_DATA";

export const pokemonsData = (pokemonsData: any): IPokemonsAction => {
  return {
    type: POKEMONS_DATA,
    payload: {
      pokemonsData,
    },
  };
};

export const pokemonData = (pokemonData: any): IPokemonAction => {
  return {
    type: POKEMON_DATA,
    payload: {
      pokemonData,
    },
  };
};

export const getPokemonsListData = () => {
  return function (dispatch: any) {
    fetchPokemonsList().then((pokemonsList) => {
      dispatch(pokemonsData(pokemonsList));
    });
  };
};

export const getPokemonData = (pokemonUrl: string) => {
  return function (dispatch: any) {
    fetchPokemon(pokemonUrl).then((pokemon) => {
      dispatch(pokemonData(pokemon));
    });
  };
};

export const getPokemonsListDataByType = (url: string) => {
  return function (dispatch: any) {
    fetchPokemonsListByType(url).then((pokemonsList) => {
      dispatch(pokemonsData(pokemonsList));
    });
  };
};
