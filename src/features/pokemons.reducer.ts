import { IReducerAction, IPokemonsState } from "../types/interfaces";
import { POKEMONS_DATA, POKEMON_DATA } from "./pokemons.actions";

const initialState: IPokemonsState = {
  pokemonsList: [],
  pokemon: null,
};

const pokemonsReducer = (
  state: IPokemonsState = initialState,
  action: IReducerAction
): IPokemonsState => {
  switch (action.type) {
    case POKEMONS_DATA:
      const { pokemonsData } = action.payload;
      return {
        ...state,
        pokemonsList: pokemonsData,
      };
    case POKEMON_DATA:
      const { pokemonData } = action.payload;
      return {
        ...state,
        pokemon: pokemonData,
      };
    default:
      return state;
  }
};

export default pokemonsReducer;
