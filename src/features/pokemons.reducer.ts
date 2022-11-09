import { IAction, IPokemonsState } from "../types/interfaces";
import { POKEMONS_DATA } from "./pokemons.actions";

const initialState: IPokemonsState = {
  pokemonsList: [],
};

const pokemonsReducer = (
  state: IPokemonsState = initialState,
  action: IAction
): IPokemonsState => {
  switch (action.type) {
    case POKEMONS_DATA:
      const { pokemonsData } = action.payload;
      return {
        ...state,
        pokemonsList: pokemonsData,
      };
    default:
      return state;
  }
};

export default pokemonsReducer;
