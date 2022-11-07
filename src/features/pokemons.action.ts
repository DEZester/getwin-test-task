import { Action } from "../types/interfaces";

export const POKEMONS_DATA: string = "POKEMONS_DATA";

export const pokemonsData = (pokemonsData: any): Action => {
  return {
    type: POKEMONS_DATA,
    payload: {
      pokemonsData,
    },
  };
};
