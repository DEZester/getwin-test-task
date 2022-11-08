import { IAction, IPokemonsState, IPokemonsState2 } from "../types/interfaces";
import { POKEMONS_DATA } from "./pokemons.actions";

const initialState: IPokemonsState2 = {
  pokemonsList: [
    { name: "Pikachu", type1: "electric" },
    { name: "Tortwig", type1: "leaf", type2: "ground" },
    { name: "Charizard", type1: "fire" },
    { name: "Arzeus", type1: "all", type2: "electric" },
  ],
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
