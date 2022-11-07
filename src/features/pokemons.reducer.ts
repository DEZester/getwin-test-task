import { IAction, IPokemonsState } from "../types/interfaces";
import { POKEMONS_DATA } from "./pokemons.actions";

const initialState: IPokemonsState = {
  pokemonsList: [1, 2, 3],
};

const pokemonsReducer = (
  state: IPokemonsState = initialState,
  action: IAction
): IPokemonsState => {
  switch (action.type) {
    default:
      return state;
  }
};

export default pokemonsReducer;
