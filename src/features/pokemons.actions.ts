import { fetchPokemons } from "../gateway/gateway";
import { IAction } from "../types/interfaces";

export const POKEMONS_DATA: string = "POKEMONS_DATA";

export const pokemonsData = (pokemonsData: any): IAction => {
  return {
    type: POKEMONS_DATA,
    payload: {
      pokemonsData,
    },
  };
};

export const getPokemonsData = () => {
  return function (dispatch: any) {
    fetchPokemons().then((pokemonsList) => {
      dispatch(pokemonsData(pokemonsList));
    });
  };
};
